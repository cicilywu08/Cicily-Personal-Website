export interface Place {
  name: string;
  category: string;
  note: string;
  mapsUrl: string;
}

export interface CityPick {
  slug: string;
  city: string;
  country: string;
  tagline: string;
  openingLine: string;
  gradient: string;
  eats: Place[];
  see: Place[];
  guideScript: string[];
  audioSrc?: string;
}

export const cityPicks: CityPick[] = [
  {
    slug: "buenos-aires",
    city: "Buenos Aires",
    country: "Argentina",
    tagline: "steak, bookstores, old-world softness",
    openingLine: "I'd go back for the steak. I'd stay for everything else.",
    gradient: "linear-gradient(135deg, #FECDD3 0%, #FDBA74 100%)",
    audioSrc: "/audio/buenos-aires.m4a",
    guideScript: [
      "Okay so, Buenos Aires. Where do I even start.",
      "First thing you need to know: this city does not wake up until midnight. Literally. We rolled out for dinner at 10pm and the restaurant was still filling up.",
      "But that steak at Don Julio? I am still thinking about it. Order the bife de chorizo. Don't overthink it.",
      "El Ateneo is one of those places that sounds touristy but genuinely stops you in your tracks. It's a theatre. That became a bookstore. You get coffee on the old stage. Just go.",
      "Last morning I sat at Café Tortoni with a café con leche and almost didn't leave. There's something about Buenos Aires that feels like it already knows you.",
    ],
    eats: [
      {
        name: "Don Julio Parrilla",
        category: "Steakhouse",
        note: "Order the bife de chorizo. Come early or expect a wait. Worth every minute either way.",
        mapsUrl: "https://www.google.com/maps/place/Don+Julio+Parrilla/data=!4m2!3m1!1s0x95bcb586ea7789a1:0x5f51f7dc0f6a6859",
      },
      {
        name: "El Ateneo Grand Splendid",
        category: "Bookstore café",
        note: "A converted theatre that became a bookstore. Get coffee on the old stage. One of the most beautiful rooms I've sat in.",
        mapsUrl: "https://www.google.com/maps/place/El+Ateneo+Grand+Splendid/data=!4m2!3m1!1s0x95bccabdfc191295:0x8110084c679e64c0",
      },
      {
        name: "Café Tortoni",
        category: "Historic café",
        note: "Buenos Aires's oldest café. Touristy? Yes. Worth it? Also yes. The medialunas are non-negotiable.",
        mapsUrl: "https://www.google.com/maps/place/Caf%C3%A9+Tortoni/data=!4m2!3m1!1s0x95bccad19d1e5cd3:0x520b8220bc17c42d",
      },
    ],
    see: [
      {
        name: "Caminito",
        category: "Street / Open-air museum",
        note: "Colorful, chaotic, completely alive. Go in the morning before the crowds arrive.",
        mapsUrl: "https://www.google.com/maps/place/Caminito/data=!4m2!3m1!1s0x95a334b0f8639693:0x9ee9f7e4b5eeaf14",
      },
    ],
  },
  {
    slug: "montevideo",
    city: "Montevideo",
    country: "Uruguay",
    tagline: "quiet, coastal, and quietly perfect",
    openingLine: "The kind of city that doesn't try to impress you. And somehow does.",
    gradient: "linear-gradient(135deg, #D1FAE5 0%, #6EE7B7 100%)",
    guideScript: [
      "Everyone skips Montevideo for Buenos Aires. That is exactly why I love it.",
      "It's quieter. Slower. And somehow more itself. The kind of city that doesn't perform for you.",
      "I had the best morning of the whole trip at Wild Bakery: just bread, coffee, a window seat. No plans. That was enough.",
      "IKIGAI was a surprise. Japanese-Peruvian in Uruguay? Somehow it works perfectly. The ceviche was one of the best things I ate on the whole trip.",
      "And the Mercado Agrícola: walk through the whole thing before you sit down anywhere. You'll know what you want by the time you've seen it all.",
    ],
    eats: [
      {
        name: "IKIGAI Nikkei",
        category: "Japanese-Peruvian",
        note: "Unexpected and wonderful. The ceviches are delicate and bright, not what you'd expect in Uruguay.",
        mapsUrl: "https://www.google.com/maps/place/IKIGAI+Nikkei/data=!4m2!3m1!1s0x959f814b0886b1fd:0x88a9b28893341e7e",
      },
      {
        name: "Wild Bakery",
        category: "Bakery",
        note: "Perfect morning stop. Natural sourdough, good coffee, easy atmosphere. The kind of place you'd go every day if you lived here.",
        mapsUrl: "https://www.google.com/maps/place/Wild+Bakery/data=!4m2!3m1!1s0x959f8100407f9c73:0x85d6800626e076c7",
      },
      {
        name: "Mercado Agrícola de Montevideo",
        category: "Food market",
        note: "The city's best food market. Walk through everything first, then sit down and order something.",
        mapsUrl: "https://www.google.com/maps/place/Mercado+Agr%C3%ADcola+de+Montevideo/data=!4m2!3m1!1s0x959f803f02e51d29:0xb4008a87a06f914d",
      },
    ],
    see: [
      {
        name: "Solís Theater",
        category: "Theatre / Architecture",
        note: "If there's a show on, go. If not, peek inside anyway; the interior alone is worth the detour.",
        mapsUrl: "https://www.google.com/maps/place/Solis+Theater/data=!4m2!3m1!1s0x959f802adf27edcb:0xe9cdb804f35a1e8a",
      },
    ],
  },
  {
    slug: "cartagena",
    city: "Cartagena",
    country: "Colombia",
    tagline: "color, heat, something ancient in the air",
    openingLine: "Walk slowly. The city rewards it.",
    gradient: "linear-gradient(135deg, #FEF3C7 0%, #FCD34D 100%)",
    guideScript: [
      "The heat hits you immediately. Like a warm wall you walk straight into.",
      "And then you just... surrender to it. That's the only way to do Cartagena.",
      "Walk the old city at golden hour. Stop at Ábaco for a coffee: books everywhere, ceiling fans turning slowly, completely unhurried. That's the afternoon right there.",
      "Candé for lunch. 100% local, unpretentious, exactly what the city actually tastes like. Don't go to the tourist spots first.",
      "Then at night, Café Havana. Cold drink, warm air, music from somewhere. It's a classic for good reason.",
    ],
    eats: [
      {
        name: "Restaurante Candé",
        category: "Colombian",
        note: "100% Cartagena cooking. Unpretentious, deeply local, exactly right. Go for lunch.",
        mapsUrl: "https://www.google.com/maps/place/RESTAURANTE+CAND%C3%89+Cocina+100%25+Cartagenera/data=!4m2!3m1!1s0x8ef62f9f844461b9:0x152e11dee6c628a3",
      },
      {
        name: "Ábaco Libros y Café",
        category: "Bookstore café",
        note: "Books in Spanish, coffee in hand, ceiling fans overhead. A perfect humid afternoon.",
        mapsUrl: "https://www.google.com/maps/place/%C3%81baco+Libros+y+Caf%C3%A9/data=!4m2!3m1!1s0x8ef62fa02b492395:0xd76bd89aaadff9a7",
      },
      {
        name: "Café Havana",
        category: "Bar / Café",
        note: "Cold drink, warm night, live music somewhere in the background. A classic for good reason.",
        mapsUrl: "https://www.google.com/maps/place/Caf%C3%A9+Havana/data=!4m2!3m1!1s0x8ef62f9e072fecb7:0xde5835b244624de4",
      },
    ],
    see: [
      {
        name: "Farmacia San Miguel",
        category: "Historic pharmacy",
        note: "An old apothecary turned small museum. Tiny, strange, completely worth five minutes of your time.",
        mapsUrl: "https://www.google.com/maps/place/Farmacia+San+Miguel/data=!4m2!3m1!1s0x8ef62f9e7943167f:0xc900285e8e8863c7",
      },
    ],
  },
  {
    slug: "medellin",
    city: "Medellín",
    country: "Colombia",
    tagline: "spring weather, strong coffee, real energy",
    openingLine: "Every season is spring here. The coffee is serious. The city is alive.",
    gradient: "linear-gradient(135deg, #EDE9FE 0%, #C4B5FD 100%)",
    guideScript: [
      "I did not expect to love Medellín this much. Nobody warned me.",
      "The weather is genuinely perfect every single day. Like, suspiciously perfect. 72°F and sunny. Always.",
      "The coffee at Pergamino is world-class. I'm not exaggerating. Order the filter, find a seat, stay two hours.",
      "Mondongo's: the mondongo is the point. Order it even if you're not sure. Especially if you're not sure.",
      "And then go to Comuna 13. With a guide. Let them tell the story. It is not a tourist attraction. It's a neighborhood that rebuilt itself from scratch, and the murals are proof of that.",
    ],
    eats: [
      {
        name: "Pergamino Café",
        category: "Specialty coffee",
        note: "The best coffee I had in Colombia, full stop. Order the filter. Stay as long as you can.",
        mapsUrl: "https://www.google.com/maps/place/PERGAMINO+Coffee+Via+Primavera/data=!4m2!3m1!1s0x8e442829e6990303:0x2d65e751f0aab5a",
      },
      {
        name: "Restaurante Mondongo's",
        category: "Colombian",
        note: "The mondongo is the point. Order it even if you're not sure. Especially if you're not sure.",
        mapsUrl: "https://www.google.com/maps/place/Restaurante+Mondongo's+El+Poblado/data=!4m2!3m1!1s0x8e442829780c3125:0x1c9f4d38c6febc52",
      },
      {
        name: "Bihao",
        category: "Colombian modern",
        note: "Local ingredients, careful cooking. The kind of restaurant that makes you trust a city's food scene.",
        mapsUrl: "https://www.google.com/maps/place/Bihao/data=!4m2!3m1!1s0x8e4429cf7ea469a3:0xa292b92afdcaa6db",
      },
    ],
    see: [
      {
        name: "Zippy Tour, Comuna 13",
        category: "Neighborhood tour",
        note: "Go with a local guide. The murals are remarkable. The story behind them even more so.",
        mapsUrl: "https://www.google.com/maps/place/Zippy+Tour+Comuna+13/data=!4m2!3m1!1s0x8e4429f2af5ea27d:0x3d07f852de3159c0",
      },
    ],
  },
  {
    slug: "punta-del-este",
    city: "Punta del Este",
    country: "Uruguay",
    tagline: "sun, seafood, and a slower pace",
    openingLine: "Come off-season. The city shows you its real self.",
    gradient: "linear-gradient(135deg, #DBEAFE 0%, #93C5FD 100%)",
    guideScript: [
      "Go off-season. I cannot stress this enough.",
      "In summer it's packed with the wrong kind of energy. Off-season, the city exhales. You can actually hear it.",
      "Muelle 3: right on the port, order whatever came in that morning. Don't look at the menu too hard, just ask.",
      "And then after dinner: walk the port, get ice cream at Arlecchino. That's the whole evening right there.",
      "Casapueblo at sunset is one of those things that feels almost too perfect to be real. White sculptural house on a cliff above the sea. Go. No exceptions.",
    ],
    eats: [
      {
        name: "Muelle 3",
        category: "Seafood",
        note: "Right on the port. Order whatever came in that morning and trust the kitchen.",
        mapsUrl: "https://www.google.com/maps/place/Muelle+3/data=!4m2!3m1!1s0x957505f090877059:0x15a00ff76290691e",
      },
      {
        name: "481 Gourmet",
        category: "Restaurant",
        note: "Quietly excellent. The kind of place locals go when they actually want a good meal.",
        mapsUrl: "https://www.google.com/maps/place/481+Gourmet/data=!4m2!3m1!1s0x9575052bfff7627d:0xb294d2b768260caa",
      },
      {
        name: "Heladería Arlecchino",
        category: "Ice cream",
        note: "Walk the port after dinner, then come here. That's the move.",
        mapsUrl: "https://www.google.com/maps/place/Heladeria+Arlecchino/data=!4m2!3m1!1s0x957505719f8c0e25:0xd59f2229e025e113",
      },
    ],
    see: [
      {
        name: "Casapueblo",
        category: "Art museum / Architecture",
        note: "Carlos Páez Vilaró's white sculptural house above the sea. Go at sunset. No exceptions.",
        mapsUrl: "https://www.google.com/maps/place/Casapueblo/data=!4m2!3m1!1s0x95751160c1259953:0x93732c13d796480d",
      },
    ],
  },
];
