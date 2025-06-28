import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel UI/UX App for Camping",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <head>
          {/* CloudWatch RUM snippet directly in the <head> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(n,i,v,r,s,c,x,z){x=window.AwsRumClient={q:[],n:n,i:i,v:v,r:r,c:c};window[n]=function(c,p){x.q.push({c:c,p:p});};z=document.createElement('script');z.async=true;z.src=s;document.head.insertBefore(z,document.head.getElementsByTagName('script')[0]);})(
    'cwr',
    '8f81f070-b161-4dcd-90e0-7d1d6cc2f744',
    '1.0.0',
    'us-west-2',
    'https://client.rum.us-east-1.amazonaws.com/1.19.0/cwr.js',
    {
      sessionSampleRate: 1 ,
      endpoint: "https://dataplane.rum.us-west-2.amazonaws.com" ,
      telemetries: ["performance","errors","http"] ,
      allowCookies: true ,
      enableXRay: false ,
      signing: true // If you have a public resource policy and wish to send unsigned requests please set this to false
    }
  );
            `,
            }}
          />
        </head>
      </head>

      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
