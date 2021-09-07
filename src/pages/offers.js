import React, { useEffect } from 'react';
import dynamic from 'next/dynamic'
import {
  getCookie,
} from '../../helper/uiHelper'
import { defineCustomElements } from 'shared-web-components/loader'

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

  useEffect(() => {
    defineCustomElements()
  }, [])


  return (
    <div>
      <h1>{title}</h1>
      --- here
      <ui-link link="http://google.com">
       OFFER
        </ui-link>
      <ui-img src="https://www.shopwithmyrep.co.uk/mediamarket-uk/10038/strip-banner-causes-desktop_2_unq_d974c186c29743baa4aa7bc3320fcbcb.jpg" width="700" />
        ---
      <p> - {descText} {getCookie('Home')}</p>
      {main && <EditableArea content={main} parentTemplateId={metadata['mgnl:template']} />}
    </div>
  );
}

export default Offer;
