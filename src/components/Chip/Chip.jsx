import React from "react";
import "./Chip.css";

function Chip() {
  return (
    <>
      <div
        id="chips-wrapper"
        className="style-scope ytd-feed-filter-chip-bar-renderer"
      >
        <div
          id="chips-content"
          className="style-scope ytd-feed-filter-chip-bar-renderer"
        >
          <div
            id="left-arrow"
            className="style-scope ytd-feed-filter-chip-bar-renderer"
          >
            <div
              id="left-arrow-button"
              className="style-scope ytd-feed-filter-chip-bar-renderer"
            >
              <ytd-button-renderer className="style-scope ytd-feed-filter-chip-bar-renderer">
                <yt-button-shape>
                  <button
                    className="yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-only-default"
                    aria-label="Previous"
                  >
                    <div
                      className="yt-spec-button-shape-next__icon"
                      aria-hidden="true"
                    >
                      <yt-icon className="arrow">
                        <yt-icon-shape className="style-scope yt-icon">
                          <icon-shape className="yt-spec-icon-shape">
                            <div
                              className="arrow-icon-shape"
                            >
                              <img
                                src="./public/images/left-arrow.svg"
                                alt=""
                              />
                            </div>
                          </icon-shape>
                        </yt-icon-shape>
                      </yt-icon>
                    </div>
                    <yt-touch-feedback-shape>
                      <div
                        className="yt-spec-touch-feedback-shape yt-spec-touch-feedback-shape--touch-response"
                        aria-hidden="true"
                      >
                        <div className="yt-spec-touch-feedback-shape__stroke"></div>
                        <div className="yt-spec-touch-feedback-shape__fill"></div>
                      </div>
                    </yt-touch-feedback-shape>
                  </button>
                </yt-button-shape>
                <tp-yt-paper-tooltip offset="8" role="tooltip" tabindex="-1">
                  <div
                    id="tooltip"
                    className="hidden style-scope tp-yt-paper-tooltip"
                  >
                    Previous
                  </div>
                </tp-yt-paper-tooltip>
              </ytd-button-renderer>
            </div>
          </div>

          <div
            id="scroll-container"
            className="style-scope ytd-feed-filter-chip-bar-renderer"
          >
            <iron-selector
              id="chips"
              activate-event=""
              role="tablist"
              selected-attribute="selected"
              className="style-scope ytd-feed-filter-chip-bar-renderer"
              style={{transform: 'translateX(0px)'}}
            >
              <yt-chip-cloud-chip-renderer
                className="style-scope ytd-feed-filter-chip-bar-renderer iron-selected"
                aria-selected="true"
                role="tab"
                tabindex="0"
                selected=""
              >
                <yt-formatted-string
                  id="text"
                  className="style-scope yt-chip-cloud-chip-renderer"
                  title="All"
                >
                  All
                </yt-formatted-string>{" "}
              </yt-chip-cloud-chip-renderer>
              <yt-chip-cloud-chip-renderer
                className="style-scope ytd-feed-filter-chip-bar-renderer"
                aria-selected="false"
                role="tab"
                tabindex="0"
              >
                <yt-formatted-string
                  id="text"
                  className="style-scope yt-chip-cloud-chip-renderer"
                  title="Live"
                >
                  Live
                </yt-formatted-string>{" "}
              </yt-chip-cloud-chip-renderer>
              <yt-chip-cloud-chip-renderer
                className="style-scope ytd-feed-filter-chip-bar-renderer"
                aria-selected="false"
                role="tab"
                tabindex="0"
              >
                <yt-formatted-string
                  id="text"
                  className="style-scope yt-chip-cloud-chip-renderer"
                  title="Music"
                >
                  Music
                </yt-formatted-string>{" "}
              </yt-chip-cloud-chip-renderer>
              <yt-chip-cloud-chip-renderer
                className="style-scope ytd-feed-filter-chip-bar-renderer"
                aria-selected="false"
                role="tab"
                tabindex="0"
              >
                <yt-formatted-string
                  id="text"
                  className="style-scope yt-chip-cloud-chip-renderer"
                  title="Science fiction"
                >
                  Science fiction
                </yt-formatted-string>{" "}
              </yt-chip-cloud-chip-renderer>
              <yt-chip-cloud-chip-renderer
                className="style-scope ytd-feed-filter-chip-bar-renderer"
                aria-selected="false"
                role="tab"
                tabindex="0"
              >
                <yt-formatted-string
                  id="text"
                  className="style-scope yt-chip-cloud-chip-renderer"
                  title="Action Thrillers"
                >
                  Action Thrillers
                </yt-formatted-string>{" "}
              </yt-chip-cloud-chip-renderer>
              <yt-chip-cloud-chip-renderer
                className="style-scope ytd-feed-filter-chip-bar-renderer"
                aria-selected="false"
                role="tab"
                tabindex="0"
              >
                <yt-formatted-string
                  id="text"
                  className="style-scope yt-chip-cloud-chip-renderer"
                  title="India national cricket team"
                >
                  India national cricket team
                </yt-formatted-string>{" "}
              </yt-chip-cloud-chip-renderer>
              <yt-chip-cloud-chip-renderer
                className="style-scope ytd-feed-filter-chip-bar-renderer"
                aria-selected="false"
                role="tab"
                tabindex="0"
              >
                <yt-formatted-string
                  id="text"
                  className="style-scope yt-chip-cloud-chip-renderer"
                  title="Martial Arts Movies"
                >
                  Martial Arts Movies
                </yt-formatted-string>{" "}
              </yt-chip-cloud-chip-renderer>
              <yt-chip-cloud-chip-renderer
                className="style-scope ytd-feed-filter-chip-bar-renderer"
                aria-selected="false"
                role="tab"
                tabindex="0"
              >
                <yt-formatted-string
                  id="text"
                  className="style-scope yt-chip-cloud-chip-renderer"
                  title="Tamil Cinema"
                >
                  Tamil Cinema
                </yt-formatted-string>{" "}
              </yt-chip-cloud-chip-renderer>
              <yt-chip-cloud-chip-renderer
                className="style-scope ytd-feed-filter-chip-bar-renderer"
                aria-selected="false"
                role="tab"
                tabindex="0"
              >
                <yt-formatted-string
                  id="text"
                  className="style-scope yt-chip-cloud-chip-renderer"
                  title="Dramedy"
                >
                  Dramedy
                </yt-formatted-string>{" "}
              </yt-chip-cloud-chip-renderer>
              <yt-chip-cloud-chip-renderer
                className="style-scope ytd-feed-filter-chip-bar-renderer"
                aria-selected="false"
                role="tab"
                tabindex="0"
              >
                <yt-formatted-string
                  id="text"
                  className="style-scope yt-chip-cloud-chip-renderer"
                  title="Gaming"
                >
                  Gaming
                </yt-formatted-string>{" "}
              </yt-chip-cloud-chip-renderer>
              <yt-chip-cloud-chip-renderer
                className="style-scope ytd-feed-filter-chip-bar-renderer"
                aria-selected="false"
                role="tab"
                tabindex="0"
              >
                <yt-formatted-string
                  id="text"
                  className="style-scope yt-chip-cloud-chip-renderer"
                  title="Dubbing"
                >
                  Dubbing
                </yt-formatted-string>{" "}
              </yt-chip-cloud-chip-renderer>
              <yt-chip-cloud-chip-renderer
                className="style-scope ytd-feed-filter-chip-bar-renderer"
                aria-selected="false"
                role="tab"
                tabindex="0"
              >
                <yt-formatted-string
                  id="text"
                  className="style-scope yt-chip-cloud-chip-renderer"
                  title="Supercar"
                >
                  Supercar
                </yt-formatted-string>{" "}
              </yt-chip-cloud-chip-renderer>
              <yt-chip-cloud-chip-renderer
                className="style-scope ytd-feed-filter-chip-bar-renderer"
                aria-selected="false"
                role="tab"
                tabindex="0"
              >
                <yt-formatted-string
                  id="text"
                  className="style-scope yt-chip-cloud-chip-renderer"
                  title="House Music"
                >
                  House Music
                </yt-formatted-string>{" "}
              </yt-chip-cloud-chip-renderer>
              <yt-chip-cloud-chip-renderer
                className="style-scope ytd-feed-filter-chip-bar-renderer"
                aria-selected="false"
                role="tab"
                tabindex="0"
              >
                <yt-formatted-string
                  id="text"
                  className="style-scope yt-chip-cloud-chip-renderer"
                  title="Indian Music"
                >
                  Indian Music
                </yt-formatted-string>{" "}
              </yt-chip-cloud-chip-renderer>
              <yt-chip-cloud-chip-renderer
                className="style-scope ytd-feed-filter-chip-bar-renderer"
                aria-selected="false"
                role="tab"
                tabindex="0"
              >
                <yt-formatted-string
                  id="text"
                  className="style-scope yt-chip-cloud-chip-renderer"
                  title="Animated films"
                >
                  Animated films
                </yt-formatted-string>{" "}
              </yt-chip-cloud-chip-renderer>
              <yt-chip-cloud-chip-renderer
                className="style-scope ytd-feed-filter-chip-bar-renderer"
                aria-selected="false"
                role="tab"
                tabindex="0"
              >
                <yt-formatted-string
                  id="text"
                  className="style-scope yt-chip-cloud-chip-renderer"
                  title="Recently uploaded"
                >
                  Recently uploaded
                </yt-formatted-string>
              </yt-chip-cloud-chip-renderer>
            </iron-selector>
          </div>
          <div
            id="right-arrow"
            className="style-scope ytd-feed-filter-chip-bar-renderer"
          >
            <div
              id="right-arrow-button"
              className="style-scope ytd-feed-filter-chip-bar-renderer"
            >
              <ytd-button-renderer className="style-scope ytd-feed-filter-chip-bar-renderer">
                <yt-button-shape>
                  <button
                    className="yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-only-default"
                    aria-label="Next"
                  >
                    <div
                      className="yt-spec-button-shape-next__icon"
                      aria-hidden="true"
                    >
                      <yt-icon className="arrow">
                        <yt-icon-shape className="style-scope yt-icon">
                          <icon-shape className="yt-spec-icon-shape">
                            <div
                              className="arrow-icon-shape"
                            >
                              <img
                                src="./public/images/right-arrow.svg"
                                alt=""
                              />
                            </div>
                          </icon-shape>
                        </yt-icon-shape>
                      </yt-icon>
                    </div>
                    <yt-touch-feedback-shape>
                      <div
                        className="yt-spec-touch-feedback-shape yt-spec-touch-feedback-shape--touch-response"
                        aria-hidden="true"
                      >
                        <div className="yt-spec-touch-feedback-shape__stroke"></div>
                        <div className="yt-spec-touch-feedback-shape__fill"></div>
                      </div>
                    </yt-touch-feedback-shape>
                  </button>
                </yt-button-shape>
                <tp-yt-paper-tooltip offset="8" role="tooltip" tabindex="-1">
                  <div
                    id="tooltip"
                    className="hidden style-scope tp-yt-paper-tooltip"
                  >
                    Next
                  </div>
                </tp-yt-paper-tooltip>
              </ytd-button-renderer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chip;
