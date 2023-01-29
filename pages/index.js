import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={styles.main}>
      <div className={styles.description}>
          <p>
            Bienvenido wacho&nbsp;
            <code className={styles.code}>al contador</code>
          </p>
         
        </div>
        <iframe width="700" height="360" src="https://w2.countingdownto.com/4536599" frameborder="0"></iframe>
      </main>
    </>
  )
}
