import React, { PureComponent } from 'react';

class habit extends PureComponent {
    componentDidMount() {
        console.log(`habit: ${this.props.habit.name} mounted`)
    }

    componentWillUnmount() {
        console.log(`habit: ${this.props.habit.name} will unmount`)
    }


    handleIncrement = (habit) => {
        this.props.onIncrement(this.props.habit);
    };

    handleDecrement = (habit) => {
        this.props.onDecrement(this.props.habit);
    };

    handleDelete = (habit) => {
        this.props.onDelete(this.props.habit);
    };

    render() {
        const { name, count } = this.props.habit;
        console.log(`habit: ${name}`)
        return (
            <li className='habit'>
                <span className='habit'>{name}</span>
                <span className='habit-count'>{count}</span>
                <button className='habit-button habit-increase' onClick={this.handleIncrement}>
                    <i className="fa fa-square-plus"></i>
                </button>
                <button className='habit-button habit-decrease' onClick={this.handleDecrement}>
                    <i className="fa fa-square-minus"></i>
                </button>
                <button className='habit-button habit-delete' onClick={this.handleDelete}>
                    <i className="fa fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default habit; 