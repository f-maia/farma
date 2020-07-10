import React from 'react';

import { Container, Content } from './styles';

function ProductItem({ data }) {
  if (data) {
    // Placeholder
    data = {
      id: Date.now(),
      photo:
        'https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      name: 'Tylenol 500mg',
      description: '20 comprimidos revestido. PARACETAMOL',
      price: '20,15',
    };
  }

  return (
    <Container to={`/pharmacy/${data.id}`}>
      <img src={data.photo} alt="Product" />
      <Content>
        <div>
          <strong>{data.name}</strong>
          <span>R${data.price}</span>
        </div>
        <p>{data.description}</p>
        <button
          type="button"
          onClick={() => console.log('add to cart: ', data)}
        >
          Adicionar ao carrinho
        </button>
      </Content>
    </Container>
  );
}

export default ProductItem;
