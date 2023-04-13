import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Container from "@/components/Container/Container";
import Heading from "@/components/Heading/Heading";

const Home = () => {
  return (
    <>
      <Head>
        <title>Study Time</title>
        <meta name="study time" content="online education" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={styles.main}>
        <Container>
          <Heading tag="h1" text="Study Time" />
          <p>Study Time</p>
        </Container>
      </main>
    </>
  );
};

export default Home;
