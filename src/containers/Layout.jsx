import Head from "next/head";
import Link from "next/link";
import Footer from "./Footer";
import LeftSidebar from "./LeftSidebar";
import ModalLayout from "./ModalLayout";
import Navbar from "./Navbar";
import Navlinks from "./Navlinks";
import ScrollToTop from "../components/common/ScrollToTop";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="" />
        <meta property="og:image" content="/cover-pic.png" />
        <meta name="image" content="/cover-pic.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-application.png" />
        <meta name="twitter:image" content="/android-512X512.png" />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="Space AI" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="" />
        <meta itemProp="image" content="/cover-pic.png" />
      </Head>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col bg-[url('/img_bg.svg')]">
          <div className="overflow-y-auto  flex flex-col ">
            <Navbar />
            <div className="overflow-y-auto">
              {children}
              <Footer />
            </div>
          </div>
        </div>

        <div className="drawer-side ">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-100">
            <li className="mr-2 font-medium text-base">
              <Link href="/">Home</Link>
            </li>
            <Navlinks />
            <div className="mt-12"></div>
          </ul>
        </div>
      </div>

      <LeftSidebar />
      <ModalLayout />
    </>
  );
}
