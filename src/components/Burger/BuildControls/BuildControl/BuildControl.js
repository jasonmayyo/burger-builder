import React from 'react';
import classes from './BuildControl.css'


const buildControl = (props) => (
    <div className={classes.BuildControlsContainer}>
        <div className={classes.label}>{props.label}</div>
        <button className={classes.less}>Less</button>
        <button className={classes.more}>More</button>
    </div>
)

export default buildControl;