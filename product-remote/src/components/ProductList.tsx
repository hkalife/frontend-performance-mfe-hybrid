import '../App.css'
import React from 'react';
import { faker } from '@faker-js/faker';

interface Props {
  numberOfRowsToRender: number,
}

const ProductList: React.FC<Props> = (props) => {
  const mockProductData = (): {
    id: string
    productName: string
    isbn: string
    price: string
    department: string
    description: string
  }[] => {
    const dataArray = []
    
    for (let i = 0; i < props.numberOfRowsToRender; i++) {
      dataArray.push({
        id: faker.database.mongodbObjectId(),
        productName: faker.commerce.product(),
        isbn: faker.commerce.isbn(),
        price: faker.commerce.price(),
        department: faker.commerce.department(),
        description: faker.commerce.productDescription()
      })
    }
  
    return dataArray
  }


  return (
    <>
      <h3>Product</h3>

      <table id="shared-table" align="center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product name</th>
            <th>ISBN</th>
            <th>Price</th>
            <th>Department</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {mockProductData().map((person) =>
            <tr key={person.id}>
              <td>{ person.id }</td>
              <td>{ person.productName }</td>
              <td>{ person.isbn }</td>
              <td>{ person.price }</td>
              <td>{ person.department }</td>
              <td>{ person.description }</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default ProductList
