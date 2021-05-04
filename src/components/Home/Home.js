import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Home = () => {
    const [Friends, setFriends] = useState([]);
    useEffect( () => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setFriends(data);
      })
    }, [])
    return (
        <div>
             <h2>Friends: {Friends.length}</h2>
        {
            Friends.map(friend => <Friend friend={friend} key={friend.id}></Friend>)
        }
        </div>
    );
};

export default Home;