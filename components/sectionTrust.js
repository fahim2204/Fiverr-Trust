export default () => {
    return (
        <>
            <div className=" bg-bot-alpha">
                <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-16">
                    <div className="text-4xl text-white font-bold my-5 leading-normal text-center mb-16">
                        <h1 className="text-4xl text-white font-bold my-5 leading-normal tracking-wider font-gigasens">What is <span className="text-bot-beta-blue">$TRUST</span></h1>
                    </div>

                    <div className="grid  md:grid-cols-3 md:gap-16 mx-auto">
                        <div className="my-5 ">
                            <img className="h-6 my-5" src="/img/icon/ai.svg" alt="ai" />
                            <h2 className="text-2xl text-white font-bold mb-1 text-justify font-gigasens "> Community Powered </h2>
                            <p className="text-bot-beta-gray text-lg font-inter">The $TRUST team is constantly working to improve the token and community experience.</p>
                        </div>
                        <div className="my-5 ">
                            <img className="h-6 my-5 " src="/img/icon/chat.svg" alt="chat" />
                            <h2 className="text-2xl text-white font-bold mb-1    text-justify font-gigasens "> Instant Rewards </h2>
                            <p className="text-bot-beta-gray text-lg font-inter">10% transaction fee with 5% redistributed to holders and 5% added to liquidity</p>
                        </div>
                        <div className="my-5">
                            <img className="h-6 my-5 " src="/img/icon/setting.svg" alt="setting" />
                            <h2 className="text-2xl text-white font-bold mb-1  text-justify font-gigasens "> Safe & Secure </h2>
                            <p className="text-bot-beta-gray text-lg font-inter">Anti-whale and anti-bot measures to ensure a fair distribution of $TRUST</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};
