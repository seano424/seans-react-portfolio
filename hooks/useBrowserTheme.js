const getMql = () =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')

export const getBrowserTheme = () => {
  const mql = getMql()
  return mql && mql.matches ? 'dark' : 'light'
}
