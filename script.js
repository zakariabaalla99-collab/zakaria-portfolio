
/* =================================
   ZAKARIA PORTFOLIO
   JAVASCRIPT
================================= */

// MENU MOBILE

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuBtn.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";
});

// Fermer le menu après un clic

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});


// TRADUCTIONS FRANÇAIS / ANGLAIS

const translations = {

    fr: {
        navHome: "Accueil",
        navAbout: "À propos",
        navSkills: "Compétences",
        navProjects: "Projets",
        navContact: "Contact",
        navHire: "Me contacter",

        available: "Disponible pour de nouveaux projets",
        hello: "Bonjour, je suis",
        profession: "Développeur Web Full Stack",

        heroDescription:
            "Je crée des expériences web modernes, performantes et adaptées aux besoins des entreprises et des particuliers.",

        seeProjects: "Découvrir mes projets →",
        contactMe: "Me contacter",
        sendEmail: "Envoyer un email →",

        sectionAbout: "01 / À PROPOS",
        sectionSkills: "02 / COMPÉTENCES",
        sectionWork: "03 / PROJETS",
        sectionContact: "04 / CONTACT",

        projectNumberOne: "PROJET 01",
        projectNumberTwo: "PROJET 02",

        pageTitle: "Zakaria | Développeur Web Full Stack",
        metaDescription: "Portfolio professionnel de Zakaria, développeur Web Full Stack.",

        downloadCV: "Télécharger mon CV",
        profileBadge: "Développeur Full Stack",
        projectStatus: "Projet en cours de développement",

        statSkills: "Technologies",
        statProjects: "Projet en cours",
        statMotivation: "Motivation",

        aboutTitle: "À propos de moi",
        aboutDescription:
            "Je suis Zakaria, développeur Web Full Stack passionné par la création de sites web modernes. J'aime transformer des idées en expériences numériques simples, élégantes et efficaces.",

        skillsTitle: "Mes compétences",
        htmlDesc: "Structure des pages web",
        cssDesc: "Design et responsive",
        jsDesc: "Interactions et fonctionnalités",
        nodeDesc: "Développement Backend",

        projectsTitle: "Mes projets",
        projectDescription:
            "Site web de restaurant avec menu, commandes et interface d'administration.",

        projectTwo: "Projet à venir",
        comingSoon: "Un nouveau projet sera bientôt présenté ici.",

        contactTitle: "Travaillons ensemble",
        contactDescription:
            "Vous avez une idée ou un projet ? N'hésitez pas à me contacter.",

        rights: "Tous droits réservés.",
        backTop: "Retour en haut ↑"
    },

    en: {
        navHome: "Home",
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navContact: "Contact",
        navHire: "Contact me",

        available: "Available for new projects",
        hello: "Hello, I'm",
        profession: "Full Stack Web Developer",

        heroDescription:
            "I build modern, high-performance web experiences tailored to businesses and individuals.",

        seeProjects: "Explore my projects →",
        contactMe: "Contact me",
        sendEmail: "Send an Email →",

        sectionAbout: "01 / ABOUT",
        sectionSkills: "02 / SKILLS",
        sectionWork: "03 / WORK",
        sectionContact: "04 / CONTACT",

        projectNumberOne: "PROJECT 01",
        projectNumberTwo: "PROJECT 02",

        pageTitle: "Zakaria | Full Stack Web Developer",
        metaDescription: "Professional portfolio of Zakaria, Full Stack Web Developer.",

        downloadCV: "Download My CV",
        profileBadge: "Full Stack Developer",
        projectStatus: "Project Under Development",

        statSkills: "Technologies",
        statProjects: "Ongoing Project",
        statMotivation: "Motivation",

        aboutTitle: "About me",
        aboutDescription:
            "I'm Zakaria, a Full Stack Web Developer passionate about building modern websites. I enjoy transforming ideas into simple, elegant and effective digital experiences.",

        skillsTitle: "My skills",
        htmlDesc: "Web page structure",
        cssDesc: "Design and responsive layouts",
        jsDesc: "Interactions and functionality",
        nodeDesc: "Backend development",

        projectsTitle: "My projects",
        projectDescription:
            "Restaurant website with menu, orders and administration dashboard.",

        projectTwo: "Coming soon",
        comingSoon: "A new project will be presented here soon.",

        contactTitle: "Let's work together",
        contactDescription:
            "Have an idea or a project? Feel free to contact me.",

        rights: "All rights reserved.",
        backTop: "Back to top ↑"
    }

};


// LANGUE ACTIVE

let currentLanguage = "fr";

const languageBtn = document.getElementById("languageBtn");

function changeLanguage() {

    typingIndex = 0;
    deleting = false;

        currentLanguage =
        currentLanguage === "fr" ? "en" : "fr";

    document.documentElement.lang = currentLanguage;

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (translations[currentLanguage][key]) {
            element.textContent =
                translations[currentLanguage][key];
        }

    });

    document.title = translations[currentLanguage].pageTitle;

document.getElementById("metaDescription").setAttribute(
    "content",
    translations[currentLanguage].metaDescription
);

    languageBtn.textContent =
        currentLanguage === "fr" ? "EN" : "FR";

}

languageBtn.addEventListener("click", changeLanguage);

// ANIMATION D'ECRITURE

const typingText = document.getElementById("typingText");

let typingIndex = 0;
let deleting = false;

function typeProfession() {

    const text = translations[currentLanguage].profession;

    typingText.textContent = text.substring(0, typingIndex);

    if (!deleting && typingIndex < text.length) {
        typingIndex++;
        setTimeout(typeProfession, 100);
    } else if (deleting && typingIndex > 0) {
        typingIndex--;
        setTimeout(typeProfession, 50);
    } else {
        deleting = !deleting;
        setTimeout(typeProfession, 1000);
    }
}

typeProfession();

console.log("Zakaria Portfolio chargé avec succès !");

// ANIMATION AU DEFILEMENT

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".section, .project-card, .skill-card").forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
});

// BOUTON RETOUR EN HAUT

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// CHANGEMENT DE THEME

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const isLight = document.body.classList.contains("light-mode");

    themeBtn.innerHTML = isLight
        ? '<i class="fas fa-moon"></i>'
        : '<i class="fas fa-sun"></i>';

    console.log("Thème actif :", isLight ? "Clair" : "Sombre");

});


/* =================================
   FORMULAIRE DE CONTACT
================================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const status = document.getElementById("formStatus");
        const sendButton = document.getElementById("sendMessageBtn");

        const formData = {
            name: document.getElementById("contactName").value.trim(),
            email: document.getElementById("contactEmail").value.trim(),
            subject: document.getElementById("contactSubject").value.trim(),
            message: document.getElementById("contactMessage").value.trim()
        };

        if (!formData.name || !formData.email ||
            !formData.subject || !formData.message) {
            status.textContent = "Veuillez remplir tous les champs.";
            status.className = "error";
            return;
        }

        sendButton.disabled = true;
        sendButton.textContent = "Envoi en cours...";
        status.textContent = "";

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Erreur d'envoi.");
            }

            status.textContent = result.message;
            status.className = "success";
            contactForm.reset();

        } catch (error) {
            status.textContent = error.message;
            status.className = "error";

        } finally {
            sendButton.disabled = false;
            sendButton.innerHTML =
                '<i class="fas fa-paper-plane"></i> Envoyer le message';
        }
    });
}
