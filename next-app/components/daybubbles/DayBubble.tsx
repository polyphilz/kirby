import React from "react";
import Tooltip from "@mui/material/Tooltip";

import { Day, DayInfo } from "../../util/types";
import {
  getFirstCapitalizedLetterOfDay,
  dayEnumToDayString,
} from "../../util/utils";

interface DayBubbleProps {
  day: Day;
  isSelected: boolean;
  dayInfo?: DayInfo | undefined;
}

const DUPLICATE_BUBBLE_STYLES =
  "rounded-full h-5 w-5 select-none flex justify-center items-center";

const DayBubble: React.FC<DayBubbleProps> = ({
  day,
  isSelected,
  dayInfo = undefined,
}: DayBubbleProps) => {
  function convertMilitaryTimeToStandard(time: Date): string {
    console.log(time);
    let suffix = "AM";
    let timeInHours = time.getHours();
    if (timeInHours >= 12) {
      if (timeInHours > 12) {
        timeInHours -= 12;
      }
      suffix = "PM";
    }
    return `${timeInHours}:${time.getMinutes()} ${suffix}`;
  }

  function generateTooltipTitle(): string {
    if (!dayInfo || !dayInfo.start || !dayInfo.end) return "";

    return `Starts - ${convertMilitaryTimeToStandard(
      dayInfo.start
    )} | Ends - ${convertMilitaryTimeToStandard(dayInfo.end)}`;
  }

  const dayLetter = (
    <span className="text-xs">
      {getFirstCapitalizedLetterOfDay(dayEnumToDayString.get(day))}
    </span>
  );

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
