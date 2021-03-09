import { array, element } from 'prop-types';
import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients'

const burger = ( props ) => {
    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map((_, i) => {
                return <BurgerIngredient key={i + igKey} type={igKey}/>;
            });
        })
        .reduce((array, element) => {
            return array.concat(element)
        }, [])
        console.log(transformedIngredients)
        if (transformedIngredients.length === 0) {
            transformedIngredients = <p>Please Start Adding Ingredients!</p>
        }
    return (
        <div className={classes.BurgerContainer}>
            <div className={classes.Burger}>
                <BurgerIngredient type="top-bread"/>
                {transformedIngredients}
                <BurgerIngredient type="bottom-bread"/>
            </div>
        </div>
    );
};

export default burger;