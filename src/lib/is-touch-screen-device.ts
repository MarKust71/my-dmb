export const detectTouchScreenDevice = () => {
  try {
    document.createEvent('TouchEvent')

    return true
  } catch (e) {
    return false
  }
}
