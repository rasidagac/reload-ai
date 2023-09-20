import React from "react";

type SvgProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  Logo: (props: SvgProps) => (
    <svg
      width="126"
      height="18"
      viewBox="0 0 126 18"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0.62915 17.7297H4.21686V10.3577C4.21686 8.44096 5.24894 7.3843 7.01823 7.3843C7.53427 7.3843 8.02574 7.45802 8.32062 7.58089V4.42321C8.05031 4.34949 7.68171 4.28805 7.28853 4.28805C5.7527 4.28805 4.68376 5.23413 4.29058 6.85597H4.21686V4.55836H0.62915V17.7297Z" />
      <path d="M14.8453 18C18.6051 18 20.4235 15.7761 20.829 13.8348L20.8658 13.6997H17.573L17.5484 13.7734C17.2904 14.5106 16.3935 15.3215 14.9191 15.3215C13.0883 15.3215 11.9457 14.0928 11.9088 11.9918H20.9764V10.886C20.9764 6.90512 18.5559 4.28805 14.6979 4.28805C10.8399 4.28805 8.37025 6.96655 8.37025 11.1563V11.1686C8.37025 15.3829 10.8153 18 14.8453 18ZM14.7593 6.96655C16.246 6.96655 17.315 7.91263 17.5361 9.73106H11.9457C12.1791 7.94949 13.2849 6.96655 14.7593 6.96655Z" />
      <path d="M22.4144 17.7297H26.0021V0H22.4144V17.7297Z" />
      <path d="M33.9644 18C37.9453 18 40.4886 15.4444 40.4886 11.144V11.1195C40.4886 6.85597 37.8961 4.28805 33.9521 4.28805C30.0204 4.28805 27.4402 6.88055 27.4402 11.1195V11.144C27.4402 15.4321 29.9589 18 33.9644 18ZM33.9767 15.1863C32.2074 15.1863 31.0893 13.7242 31.0893 11.144V11.1195C31.0893 8.57611 32.2197 7.10171 33.9521 7.10171C35.6968 7.10171 36.8395 8.57611 36.8395 11.1195V11.144C36.8395 13.7119 35.7214 15.1863 33.9767 15.1863Z" />
      <path d="M45.7601 17.9386C47.4925 17.9386 48.8932 17.1154 49.6427 15.7638H49.7164V17.7297H53.3041V8.69898C53.3041 6.04505 51.1048 4.28805 47.7014 4.28805C44.2243 4.28805 42.1355 6.03276 41.939 8.46553L41.9267 8.61297H45.2072L45.2318 8.50239C45.4038 7.65461 46.2147 7.02799 47.554 7.02799C48.9547 7.02799 49.7164 7.7529 49.7164 8.92014V9.73106L46.4605 9.92764C43.1922 10.1365 41.3369 11.5372 41.3369 13.9331V13.9577C41.3369 16.2799 43.1185 17.9386 45.7601 17.9386ZM44.8878 13.7734V13.7488C44.8878 12.815 45.6127 12.2253 47.0011 12.1392L49.7164 11.9672V12.9133C49.7164 14.2894 48.5369 15.3215 46.9273 15.3215C45.6864 15.3215 44.8878 14.744 44.8878 13.7734Z" />
      <path d="M60.0009 18C61.9053 18 63.3551 17.0416 64.0555 15.4812H64.1292V17.7297H67.7169V0H64.1292V6.84369H64.0555C63.3429 5.24642 61.8685 4.28805 60.0009 4.28805C56.6835 4.28805 54.6439 6.84369 54.6439 11.1317V11.144C54.6439 15.4198 56.6835 18 60.0009 18ZM61.205 15.0266C59.4111 15.0266 58.293 13.5399 58.293 11.144V11.1317C58.293 8.72355 59.4234 7.26143 61.205 7.26143C62.9374 7.26143 64.1415 8.76041 64.1415 11.1317V11.144C64.1415 13.5276 62.9497 15.0266 61.205 15.0266Z" />
      <path
        d="M80.6312 18C84.1452 18 86.4182 15.813 86.5903 12.9379V12.8642H83.2483L83.236 12.9748C82.9903 14.3017 82.0933 15.1864 80.6558 15.1864C78.8865 15.1864 77.7807 13.7243 77.7807 11.1441V11.1318C77.7807 8.613 78.8865 7.10174 80.6435 7.10174C82.1302 7.10174 83.0025 8.0601 83.2237 9.31334L83.2483 9.42392H86.578V9.33791C86.4428 6.4874 84.1698 4.28809 80.5944 4.28809C76.6503 4.28809 74.1316 6.90515 74.1316 11.1195V11.1318C74.1316 15.383 76.6135 18 80.6312 18Z"
        fill="currentColor"
      />
      <path
        d="M91.7389 17.9386C93.4713 17.9386 94.872 17.1154 95.6215 15.7639H95.6952V17.7297H99.2829V8.69901C99.2829 6.04508 97.0836 4.28809 93.6802 4.28809C90.203 4.28809 88.1143 6.0328 87.9177 8.46556L87.9054 8.613H91.186L91.2105 8.50242C91.3826 7.65464 92.1935 7.02802 93.5327 7.02802C94.9334 7.02802 95.6952 7.75293 95.6952 8.92017V9.73109L92.4392 9.92768C89.171 10.1365 87.3157 11.5372 87.3157 13.9331V13.9577C87.3157 16.2799 89.0972 17.9386 91.7389 17.9386ZM90.8665 13.7734V13.7488C90.8665 12.815 91.5914 12.2253 92.9798 12.1393L95.6952 11.9673V12.9133C95.6952 14.2894 94.5157 15.3215 92.9061 15.3215C91.6651 15.3215 90.8665 14.7441 90.8665 13.7734Z"
        fill="currentColor"
      />
      <path
        d="M106.52 18C109.911 18 112.283 16.3045 112.283 13.7243V13.712C112.283 11.7707 111.152 10.6895 108.4 10.112L106.164 9.63279C104.837 9.3502 104.382 8.90788 104.382 8.23211V8.21983C104.382 7.37204 105.156 6.81914 106.397 6.81914C107.724 6.81914 108.498 7.53177 108.621 8.47785L108.634 8.57614H111.939V8.45327C111.853 6.14338 109.899 4.28809 106.397 4.28809C103.043 4.28809 100.881 5.90993 100.881 8.41641V8.4287C100.881 10.3946 102.171 11.6724 104.726 12.213L106.963 12.6799C108.253 12.9625 108.695 13.3679 108.695 14.0683V14.0806C108.695 14.9284 107.872 15.4567 106.52 15.4567C105.083 15.4567 104.309 14.8546 104.075 13.8226L104.051 13.712H100.549L100.561 13.8226C100.844 16.3168 102.871 18 106.52 18Z"
        fill="currentColor"
      />
      <path
        d="M119.545 18C123.304 18 125.123 15.7761 125.528 13.8348L125.565 13.6997H122.272L122.248 13.7734C121.99 14.5106 121.093 15.3215 119.618 15.3215C117.788 15.3215 116.645 14.0929 116.608 11.9918H125.676V10.886C125.676 6.90515 123.255 4.28809 119.397 4.28809C115.539 4.28809 113.07 6.96658 113.07 11.1563V11.1686C113.07 15.383 115.515 18 119.545 18ZM119.459 6.96658C120.945 6.96658 122.014 7.91266 122.235 9.73109H116.645C116.878 7.94952 117.984 6.96658 119.459 6.96658Z"
        fill="currentColor"
      />
      <path d="M71.4772 17.9387C72.583 17.9387 73.4676 17.054 73.4676 15.9482C73.4676 14.8301 72.583 13.9578 71.4772 13.9578C70.3591 13.9578 69.4867 14.8301 69.4867 15.9482C69.4867 17.054 70.3591 17.9387 71.4772 17.9387Z" />
    </svg>
  ),
  Frame: (props: SvgProps) => (
    <svg
      height="956"
      viewBox="0 0 1440 956"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_8)">
        <g opacity="0.5">
          <circle
            cx="730.762"
            cy="1537.06"
            r="1530.74"
            transform="rotate(67.6696 730.762 1537.06)"
            fill="url(#paint0_radial_1_8)"
          />
          <circle
            cx="730.762"
            cy="1537.06"
            r="1530.74"
            transform="rotate(67.6696 730.762 1537.06)"
            fill="url(#paint1_linear_1_8)"
          />
          <circle
            cx="730.762"
            cy="1537.06"
            r="1530.74"
            transform="rotate(67.6696 730.762 1537.06)"
            stroke="url(#paint2_linear_1_8)"
            strokeWidth="5.39246"
          />
        </g>
        <g clipPath="url(#clip1_1_8)">
          <g clipPath="url(#clip2_1_8)">
            <g clipPath="url(#clip3_1_8)">
              <circle
                cx="758.217"
                cy="1634.42"
                r="1530.74"
                transform="rotate(67.6696 758.217 1634.42)"
                fill="url(#paint3_radial_1_8)"
              />
              <circle
                cx="758.217"
                cy="1634.42"
                r="1530.74"
                transform="rotate(67.6696 758.217 1634.42)"
                fill="url(#paint4_linear_1_8)"
              />
              <circle
                cx="758.217"
                cy="1634.42"
                r="1530.74"
                transform="rotate(67.6696 758.217 1634.42)"
                stroke="url(#paint5_linear_1_8)"
                strokeWidth="5.39246"
              />
              <g filter="url(#filter0_i_1_8)">
                <circle
                  cx="758.217"
                  cy="1634.42"
                  r="1533.43"
                  transform="rotate(67.6696 758.217 1634.42)"
                  fill="white"
                  fillOpacity="0.01"
                />
              </g>
              <g filter="url(#filter1_i_1_8)">
                <circle
                  cx="371.578"
                  cy="1635.73"
                  r="1533.43"
                  transform="rotate(67.6696 371.578 1635.73)"
                  fill="white"
                  fillOpacity="0.01"
                />
              </g>
            </g>
          </g>
          <rect
            x="-1670.03"
            y="1509.21"
            width="3850.3"
            height="1662.86"
            transform="rotate(-22.9242 -1670.03 1509.21)"
            fill="url(#paint6_linear_1_8)"
          />
          <rect
            x="-46.6973"
            y="439.885"
            width="1570.94"
            height="556.541"
            fill="url(#paint7_linear_1_8)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_1_8"
          x="-775.619"
          y="100.584"
          width="3067.67"
          height="3089.24"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="21.5698" />
          <feGaussianBlur stdDeviation="82.1076" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.32 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_8" />
        </filter>
        <filter
          id="filter1_i_1_8"
          x="-1162.26"
          y="101.899"
          width="3067.67"
          height="3089.24"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="21.5698" />
          <feGaussianBlur stdDeviation="82.1076" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.32 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_8" />
        </filter>
        <radialGradient
          id="paint0_radial_1_8"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-735.688 1009.27) rotate(32.4155) scale(1223.44)"
        >
          <stop stopColor="white" stopOpacity="0.16" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_1_8"
          x1="-2111.92"
          y1="1588.78"
          x2="-561.873"
          y2="1576.81"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.24" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1_8"
          x1="-2735.01"
          y1="1909.46"
          x2="647.088"
          y2="1823.02"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E4E4E4" stopOpacity="0.38" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <radialGradient
          id="paint3_radial_1_8"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-804.494 1585.01) rotate(8.93147) scale(1142.93)"
        >
          <stop stopColor="white" stopOpacity="0.16" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="paint4_linear_1_8"
          x1="-2084.46"
          y1="1686.14"
          x2="-534.418"
          y2="1674.17"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.24" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_1_8"
          x1="-2707.55"
          y1="2006.82"
          x2="674.543"
          y2="1920.38"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E4E4E4" stopOpacity="0.38" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_1_8"
          x1="255.12"
          y1="1509.21"
          x2="255.12"
          y2="3172.07"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00010A" stopOpacity="0" />
          <stop offset="1" stopColor="#00010A" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_1_8"
          x1="738.775"
          y1="439.885"
          x2="738.775"
          y2="996.425"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="1" />
        </linearGradient>
        <clipPath id="clip0_1_8">
          <rect width="1440" height="956" fill="white" />
        </clipPath>
        <clipPath id="clip1_1_8">
          <rect
            width="2446.62"
            height="1944.31"
            fill="white"
            transform="translate(-588.129 -266.645) rotate(12.8829)"
          />
        </clipPath>
        <clipPath id="clip2_1_8">
          <rect
            width="3750.87"
            height="2302.97"
            fill="white"
            transform="translate(-1702.03 1174.26) rotate(-33.4192)"
          />
        </clipPath>
        <clipPath id="clip3_1_8">
          <rect
            width="2378.66"
            height="3597.79"
            fill="white"
            transform="translate(1266.79 -858.971) rotate(56.5808)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
};
