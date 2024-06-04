import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <div className="bg-white flex justify-center">
        <footer className="footer pt-10 pb-24 px-4 max-w-6xl text-base-content">
          <div className="flex flex-col gap-5">
            <Link href="/">
              <div className="flex gap-2 items-center">
                <Image
                  alt="logo"
                  width={32}
                  height={32}
                  className="mask inline-block mask-circle"
                  src="/img_logo.svg"
                />
                <span className="font-bold text-xl">SNAPIFIES</span>
              </div>
            </Link>
          </div>

          <div>
            <span className="footer-title">Information</span>
            <Link href="/about-us" className="link link-hover">
              About Us
            </Link>
            <Link href="/faqs" className="link link-hover">
              FAQs
            </Link>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <Link href="/privacy-policy" className="link link-hover">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="link link-hover">
              Terms and Conditions
            </Link>
          </div>
          <div>
            <span className="footer-title">Social</span>
            <div className="grid grid-flow-col gap-4">
              <Link href="/" target="_blank">
                <Image alt="" src="/ic_twitter.svg" width={32} height={32} />
              </Link>

              <Link href="/" target="_blank">
                <Image alt="" src="/ic_linkedin.svg" width={32} height={32} />
              </Link>

              <Link href="/" target="_blank">
                <Image alt="" src="/ic_youtube.svg" width={32} height={32} />
              </Link>
              <Link href="/" target="_blank">
                <Image alt="" src="/ic_facebook.svg" width={32} height={32} />
              </Link>
            </div>
          </div>
        </footer>
      </div>
      <div className="p-2 flex justify-center bg-white">
        <div className="max-w-5xl text-slate-500 text-sm">
          <p>Copyright © 2024 - All right reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
