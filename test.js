
const max      = 2;
const internal = [];
const external = [];

const dump = (label, history) => {
  console.log({
    [label]: history.map(
      ([call, executed]) => `#${call}=${executed ? 'executed' : 'dismiss'}`
    ).join(' ')
  });
}

const callback = require('.')((idx) => new Promise((resolve, reject) => {
  internal.push([idx + 1, true]);
  dump('internal', internal);
  setTimeout(() => { resolve(); }, 1000)
}), max);

Array(max + 2).fill().forEach((_, idx) => {
  callback(idx).then(executed => {
    external.push([idx + 1, executed]);
    dump('external', external);
  });
});
