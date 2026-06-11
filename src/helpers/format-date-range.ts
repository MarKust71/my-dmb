export const formatDateRange = (isoStart: string, isoEnd: string): string => {
  const start = new Date(`${isoStart}T12:00:00`)
  const end = new Date(`${isoEnd}T12:00:00`)

  const sameYear = start.getFullYear() === end.getFullYear()
  const sameMonth = sameYear && start.getMonth() === end.getMonth()

  if (sameMonth) {
    // np. "10 - 12 lipca 2026"
    const startDay = start.toLocaleDateString('pl-PL', { day: 'numeric' })
    const endFull = end.toLocaleDateString('pl-PL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })

    return `${startDay} - ${endFull}`
  }

  if (sameYear) {
    // np. "30 czerwca - 2 lipca 2026"
    const startPart = start.toLocaleDateString('pl-PL', {
      day: 'numeric',
      month: 'long',
    })
    const endFull = end.toLocaleDateString('pl-PL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })

    return `${startPart} - ${endFull}`
  }

  // np. "31 grudnia 2026 - 2 stycznia 2027"
  const startFull = start.toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const endFull = end.toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return `${startFull} - ${endFull}`
}
