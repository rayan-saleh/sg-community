import SiteSwitcher from "./SiteSwitcher";
import Link from "next/link";
import styles from "./header-logo.module.css";
import TurboAnimated from "./logos/TurboAnimated";

const Home = () => {
  //return image
  return (
    <img
      src="/images/h20-logo.png"
      alt="TurboPack Logo"
      width={120}
      height={136.15}
    />
  );


}



function HeaderLogo() {
  return (
    <>
      {/* <a
        href="https://vercel.com"
        target="_blank"
        rel="noreferrer"
        title="vercel.com homepage"
      >
        <svg
          height={22}
          viewBox="0 0 235 203"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="dark:fill-white fill-black"
        >
          <path
            d="M117.082 0L234.164 202.794H0L117.082 0Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <svg
        data-testid="geist-icon"
        fill="none"
        height={24}
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        className="dark:text-[#333] text-[#eaeaea] ml-2 mr-1"
      >
        <path d="M16.88 3.549L7.12 20.451" />
      </svg> */}

      <Link href="/" title="Home" className="hover:opacity-75">
        {/* <TurboAnimated height={32} /> */}

        <Home />

      </Link>
      <div className={styles.siteSwitcher}>
        <SiteSwitcher />
      </div>
    </>
  );
}

export default HeaderLogo;
