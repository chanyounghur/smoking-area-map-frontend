import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { useKakaoLoader } from "react-kakao-maps-sdk";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=6b1a94d0f70d1be81e0bbaae6b7fbe88&libraries=services,clusterer&autoload=false"
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}
