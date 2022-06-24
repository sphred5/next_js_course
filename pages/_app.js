import Head from 'next/head';
import '../styles/globals.css';
import '../components/layout/layout';
import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Head>
          <title>Next Events</title>
          <meta name="desription" content="NextJS Events" />
        </Head>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp;
