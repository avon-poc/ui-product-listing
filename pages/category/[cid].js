import App from "../[...page]";
import { createComponent, createFooterComponent } from "../../src/utils";

import { getPage } from 'nextjs-magnolia-connector';

export async function getServerSideProps(context) {
  // const headerComponent = await createComponent("avon-header");
  // const footerComponent = await createFooterComponent("avon-footer");
  const page = await getPage(context);

  return {
    props: {
      ...page,
      // headerComponent,
      // footerComponent,
    },
  };
}

export default App;

