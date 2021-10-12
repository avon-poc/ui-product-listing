import styles from "../../styles/Home.module.scss";

export default function AppHeader({
  headerComponent,
}) {
  return (
      <div
        className={styles.header}
        dangerouslySetInnerHTML={{ __html: headerComponent }}
      />
  );
}
