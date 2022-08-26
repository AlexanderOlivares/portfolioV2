import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const imageLoader = ({ src, width = 200, quality = 75 }) => {
  return `${src}?w=${width}&q=${quality}`;
};

interface IChallengeSiteCardProps {
  site: {
    site: string;
    icon: JSX.Element | undefined;
    img: string;
    link: string;
    solved: number;
    shortDescrip: string;
    longDescrip: string;
  };
}

const ChallengeSiteCard: React.FC<IChallengeSiteCardProps> = ({ site }) => {
  return (
    <div className="py-3 bg-emerald text-tan shadow-2xl shadow-emerald rounded-md border-tan">
      <div className="text-5xl mb-2 lg:text-3xl m-auto text-center">{site.site}</div>
      <div className="w-96 h-52 text-center">
        <div className="flex m-2 justify-center">
          <span className="px-2">{site.icon}</span>
        </div>
        {!!site.solved && (
          <div className="px-2 text-2xl">Challenges solved {site.solved}</div>
        )}
        <div className="px-2 mb-1 text-lg">{site.shortDescrip}</div>
        {site.longDescrip && (
          <div className="text-center text-lg">{site.longDescrip}</div>
        )}
      </div>
      {site.site == "Codewars" && (
        <div className="text-center">
          <Image
            loader={imageLoader}
            src={site.img}
            alt={site.site}
            width="200"
            height="50"
          />
        </div>
      )}
      <div className="text-center py-2">
        <span>
          <Link href={site.link}>
            <a target="_blank">
              <button className="border-2 rounded-md px-2 py-1 ml-2 text-2xl bg-emerald text-tan hover:text-yellow">
                View {site.site == "DS&A Repo" ? "repo" : "profile"}
              </button>
            </a>
          </Link>
        </span>
      </div>
    </div>
  );
};
export default ChallengeSiteCard;
