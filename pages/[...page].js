import { useEffect, createRef } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import AppHeader from '../src/components/AppHeader'
import AppFooter from '../src/components/AppFooter'

import Error from '../src/components/Error'
import { defineCustomElements } from "shared-web-components/loader";
import { getCart } from "./api/mock";

export { getServerSideProps } from "../src/utils";

export default function App({
  pageData,
  errorCode,
  mainContent,
  headerComponent,
  footerComponent,
}) {
  const cartSidebarRef = createRef();
  useEffect(() => {
    cartSidebarRef.current.addEventListener('cart:removeItem', async e => {
      const cart = await getCart();
      cart.lineItems.pop()
      const header = document.querySelector('avon-header')
      header.data = { cart: {...cart} }
    })
  }, [cartSidebarRef])
  return (
    <div data-testid="avon-container" className={styles.container}>
      <Head>
        <title>{pageData?.uid || 'Home'} | Avon</title>
      </Head>
      <AppHeader headerComponent={headerComponent} />
      <main className={styles.main}>
        {errorCode
          ? <Error statusCode={errorCode} />
          :
          <div className={styles.magnolia} dangerouslySetInnerHTML={{ __html: mainContent }}></div>
        }
      </main>
      <AppFooter footerComponent={footerComponent} />
      <bottom-navigation />
      <cart-sidebar ref={cartSidebarRef} />
    </div>
  );
}
