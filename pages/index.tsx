import { useEffect } from "react";
import Aos from "aos";
import Navbar from "../components/organisme/Navbar";
import MainBanner from "../components/organisme/MainBanner";
import TransactionStep from "../components/organisme/TransactionsStep";
import FeuturedGame from "../components/organisme/FeuturedGame";
import Reached from "../components/organisme/Reachead";
import Story from "../components/organisme/Story";
import Footer from "../components/organisme/Footer";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeuturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
