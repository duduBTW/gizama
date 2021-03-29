import dataJson from "./data.json";
export interface RootObject {
  en: ItemProp;
  pt: ItemProp;
}

export interface ItemProp {
  discord: string;
  twitter: string;
  home: Home;
  cotact: Cotact;
  com: Com;
  port: Port[];
  contract: string;
}

interface Port {
  type: string;
  content: Example[];
}

interface Com {
  header: Header2;
  prices: Price[];
  list: any;
}

interface Price {
  title: string;
  items: Item[];
}

interface Item {
  list: string[];
  total: string;
}

interface Header2 {
  title: string;
  desc: string;
  example: Example[];
}

interface Example {
  type: "image" | "video";
  url: any;
}

interface Cotact {
  email: string;
  title: string;
  dec: string;
}

interface Home {
  header: Header;
  info: Info;
}

interface Info {
  title: string;
  desc: string;
  img: string;
}

interface Header {
  title: string;
  desc: string;
}

const data: RootObject = dataJson as RootObject;

// const data: RootObject = {
//   en: {
//     discord: "teste#1234",
//     twitter: "@teste",
//     home: {
//       header: {
//         title: "EN",
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ?",
//       },
//       info: {
//         title: "TITLE 2",
//         desc:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repudiandae quae cum, perferendis laborum atque cumque temporibus unde rerum eligendi sunt quis expedita accusamus recusandae mollitia nostrum sit. Quaerat commodi natus repellendus qui doloremque dolor? Mollitia a ea illo ?",
//         img:
//           "https://www.live2d.com/wp/wp-content/themes/cubism_wpml/img/index-function-img_01.jpg",
//       },
//     },
//     cotact: {
//       email: "",
//       title: "",
//       dec: "",
//     },
//     com: {
//       header: {
//         title: "COMMISIONS",
//         desc:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
//         example: [
//           {
//             type: "video",
//             url:
//               "https://firebasestorage.googleapis.com/v0/b/hololive-6a02e.appspot.com/o/Main.webm?alt=media&token=54448b68-dfda-4855-b1f3-34e8f287a979",
//           },
//           {
//             type: "video",
//             url:
//               "https://firebasestorage.googleapis.com/v0/b/hololive-6a02e.appspot.com/o/Mad.webm?alt=media&token=ee23b0f7-fa70-49e9-946e-f651d0954aba",
//           },
//           {
//             type: "image",
//             url:
//               "https://firebasestorage.googleapis.com/v0/b/hololive-6a02e.appspot.com/o/Fubuki.png?alt=media&token=32ac71fe-708b-4f6a-81b9-89b43d2f121f",
//           },
//         ],
//       },
//       list: [
//         {
//           porc: "150 $",
//           items: [
//             "Respiration",
//             "Movimento facial (olhos e boca)",
//             "Inclinação da cabeça (angle Z)",
//             "Inclinação do corpo (angle Z)",
//           ],
//         },
//         {
//           porc: "250$",
//           items: [
//             "Todos os anteriores mais: ",
//             "Angulo de cabeça direita-esquerda (head angle X)",
//             "Angulo de cabeça cima-baixo (head angle Y)",
//             "Fisica do cabelo",
//             "Fisica dos seios",
//           ],
//         },
//         {
//           porc: "450$",
//           items: [
//             "Todos os anteriores mais: ",
//             "Angulo do corpo direita-esquerda (body angle X)",
//             "Angulo do corpo cima-baixo (body angle Y)",
//             "Fisica do corpo completa",
//             "1 set de expressões (3 no total)",
//           ],
//         },
//         {
//           porc: "750$",
//           items: [
//             "Todos os anteriores mais: ",
//             "Inclinação do corpo frente e trás",
//             "Expressões com efeitos visuais (3 no total)",
//           ],
//         },
//         {
//           porc: "Adicionais",
//           items: [
//             "Expressões extras terão um adicional de 15$ cada",
//             "Expressões com efeito terão adicionao de 30$ cada",
//             "Roupas adicionais custarão 50%-60% a mais dependendo da complexidade",
//           ],
//         },
//       ],
//       prices: [
//         {
//           title: "",
//           items: [
//             {
//               list: ["", "", "", ""],
//               total: "",
//             },
//             {
//               list: ["", "", "", ""],
//               total: "",
//             },
//           ],
//         },
//       ],
//     },
//     port: [
//       {
//         type: "Live2D",
//         content: [
//           // {
//           //   type: "vtuber",
//           //   url: "",
//           // },
//           {
//             type: "video",
//             url: "",
//           },
//           {
//             type: "image",
//             url: "",
//           },
//         ],
//       },
//     ],
//     contract:
//       "https://cors-anywhere.herokuapp.com/https://cdn.discordapp.com/attachments/811723627573673994/822865309912268870/contract.pdf",
//   },
//   pt: {
//     discord: "teste#1234",
//     twitter: "@teste",
//     home: {
//       header: {
//         title: "portugues",
//         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ?",
//       },
//       info: {
//         title: "TITLE 2",
//         desc:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repudiandae quae cum, perferendis laborum atque cumque temporibus unde rerum eligendi sunt quis expedita accusamus recusandae mollitia nostrum sit. Quaerat commodi natus repellendus qui doloremque dolor? Mollitia a ea illo ?",
//         img:
//           "https://www.live2d.com/wp/wp-content/themes/cubism_wpml/img/index-function-img_01.jpg",
//       },
//     },
//     cotact: {
//       email: "",
//       title: "",
//       dec: "",
//     },
//     com: {
//       header: {
//         title: "COMMISIONS",
//         desc:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
//         example: [
//           {
//             type: "video",
//             url:
//               "https://firebasestorage.googleapis.com/v0/b/hololive-6a02e.appspot.com/o/Main.webm?alt=media&token=54448b68-dfda-4855-b1f3-34e8f287a979",
//           },
//           {
//             type: "video",
//             url:
//               "https://firebasestorage.googleapis.com/v0/b/hololive-6a02e.appspot.com/o/Mad.webm?alt=media&token=ee23b0f7-fa70-49e9-946e-f651d0954aba",
//           },
//           {
//             type: "image",
//             url:
//               "https://firebasestorage.googleapis.com/v0/b/hololive-6a02e.appspot.com/o/Fubuki.png?alt=media&token=32ac71fe-708b-4f6a-81b9-89b43d2f121f",
//           },
//         ],
//       },
//       list: [
//         {
//           porc: "150 $",
//           items: [
//             "Respiração",
//             "Movimento facial (olhos e boca)",
//             "Inclinação da cabeça (angle Z)",
//             "Inclinação do corpo (angle Z)",
//           ],
//         },
//         {
//           porc: "250$",
//           items: [
//             "Todos os anteriores mais: ",
//             "Angulo de cabeça direita-esquerda (head angle X)",
//             "Angulo de cabeça cima-baixo (head angle Y)",
//             "Fisica do cabelo",
//             "Fisica dos seios",
//           ],
//         },
//         {
//           porc: "450$",
//           items: [
//             "Todos os anteriores mais: ",
//             "Angulo do corpo direita-esquerda (body angle X)",
//             "Angulo do corpo cima-baixo (body angle Y)",
//             "Fisica do corpo completa",
//             "1 set de expressões (3 no total)",
//           ],
//         },
//         {
//           porc: "750$",
//           items: [
//             "Todos os anteriores mais: ",
//             "Inclinação do corpo frente e trás",
//             "Expressões com efeitos visuais (3 no total)",
//           ],
//         },
//         {
//           porc: "Adicionais",
//           items: [
//             "Expressões extras terão um adicional de 15$ cada",
//             "Expressões com efeito terão adicionao de 30$ cada",
//             "Roupas adicionais custarão 50%-60% a mais dependendo da complexidade",
//           ],
//         },
//       ],
//       prices: [
//         {
//           title: "",
//           items: [
//             {
//               list: ["", "", "", ""],
//               total: "",
//             },
//             {
//               list: ["", "", "", ""],
//               total: "",
//             },
//           ],
//         },
//       ],
//     },
//     port: [
//       {
//         type: "Live2D",
//         content: [
//           // {
//           //   type: "vtuber",
//           //   url: "",
//           // },
//           {
//             type: "video",
//             url: "",
//           },
//           {
//             type: "image",
//             url: "",
//           },
//         ],
//       },
//     ],
//     contract:
//       "https://cors-anywhere.herokuapp.com/https://cdn.discordapp.com/attachments/811723627573673994/822865309912268870/contract.pdf",
//   },
// };

export default data;
