

const metaTags = {
    home: {
        title: "Gymnastics Classes in Bangalore - Viswajit Nikhath Gymnastiks",
        description: "We have gymnastics classes designed for everyone - Adult, Children, Beginner, Toddler, Competitive, Recreational. Bangalore, Whitefield, Marathahalli.",
        keywords: "Gymnastics, Training, Bengaluru, Bangalore, Marathahalli, Exercise, Fitness, Kids, Recreation, Dance, Artistic, Children, Games, Activity, Health, White Field, Kundalahalli",
        "og-type": "website",
        "og-url": "https://www.viswajitnikhathgymnastiks.in/",
        "og-title": "Gymnastics Classes in Bangalore - Viswajit Nikhath Gymnastiks",
        "og-description": "We have gymnastics classes designed for everyone - Adult, Children, Beginner, Toddler, Competitive, Recreational. Bangalore, Whitefield, Marathahalli.",
        "og-image": "https://www.viswajitnikhathgymnastiks.in/assets/img/meta/viswajit-nikhath-gymnastiks.png",
        "twitter-card": "summary_large_image",
        "twitter-url": "https://www.viswajitnikhathgymnastiks.in",
        "twitter-title": "Gymnastics Classes in Bangalore - Viswajit Nikhath Gymnastiks",
        "twitter-description": "We have gymnastics classes designed for everyone - Adult, Children, Beginner, Toddler, Competitive, Recreational. Bangalore, Whitefield, Marathahalli.",
        "twitter-image": "https://www.viswajitnikhathgymnastiks.in/assets/img/meta/viswajit-nikhath-gymnastiks.png"
    },
    contact: {
        title: "Contact Us - Viswajit Nikhath Gymnastiks",
        description: "We have gymnastics classes designed for everyone - Adult, Children, Beginner, Toddler, Competitive, Recreational. Bangalore, Whitefield, Marathahalli.",
        "og-url": "https://www.viswajitnikhathgymnastiks.in/contact",
        "og-title": "Contact Us - Viswajit Nikhath Gymnastiks",
        "og-description": "We have gymnastics classes designed for everyone - Adult, Children, Beginner, Toddler, Competitive, Recreational. Bangalore, Whitefield, Marathahalli.",
        "og-image": "https://www.viswajitnikhathgymnastiks.in/assets/img/meta/gymnastics-classes-contact.jpg",
        "twitter-url": "https://www.viswajitnikhathgymnastiks.in/contact",
        "twitter-title": "Contact Us - Viswajit Nikhath Gymnastiks",
        "twitter-description": "We have gymnastics classes designed for everyone - Adult, Children, Beginner, Toddler, Competitive, Recreational. Bangalore, Whitefield, Marathahalli.",
        "twitter-image": "https://www.viswajitnikhathgymnastiks.in/assets/img/meta/gymnastics-classes-contact.jpg"
    }
};

function setMetaTags(page) {
    const meta = metaTags[page] || metaTags.home;
    document.title = meta.title;

    Object.entries(meta).forEach(([key, value]) => {
        let metaElement = document.querySelector(`meta[name='${key}'], meta[property='${key}']`);
        if (!metaElement) {
            metaElement = document.createElement("meta");
            metaElement.setAttribute(key.includes('og-') || key.includes('twitter-') ? "property" : "name", key);
            document.head.appendChild(metaElement);
        }
        metaElement.setAttribute("content", value);
    });
}

// Example usage:
const currentPage = window.location.pathname.split("/").pop() || "home";
setMetaTags(currentPage);

