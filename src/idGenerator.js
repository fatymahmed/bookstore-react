const ids = [];
const generateUniqueId = () => {
  let number = Math.floor(Math.random() * 100);
  while (ids.includes(number)) {
    number = Math.floor(Math.random() * 100);
  }
  ids.push(number);
  return number;
};

export default generateUniqueId;
