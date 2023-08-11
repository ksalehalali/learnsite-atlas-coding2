import Image from "next/image";
import Styles from "./../../styles/single.module.css"
import Head from "next/head";

const singleProduct = ({product}) => {
  const {title , price , description , category , image} = product;

  return (
    <div className= {Styles.product + ' container'}>
      <Head>
        <title>{title}</title>
      </Head>
         <div className="image"><Image src={image} width="300" height="490"></Image></div>
         <div>
          <h2>{title}</h2>
          <h3>{category}</h3>
          <h1>{price},00$</h1>
          <p>{description}</p>
         </div>
         </div>
  );
}

export default singleProduct;

export async function getStaticPaths(){
  const req = await fetch("https://fakestoreapi.com/products");
  const products = await req.json();
  const paths = products.map(product => {
    return {
      params:{id:product.id.toString()},
    };
  });

  return {
    paths,
    fallback:false

  };
}

export async function getStaticProps(context){
  const id = context.params.id;
  const req = await fetch("https://fakestoreapi.com/products/" + id);
  const product = await req.json();
  return {props:{product}
};
}