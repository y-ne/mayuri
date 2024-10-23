import { format } from 'winston';
const { combine, timestamp, printf, colorize, align } = format;

export const createLogFormat = () => {
  return combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    colorize({ all: true }),
    align(),
    printf(formatLogMessage)
  );
};

const formatLogMessage = (info: any) => {
  const { timestamp, level, message, ...metadata } = info;
  const ts = timestamp.slice(11, 19);
  const metadataStr = Object.keys(metadata).length 
    ? JSON.stringify(metadata, null, 2) 
    : '';

  return `[${ts}] ${level.padEnd(7)}: ${message} ${metadataStr}`;
};