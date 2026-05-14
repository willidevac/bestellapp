const deliveryFee = 4.99;

const menuCategories = [
  {
    id: "ramen",
    title: "Signature Ramen",
    kicker: "Acht Bowls",
    icon: "./assets/icons/ramen-icon.svg",
    items: [
      {
        id: "shibuya-shoyu",
        name: "Shibuya Shoyu",
        description: "Helle Soja-Brühe, Chashu, Ajitama und Bambus.",
        price: 13.9,
        image: "./assets/img/ramen/shibuya-shoyu-ramen.jpg",
        alt: "Shibuya Shoyu Ramen"
      },
      {
        id: "hokkaido-butter",
        name: "Hokkaido Butter",
        description: "Miso-Brühe, Mais, Butter, Lauch und Nori.",
        price: 14.5,
        image: "./assets/img/ramen/hokkaido-ramen.jpg",
        alt: "Hokkaido Butter Ramen"
      },
      {
        id: "ginza-shoyu",
        name: "Ginza Shoyu",
        description: "Klarer Fond, zartes Fleisch, Ei und Frühlauch.",
        price: 14.2,
        image: "./assets/img/ramen/ginza-shoyu-ramen.jpg",
        alt: "Ginza Shoyu Ramen"
      },
      {
        id: "veggie-soba-glow",
        name: "Veggie Soba Glow",
        description: "Soba, Gemüse, Pilze, Sesam und leichte Soja-Note.",
        price: 12.9,
        image: "./assets/img/ramen/vegetable-soba-bowl.jpg",
        alt: "Vegetable Soba Bowl"
      },
      {
        id: "kuro-tonkotsu",
        name: "Kuro Tonkotsu",
        description: "Cremige Brühe, Schwein, Lauch und Knoblauch-Öl.",
        price: 15.2,
        image: "./assets/img/ramen/tonkotsu-ramen.jpg",
        alt: "Tonkotsu Ramen"
      },
      {
        id: "akihabara-spice",
        name: "Akihabara Spice",
        description: "Chili-Brühe, Ajitama, Sprossen, Kräuter und Sesam.",
        price: 14.8,
        image: "./assets/img/ramen/spicy-egg-ramen.jpg",
        alt: "Spicy Egg Ramen"
      },
      {
        id: "neon-chicken",
        name: "Neon Chicken",
        description: "Hähnchen, Pak Choi, Pilze und dunkle Shoyu-Brühe.",
        price: 13.7,
        image: "./assets/img/ramen/chicken-ramen.jpg",
        alt: "Chicken Ramen"
      },
      {
        id: "night-market-bowl",
        name: "Night Market Bowl",
        description: "Ei, Nori, Sprossen, Chili-Fäden und Umami-Fond.",
        price: 15.6,
        image: "./assets/img/ramen/served-ramen-bowl.jpg",
        alt: "Served Ramen Bowl"
      }
    ]
  },
  {
    id: "sides",
    title: "Sides",
    kicker: "Acht kleine Teller",
    icon: "./assets/icons/sides-icon.svg",
    items: [
      {
        id: "gyoza-circuit",
        name: "Gyoza Circuit",
        description: "Gebratene Teigtaschen mit Ingwer-Soja-Dip.",
        price: 6.9,
        image: "./assets/img/sides/gyoza.jpg",
        alt: "Gyoza"
      },
      {
        id: "neon-karaage",
        name: "Neon Karaage",
        description: "Knuspriges Chicken, Chili-Dip und Yuzu-Mayo.",
        price: 7.4,
        image: "./assets/img/sides/karaage.jpg",
        alt: "Karaage"
      },
      {
        id: "maki-signal",
        name: "Maki Signal",
        description: "Kleine Sushi-Rolls mit Lachs, Gurke und Teriyaki.",
        price: 8.6,
        image: "./assets/img/sides/sushi-rolls.jpg",
        alt: "Sushi Rolls"
      },
      {
        id: "tempura-bloom",
        name: "Tempura Bloom",
        description: "Garnelen und Gemüse im leichten Tempura-Mantel.",
        price: 9.8,
        image: "./assets/img/sides/tempura-platter.jpg",
        alt: "Tempura Platter"
      },
      {
        id: "yakitori-lane",
        name: "Yakitori Lane",
        description: "Gegrillte Spieße mit süßer Soja-Glasur.",
        price: 6.7,
        image: "./assets/img/sides/yakitori.jpg",
        alt: "Yakitori"
      },
      {
        id: "veggie-tempura",
        name: "Veggie Tempura",
        description: "Knuspriges Gemüse, Zitrone und Tentsuyu-Dip.",
        price: 7.9,
        image: "./assets/img/sides/vegetable-tempura.jpg",
        alt: "Vegetable Tempura"
      },
      {
        id: "crispy-tokyo-mix",
        name: "Crispy Tokyo Mix",
        description: "Fisch, Gemüse, Daikon und Soja-Zitrus-Sauce.",
        price: 8.9,
        image: "./assets/img/sides/crispy-tempura.jpg",
        alt: "Crispy Tempura"
      },
      {
        id: "sushi-orb-set",
        name: "Sushi Orb Set",
        description: "Runde Sushi-Bites mit Lachs, Ei und Sesam.",
        price: 8.2,
        image: "./assets/img/sides/sushi-balls.jpg",
        alt: "Sushi Balls"
      }
    ]
  },
  {
    id: "drinks",
    title: "Drinks",
    kicker: "Acht Drinks",
    icon: "./assets/icons/drinks-icon.svg",
    items: [
      {
        id: "matcha-cloud",
        name: "Matcha Cloud",
        description: "Gekühlter Matcha Latte mit Haferdrink.",
        price: 4.5,
        image: "./assets/img/drinks/matcha-latte.jpg",
        alt: "Matcha Latte"
      },
      {
        id: "yuzu-ice-tea",
        name: "Yuzu Ice Tea",
        description: "Zitrus, Minze, Eis und leichter Schwarztee.",
        price: 4.2,
        image: "./assets/img/drinks/iced-tea.jpg",
        alt: "Iced Tea"
      },
      {
        id: "iced-matcha-grid",
        name: "Iced Matcha Grid",
        description: "Matcha, Milch, Eiswürfel und ein weicher Finish.",
        price: 4.8,
        image: "./assets/img/drinks/iced-matcha-latte.jpg",
        alt: "Iced Matcha Latte"
      },
      {
        id: "matcha-pour",
        name: "Matcha Pour",
        description: "Frisch gemixt mit Milch und cremigem Schaum.",
        price: 4.9,
        image: "./assets/img/drinks/matcha-pour.jpg",
        alt: "Matcha Pour"
      },
      {
        id: "cafe-matcha",
        name: "Cafe Matcha",
        description: "Warmer Matcha mit Latte Art und sanfter Süßung.",
        price: 4.7,
        image: "./assets/img/drinks/cafe-matcha.jpg",
        alt: "Cafe Matcha"
      },
      {
        id: "ceremonial-matcha",
        name: "Ceremonial Matcha",
        description: "Pur, intensiv, warm aufgeschlagen im Chawan.",
        price: 4.4,
        image: "./assets/img/drinks/ceremonial-matcha.jpg",
        alt: "Ceremonial Matcha"
      },
      {
        id: "fruit-iced-tea",
        name: "Fruit Iced Tea",
        description: "Fruchtiger Tee, Eis, Zitrus und leichte Süßung.",
        price: 4.1,
        image: "./assets/img/drinks/fruit-iced-tea.jpg",
        alt: "Fruit Iced Tea"
      },
      {
        id: "hot-matcha-latte",
        name: "Hot Matcha Latte",
        description: "Heißer Matcha Latte mit cremiger Milch.",
        price: 4.6,
        image: "./assets/img/drinks/hot-matcha-latte.jpg",
        alt: "Hot Matcha Latte"
      }
    ]
  },
  {
    id: "desserts",
    title: "Desserts",
    kicker: "Fünf Desserts",
    icon: "./assets/icons/desserts-icon.svg",
    items: [
      {
        id: "daifuku-mochi",
        name: "Daifuku Mochi",
        description: "Weiche Reiskuchen mit süßer Füllung.",
        price: 4.9,
        image: "./assets/img/desserts/daifuku-mochi.jpg",
        alt: "Daifuku Mochi"
      },
      {
        id: "castella-slice",
        name: "Castella Slice",
        description: "Locker-süßer japanischer Sponge Cake.",
        price: 4.3,
        image: "./assets/img/desserts/japanese-sponge-cake.jpg",
        alt: "Japanese Sponge Cake"
      },
      {
        id: "taiyaki-byte",
        name: "Taiyaki Byte",
        description: "Fischförmige Waffel mit süßer Creme.",
        price: 4.7,
        image: "./assets/img/desserts/taiyaki.jpg",
        alt: "Taiyaki"
      },
      {
        id: "mitarashi-dango",
        name: "Mitarashi Dango",
        description: "Reisbällchen am Spieß mit Soja-Karamell.",
        price: 4.1,
        image: "./assets/img/desserts/mitarashi-dango.jpg",
        alt: "Mitarashi Dango"
      },
      {
        id: "dango-skewers",
        name: "Dango Skewers",
        description: "Kleine Dessert-Spieße, weich, süß und chewy.",
        price: 4.2,
        image: "./assets/img/desserts/dango-skewers.jpg",
        alt: "Dango Skewers"
      }
    ]
  }
];
