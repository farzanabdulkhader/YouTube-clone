// import { useEffect } from "react";
import Video from "./Video";

const videos = [
  {
    videoLink: "https://www.youtube.com/watch?v=n2RNcPRtAiY",
    thumbnail: "./thumbnails/thumbnail-1.webp",
    desc: " Talking Tech and AI with Google CEO Sundar Pichai!",
    time: "14:20",
    profilePicture: "./thumbnails/channel-1.jpeg;",
    author: "Marques Brownlee",
    subscribers: "15M subscribers",
    videoStats: "3.4M views, 6 months ago",
  },
  {
    videoLink: "https://www.youtube.com/watch?v=mP0RAo9SKZk",
    thumbnail: "./thumbnails/thumbnail-2.webp",
    desc: " Try Not To Laugh Challenge #9",
    time: "8:22",
    profilePicture: "./thumbnails/channel-2.jpeg",
    author: "Markiplier",
    subscribers: "10M subscribers",
    videoStats: "19M views, 4 years ago",
  },
  {
    videoLink: "https://www.youtube.com/watch?v=FgjPQQeTh1w",
    thumbnail: "./thumbnails/thumbnail-3.webp",
    desc: "Crazy Tik Toks Taken Moments Before DISASTER",
    time: "9:13",
    profilePicture: "./thumbnails/channel-3.jpeg",
    author: "SSSniperWolf",
    subscribers: "15M subscribers",
    videoStats: "12M views &#183; 1 year ago",
  },
  {
    videoLink: "https://www.youtube.com/watch?v=094y1Z2wpJg",
    thumbnail: "./thumbnails/thumbnail-4.webp",
    desc: "The Simplest Math Problem No One Can Solve - Collatz Conjecture",
    time: "14:20",
    profilePicture: "./thumbnails/channel-4.jpeg;",
    author: "Marques Brownlee",
    subscribers: "15M subscribers",
    videoStats: "3.4M views, 6 months ago",
  },
  {
    videoLink: "https://www.youtube.com/watch?v=n2RNcPRtAiY",
    thumbnail: "./thumbnails/thumbnail-5.webp",
    desc: " Talking Tech and AI with Google CEO Sundar Pichai!",
    time: "14:20",
    profilePicture: "./thumbnails/channel-5.jpeg;",
    author: "Marques Brownlee",
    subscribers: "15M subscribers",
    videoStats: "3.4M views, 6 months ago",
  },
  {
    videoLink: "https://www.youtube.com/watch?v=n2RNcPRtAiY",
    thumbnail: "./thumbnails/thumbnail-6.webp",
    desc: " Talking Tech and AI with Google CEO Sundar Pichai!",
    time: "14:20",
    profilePicture: "./thumbnails/channel-6.jpeg;",
    author: "Marques Brownlee",
    subscribers: "15M subscribers",
    videoStats: "3.4M views, 6 months ago",
  },
];

function Videos() {
  //   useEffect(() => {
  //     async function getVideo() {
  //       const res = await fetch(
  //         "https://react-test.aventusinformatics.com/api/feeds/get-videos"
  //       );
  //       const data = await res.json();
  //       console.log(data);
  //     }
  //     getVideo();
  //   }, []);

  return (
    <section className="video-grid">
      {videos.map((video, i) => (
        <Video video={video} key={i} />
      ))}
    </section>
  );
}

export default Videos;
