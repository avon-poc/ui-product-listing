import Head from "next/head";
import config from "../magnolia.config";
import styles from "../styles/Home.module.scss";
import dynamic from "next/dynamic";
import AppHeader from '../src/components/AppHeader'
import AppFooter from '../src/components/AppFooter'
import { getPage } from "nextjs-magnolia-connector";
import {
  createComponent,
  getHeaderContent,
  getFooterContent,
} from "../src/utils";
import Error from '../src/components/Error'

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
  const errorCode = page?.page?.error?.code
  return {
    props: {
      pageData: {
        uid: context?.params?.cid?.toUpperCase() || 'Error Page'
      },
      ...page,
      errorCode,
      headerComponent,
      footerComponent,
    },
  };
}

export default function App({
  pageData,
  page,
  errorCode,
  templateDefinitions,
  headerComponent,
  footerComponent,
}) {
  console.log(",,,pages", errorCode);
  return (
    <div data-testid="avon-container" className={styles.container}>
      <Head>
        <title>{pageData?.uid || 'Home'} | Avon</title>
      </Head>
      <AppHeader headerComponent={headerComponent} />
      <main className={styles.main}>
        {errorCode
          ? <Error statusCode={errorCode} />
          :
          <div className={styles.magnolia}>{page && <EditablePage content={page} config={config} templateDefinitions={templateDefinitions} />}</div>
        }
      </main>
      <AppFooter footerComponent={footerComponent} />
    </div>
  );
}
