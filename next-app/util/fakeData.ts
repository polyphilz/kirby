import { Entry, Day, DayInfo } from "./types";

const eightToFour: DayInfo = {
  start: 8,
  end: 16,
};

const nineToFive: DayInfo = {
  start: 9,
  end: 17,
};

export const entry1: Entry = {
  url: "example.com",
  isPermaBlocked: false,
  dayInfo: { [Day.Mon]: eightToFour, [Day.Sun]: nineToFive },
};

export const entry2: Entry = {
  url: "blog.hubspot.com/marketing",
  isPermaBlocked: true,
  dayInfo: {},
};
