const products = [
  {
    id: 1,
    title: "t-shirt blue",
    category: "t-shirts",
    color: "blue",
    season: "summer",
    stock: 0,
    price: 10,
    size: "L",
    gender: "other",
    image:
      "https://calvincolombia.vteximg.com.br/arquivos/ids/183281-650-709/K10K108836_C85_1.jpg?v=637931438959900000",
  },
  {
    id: 2,
    title: "t-shirt black",
    category: "t-shirts",
    color: "black",
    season: "summer",
    price: 10,
    size: "L",
    gender: "female",
    image:
      "https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png",
  },
  {
    id: 3,
    title: "t-shirt red",
    category: "t-shirts",
    color: "red",
    season: "summer",
    stock: 5,
    price: 10,
    size: "L",
    gender: "female",
    image:
      "https://jumbocolombiaio.vtexassets.com/arquivos/ids/214196-1200-1200?v=637814277295200000&width=1200&height=1200&aspect=true",
  },
  {
    id: 4,
    title: "t-shirt green",
    category: "t-shirts",
    color: "green",
    season: "winter",
    price: 20.5,
    size: "S",
    gender: "male",
    image:
      "https://jumbocolombiaio.vtexassets.com/arquivos/ids/214034-800-600?v=637814276769400000&width=800&height=600&aspect=true",
  },
  {
    id: 5,
    title: "t-shirt yellow",
    category: "t-shirts",
    color: "yellow",
    season: "winter",
    price: 20.5,
    size: "S",
    gender: "female",
    image:
      "https://www.duracolor.co/components/com_virtuemart/shop_image/product/Camiseta_Gildan__5453a122b04ed.jpg",
  },
  {
    id: 6,
    title: "shirt white",
    category: "shirts",
    color: "white",
    season: "winter",
    price: 20.5,
    size: "S",
    gender: "male",
    image:
      "https://i.pinimg.com/originals/bd/10/84/bd10842ad4fc8aa37668b6915d5929a4.jpg",
  },
  {
    id: 7,
    title: "shirt blue",
    category: "shirts",
    color: "blue",
    season: "winter",
    price: 20.5,
    size: "S",
    gender: "male",
    image:
      "https://www.pngplay.com/wp-content/uploads/2/Dress-Shirt-Transparent-Background.png",
  },

  {
    id: 8,
    title: "shirt black",
    category: "shirts",
    color: "black",
    season: "winter",
    price: 20.5,
    size: "S",
    gender: "male",
    image:
      "https://www.arteluniformes.com/wp-content/uploads/2017/03/04015.jpg",
  },
  {
    id: 9,
    title: "jacket black",
    category: "jackets",
    color: "black",
    season: "winter",
    stock: 2,
    price: 50.5,
    size: "XL",
    gender: "male",
    image:
      "https://i.postimg.cc/hj2mFjZ7/363-3631961-leather-jacket-png-zip-up-black-leather-jacket-removebg-preview.png",
  },
  {
    id: 10,
    title: "jacket red",
    category: "jackets",
    color: "red",
    season: "winter",
    price: 50.5,
    size: "XL",
    gender: "male",
    image:
      "https://gamepals.co/1281-large_default/the-north-face-resolve-roja.jpg",
  },
  {
    id: 11,
    title: "jacket yellow",
    category: "jackets",
    color: "yellow",
    season: "winter",
    price: 50.5,
    size: "XL",
    gender: "male",
    image:
      "https://www.tradeinn.com/f/13815/138156173/superdry-chaqueta-spirit-sports.jpg",
  },
  {
    id: 12,
    title: "jacket white",
    category: "jackets",
    color: "white",
    season: "winter",
    stock: 3,
    price: 50.5,
    size: "XL",
    gender: "female",
    image:
      "https://i.linio.com/p/9c8686180b1bc7de9913bfc43456ffbe-product.webp",
  },
  {
    id: 13,
    title: "Jeans green",
    category: "jeans",
    color: "green",
    season: "spring",
    price: 40,
    size: "M",
    gender: "female",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQsGJRx2ZU2gBlQgcsmwvdsncZag7GvhgkezWd0JmSqRyPPLYwGxA3rIqOoAIzhj-4xuV1a_p05RNtW0su4i36y6vvSEN6o&usqp=CAY",
  },
  {
    id: 14,
    title: "jeans Black",
    category: "jeans",
    color: "black",
    season: "spring",
    price: 40,
    size: "M",
    gender: "female",
    image:
      "https://cdn-images.farfetch-contents.com/17/02/24/44/17022444_34042358_1000.jpg",
  },
  {
    id: 15,
    title: "jeans blue",
    category: "jeans",
    color: "blue",
    season: "spring",
    stock: 10,
    price: 40,
    size: "M",
    gender: "female",
    image:
      "https://i.postimg.cc/BZ85W5sS/5402302434-1-1-3-removebg-preview.png",
  },
  {
    id: 16,
    title: "jordan red",
    category: "shoes",
    color: "red",
    brand: "nike",
    season: "summer",
    price: 80.0,
    size: "XL",
    gender: "male",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR50ZaoCzfflb7loglrN4RTSVxx0MLgdbNxd1R9lVtHpLclpkQHMsgZQ7LXox5xxRFp6IB7yArZwX_yRfzqiYiByef3voCphQINL2hJF84wNpjA-z1B0WrAOQ&usqp=CAE",
  },
  {
    id: 17,
    title: "jordan blue",
    category: "shoes",
    color: "blue",
    brand: "nike",
    season: "summer",
    price: 80.0,
    size: "XL",
    gender: "male",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRBxUoWDWnbsMrIEhREZMWBPCqdP2jDa4pg8W9pcmXPTG6ICpW6OuuTH1Sx7D9kautq8nwpnviTk_KVXYEbprG5q2rh4PLSos1JK6MsthiiOonFQSlGqzlyKg&usqp=CAE",
  },
  {
    id: 18,
    title: "Jordan black",
    category: "shoes",
    color: "black",
    brand: "nike",
    season: "summer",
    stock: 2,
    price: 80.0,
    size: "XL",
    gender: "male",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQUNQEWO3hkSLjwcjT-5B2gRCOWwraVqlLHgy6qMAsCkrbEitCNLFzKGB6IOGbKvu6o7r3ttQFTRadFsCIc-JKNZrKyAzP8vF4KnI5mqSb50aP292bgETJjwmM&usqp=CAE",
  },
  {
    id: 19,
    title: "nice red wool t-shirt",
    category: "t-shirts",
    color: "red",
    season: "summer",
    stock: 5,
    price: 9.5,
    size: "M",
    gender: "male",
    image:
      "https://keliclothing.fi/wp-content/uploads/2019/02/tpaita_pun_etu_4k.jpg",
  },
  {
    id: 20,
    title: "awesome green wool t-shirt",
    category: "t-shirts",
    color: "green",
    season: "summer",
    stock: 2,
    price: 12,
    size: "S",
    gender: "female",
    image:
      "https://web.lasting.eu/39934-thickbox_default/lasting-damska-merino-mikina-beva-zelena.jpg",
  },
  {
    id: 21,
    title: "perfect black sports t-shirt",
    category: "t-shirts",
    color: "black",
    season: "summer",
    stock: 2,
    price: 9,
    size: "L",
    gender: "male",
    image: "https://i.ebayimg.com/images/g/6LsAAOSwuWpdwZeM/s-l500.jpg",
  },
  {
    id: 22,
    title: "Jean black 2",
    category: "jeans",
    color: "black",
    season: "spring",
    price: 30,
    size: "M",
    gender: "male",
    image:
      "https://data.tieapart.com/imgprodotto/lean-dean-jeans-black-colour_6116.jpg",
  },
  {
    id: 23,
    title: "Jean Blue",
    category: "jeans",
    color: "blue",
    season: "autumn",
    price: 35,
    size: "XL",
    gender: "female",
    image:
      "https://cdn-images.farfetch-contents.com/16/60/95/39/16609539_32533871_1000.jpg",
  },
  {
    id: 24,
    title: "Jeans White",
    category: "jeans",
    color: "white",
    season: "spring",
    price: 44,
    size: "L",
    gender: "male",
    image:
      "https://cdn.shopify.com/s/files/1/0186/1574/products/JE037660_WT01_2000x.jpg?v=1662163687",
  },
  {
    id: 25,
    title: "Leather King Women's Jacket",
    category: "jackets",
    color: "black",
    season: "autumn",
    price: 80,
    size: "M",
    gender: "female",
    image: "https://m.media-amazon.com/images/I/71new-NVynL._AC_UX569_.jpg",
  },
  {
    id: 26,
    title: "Ladies Long Sleeve Value Denim Shirts",
    category: "shirts",
    color: "blue",
    season: "spring",
    price: 35,
    size: "M",
    gender: "female",
    image: "https://m.media-amazon.com/images/I/61Iw0aFJnDS._AC_UX522_.jpg",
  },
  {
    id: 27,
    title: "Crocs Unisex-Adult",
    category: "shoes",
    color: "white",
    season: "winter",
    price: 45,
    size: "L",
    gender: "other",
    image: "https://m.media-amazon.com/images/I/61D4bBjcM6L._AC_UX575_.jpg",
  },
  {
    id: 28,
    title: "Korean False Shirt Doll Collar Blouse",
    category: "shirts",
    color: "white",
    season: "spring",
    stock: 4,
    price: 20.5,
    size: "M",
    gender: "female",
    image: "https://m.media-amazon.com/images/I/61Ph9dljw7L._AC_UL1001_.jpg",
  },
  {
    id: 29,
    title: "Long Sleeve Plaid Flannel Shirt",
    category: "shirts",
    color: "white",
    season: "spring",
    stock: 3,
    price: 20.5,
    size: "L",
    gender: "female",
    image: "https://m.media-amazon.com/images/I/61pNFXhcONL._AC_UL1080_.jpg",
  },
  {
    id: 30,
    title: "Low-top Trainer Sneakers",
    category: "shoes",
    color: "red",
    brand: "fila",
    season: "vans",
    stock: 5,
    price: 80.0,
    size: "M",
    gender: "female",
    image:
      "https://m.media-amazon.https://m.media-amazon.com/images/I/71R7VLxkFpL._AC_UL1500_.jpg/images/I/41R3ZnJ64-L._AC_UL1001_.jpg",
  },
  {
    id: 31,
    title: "Keds Women's Core Champion Sneaker",
    category: "shoes",
    color: "red",
    brand: "keds",
    season: "summer",
    stock: 8,
    price: 45.0,
    size: "M",
    gender: "female",
    image: "https://m.media-amazon.com/images/I/51oMeeI4KwL._AC_UL1000_.jpg",
  },
  {
    id: 32,
    title: "Long Sleeve Trendy Wool Jacket",
    category: "jackets",
    color: "black",
    season: "autumn",
    stock: 2,
    price: 36.0,
    size: "L",
    gender: "female",
    image: "https://m.media-amazon.com/images/I/61d4a8jitbL._AC_UL1500_.jpg",
  },
];
module.exports = products;
