import "@/styles/globals.css";
import "toastify-js/src/toastify.css";

import Script from "next/script";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  let DefaultLayout = Layout;
  if (Component.layout) {
    DefaultLayout = ({ children }) => <>{children}</>;
  }
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-EJTBPNTR96"
        strategy="lazyOnload"
      />
      <Script
        id="gtag-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-EJTBPNTR96');
        `,
        }}
      />
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}
