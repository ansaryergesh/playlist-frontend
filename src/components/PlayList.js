import React from 'react'
// import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
// const MyFacebookLoader = () => <Facebook />;
import Filters from './Filters'

const PlayList = ({musics,loading,genres,singers}) => {
    if(loading) {
        return <h1>Loading</h1>
    }
    
    if(musics.length === 0) {
        return <h1>No data</h1>
    }
    return (
    <div className="row">
        <div className='col-md-9'>
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
        <div className="md-3">
        <h1>Genres</h1>
        <select className="mb-5" name="pages" id="pages">
            
        <option value="Все">Все</option>
        { genres.map(genre => (
            <option key={genre.name} value={genre.name}>{genre.name}</option>
        ))}
        </select>
        <h1>Singers</h1>
        <select className="mb-5" name="pages" id="pages">
        <option value="Все">Все</option>
        { singers.map(singer => (

            <option key={singer.name} value={singer.name}>{singer.name}</option>
        ))}
        </select>


    </div>
    </div>
    )
}

export default PlayList;