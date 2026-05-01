// Zwraca najbliższą przyszłą datę (lub dziś) dla podanego dnia tygodnia
// dayOfWeek: 0 = niedziela, 1 = poniedziałek, ..., 6 = sobota
export const nextWeekday = (dayOfWeek: number): Date => {
  const today = new Date()
  const todayDay = today.getDay()
  const diff = (dayOfWeek - todayDay + 7) % 7
  const result = new Date(today)
  result.setDate(today.getDate() + diff)

  return result
}

// Mapowanie polskich nazw dni na numer dnia tygodnia
const DAY_MAP: Record<string, number> = {
  'każdy poniedziałek': 1,
  'każdy wtorek': 2,
  'każda środa': 3,
  'każdy czwartek': 4,
  'każdy piątek': 5,
  'każda sobota': 6,
  'każda niedziela': 0,
}

export const parseDateOrWeekday = (date: string): Date | null => {
  // Próba parsowania ISO
  const iso = new Date(`${date}T12:00:00`)
  if (!isNaN(iso.getTime())) return iso

  // Próba mapowania polskiego dnia tygodnia
  const dayOfWeek = DAY_MAP[date.toLowerCase()]
  if (dayOfWeek !== undefined) return nextWeekday(dayOfWeek)

  return null
}
