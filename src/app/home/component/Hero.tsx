import Image from "next/image";

const Hero = () => {
  return (
    <main className="w-full grid grid-cols-12 gap-4  bg-dark relative 2xl:pt-[180px] xl:pt-[150px] md:pt-[100px] pt-[80px] 2xl:pb-[100px] md:pb-[80px] z-[1] px-[25px]">
      <img
        src="/image/bg-img.png"
        className="xl:max-w-[1100px] max-w-[600px] h-auto block absolute top-0 right-0 z-[-1]"
        alt=""
      />
      {/* Content section */}
      <section className=" 2xl:py-1 z-[1] xl:col-span-5 md:col-span-6 col-span-full flex flex-col items-start justify-center 2xl:max-w-[600px] 2xl:ms-auto ">
        <span className="blue-gradient-text font-semibold lg:text-lg text-base lg:mb-2">
          At Tokners we are
        </span>
        <h1>Reimagining social media through the power of the blockchain.</h1>
        <p className="mt-4 2xl:!leading-7 text-white text-base text-justify">
          We are creating social media 3.0 with influencers, celebrities and
          creators being able to launch their own digital currency by simply
          creating a profile with media content posted as Non fungible Tokens
          that can be owned and traded on the Tknrs network
        </p>
      </section>
      {/* Image section */}
      <section className=" xl:col-span-7 md:col-span-6 col-span-full flex items-center md:justify-end justify-center  ">
        <Image
          src="/image/hero-img-2.png"
          className="lg:!w-[450px] !w-[400px]"
          width={450}
          height={200}
          alt="Hero image"
        />
        {/* <Image
          src="/image/hero-img.png"
          className="lg:hidden block !w-auto"
          width={500}
          height={200}
          alt="Hero image"
        /> */}
      </section>
    </main>
  );
};

export default Hero;
