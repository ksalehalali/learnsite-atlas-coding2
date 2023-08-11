

import Product from "@/components/Product";
import Head from "next/head";

export default function Home({products}) {
  return (

<main className="container">
  <Head>
    <title>Home | The best ecommerce website</title>
  </Head>
<div className="main">

{products.map((product)=>(
  <Product key={product.id} product={product}/>
))}
</div>
</main> 
   )
}


export async function getStaticProps(){
  const req = await fetch("https://fakestoreapi.com/products");
  const products = await req.json();
  console.log(products);
  return {
    props:{products}
  }
}