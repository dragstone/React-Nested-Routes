import React from 'react';
import Home from './components/home';
import PageLayout from './components/pagelayout';
import Topics from './components/topics';
import Topic from './components/topic';

 const routes=()=> [
     {
         path:'/',
         element:<PageLayout/>,
         children:[
            {
                path:'/home',
                element:<Home/>,
            },
            {
                path:'/topics',
                element:<Topics/>,
                children:[
                {
                    path:'/topics/:id',
                    element:<Topic/>
                }
                   
                ]
            }
         ]
     }
 ]
  


export default routes;