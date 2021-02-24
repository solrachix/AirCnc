import React, {useState} from 'react';
import api from '../../services/api';

export default function Login({ history }){

  const [email, setEmail] = useState('');

  async function handleSubmit(e){
    e.preventDefault();

    const responce = await api.post("/sessions", {email})
    const { _id } = responce.data;
    console.log(responce)

    localStorage.setItem('user', _id);

    history.push('/dashboard');
  };

  return (
    <>
      <p>Ofereçã <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL</label>
        <input
          id="email"
          type="email"
          placeholder="Seu melhor E-mail"
          onChange={event => setEmail(event.target.value)}
        />

        <button type="submit" className="btn">Entrar</button>
      </form>
    </>
  );
}
