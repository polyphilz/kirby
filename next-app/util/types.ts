export interface Entry {
  url: string;
  isPermaBlocked: boolean;
  dayInfo: Partial<Record<Day, DayInfo>>;
}

export enum Day {
  Mon,
  Tue,
  Wed,
  Thur,
  Fri,
  Sat,
  Sun,
}

export const orderedDayList: Day[] = [
  Day.Mon,
  Day.Tue,
  Day.Wed,
  Day.Thur,
  Day.Fri,
  Day.Sat,
  Day.Sun,
];

export interface DayInfo {
  start: number;
  end: number;
}
