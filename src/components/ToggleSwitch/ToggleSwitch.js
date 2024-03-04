import React from 'react';
import { useContext } from 'react';
import {CurrentTemperatureUnitContext} from "../../contexts/CurrentTemperatureUnitContext.js";
import "./ToggleSwitch.css";

function ToggleSwitch(props) {
  const handleToggleSwitchChange = 
    useContext(CurrentTemperatureUnitContext).handleToggleSwitchChange;

  return (
  <>
  <input
    className="switch-checkbox"
    id="switch-new"
    type="checkbox"
    onChange={handleToggleSwitchChange}
  />
  <label
    className="switch-label"
    htmlFor="switch-new"
  >
    <span className="switch-button" />
    {/* This can be an icon or (in our case) text. I wanted to make the component
      as reusable as possible. In a real task I'd probably make a child component
      for each case, though. */}
    <span className='switch-icon switch-icon_left'>{props["icon-left"]}</span>
    <span className='switch-icon switch-icon_right'>{props["icon-right"]}</span>
  </label>
  </>
);
};

export default ToggleSwitch;