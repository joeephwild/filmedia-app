import { useContext, useReducer, useState } from "react";
import PlayerReducer from "./PlayerReducer";
import playerContext from "./PlayerContext";



import {
    SET_CURRENT_SONG,
    TOGGLE_RANDOM,
    TOGGLE_REPEAT,
    TOGGLE_PLAYING,
    SET_SONGS_ARRAY,
  } from './types'
import { useStateContext } from ".";

export const PlayerState = (props) => {
  const [currentSongs, setCurrentSongs] = useState({});
  console.log(currentSongs)
  const {allMusic} = useStateContext()
  const initialState = {
    currentSong: currentSongs.pid,
    songslist: currentSongs,
    repeat: false,
    random: false,
    playing: false,
    audio: null,
  };
  console.log(initialState)

  const [state, dispatch] = useReducer(PlayerReducer, initialState);

  const setCurrent = (id) => dispatch({ type: "SET_CURRENT_SONG", data: id });

  // Set songs array
  const songsSet = (songArr) =>
    dispatch({ type: SET_SONGS_ARRAY, data: songArr })

  const togglePlaying = () =>
    dispatch({ type: "TOGGLE_PLAYING", data: state.playing ? false : true });

  // Prev song
  const prevSong = () => {
    if (state.random) {
      return setCurrentSongs(~~(Math.random() * state.currentSongs.length));
    }

    if (state.currentSongs === 0) {
      return setCurrentSongs(state.currentSongs.pid - 1);
    } else {
      return setCurrentSongs(state.currentSongs.pid - 1);
    }
  };

  // Next song
  const nextSong = () => {
    if (state.random) {
      return setCurrentSongs(~~(Math.random() * state.songslist.length));
    }
    if (state.currentSong === state.songslist.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(state.currentSong + 1);
    }
  };

   // Repeat and Random
   const toggleRepeat = (id) =>
   dispatch({ type: TOGGLE_REPEAT, data: state.repeat ? false : true })
 const toggleRandom = (id) =>
   dispatch({ type: TOGGLE_RANDOM, data: state.random ? false : true })

 // End of Song
 const handleEnd = () => {
   // Check for random and repeat options
   if (state.random) {
     return setCurrent(~~(Math.random() * state.songslist.length))
   } else {
     if (state.repeat) {
       nextSong()
     } else if (state.currentSong === state.songslist.length - 1) {
       return
     } else {
       nextSong()
     }
   }
 }

  return (
    <playerContext.Provider
      value={{
        currentSong: state.currentSong,
        // songs: state.songs,
        songslist: state.songslist,
        repeat: state.repeat,
        random: state.random,
        playing: state.playing,
        audio: state.audio,
        currentSongs,
        setCurrentSongs,
        setCurrent,
        nextSong,
        prevSong,
        toggleRandom,
        toggleRepeat,
        togglePlaying,
        handleEnd,
        songsSet,
      }}
    >
      {props.children}
    </playerContext.Provider>
  );
};

export const usePlayerContext = () => useContext(playerContext);
