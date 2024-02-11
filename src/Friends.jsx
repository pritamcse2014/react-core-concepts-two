import { useEffect, useState } from "react"
import Friend from "./Friend";
import './Friends.css'

export default function Friends(){
    const [friends, setFriends] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setFriends(json))
    }, [] )
    return (
        <div className="box">
            <h2>Friends : {friends.length}</h2>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend} />)
            }
        </div>
    )
}