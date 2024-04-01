'use client'
import { useState } from 'react';
import Head from 'next/head';
import styles from "./page.module.css";

export default function Home() {
  const [animateCircles, setAnimateCircles] = useState(false);
  const handleSendNotification = () => {

    setAnimateCircles(true);

    setTimeout(() => {
      setAnimateCircles(false);
    }, 4000);

    if ('Notification' in window) {
      Notification.requestPermission().then(function (permission) {
        if (permission === 'granted') {
          new Notification('Notification Title', {
            body: 'Notification Body',
          });
        }
      });
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Send Notification</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Send Notification</h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet.</p>
      </main>
      <br />
      <br />
      <br />
      <br />
      <div className={styles.notificationContainer}>
        <img className={styles.notificationIcon} src="/icon-512x512.png" alt="Notification Icon" />
        <div className={`${ styles.circle } ${ styles.circle0 }`}></div>
        <div className={`${ styles.circle } ${ animateCircles ? styles.animated : '' } ${ styles.circle1 }`}></div>
        <div className={`${ styles.circle } ${ animateCircles ? styles.animated : '' } ${ styles.circle2 }`}></div>
        <div className={`${ styles.circle } ${ animateCircles ? styles.animated : '' } ${ styles.circle3 }`}></div>
        <div className={`${ styles.circle } ${ animateCircles ? styles.animated : '' } ${ styles.circle4 }`}></div>
        <div className={`${ styles.circle } ${ animateCircles ? styles.animated : '' } ${ styles.circle5 }`}></div>
      </div>
      <br />
      <br />
      <br />
      <main className={styles.main}>
        <div className={styles.notificationContainer}>
          <button className={styles.button} onClick={handleSendNotification}><p className={styles.buttonText}>Send Notification</p></button>
        </div>
      </main>
    </div>
  );
}
