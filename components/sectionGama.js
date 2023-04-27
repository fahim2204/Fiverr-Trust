import Link from 'next/link';

export default () => {
    return (
        <>
            <div className=" bg-bot-alpha">
                <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-16">
                    <div className="grid md:grid-cols-2 md:gap-8 m-auto">
                        <div className=" mb-16">
                            <h1 className="text-4xl text-white font-bold my-5 leading-normal tracking-wider font-gigasens">How to Buy <span className="text-bot-beta-blue flex">$TRUST</span></h1>
                            <p className="text-lg my-5 text-bot-beta-gray font-inter">Follow these steps or join our <span className="text-bot-beta-blue flex">Telegram <span className="text-bot-beta-gray">group if you need</span> </span> <span className=" flex">help on purchasing  $TRUST</span></p>
                            <img src="/img/logo.svg" className="h-32 my-10" alt=" Logo" />
                        </div>
                        <div>
                            <div className="my-5 mb-10">
                                <h2 className="text-3xl text-white font-bold my-5 leading-normal tracking-wider font-gigasens"> <span className="text-bot-beta-gray md:mr-8">01.</span>  Create a MetaMask Wallet </h2>
                                <p className="text-bot-beta-gray text-lg md:ml-24 font-inter"> Get a wallet that supports Binance Smart Chain (BSC) tokens. We recommend Trust Wallet, MetaMask, or Binance Chain Wallet.</p>
                            </div>
                            <div className="my-5 mb-10">
                                <h2 className="text-3xl text-white font-bold my-5 leading-normal tracking-wider font-gigasens"> <span className="text-bot-beta-gray md:mr-8">02.</span>  Add Binance to your Wallet </h2>
                                <div className="text-bot-beta-gray text-lg md:ml-24 font-inter">
                                    <p>Add Binance Smart Chain to your wallet. To do this, you'll need to add the Binance Smart Chain network to your wallet. Here are the details you need to add:</p>
                                    <ul class="list-disc mt-4 ml-4 md:ml-8">
                                        <li>Network name: Binance Smart Chain</li>
                                        
                                         <li>New RPC URL: <Link href="https://bsc-dataseed1.ninicoin.io/">https://bsc-dataseed1.ninicoin.io/</Link></li>
                                       
                                        <li>Chain ID: 56</li>
                                        <li>Symbol: BNB</li>
                                        <li>Block Explorer URL: <Link href="https://bscscan.com/">https://bscscan.com/</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="my-5 mb-10">
                                <h2 className="text-3xl text-white font-bold my-5 leading-normal tracking-wider font-gigasens"> <span className="text-bot-beta-gray md:mr-8">03.</span>  Purchase $TRUST Coin
                                </h2>
                                <p className="text-bot-beta-gray text-lg md:ml-24 font-inter"> Purchase Binance Coin (BNB). You can buy BNB on a centralized exchange like Binance, Coinbase, or Kraken. You can also buy BNB on a decentralized exchange like PancakeSwap or BakerySwap.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
