import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

const NEXT_PUBLIC_GTAG_ID = 'AW-17060346146';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag?.('config', NEXT_PUBLIC_GTAG_ID, { page_path: url });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GTAG_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${NEXT_PUBLIC_GTAG_ID}');
          `,
        }}
      />
      <Script
        id="gtag-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {
              'send_to': 'AW-17060346146/58SaCMXCjcUaEKLygMc_',
              'value': 1.0,
              'currency': 'IDR'
            });
          `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;