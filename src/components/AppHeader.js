import styles from "../../styles/Home.module.scss";
import { defineCustomElements } from "shared-web-components/loader";
import { useEffect } from "react";

export default function AppHeader({
  headerComponent,
}) {
  useEffect(() => {
    defineCustomElements();
  }, []);
  return (
      <div
        className={styles.header}
        dangerouslySetInnerHTML={{ __html: headerComponent }}
      />
  );
}
