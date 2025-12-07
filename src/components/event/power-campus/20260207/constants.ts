export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'PowerCampus A70',
  description: 'Dwudniowe wydarzenie (7–8 lutego 2026).',
  startDate: '2026-02-07T10:00:00+01:00',
  endDate: '2026-02-08T15:30:00+01:00',
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
  image: ['https://mydmb.pl/img/event/power-campus-202602.jpeg'],
  organizer: {
    '@type': 'Organization',
    name: 'dMb Global',
    url: 'https://mydmb.pl',
  },
}

/**
 * Odlicza do 2026-02-07 10:00 (czas lokalny użytkownika).
 */
// 7 lut 2026, 10:00 czasu PL (CEST = +01:00 w tym dniu)
export const TARGET = new Date('2026-02-07T10:00:00+01:00')

// Dane wydarzenia (dla linków kalendarza)
export const CAL_TITLE = 'dMb Global PowerCampus A70'
export const CAL_LOCATION =
  'Q Hotel Plus, ul. Szwedzka 7, 55-040 Bielany Wrocławskie'
export const CAL_DETAILS = 'Dwudniowe wydarzenie (7–8 lutego 2026).'

// Początek i koniec wydarzenia (PL = +01:00 dla tego terminu)
export const EVENT_START = new Date('2026-02-07T10:00:00+01:00')
export const EVENT_END = new Date('2026-02-08T15:30:00+01:00')
