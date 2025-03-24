import React from 'react';
import darkmode from '../../assets/icons/darkmode.png';
import "./Darkmode.css";

const Darkmode = ({ onClick }) => {
  return (
    <button type="button" className="darkmode-btn" onClick={onClick}>
      <img src={ darkmode } alt="D/L" />
    </button>
  );
};

export default Darkmode;