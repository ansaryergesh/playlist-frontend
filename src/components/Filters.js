import React from 'react'
// import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
// const MyFacebookLoader = () => <Facebook />;


const Filters = ({genres,singers,loading}) => {
    if(loading) {
        return <h1>Loading</h1>
    }

    return (
    <div>
        <p>Genres</p>
        <select className="mb-5" name="pages" id="pages">
            
        <option value="Все">Все</option>
        { genres.map(genre => (
            <option key={genre.name} value={genre.name}>{genre.name}</option>
        ))}
        </select>
        <p>Singers</p>
        <select className="mb-5" name="pages" id="pages">
        { singers.map(singer => (

            <option key={singer.name} value={singer.name}>{singer.name}</option>
        ))}
        </select>


    </div>
    )
}

export default Filters;