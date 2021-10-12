import dynamic from 'next/dynamic'
import { renderToString } from "react-dom/server";
import * as h from 'shared-web-components/hydrate';
import { getPage } from "nextjs-magnolia-connector";
import config from "../magnolia.config";

const { EditablePage } = {
  EditablePage: dynamic(() =>
    import("nextjs-magnolia-connector").then((module) => module.EditablePage)
  ),
};

export async function createComponent(selector) {
  const component = await h.renderToString(`<${selector}></${selector}>`);
  const clear = component.html.split(`<${selector}`)[1].split(`</${selector}>`)[0];
  return `<${selector} ${clear}</${selector}>`;
}

export async function createMgnlComponent(context) {
  const data = await getPage(context);

  const tmp = renderToString(<ui-box_container>
    <EditablePage content={data.page} config={config} templateDefinitions={data.templateDefinitions} />
  </ui-box_container>)

  const res = await h.renderToString(tmp);

  const part = res.html
    .split(`<ui-box_container data-reactroot`)[1]
    .split(`</ui-box_container></body>`)[0];

  return [data.page?.errorCode, `<ui-box_container ${part}</ui-box_container>`]
}

export async function getServerSideProps(context) {
  const headerComponent = await createComponent('avon-header');
  const footerComponent = await createComponent('avon-footer');
  context.resolvedUrl = `/${process.env.CATEGORY_SLUG}`
  const [errorCode = null, mainContent] = await createMgnlComponent(context)

  console.log('route', context.params);
  return {
    props: {
      pageData : {
        uid: context.params.cid.toUpperCase()
      },
      errorCode,
      mainContent,
      headerComponent,
      footerComponent
    },
  };
}
