import VisualBuilderComponent from "@/components/base/VisualBuilderComponent";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`} data-epi-property-name="unstructuredData">
      <VisualBuilderComponent version={null} />
    </main>
  );
}
