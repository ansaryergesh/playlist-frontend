import React from 'react'
// import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
// const MyFacebookLoader = () => <Facebook />;


const PlayList = ({musics,loading}) => {
    if(loading) {
        return <h1>Loading</h1>
    }
  
    return (
    <div>
        <table className="table table-striped table-boarded table-hover">
        <thead>
            <tr>
                <th>Name</th>
                <th>Singer</th>
                <th>Genre</th>
                <th>Year</th>
            </tr>
        </thead>
        <tbody>
            {musics.map(music=>(
              <tr key={music.key}>
                 <th scope="row">{music.name}</th>
                 <td>{music.singer_name}</td>
                 <td>{music.genre_name}</td>
                 <td>{music.year}</td>
             </tr>
            ))}
           
        </tbody>
        </table>
    </div>
    )
}

export default PlayList;