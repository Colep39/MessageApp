import { useEffect, useState } from 'react';

export default function Chats(){
   const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/api/hello')
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => console.error('Error fetching:', err));
  }, []);

  return <h1>{msg}</h1>;
}