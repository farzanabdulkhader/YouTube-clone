/* eslint-disable react/prop-types */
function Video({ video }) {
  const {
    videoLink,
    thumbnail,
    time,
    desc,
    author,
    videoStats,
    profilePicture,
  } = video;

  return (
    <div className="video-preview">
      <div className="thumbnail-row">
        <a href={videoLink}>
          <img className="thumbnail" src={thumbnail} />
        </a>
        <div className="video-time">{time}</div>
      </div>
      <div className="video-info-grid">
        <div className="channel-picture">
          <div className="profile-picture-container">
            <a href="#">
              <img className="profile-picture" src={profilePicture} />
            </a>
          </div>
        </div>
        <div className="video-info">
          <a style={{ textDecoration: "none" }} href={videoLink}>
            <p className="video-title">{desc}</p>
          </a>
          <p className="video-author">{author}</p>
          <p className="video-stats">{videoStats}</p>
        </div>
      </div>
    </div>
  );
}

export default Video;
