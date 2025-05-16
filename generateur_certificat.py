#
# Copyright (c) - All Rights Reserved.
#

from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas

def generer_certificat(nom, formation, date, fichier):
    c = canvas.Canvas(fichier, pagesize=A4)
    c.setFont("Helvetica-Bold", 20)
    c.drawString(100, 750, "Certificat de Formation")
    c.setFont("Helvetica", 14)
    c.drawString(100, 700, f"Décerné à : {nom}")
    c.drawString(100, 670, f"Formation : {formation}")
    c.drawString(100, 640, f"Date : {date}")
    c.drawString(100, 600, "Signature : Club Empreinte Digitale")
    c.save()
# Utilisation :
# generer_certificat("Yamina", "Data Science", "15/05/2025", "certificat_yamina.pdf")

