import { Facebook, Instagram, TikTok } from "./icons";

export const nav = [
  {
    name: "Productos",
    href: "",
    target: "productos",
    color: "rgb(106, 174, 231)",
  },
  {
    name: "Historia",
    href: "",
    target: "historia",
    color: "rgb(252, 165, 148)",
  },
  {
    name: "Contacto",
    href: "",
    target: "contacto",
    color: "rgb(178, 222, 161)",
  },
  { name: "Catálogo Productos", href: "#", target: "", color: "" },
  { name: "Datos Logística", href: "#", target: "", color: "" },
];

export const social = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/AlfajoresGuaymallen/",
    icon: Facebook,
    color: "rgb(106, 174, 231)",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/a_guaymallen/",
    icon: Instagram,
    color: "rgb(252, 165, 148)",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/discover/alfajores-guaymallen",
    icon: TikTok,
    color: "rgb(147, 216, 230)",
  },
];

export const alfajoresSimples = [
  {
    name: "Simple de chocolate",
    description:
      "El favorito del kiosquero. <br /> Simple, directo y con sabor a premio.",
    weight: "38 grs.",
    image: "./images/alfajores/simple-chocolate.png",
    bgColor: "rgb(253, 210, 19)",
    triple: false,
  },
  {
    name: "Simple de dulce de leche",
    description:
      "El clásico que nunca falla. Dos tapas, <strong>dulce de leche generoso.</strong> Sabor a infancia, a buen precio.",
    weight: "38 grs.",
    image: "./images/alfajores/simple-dulce-leche.png",
    bgColor: "rgb(147, 216, 230)",
    triple: false,
  },
  {
    name: "Simple de membrillo",
    description:
      "El toque diferente. Relleno de membrillo tradicional.<br/><strong>Un sabor bien argentino y casero.</strong>",
    weight: "38 grs.",
    image: "./images/alfajores/simple-membrillo.png",
    bgColor: "rgb(178, 222, 161)",
    triple: false,
  },
];

export const alfajoresTriples = [
  {
    name: "Triple de chocolate",
    description:
      "El hermano mayor. Triple capa, doble relleno consistente.<br/><strong>Una sobredosis de felicidad permitida.</strong>",
    weight: "70 grs.",
    image: "./images/alfajores/triple-chocolate.png",
    bgColor: "rgb(252, 165, 148)",
    triple: true,
  },
  {
    name: "Triple de dulce de leche",
    description:
      "Acá no se mezquina! Tres tapas, doble relleno <strong>generoso. <br/>Caramento de energía para terminar el día.</strong>",
    weight: "70 grs.",
    image: "./images/alfajores/triple-dulce-leche.png",
    bgColor: "rgb(106, 174, 231)",
    triple: true,
  },
  {
    name: "Triple de membrillo",
    description:
      "Sabor tradicional de membrillo en formato extra grande. <strong>La excusa perfecta para darte un gran gusto.</strong>",
    weight: "70 grs.",
    image: "./images/alfajores/triple-membrillo.png",
    bgColor: "rgb(82, 176, 123)",
    triple: true,
  },
];

export const alfajoresPacks = [
  {
    name: "Simple de chocolate",
    image: "./images/alfajores/pack-chocolate.png",
  },
  {
    name: "Simple de dulce de leche",
    image: "./images/alfajores/pack-dulce-leche.png",
  },
  {
    name: "Simple de membrillo",
    image: "./images/alfajores/pack-membrillo.png",
  },
];
