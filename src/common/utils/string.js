export const format = (string, ...args) => {
  let formatted = string;

  // eslint-disable-next-line no-plusplus
  for (let i = 0, len = args.length; i < len; ++i) {
    formatted = formatted.replace(new RegExp(`\\{${i}\\}`, 'gi'), args[i]);
  }

  return formatted;
};
