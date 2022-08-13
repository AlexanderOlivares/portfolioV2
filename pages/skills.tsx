import React, { useState } from "react";
import ChallengeSiteCard from "../components/ChallengeSiteCard";
import challengeSiteConent from "../content/challengSitesContent";

const Skills = () => {
  return (
    <>
      <div className="flex h-screen justify-center md:items-center">
        <div className="w-full text-center max-w-sm p-1 md:max-w-6xl">
          <div className="text-emerald text-center md:pt-0 pb-12 text-6xl">
            Skills
          </div>
          <div className="bg-emerald text-tan flex rounded-md items-center justify-center shadow-2xl">
            <div id="col1">
              <div className="mb-4 text-4xl pt-4">Problem Solving</div>
              {challengeSiteConent.map(site => {
                return (
                  <div
                    key={site.site}
                    className="flex justify-center md:w-1/3 md:h-fit"
                  >
                    <ChallengeSiteCard site={site} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
