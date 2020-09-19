import React, { useState, useEffect } from 'react';
import PlayList from '../components/PlayList';
import Pagination from '../components/Pagination';
import PageSize from '../components/PageSize'
import Filters from '../components/Filters'
import axios from 'axios';
import './App.css';

const App = () => {
  const [musics, setMusics] = useState([]);
  const [genres, setGenres] = useState([]);
  const [singers, setSingers] = useState([]);
  const [loading, setLoading] = useState(false);
  const[currentPage, setCurrentPage] = useState(1);
  const[musicPerPage, setMusicPerPage] = useState(10);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const setPageNumber = (page) => setMusicPerPage(page) 
  useEffect(() => {
    const fetchMusics = async () => {
      setLoading(true);
      const result = await axios.get('http://localhost:8000/api/musics');

      setMusics(result.data);
      setLoading(false)
    }

    fetchMusics();

    const fetchGenres = async () => {
      setLoading(true);
      const result = await axios.get('http://localhost:8000/api/genres');
      console.log(result.data)
      setGenres(result.data);
      setLoading(false)
    }

    fetchGenres();

    const fetchSingers = async () => {
      setLoading(true);
      const result = await axios.get('http://localhost:8000/api/singers');
      console.log(result)
      setSingers(result.data);
      setLoading(false)
    }

    fetchSingers();
  }, []);
  const indexLastMusic = currentPage * musicPerPage;
  const indexFirstMusic = indexLastMusic - musicPerPage;
  const currentMusic = musics.slice(indexFirstMusic, indexLastMusic);
  return (
    <div className = 'container mt-5'>
      <h1 className="text-center text-primary mb-3">Playlist</h1>
      <PlayList 
        musics={currentMusic}
        loading={loading}
        genres={genres}
        singers={singers}/>
      <Pagination musicPerPage={musicPerPage} totalMusics={musics.length} paginate={paginate} />
      <PageSize setPageNumber={setPageNumber} paginate={paginate} />
    </div>
  )
}
export default App;