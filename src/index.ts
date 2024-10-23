import { logger, logError } from './configs/logger';

logger.info('a=1');
logger.warn('temperature is too high');
logger.error('failed to connect');
logger.debug('processing data');

logger.info('user logged in', { username: 'mayuri' });