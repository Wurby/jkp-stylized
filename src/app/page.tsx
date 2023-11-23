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
      <section className="relative flex flex-wrap h-full w-full justify-center max-w-3xl gap-8 py-16">
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
        <i className="absolute bottom-0 animate-bounce">
          <FontAwesomeIcon icon={faCaretDown} />
        </i>
      </section>
      <h2 className="w-full text-center text-3xl font-thin pt-24 max-w-2xl">
        Core Projects
      </h2>
      <section className="w-full h-72 max-w-2xl flex items-center justify-center pt-4 pb-12 gap-4 md:pt-8">
        <a className="flex flex-col py-4 justify-center items-center gap-2 md:text-2xl md:px-8">
          <FontAwesomeIcon icon={faHotel} size="2x" />
          <p>Hilton Honors</p>
        </a>
        <Divider vertical />
        <a className="flex flex-col py-4 justify-center items-center gap-2 md:text-2xl md:px-8">
          <FontAwesomeIcon icon={faPagelines} size="2x" />
          <p>FamilySearch</p>
        </a>
        <Divider vertical />
        <a className="flex flex-col py-4 justify-center items-center gap-2 md:text-2xl md:px-8">
          <FontAwesomeIcon icon={faCartShopping} size="2x" />
          <p>Overstock</p>
        </a>
      </section>
      <section className="relative w-full max-w-2xl flex flex-col justify-center items-center gap-4 pt-8 px-2 md:pt-12">
        <section
          style={{ zIndex: -10 }}
          className="absolute left-25 top-0 mt-[8%] w-full h-5/6 bg-gradient-to-r from-slate-950 via-teal-950 to-slate-950 rounded-full blur-3xl"
        ></section>
        <h1 className="text-3xl text-center">
          Clean development, checked twice.
        </h1>
        <Divider />
        <p className="font-thin indent-8">
          Ensuring code integrity is my forte. As a front-end developer and
          automation engineer with over six years experience based in Utah, I
          bring a meticulous approach to clean development. With a keen eye for
          detail, I implement test automation strategies that ensure every line
          of code is checked not once, but twice. Crafting seamless user
          experiences is not just a passion; it&#39;s a commitment to excellence
          in every project I undertake.
        </p>
      </section>
    </>
  );
}
