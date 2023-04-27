export default () => {
    return (
        <>
            <div className=" bg-bot-gamma">
                <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-16">
                    <div className="text-4xl text-white font-bold my-5 leading-normal text-center mb-16 font-gigasens">
                        <h1>Tokenomics & Stats</h1>
                    </div>
                    
                    <div className="grid  md:grid-cols-3 md:gap-8 ">
                        <div className="my-5 ">
                            <img className="h-6 my-5" src="/img/icon/nft.svg" alt="nft" />
                            <h2 className="text-3xl text-white font-bold  leading-normal tracking-wider font-gigasens"> $trust Token </h2>
                            <p className="text-bot-beta-gray text-lg font-inter">Token Symbol</p>
                        </div>
                        <div className="my-5 ">
                            <img className="h-6 my-5 " src="/img/icon/quadrillion.svg" alt="quadrillion" />
                            <h2 className="text-3xl text-white font-bold  leading-normal tracking-wider font-gigasens"> 1 Quadrillion </h2>
                            <p className="text-bot-beta-gray text-lg font-inter">Token Supply</p>
                        </div>
                        <div className="my-5 ">
                            <img className="h-6 my-5 " src="/img/icon/reward.svg" alt="reward" />
                            <h2 className="text-3xl text-white font-bold  leading-normal tracking-wider font-gigasens"> 2% </h2>
                            <p className="text-bot-beta-gray text-lg font-inter">Reward per transaction</p>
                        </div>
                        
                        <div className="my-5 ">
                            <img className="h-6 my-5" src="/img/icon/currentPrice.svg" alt="currentPrice" />
                            <h2 className="text-3xl text-white font-bold  leading-normal tracking-wider font-gigasens"> $0.0000000070 </h2>
                            <p className="text-bot-beta-gray text-lg font-inter">Current Price</p>
                        </div>
                        <div className="my-5 ">
                            <img className="h-6 my-5" src="/img/icon/marketcap.svg" alt="marketcap" />
                            <h2 className="text-3xl text-white font-bold  leading-normal tracking-wider font-gigasens"> $584 Million </h2>
                            <p className="text-bot-beta-gray text-lg font-inter">Market Cap</p>
                        </div>
                       
                        <div className="my-5 ">
                            <img className="h-6 my-5" src="/img/icon/holder.svg" alt="holder" />
                            <h2 className="text-3xl text-white font-bold  leading-normal tracking-wider font-gigasens">78,000+ </h2>
                            <p className="text-bot-beta-gray text-lg font-inter">Holders</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};
