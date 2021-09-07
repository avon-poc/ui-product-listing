import { getPage } from 'nextjs-magnolia-connector'
import { createComponent, getHeaderContent, getFooterContent } from "../src/utils";
import { useEffect } from "react";
import { defineCustomElements } from 'shared-web-components/loader'
import styles from '../styles/Home.module.css';
import Head from 'next/head';



export async function getServerSideProps(context) {
  const headerContent = await getHeaderContent(context);
  const footerContent = await getFooterContent(context);
  const headerComponent = await createComponent('avon-header', headerContent);
  const footerComponent = await createComponent('avon-footer', footerContent);
  const page = await getPage(context);
  return {
    props: {
      ...page,
      headerComponent,
      footerComponent
    },
  };
}

export default function Error({
  headerComponent,
  footerComponent
}){
  useEffect(() => {
    defineCustomElements()
  }, [])
  console.log(',,,pages');
  return (
    <div className={styles.container}>
      <Head>
        <title>Error Page</title>
      </Head>
      <div className={styles.header} dangerouslySetInnerHTML={{__html: headerComponent}}/>
      <main className={styles.main}>
        ERROR PAGE
      </main>
      <div className={styles.footer} dangerouslySetInnerHTML={{__html: footerComponent}}/>
    </div>
  );
}

