export const singerLoading = () => ({
    type: 'SINGER_LOADING',
});
  
export const singerFailed = errmess => ({
    type: 'SINGER_FAILED',
    payload: errmess,
});
export const addSinger = singer => ({
    type: 'ADD_SINGER',
    payload: singer,
});

export const fetchSingers = () => dispatch => {
    dispatch(singerLoading(true));
    return fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/singers`, {
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
        .then(singers => dispatch(addSinger(singers)))
        .catch(error => dispatch(singerFailed(error.message)));
};