import { Axios, formToJSON } from 'axios';
import { typeFromAST } from 'graphql/utilities/typeFromAST';
import React from 'react';
import { createPortal, render } from 'react-dom';

import { createRoot, hydrateRoot } from 'react-dom/client';

import { renderToString } from 'react-dom/server';
// Import stylesheets
import './style.css';



const formatCell = (sheetTitle, columnTitle, value) => value.toUpperCase();


let sheets = extractSheets(
  {
    // your google spreadhsheet key
    spreadsheetKey: process.env.SHEET_ID,
    // your google oauth2 credentials or API_KEY
 //   credentials: require("./google-generated-creds.json"),
    // optional: names of the sheets you want to extract
    sheetsToExtract: ["retail"],
    // optional: custom function to parse the cells
    formatCell: formatCell
  },
  function(err, data) {
    console.log("Customers: ", data.retail);
  }
);


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

function extractSheets(arg0: {
// your google spreadhsheet key
spreadsheetKey: string;
// your google oauth2 credentials or API_KEY
//   credentials: require("./google-generated-creds.json"),
// optional: names of the sheets you want to extract
sheetsToExtract: string[];
// optional: custom function to parse the cells
formatCell: (sheetTitle: any,columnTitle: any,value: any) => any;
},arg1: (err: any,data: any) => void) {
throw new Error('Function not implemented.');
}
// let ssr = renderToString(<div>iten<div/>)

// console.log(ssr)
// let container = appDiv
