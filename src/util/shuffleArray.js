export default function shuffleArray(array) {
  const copy = [...array];
  const shuffledArray = [];

  for (let i = 0; i < array.length; i++) {
    const index = Math.floor(Math.random() * copy.length);

    shuffledArray.push(copy[index]);
    copy.splice(index, 1);
  }

  return shuffledArray;
}
