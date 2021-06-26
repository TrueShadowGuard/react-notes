export default function parseTags(text: string) {
    const match = text.match(/#([^!?., ])+/g)
    console.log('parsed', match)
    return match ? match.map(x => x.slice(1).toLowerCase()) : [];
}
