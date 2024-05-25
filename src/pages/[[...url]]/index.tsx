import VisualBuilderComponent from "@/components/base/VisualBuilderComponent";
import { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ Component, pageProps }: AppProps) {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`} data-epi-property-name="unstructuredData">
      <VisualBuilderComponent version={pageProps?.version} />
    </main>
  );
}
