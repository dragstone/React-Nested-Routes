import React from 'react';
import { getTopics } from '../api';
import { Link,Outlet } from 'react-router-dom';

export default function Topics() {
const data=getTopics();

 return (
    <div className='topic-wrapper'>
        <div className='topics'>
        <h1>Topics</h1>
            <ul >
                {data.map(({ name, id }) => (
                <li key={id}>
                    <Link to={`/topics/${id}`}>{name}</Link>
                </li>
                ))}
            </ul>
        </div>
     
        <Outlet/>
    </div>
  )
}


