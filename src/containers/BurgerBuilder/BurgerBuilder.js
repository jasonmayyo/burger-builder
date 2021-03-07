import React, {Component} from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'


class burgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 3,
            cheese: 1,
        }
    }
    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Burger Controls</div>
            </Aux>
        )
    }
}

export default burgerBuilder