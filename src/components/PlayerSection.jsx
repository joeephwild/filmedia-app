import React, { useEffect, useRef, useState } from "react";
import {
  BsPip,
  BsFillVolumeUpFill,
  BsPlayCircleFill,
  BsPauseCircleFill,
} from "react-icons/bs";
import { BiSkipNext, BiSkipPrevious, BiShuffle } from "react-icons/bi";
import { RiPlayListFill, RiMoneyDollarCircleLine } from "react-icons/ri";
import { FiRepeat, FiHeart, FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineCloseCircle } from 'react-icons/ai'

import { useStateContext } from "../context";
import { useLocation } from "react-router-dom";
import { usePlayerContext } from "../context/PlayerState";
import { useTrackContext } from "../context/TrackContext";
import Loader from "./Loader";
import { ethers } from "ethers";
import { usePodcastContext } from "../context/PodcastContext";

const PlayerSection = () => {
  const { state } = useLocation();
  console.log(state);
  const {
    currentSongs,
    togglePlaying,
    playing,
    nextSong,
    toggleRandom,
    toggleRepeat,
    handleEnd,
    setCurrentSongs
  } = usePlayerContext();
  const { setPip, openPip, setBigScreen, openBigScreen, setOpenPlayer } =
    useStateContext();
  console.log(currentSongs);
  // self State
  const [statevolume, setStateVolume] = useState(0.3);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(30)
  const { go } = usePodcastContext()
  console.log(currentSongs.cost);

  const { purchaseTrack, isLoading, donate } = useTrackContext();
  const [loading, setLoading] = useState(false)

  const handlePurchase = async () => {
    try {
      setLoading(true)
      const data = await donate(
        currentSongs.pid, 
        currentSongs.artist,
        currentSongs.cost
        );
       await go()
      console.log(data);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  const skipBack = ()=>
  {
    const index = currentSongs.findIndex(x=>x.title === currentSongs.title);
    if (index == 0)
    {
      setCurrentSongs(currentSongs[currentSongs.length - 1])
    }
    else
    {
      setCurrentSongs(currentSongs[index - 1])
    }
    audioPlayer.current.currentTime = 0;
    
  }


  useEffect(() => {
      if(audioPlayer){
        audioPlayer.current.volume = volume / 100
      }
  }, [volume])
  

  const handleClick = () => {
    if (!openPip) {
      setPip(true);
    } else {
      if (openBigScreen) {
        console.log("AHDFHDH");
        setBigScreen(false);
        setPip(true);
      } else {
        setPip(false);
      }
    }
  };

  const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + ~~s;
  };

  const handleProgress = (e) => {
    let compute = (e.target.value * duration) / 100;
    setCurrentTime(compute);
    audioPlayer.current.currentTime = compute;
  };

  const toggleAudio = () =>
    audioPlayer.current.paused
      ? audioPlayer.current.play()
      : audioPlayer.current.pause();

  useEffect(() => {
    audioPlayer.current.volume = statevolume;
    if (playing) {
      toggleAudio();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSongs]);

  let audioPlayer = useRef("audio_tag");

  return (
    <div className="grid grid-cols-12 w-screen max-w-screen fixed p-2 bottom-0 opacity-90  h-[14%] text-white items-center justify-center gap-2 bg-[#000000] ">
      {loading && (<Loader />)}
      <div class="col-span-2 ">
        <div class="md:flex hidden ml-5">
          <img
            class="h-1/4 w-1/4 rounded rounded-l"
            src={currentSongs.image}
            alt=""
          />
          <div class="relative ml-2 w-full">
            <div class="">
              <h1 class="text-lg font-bold font-OpenSans-Bold">
                {currentSongs.title}
              </h1>
              <h1 class="text-xs text-gray-500">{currentSongs.artist}</h1>
            </div>
          </div>
        </div>
      </div>

      {/**audioPlayer section */}
      <audio
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onCanPlay={(e) => setDuration(e.target.duration)}
        onEnded={handleEnd}
        type="audioPlayer/mpeg"
        preload="true"
        ref={audioPlayer}
        src={currentSongs.audio}
      ></audio>

      <div class="col-span-8 p-6">
        <div class="flex items-center justify-center">
          <h1 class="text-xs">
            From the Album: <b>Love, Damini</b>
          </h1>
        </div>
        <div class="flex items-center justify-center gap-5 mt-2 ">
          <div class="w-full flex items-center justify-center ml-16 pt-2">
          
            <div className="flex items-center w-full justify-center">
            <span className="col-span-1 text-right text-xs mr-2">
              {fmtMSS(currentTime)}
            </span>
              <input
                type="range"
                value={duration ? (currentTime * 100) / duration : 0}
                onChange={handleProgress}
                className=" bg-gray-100 w-[512px]  rounded h-1 mb-1.5"
              />
              <span className="col-span-1 text-xs  ml-2">{fmtMSS(duration)}</span>
            </div>
          </div>
        </div>
        <div className="flex text-[#808080] items-center justify-center space-x-5 mt-2">
          <button onClick={toggleRandom}>
            <BiShuffle size={29} />
          </button>
          <button>
            <RiPlayListFill size={29} />
          </button>
          <button onClick={skipBack}>
            <BiSkipPrevious size={29} />
          </button>
          <button
            onClick={() => {
              togglePlaying();
              toggleAudio();
            }}
          >
            {playing ? (
              <BsPauseCircleFill size={29} />
            ) : (
              <BsPlayCircleFill size={29} />
            )}
          </button>
          <button onClick={nextSong}>
            <BiSkipNext size={29} />
          </button>
          <button onClick={() => handleClick()}>
            <BsPip size={29} />
          </button>
          <button onClick={toggleRepeat}>
            <FiRepeat size={29} />
          </button>
        </div>
      </div>

      <div class="col-span-2 md:flex hidden space-x-3 w-full items-center justify-center">
        <button className="flex items-center">
          <BsFillVolumeUpFill onClick={() => setVolume(0)} size={29} />
          <input type="range" min={0} max={100} value={volume} onChange={(e) => setVolume(e.target.value)} />
        </button>
        <button>
          <FiHeart size={29} />
        </button>
        <button onClick={() => handlePurchase()}>
          <RiMoneyDollarCircleLine size={29} />
        </button>
        <button>
          <FiMoreHorizontal size={29} />
        </button>
        <div onClick={() => setOpenPlayer(false)}>
          <AiOutlineCloseCircle size={29} />
        </div>
      </div>
    </div>
  );
};

export default PlayerSection;
