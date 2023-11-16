import React from 'react';
import ReactDOM from 'react-dom';
import { createApp } from 'vue';
import PeopleApp from 'peopleApp/App';
import ProductApp from 'productApp/App';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Host application</h1>
  </div>
`;

const peopleApp = createApp(PeopleApp);
peopleApp.mount('#people-app');

const productApp = ReactDOM.createRoot(document.querySelector<HTMLDivElement>('#product-app'));
productApp.render(React.createElement(ProductApp));
