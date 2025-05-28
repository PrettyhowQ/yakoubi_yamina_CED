import React, { useState } from "react";
import "./IAFormationsTable.css"; // pense à créer ce fichier CSS

const data = [
	{
		catégorie: "Informatique",
		sousDomaines: "Algorithmes, Développement logiciel, IA",
		métiers: "Développeur Python, Développeur full-stack, Spécialiste IA",
		niveaux: "Débutant à Expert",
		générateur: "Simulateur de projet Python avec tutoriel pas à pas",
		formations: "Microsoft Python Certificat, IA Python for Beginners (DeepLearning.AI)",
	},
	{
		catégorie: "Science des données",
		sousDomaines: "Machine Learning, Data Analysis, Deep Learning",
		métiers: "Data Scientist, Analyste IA, Ingénieur Machine Learning",
		niveaux: "Débutant à Expert",
		générateur: "Créateur de tableau de bord avec données synthétiques",
		formations: "DeepLearning.AI Specialization, Machine Learning Stanford",
	},
	{
		catégorie: "Business",
		sousDomaines: "Management, Finance, Innovation",
		métiers: "Chef de projet, Analyste stratégique, Entrepreneur digital",
		niveaux: "Tous niveaux",
		générateur: "Créateur de Business Plan interactif avec IA",
		formations: "Google Project Management, Création IA par Adobe",
	},
	{
		catégorie: "Arts et sciences humaines",
		sousDomaines: "Graphisme, Philosophie, Écriture",
		métiers: "Graphiste Adobe, Auteur numérique, Créateur de contenu",
		niveaux: "Débutant / Créatif",
		générateur: "Atelier créatif IA (image + texte)",
		formations: "Adobe Creative Certificate, Content Creator Adobe",
	},
	{
		catégorie: "Technologies de l'information",
		sousDomaines: "Support IT, Sécurité, Cloud",
		métiers: "Technicien support, Admin système, Spécialiste cybersécurité",
		niveaux: "Débutant à Intermédiaire",
		générateur: "Assistant diagnostic IA en cybersécurité",
		formations: "Google IT Support, Microsoft Specialist IT",
	},
	{
		catégorie: "Santé",
		sousDomaines: "Santé publique, Santé numérique, Exercice",
		métiers: "Spécialiste e-santé, Coach bien-être, Analyste santé",
		niveaux: "Intermédiaire",
		générateur: "Suivi santé IA (mode de vie, nutrition, rythme)",
		formations: "Stanford Health, Science de l’exercice – Colorado",
	},
	{
		catégorie: "Mathématiques et logique",
		sousDomaines: "Maths pour IA, Cryptographie, Algorithmes",
		métiers: "Cryptologue, Ingénieur calcul, Formateur logique",
		niveaux: "Avancé",
		générateur: "Solveur IA d’exercices complexes",
		formations: "Math for Machine Learning (DeepLearning.AI)",
	},
	{
		catégorie: "Développement personnel",
		sousDomaines: "Objectifs, Succès, Communication",
		métiers: "Coach de vie, Conférencier, Formateur soft skills",
		niveaux: "Débutant à Pro",
		générateur: "Planificateur d’objectifs de vie assisté IA",
		formations: "University of Michigan – Success & Purpose",
	},
	{
		catégorie: "Sciences sociales",
		sousDomaines: "Économie, Gouvernance, Éducation",
		métiers: "Analyste SAP, Conseiller en éducation, Spécialiste politiques publiques",
		niveaux: "Tous niveaux",
		générateur: "Simulateur d'impact social d’une décision publique",
		formations: "SAP Certificat, Politique Éducative",
	},
	{
		catégorie: "Apprentissage des langues",
		sousDomaines: "Anglais professionnel, Autres langues",
		métiers: "Professeur de langues, Traducteur IA, Interprète",
		niveaux: "Débutant à Confirmé",
		générateur: "Coach IA de conversation multilingue",
		formations: "Business English, Apprendre l’anglais débutant",
	},
];

export default function IAFormationsTable() {
	const [filter, setFilter] = useState("");

	const filteredData = data.filter((item) =>
		item.catégorie.toLowerCase().includes(filter.toLowerCase())
	);

	return (
		<div className="formation-container">
			<h2>📚 Générateurs IA & Formations</h2>
			<input
				type="text"
				placeholder="Filtrer par catégorie (ex : Informatique)"
				value={filter}
				onChange={(e) => setFilter(e.target.value)}
			/>
			<table>
				<thead>
					<tr>
						<th>Catégorie</th>
						<th>Sous-domaines</th>
						<th>Métiers</th>
						<th>Niveaux</th>
						<th>Générateur IA proposé</th>
						<th>Formations recommandées</th>
					</tr>
				</thead>
				<tbody>
					{filteredData.map((item, index) => (
						<tr key={index}>
							<td>{item.catégorie}</td>
							<td>{item.sousDomaines}</td>
							<td>{item.métiers}</td>
							<td>{item.niveaux}</td>
							<td>{item.générateur}</td>
							<td>{item.formations}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}