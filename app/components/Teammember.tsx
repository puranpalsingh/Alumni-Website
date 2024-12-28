import React from "react";
import Cards from "./cards";
import { Alumni, Details4yr, Details3yr } from "./details";

function Teammembers() {
  return (
    <div className="flex flex-col items-center">
      <p className="w-1/3 text-lg font-bold text-white bg-gray-800 py-4 px-6 rounded-md text-center mt-8">
       Founding  Pillars
      </p>
      <div className="grid grid-cols-1">
      <Cards yr={"4th Year"} DetailsArray={Details4yr} />
      <Cards yr={"3rd Year"} DetailsArray={Details3yr} />
      <Cards yr={"Alumni"} DetailsArray={Alumni} />
    </div>
    </div>
  );
}


export default Teammembers;