import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react/cjs/react.development';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    const {name, email, phone, website} = friend;
    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            setFriend(data)
        })
    }, [])
    return (
        <div>
            <p>FriendDetail {friendId}</p>
            {/* <h4>Name: {friend.name}</h4>
            <h4>Email: {friend.email}</h4>
            <h4>Phone: {friend.phone}</h4>
            <h4>Website: {friend.website}</h4>  */}

            <h4>Name: {name}</h4>
            <h4>Email: {email}</h4>
            <h4>Phone: {phone}</h4>
            <h4>Website: {website}</h4> 

        </div>
    );
};

export default FriendDetail;