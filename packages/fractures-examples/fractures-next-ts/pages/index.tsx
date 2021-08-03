import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fractures ✕ NextJS</title>
        <meta name="description" content="Fractures NextJS Example"/>
      </Head>
      <h1>Yellow and Purple</h1>
      <div className='bg-yellow-500 purple-700 p-4'>Test 500</div>
      <div className='bg-yellow-300 purple-700 p-4'>Test 300</div>
      <div className='bg-yellow-100 purple-700 p-4'>Test 100</div>
    </div>
  )
}
