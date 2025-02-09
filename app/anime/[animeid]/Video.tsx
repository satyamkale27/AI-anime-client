"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../lib/store/store";
import { setVideo } from "../../../lib/slices/videoUrlSlice";

const Video = ({ data }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setVideo(data.url.toString()));
  };

  return (
    <div
      className="bg-gray-600 text-white w-10 h-8 text-center rounded-sm hover:bg-slate-400 transition duration-300 "
      onClick={handleClick}
    >
      {data.EpisodeNo}
    </div>
  );
};

export default Video;
