import React from 'react';
import './Font.css'; // Import the CSS file

const SvgFilters = () => (
  <svg id="filters" aria-hidden="true" width="10000" height="10000" style={{ position: 'fixed' }}>
    <defs>
      <filter id="duplicate" colorInterpolationFilters="sRGB" x="0" y="0" width="600%" height="100%" primitiveUnits="objectBoundingBox">
        <feColorMatrix values="0 0 0 0 0.005 0 0 0 0 0.337 0 0 0 0 0.408 1 0 0 0 0" />
        <feTile width="1" />
        <feTile />
      </filter>
      <filter id="marquee-left" x="0" y="0" width="600%" height="100%" primitiveUnits="objectBoundingBox">
        <feOffset dx="0">
          <animate
            attributeName="dx"
            to="-1"
            dur="15s"
            repeatCount="indefinite"
          />
        </feOffset>
      </filter>
      <filter id="marquee-right" x="0" y="0" width="600%" height="100%" primitiveUnits="objectBoundingBox">
        <feOffset dx="-1">
          <animate
            attributeName="dx"
            to="0"
            dur="15s"
            repeatCount="indefinite"
          />
        </feOffset>
      </filter>
    </defs>
  </svg>
);

const Marquee = ({ children, className, filter }) => (
  <div className="marquee">
    <div className="marquee--inner">
      <p className={className} style={{ filter }}>{children}</p>
    </div>
  </div>
);

const Font = () => (
  <>
    <SvgFilters />
    <div className="wrapper">
      <div className="left">
        <Marquee filter="url(#duplicate) url(#marquee-left)">
          אטרקציות שתשכרו
        </Marquee>
        <Marquee className="outline" filter="url(#duplicate) url(#marquee-right)">
          מתנפחים
        </Marquee>
      </div>
      <div className="right">
        <Marquee className="outline" filter="url(#duplicate) url(#marquee-left)">
          אטרקציות שתשכרו
        </Marquee>
        <Marquee filter="url(#duplicate) url(#marquee-right)">
          וכל מה שצריך למסיבה
        </Marquee>
      </div>
    </div>
  </>
);

export default Font;
