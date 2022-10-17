import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/RealHeader";
import LotteryEntrance from "../components/LotteryEntrance";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Smart Contract Lottery</title>
        <meta name="description" content="smart contract lottery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*header/nav bar/ connect button*/}
      <Header></Header>
      <LotteryEntrance></LotteryEntrance>
    </div>
  );
}
