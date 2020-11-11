import React from 'react';
import {msToTime, subtractDates} from '../utils/numberHelpers';
import Lap from './Lap';
import Timer from './Timer';

const INTERVAL = 10;

function Stopwatch() {
  const laps = [];
  return (
    <div className="page-container">
      <div
        data-testid="stopwatch"
        style={{display: 'flex', justifyContent: 'space-between', width: '50%'}}
      >
        <div style={{display: 'flex', flexDirection: 'column', width: '200px'}}>
          <Timer />
          <div className="button-container">
            <button
              className="m-1 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              data-testid="start-button"
            >
              Start
            </button>
            <button
              className="m-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              data-testid="stop-button"
            >
              Stop
            </button>
            <button
              className="m-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              data-testid="lap-button"
            >
              Lap
            </button>
            <button className="m-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Reset
            </button>
          </div>
        </div>
        <div data-testid="laps-container" style={{height: '200px'}}>
          {laps.map((lap) => {
            return <Lap lap={lap} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
