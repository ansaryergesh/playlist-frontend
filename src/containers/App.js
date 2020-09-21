import React, { useState, useEffect } from 'react';
import PlayList from '../components/PlayList';
import PaginationBar from '../components/PaginationBar';
import axios from 'axios';
import './App.css';

const App = () => {
  const [musics, setMusics] = useState([]);
  const [genres, setGenres] = useState([]);
  const [singers, setSingers] = useState([]);
  const [loading, setLoading] = useState(false);
  const[currentPage, setCurrentPage] = useState(1);
  const[musicPerPage, setMusicPerPage] = useState(10);
  const[selectedGenre, setSelectGenre] = useState('Все');
  const[selectedSinger, setSelectSinger] = useState('Все');
  const[sorting, setSort] = useState(null);
  const[order, setOrder] = useState(null);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const setPageNumber = (page) => setMusicPerPage(page) 
  const defaultMusics = musics;

  const sortedMusics = (elems) => {
    if(sorting === null) {
      return elems;
    }
    if(order === null) {
      return elems
    }
    if(sorting === 'Year') {
      if(order === false) {
        return elems.sort(function(a,b){
          return a.year - b.year;
        })
      }else {
        return elems.sort(function(a,b){
          return b.year - a.year;
        })
      }
    }
    if(sorting === 'Genre') {
      if(order === false) {
        return elems.sort(function(a,b){
          var nameA=a.genre_name.toLowerCase(), nameB=b.genre_name.toLowerCase();
          if (nameA > nameB)
            return -1 
          if (nameA < nameB)
            return 1
          return 0 
        })
      }else {
        return elems.sort(function(a,b){
          var nameA=a.genre_name.toLowerCase(), nameB=b.genre_name.toLowerCase();
          if (nameA < nameB) 
            return -1 
          if (nameA > nameB)
            return 1
          return 0 
        })
      }
    }

    if(sorting === 'Name') {
      if(order === false) {
        return elems.sort(function(a,b){
          var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
          if (nameA > nameB)
            return -1 
          if (nameA < nameB)
            return 1
          return 0 
        })
      }else {
        return elems.sort(function(a,b){
          var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
          if (nameA < nameB) 
            return -1 
          if (nameA > nameB)
            return 1
          return 0 
        })
      }
    }
    if(sorting === 'Singer') {
      if(order === false) {
        return elems.sort(function(a,b){
          var nameA=a.singer_name.toLowerCase(), nameB=b.singer_name.toLowerCase();
          if (nameA > nameB)
            return -1 
          if (nameA < nameB)
            return 1
          return 0 
        })
      }else {
        return elems.sort(function(a,b){
          var nameA=a.singer_name.toLowerCase(), nameB=b.singer_name.toLowerCase();
          if (nameA < nameB) 
            return -1 
          if (nameA > nameB)
            return 1
          return 0 
        })
      }
    }
  }
  const filteredMusics = (elems) => {
    let genreIsSelected = elems.filter(music=> music.genre_name === selectedGenre);
    let singerIsSelected = elems.filter(music=> music.singer_name === selectedSinger)
    if(selectedGenre === 'Все' && selectedSinger === 'Все') {
      return defaultMusics;
    }
    if(selectedGenre !== 'Все') {
      if(selectedSinger !== 'Все') {
        return genreIsSelected.filter(music=>music.singer_name === selectedSinger);
      }else{
      return genreIsSelected;
      }
    }
    if(selectedGenre !== 'Все') {
      if(selectedSinger !== 'Все') {
        return genreIsSelected.filter(music=>music.singer_name === selectedSinger);
      }else{
      return genreIsSelected;
      }
    }
    if(selectedSinger !== 'Все') {
      if(selectedGenre !== 'Все') {
        return singerIsSelected.filter(music=>music.genre_name === selectedGenre);
      }else{
      return singerIsSelected;
      }
    }
  }
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
  const currentMusic = sortedMusics(filteredMusics(musics)).slice(indexFirstMusic, indexLastMusic);
  return (
    <div className = 'container mt-5'>
      <h1 className="text-center text-primary mb-3">Playlist</h1>
      <PlayList 
        musics={currentMusic}
        loading={loading}
        genres={genres}
        singers={singers}
        setSelectGenre={setSelectGenre}
        setSelectSinger={setSelectSinger}
        order={order}
        setOrder={setOrder}
        setSort={setSort}/>
      <PaginationBar 
        musicPerPage={musicPerPage}
        totalMusics={filteredMusics(musics).length}
        setPageNumber={setPageNumber}
        paginate={paginate}
        currentPage={currentPage}
        setSelectSinger={setSelectSinger}
        setSelectGenre={setSelectGenre}
      />
    </div>
  )
}
export default App;