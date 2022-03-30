import type { NextPage } from 'next'
import Layout from '../Components/Layout'
import HomePage from '../Components/Home/HomePage'


const Home: NextPage = () => {
  return (
    <>
      <Layout  title='Swurv - Home'>
          <HomePage />
      </Layout>
    </>
  )
}

export default Home
