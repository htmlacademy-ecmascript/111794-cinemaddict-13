export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomFloat = (a = 0, b = 10) => {
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);

  return (lower + Math.random() * (upper - lower + 1)).toFixed(1);
};


export const generateUniqueValues = (items) => {
  const str = [];
  for (let i = 0; i < getRandomInteger(1, items.length - 1); i++) {
    str.push(items[Math.floor(Math.random() * items.length)]);
  }
  const unique = new Set(str);

  return Array.from(unique);
};

export const generateValue = (items) => {
  const randomIndex = getRandomInteger(0, items.length - 1);

  return items[randomIndex];
};

export const getRandomBool = () => {
  return !!getRandomInteger();
};

export const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1)
  ];
};
