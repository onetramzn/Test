'use client'
import Link from "next/link";
import style from '@/app/style/app.module.css';
import { useEffect } from "react";
import useSWR from "swr";
import AppTable from "./bocucweb/app.table";

export default function Home() {
  const fetcher = (url: string) => fetch(url)
    .then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );
  if (!data) {
    return <div>loading...</div>
  }

  return (
    <div>
      <div>{data?.length}</div>
      <ul >
        <li className={style.text}>
          <Link href={"/facebook"}>
            Facebook
          </Link>
        </li>
        <li>
          <Link href={"/youtube"}>
            Youtube
          </Link>
        </li>
        <li>
          <Link href={"/tiktok"}>
            Tiktok
          </Link>
        </li>
      </ul>
      <AppTable
        blogs={data?.sort((a: any, b: any) => b.id - a.id)}
      />
    </div>
  );
}

