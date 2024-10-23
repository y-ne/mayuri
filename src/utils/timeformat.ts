export const formatDateTime = (date: Date): string => {
    return date.toLocaleString('id-ID', {
        timeZone: 'Asia/Jakarta',
        hour12: false,
        dateStyle: 'long',
        timeStyle: 'short',
    });
};

export const formatNominal = (nominal: number): string => {
    return nominal.toLocaleString('id-ID');
}