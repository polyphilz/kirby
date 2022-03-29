import { Day } from "./types";

export const dayStringToDayEnum = new Map<string, Day>([
  ["mon", Day.Mon],
  ["tue", Day.Tue],
  ["wed", Day.Wed],
  ["thur", Day.Thur],
  ["fri", Day.Fri],
  ["sat", Day.Sat],
  ["sun", Day.Sun],
]);

export const dayEnumToDayString = new Map<Day, string>([
  [Day.Mon, "mon"],
  [Day.Tue, "tue"],
  [Day.Wed, "wed"],
  [Day.Thur, "thur"],
  [Day.Fri, "fri"],
  [Day.Sat, "sat"],
  [Day.Sun, "sun"],
]);

export const getFirstCapitalizedLetterOfDay: (day: string) => string = (
  day: string
) => {
  if (!day) return "";

  return day.charAt(0).toUpperCase();
};
