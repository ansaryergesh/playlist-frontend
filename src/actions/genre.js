export const genreLoading = () => ({
    type: 'GENRE_LOADING',
});
  
export const genreFailed = errmess => ({
    type: 'GENRE_FAILED',
    payload: errmess,
});
export const addGenre = genre => ({
    type: 'ADD_GENRE',
    payload: genre,
});

export const fetchGenres = () => dispatch => {
    dispatch(genreLoading(true));
    return fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/genres`, {
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
        .then(genres => dispatch(addGenre(genres)))
        .catch(error => dispatch(genreFailed(error.message)));
};
