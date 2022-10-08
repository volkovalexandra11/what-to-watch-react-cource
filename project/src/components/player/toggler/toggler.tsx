import React from 'react';

const Toggler = () =>
  (
    <div className="player__controls-row">
      <div className="player__time">
        <progress className="player__progress" value="30" max="100"/>
        <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
      </div>
      <div className="player__time-value">1:30:29</div>
    </div>
  );

export default Toggler;
