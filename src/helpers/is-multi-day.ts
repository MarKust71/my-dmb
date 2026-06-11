export const isMultiDay = (dateStart: string, dateEnd?: string): boolean =>
  !!dateEnd && dateEnd !== dateStart
