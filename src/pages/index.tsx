import Banner from '@/components/Banner/Banner';
import Layout from '../components/RootLayout/Layout'
import Categories from '@/components/Categories/Categories';
import Posts from '@/components/Posts/Posts';
import Products from '@/components/Products/Products';
import Services from '@/components/Services/Services';
import Testimonials from '@/components/Testimonies/Testimonials';
 
export default function Page() {
  return (
    <>
      <Categories/>
      <Products/>
      <Services/>
      <Posts/>
      <Testimonials/>
      <Banner/>
    </>
  )
}
 
Page.getLayout = function getLayout(page: React.ReactNode) {
  return (
  <>
    <Layout>
        {page}
    </Layout>
  </>
  )
}