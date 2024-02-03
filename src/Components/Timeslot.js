import React from "react";
import "./Timeslot.css";
import "./MobileView.css";
import { Tooltip } from "@mui/material";

const Timeslot = (props) => {
  // console.log(props.classid, props.timeslot)
  return (
    <>
      {(props.full || props.registrationClosed || props.isPast) && (
        <Tooltip
          id="custom_tooltip"
          title="Class Full"
          hover
          arrow
          placement="top"
        >
          <label className="container" id="full">
            {((props.tag === "course" && props.index == 0) ||
              props.tag !== "course") && (
              <input
                type="checkbox"
                checked={props.isSelected}
                disabled={props.tag === 'course' ? props.isPast : true}
                onChange={() => props.onSelect(props.classid, props.timeslot)}
              />
            )}
            <span className="light_text">{props.timeslot.timing}</span>
            {((props.tag === "course" && props.index == 0) ||
              props.tag !== "course") && <span className="checkmark"></span>}

            <span className="Hack" id="hack_ultra_pro_max">
              Class Full
            </span>
          </label>
        </Tooltip>
      )}

      {!props.full && !props.registrationClosed && !props.isPast && (
        <label className="container">
          {((props.tag === "course" && props.index == 0) ||
            props.tag !== "course") && (
            <input
              type="checkbox"
              checked={props.isSelected}
              onChange={() => props.onSelect(props.classid, props.timeslot)}
            />
          )}
          <span className="light_text">{props.timeslot.timing}</span>
          {((props.tag === "course" && props.index == 0) ||
            props.tag !== "course") && <span className="checkmark"></span>}
        </label>
      )}
    </>
  );
};

export default Timeslot;
