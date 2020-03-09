import {combineReducers} from 'redux'

const songsReducer = () => {
  return ([
    {
      title: 'No Scrubs',
      duration: '4:05'
    },
    {
      title: 'Macarena',
      duration: '1:25'
    }, {
      title: 'All Star',
      duration: '3:15'
    },
    {
      title: 'I Want i that way',
      duration: '2:45'
    }

  ])
}

const selectedSongReducer = (selectedSong = null, action) =>{
  if(action.type === 'SONG_SELECTED'){
    return action.payload.song
  }
  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
