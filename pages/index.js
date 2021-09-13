import { getPage } from "nextjs-magnolia-connector";
import App from "./[...page]";
import {
  createComponent,
  getHeaderContent,
  getFooterContent,
} from "../src/utils";

export async function getServerSideProps(context) {
  const headerContent = await getHeaderContent(context);
  const footerContent = await getFooterContent(context);
  const headerComponent = await createComponent("avon-header", headerContent);
  const footerComponent = await createComponent("avon-footer", footerContent);
  const page = await getPage(context);
  return {
    props: {
      ...page,
      errorCode: '404',
      headerComponent,
      footerComponent,
    },
  };
}

export default App;
