export const _Shrink = (text: string, count: number) => {
  const cleanedText = text.replace(/\n/g, ''); // Remove newline characters
  return cleanedText.length < count
    ? cleanedText
    : `${cleanedText.substring(0, count)}...`;
};
export function capitalizeFirstLetter(word: string): string {
  return word[0]?.toUpperCase() + word.slice(1);
}
