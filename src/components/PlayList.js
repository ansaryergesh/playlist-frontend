import React from 'react'
import Filters from './Filters'
import { Spinner } from 'react-bootstrap'
const PlayList = ({musics,loading,genres,singers, setSelectGenre, setSelectSinger, setOrder, order, setSort}) => {


    const clearSort = () => {
        setOrder(null);
    }
    const handleSort = (e) => {
        setSort(e.target.value);
        
        if(order === null) {
            setOrder(false);
        }
        if(order === false) {
            setOrder(true)
        }
        if(order === true) {setOrder(false)}
    }


    if(loading) {
        return (<Spinner animation="border" variant="primary" />)
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
                <th><button className="headerButton" onClick={handleSort} value="Name">Name</button></th>
                <th><button className="headerButton" onClick={handleSort} value="Singer">Singer</button></th>
                <th><button className="headerButton" onClick={handleSort} value="Genre">Genre</button></th>
                <th><button className="headerButton" onClick={handleSort} value="Year">Year</button></th>
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
       <Filters singers={singers} genres={genres} loading={loading} 
       setSelectGenre={setSelectGenre} setSelectSinger={setSelectSinger}/>
       
    </div>
    
    </div>
    )
}

export default PlayList;