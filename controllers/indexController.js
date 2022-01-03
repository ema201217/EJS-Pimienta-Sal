let menus = [
  {
    id: 1,
    nombre: "Carpaccio fresco",
    descripcion: "Entrada Carpaccio de salmón con cítricos",
    descripcionDetallada:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dictasunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quiaconsequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, quidolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi temporaincidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrumexercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autemvel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illumqui dolorem eum fugiat quo voluptas nulla pariatur?",
    precio: "U$S 65.50",
    imagen: "Carpaccio-de-salmon.jpg",
  },
  {
    id: 2,
    nombre: "Risotto de berenjena",
    descripcion: "Risotto de berenjena y queso de cabra",
    descripcionDetallada: "",
    precio: "U$S 47.00",
    imagen: "Risotto-berenjena-queso-cabra.jpg",
  },
  {
    id: 3,
    nombre: "Mousse de arroz",
    descripcion: "Mousse de arroz con leche y aroma de azahar",
    descripcionDetallada:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dictasunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quiaconsequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, quidolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi temporaincidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrumexercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autemvel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illumqui dolorem eum fugiat quo voluptas nulla pariatur?",
    precio: "U$S 27.50",
    imagen: "Mousse-de-arroz-con-leche.jpg",
  },
  {
    id: 4,
    nombre: "Espárragos blancos",
    descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
    descripcionDetallada: "",
    precio: "U$S 37.50",
    imagen: "esparragos.png",
  },
];

let about = {
  titulo: "Pimienta & Sal",
  informacion1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur
  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
  exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute iruredolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur.We only use
  `,
  palabraResaltada:"seasonal",
    ultimaPalabraInfo1:"ingredients.",
  informacion2: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum consectetur adipiscing
          elit, sed do eiusmod temporincididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.`,
  imagen: "principal.jpg",
}

module.exports = {
  index: (req, res) => {
    res.render("index", { menus, about });
  },
  detalle: (req, res) => {
    let menu = menus.find((menu) => menu.id == req.params.id);
    console.log(menu);
    res.render("detalleMenu", { menu });
  },
};
