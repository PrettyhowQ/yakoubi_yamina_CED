CREATE DATABASE IF NOT EXISTS clubED;

USE clubED;

CREATE TABLE IF NOT EXISTS formations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(100) NOT NULL,
    niveau ENUM('Débutant', 'Intermédiaire', 'Avancé') NOT NULL,
    duree_hrs INT NOT NULL,
    domaine VARCHAR(50) NOT NULL
);

INSERT INTO formations (titre, niveau, duree_hrs, domaine) VALUES
('Introduction à Python', 'Débutant', 6, 'Data'),
('SQL pour débutants', 'Débutant', 5, 'Data'),
('Analyse de données avec Pandas', 'Intermédiaire', 8, 'Data'),
('Création de dashboards', 'Avancé', 10, 'IA & Business');