export const wait = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

// TODO Overload function like so to allow it to take a set of allowed indices: https://stackoverflow.com/questions/39187614/typescript-overload-arrow-functions
export const generateRandomSequence = (
  length: number,
  max: number,
  min = 0
) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  let res = [];
  let last;
  for (let i = 0; i < length; i++) {
    const newIndex = Math.floor(Math.random() * (max - min) + min);
    if (last === newIndex) continue;
    res.push(newIndex);
    last = newIndex;
  }
  return res;
};
