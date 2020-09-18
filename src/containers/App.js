import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [musics, setMusics] = useState([]);
  const [loading, setLoading] = useState(false);
  const[currentPage, setCurrentPage] = useState(1);
  const[musicPerPage, setMusicPerPage] = useState(10);

  useEffect(() => {
    const fetchMusics = async () => {
      setLoading(true);
      const result = await axios.get('http://localhost:8000/api/musics');
      setMusics(result.data);
      setLoading(false)
    }

    fetchMusics();
  }, []);

  console.log(musics)
  return (
    <div className = 'container'>
      <h1>Playlist</h1>
    </div>
  )
}
export default App;