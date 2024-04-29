import Head from "next/head";
import Image from "next/image";

export default function HeadArea({
    title,
    description
  }) {
    return(
      <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Marlowe Reyes, Brian Paragas, Deluka LGH" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={"/favicon.ico"} />
      </Head>
      </>
    )
    
  }