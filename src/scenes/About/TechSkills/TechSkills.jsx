import { BsTerminalFill } from '@react-icons/all-files/bs/BsTerminalFill';
import { DiGit } from '@react-icons/all-files/di/DiGit';
import { DiJavascript1 } from '@react-icons/all-files/di/DiJavascript1';
import { DiReact } from '@react-icons/all-files/di/DiReact';
import { SiRedux } from '@react-icons/all-files/si/SiRedux';
import s from './TechSkills.module.scss';
import { FaHtml5 } from '@react-icons/all-files/fa/FaHtml5';
import { FaCss3Alt } from '@react-icons/all-files/fa/FaCss3Alt';
import { SiTailwindcss } from '@react-icons/all-files/si/SiTailwindcss';
import { FaNodeJs } from '@react-icons/all-files/fa/FaNodeJs';
// import { SiExpress } from '@react-icons/all-files/si/SiExpress';
import { SiMongodb } from '@react-icons/all-files/si/SiMongodb';
import { SiMysql } from '@react-icons/all-files/si/SiMysql';
import { SiCplusplus } from '@react-icons/all-files/si/SiCplusplus';
import { SiJava } from '@react-icons/all-files/si/SiJava';
import { SiPython } from '@react-icons/all-files/si/SiPython';


const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <FaHtml5 />
      </li>
      <li className={s.techIcon}>
        <FaCss3Alt />
      </li>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <SiRedux />
      </li>
      <li className={s.techIcon}>
        <SiTailwindcss />
      </li>
      <li className={s.techIcon}>
        <FaNodeJs/>
      </li>
      {/* <li className={s.techIcon}>
        < SiExpress />
      </li> */}
      <li className={s.techIcon}>
        <SiMongodb />
      </li>
      <li className={s.techIcon}>
        <SiMysql />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
      <li className={s.techIcon}>
        <SiCplusplus />
      </li>
      <li className={s.techIcon}>
        <SiJava />
      </li>
      <li className={s.techIcon}>
        <SiPython />
      </li>
      <li className={s.techIcon}>
        <BsTerminalFill />
      </li>
    </ul>
  );
};

export default TechSkills;
