export function slugify(input?: string) {
    if (!input) return '';

    // make lower case and trim
    var slug = input.toLowerCase().trim();

    // NFC compose → NFD decompose & remove accents → NFC recompose
    // This removes Latin accents (é→e) while preserving Japanese dakuten (が stays が)
    slug = slug.normalize('NFC').normalize('NFD').replace(/[\u0300-\u036f]/g, '').normalize('NFC');

    // remove invalid URL chars, keep letters (including Japanese), numbers, spaces, and hyphens
    slug = slug.replace(/[^\p{L}\p{N}\s-]/gu, '').trim();

    // replace multiple spaces or hyphens with a single hyphen
    slug = slug.replace(/[\s-]+/g, '-');

    return slug;
}
