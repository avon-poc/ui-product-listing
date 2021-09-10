import Head from "next/head";
import config from "../magnolia.config";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import AppHeader from '../src/components/AppHeader'
import AppFooter from '../src/components/AppFooter'
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
      pageData : {
        uid: context.params.cid.toUpperCase()
      },
      ...page,
      headerComponent,
      footerComponent,
    },
  };
}

export default function App({
  pageData,
  page,
  templateDefinitions,
  headerComponent,
  footerComponent,
}) {
  console.log(",,,pages");
  return (
    <div className={styles.container}>
      <Head>
        <title>{pageData?.uid || 'Home'} | Avon</title>
      </Head>
      <AppHeader headerComponent={headerComponent}/>
      <main className={styles.main}>
        <div className={styles.magnolia}>{page && <EditablePage content={page} config={config} templateDefinitions={templateDefinitions} />}</div>
      </main>
      <AppFooter footerComponent={footerComponent}/>
    </div>
  );
}
