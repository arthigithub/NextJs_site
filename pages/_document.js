import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { useRouter } from "next/router";

export default function Document() {
  const router = useRouter();
  return (
    <Html>
      <Head>
        <link
          rel="shortcut icon"
          href="/images/favicon.png"
          type="image/x-icon"
        />
        <link rel="icon" href="/images/favicon.png" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script strategy="beforeInteractive" src="/js/jquery.js"></Script>
        <Script
          strategy="beforeInteractive"
          src="/plugins/revolution/js/jquery.themepunch.revolution.min.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="/plugins/revolution/js/jquery.themepunch.tools.min.js"
        ></Script>
        <Script
          strategy="lazyOnload"
          src="/plugins/revolution/js/extensions/revolution.extension.actions.min.js"
        ></Script>
        <Script
          strategy="lazyOnload"
          src="/plugins/revolution/js/extensions/revolution.extension.carousel.min.js"
        ></Script>
        <Script
          strategy="lazyOnload"
          src="/plugins/revolution/js/extensions/revolution.extension.kenburn.min.js"
        ></Script>
        <Script
          strategy="lazyOnload"
          src="/plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js"
        ></Script>
        <Script
          strategy="lazyOnload"
          src="/plugins/revolution/js/extensions/revolution.extension.migration.min.js"
        ></Script>
        <Script
          strategy="lazyOnload"
          src="/plugins/revolution/js/extensions/revolution.extension.navigation.min.js"
        ></Script>
        <Script
          strategy="lazyOnload"
          src="/plugins/revolution/js/extensions/revolution.extension.parallax.min.js"
        ></Script>
        <Script
          strategy="lazyOnload"
          src="/plugins/revolution/js/extensions/revolution.extension.slideanims.min.js"
        ></Script>
        <Script
          strategy="lazyOnload"
          src="/plugins/revolution/js/extensions/revolution.extension.video.min.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="/js/main-slider-script.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="/js/bootstrap.min.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="/js/jquery.fancybox.pack.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="/js/jquery.fancybox-media.js"
        ></Script>
        <Script strategy="beforeInteractive" src="/js/owl.js"></Script>
        <Script strategy="beforeInteractive" src="/js/wow.js"></Script>
        <Script strategy="beforeInteractive" src="/js/knob.js"></Script>
        <Script strategy="beforeInteractive" src="/js/appear.js"></Script>
        <Script strategy="beforeInteractive" src="/js/jquery-ui.js"></Script>
        <Script strategy="beforeInteractive" src="/js/slick.js"></Script>
        <Script strategy="lazyOnload" src="/js/script.js"></Script>
        <Script
          strategy="lazyOnload"
          src="https://apps.elfsight.com/p/platform.js"
        ></Script>
      </body>
    </Html>
  );
}
