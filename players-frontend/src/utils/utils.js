export const shuffle = (array) => {
  for (let i = array.length; i; i--) {
    const randomized = Math.floor(Math.random() * i);
    [array[i - 1], array[randomized]] = [array[randomized], array[i - 1]];
  }
  return array
}
