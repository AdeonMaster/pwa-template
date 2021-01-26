/**
 * Generic promise based sleep function
 *
 * @param ms Number of milliseconds to sleep
 *
 * @example
 * await sleep(500).then(() => {
 *  // will be executed after 500 ms
 * });
 */
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
