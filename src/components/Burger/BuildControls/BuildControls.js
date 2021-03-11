import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classses from './BuildControls.css'

const controls = [
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Salad', type: 'salad' },
]

const buildControls = (props) => (
    <div className={classses.BuildControlsContainer}>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label}/>
        ))}
    </div>
)

export default buildControls