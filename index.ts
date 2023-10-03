import { formToJSON } from 'axios';
import { typeFromAST } from 'graphql/utilities/typeFromAST';
import React from 'react';
import { createPortal, render } from 'react-dom';

import { createRoot, hydrateRoot } from 'react-dom/client';

import { renderToString } from 'react-dom/server';
// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

let data = [
  {
    id: 1,
    key: 1,
    name: 'VZ',
    color: 'orange',
  },
  {
    id: 2,
    key: 2,
    name: 'KS',
    color: 'red',
  },
];

// appDiv.innerHTML = data.flatMap(i => React.createElement('div', i))

// formToJSON

let root = createRoot(appDiv!);

root.render(
 `<div>1</div>`
);
// let ssr = renderToString(<div>iten<div/>)

// console.log(ssr)
// let container = appDiv
