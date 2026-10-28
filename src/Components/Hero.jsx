function Hero() {
  return (
    <>
      <div className="h-[70vh] flex text-white flex-col justify-center items-center gap-5 bg-[linear-gradient(to_right,#172554_0%,#701a45_30%,#be185d_45%,#ec4899_50%,#be185d_55%,#9d174d_70%,#831843_100%)]">
        <h1 className="text-6xl font-bold h-">Welcome to TechHub Store 🚀 </h1>
        <p className="text-center">
          Discover amazing tech products at unbeatable prices. we bring you the
          latest <br /> gadgets and accessories from top brands
        </p>
        <div className="flex gap-5">
          <a
            href=""
            className="border border-black rounded-2xl px-7 py-3 font-bold "
          >
            Shop Now
          </a>
          <a
            href=""
            className="border  border-black rounded-2xl px-7 py-3 font-bold "
          >
            Learn More
          </a>
        </div>
      </div>
    </>
  );
}
export default Hero;
