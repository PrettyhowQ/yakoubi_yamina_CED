import JobTable from './components/JobTable';

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