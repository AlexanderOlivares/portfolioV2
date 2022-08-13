import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Transition } from "@headlessui/react";

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
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const togglePhoto = () => setShowDescription(!showDescription);

  return (
    <div className="py-3 bg-tan text-emerald shadow-2xl rounded-md">
      <div className="text-4xl mb-2 lg:text-3xl m-auto text-center">{site.site}</div>
      <div className="flex m-2 justify-center">
        <span className="px-2">{site.icon}</span>
        <span className="px-2">challenges solved {site.solved}</span>
        <span className="px-2">xp points {site.solved}</span>
        <span className="px-2">acceptance rate solved {site.solved}</span>
      </div>
      <div onClick={togglePhoto} className="w-96 h-52 cursor-pointer ">
        <div
          className={`bg-tan text-emerald  w-96 h-52  ${
            showDescription && "overflow-y-auto"
          }`}
        >
          {/* {!showDescription && (
            <Image src={site.img} alt={site.site} width="384" height="208" />
          )} */}
          <Transition
            show={showDescription}
            enter="transform transition duration-[100ms]"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 rotate-0 scale-100"
            leave="transform scale-100"
            leaveFrom="opacity-0 rotate-0 scale-50"
            leaveTo="opacity-0 scale-0"
          >
            <div className="p-2 ">{site.longDescrip}</div>
          </Transition>
        </div>
      </div>
      <div className="text-center py-1">
        <span>
          <Link href={site.link}>
            <a target="_blank">
              <button className="border rounded-md p-2 ml-2 text-2xl bg-tan text-emerald">
                View profile
              </button>
            </a>
          </Link>
        </span>
      </div>
    </div>
  );
};
export default ChallengeSiteCard;
