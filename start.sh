#!/bin/bash
echo "🚀 Lancement du Club Empreinte Digitale..."

# Activation de l'environnement virtuel si présent
if [ -d "venv" ]; then
  source venv/bin/activate
fi

# Lancement du backend Flask (si app.py est utilisé)
if [ -f "backend/app.py" ]; then
  echo "➡️  Lancement du serveur Python (Flask)..."
  cd backend
  python3 app.py
else
  echo "❌ Fichier app.py non trouvé. Vérifie ton backend."
fi
