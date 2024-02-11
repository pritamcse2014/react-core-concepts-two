import './Friends.css';

export default function Friend({friend}){
    const {name, email} = friend;
    return (
        <div className="box">
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}