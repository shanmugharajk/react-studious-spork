export function debounce<TArgs>(func: (args: TArgs) => unknown, wait = 100) {
  let timer: number | null = null;

  return function (args: TArgs) {
    if (timer !== null) {
      clearTimeout(timer);
    }

    timer = window.setTimeout(function () {
      func(args);
    }, wait);
  };
}
