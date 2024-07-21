import React from "react";
import Image from "next/image";
import Link from "next/link";

// Icons
import { TiArrowRight } from "react-icons/ti";

const Creator = () => {
  return (
    <main className="px-[30px] grid grid-cols-12 gap-5">
      {/* Creater card */}
      <section className="md:col-span-6 col-span-full">
        <div className="rounded-2xl bg-light-blue 2xl:p-[70px] lg:p-[50px] p-[30px]">
          <div className="w-[60px] h-[60px] grid place-items-center rounded-full bg-success shadow-success">
            <Image
              src="/image/creator/img-2.png"
              className="!w-[20px] "
              width={100}
              height={100}
              alt="Hero image"
            />
          </div>
          {/* content */}
          <div className="mt-3">
            <h2 className="text-white font-medium">
              For <span className="text-success underline">Creators</span>
            </h2>
            <p className="mt-2 text-justify text-content-color">
              Creators can gain independence through a decentralised digital
              currency system that is dependent on growing and engaging with the
              community and also their star power. They own 10-15% of the total
              value of the tokens minted.
            </p>
            <Link
              href="/"
              className="mt-3 text-success flex items-center transitions group "
            >
              Learn More{" "}
              <TiArrowRight className="ms-1 text-2xl transitions group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Second card */}
      <section className="md:col-span-6 col-span-full md:mt-[80px]">
        <div className="rounded-2xl bg-light-blue 2xl:p-[70px] lg:p-[50px] p-[30px]">
          <div className="w-[60px] h-[60px] grid place-items-center rounded-full bg-blue shadow-blue">
            <Image
              src="/image/creator/img-2.png"
              className="!w-[20px] "
              width={100}
              height={100}
              alt="Hero image"
            />
          </div>
          {/* content */}
          <div className="mt-3">
            <h2 className="text-white font-medium">
              For <span className="text-blue underline">Holders</span>
            </h2>
            <p className="mt-2 text-justify text-content-color">
              Holding social tokens allows the individual to gain access to
              benefits including unreleased content, private communities, direct
              access to celebrity, early- access to tickets and more as well as
              the ability to trade with other communities in order to gain
              access to more creator content with early token buyers being the
              biggest winners as the value of the token increases with more
              buyers.
            </p>
            <Link
              href="/"
              className="mt-3 text-blue flex items-center transitions group"
            >
              Learn More{" "}
              <TiArrowRight className="ms-1 text-2xl transitions group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Creator;
