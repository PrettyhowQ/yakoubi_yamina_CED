import JobTable from './components/JobTable';
import './App.css'; // Assurez-vous d'importer le fichier CSS

const jobData = [
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
  }
  // ...ajoute d'autres métiers ici...
];

function App() {
  return (
    <div>
      {/* ...autres composants... */}
      <JobTable jobs={jobData} />
      {/* ...autres composants... */}
    </div>
  );
}

export default App;
.tableau-metiers {
  padding: 20px;
  background-color: #121c2d;
  color: gold;
}
.tableau-metiers h2 {
  text-align: center;
  color: gold;
}
.tableau-metiers input {
  width: 100%;
  padding: 10px;
  margin: 20px 0;
  background-color: #0b1320;
  border: 1px solid gold;
  color: gold;
  border-radius: 5px;
}
.tableau-metiers table {
  width: 100%;
  border-collapse: collapse;
  color: gold;
}
.tableau-metiers th, .tableau-metiers td {
  padding: 12px;
  border: 1px solid gold;
  text-align: left;
}
.tableau-metiers th {
  background-color: #19253b;
}