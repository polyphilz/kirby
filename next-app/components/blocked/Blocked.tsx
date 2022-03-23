import React from "react";

import { Entry } from "../../util/types";
import BlockedEntry from "../blockedentry/BlockedEntry";
import Header from "../header/Header";

interface BlockedProps {
  urlRemovedCallback: (url: string) => void;
  blockedUrlInfoList: Entry[];
  loading: boolean;
}

const Blocked: React.FC<BlockedProps> = ({
  urlRemovedCallback,
  blockedUrlInfoList,
  loading,
}: BlockedProps) => {
  return (
    <div className="pb-10 font-PT">
      <Header text={"Blocked"} underlineBarWidthPx={140} />
      <div
        style={{ minHeight: "200px" }}
        className="rounded-md overflow-scroll bg-light-gunmetal-1 max-h-72"
      >
        {loading && <div className="p-3">Loading...</div>}
        <ul>
          {blockedUrlInfoList.map((urlInfo, idx) => {
            return (
              <li key={idx}>
                <BlockedEntry
                  urlRemovedCallback={urlRemovedCallback}
                  entry={urlInfo}
                />
                {idx !== blockedUrlInfoList.length - 1 && <hr />}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Blocked;
