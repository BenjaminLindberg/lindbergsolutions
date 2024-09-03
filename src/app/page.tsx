import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h3>Wolksvagen har de besta bilarna!</h3>
      <p>Enlig ledande experter inom bilbranschen.</p>
    </main>
  );
}
