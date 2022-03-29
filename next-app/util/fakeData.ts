import { Entry, Day, DayInfo } from "./types";

const eightThirtyToFour: DayInfo = {
  start: new Date(),
  end: new Date(),
};
eightThirtyToFour.start.setHours(8, 30);
eightThirtyToFour.end.setHours(4, 0);

const nineToFive: DayInfo = {
  start: new Date(),
  end: new Date(),
};
nineToFive.start.setHours(9, 0);
nineToFive.end.setHours(5, 0);

export const entry1: Entry = {
  url: "example.com",
  isPermaBlocked: false,
  dayInfo: { [Day.Mon]: eightThirtyToFour, [Day.Sun]: nineToFive },
};

export const entry2: Entry = {
  url: "blog.hubspot.com/marketing",
  isPermaBlocked: true,
  dayInfo: {},
};

export const entry3: Entry = {
  url: "facebook.com",
  isPermaBlocked: true,
  dayInfo: {},
};

export const entry4: Entry = {
  url: "youtube.com",
  isPermaBlocked: true,
  dayInfo: {},
};

export const fakeEntriesList: Entry[] = [entry1, entry2, entry3, entry4];
