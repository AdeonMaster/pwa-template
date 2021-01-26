/**
 * Used to format strings
 *
 * @param string String to be formatted
 * @param args Arguments to be applied
 *
 * @example
 * format('The quick brown {0} jumps over the lazy {1}', 'fox', 'dog');
 */
export const format = (string, ...args) => {
  let formatted = string;

  // eslint-disable-next-line no-plusplus
  for (let i = 0, len = args.length; i < len; ++i) {
    formatted = formatted.replace(new RegExp(`\\{${i}\\}`, 'gi'), args[i]);
  }

  return formatted;
};
