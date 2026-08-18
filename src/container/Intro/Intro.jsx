import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import './Intro.css';

// meal.mp4 is ~4 MB (already optimized by developer).
// preload="none" ensures the browser does NOT download the video
// until the user actually clicks play — saving ~4 MB on every page load.
const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src="/meal.mp4"
        type="video/mp4"
        loop
        controls={false}
        muted
        preload="none"
        playsInline
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
