import React, { useState, useEffect } from 'react';

export default function ExampleEffectHook() {
  const [text, setText] = useState('loading..');

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '/api';

  const fetchAPI = async () => {
    const res = await fetch(`${API_BASE_URL}/test`)
    const t = await res.text()
    console.log(t);
    setText(t);
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      <strong>{ text }</strong>
    </div>
  )
}