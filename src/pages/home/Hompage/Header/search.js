import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faBed,
   faPerson,
} from "@fortawesome/free-solid-svg-icons";
import styled from "./seach.module.css";
import classNames from "classnames/bind";
import { DateRange} from "react-date-range";
import { Fragment, useRef, useState } from "react";

import format from "date-fns/format";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
const cx = classNames.bind(styled);

function Input() {
  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  // open close
  const [open, setOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef(null);
  const handleClick = () => {
    window.location.replace("http://localhost:3000/search");
  };

  return (
    <Fragment>
      <div className={cx("wrapper")}>
        <div>
          <h2 className={cx("clander")}>
            <FontAwesomeIcon icon={faCalendar} color="#d3d3d3" />{" "}
          </h2>
        </div>
        <div>
          <h2 className={cx("clander2")}>
            <FontAwesomeIcon icon={faBed} color="#d3d3d3" />{" "}
          </h2>
        </div>
        <div>
          <h2 className={cx("clander3")}>
            <FontAwesomeIcon icon={faPerson} color="#d3d3d3" />{" "}
          </h2>
        </div>

        <span className={cx("border")}>
          <input
            className={cx("search")}
            placeholder=" Where are you going ?"
            type="text"
          />
          <input
            className={cx("search", "calanter")}
            value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(
              range[0].endDate,
              "MM/dd/yyyy"
            )}`}
            onClick={() => setOpen((open) => !open)}
          />

          <input
            className={cx("search")}
            placeholder="1 adult-0 children-1 room"
            type="text"
          />
        </span>

        <button className={cx("button")} onClick={handleClick}>
          Search
        </button>
      </div>{" "}
      <div className={cx("lich")} ref={refOne}>
        {open && (
          <DateRange
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calendarElement"
          />
        )}
      </div>
    </Fragment>
  );
}
export default Input;
