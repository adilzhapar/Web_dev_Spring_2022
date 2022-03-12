
export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string[];
    link: string;
    pos: number;
  }
  
export const products = [
    {
      id: 1,
      pos: 0,
      name: 'Pixel 6 Pro',
      price: 1000,
      description: 'The smartest and fastest Pixel yet.',
      image: ["https://m.media-amazon.com/images/I/71SGl7xwR-L._AC_SX679_.jpg", "https://m.media-amazon.com/images/I/91zkyBTsY4L._AC_SX679_.jpg", "https://m.media-amazon.com/images/I/81trGY7defL._AC_SX679_.jpg"],
      link: "https://www.amazon.com/Google-Pixel-Pro-Smartphone-Telephoto/dp/B09HZH2VJH/ref=sr_1_1?crid=1JQFXCOI595CP&keywords=phones&qid=1647069113&sprefix=hones%2Caps%2C298&sr=8-1&th=1"
    },
    {
      id: 2,
      pos: 0,
      name: 'Samsung Z Flip 3',
      price: 1200,
      description: 'Unfold the world',
      image: ["https://m.media-amazon.com/images/I/61bfdXk7nfL._AC_SX466_.jpg", "https://m.media-amazon.com/images/I/61O7m2QdN1L._AC_SX466_.jpg", "https://m.media-amazon.com/images/I/71yp+wlcsuL._AC_SX466_.jpg"],
      link: "https://www.amazon.com/Electronics-Unlocked-Smartphone-Intuitive-Warranty/dp/B097CMW66M/ref=sr_1_4?crid=1JQFXCOI595CP&keywords=phones&qid=1647069113&sprefix=hones%2Caps%2C298&sr=8-4&th=1"    
    },
    {
      id: 3,
      pos: 0,
      name: 'OnePlus 9',
      price: 650,
      description: 'Flagman killer',
      image: ["https://m.media-amazon.com/images/I/31sFQfDnvUL._AC_.jpg", "https://m.media-amazon.com/images/I/41Xv340qT5S._AC_SX466_.jpg", "https://m.media-amazon.com/images/I/41dk54odzKS._AC_SX466_.jpg"],
      link: "https://www.amazon.com/OnePlus-Unlocked-Smartphone-Hasselblad-Wireless/dp/B08Y727NMK/ref=sr_1_12?crid=1JQFXCOI595CP&keywords=phones&qid=1647069113&sprefix=hones%2Caps%2C298&sr=8-12&th=1"
    },
    {
        id: 4,
        pos: 0,
        name: "Acer Nitro 5",
        price: 812,
        description: 'Gaming laptop with incredible design',
        image: ['https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_SX466_.jpg', "https://m.media-amazon.com/images/I/71nim+DaEBS._AC_SX466_.jpg", "https://m.media-amazon.com/images/I/71BBWwUOlVS._AC_SX466_.jpg"],
        link: "https://www.amazon.com/Acer-AN515-55-53E5-i5-10300H-GeForce-Keyboard/dp/B092YHJGMN/ref=sr_1_2?keywords=laptop&pd_rd_r=dbf550f6-2dd1-4251-a799-d900d7761cd0&pd_rd_w=wtgd2&pd_rd_wg=1frkF&pf_rd_p=68dc6c47-f9bb-411d-9a18-cd4b34fcf183&pf_rd_r=YVZ4RGFJGA5DMFW0SX7A&qid=1647072888&refinements=p_n_feature_twelve_browse-bin%3A9521908011%2Cp_n_feature_two_browse-bin%3A562237011%7C610552011%7C610553011%2Cp_n_feature_four_browse-bin%3A18107800011%7C18107801011%7C2289793011%7C2289794011%2Cp_n_feature_thirty-three_browse-bin%3A23720419011%7C23720420011&s=pc&sr=1-2&th=1"
    },
    {
        id: 5,
        pos: 0,
        name: 'HP 15',
        price: 700,
        description: 'Productive laptop for work',
        image: ['https://m.media-amazon.com/images/I/71RD3vsjIYL._AC_SX679_.jpg', "https://m.media-amazon.com/images/I/71JL+uEoftL._AC_SX679_.jpg", "https://m.media-amazon.com/images/I/71EHAHrIh9L._AC_SX679_.jpg"],
        link: "https://www.amazon.com/HP-Generation-i5-1135G7-Graphics-15-dy2024nr/dp/B09FXFDGN3/ref=sr_1_1?keywords=laptop&pd_rd_r=dbf550f6-2dd1-4251-a799-d900d7761cd0&pd_rd_w=wtgd2&pd_rd_wg=1frkF&pf_rd_p=68dc6c47-f9bb-411d-9a18-cd4b34fcf183&pf_rd_r=YVZ4RGFJGA5DMFW0SX7A&qid=1647072888&refinements=p_n_feature_twelve_browse-bin%3A9521908011%2Cp_n_feature_two_browse-bin%3A562237011%7C610552011%7C610553011%2Cp_n_feature_four_browse-bin%3A18107800011%7C18107801011%7C2289793011%7C2289794011%2Cp_n_feature_thirty-three_browse-bin%3A23720419011%7C23720420011&s=pc&sr=1-1&th=1"
    },
    {
        id: 6,
        pos: 0,
        name: 'Asus Vivobook Flip',
        price: 400,
        description: '2-in-1 light laptop',
        image: ['https://m.media-amazon.com/images/I/71eyqrWrDpS._AC_SX466_.jpg', "https://m.media-amazon.com/images/I/71hSly53iyS._AC_SX466_.jpg", "https://m.media-amazon.com/images/I/610CYFaX7AS._AC_SX466_.jpg"],
        link: "https://www.amazon.com/ASUS-Intel-Core-Thunderbolt-Fingerprint-TP470EA-AS34T/dp/B08XPBTWJS/ref=sr_1_3?keywords=laptop&pd_rd_r=dbf550f6-2dd1-4251-a799-d900d7761cd0&pd_rd_w=wtgd2&pd_rd_wg=1frkF&pf_rd_p=68dc6c47-f9bb-411d-9a18-cd4b34fcf183&pf_rd_r=YVZ4RGFJGA5DMFW0SX7A&qid=1647072888&refinements=p_n_feature_twelve_browse-bin%3A9521908011%2Cp_n_feature_two_browse-bin%3A562237011%7C610552011%7C610553011%2Cp_n_feature_four_browse-bin%3A18107800011%7C18107801011%7C2289793011%7C2289794011%2Cp_n_feature_thirty-three_browse-bin%3A23720419011%7C23720420011&s=pc&sr=1-3"
    },
    {
        id: 7,
        pos: 0,
        name: 'Champion hoodie',
        price: 50,
        description: 'red comfortable hoodie',
        image: ['https://m.media-amazon.com/images/I/71szqCoFfYL._AC_UX522_.jpg', "https://m.media-amazon.com/images/I/81fd9n-y6PL._AC_UY550_.jpg", "https://m.media-amazon.com/images/I/81tYZEKfIoL._AC_UY550_.jpg"],
        link: "https://www.amazon.com/Champion-Graphic-Powerblend-Fleece-Scarlet/dp/B078GFYJKL/ref=sr_1_3?keywords=clothes+for+men&qid=1647073211&sr=8-3"
    },
    {
        id: 8,
        pos: 0,
        name: "Lacoste Men's long sleeve",
        price: 120,
        description: "Crafted in soft, comfortable two-ply fabric, it has side pockets and tone-on-tone ribbed finishes.",
        image: ['https://m.media-amazon.com/images/I/61sLvsCq-oL._AC_UY550_.jpg', "https://m.media-amazon.com/images/I/61tfW7AFcKL._AC_UY550_.jpg", "https://m.media-amazon.com/images/I/61tfW7AFcKL._AC_UY550_.jpg"],
        link: "https://www.amazon.com/Lacoste-Sleeve-Zipper-Taping-Sweatshirt/dp/B08QDPKS64/ref=sr_1_31?keywords=clothes%2Bfor%2Bmen&qid=1647073211&sr=8-31&th=1"
    },
    {
        id: 9,
        pos: 0,
        name: "TACVASEN Men's Bomber",
        price: 36,
        description: 'Spring Fall Full Zip Active Coat Outwear',
        image: ['https://m.media-amazon.com/images/I/71lxycq0EVL._AC_UX522_.jpg', "https://m.media-amazon.com/images/I/71X6TU5G4hL._AC_UX522_.jpg", "https://m.media-amazon.com/images/I/71oYCQoM2sL._AC_UY550_.jpg"],
        link: "https://www.amazon.com/TACVASEN-Jackets-Baseball-Outwear-Windbreaker/dp/B089B2CWCJ/ref=sr_1_30_sspa?keywords=clothes+for+men&qid=1647073211&sr=8-30-spons&psc=1&smid=A316SIRIW8TU6I&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzNlI4T1JCWVYzVkdCJmVuY3J5cHRlZElkPUEwNTU3MTM2TEhJRUNEV1lTTzNUJmVuY3J5cHRlZEFkSWQ9QTA5NjE0MDExT1hOREJPM0tIREFQJndpZGdldE5hbWU9c3BfbXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
    },
    {
        id: 10,
        pos: 0,
        name: "Under Armour Men's HeatGear",
        price: 30, 
        description: 'Super-light HeatGear fabric delivers superior coverage without weighing you down',
        image: ['https://m.media-amazon.com/images/I/41jKgIIlCsL._AC_UX569_.jpg', "https://m.media-amazon.com/images/I/61WbXYJF6eL._AC_SX569._SX._UX._SY._UY_.jpg", "https://m.media-amazon.com/images/I/51M59nlybTL._AC_SX569._SX._UX._SY._UY_.jpg"],
        link: "https://www.amazon.com/Under-Armour-HeatGear-Compression-Long-Sleeve/dp/B0874V8THD/ref=sr_1_51?keywords=clothes+for+men&qid=1647073211&sr=8-51"
    }

  ];
