import React from 'react'
// import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
// const MyFacebookLoader = () => <Facebook />;


const Filters = ({genres,singers,loading, setSelectGenre, setSelectSinger}) => {
    
    const handleSinger = e => {
        setSelectSinger(e.target.value);
    }

    const handleGenre = e => {
        setSelectGenre(e.target.value)
    }
    
    if(loading) {
        return <h1>Loading</h1>
    }
    
    return (
        
    <div className="filterBlock">
          <h4 className="mb-3">Фильтры</h4>
        <p className="mb-0">Singers</p>
        <select  className="mt-0 mb-2"  name="pages" id="pages">
        <option value="Все">Все</option>
        { singers.map(singer => (

            <option key={singer.name} value={singer.name}>{singer.name}</option>
        ))}
        </select>
        <p className="mb-0">Genres</p>
        <select className="mb-5" name="pages" id="pages">
            
        <option value="Все">Все</option>
        { genres.map(genre => (
            <option key={genre.name} value={genre.name}>{genre.name}</option>
        ))}
        </select>


    </div>
    )
}

export default Filters;