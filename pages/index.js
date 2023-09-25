import ItemList from "@/src/component/ItemList";
import axios from "axios"; // 모듈 이름 수정
import { Inter } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Divider, Header, Loader } from "semantic-ui-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ list }) {
  return (
    <div>
      <Head>
        <title>HOME| 임정묵</title>
        <meta name="description" content="임정묵 쇼핑몰입니다. "></meta>
      </Head>
      <>
        <Header as="h3" style={{ paddingTop: 40 }}>
          베스트 상품
        </Header>
        <Divider />
        <ItemList list={list.slice(0, 9)} />
        <Header as="h3" style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <Divider />
        <ItemList list={list.slice(9)} />
      </>
    </div>
  );
}

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;
  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
