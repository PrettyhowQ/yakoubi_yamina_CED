import React, { useState } from 'react';
import './TableauMetiers.css';
import metiers from './metiers.json';

const TableauMetiers = () => {
  const [search, setSearch] = useState("");

  const filtered = metiers.filter(
    row =>
      row.categorie.toLowerCase().includes(search.toLowerCase()) ||
      row.metiers.toLowerCase().includes(search.toLowerCase()) ||
      row.generateur.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="tableau-metiers">
      <h2>📘 Tableau des Métiers – CED & IAP</h2>
      <input
        type="text"
        placeholder="🔍 Rechercher un métier, une catégorie, ou un générateur IA"
        onChange={(e) => setSearch(e.target.value)}
      />
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
          {filtered.map((row, index) => (
            <tr key={index}>
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
};

export default TableauMetiers;