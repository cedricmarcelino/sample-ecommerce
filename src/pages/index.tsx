import Layout from '../components/RootLayout/Layout'
import Categories from '@/components/Categories/Categories';
import Products from '@/components/Products/Products';
 
export default function Page() {
  return (
    <>
      <Categories/>
      <Products/>
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