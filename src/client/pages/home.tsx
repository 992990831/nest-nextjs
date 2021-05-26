import React from 'react';
import { NextPage } from 'next';

interface ProdProps {
  products: any;
}

const Home: NextPage<ProdProps> = ({ products }) => {
  return (
    <>
      <h1>Hello from NextJS! - Home</h1>
      {products && products.map((prod) => <p> {prod.name} </p>)}
    </>
  );
};

export async function getServerSideProps({ req }) {
  const products = await (await fetch('http://localhost:3001/products')).json();
  return {
    props: { products },
  };
}

export default Home;
