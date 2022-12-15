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
    gender: "male",
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
    gender: "male",
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
    title: "green wool t-shirt",
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
    title: "Leather King Jacket",
    category: "jackets",
    color: "black",
    season: "autumn",
    price: 80,
    size: "M",
    gender: "female",
    image:
      "https://www.fjackets.com/product_images/a/316/Womens_Black_Biker_Leather_Jacket__48988_zoom.jpg",
  },
  {
    id: 26,
    title: "Long Sleeve Denim Shirts",
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
    gender: "female",
    image: "https://m.media-amazon.com/images/I/61D4bBjcM6L._AC_UX575_.jpg",
  },
  {
    id: 28,
    title: "Korean Doll Collar Shirt",
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
    title: "Plaid Flannel Shirt",
    category: "shirts",
    color: "green",
    season: "spring",
    stock: 3,
    price: 20.5,
    size: "L",
    gender: "female",
    image:
      "https://asset.promod.com/product/150290-su-1669915521.jpg?auto=webp&quality=80&width=1920",
  },
  {
    id: 30,
    title: "Low-top Trainer Sneakers",
    category: "shoes",
    color: "black",
    brand: "fila",
    season: "summer",
    stock: 5,
    price: 80.0,
    size: "M",
    gender: "female",
    image:
      "https://i5.walmartimages.com/asr/5f9e57a2-b820-4ac5-95f4-91c18fdfeec6.e953e3b305f3c4f06cc223e723edaeae.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF",
  },
  {
    id: 31,
    title: "Core Champion Sneaker",
    category: "shoes",
    color: "red",
    brand: "keds",
    season: "summer",
    stock: 8,
    price: 45.0,
    size: "M",
    gender: "female",
    image:
      "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw540ffa1e/images/d_08/M9696_D_08X1.jpg?sw=406",
  },
  {
    id: 32,
    title: "Long Sleeve Wool Jacket",
    category: "jackets",
    color: "black",
    season: "autumn",
    stock: 2,
    price: 36.0,
    size: "L",
    gender: "female",
    image: "https://m.media-amazon.com/images/I/61d4a8jitbL._AC_UL1500_.jpg",
  },
  {
    id: 33,
    title: " Shirt Green",
    category: "shirts",
    color: "green",
    season: "spring",
    stock: 3,
    price: 20.5,
    size: "L",
    gender: "male",
    image:
      "https://storesradar.com/wp-content/uploads/2022/08/long-sleeve-shirt-green-1.jpg",
  },
  {
    id: 34,
    title: " Shirt Red male",
    category: "shirts",
    color: "red",
    season: "spring",
    stock: 3,
    price: 20.5,
    size: "L",
    gender: "male",
    image: "https://sc02.alicdn.com/kf/HTB1liYLJVXXXXcIXpXXq6xXFXXX0.jpg",
  },
  {
    id: 35,
    title: " Shirt Red female",
    category: "shirts",
    color: "red",
    season: "spring",
    stock: 3,
    price: 20.5,
    size: "L",
    gender: "female",
    image:
      "https://i.pinimg.com/736x/8e/a0/2e/8ea02e8e17be714a10d99293ffa43ea0.jpg",
  },
  {
    id: 36,
    title: " Shirt black female",
    category: "shirts",
    color: "black",
    season: "spring",
    stock: 3,
    price: 20.5,
    size: "L",
    gender: "female",
    image: "https://m.media-amazon.com/images/I/71dEMrqRZeL._AC_UY1000_.jpg",
  },
  {
    id: 37,
    title: " Shirt yellow male",
    category: "shirts",
    color: "yellow",
    season: "spring",
    stock: 5,
    price: 20.5,
    size: "L",
    gender: "male",
    image:
      "https://static.cilory.com/261278-thickbox_default/spykar-casual-yellow-shirt.jpg",
  },
  {
    id: 38,
    title: " Shirt yellow female",
    category: "shirts",
    color: "yellow",
    season: "spring",
    stock: 5,
    price: 20.5,
    size: "M",
    gender: "female",
    image:
      "https://i.pinimg.com/736x/bb/ee/9b/bbee9bf92183d923f7b525089e868767--airline-tickets-women-sleeve.jpg",
  },
  {
    id: 39,
    title: "t-shirt white male",
    category: "t-shirts",
    color: "white",
    season: "summer",
    price: 10,
    stock: 5,
    size: "L",
    gender: "male",
    image:
      "https://images.jackjones.com/12059219/1371441/001/jackjones-basicv-neckregularfitt-shirt-ban.jpg?v=4a66444df009a5158a7198d3c2a9904f&width=1024&quality=90",
  },
  {
    id: 40,
    title: "t-shirt white female",
    category: "t-shirts",
    color: "white",
    season: "summer",
    price: 10,
    stock: 5,
    size: "L",
    gender: "female",
    image:
      "https://assets.vogue.com/photos/5f1a3e4c21b4d28a24fe9db9/1:1/w_1013,h_1013,c_limit/Hanes%20Slide.jpg",
  },
  {
    id: 41,
    title: "t-shirt blue female",
    category: "t-shirts",
    color: "blue",
    season: "summer",
    price: 10,
    stock: 5,
    size: "L",
    gender: "female",
    image:
      "https://i5.walmartimages.com/asr/a6800b2e-82c7-45ef-a99a-efaeacd465ee.c08bd16a34fec168ee24163c33aab1fa.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
  },
  {
    id: 42,
    title: "t-shirt yellow female",
    category: "t-shirts",
    color: "yellow",
    season: "summer",
    price: 10,
    stock: 5,
    size: "L",
    gender: "female",
    image:
      "https://cdn.shopify.com/s/files/1/0062/7431/8451/products/mister_fab_goldenyellow_women_plain_t-shirts_600x.jpg?v=1611603528",
  },
  {
    id: 43,
    title: "Shoes white male",
    category: "shoes",
    color: "white",
    brand: "nike",
    season: "summer",
    stock: 25,
    price: 80.0,
    size: "XL",
    gender: "male",
    image:
      "https://media.gq.com/photos/608831e3c752c34eff9350ed/master/w_2000,h_1333,c_limit/Common-Projects-BBall-leather-sneakers.jpg",
  },
  {
    id: 44,
    title: "Shoes yellow male",
    category: "shoes",
    color: "yellow",
    brand: "nike",
    season: "summer",
    stock: 25,
    price: 80.0,
    size: "XL",
    gender: "male",
    image: "https://m.media-amazon.com/images/I/419vKmkHxWL.jpg",
  },
  {
    id: 45,
    title: "Shoes green male",
    category: "shoes",
    color: "green",
    brand: "nike",
    season: "summer",
    stock: 25,
    price: 80.0,
    size: "XL",
    gender: "male",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d5f84f54-480d-4186-a0ea-3fea15f59d67/air-force-1-high-se-womens-shoes-X6v8pV.png",
  },
  {
    id: 46,
    title: "Shoes green female",
    category: "shoes",
    color: "green",
    brand: "nike",
    season: "summer",
    stock: 25,
    price: 80.0,
    size: "XL",
    gender: "female",
    image:
      "https://www.dmarge.com/wp-content/uploads/2021/05/Cariuma-Green-Shoes-1-920x736.jpg",
  },
  {
    id: 47,
    title: "Shoes blue female",
    category: "shoes",
    color: "blue",
    brand: "nike",
    season: "summer",
    stock: 25,
    price: 80.0,
    size: "XL",
    gender: "female",
    image: "https://m.media-amazon.com/images/I/71Kle127TCL._UL1500_.jpg",
  },
  {
    id: 48,
    title: "Shoes yellow female",
    category: "shoes",
    color: "yellow",
    brand: "nike",
    season: "summer",
    stock: 25,
    price: 80.0,
    size: "XL",
    gender: "female",
    image:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/6848faabbfc444db802fae6d017e626d_9366/NMD_R1_Shoes_Yellow_HP9733_01_standard.jpg",
  },
  {
    id: 49,
    title: "Jeans White female",
    category: "jeans",
    color: "white",
    season: "spring",
    price: 44,
    stock: 10,
    size: "L",
    gender: "female",
    image:
      "https://aritzia.scene7.com/is/image/Aritzia/large/f22_04_a06_77775_11420_off_a.jpg",
  },
  {
    id: 50,
    title: "Jeans red male",
    category: "jeans",
    color: "red",
    season: "spring",
    price: 44,
    stock: 10,
    size: "L",
    gender: "male",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_rDd6YNYNtJS6NYmc2ZlfipAKeeUEyEH3uEsD2lY09RGElFTNsqRZ2nQDA0QU1lIuI30&usqp=CAU",
  },
  {
    id: 51,
    title: "Jeans red female",
    category: "jeans",
    color: "red",
    season: "spring",
    price: 44,
    stock: 10,
    size: "L",
    gender: "female",
    image:
      "https://dynamic.zacdn.com/LYbaJeGL-6r0O8iLw2ZuBA_Tm20=/fit-in/346x500/filters:quality(95):fill(ffffff)/https://static-ph.zacdn.com/p/trendyol-5792-2016712-1.jpg",
  },
  {
    id: 52,
    title: "Jeans yellow female",
    category: "jeans",
    color: "yellow",
    season: "spring",
    price: 44,
    stock: 10,
    size: "L",
    gender: "female",
    image:
      "https://cdna.lystit.com/photos/2013/04/16/moschino-yellow-cotton-trousers-product-1-7860738-993942943.jpeg",
  },
  {
    id: 53,
    title: "Jeans yellow male",
    category: "jeans",
    color: "yellow",
    season: "spring",
    price: 44,
    stock: 10,
    size: "L",
    gender: "male",
    image:
      "https://upload.joomcdn.net/b2b029d2e930fecb8aaf4ecc9e055ac8d0ae1b9e_original.jpeg",
  },
  {
    id: 54,
    title: "Jeans green male",
    category: "jeans",
    color: "green",
    season: "spring",
    price: 44,
    stock: 10,
    size: "L",
    gender: "male",
    image:
      "https://ae01.alicdn.com/kf/Hc8bc89fd0df54d24a31bd077e94836a13/Mens-Colored-Jeans-Stretch-Skinny-Jeans-Men-Fashion-Casual-Slim-Fit-Denim-Trousers-Male-Green-Black.jpg",
  },
  {
    id: 55,
    title: "jacket white male",
    category: "jackets",
    color: "white",
    season: "winter",
    stock: 3,
    price: 50.5,
    size: "XL",
    gender: "male",
    image:
      "https://dimg.dillards.com/is/image/DillardsZoom/zoom/levis-the-trucker-denim-jacket/04822677_zi_steel_hour.jpg",
  },
  {
    id: 56,
    title: "jacket red female",
    category: "jackets",
    color: "red",
    season: "winter",
    stock: 10,
    price: 50.5,
    size: "M",
    gender: "female",
    image:
      "https://www.fanjackets.com/wp-content/uploads/2019/10/Women-Slim-Fit-Red-Moto-Jacket.jpg",
  },
  {
    id: 57,
    title: "jacket blue male",
    category: "jackets",
    color: "blue",
    season: "winter",
    stock: 10,
    price: 50.5,
    size: "M",
    gender: "male",
    image:
      "https://i5.walmartimages.com/asr/1522c98e-50e0-4fd6-afae-b13a6bd9bc89.53d3bdcf75ff7eed0b92db91639b9249.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF",
  },
  {
    id: 58,
    title: "jacket blue female",
    category: "jackets",
    color: "blue",
    season: "winter",
    stock: 10,
    price: 50.5,
    size: "M",
    gender: "female",
    image:
      "https://cdn.shopify.com/s/files/1/2501/3150/products/leather-skin-women-blue-brando-genuine-leather-jacket-front_2000x.jpg?v=1558814107",
  },
  {
    id: 59,
    title: "jacket yellow female",
    category: "jackets",
    color: "yellow",
    season: "winter",
    stock: 10,
    price: 50.5,
    size: "M",
    gender: "female",
    image:
      "https://mready.co/wp-content/uploads/2018/11/Womens-Yellow-Leather-Jackets-Motorcycle-Bomber-Biker.jpg",
  },
  {
    id: 60,
    title: "jacket green female",
    category: "jackets",
    color: "green",
    season: "winter",
    stock: 10,
    price: 50.5,
    size: "M",
    gender: "female",
    image:
      "https://cdn.shopify.com/s/files/1/2501/3150/products/women-green-quilted-genuine-leather-jacket-front_1024x1024.jpg?v=1558814135",
  },
  {
    id: 61,
    title: "jacket green male",
    category: "jackets",
    color: "green",
    season: "winter",
    stock: 10,
    price: 50.5,
    size: "M",
    gender: "male",
    image:
      "https://img.joomcdn.net/1abcdec7e5cfd368658a3c47506be5855b2887a3_original.jpeg",
  },
];
module.exports = products;
