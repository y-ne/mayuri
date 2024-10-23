export const formatDateTime = (date: Date): string => {
    return date.toLocaleString('id-ID', {
        timeZone: 'Asia/Jakarta',
        hour12: false,
        dateStyle: 'medium',
        timeStyle: 'long',
    });
};