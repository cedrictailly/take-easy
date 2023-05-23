/**
 * @author Cédric Tailly
 * @description A utility package for managing asynchronous callbacks with a relaxed and easygoing approach.
 */

module.exports = function(callback, max = 1)
{
  let count = 0;

  const result = async (...args) =>
  {
    count = Math.min(max + 1, count + 1);

    if (count >= max + 1) {
      return false;
    }

    await callback(...args);

    count--;

    if (count >= max) {
      count--;
      await result(...args);
    }

    return true;
  };

  return result;
}
