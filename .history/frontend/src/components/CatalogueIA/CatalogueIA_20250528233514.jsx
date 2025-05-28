import React, { useEffect, useState } from 'react';
import CatalogueIA from './components/CatalogueIA/CatalogueIA';

function App() {
  const [catalogue, setCatalogue] = useState([]);

  useEffect(() => {
    fetch('./catalogue_IA_formations.json')
      .then(res => res.json())
      .then(data => setCatalogue(data));
  }, []);

  return (
    <div>
      <h2>Catalogue IA & Formations – CED & IAP</h2>
      <table>
        <thead>
          <tr>
            <th>Catégorie</th>
            <th>Sous-domaines</th>
            <th>Métiers</th>
            <th>Niveaux</th>
            <th>Générateur IA</th>
            <th>Formations recommandées</th>
          </tr>
        </thead>
        <tbody>
          {catalogue.map((row, idx) => (
            <tr key={idx}>
              <td>{row.categorie}</td>
              <td>{row.sousDomaines}</td>
              <td>{row.metiers}</td>
              <td>{row.niveaux}</td>
              <td>{row.generateur}</td>
              <td>{row.formations}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;