import styles from "../../styles/Home.module.css";
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
