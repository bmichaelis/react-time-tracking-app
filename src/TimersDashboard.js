import React, { Component } from 'react';
import { EditableTimerList } from "./EditableTimerList";
import { ToggleableTimerForm } from "./ToggleableTimerForm";

export class TimersDashboard extends Component {
  render() {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
          <EditableTimerList/>
          <ToggleableTimerForm isOpen={false}/>
        </div>
      </div>
    );
  }
}