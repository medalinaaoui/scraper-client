import type { Metadata } from "next";
import SearchHeader from "./components/SearchHeader";
export const metadata: Metadata = {
  // icons: ["../7th1.svg", "../7th.png"],
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { query: string };
}) {
  return (
    <div className="flex max-sm:px-4 min-h-screen justify-start px-12 xl:px-32 py-2 sm:py-8 flex-col">
      <div className="flex sm:flex-row flex-col gap-4">
        <SearchHeader query={params.query} />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
