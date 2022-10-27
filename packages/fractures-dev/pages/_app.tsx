import splitbee from "@splitbee/web";
import "@fractures/css";
import "./_app.css";

splitbee.init();

const App = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default App;
