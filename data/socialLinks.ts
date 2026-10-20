export const socialLinks = {
    whatsapp: {
        phone: "905557597345",
        message: "Merhaba, EnneagramDigital hakkında bilgi almak istiyorum.",
    },
    instagram: {
        url: "https://www.instagram.com/enneagramegitim/",
    },
    youtube: {
        url: "https://www.youtube.com/@tv.enneagram",
    },
};

export function getWhatsAppUrl() {
    const phone = socialLinks.whatsapp.phone.replace(/\D/g, "");

    if (!phone) return "";

    return `https://wa.me/${phone}?text=${encodeURIComponent(socialLinks.whatsapp.message)}`;
}
