export const isSafari =
  navigator.vendor &&
  navigator.vendor.indexOf('Apple') > -1 &&
  navigator.userAgent &&
  // eslint-disable-next-line
      navigator.userAgent.indexOf('CriOS') == -1 &&
  // eslint-disable-next-line
      navigator.userAgent.indexOf('FxiOS') == -1

export const isIE11 = !!window.MSInputMethodContext && !!document.documentMode
export const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)