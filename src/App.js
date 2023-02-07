import React, { useState, useEffect } from 'react';

import api from './services/api';

import './styles.css';

function App() {
  const [repositories, setRepositories] = useState([]);

  async function handleAddRepository() {
    const id = window.crypto.randomUUID();

    setRepositories([...repositories, {
      id,
      title: `new repo ${Date.now()}`,
      url: 'https://cleitonkiper.com.br',
      techs: ['React', 'React Native', 'Nodejs'],
    }]);
  }

  async function handleRemoveRepository(id) {
    const newRepositories = repositories.filter((repo) => repo.id !== id);
    setRepositories(newRepositories);
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map((repository) => (
          <li key={repository.id}>
            {repository.title}
            <button onClick={() => handleRemoveRepository(repository.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
