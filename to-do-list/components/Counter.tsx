import React, {useState} from 'react';

function Counter() {

    const [likes , setLikes] = useState(5);

    const [value , setValue] = useState('Hello pups');

    function  increment ()
    {
        setLikes(likes+1);
    }

    function   decrement()
    {
        setLikes(likes-1);
    }
    return (
        <div></div>
    );
}

export default Counter;