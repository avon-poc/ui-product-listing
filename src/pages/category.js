import React from 'react';
import styles from '../../styles/Home.module.scss';
import { products } from '../../mock/products'
import { isParamsNotEmpty } from 'ui-utils'
import dynamic from "next/dynamic";


const { EditableArea } = {
  EditableArea: dynamic(() =>
    import("nextjs-magnolia-connector").then((module) => module.EditableArea)
  ),
};

function Category(props) {
  const { main, metadata } = props;

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
        {isParamsNotEmpty(products) ? products.map((product, i) =>

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
