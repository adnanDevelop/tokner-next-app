import Image from "next/image";

const Hero = () => {
  return (
    <main className="w-full 2xl:h-[80vh] grid grid-cols-12  bg-dark relative 2xl:pt-[100px] z-[1]">
      <img
        src="/image/bg-img.png"
        className="max-w-[1100px] h-auto block absolute top-0 right-0 z-[-1]"
        alt=""
      />
      {/* Content section */}
      <section className=" 2xl:py-1 lg:py-[200px] pt-[100px] z-[1] 2xl:col-span-5 xl:col-span-6 lg:col-span-8 col-span-full flex flex-col items-start justify-center 2xl:max-w-[580px] 2xl:ms-auto 2xl:px-1 px-[30px]">
        <span className="blue-gradient-text font-semibold text-lg mb-2">
          At Tokners we are
        </span>
        <h1>Reimagining social media through the power of the blockchain.</h1>
        <p className="mt-6 2xl:!leading-7 text-white text-base text-justify">
          We are creating social media 3.0 with influencers, celebrities and
          creators being able to launch their own digital currency by simply
          creating a profile with media content posted as Non fungible Tokens
          that can be owned and traded on the Tknrs network
        </p>
      </section>
      {/* Image section */}
      <section className="2xl:col-span-7 xl:col-span-6 lg:col-span-4 flex items-center justify-center col-span-full pt-[100px]">
        <Image
          src="/image/hero-img-2.png"
          // className="absolute lg:block hidden 2xl:w-[1000px] 2xl:!h-[950px]  xl:!w-[850px] xl:!h-[750px] !w-[700px] !h-[600px] object-cover right-0 2xl:bottom-[-200px] bottom-[-160px]   "
          className=""
          width={500}
          height={200}
          alt="Hero image"
        />
        <Image
          src="/image/hero-img.png"
          className="lg:hidden block !w-auto"
          width={500}
          height={200}
          alt="Hero image"
        />
      </section>
    </main>
  );
};

export default Hero;
