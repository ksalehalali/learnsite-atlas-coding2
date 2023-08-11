import React from 'react'
import Image from 'next/image'
import  Styles from './../styles/Product.module.css'
import Link from 'next/link';
const Product = ({product}) => {
  const {title,price,image,id} = product;
  return (
    <div className={Styles.product}>
<div>
    <Image src={image} width="200" height="300"/>
</div>

<ui>
    <li>{title}</li>
    <li>{price}</li>
</ui>
<time datetime="2016-10-25" suppressHydrationWarning />
<Link href={`/products/${id}`}> <p className='button'>More details ...</p></Link>
    </div>
  )
}

export default Product