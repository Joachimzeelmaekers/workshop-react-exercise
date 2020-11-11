import React from 'react';

const Clock = () => {
  return (
    <div className="page-container">
      <div data-testid="clock" className="clock mt-5">
        <div className="outer-clock-face">
          <div className="marking marking-one"></div>
          <div className="marking marking-two"></div>
          <div className="marking marking-three"></div>
          <div className="marking marking-four"></div>
          <div className="inner-clock-face">
            <div className="hand hour-hand"></div>
            <div className="hand min-hand"></div>
            <div className="hand second-hand"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
