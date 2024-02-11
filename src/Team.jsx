import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(0);
    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const handleReduce = () => {
        const newTeam = team - 1;
        setTeam(newTeam);
    }
    return (
        <div className="teamStyle">
            <h2>Players : {team}</h2>
            <button onClick={handleAdd}>Add</button>
            <br /> <br />
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}