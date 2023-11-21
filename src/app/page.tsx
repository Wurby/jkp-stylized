import { faPagelines } from '@fortawesome/free-brands-svg-icons';
import {
  faCaretDown,
  faCartShopping,
  faHotel,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Divider from './components/Divider';

export default function Home() {
  return (
    <>
      <section className="relative flex flex-wrap h-full w-full justify-center max-w-3xl gap-8 py-32">
        <section
          style={{ zIndex: -10 }}
          className="absolute left-25 top-0 mt-[8%] w-full h-5/6 bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 rounded-full blur-3xl"
        ></section>
        <h2 className="w-full text-center text-3xl font-thin">
          Hi, I&#39;m Joshua.
        </h2>
        <h1 className="w-full text-center text-5xl font-light">
          Crafting beautiful and functional web experiences.
        </h1>
        <i className="absolute bottom-10 animate-bounce">
          <FontAwesomeIcon icon={faCaretDown} />
        </i>
      </section>
      <h2 className="w-full text-center text-3xl font-thin pt-24 max-w-2xl">
        Projects worked on
      </h2>
      <section className="w-full max-w-2xl flex items-center justify-center pt-4 gap-4 md:pt-8">
        <a className="flex flex-col justify-center py-12 items-center gap-6 md:text-2xl md:px-8">
          <FontAwesomeIcon icon={faHotel} size="2x" />
          <p>Hilton Honors</p>
        </a>
        <Divider vertical />
        <a className="flex flex-col justify-center items-center gap-6 md:text-2xl md:px-8">
          <FontAwesomeIcon icon={faPagelines} size="2x" />
          <p>FamilySearch</p>
        </a>
        <Divider vertical />
        <a className="flex flex-col justify-center items-center gap-6 md:text-2xl md:px-8">
          <FontAwesomeIcon icon={faCartShopping} size="2x" />
          <p>Overstock</p>
        </a>
      </section>
    </>
  );
}
