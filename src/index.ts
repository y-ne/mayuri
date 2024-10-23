import { logger } from './configs/logger';
import { formatDateTime } from './utils/timeformat';

const today: Date = new Date();

logger.info('formated time', { 
    today: formatDateTime(today)
});