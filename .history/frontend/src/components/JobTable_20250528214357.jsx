/*!
 * Copyright (c) 2025 Empreinte Digitale / PrettyhowQ
 * Tous droits réservés.
 * Ce code est protégé par la licence propriétaire CEDPro.
 * Reproduction, diffusion ou usage commercial interdits sans autorisation écrite.
 */

import React, { useState } from 'react';
import '../generators/TableauMetiers/JobTable.css';

const data = [
  {
    categorie: "Informatique",
    sousDomaines: "Algorithmes, Développement logiciel, IA",
    metiers: "Développeur Python, Full-stack, Spécialiste IA",
    niveaux: "Débutant à Expert",
    generateur: "Simulateur de projet Python avec tutoriel",
    formations: "Microsoft Python Certificat, IA Python (DeepLearning.AI)"
  },
  {
    categorie: "Science des données",
    sousDomaines: "Machine Learning, Data Analysis, Deep Learning",
    metiers: "Data Scientist, Analyste IA, Ingénieur ML",
    niveaux: "Débutant à Expert",
    generateur: "Créateur de tableau de bord IA",
    formations: "Machine Learning (Stanford), DeepLearning.AI"
  },
  {
    categorie: "Business",
    sousDomaines: "Management, Finance, Innovation",
    metiers: "Chef de projet, Analyste, Entrepreneur",
    niveaux: "Tous niveaux",
    generateur: "Créateur de Business Plan interactif IA",
    formations: "Google Project Management, Adobe IA"
  },
  // ... tu peux ajouter les 7 autres ici
];

const JobTable = () => {
  const [search, setSearch] = useState("");

  const filtered = data.filter(
    row =>
      row.categorie.toLowerCase().includes(search.toLowerCase()) ||
      row.metiers.toLowerCase().includes(search.toLowerCase()) ||
      row.generateur.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="job-table">
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

export default JobTable;