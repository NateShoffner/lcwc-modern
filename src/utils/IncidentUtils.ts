import { normalizeName } from 'normalize-text'

export function normalizeAgency(agency: string) {
    const reserved = ['FD', 'EMS'];
    const agencySplit = agency.split(' ');

    for (let i = 0; i < agencySplit.length; i++) {
        const word = agencySplit[i];
        if (reserved.includes(word)) {
            continue;
        }

        if (word.length <= 2) {
            if (word[0] === '(' && word[word.length - 1] === ')') {
                continue;
            }
        }

        agencySplit[i] = normalizeName(word);
    };

    return agencySplit.join(' ');
}