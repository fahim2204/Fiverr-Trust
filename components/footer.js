export default () => {
  return (
    <>
      <div className="bg-bot-alpha font-ubuntu">
        <div className="max-w-screen-xl  flex  flex-wrap items-center justify-between mx-auto px-6 md:px-10 py-20 text-white">
          <div className=" text-bot-beta-gray font-inter">
            <p> Copyright © 2023 TRUSTFTX. All Rights Reserved. Unauthorized reproduction or distribution of any content on this site is prohibited.</p>
          </div>
          <div className="flex flex-row justify-center mt-4 md:mt-0">
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
