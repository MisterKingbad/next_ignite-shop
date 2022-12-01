import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import React, { useState } from 'react';
import { stripe } from '../../lib/stripe';
import { Stripe } from 'stripe';
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product';
import Image from 'next/image';
import axios from "axios";
import Head from 'next/head';


interface Productprops {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  }
}

export default function Product({ product }: Productprops) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);
  
  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post('/api/checkoutprice', {
        priceId: product.defaultPriceId,
      })

      const { checkoutUrl } = response.data;



      window.location.href = checkoutUrl;
    } 
    catch (error) {

      setIsCreatingCheckoutSession(false);

     alert('Falha ao redirecionar para o checkout');
    } 


  }
  // const { isFallback } = useRouter();

  // if (isFallback) {
  //   return <p>Carregando...</p>
  // }
  return (
    <>

      <Head>
        <title>{product.name} | Ignite shop</title>
      </Head>

      <ProductContainer>

        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>

          <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}> 
            Comprar agora!
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {

  return {
    paths: [
      { params: { id: 'prod_Ml8bdIl1Pznru6'} }
    ],
    fallback:'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });

  const price = product.default_price as Stripe.Price;

  return{
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR',{
          style: 'currency',
          currency: 'BRL',
      }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
    }
  },
  revalidate: 1 * 1 * 1,
  }
}