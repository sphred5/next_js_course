import Head from 'next/head';
import '../styles/globals.css';
import '../components/layout/layout';
import Layout from '../components/layout/layout';
import { NotificationContextProvider } from '../store/notification-context';
function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>Next Events</title>
          <meta name="desription" content="NextJS Events" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>

  )
}

export default MyApp;
