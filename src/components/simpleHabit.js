import React, { useState, useRef, useCallback, useEffect } from 'react';

const SimpleHabit = props => {
    const [count, setCount] = useState(0);
    const spanRef = useRef();

    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    });

    const handleDecrement = () => {
        const cnt = count - 1;
        setCount(cnt < 0 ? 0 : cnt);
    };

    return (
        <li className='habit'>
            <span className='habit-name'>Reading</span>
            <span className='habit-count'>{count}</span>
            <button
                className='habit-button habit-increase'
                onClick={handleIncrement}>
                <i className="fa fa-square-plus"></i>
            </button>
            <button className='habit-button habit-decrease'
                onClick={handleDecrement}>
                <i className="fa fa-square-minus"></i>
            </button>

        </li>
    );
};

export default SimpleHabit;

