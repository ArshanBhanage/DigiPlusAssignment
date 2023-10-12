import logo from './logo.svg';
import './App.css';
import React from 'react';
import Tree from './components/Tree';


const treeData = [
    {
      key: "0",
      label: "Parent Node 1",
      children: [
        {
          key: "0-0",
          label: "Root Node 1",
          children: [
            {
              key: "0-1-1",
              label: "Child Node 1",
            },
            {
              key: "0-1-2",
              label: "Child Node 2",
            },
          ],
        },
        {
          key: "0-0",
          label: "Root Node 2",
          children: [
            {
              key: "0-1-1",
              label: "Child Node 1",
            },
            {
              key: "0-1-2",
              label: "Child Node 2",
            },
          ],
        },
      ],    
    },
    {
      key: "1",
      label: "Parent Node 2",
      children: [
        {
          key: "1-0",
          label: "Child 1",
        },
        {
          key: "0-0",
          label: "Child 2",
        },
      ],
    },  
];

function App() {
  return (
    <>
      <h1>Tree</h1>
      <Tree treeData={treeData} />    
    </>
  );
}

export default App;
// root node, child node, parent node