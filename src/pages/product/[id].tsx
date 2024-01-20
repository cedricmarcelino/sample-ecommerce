import Product from '@/components/Product/Product'
import { Product as IProduct } from '@/redux/features/productsSlice'
import Layout from '@/components/RootLayout/Layout'
import { GetServerSidePropsContext } from 'next/types';

  
export async function getServerSideProps(context: GetServerSidePropsContext) {
const { id } = context.query;
const res = await fetch(`https://dummyjson.com/products/${id}`);
const product = await res.json();
return { props: product };
}

export default function Page(props: IProduct)  {
    return (
        <Product product={props}/>
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