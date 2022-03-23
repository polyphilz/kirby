import React from "react";

import CircleButton from "./circlebutton/CircleButton";
import DayBubble from "./daybubbles/DayBubble";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import { Entry, orderedDayList, Day } from "../../util/types";

interface BlockedEntryProps {
  urlRemovedCallback: (url: string) => void;
  entry: Entry;
}

const BlockedEntry: React.FC<BlockedEntryProps> = ({
  urlRemovedCallback,
  entry,
}: BlockedEntryProps) => {
  function dayIsSelected(day: Day) {
    return !!entry.dayInfo[day];
  }

  return (
    <div className="p-3 pb-4 flex flex-row items-center">
      <div className="flex flex-col w-1/2 justify-between">
        <p className="text-ellipsis overflow-hidden mb-3">{entry.url}</p>
        <div className="flex flex-row justify-between">
          {!entry.isPermaBlocked &&
            orderedDayList.map((day, idx) => {
              return (
                <DayBubble
                  key={idx}
                  day={day}
                  dayInfo={entry.dayInfo[day]}
                  isSelected={dayIsSelected(day)}
                />
              );
            })}
          {entry.isPermaBlocked && (
            <AllInclusiveIcon className="-mt-1" style={{ color: "#F06292" }} />
          )}
        </div>
      </div>
      <div className="ml-auto">
        <CircleButton callback={() => urlRemovedCallback(entry.url)} />
      </div>
    </div>
  );
};

export default BlockedEntry;
