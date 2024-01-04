/*
 * TILGJENGELIGE PRODUKTER:
 * prodid: unik id for hvert produkt
 * title: produktnavn for visning på web
 * category: produktkategori
 * price: produktpris
 * storage: antall på lager
 * imagefile: filnavn til produktbilde
 */

const products = [
    {prodid: 1, title: "Dragon Zane", category: "Ninjago", price: "89", storage: 5, imagefile: "dragon_zane.webp"},
    {prodid: 2, title: "Lil'Ninja", category: "Ninjago", price: "99", storage: 2, imagefile: "lil_ninja.webp"},
    {prodid: 3, title: "Master Wu", category: "Ninjago", price: "109", storage: 3, imagefile: "master_wu.webp"},
    {prodid: 4, title: "Scuba Kai", category: "Ninjago", price: "89", storage: 7, imagefile: "scuba_kai.webp"},
    {prodid: 5, title: "The Mechanic", category: "Ninjago", price: "99", storage: 3, imagefile: "the_mechanic.webp"},
    {prodid: 6, title: "Vengestone Warrior", category: "Ninjago", price: "89", storage: 4, imagefile: "vengestone_warrior.webp"}
]

/*
 * HANDLEVOGN:
 * Informasjon som bør lagres i handlevogn er
 * prodid: id som henviser til et produkt i products-arrayen
 *     - bruk prodid som referanse for å hente tittel og pris
 * quantity: antall produkter lagt i handlekurven
 */
let cart = []