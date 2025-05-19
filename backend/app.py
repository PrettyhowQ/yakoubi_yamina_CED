from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Bienvenue dans le Club Empreinte Digitale & PrettyhowQ !"

if __name__ == '__main__':
    app.run(debug=True)
from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='../frontend/src')

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

# Optionnel : pour servir tous les fichiers statiques JS, CSS, etc.
@app.route('/<path:path>')
def static_proxy(path):
    return send_from_directory(app.static_folder, path)

if __name__ == '__main__':
    app.run(debug=True)    