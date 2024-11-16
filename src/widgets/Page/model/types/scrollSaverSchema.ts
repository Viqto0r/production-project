// <Адрес страницы, позиция скролла>
export type TScrollPosition = Record<string, number>

export interface IScrollSaverSchema {
  scroll: TScrollPosition
}
