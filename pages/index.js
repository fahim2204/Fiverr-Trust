import Head from "next/head";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import SectionHero from "../components/sectionHero";
import SectionBeta from "../components/sectionBeta";
import SectionGamma from "../components/sectionGama";
import SectionDelta from "../components/sectionDelta";
import SectionTrust from "../components/sectionTrust";
export default function Home() {
  return (
    <div>
      <Head>
        <title>BotBrainz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <SectionHero />
        <SectionTrust />
        <SectionDelta />
        <SectionGamma />
        <SectionBeta />
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}
