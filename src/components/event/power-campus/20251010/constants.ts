export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'PowerCampus A70',
  description: 'Trzydniowe wydarzenie (10–12 października 2025).',
  startDate: '2025-10-10T19:00:00+02:00',
  endDate: '2025-10-12T23:59:00+02:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'Q Hotel Plus',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ul. Szwedzka 7',
      postalCode: '55-040',
      addressLocality: 'Bielany Wrocławskie',
      addressCountry: 'PL',
    },
  },
  image: ['https://mydmb.pl/img/event/power-campus-a70.jpeg'],
  organizer: {
    '@type': 'Organization',
    name: 'dMb Global',
  },
}

/**
 * Odlicza do 2025-10-10 19:00 (czas lokalny użytkownika).
 */
// 10 paź 2025, 19:00 czasu PL (CEST = +02:00 w tym dniu)
export const TARGET = new Date('2025-10-10T19:00:00+02:00')

// Dane wydarzenia (dla linków kalendarza)
export const CAL_TITLE = 'dMb Global PowerCampus A70'
export const CAL_LOCATION =
  'Q Hotel Plus, ul. Szwedzka 7, 55-040 Bielany Wrocławskie'
export const CAL_DETAILS = 'Trzydniowe wydarzenie (10–12 października 2025).'

// Początek i koniec wydarzenia (PL = +02:00 dla tego terminu)
export const EVENT_START = new Date('2025-10-10T19:00:00+02:00')
export const EVENT_END = new Date('2025-10-12T15:30:00+02:00') // obejmuje cały 12.10
