export default function debounce(callback, delay) {
  let timeout = null;
  return (...arg) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      callback(...arg);
    }, delay);
  };
}
