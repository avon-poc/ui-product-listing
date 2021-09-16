import React from 'react';
import dynamic from 'next/dynamic'
import {
  getCookie,
} from '../../helper/uiHelper'
import { UiLink, UiImg } from 'design-components'

const {
  EditableArea,
  // SwcImg
} = {
  EditableArea: dynamic(() =>
    import('nextjs-magnolia-connector').then(module => module.EditableArea)
  ),
  // SwcImg: dynamic(() =>
  //   import('ui-design-web-components').then(module => module.SwcImg)
  // ),
}
  ;
// const uiModule = import('ui-design-web-components').then((a) => a.SwcImg)
// console.log(uiModule);
function Offer(props) {
  const { title, main, metadata, descText } = props;
  // console.log(ui)

  return (
    <div>
      <h1>{title}</h1>
      --- here
      <UiLink link="http://google.com">
       OFFER
        </UiLink>
      <UiImg src="https://www.shopwithmyrep.co.uk/mediamarket-uk/10038/strip-banner-causes-desktop_2_unq_d974c186c29743baa4aa7bc3320fcbcb.jpg" width="700" />
        ---
      <p> - {descText} {getCookie('Home')}</p>
      {main && <EditableArea content={main} parentTemplateId={metadata['mgnl:template']} />}
    </div>
  );
}

export default Offer;
