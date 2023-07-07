import ProjectCard from "./ProjectCard";
import MachapuImg from "@/public/img/xd.png";
import PROCATECDBImg from "@/public/img/procated.png";

const ProyectsSection = () => {
  return (
    <section id="proyects">
      <div className="bg-[#100940] text-white py-6 px-2 md:px-0">
        <h1 className="text-center font-black text-5xl">
          <span className="text-[#D95032]">P</span>rojects
          <span className="text-[#D95032]">.</span>
          <hr className="w-6 h-1 mx-auto my-4 bg-white border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-5 justify-center p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 mt-10 lg:px-10">
            <ProjectCard
              proyectTitle="Machapu"
              proyectDescription="Mobile Application that allows to the clients check about the available rooms of the hotel, check the services and disponibility of each room, also allows to make reservations."
              proyectImg={MachapuImg}
              proyectStack={[
                {
                  id: 1,
                  name: "React Native",
                },
                {
                  id: 2,
                  name: "Expo",
                },
                {
                  id: 3,
                  name: "Firebase",
                },
              ]}
            />
            <ProjectCard
              proyectTitle="PROCATECDB"
              proyectDescription="
              Desktop application to control registration for courses that are provided to women and girls, it also allows the generation of reports."
              proyectImg={PROCATECDBImg}
              proyectStack={[
                {
                  id: 1,
                  name: "C#",
                },
                {
                  id: 2,
                  name: ".Net Framework",
                },
                {
                  id: 3,
                  name: "MySQL",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProyectsSection;
