//Action  Createor
export const selectSong = (song) => {
  //Return a Action
  return{
    type: 'SONG_SELECTED',
    payload:{
      song
    }
  }
}


