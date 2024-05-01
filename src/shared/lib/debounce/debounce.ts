export const debounce = (fn: (...args: any[]) => any, delay: number) => {
  let timerId: NodeJS.Timeout

  return (...args: any[]) => {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
