export const musicLoading = () => ({
    type: 'MUSIC_LOADING',
  });
  
  export const musicFailed = errmess => ({
    type: 'MUSIC_FAILED',
    payload: errmess,
  });
  export const addHouse = music => ({
    type: 'ADD_MUSIC',
    payload: music,
  });