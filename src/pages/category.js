import React, { useEffect } from 'react';
import dynamic from 'next/dynamic'
import {
  getCookie,
} from '../../helper/uiHelper'
import { defineCustomElements } from 'design-web-components/loader'
import styles from '../../styles/Home.module.css';
import { products } from '../../mock/products'

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
function Category(props) {
  const { title, main, metadata, descText } = props;
  // console.log(ui)

  useEffect(() => {
    defineCustomElements()
  }, [])


  return (
    <div>
      <div className={styles.banner}>
        <ui-img className={styles.banner_img} src="https://www.shopwithmyrep.co.uk/mediamarket-uk/10038/strip-banner-causes-desktop_2_unq_d974c186c29743baa4aa7bc3320fcbcb.jpg" width="900" />
      </div>
      <div>
        <ui-heading label="Make-up" level="h1" />
      </div>
      <div className={styles.product_listing}>
        {products.map((product, i) =>

          <ui-product_card
            key={i}
            image={product.image}
            imgwidth={340}
            imgheight={product.imgheight}
            imgalt={product.imgalt}
            heading={product.heading}
            btndisable={product.btndisable}
            btnlabel={product.btnlabel}
            price={product.price}
            cardwidth={product.cardwidth}
            cardheight={product.cardheight}
            cardbgcolor={product.cardbgcolor}
          />

        )}
      </div>
    </div>
  );
}

export default Category;
