import Head from "next/head";
import config from "../magnolia.config";
import styles from "../styles/Home.module.scss";
import dynamic from "next/dynamic";
import { defineCustomElements } from "shared-web-components/loader";
import { defineCustomElements as defineFooterElement } from "ui-footer/loader";
import { useEffect } from "react";
import { getPage } from "nextjs-magnolia-connector";
import {
  createComponent,
} from "../src/utils";

const { EditablePage } = {
  EditablePage: dynamic(() =>
    import("nextjs-magnolia-connector").then((module) => module.EditablePage)
  ),
};
export async function getServerSideProps(context) {
  // const headerComponent = await createComponent("avon-header");
  // const footerComponent = await createComponent("avon-footer");
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
    defineFooterElement();
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
      <bottom-navigation></bottom-navigation>
      <cart-sidebar></cart-sidebar>
    </div>
  );
}
