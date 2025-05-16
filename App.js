/*
 * Copyright (c) Yakoubi Yamina – Tous droits réservés / All rights reserved / جميع الحقوق محفوظة
 */

import React, { useState } from 'react';

const themes = [
  {
    title: "Productivité & Organisation",
    description: "Optimise ton temps et ta concentration.",
    prompt: "Donne-moi un plan d'organisation pour optimiser mon temps et rester concentré toute la journée."
  },
  {
    title: "Apprentissage Accéléré",
    description: "Apprends n’importe quoi 3x plus vite.",
    prompt: "Quels sont les 3 leviers pour apprendre un nouveau sujet 3x plus vite ?"
  },
  {
    title: "Création de Contenu Viral",
    description: "Gagne en visibilité avec des posts qui claquent.",
    prompt: "Génère une idée de post viral sur le thème du digital pour LinkedIn."
  },
  {
    title: "Copywriting & Persuasion",
    description: "Vends sans forcer avec les bons mots.",
    prompt: "Rédige un texte de vente court et percutant pour un nouveau service digital."
  },
  {
    title: "Business Digital",
    description: "Crée, lance et automatise ton business.",
    prompt: "Donne-moi une checklist pour lancer un business digital automatisé."
  },
  {
    title: "Mindset & Clarté Mentale",
    description: "Débloque-toi, aligne-toi, avance.",
    prompt: "Quels exercices pour clarifier mes objectifs et garder un mindset positif ?"
  },
  {
    title: "Automatisations & Outils Agent PrettyhowQ",
    description: "Gagne du temps sur tout ce qui te ralentit.",
    prompt: "Liste-moi 5 automatisations simples pour gagner du temps au quotidien avec l’Agent PrettyhowQ."
  },
  {
    title: "Réseaux Sociaux & Croissance",
    description: "Fais exploser ton audience sans pub.",
    prompt: "Donne-moi une stratégie pour augmenter mon audience sur Instagram sans publicité."
  },
  {
    title: "Création de Produits Digitaux avec l’Agent PrettyhowQ (la voix du cœur)",
    description: "Ebook, formation, template : tout devient facile grâce à l’Agent PrettyhowQ.",
    prompt: "Propose-moi une idée de produit digital à créer ce mois-ci en utilisant l’Agent PrettyhowQ (la voix du cœur)."
  },
  {
    title: "Coaching IA & Vision Personnelle avec l’Agent PrettyhowQ (la voix du cœur)",
    description: "Utilise l’IA comme coach, miroir et guide stratégique grâce à PrettyhowQ.",
    prompt: "Comment utiliser l’Agent PrettyhowQ (la voix du cœur) pour définir et atteindre mes objectifs personnels ?"
  }
];

function PromptGenerator({ theme }) {
  const [output, setOutput] = useState("");

  const handleGenerate = () => {
    setOutput(theme.prompt);
  };

  return (
    <div style={{
      border: "1px solid #eee",
      borderRadius: 8,
      padding: 20,
      margin: "20px 0",
      background: "#fafafa"
    }}>
      <h3>{theme.title}</h3>
      <p>{theme.description}</p>
      <button
        onClick={handleGenerate}
        style={{
          background: "#4CAF50",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: 5,
          cursor: "pointer"
        }}
      >
        Générer un prompt
      </button>
      {output && (
        <div style={{
          marginTop: 15,
          background: "#fff",
          padding: 10,
          borderRadius: 5,
          border: "1px solid #ddd"
        }}>
          <strong>Prompt généré :</strong>
          <div style={{ marginTop: 5 }}>{output}</div>
        </div>
      )}
      <div style={{
        marginTop: 20,
        fontSize: "0.85em",
        color: "#888",
        borderTop: "1px dashed #ddd",
        paddingTop: 8
      }}>
        © Yakoubi Yamina – Club Empreinte Digitale – PrettyhowQ<br />
        All rights reserved. جميع الحقوق محفوظة.<br />
        Toute reproduction ou diffusion sans autorisation est interdite.<br />
        Any reproduction or distribution without written permission is strictly prohibited.<br />
        أي نسخ أو توزيع أو استخدام بدون إذن كتابي ممنوع منعاً باتاً.
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div style={{
      maxWidth: 900,
      margin: "0 auto",
      padding: 30,
      fontFamily: "Arial, sans-serif"
    }}>
      <h1>Club Empreinte Digitale & PrettyhowQ <span style={{color:"#ff66cc"}}>(La voix du cœur)</span></h1>
      <p>
        Ce guide vous propose 100 prompts puissants répartis sur 10 thématiques essentielles.<br />
        Utilisez PrettyhowQ comme un partenaire stratégique pour gagner du temps, de la clarté et de l’impact.
      </p>
      {themes.map((theme, idx) => (
        <PromptGenerator key={idx} theme={theme} />
      ))}
      <div style={{
        marginTop: 40,
        marginBottom: 20,
        padding: 20,
        background: "#f9f9f9",
        borderRadius: 8,
        textAlign: "center",
        fontSize: "1.1em",
        color: "#333"
      }}>
        <p>
          Continue d’explorer, d’expérimenter, de construire.<br />
          L’IA est un outil entre tes mains.<br />
          <strong>À toi d’en faire une force.</strong><br /><br />
          À bientôt.<br />
          <span style={{color:"#ff66cc"}}>L’Agent de la Voix du Cœur PrettyhowQ</span>
        </p>
      </div>
      <footer style={{
        marginTop: 40,
        textAlign: "center",
        fontSize: "0.95em",
        color: "#888"
      }}>
        © Yakoubi Yamina – Club Empreinte Digitale – PrettyhowQ – Tous droits réservés.<br />
        All rights reserved. جميع الحقوق محفوظة.<br />
        Toute reproduction ou diffusion sans autorisation est interdite.<br />
        Any reproduction or distribution without written permission is strictly prohibited.<br />
        أي نسخ أو توزيع أو استخدام بدون إذن كتابي ممنوع منعاً باتاً.
      </footer>
      <div style={{
        marginTop: 20,
        textAlign: "center",
        fontSize: "0.85em",
        color: "#888"
      }}>
        http://localhost:3000
      </div>
    </div>
  );
}