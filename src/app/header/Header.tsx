'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCodepen,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import * as React from 'react';
import Divider from '../components/Divider';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [backgroundStyle, setBackgroundStyle] = React.useState({
    background: 'none',
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLHeadingElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
    setBackgroundStyle({
      background: `radial-gradient(circle 50px at ${mousePosition.x}px ${mousePosition.y}px, rgb(4 47 46), rgb(2 6 23))`,
    });
  };

  const handleMouseLeave = () => {
    setBackgroundStyle({ background: 'none' });
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <>
      <header
        className={`flex items-center relative px-4 my-8 md:mx-16 h-12 border border-slate-400 md:rounded-full max-w-3xl w-full self-center transition-all duration-500 ease-in-out`}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => handleMouseLeave()}
      >
        <div className="flex grow gap-4 h-full items-center text-sm md:text-base">
          <a href="/" className="font-thin">
            Joshua Keith Pearson
          </a>
          <Divider vertical />
          <p className="font-medium">Developer. Tester.</p>
        </div>

        <div className="flex h-full gap-4 items-center px-2">
          <a
            className="text-slate-300"
            href="https://www.linkedin.com/in/joshuakeithpearson"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="hover:scale-125 transition-all duration-300"
            />
          </a>
          <Divider vertical />
          <a className="text-slate-300" href="https://www.github.com/wurby">
            <FontAwesomeIcon
              icon={faGithub}
              className="hover:scale-125 transition-all duration-300"
            />
          </a>
          <Divider vertical />
          <a className="text-slate-300" href="https://codepen.io/wurby">
            <FontAwesomeIcon
              icon={faCodepen}
              className="hover:scale-125 transition-all duration-300"
            />
          </a>
        </div>

        <section
          className={`absolute left-0 w-full h-full rounded-full `}
          style={{ ...backgroundStyle, zIndex: -1 }}
        ></section>
        <div className="absolute flex flex-col justify-center items-center right-0 -bottom-14 ">
          <FontAwesomeIcon icon={faSortUp} className="animate-bounce" />
          <p className="px-3">See personal work!</p>
        </div>
      </header>
    </>
  );
};

export default Header;
