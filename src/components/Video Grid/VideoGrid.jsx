import React, { useEffect, useState } from "react";
import "./VideoGrid.css";

function VideoGrid() {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    fetch("/data/db.json")
      .then((response) => response.json())
      .then((data) => setVideoData(data))
      .catch((error) => console.error("Error fetching the data:", error));
  }, []);

  return (
    <>
      <div className="video-grid">
        {videoData?.map((video) => (
          <a key={video.id} href={video.url} target="_blank">
            <div className="video-preview">
              <div>
                <div className="thumbnail-container">
                  <img
                    className="thumbnail"
                    src={video.thumbnail}
                    alt="Thumbnail"
                  />
                  <div className="video-time">{video.videoTime}</div>
                </div>
                <div className="video-info-container">
                  <div>
                    <img
                      className="channel"
                      src={video.channelImage}
                      alt="Profile"
                    />
                  </div>
                  <div className="video-info">
                    <p className="title-main">{video.title.length > 75 ? `${video.title.slice(0, 75)}...` : video.title}</p>
                    <p className="author">{video.author}</p>
                    <p className="video-stats">
                      {video.views} views &#183; {video.timeAgo}
                    </p>
                  </div>
                  <div className="settings-icon-container">
                    <img
                      className="settings-icon"
                      src="/images/settings.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* <div className="video-grid">
        <div className="video-preview">
          <div className="thumbnail-container">
            <img className="thumbnail" src="thumbnails/9al.webp" />
            <div className="video-time">13:32</div>
          </div>
          <div className="video-info-container">
            <div>
              <img className="channel" src="thumbnails/9allogo.jpg" />
            </div>
            <div className="video-info">
              <p className="title-main">
                3 NEW MESSI CARDS 105 PACK OPENING &#x1F976; &#x1F410; EFOOTBALL
                24 mobile
              </p>
              <p className="author">9AL Games</p>
              <p className="video-stats">296K views &#183; 5 days ago</p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default VideoGrid;
