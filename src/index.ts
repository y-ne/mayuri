import { logger } from './configs/logger';

const today: Date = new Date();

logger.info('formated time', { 
    today: today.toLocaleString(
        'en-US',
        {
            timeZone: 'Asia/Jakarta',
            hour12: false,
        }
    ),
});