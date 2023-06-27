import './styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax'
import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, [router.pathname]);

  return (
    <ParallaxProvider>
  <Component {...pageProps} />
    </ParallaxProvider>)
}
