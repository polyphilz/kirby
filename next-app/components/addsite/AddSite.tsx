import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

import { Entry } from "../../util/types";
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

  const handleUrlInputChange = (e: any) => {
    setEntry({ ...entry, url: e.target.value });
  };

  const handlePermaBlockChange = (e: any) => {
    setEntry({ ...entry, isPermaBlocked: e.target.checked });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    urlAddedCallback(entry);
  };

  const fun = <div>yay</div>;

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
          color="primary"
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
