import {
  SiExpress,
  SiDotnet,
  SiCsharp,
  SiMicrosoftsqlserver,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiMongodb,
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiRemix,
  SiStrapi,
  SiTypescript,
  SiDocker,
  SiKubernetes,
  SiAzuredevops,
  SiJira,
  SiGithub,
  SiGitlab,
  SiFigma,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
const Skills = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">My Skills</h1>
      <div>
        <span className="inline-flex items-center rounded-md bg-[#D95032] px-2 py-1 md:text-[0.7rem] font-medium ring-1 ring-inset ring-gray-500/10 text-[1rem]">
          Backend
        </span>
        <div className="flex justify-center py-5 md:justify-start">
          <div className="grid grid-cols-5 grid-flow-row gap-10 auto-cols-auto md:grid-cols-6 lg:grid-cols-8">
            <FaNodeJs size="2.2rem" className="hover:scale-150 duration-1000" />
            <SiExpress
              size="2.2rem"
              className="hover:scale-150 duration-1000"
            />
            <SiCsharp size="2.2rem" className="hover:scale-150 duration-1000" />
            <SiDotnet size="2.2rem" className="hover:scale-150 duration-1000" />
            <SiMicrosoftsqlserver
              size="2.2rem"
              className="hover:scale-150 duration-1000"
            />
            <SiMysql size="2.2rem" className="hover:scale-150 duration-1000" />
            <SiPostgresql
              size="2.2rem"
              className="hover:scale-150 duration-1000"
            />
            <SiFirebase
              size="2.2rem"
              className="hover:scale-150 duration-1000"
            />
            <SiMongodb
              size="2.2rem"
              className="hover:scale-150 duration-1000"
            />
            <SiStrapi size="2.2rem" className="hover:scale-150 duration-1000" />
          </div>
        </div>
        <span className="inline-flex items-center rounded-md bg-[#D95032] px-2 py-1 md:text-[0.7rem] font-medium ring-1 ring-inset ring-gray-500/10 text-[1rem]">
          Frontend
        </span>
        <div className="flex justify-center py-5 md:justify-start">
          <div className="grid grid-cols-5 grid-flow-row gap-10 auto-cols-auto md:grid-cols-6 lg:grid-cols-8">
            <SiHtml5 size="2.2rem" className="hover:scale-150 duration-1000" />
            <SiCss3 size="2.2rem" className="hover:scale-150 duration-1000" />
            <SiJavascript
              size="2.2rem"
              className="hover:scale-150 duration-1000"
            />
            <SiTypescript
              size="2.2rem"
              className="hover:scale-150 duration-1000"
            />
            <SiBootstrap
              size="2.2rem"
              className="hover:scale-150 duration-1000"
            />
            <SiTailwindcss
              size="2.2rem"
              className="hover:scale-150 duration-1000"
            />
            <SiReact size="2.2rem" className="hover:scale-150 duration-1000" />
            <SiRemix size="2.2rem" className="hover:scale-150 duration-1000" />
            <TbBrandNextjs
              size="2.2rem"
              className="hover:scale-150 duration-1000"
            />
          </div>
        </div>
        <span className="inline-flex items-center rounded-md bg-[#D95032] px-2 py-1 md:text-[0.7rem] font-medium ring-1 ring-inset ring-gray-500/10 text-[1rem]">
          Others
        </span>
        <div className="flex justify-center py-5 md:justify-start">
          <div className="grid grid-cols-5 grid-flow-row gap-10 auto-cols-auto md:grid-cols-6 lg:grid-cols-8">
            <SiDocker size="2.2rem" className="hover:scale-150 duration-1000" />
            <SiKubernetes
              size="2.2rem"
              className="hover:scale-150 duration-1000"
            />
            <SiAzuredevops
              size="2.2rem"
              className="hover:scale-150 duration-1000"
            />
            <SiGithub size="2.2rem" className="hover:scale-150 duration-1000" />
            <SiGitlab size="2.2rem" className="hover:scale-150 duration-1000" />
            <SiJira size="2.2rem" className="hover:scale-150 duration-1000" />
            <SiFigma size="2.2rem" className="hover:scale-150 duration-1000" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
