import React, { useEffect } from 'react';
import { defineCustomElements } from 'design-web-components/loader'
import styles from '../../styles/Home.module.scss';
import { products } from '../../mock/products'
import { isObjectNotEmpty } from 'ui-utils'
import dynamic from "next/dynamic";


const { EditableArea } = {
  EditableArea: dynamic(() =>
    import("nextjs-magnolia-connector").then((module) => module.EditableArea)
  ),
};

function Category(props) {
  const { main, metadata } = props;
  // console.log(ui)
  useEffect(() => {
    defineCustomElements()
  }, [])

  return (
    <div>
      {main && (
        <EditableArea
          content={main}
          parentTemplateId={metadata["mgnl:template"]}
        />
      )}
      <div>
        <ui-heading label="Make-up" level="h1" />
      </div>
      <div className={styles.product_listing}>
        {isObjectNotEmpty(products) ? products.map((product, i) =>

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

        ) : 'No Product Available.'}
      </div>
    </div>
  );
}

export default Category;
