import Aos from "aos";
import Head from "next/head";
import { useEffect, useState } from "react";
import FeuturedGame from "../components/organisme/FeuturedGame";
import Footer from "../components/organisme/Footer";
import MainBanner from "../components/organisme/MainBanner";
import Navbar from "../components/organisme/Navbar";
import Reached from "../components/organisme/Reachead";
import Story from "../components/organisme/Story";
import TransactionStep from "../components/organisme/TransactionsStep";
import { getFeatureGame } from "../services/player";
import { GameItemTypes } from "../services/data-types";
import SplashScreen from "../components/atoms/Splash-Screen";

interface HomeProps {
  data: GameItemTypes[];
}

export default function Home({ data }: HomeProps) {
  const [splashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    Aos.init();
    setTimeout(() => {
      setSplashScreen(false);
    }, 1500);
  }, []);

  return (
    <>
      <Head>
        <title>home | paygames</title>
        <meta
          name="description"
          content="menyediakan cara untuk membantu player juara dengan TopUp dikami dengan mudah dan cepat"
        />
        <meta property="og:title" content="paygames" />
        <meta
          property="og:description"
          content="menyediakan cara untuk membantu player juara dengan TopUp dikami dengan mudah dan cepat"
        />
        <link rel="icon" href="/icon/logo.png" />
      </Head>
      {splashScreen === true ? (
        <SplashScreen />
      ) : (
        <section style={{ backgroundColor: "#030306" }}>
          <Navbar />
          <MainBanner />
          <TransactionStep />
          <FeuturedGame gameList={data} />
          <Reached />
          <Story />
          <Footer />
        </section>
      )}
    </>
  );
}

export async function getStaticProps() {
  const data = await getFeatureGame();
  return {
    props: {
      data: data,
    },
  };
}
