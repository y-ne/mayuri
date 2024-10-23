import winston from 'winston';
import path from 'path';

export const createTransports = () => {
  const logsDir = path.join(process.cwd(), 'logs');
  
  return [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: path.join(logsDir, 'error.log'),
      level: 'error',
    }),
    new winston.transports.File({
      filename: path.join(logsDir, 'combined.log'),
    }),
  ];
};