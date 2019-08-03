export default async promise => {
  try {
    const result = await promise;
    return [result, null];
  } catch (e) {
    return [null, e];
  }
};
