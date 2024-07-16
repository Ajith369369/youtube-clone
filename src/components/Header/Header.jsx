import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="left-section">
          {/* ..../public/images/hamburger-menu.svg */}
          <img
            className="hamburger-menu"
            src="/images/hamburger-menu.svg"
          />
          <img
            className="youtube-logo"
            src="./public/images/youtube-logo.svg"
          />
        </div>
        <div className="middle-section">
          <input className="search" type="text" placeholder="Search" />
          <button className="search-button">
            <img className="search-icon" src="./public/images/search.svg" />
            <div className="tooltip">Search</div>
          </button>
          <button className="voice-button">
            <img
              className="voice-icon"
              src="./public/images/voice-search-icon.svg"
            />
            <div className="tooltip">Search with your voice</div>
          </button>
        </div>
        <div className="right-section">
          {/* <div className="upload-icon-container">
            <img className="upload-icon" src="./public/images/upload.svg" />
            <div className="tooltip">Create</div>
          </div> */}
          {/* <div className="youtube-app-icon-contanier">
            <img
              className="youtube-app-icon"
              src="./public/images/youtube-apps.svg"
            />
            <div className="tooltip">Youtube apps</div>
          </div> */}
          {/* <div className="notification-icon-container">
            <img
              className="notification-icon"
              src="./public/images/notifications.svg"
            />
            <div className="notification-count">3</div>
            <div className="tooltip">Notifications</div>
          </div> */}
          {/* <img
            className="profile-icon"
            src="./public/images/channels4_profile.jpg"
          /> */}
          <div className="settings-icon-container">
            <img className="settings-icon" src="./public/images/settings.svg" />
            <div className="tooltip">Settings</div>
          </div>
          <ytd-button-renderer className="style-scope ytd-masthead">
            <yt-button-shape>
              <a
                className="yt-spec-button-shape-next yt-spec-button-shape-next--outline yt-spec-button-shape-next--call-to-action yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-leading"
                aria-label="Sign in"
                href="#"
              >
                <div
                  className="yt-spec-button-shape-next__icon"
                  aria-hidden="true"
                >
                  <yt-icon className="yt-icon">
                    <yt-icon-shape className="style-scope yt-icon">
                      <icon-shape className="yt-spec-icon-shape">
                        <div className="icon-shape-div">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                            focusable="false"
                            className="icon-shape-div-svg"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 1c4.96 0 9 4.04 9 9 0 1.42-.34 2.76-.93 3.96-1.53-1.72-3.98-2.89-7.38-3.03A3.996 3.996 0 0016 9c0-2.21-1.79-4-4-4S8 6.79 8 9c0 1.97 1.43 3.6 3.31 3.93-3.4.14-5.85 1.31-7.38 3.03C3.34 14.76 3 13.42 3 12c0-4.96 4.04-9 9-9zM9 9c0-1.65 1.35-3 3-3s3 1.35 3 3-1.35 3-3 3-3-1.35-3-3zm3 12c-3.16 0-5.94-1.64-7.55-4.12C6.01 14.93 8.61 13.9 12 13.9c3.39 0 5.99 1.03 7.55 2.98C17.94 19.36 15.16 21 12 21z"></path>
                          </svg>
                        </div>
                      </icon-shape>
                    </yt-icon-shape>
                  </yt-icon>
                </div>
                <div className="yt-spec-button-shape-next__button-text-content">
                  <span
                    className="yt-core-attributed-string yt-core-attributed-string--white-space-no-wrap"
                    role="text"
                  >
                    Sign in
                  </span>
                </div>
              </a>
            </yt-button-shape>
          </ytd-button-renderer>
        </div>
      </div>
    </>
  );
}

export default Header;
