module.exports = {
  name: "Základní a mateřská škola Libchavy",
  email: "skola@zslibchavy.cz",
  ico: "19538685",
  phoneForTel: "+420465582203",
  phoneFormatted: "+420 465 582 203",
  address: {
    lineOne: "Dolní Libchavy 153",
    city: "Libchavy",
    zip: "561 16",
    mapLink: "https://maps.app.goo.gl/ArFj6T9S9ih1TWbJ7",
  },
  socials: {
    facebook: "https://www.facebook.com/ZSaMSLibchavy/",
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/",
    tiktok: "https://www.tiktok.com/",
    whatsapp: "https://wa.me/"
  },
  //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
  domain: "https://www.zslibchavy.cz",
  // Passing the isProduction variable for use in HTML templates
  isProduction: process.env.ELEVENTY_ENV === "PROD",
};