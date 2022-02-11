import React from 'react';
import { getTopic } from '../api';
import { useParams } from 'react-router-dom';

export default function Topic() {
    const { id } = useParams();
    const topic = getTopic(id);
  return (
      <>
        <h2>{topic.name}</h2>
        <p>{topic.description}</p>
      </>
    
  )
}
