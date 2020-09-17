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