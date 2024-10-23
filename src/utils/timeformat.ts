export const formatDateTime = (date: Date): string => {
    return date.toLocaleString('en-US', {
        timeZone: 'Asia/Jakarta',
        hour12: false,
    });
};