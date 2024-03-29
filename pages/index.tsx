import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Broken Bench</title>
      </Head>
      <main className={styles.main}>
        <Image src={"/bench.svg"} alt="bench" width={100} height={100} />

        <div className={styles.center}>
          <p>
            <strong>Broken Bench</strong> is more than just a supper club, it's
            a community of food enthusiasts who come together to celebrate the
            joys of great cuisine, live music, art, and storytelling.
          </p>
          <p>
            Based in the vibrant city of <strong>San Francisco</strong>, we
            provide a welcoming atmosphere for friends both old and new to
            indulge in mouth-watering feasts, make meaningful connections, and
            escape the fast-paced tech world.
          </p>
          <p>
            Our commitment to quality shines through in every aspect of our
            dining experience, from the carefully crafted menu to the carefully
            curated musical acts and art displays.
          </p>
          <p>
            At <strong>Broken Bench</strong>, we believe life is too short for
            bland food and small talk, and we invite you to come see for
            yourself why we're much more than just a meal.
          </p>
        </div>
        <div className={styles.center}>
          <p className={styles.nextDate}>
            Upcoming <strong>Saturday May 13</strong>
          </p>
        </div>
      </main>
    </>
  );
}
