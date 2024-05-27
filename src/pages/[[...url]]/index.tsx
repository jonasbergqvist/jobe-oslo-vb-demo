import VisualBuilderComponent from "@/components/base/VisualBuilderComponent";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  let version: string | null = null
  if (typeof window !== "undefined" && window.location !== undefined) {
    const pathArray = window?.location?.pathname?.split('/')
    var contentId = pathArray[pathArray.length - 1]

    var contentIdArray = contentId.split('_')
    if (contentIdArray.length > 1) {
      version = contentIdArray[contentIdArray.length - 1]
    }
  }

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`} data-epi-property-name="unstructuredData">
      <VisualBuilderComponent version={version} />
    </main>
  );
}
