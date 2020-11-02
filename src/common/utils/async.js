/**
 * Generic promise based sleep function
 *
 * @param {number} ms Number of milliseconds to sleep
 * @returns {Promise}
 *
 * @example
 * await sleep(500).then(() => {
 *  // will be executed after 500 ms
 * });
 */
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
