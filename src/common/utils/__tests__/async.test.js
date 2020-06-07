import { sleep } from '../async';

describe('async', () => {
  it('should sleep for a valid amount of time', (exit) => {
    const start = new Date().getTime();

    sleep(300).then(() => {
      const elapsedTime = new Date().getTime() - start;

      expect(elapsedTime >= 300).toBe(true);
      exit();
    });
  });
});
