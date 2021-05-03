import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    // console.log(props);
    const {name, email, id} = props.friend;
    const history = useHistory();
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px',
    }

    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`
        history.push(url)
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            {/* <p>id: <Link to={`/friend/${id}`}>Show Details of id {id}</Link></p> */}

            {/* <Link to={`/friend/${id}`}>
                <button>Show Details of id {id}</button>
            </Link> */}

            <button onClick={() => handleClick(id)}>Click Me</button>
        </div>
    );
};

export default Friend;