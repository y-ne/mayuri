import winston from 'winston';
import { LOG_LEVELS, LOG_COLORS, DEFAULT_LOG_LEVEL } from './constants';
import { createLogFormat } from './format';
import { createTransports } from './transports';

// Add custom colors to winston
winston.addColors(LOG_COLORS);

// Create and export the logger instance
export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || DEFAULT_LOG_LEVEL,
  levels: LOG_LEVELS,
  format: createLogFormat(),
  transports: createTransports(),
});

// Optional: Helper functions for common logging patterns
export const logError = (message: string, error: Error) => {
  logger.error(message, {
    error: error.message,
    stack: error.stack,
    name: error.name,
  });
};

export const logRequest = (method: string, path: string, statusCode: number, duration: number) => {
  logger.http('HTTP Request', {
    method,
    path,
    statusCode,
    duration: `${duration}ms`,
  });
};