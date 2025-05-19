from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Bienvenue dans le Club Empreinte Digitale & PrettyhowQ !"

if __name__ == '__main__':
    app.run(debug=True)
    