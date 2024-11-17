type TQueryParams = OptionalRecord<string, string>

export const getQueryParams = (params: TQueryParams) => {
  const searchParams = new URLSearchParams(window.location.search)

  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined) {
      searchParams.set(name, value)
    }
  })
  return `?${searchParams.toString()}`
}

/**
 * Функция добавления параметров строки запроса в URL
 * @param params
 */
export const addQueryParams = (params: TQueryParams) => {
  window.history.pushState(null, '', getQueryParams(params))
}
