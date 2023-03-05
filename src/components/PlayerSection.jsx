import React, { useEffect, useRef, useState } from "react";
import {
  BsPip,
  BsFillVolumeUpFill,
  BsPlayCircleFill,
  BsPauseCircleFill,
} from "react-icons/bs";
import { BiSkipNext, BiSkipPrevious, BiShuffle } from "react-icons/bi";
import { RiPlayListFill, RiMoneyDollarCircleLine } from "react-icons/ri";
import { FiRepeat, FiHeart } from "react-icons/fi";

import { useStateContext } from "../context";
import { useLocation } from "react-router-dom";
import { usePlayerContext } from "../context/PlayerState";
import { useTrackContext } from "../context/TrackContext";

const PlayerSection = () => {
  const { state } = useLocation()
  const {
    currentSongs,
    togglePlaying,
    playing,
    nextSong,
    prevSong,
    toggleRandom,
    toggleRepeat,
    handleEnd,
    current,
  } = usePlayerContext();
  const { setPip, openPip, setBigScreen, openBigScreen, allMusic } =
    useStateContext();
  console.log(allMusic);
  // self State
  const [statevolume, setStateVolume] = useState(0.3);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const { purchaseTrack, isLoading } = useTrackContext();

  const handlePurchase = async () => {
    try {
      const data = await purchaseTrack(current);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

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

  const handleVolume = (p) => {
    setStateVolume(p);
    audioPlayer.current.volume = p;
  };

  useEffect(() => {
    audioPlayer.current.volume = statevolume;
    if (playing) {
      toggleAudio();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSongs]);

  let audioPlayer = useRef("audio_tag");

  return (
    <div className="grid grid-cols-12 w-screen max-w-screen fixed p-2 bottom-0 opacity-90 flex h-1/8 text-white items-center justify-center gap-2 bg-[#000000] ">
      <div class="col-span-2">
        <div class="flex ml-5">
          <img
            class="h-1/4 w-1/4 rounded rounded-l"
            src={currentSongs.image}
            alt=""
          />
          <div class="relative ml-2 w-full">
            <div class="">
              <h1 class="text-lg font-bold font-OpenSans-Bold">{currentSongs.title}</h1>
              <h1 class="text-xs text-gray-500">{state.name}</h1>
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

      <div class="col-span-8 p-4">
        <div class="flex items-center justify-center">
          <h1 class="text-xs">
            From the Album: <b>Love, Damini</b>
          </h1>
        </div>
        <div class="ml-10 mt-2 grid grid-cols-9  items-center justify-center">
          <span class="col-span-1 text-right text-xs mr-2">
            {fmtMSS(currentTime)}
          </span>
          <div class="col-span-7 pt-2">
            <div class="">
              <div class="">
                <input
                  type="range"
                  value={duration ? (currentTime * 100) / duration : 0}
                  onChange={handleProgress}
                  className=" bg-gray-100 w-full rounded overflow-hidden h-1 mb-1.5"
                />
              </div>
            </div>
          </div>
          <span class="col-span-1 text-xs  ml-2">{fmtMSS(duration)}</span>
        </div>
        <div class="flex items-center justify-center gap-5 mt-2">
          <button onClick={toggleRandom}>
            <BiShuffle size={29} />
          </button>
          <button>
            <RiPlayListFill size={29} />
          </button>
          <button onClick={prevSong}>
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

      <div class="col-span-2 flex items-center justify-center gap-2">
        <button className="flex items-center">
          <BsFillVolumeUpFill size={29} />
          <input
            type="range"
            value={Math.round(statevolume * 100)}
            onChange={(e) => handleVolume(e.target.value)}
            className=" bg-gray-100 w-full rounded overflow-hidden h-1 mb-1.5"
          />
        </button>
        <button>
          <FiHeart size={29} />
        </button>
        <button onClick={() => handlePurchase()}>
          <RiMoneyDollarCircleLine size={29} />
        </button>
        <button>...</button>
      </div>
    </div>
  );
};

export default PlayerSection;
