import os

# Définis ici la structure attendue (chemins relatifs depuis la racine du projet)
EXPECTED = [
    "frontend/index.html",
    "frontend/formulaire_club.html",
    "frontend/styles.css",
    "frontend/i18n/fr.json",
    "frontend/i18n/en.json",
    "frontend/i18n/ar.json",
    "frontend/i18n/i18n.js",
    "frontend/images/PrettyhowQ_logo.png",
    "backend/app.py",
    "backend/routes.py",
    "backend/database/models.py",
    "docs/README.md",
    "docs/cahier_des_charges.md",
    "docs/planning_club_empreinte_digitale.html",
    "legal/LICENSE.txt",
    "legal/mentions_legales.html",
    "README.md",
    ".gitignore",
    "package.json",
]

missing = []
for path in EXPECTED:
    if not os.path.exists(path):
        missing.append(path)

if missing:
    print("Éléments manquants ou mal placés :")
    for m in missing:
        print(" -", m)
else:
    print("✅ Structure complète : tout est à sa place !")