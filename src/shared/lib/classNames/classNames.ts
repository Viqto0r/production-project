export type TMods = Record<string, string | boolean | undefined>

export const classNames = (
  cls: string,
  mods: TMods = {},
  additional: Array<string | undefined> = []
) => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([classNames]) => classNames),
  ].join(' ')
}
