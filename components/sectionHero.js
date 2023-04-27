import Link from "next/link";

export default () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-10 text-white">
        <div className="relative">
          <img
            className="max-w-5xl w-full mx-auto "
            src="/img/hero-bg.webp"
            alt="hero"
          />
          <div className="hero-shadow w-full h-full absolute top-0"></div>
          <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
            <img className="h-16 md:h-36" src="/img/hero-content.svg" alt="logo" />
          </div>
        </div>
        <div className="my-10 text-center">
          <h1 className=" font-extrabold text-3xl md:text-5xl font-gigasens"><span className="text-trust-alpha"> $TRUST</span> - Would You Trust Them?</h1>
          <p className="text-lg mt-8 flex text-bot-beta-gray font-inter">$TRUST is a new meme token that pokes fun at grifters in the crypto space, such as SBF, Caroline from FTX, DO Kwon, and Michael Patryn. The token asks the community the question: would you still trust them?</p>
             
          <div className="mt-16 mb-5 flex gap-5 justify-center">
              <a className="btn-bg-alpha rounded-lg text-black px-8 py-2 gap-2"> Buy Start </a>
              <a className="btn-bg-beta rounded-lg text-black px-8 py-2"> See Chart </a>
          </div>
          <div className="flex flex-row justify-center mt-8">
            <div className="pl-3 pr-2">
              <img className="h-6" src="/img/icon/telegram.svg" alt="telegram" />
            </div>
            <div className="pl-3 pr-2">
              <img className="h-6" src="/img/icon/socialchat.svg" alt="chat" />
            </div>
            <div className="pl-3 pr-2">
              <img className="h-6" src="/img/icon/twitter.svg" alt="twitter" />
            </div>
          </div>
        </div>

      </div>
    </>
  );
};
