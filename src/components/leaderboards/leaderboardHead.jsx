import React from "react";

export default function LeaderboardHead() {
  return (
    <div className="leaderboardHeader">
        <div className="leaderboardBack">
          <svg
            height="25px"
            width="25px"
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 512 404.43"
          >
            <path
              fill-rule="nonzero"
              d="m68.69 184.48 443.31.55v34.98l-438.96-.54 173.67 159.15-23.6 25.79L0 199.94 218.6.02l23.6 25.79z"
            />
          </svg>
        </div>

        <div className="leaderboardTrophy">
          <div className="svg-cir">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 25 25"
              fill="none"
            >
              <g clip-path="url(#clip0_83_48)">
                <path
                  d="M6.71843 23.3229V19.8872H10.5868V17.9168C9.78295 17.681 9.04612 17.3189 8.37629 16.8305C7.70645 16.3421 7.17058 15.7274 6.76867 14.9864C5.04384 15.0706 3.59113 14.4854 2.41053 13.2307C1.22994 11.976 0.639648 10.4561 0.639648 8.67091V7.66043C0.639648 6.70047 0.970381 5.88788 1.63185 5.22265C2.29331 4.55741 3.10131 4.2248 4.05583 4.2248H5.91463V2.20384H18.6751V4.2248H20.5339C21.4884 4.2248 22.2964 4.55741 22.9578 5.22265C23.6193 5.88788 23.95 6.70047 23.95 7.66043V8.67091C23.95 10.4561 23.3597 11.976 22.1792 13.2307C20.9986 14.4854 19.5458 15.0706 17.821 14.9864C17.4191 15.7274 16.8832 16.3421 16.2134 16.8305C15.5436 17.3189 14.8067 17.681 14.0029 17.9168V19.8872H17.8712V23.3229H6.71843ZM5.91463 11.5003V7.66043H4.05583V8.67091C4.05583 9.31088 4.22329 9.88349 4.55821 10.3887C4.89312 10.894 5.34527 11.2645 5.91463 11.5003ZM12.2948 14.7338C13.1154 14.7338 13.8145 14.4433 14.3923 13.8623C14.97 13.2812 15.2589 12.5781 15.2589 11.7529V5.63947H9.33081V11.7529C9.33081 12.5781 9.61967 13.2812 10.1974 13.8623C10.7751 14.4433 11.4743 14.7338 12.2948 14.7338ZM18.6751 11.5003C19.2444 11.2645 19.6966 10.894 20.0315 10.3887C20.3664 9.88349 20.5339 9.31088 20.5339 8.67091V7.66043H18.6751V11.5003Z"
                  fill="#0EA5E9"
                />
              </g>
              <defs>
                <clipPath id="clip0_83_48">
                  <rect
                    width="24.1142"
                    height="24.2515"
                    fill="white"
                    transform="translate(0.237793 0.637596)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <div className="leaderboardTitle">
          <h2>Leaderboard</h2>
        </div>

        <div className="options">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
  );
}