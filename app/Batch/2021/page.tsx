import React from "react";
import Cards from "../../components/cards";
import { Alumni, Details4yr, Details3yr } from "../../components/details";

export default function Page() {
  return (
    <div className="flex flex-col items-center">
        
      <div className="py-4 px-6 rounded-md text-center mt-8">
      <Cards yr={"Batch of 2021"} DetailsArray={Details4yr} />
      
    </div>
    </div>
  );
}