import React from "react";
import Tooltip from "@mui/material/Tooltip";

import { Day, DayInfo } from "../../../util/types";

interface DayBubbleProps {
  day: Day;
  isSelected: boolean;
  dayInfo?: DayInfo | undefined;
}

const dayToLetter = new Map<Day, string>([
  [Day.Mon, "M"],
  [Day.Tue, "T"],
  [Day.Wed, "W"],
  [Day.Thur, "T"],
  [Day.Fri, "F"],
  [Day.Sat, "S"],
  [Day.Sun, "S"],
]);

const DUPLICATE_BUBBLE_STYLES =
  "rounded-full h-5 w-5 select-none flex justify-center items-center";

const DayBubble: React.FC<DayBubbleProps> = ({
  day,
  isSelected,
  dayInfo = undefined,
}: DayBubbleProps) => {
  function convertMilitaryTimeToStandard(time: number): string {
    let suffix = "AM";
    if (time >= 12) {
      if (time > 12) {
        time -= 12;
      }
      suffix = "PM";
    }
    return `${time}${suffix}`;
  }

  function generateTooltipTitle(): string {
    if (!dayInfo || !dayInfo.start || !dayInfo.end) return "";

    return `Starts - ${convertMilitaryTimeToStandard(
      dayInfo.start
    )} | Ends - ${convertMilitaryTimeToStandard(dayInfo.end)}`;
  }

  const dayLetter = <span className="text-xs">{dayToLetter.get(day)}</span>;

  if (!isSelected) {
    return (
      <div className={`${DUPLICATE_BUBBLE_STYLES} border-dark-pink-2 border-2`}>
        {dayLetter}
      </div>
    );
  }

  return (
    <Tooltip title={generateTooltipTitle()}>
      <div className={`${DUPLICATE_BUBBLE_STYLES} bg-dark-pink-2`}>
        {dayLetter}
      </div>
    </Tooltip>
  );
};

export default DayBubble;
