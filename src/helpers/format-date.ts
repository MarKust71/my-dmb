export const formatDate = (iso: string): string => {
  const date = new Date(`${iso}T12:00:00`)

  return date.toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
