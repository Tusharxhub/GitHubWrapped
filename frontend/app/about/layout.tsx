import { Metadata } from "next";
import { YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://git-hub-wrapped-nine.vercel.app"),
  title: "About GitHub Wrapped",
  description: `Your Year in Code ${YEAR} - View your GitHub contributions, stats, and coding journey for ${YEAR}.`,
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
