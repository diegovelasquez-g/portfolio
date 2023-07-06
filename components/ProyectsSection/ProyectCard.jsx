import Image from "next/image";
import React from "react";

const ProyectCard = ({
  proyectTitle,
  proyectImg,
  proyectDescription,
  proyectStack,
}) => {
  return (
    <div className="max-w-md md:max-w-md border border-gray-200 rounded-lg shadow h-full flex flex-col">
      <Image className="rounded-t-lg" src={proyectImg} alt="ProyectImage" />
      <div className="flex flex-col flex-grow p-5">
        <h1 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
          {proyectTitle}
        </h1>
        <p className="mb-3 flex-grow font-normal text-white">
          {proyectDescription}
        </p>
        <div className="flex flex-row">
          {proyectStack.map((stack) => (
            <span
              className="bg-[#D95032] text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
              key={stack.id}
            >
              {stack.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProyectCard;
