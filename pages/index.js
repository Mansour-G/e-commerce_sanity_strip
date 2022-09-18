import React from "react"

import { client } from "../lib/client"
import {
  Product,
  HeroBanner,
  FooterBanner,
} from '../components/index'


const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    <div className="products-heading">
      <h2>Best seller products</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing </p>
    </div>

    <div className="products-container">
      {/* <Product /> */}
      {products?.map((product) =>
        <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = `*[_type == "product"]`
  const products = await client.fetch(query)

  const bannerQuery = `*[_type == "banner"]`
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: { products, bannerData }
  }
}

export default Home