import React from 'react'
// import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
// const MyFacebookLoader = () => <Facebook />;


const PlayList = ({musics,loading}) => {
    if(loading) {
        return <h1>Loading</h1>
    }
  
    return (
    <div>
        <ul className="list-group mb-4">
            {musics.map(music=>(
                <li className="list-group-item" key={music.key}>{music.name}</li>
            ))}
        </ul>
    </div>
    )
}

export default PlayList;