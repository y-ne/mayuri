import { logger } from './configs/logger';
import { formatDateTime, formatNominal } from './utils/timeformat';

const today: Date = new Date();

const nominal: number = 10000;

logger.info('formated time', { 
    today: formatDateTime(today),
});


logger.info('formated currency', { 
    nominal: formatNominal(nominal),
});