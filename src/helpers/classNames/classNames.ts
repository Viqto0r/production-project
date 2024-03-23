type TMods = Record<string, string | boolean>

export const classNames = (cls: string, mods: TMods, additional: string[]) => {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([classNames]) => classNames),
  ].join(' ')
}
