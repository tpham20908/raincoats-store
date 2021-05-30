import React from 'react';
import { Grid } from '@material-ui/core';

import { useStyles } from './styles';
import Product from './Product';

const products = [
	{ id: 1, name: 'Raincoat 1', description: 'Raincoat Spring', price: '$25' },
	{ id: 2, name: 'Raincoat 2', description: 'Raincoat Summer', price: '$35' },
];

const Products = () => {
	const styles = useStyles();

	return (
		<main>
			<Grid container justify='center' spacing={4}>
				{products.map((product) => {
					return (
						<Grid item key={product.id} xs={12} md={4} lg={3}>
							<Product product={product} />
						</Grid>
					);
				})}
			</Grid>
		</main>
	);
};

export default Products;
