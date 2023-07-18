import { normalizeName } from 'normalize-text'

export function normalizeDescription(description: string) {
    const descriptionSplit = description.split(' ');

    for (let i = 0; i < descriptionSplit.length; i++) {
        const word = descriptionSplit[i];

        if (word.length <= 3) {
            continue;
        }

        descriptionSplit[i] = word.replace('-', ' ');
        descriptionSplit[i] = normalizeName(descriptionSplit[i]);
    };

    return descriptionSplit.join(' ');
}

export function normalizeAgency(agency: string) {
    const reserved = ['FD', 'EMS'];
    const agencySplit = agency.split(' ');

    for (let i = 0; i < agencySplit.length; i++) {
        const word = agencySplit[i];
        if (reserved.includes(word)) {
            continue;
        }

        // preserve contents within parenthesis
        if (word.length > 2 && word[0] === '(' && word[word.length - 1] === ')') {
            continue;
        }

        agencySplit[i] = normalizeName(word);
    };

    return agencySplit.join(' ');
}