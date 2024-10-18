import "../styles/globals.css";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>{"Olawale"}</title>
      </Head>

      <div className="relative z-[99999998]">
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
