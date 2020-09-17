export const musicLoading = () => ({
    type: 'MUSIC_LOADING',
  });
  
export const musicFailed = errmess => ({
    type: 'MUSIC_FAILED',
    payload: errmess,
});

export const addMusic = music => ({
    type: 'ADD_MUSIC',
    payload: music,
});

export const fetchSingers = () => dispatch => {
    dispatch(musicLoading(true));
    return fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/musics`, {
        headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        },
    })
        .then(response => {
        if (response.ok) {
            return response;
        }

        const error = new Error(`Error ${response.status}: ${response.statusText}`);
        error.response = response;
        throw error;
        },
        error => {
        const errmess = new Error(error.message);
        throw errmess;
        })
        .then(response => response.json())
        .then(musics => dispatch(addMusic(musics)))
        .catch(error => dispatch(musicFailed(error.message)));
};