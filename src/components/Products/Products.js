import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product'

const products = [
  {
    id: 1, name: 'COCO', description: 'Chanel', price: '£135',
    image: 'https://res.cloudinary.com/shafali/image/upload/v1599648436/chanel-coco_pv73fc.jpg'
  },
  { id: 2, name: 'Jean Paul Gaultier', description: 'Jean Paul Gaultier Eau De Toilette', price: '£59', image: 'https://res.cloudinary.com/shafali/image/upload/v1599648203/Jean-paul_jiebmo.jpg' },
]

const Products = () => {

  return (
    <main>
      <Grid container justify='center' spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>

  )

}

export default Products
