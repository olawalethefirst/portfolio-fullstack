import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-[black] z-[1] opacity-[0.2]"/>

      <div className="relative z-[99999998]">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
};

export default App;
