const cardData = {
    profile: {
        name: "Mostaza Web",
        title: "Desarrollo web y marketing digital",
        description: "Redes sociales • Posicionamiento SEO • Campañas Publicitarias • Branding • Sitios web",
        // La imagen que se cargará, sube tu logo a la carpeta assets/img/mostaza.png
        image: "assets/img/mostaza.png",
        // Imagen de respaldo si no encuentra la principal
        fallbackImage: "assets/img/mostaza.png"
    },
    contact: {
        phone: "593983469584", // Solo números y código de país, usado para enlaces de WhatsApp y llamada
        phoneDisplay: "+593 98 346 9584", // Usado para mostrar visualmente en la vCard
        email: "info@mostazaweb.net",
        whatsappMessage: "Hola, me gustaría obtener más información sobre sus servicios.",
        company: "Mostaza Web",
        note: "Redes sociales\nPosicionamiento SEO\nCampañas Publicitarias\nBranding\nSitios web",
        url: typeof window !== 'undefined' ? window.location.href : "https://mostazaweb.net"
    },
    social: [
        { name: "Instagram", url: "https://www.instagram.com/mostaza_web/", icon: "instagram" },
        { name: "Facebook", url: "https://www.facebook.com/profile.php?id=100091959369634&locale=cy_GB#", icon: "facebook" },
        // Lucide usa íconos generales así que 'music-2' o 'video' puede servir como tiktok de manera nativa sin recargar svgs personalizados
        { name: "TikTok", url: "https://www.tiktok.com/@mostaza_web", icon: "music-2" } 
    ]
};
