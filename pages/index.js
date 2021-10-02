import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Mainactivity from '../components/Mainactivity'
import Table from '../components/Table'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Text to Speech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Mainactivity />
      <Table />
    </div>
  )
}
