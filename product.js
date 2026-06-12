const products = [
  {
    id: 1,
    group: "ENHYPEN",
    title: "Dark Blood Album",
    price: 1200,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTly4gFzmlJ9_lKeKQ5QUYkETRPPYP8-2P8Vw&s"
  },
  {
    id: 2,
    group: "ENHYPEN",
    title: "Romance: Untold Album",
    price: 1400,
    image: "https://preview.redd.it/i-just-realised-that-the-romance-untold-album-love-heart-v0-q0axk2ebxvuf1.jpg?width=640&crop=smart&auto=webp&s=1239e5127152e0f39788ab662e90ad40ee71062a"
  },
  {
    id: 3,
    group: "ENHYPEN",
    title: "Manifesto Album",
    price: 1300,
    image: "https://upload.wikimedia.org/wikipedia/en/1/1e/Enhypen_-_Manifesto_Day_1.jpg"
  },
  {
    id: 4,
    group: "ENHYPEN",
    title: "Official Lightstick",
    price: 2500,
    image: "https://static.wixstatic.com/media/ea1183_c491547b1b344042ba3eee1d60f8037f~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
  },

  {
    id: 5,
    group: "BTS",
    title: "Proof Album",
    price: 1800,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/BTS_Proof_album_cover_art.jpg/250px-BTS_Proof_album_cover_art.jpg"
  },
  {
    id: 6,
    group: "BTS",
    title: "Butter Album",
    price: 1700,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/BTS_-_Butter.png/250px-BTS_-_Butter.png"
  },
  {
    id: 7,
    group: "BTS",
    title: "Map of the Soul 7",
    price: 1900,
    image: "https://upload.wikimedia.org/wikipedia/en/2/21/BTS_-_Map_of_the_Soul_7.png"
  },
  {
    id: 8,
    group: "BTS",
    title: "Army Bomb",
    price: 3200,
    image: "https://static.wixstatic.com/media/027cd6_0c96737df8f446f39de34cd66e78b916~mv2.jpg/v1/fill/w_480,h_478,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/027cd6_0c96737df8f446f39de34cd66e78b916~mv2.jpg"
  },

  {
    id: 9,
    group: "BLACKPINK",
    title: "Born Pink Album",
    price: 1600,
    image: "https://c.saavncdn.com/847/BORN-PINK-Korean-2022-20230330165951-500x500.jpg"
  },
  {
    id: 10,
    group: "BLACKPINK",
    title: "The Album",
    price: 1700,
    image: "https://upload.wikimedia.org/wikipedia/en/f/f2/BLACKPINK-_The_Album.png"
  },
  {
    id: 11,
    group: "BLACKPINK",
    title: "Blackpink Lightstick",
    price: 2900,
    image: "https://www.fashionchingu.com/wp-content/uploads/2025/02/Hammer-Bong-Version-2-Blackpink-Official-Lightstick_0-1.jpg"
  },
    {
    id: 12,
    group: "BLACKPINK",
    title: "Blackpink Hoodie",
    price: 2200,
    image: "https://m.media-amazon.com/images/I/61SBDbcgZTL._AC_UY1000_.jpg"
  },
  {
    id: 13,
    group: "TWICE",
    title: "Ready To Be Album",
    price: 1400,
    image: "https://i.pinimg.com/736x/77/2d/f2/772df215245b4258162b6a90ac85ca43.jpg"
  },
  {
    id: 14,
    group: "TWICE",
    title: "With You-th Album",
    price: 1500,
    image: "https://upload.wikimedia.org/wikipedia/en/9/9b/Twice_-_With_You-th_cover_art.png"
  },
  {
    id: 15,
    group: "TWICE",
    title: "Candy Bong",
    price: 2800,
    image: "https://static.wixstatic.com/media/ea1183_d67403c8f1884ee389e558116018cfb1~mv2.jpg/v1/fill/w_520,h_702,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ea1183_d67403c8f1884ee389e558116018cfb1~mv2.jpg"
  },

  {
    id: 16,
    group: "Stray Kids",
    title: "Rock-Star Album",
    price: 1500,
    image: "https://i.scdn.co/image/ab67616d0000b2732bca95a658fdf653a35a3710"
  },
  {
    id: 17,
    group: "Stray Kids",
    title: "5-Star Album",
    price: 1600,
    image: "https://upload.wikimedia.org/wikipedia/en/5/52/Stray_Kids_-_5-Star.png"
  },
  {
    id: 18,
    group: "Stray Kids",
    title: "Nachimbong",
    price: 3000,
    image: "https://www.fashionchingu.com/wp-content/uploads/2024/09/stray-kids-lightstick-e1727168709382.jpg"
  },

  {
    id: 19,
    group: "SEVENTEEN",
    title: "FML Album",
    price: 1700,
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Seventeen_-_FML.png"
  },
  {
    id: 20,
    group: "SEVENTEEN",
    title: "Seventeenth Heaven",
    price: 1800,
    image: "https://upload.wikimedia.org/wikipedia/en/a/ab/Seventeen_-_Seventeenth_Heaven.png"
  },
  {
    id: 21,
    group: "SEVENTEEN",
    title: "Carat Bong",
    price: 3100,
    image: "https://static.wixstatic.com/media/027cd6_3dd3721bee614a1c8c6929b668dc7da0~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
  },

  {
    id: 22,
    group: "TXT",
    title: "Freefall Album",
    price: 1500,
    image: "https://upload.wikimedia.org/wikipedia/en/1/15/The_Name_Chapter_-_Freefall.png"
  },
  {
    id: 23,
    group: "TXT",
    title: "Temptation Album",
    price: 1550,
    image: "https://i.redd.it/mf43oqka92da1.jpg"
  },
  {
    id: 24,
    group: "TXT",
    title: "Moabong",
    price: 2900,
    image: "https://www.fashionchingu.com/wp-content/uploads/2024/09/MOA-Bong-Version-2-TXT-Official-Lightstick-16.jpg"
  },

  {
    id: 25,
    group: "ATEEZ",
    title: "The World EP",
    price: 1600,
    image: "https://i.scdn.co/image/ab67616d0000b273538fca7e2982ea6ec595beb8"
  },
  {
    id: 26,
    group: "ATEEZ",
    title: "Golden Hour",
    price: 1700,
    image: "https://i.scdn.co/image/ab67616d0000b27352f007f27326f8b2728593a0"
  },
  {
    id: 27,
    group: "ATEEZ",
    title: "Lightiny",
    price: 2950,
    image: "https://www.fashionchingu.com/wp-content/uploads/2025/04/LIGHTINY-ATEEZ-Official-Lightstick-Ver-1.jpeg"
  },

  {
    id: 28,
    group: "Merch",
    title: "ENHYPEN Photocard Set",
    price: 500,
    image: "https://choicemusicla.com/cdn/shop/files/ENHYPENROMANCEUNTOLDOfficialMerchandise-Photocard_TinCaseSet.webp?v=1721753296"
  },
  {
    id: 29,
    group: "Merch",
    title: "Sticker Pack",
    price: 200,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZGytOfOTJORvmQFKA5hbgvhzykkE9mcxnA&s"
  },
  {
    id: 30,
    group: "Merch",
    title: "BLACKPINK Merch Bag",
    price: 700,
    image: "https://i.ebayimg.com/images/g/Mj4AAeSwySZpaDMS/s-l1200.jpg"
  }
];

export default products;