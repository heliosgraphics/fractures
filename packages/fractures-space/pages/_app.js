import 'fractures'
import './_app.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    Fathom.load(process.env.FATHOM_FRACTURES_SPACE, {
      includedDomains: ['fractures.space'],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default App;