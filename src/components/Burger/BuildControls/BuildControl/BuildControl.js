import React from 'react';
import classes from './BuildControl.css'


const buildControl = (props) => (
    <div className={classes.BuildControls}>
        <div>{props.label}</div>
        <button>Less</button>
        <button>More</button>
    </div>
)

export default buildControl;