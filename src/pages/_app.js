import { ThemeProvider } from "styled-components";
import GlobalStyleThemes from "../styles/GlobalStyleTheme";
import GlobalStyles from "../styles/GlobalStyle.style";
import Navigation from "../component/Navigation/Navigation";
import Footer from "../component/Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "typeface-inter";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={GlobalStyleThemes}>
        <GlobalStyles />
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
