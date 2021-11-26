import * as h from 'shared-web-components/hydrate';
import * as hf from 'ui-footer/hydrate';

export async function createComponent(selector) {
  const component = await h.renderToString(`<${selector}></${selector}>`);
  const clear = component.html.split(`<${selector}`)[1].split(`</${selector}>`)[0];
  return `<${selector} ${clear}</${selector}>`;
}

export async function createFooterComponent(selector) {
  const component = await hf.renderToString(`<${selector}></${selector}>`);
  console.log('adsf', component)
  const clear = component.html.split(`<${selector}`)[1].split(`</${selector}>`)[0];
  return `<${selector} ${clear}</${selector}>`;
}
