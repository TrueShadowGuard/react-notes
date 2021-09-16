export default function parseTags(text: string) {
    const match = text.match(/#[^ !;,.]+?(\n|\b)/gmu);
    return match ? match.map(x => x.slice(1).toLowerCase()) : [];
}
