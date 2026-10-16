/**
 * Adresconfiguratie Fysio Laren
 * 
 * TIJDELIJK ADRES I.V.M. ZORGVERZEKERAARS:
 * Permanent adres (bewaard om straks direct terug te kunnen zetten):
 *   Straat: Huenderstraat 3
 *   Postcode: 7245 BG
 *   Plaats: Laren, Gld
 * 
 * Huidig actief (tijdelijk) adres:
 *   Straat: Rengersweg 2
 *   Postcode: 7245 AC
 *   Plaats: Laren, Gld
 */

export const ADDRESS_CONFIG = {
  // Zet isTemporary op false zodra het permanente adres (Huenderstraat 3) weer actief wordt.
  isTemporary: true,

  // Tijdelijk adres voor zorgverzekeraars
  temporary: {
    street: "Rengersweg 2",
    postalCode: "7245 AC",
    city: "Laren",
    region: "Gld",
    formatted: "Rengersweg 2, 7245 AC Laren, Gld",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Rengersweg%202,%207245%20AC%20Laren&t=&z=15&ie=UTF8&iwloc=&output=embed",
    googleMapsDirUrl: "https://www.google.com/maps/dir/?api=1&destination=Rengersweg+2,+7245+AC+Laren",
  },

  // Permanent adres (Huenderstraat 3)
  permanent: {
    street: "Huenderstraat 3",
    postalCode: "7245 BG",
    city: "Laren",
    region: "Gld",
    formatted: "Huenderstraat 3, 7245 BG Laren, Gld",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Huenderstraat%203,%207245%20BG%20Laren&t=&z=15&ie=UTF8&iwloc=&output=embed",
    googleMapsDirUrl: "https://www.google.com/maps/dir/?api=1&destination=Huenderstraat+3,+7245+BG+Laren",
  },

  // Actieve waarden
  get current() {
    return this.isTemporary ? this.temporary : this.permanent;
  }
};
