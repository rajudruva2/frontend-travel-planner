import React from 'react';import {createRoot} from 'react-dom/client';import './style.css';
const initial=["Choose destination", "Book transport", "Pack essentials"];
function App(){const [items,setItems]=React.useState(initial),[value,setValue]=React.useState(''),[done,setDone]=React.useState([]);
function add(e){e.preventDefault();if(value.trim()){setItems([...items,value.trim()]);setValue('')}}
return <main className="shell"><header><span className="eyebrow">YOUR WORKSPACE</span><h1>Trip Planner</h1><p>Keep your next adventure organized.</p></header>
<section className="summary"><div><small>TOTAL ITEMS</small><strong>{items.length}</strong></div><div><small>COMPLETED</small><strong>{done.length}</strong></div><div><small>IN PROGRESS</small><strong>{items.length-done.length}</strong></div></section>
<section className="panel"><h2>My list</h2><form onSubmit={add}><input aria-label="New item" placeholder="Add a new item..." value={value} onChange={e=>setValue(e.target.value)}/><button>Add item</button></form><ul>{items.map((item,i)=><li key={item+i} className={done.includes(i)?'completed':''}><label><input type="checkbox" checked={done.includes(i)} onChange={e=>setDone(e.target.checked?[...done,i]:done.filter(x=>x!==i))}/><span>{item}</span></label><small>{String(i+1).padStart(2,'0')}</small></li>)}</ul></section><footer>React + Vite · CI-ready starter</footer></main>}
createRoot(document.getElementById('root')).render(<App/>);
