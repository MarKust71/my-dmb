export type AgendaItem = {
  time: string
  title: string
  highlight?: boolean
  muted?: boolean
}

export type AgendaDay = {
  name: string
  date: string
  items: AgendaItem[]
}

export const AGENDA_EVENT = {
  title: 'Power Campus Gliwice',
  dates: '23–25 października 2026',
  location: 'PreZero Arena Gliwice, ul. Akademicka 50',
}

export const AGENDA: AgendaDay[] = [
  {
    name: 'Piątek',
    date: '23.10',
    items: [
      { time: '17:00 – 18:00', title: '21% & UP MEETING' },
      { time: '19:30', title: 'Meeting room opening', muted: true },
      { time: '19:45', title: 'EVENT START', highlight: true },
      { time: '22:00', title: 'Finish', muted: true },
    ],
  },
  {
    name: 'Sobota',
    date: '24.10',
    items: [
      { time: '09:00', title: '9% & UP LEADER MEETING + Product EXPO HALL' },
      { time: '10:00', title: 'Meeting room opening', muted: true },
      {
        time: '10:15 – 13:30',
        title: 'MEETING SESSION (with short break)',
        highlight: true,
      },
      { time: '13:30', title: 'Product EXPO HALL + Labs, Artistry Colorful' },
      { time: '14:30 – 18:00', title: 'Break for planning & communication' },
      { time: '18:00 – 19:00', title: 'Dinner' },
      { time: '19:00 – 19:45', title: 'Cocktail for invitees' },
      { time: '19:45', title: 'Meeting room opening', muted: true },
      {
        time: '19:45 – 00:00',
        title: 'RECOGNITION & OSCAR NIGHT',
        highlight: true,
      },
      { time: '00:00', title: 'Finish', muted: true },
    ],
  },
  {
    name: 'Niedziela',
    date: '25.10',
    items: [
      { time: '09:00', title: '9% & UP LEADER MEETING' },
      { time: '10:15', title: 'Meeting room opening', muted: true },
      {
        time: '10:30',
        title: 'MEETING SESSION (with short break)',
        highlight: true,
      },
      { time: '13:30', title: 'Finish', muted: true },
    ],
  },
]
