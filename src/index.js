import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './Routing/Home/Home';
import About from './Routing/About/About';
import Contact from './Routing/Contact/Contact';
import User from './Routing/User/User';
import Github, { github_loader } from './Routing/Github/Github';
import Omkar from './Routing/Omkar/Omkar';

const root = ReactDOM.createRoot(document.getElementById('root'));

let allRountes = createBrowserRouter(
  /*[
    {
      path : '/',
      element : <Layout/>,
      children: [
        {
          path :'',
          element:<Home/>
        },
        {
          path :'about',
          element : <About/>
        },
        {
          path : 'contact',
          element : <Contact/>
        }
      ]
    }
  ]*/

    createRoutesFromElements(

      <Route path='/' element = {<Layout/>}>
        <Route path='' element = {<Home/>}/>
        <Route path='about/' element = {<About/>}>
          <Route path='omkar' element = {<Omkar/>}/>
        </Route>
        <Route path='contact' element = {<Contact/>}/>
        <Route path='user/:id' element = {<User/>}/>
        <Route 
          path='github'
          element = {<Github/>}
          loader = {github_loader}
          />
      </Route>

    )
)

root.render(
  <React.StrictMode>
    {/*<App />*/}
    <RouterProvider router={allRountes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
