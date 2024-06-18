import "../css/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Banner, Header, Footer, FormConsultation, PromoCode, Notification } from "@/UI";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   //  ^?

//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        {/* <link rel="icon" href="../image/favicon.ico" sizes="any" /> */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <script src="//code.jivosite.com/widget/szuh00HFi5" async></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                        m[i].l=1*new Date();
                        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                        ym(93835019, "init", {
                              clickmap:true,
                              trackLinks:true,
                              accurateTrackBounce:true,
                              webvisor:true
                        });
                    `,
              }}
            />
            <noscript>
              <div>
                <img
                  src="https://mc.yandex.ru/watch/93835019"
                  style={{ position: "absolute", left: "-9999px" }}
                  alt=""
                />
              </div>
            </noscript>
          </>
        )}
      </head>

      <body className={inter.className}>
        <Notification />
        <PromoCode />
        <FormConsultation />
        <Banner />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
