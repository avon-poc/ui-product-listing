import styles from "../../styles/Home.module.scss";
import { defineCustomElements } from "shared-web-components/loader";
import { useEffect } from "react";

export default function AppFooter({
  footerComponent,
}) {
  useEffect(() => {
    defineCustomElements();
  }, []);
  return (
      <div
        className={styles.footer}
        dangerouslySetInnerHTML={{ __html: footerComponent }}
      />
  );
}
