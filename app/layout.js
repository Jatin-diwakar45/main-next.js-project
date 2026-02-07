import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';

export const metadata = {
  title: "Kloudon Technologies - AI Agency & Technology Company",
  description: "",
}

export default function RootLayout({ children }) {
  return (
    <html lang="zxx">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.png" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/swiper.min.css" />
        <link rel="stylesheet" href="/assets/css/odometer.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/jquery-ui.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body className="ai-agency">
        <Preloader />

        {/* <div className="back-to-top-wrapper">
          <a href="#" className="xb-back-top-btn">
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.5093 18.9255L10.5093 1.51737M10.5093 1.51737C9.36629 2.9237 7.5029 5.564 5.3855 6.00224M10.5093 1.51737C11.6522 2.9237 13.5156 5.564 15.633 6.00224"
                stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div> */}

        <div className="body_wrap o-clip">
          <Header />
          {children}
          <Footer />
        </div>
        <div className="body-overlay"></div>

        <Script src="/assets/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/jquery-ui.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/appear.js" strategy="afterInteractive" />
        <Script src="/assets/js/odometer.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.nice-select.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/easing.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/scrollspy.js" strategy="afterInteractive" />
        <Script src="/assets/js/parallaxie.js" strategy="afterInteractive" />
        <Script src="/assets/js/parallax-scroll.js" strategy="afterInteractive" />
        <Script src="/assets/js/imageRevealHover.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.marquee.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugin.js" strategy="afterInteractive" />
        <Script src="/assets/js/lenis.js" strategy="afterInteractive" />
        <Script src="/assets/js/magiccursor.js" strategy="afterInteractive" />
        <Script src="/assets/js/whatsapp-widget.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
