
// ========================================
// ZAKARIA PORTFOLIO - SERVEUR NODE.JS
// ========================================

require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3000;

// Autoriser la lecture des données JSON
app.use(express.json());

// Afficher les fichiers du portfolio
app.use(express.static(__dirname));

// Configuration de Gmail
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Route du formulaire de contact
app.post("/api/contact", async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Vérifier les champs
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "Veuillez remplir tous les champs."
            });
        }

        // Vérifier les longueurs
        if (
            name.length > 100 ||
            email.length > 254 ||
            subject.length > 150 ||
            message.length > 5000
        ) {
            return res.status(400).json({
                success: false,
                message: "Certains champs sont trop longs."
            });
        }

        // Vérifier l'adresse email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Adresse email invalide."
            });
        }

        // Envoyer le message
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            replyTo: email,
            to: process.env.EMAIL_USER,
            subject: `[Portfolio] ${subject}`,
            text: `Nom : ${name}

Email : ${email}

Message :
${message}`
        });

        res.json({
            success: true,
            message: "Votre message a été envoyé avec succès !"
        });

    } catch (error) {
        console.error("Erreur email :", error);

        res.status(500).json({
            success: false,
            message: "Une erreur est survenue lors de l'envoi."
        });
    }
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
