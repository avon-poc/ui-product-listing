import styles from "../../styles/Home.module.scss";

export default function AppFooter({
  footerComponent,
}) {
  return (
      <div
        className={styles.footer}
        dangerouslySetInnerHTML={{ __html: footerComponent }}
      />
  );
}
