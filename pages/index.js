import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>HOME| 임정묵</title>
      </Head>
      <div>create nextjs tutorial yarn base</div>
    </div>
  );
}
