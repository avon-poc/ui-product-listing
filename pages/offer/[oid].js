import { getPage} from 'nextjs-magnolia-connector'
import { createComponent, getHeaderContent, getFooterContent } from "../../src/utils";
import App from '../[...page]';

export async function getServerSideProps(context) {
  const headerContent = await getHeaderContent(context);
  const headerComponent = await createComponent('avon-header', headerContent);
  const footerComponent = await createComponent('avon-footer', null);
  context.resolvedUrl = '/offer'
  const page = await getPage(context);
  console.log('route', context.resolvedUrl);
  return {
    props: {
      pageData : {
        uid: context.params.oid.toUpperCase()
      },
      ...page,
      headerComponent,
      footerComponent
    },
  };
}


export default App;
