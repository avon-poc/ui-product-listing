import * as h from "shared-web-components/hydrate";
import { getMgnlApp } from "nextjs-magnolia-connector";
import { getCategoryNavTree, getCart } from "../pages/api/mock";

export async function createComponent(selector, content) {
  const b64 = content && Buffer.from(JSON.stringify(content)).toString('base64');
  const component = await h.renderToString(`<${selector} content="${b64 ? b64 : ''}"></${selector}>`);
  const clear = component.html.split(`<${selector}`)[1].split(`</${selector}>`)[0];
  return `<${selector} ${clear}</${selector}>`;
}

export async function getHeaderContent(context) {
  const settings = await getMgnlApp({
    lang: context.locale || "en",
    country: process.env.SITE_COUNTRY,
    endpoint: "header",
    site: "avon",
  });
  const cart = await getCart();

  const categories = await getCategoryNavTree();
  return {
    settings,
    categories,
    cart
  };
}
