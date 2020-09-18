import React, { useState, useEffect } from 'react';
import PlayList from '../components/PlayList';
import Pagination from '../components/Pagination'
import axios from 'axios';
import './App.css';

const App = () => {
  const [musics, setMusics] = useState([]);
  const [loading, setLoading] = useState(false);
  const[currentPage, setCurrentPage] = useState(1);
  const[musicPerPage, setMusicPerPage] = useState(10);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  useEffect(() => {
    const fetchMusics = async () => {
      setLoading(true);
      const result = await axios.get('http://localhost:8000/api/musics');
      setMusics(result.data);
      setLoading(false)
      console.log(result)
    }

    fetchMusics();
  }, []);
  const indexLastMusic = currentPage * musicPerPage;
  const indexFirstMusic = indexLastMusic - musicPerPage;
  const currentMusic = musics.slice(indexFirstMusic, indexLastMusic);
  return (
    <div className = 'container mt-5'>
      <h1 className="text-center text-primary mb-3">Playlist</h1>
      <PlayList musics={currentMusic} loading={loading}/>
      <Pagination musicPerPage={musicPerPage} totalMusics={musics.length} paginate={paginate} />
    </div>
  )
}
export default App;