import "./orbits.css";

export function Orbits() {
  return (
    <div
      className="w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] md:w-[1200px] md:h-[1200px] absolute left-1/2 -translate-x-1/2 top-52 md:top-72 lg:top-52 -z-10"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, rgba(250, 173, 252, 0.97) 0%, rgba(228, 113, 231, 0.785) 22%, rgba(207, 54, 210, 0.6) 45%, rgba(104, 44, 177, 0.3) 73%, rgba(0, 34, 144, 0) 100%)",
      }}
    >
      <div className="relative w-full h-full grid place-items-center">
        <div
          className="absolute w-full h-full sm:w-[75%] sm:h-[75%] z-20 -top-[32.5%] left-1/2 -translate-x-1/2"
          style={{
            backgroundImage:
              "radial-gradient(circle farthest-side, #070707, #07070700)",
          }}
        />
        {/* 
        <div className="orbit w-28 h-28 sm:w-40 md:w-60 sm:h-40 md:h-60 z-20">
          <div className="w-full h-full relative">
            <img src={"/orbits/0.svg"} className="w-full h-full " />
            <img
              src={"/orbits/illustration.jpg"}
              className="w-[90%] h-[90%] absolute inset-0 m-auto rounded-full"
            />
          </div>
        </div> */}
        <img
          src={"/orbits/illustration.png"}
          className="orbit w-28 h-28 sm:w-40 md:w-60 sm:h-40 md:h-60 z-20 "
        />

        {/* first */}
        <div className="orbit w-[220px] h-[220px] sm:w-[330px] sm:h-[330px] md:w-[440px] md:h-[440px]">
          <div className="item rounded-full relative inset-0 origin-[110px_110px] sm:origin-[165px_165px] md:origin-[220px_220px]">
            <img src="/orbits/1.jpg" className="orbit-img left-5 md:left-10" />
          </div>
        </div>

        {/* second */}
        <div className="orbit w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] md:w-[640px] md:h-[640px]">
          <div className="item-2 relative inset-0 h-full origin-[160px_160px] sm:origin-[240px_240px] md:origin-[320px_320px]">
            <img
              src="/orbits/2.png"
              className="orbit-img right-16 md:right-20 bottom-0"
            />
          </div>
        </div>

        {/* third */}
        <div className="orbit w-[430px] h-[430px] sm:w-[645px] sm:h-[645px] md:w-[860px] md:h-[860px]">
          <div className="item-3 h-full relative inset-0 origin-[215px_215px] sm:origin-[322.5px_322.5px] md:origin-[430px_430px]">
            <img
              src="/orbits/3.jpg"
              className="orbit-img top-36 -right-3 sm:-right-5 md:right-3"
            />
          </div>
        </div>

        {/* fourth */}
        <div className="orbit w-[530px] h-[530px] sm:w-[795px] sm:h-[795px] md:w-[1060px] md:h-[1060px] ">
          <div className="relative w-full h-full">
            <div className="item-4 h-full absolute inset-0 origin-[265px_265px]  sm:origin-[397.5px_397.5px] md:origin-[530px_530px]">
              <img
                src="/orbits/4.jpg"
                className="orbit-img top-1/2 -left-5 sm:-left-10"
              />
            </div>
            <div className="item-5 h-full absolute inset-0 origin-[265px_265px] sm:origin-[397.5px_397.5px] md:origin-[530px_530px]">
              <img
                src="/orbits/5.jpg"
                className="orbit-img left-32 md:left-64"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
