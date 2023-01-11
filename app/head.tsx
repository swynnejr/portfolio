import Script from "next/script";

export default function Head() {
  return (
    <>
      <title>Sam Wynne</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9874753329084187"
      crossOrigin="anonymous"></Script>
      <Script async strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-R406Y6H8W5" />
      <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'G-R406Y6H8W5', {
            page_path: window.location.pathname,
            });
          `,
      }}
      />
    </>
  )
}
