import Head from "next/head";
import config from "../magnolia.config";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import { defineCustomElements } from "shared-web-components/loader";
import { useEffect } from "react";
import { getPage } from "nextjs-magnolia-connector";
import {
  createComponent,
  getHeaderContent,
  getFooterContent,
} from "../src/utils";

const { EditablePage } = {
  EditablePage: dynamic(() =>
    import("nextjs-magnolia-connector").then((module) => module.EditablePage)
  ),
};
export async function getServerSideProps(context) {
  const headerContent = await getHeaderContent(context);
  const footerContent = await getFooterContent(context);
  const headerComponent = await createComponent("avon-header", headerContent);
  const footerComponent = await createComponent("avon-footer", footerContent);
  const page = await getPage(context);
  return {
    props: {
      ...page,
      headerComponent,
      footerComponent,
    },
  };
}

export default function App({
  page,
  templateDefinitions,
  headerComponent,
  footerComponent,
}) {
  useEffect(() => {
    defineCustomElements();
  }, []);
  console.log(",,,pages");
  return (
    <div className={styles.container}>
      <Head>
        <title>App</title>
      </Head>
      <div
        className={styles.header}
        dangerouslySetInnerHTML={{ __html: headerComponent }}
      />
      <main className={styles.main}>
        <div className="magnolia">
          {page && (
            <EditablePage
              content={page}
              config={config}
              templateDefinitions={templateDefinitions}
            />
          )}
        </div>
      </main>
      <div
        className={styles.footer}
        dangerouslySetInnerHTML={{ __html: footerComponent }}
      />
      <bottom-navigation />
    </div>
  );
}
