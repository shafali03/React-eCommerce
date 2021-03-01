import React from 'react'
import Grid from '@material-ui/core'

const products = [
  { id: 1, name: 'HUGO', description: 'Deep Red Eau de Parfum', price: '£35' },
  { id: 2, name: 'Jean Paul Gaultier', description: 'Classique by Jean Paul Gaultier Eau De Toilette', price: '£59' },
]

const Products = () => {
  <main>
    <Grid container justify='center' spacing={4}>
      {products.map((product) => (
        <Grid item key={product.id}
          xs={12}
          xs={12}
          sm={6}
          md={4}
          lg={3}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  </main>
}

export default Products
