import React from "react";

import { Entry } from "../../util/types";
import Header from "../header/Header";

interface BlockedProps {
  blockedUrlInfoList: Entry[];
}

const Blocked: React.FC<BlockedProps> = ({
  blockedUrlInfoList,
}: BlockedProps) => {
  return (
    <div className="pb-10">
      <Header text={"Blocked"} underlineBarWidthPx={140} />
      <div
        style={{ background: "#1C272D", minHeight: "200px" }}
        className="rounded-md p-3"
      >
        {!blockedUrlInfoList.length && <p>Loading...</p>}
        <ul>
          {blockedUrlInfoList.map((urlInfo, idx) => {
            return <li key={idx}>{urlInfo.url}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Blocked;
