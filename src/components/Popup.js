import React from "react";

const Popup = (props) => {
    return (
      <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.value}
      </div>
    </div>
    );
}

export default Popup