import * as h from "shared-web-components/hydrate";
import { getMgnlApp } from "nextjs-magnolia-connector";
import { getCategoryNavTree } from "../pages/api/mock";

export async function createComponent(selector, content, options) {
  const b64 = Buffer.from(JSON.stringify(content)).toString("base64");
  const component = await h.renderToString(
    `<${selector} content="${b64}"></${selector}>`
  );
  const clear = component.html
    .split(`<${selector}`)[1]
    .split(`</${selector}>`)[0];
  return `<${selector} ${clear}</${selector}>`;
}

export async function getHeaderContent(context) {
  const settings = await getMgnlApp({
    lang: context.locale || "en",
    country: process.env.SITE_COUNTRY,
    endpoint: "header",
    site: "avon",
  });

  const categories = await getCategoryNavTree();
  return {
    settings,
    categories,
  };
}

export async function getFooterContent(context) {
  return await getMgnlApp({
    lang: context.locale || "en",
    country: process.env.SITE_COUNTRY,
    endpoint: "footer",
    site: "avon",
    resType: "JCR",
  });
}
