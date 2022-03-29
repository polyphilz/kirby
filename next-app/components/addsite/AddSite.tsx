import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

import DayBubble from "../daybubbles/DayBubble";
import { Entry, Day, orderedDayList } from "../../util/types";
import { dayStringToDayEnum, dayEnumToDayString } from "../../util/utils";
import Header from "../header/Header";

interface AddSiteProps {
  urlAddedCallback: (newEntry: Entry) => void;
}

const AddSite: React.FC<AddSiteProps> = ({
  urlAddedCallback,
}: AddSiteProps) => {
  const [entry, setEntry] = useState<Entry>({
    url: "",
    isPermaBlocked: false,
    dayInfo: {},
  });
  const [sameTimesAcrossDays, setSameTimesAcrossDays] = useState(false);
  const [consistentBlockedTimeTuple, setConsistentBlockedTimeTuple] = useState<
    [Date | undefined, Date | undefined]
  >([undefined, undefined]);

  const handleUrlInputChange = (e: any) => {
    setEntry({ ...entry, url: e.target.value });
  };

  const handlePermaBlockChange = (e: any) => {
    setEntry({ ...entry, isPermaBlocked: e.target.checked });
  };

  const handleTimesSameCheckboxChange = (e: any) => {
    setSameTimesAcrossDays(e.target.checked);
  };

  const handleDaySelectionChange = (e: any) => {
    if (e.target.checked) {
      // setEntry({ ...entry, dayInfo: { ...entry.dayInfo, [e.target.value]: f } });
    } else {
      const blah = Object.keys(entry.dayInfo);
      console.log(blah);
    }
    // key => dayEnumToDayString[key] !== e.target.value);
    // key !== 'cow').reduce((obj, key) =>
    // {
    //     obj[key] = thisIsObject[key];
    //     return obj;
    // }, {}
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    urlAddedCallback(entry);
  };

  const fun3 = (
    <div>
      <span>Monday start time (hours)</span>
      <TextField
        id="mon-start-hours"
        name="mon-start-hours"
        label="Monday start time (hours)"
        type="text"
      ></TextField>
      <span>Monday start time (minutes)</span>
      <TextField
        id="mon-start-minutes"
        name="mon-start-minutes"
        label="Monday start time (minutes)"
        type="text"
      ></TextField>
      <span>Monday end time (hours)</span>
      <TextField
        id="mon-end-hours"
        name="mon-end-hours"
        label="Monday end time (hours)"
        type="text"
      ></TextField>
      <span>Monday end time (minutes)</span>
      <TextField
        id="mon-end-minutes"
        name="mon-end-minutes"
        label="Monday end time (minutes)"
        type="text"
      ></TextField>
    </div>
  );

  const fun2 = (
    <div>
      <TextField
        id="consistent-start-time-hours"
        name="consistent-start-time-hours"
        label="Hours"
        type="text"
        sx={{ width: "100px" }}
        required
      ></TextField>
      <TextField
        id="consistent-start-time-minutes"
        name="consistent-start-time-minutes"
        label="Minutes"
        type="text"
        sx={{ width: "100px" }}
        required
      ></TextField>
      <TextField
        id="consistent-end-time-hours"
        name="consistent-end-time-hours"
        label="Hours"
        type="text"
        sx={{ width: "100px" }}
        required
      ></TextField>
      <TextField
        id="consistent-end-time-minutes"
        name="consistent-end-time-minutes"
        label="Minutes"
        type="text"
        sx={{ width: "100px" }}
        required
      ></TextField>
    </div>
  );

  const fun = (
    <div>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={sameTimesAcrossDays}
              onChange={handleTimesSameCheckboxChange}
            />
          }
          label="Keep blocked start/end times consistent across selected days"
        />
      </FormGroup>
      <div className="flex flex-row">
        {!entry.isPermaBlocked &&
          orderedDayList.map((day, idx) => {
            return (
              <DayBubble
                key={idx}
                day={day}
                dayInfo={entry.dayInfo[day]}
                isSelected={entry.dayInfo.hasOwnProperty(day)}
              />
            );
          })}
      </div>
      {sameTimesAcrossDays && fun2}
      {!sameTimesAcrossDays && fun3}
    </div>
  );

  return (
    <div>
      <Header text={"Add A Site"} underlineBarWidthPx={178} />
      <form
        className="flex flex-col justify-start items-start"
        onSubmit={handleSubmit}
      >
        <TextField
          id="url"
          name="url"
          label="URL"
          type="text"
          variant="filled"
          color="secondary"
          value={entry.url}
          onChange={handleUrlInputChange}
          required
        ></TextField>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={entry.isPermaBlocked}
                onChange={handlePermaBlockChange}
              />
            }
            label="Block this website 24/7"
          />
        </FormGroup>
        {!entry.isPermaBlocked && fun}
        <input type="submit" value="Submit meee" />
      </form>
    </div>
  );
};

export default AddSite;
