import { getPage } from "nextjs-magnolia-connector";
import { createComponent } from "../../src/utils";
import App from "../[...page]";

export async function getServerSideProps(context) {
  const headerComponent = await createComponent("avon-header");
  const footerComponent = await createComponent("avon-footer");
  context.resolvedUrl = `/${process.env.CATEGORY_SLUG}`;
  const page = await getPage(context);
  console.log("route", context.params);
  return {
    props: {
      pageData: {
        uid: context.params.cid.toUpperCase(),
      },
      ...page,
      headerComponent,
      footerComponent,
    },
  };
}

export default App;
