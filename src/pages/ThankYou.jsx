import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import AltairaLogo from "../assets/Logo/AltairaLogo.png";

export default function ThankYou() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#021265] px-6 text-center text-white">
      <Helmet>
        {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N7T7HR3B');`}
        </script>

        {/* Google Tag (New) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17631871581"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17631871581');`}
        </script>

        {/* Meta Pixel Code */}
        <script>
          {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1657371702315992');
            fbq('track', 'PageView');`}
        </script>
      </Helmet>

      {/* ✅ noscript tags — placed as JSX outside Helmet */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-N7T7HR3B"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="gtm"
        ></iframe>
      </noscript>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1657371702315992&ev=PageView&noscript=1"
          alt="facebook pixel"
        />
      </noscript>

      {/* ✅ Page UI */}
      <div className="absolute top-10 flex w-full justify-center">
        <img
          src={AltairaLogo}
          alt="Altaira Logo"
          className="h-14 object-contain md:h-20"
        />
      </div>

      <div className="mt-20 flex w-full max-w-lg flex-col items-center justify-center rounded-2xl bg-white/10 p-8 shadow-xl backdrop-blur-sm">
        <h1 className="mb-3 text-3xl font-bold text-white md:text-4xl">
          🎉 Thank You!
        </h1>
        <p className="mb-8 text-base text-gray-200 md:text-lg">
          Your submission has been received successfully. <br />
          Our team will reach out to you shortly.
        </p>

        <Link
          to="/"
          className="rounded-lg bg-white px-6 py-3 font-semibold text-[#021265] shadow-md transition-all duration-300 hover:bg-gray-100"
        >
          Go Back to Home
        </Link>
      </div>

      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
    </div>
  );
}
