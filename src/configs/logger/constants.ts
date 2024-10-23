import { LogLevels, LogColors } from './types';

export const LOG_LEVELS: LogLevels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

export const LOG_COLORS: LogColors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

export const DEFAULT_LOG_LEVEL = 'debug';