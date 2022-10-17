import React from 'react';
import PropTypes from 'prop-types';
import CategoryName from '../app/components/CategoryName';
import ProductDescriptions from '../app/components/ProductDescriptions';
import ProductImage from '../app/components/ProductImage';

const Men = ({ cloth }) => {
  const clothList = cloth.map(({
    id, brand, amount, product,
  }) => (
    <>
      <ProductImage key={id} product={product} />
      <ProductDescriptions key={id} brand={brand} amount={amount} />
    </>
  ));

  return (
    <>
      <CategoryName />
      <div>{clothList}</div>
    </>
  );
};

Men.propTypes = {
  cloth: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default Men;
