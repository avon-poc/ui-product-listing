import React, { useEffect, createRef } from 'react';
import { UiProduct_card, UiHeading } from 'design-components'

import styles from '../../styles/Home.module.scss';
import { products } from '../../mock/products'
import { isParamsNotEmpty } from 'ui-utils'
import dynamic from "next/dynamic";

async function addProductToCart({ sku, qty = 1 }) { // https://www.avon.com
  console.log('asdf', sku)
  const res = await fetch('https://*..com/cart',
    {
      method: 'POST',
      body: JSON.stringify({
        product: {
          sku
        },
        qty
      }),
      headers: {
        "Content-type": "application/json"
      }
    }
  );
  return res.json()
}

const { EditableArea } = {
  EditableArea: dynamic(() =>
    import("nextjs-magnolia-connector").then((module) => module.EditableArea)
  ),
};

function Category(props) {
  const { main, metadata } = props;
  console.log('asdf', main, metadata)
  const productsRef = createRef();
  useEffect(() => {
    productsRef.current.addEventListener('cart:addItem', async e => {
      console.log('asdf')
      const data = await addProductToCart(e.details)
      const header = document.querySelector('avon-header')
      header.data = { cart: {...data} }
    })
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
        <UiHeading label="Make-up" level="h1" />
      </div>
      <div className={styles.product_listing} ref={productsRef}>
        {isParamsNotEmpty(products) ? products.map((product, i) =>

          <UiProduct_card
            key={i}
            // ! product={product}
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
