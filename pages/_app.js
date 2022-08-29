import '../styles/globals.css'
import Layout from "../components/Layout";

// this is a WRAPPER for all pages in the project
// we can add default layout over here such as header, footer, etc.
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp