import Layout from "@/containers/Layout";
import "@/styles/globals.css";
import { Crisp } from "crisp-sdk-web";
import mixpanel from "mixpanel-browser";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import { hotjar } from "react-hotjar";
import { Provider } from "react-redux";
import store from "../store";
import { Inter } from "@next/font/google";
import ScrollToTop from "../components/common/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    } else {
      console.log = () => { };
      if (process.env.NEXT_PUBLIC_HOTJAR_ID)
        hotjar.initialize(process.env.NEXT_PUBLIC_HOTJAR_ID, 1);
      if (process.env.NEXT_PUBLIC_MIXPANEL_TOKEN)
        mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN, { debug: false });
      if (process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID)
        Crisp.configure(process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID);
      if (process.env.NEXT_PUBLIC_GTM_ID)
        TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID });
    }
  }, []);

  return (
    <Provider store={store}>
      <main className={inter.className}>
        <Layout>
          <GoogleAnalytics trackPageViews />
          <Component {...pageProps} />
        </Layout>
        <ScrollToTop />

      </main>
    </Provider>
  );
}
