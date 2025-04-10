const blogData = [
    {
      "id": 1,
      "name": "Paris",
      "country": "France",
      "continent": "Europe",
      "description": "Paris, the capital of France, is known for its romantic ambiance, iconic landmarks such as the Eiffel Tower, and world-class museums like the Louvre. Stroll along the Seine River, enjoy French cuisine at charming cafes, and explore historic neighborhoods like Montmartre.",
      "image": "https://cdn.pixabay.com/photo/2019/02/21/19/00/paris-4011990_1280.jpg",
      "population": "2.1 million",
      "currency": "Euro (EUR)",
      "language": "French",
      "best_time_to_visit": "Spring and Fall",
      "top_attractions": [
        "Eiffel Tower",
        "Louvre Museum",
        "Champs-Elysées",
        "Notre-Dame Cathedral"
      ],
      "local_dishes": [
        "Croissant",
        "Coq au Vin",
        "Macarons"
      ],
      "activities": [
        "Visit art galleries",
        "Cruise along the Seine",
        "Explore local markets"
      ]
    },
    {
      "id": 2,
      "name": "Tokyo",
      "country": "Japan",
      "continent": "Asia",
      "description": "Tokyo is a bustling metropolis known for its modern technology, historic temples, vibrant neighborhoods, and unique blend of tradition and innovation. Experience the neon lights of Shibuya, explore ancient shrines like Meiji Shrine, and indulge in authentic Japanese cuisine.",
      "image": "https://cdn.pixabay.com/photo/2015/06/29/04/41/tokyo-tower-825196_1280.jpg",
      "population": "13.5 million",
      "currency": "Japanese Yen (JPY)",
      "language": "Japanese",
      "best_time_to_visit": "Spring (Cherry Blossom season) and Autumn",
      "top_attractions": [
        "Shibuya Crossing",
        "Tokyo Skytree",
        "Asakusa Senso-ji Temple",
        "Akihabara"
      ],
      "local_dishes": [
        "Sushi",
        "Ramen",
        "Tempura"
      ],
      "activities": [
        "Shopping in Harajuku",
        "Visiting themed cafes",
        "Exploring traditional gardens"
      ]
    },
    {
      "id": 3,
      "name": "New York City",
      "country": "United States",
      "continent": "North America",
      "description": "New York City is a global cultural hub, known for its iconic skyline, Broadway theaters, and diverse neighborhoods. Experience the energy of Times Square, visit world-famous museums, and enjoy Central Park's green oasis.",
      "image": "https://cdn.pixabay.com/photo/2015/03/11/12/31/buildings-668616_1280.jpg",
      "population": "8.4 million",
      "currency": "United States Dollar (USD)",
      "language": "English",
      "best_time_to_visit": "Spring and Fall",
      "top_attractions": [
        "Statue of Liberty",
        "Empire State Building",
        "Central Park",
        "Metropolitan Museum of Art"
      ],
      "local_dishes": [
        "Pizza",
        "Bagels",
        "Cheesecake"
      ],
      "activities": [
        "Broadway shows",
        "Fifth Avenue shopping",
        "Cycling in Central Park"
      ]
    },
    {
      "id": 4,
      "name": "London",
      "country": "United Kingdom",
      "continent": "Europe",
      "description": "London, the capital of the United Kingdom, is a historic city with a mix of modern and traditional attractions. Explore the Tower of London, take a ride on the London Eye, and enjoy West End theater productions.",
      "image": "https://cdn.pixabay.com/photo/2022/02/15/13/00/building-7014904_1280.jpg",
      "population": "8.8 million",
      "currency": "British Pound (GBP)",
      "language": "English",
      "best_time_to_visit": "Spring and Summer",
      "top_attractions": [
        "British Museum",
        "Buckingham Palace",
        "Big Ben",
        "Westminster Abbey"
      ],
      "local_dishes": [
        "Fish and Chips",
        "Full English Breakfast",
        "Pies"
      ],
      "activities": [
        "River Thames cruises",
        "Shopping on Oxford Street",
        "Exploring historic pubs"
      ]
    },
    {
      "id": 5,
      "name": "Rome",
      "country": "Italy",
      "continent": "Europe",
      "description": "Rome, the capital of Italy, is a city steeped in history and ancient architecture. Visit iconic landmarks like the Colosseum and Roman Forum, enjoy delicious Italian cuisine, and experience the charm of quaint neighborhoods.",
      "image": "https://cdn.pixabay.com/photo/2017/01/01/17/39/rome-1945033_1280.jpg",
      "population": "2.8 million",
      "currency": "Euro (EUR)",
      "language": "Italian",
      "best_time_to_visit": "Spring and Fall",
      "top_attractions": [
        "Colosseum",
        "Vatican City",
        "Pantheon",
        "Trevi Fountain"
      ],
      "local_dishes": [
        "Pasta",
        "Pizza",
        "Gelato"
      ],
      "activities": [
        "Exploring ancient ruins",
        "Attending Papal Audience",
        "Visiting art galleries"
      ]
    },
    {
      "id": 6,
      "name": "Bangkok",
      "country": "Thailand",
      "continent": "Asia",
      "description": "Bangkok, the capital of Thailand, is a vibrant city known for its bustling markets, ornate temples, and energetic nightlife. Explore the Grand Palace, take a boat ride along the Chao Phraya River, and savor Thai street food.",
      "image": "https://cdn.pixabay.com/photo/2017/04/22/14/31/bangkok-2251490_1280.jpg",
      "population": "8.3 million",
      "currency": "Thai Baht (THB)",
      "language": "Thai",
      "best_time_to_visit": "November to February",
      "top_attractions": [
        "Wat Arun",
        "Chatuchak Weekend Market",
        "Floating Markets",
        "Khao San Road"
      ],
      "local_dishes": [
        "Pad Thai",
        "Tom Yum Goong",
        "Som Tum (Green Papaya Salad)"
      ],
      "activities": [
        "Exploring temples",
        "Tuk-tuk rides",
        "Thai cooking classes"
      ]
    },
    {
      "id": 7,
      "name": "Sydney",
      "country": "Australia",
      "continent": "Oceania",
      "description": "Sydney is a vibrant city known for its stunning harbor, iconic Opera House, and beautiful beaches. Climb the Sydney Harbour Bridge, relax at Bondi Beach, and explore the historic Rocks district.",
      "image": "https://cdn.pixabay.com/photo/2016/03/27/00/01/australia-1281935_1280.jpg",
      "population": "5.3 million",
      "currency": "Australian Dollar (AUD)",
      "language": "English",
      "best_time_to_visit": "September to November, March to May",
      "top_attractions": [
        "Sydney Opera House",
        "Bondi Beach",
        "Sydney Harbour Bridge",
        "Taronga Zoo"
      ],
      "local_dishes": [
        "Meat Pie",
        "Vegemite on Toast",
        "Pavlova"
      ],
      "activities": [
        "Harbor cruises",
        "Coastal walks",
        "Surfing"
      ]
    },
    {
      "id": 8,
      "name": "Dubai",
      "country": "United Arab Emirates",
      "continent": "Asia",
      "description": "Dubai is a city known for its modern architecture, luxury shopping, and impressive skyscrapers. Visit the Burj Khalifa, explore the Dubai Mall, and experience the vibrant culture of the city.",
      "image": "https://cdn.pixabay.com/photo/2019/03/09/21/30/downtown-4045035_1280.jpg",
      "population": "3.3 million",
      "currency": "United Arab Emirates Dirham (AED)",
      "language": "Arabic",
      "best_time_to_visit": "November to April",
      "top_attractions": [
        "Burj Khalifa",
        "Palm Jumeirah",
        "Dubai Creek",
        "Dubai Desert Safari"
      ],
      "local_dishes": [
        "Shawarma",
        "Falafel",
        "Dates"
      ],
      "activities": [
        "Shopping in souks",
        "Dune bashing",
        "Visit to Dubai Frame"
      ]
    },
    {
      "id": 9,
      "name": "Cape Town",
      "country": "South Africa",
      "continent": "Africa",
      "description": "Cape Town is a coastal city known for its stunning landscapes, diverse culture, and historic sites. Visit Table Mountain, explore the Cape Peninsula, and enjoy the vibrant waterfront.",
      "image": "https://cdn.pixabay.com/photo/2013/04/11/18/57/cape-town-102825_1280.jpg",
      "population": "4.0 million",
      "currency": "South African Rand (ZAR)",
      "language": "English, Afrikaans",
      "best_time_to_visit": "October to April",
      "top_attractions": [
        "Table Mountain",
        "Robben Island",
        "Cape of Good Hope",
        "Victoria & Alfred Waterfront"
      ],
      "local_dishes": [
        "Biltong",
        "Bobotie",
        "Malva Pudding"
      ],
      "activities": [
        "Wine tasting in Stellenbosch",
        "Hiking in nature reserves",
        "Visit to Kirstenbosch Botanical Garden"
      ]
    },
    {
      "id": 10,
      "name": "Rio de Janeiro",
      "country": "Brazil",
      "continent": "South America",
      "description": "Rio de Janeiro is a vibrant city known for its lively Carnival, stunning beaches, and iconic Christ the Redeemer statue. Enjoy the vibrant Copacabana and Ipanema beaches, explore the historic Santa Teresa neighborhood, and hike up to Sugarloaf Mountain.",
      "image": "https://cdn.pixabay.com/photo/2017/01/08/19/30/rio-de-janeiro-1963744_1280.jpg",
      "population": "6.7 million",
      "currency": "Brazilian Real (BRL)",
      "language": "Portuguese",
      "best_time_to_visit": "December to March",
      "top_attractions": [
        "Christ the Redeemer",
        "Copacabana Beach",
        "Sugarloaf Mountain",
        "Lapa Arches"
      ],
      "local_dishes": [
        "Feijoada",
        "Caipirinha",
        "Açaí Bowl"
      ],
      "activities": [
        "Samba dance lessons",
        "Cable car ride to Sugarloaf Mountain",
        "Trekking in Tijuca National Park"
      ]
    },
    {
      "id": 11,
      "name": "Buenos Aires",
      "country": "Argentina",
      "continent": "South America",
      "description": "Buenos Aires is a city known for its vibrant culture, tango music and dance, and historic neighborhoods. Explore the colorful streets of La Boca, visit the iconic Teatro Colon, and enjoy the city's lively nightlife.",
      "image": "https://cdn.pixabay.com/photo/2019/03/19/22/48/city-4067225_1280.jpg",
      "population": "2.8 million",
      "currency": "Argentine Peso (ARS)",
      "language": "Spanish",
      "best_time_to_visit": "October to April",
      "top_attractions": [
        "La Boca Neighborhood",
        "Recoleta Cemetery",
        "Plaza de Mayo",
        "San Telmo Market"
      ],
      "local_dishes": [
        "Asado (Grilled Meat)",
        "Empanadas",
        "Mate (Traditional Tea)"
      ],
      "activities": [
        "Tango dancing",
        "Visit to Palermo Soho",
        "Explore MALBA (Museum of Latin American Art)"
      ]
    },
    {
      "id": 12,
      "name": "Prague",
      "country": "Czech Republic",
      "continent": "Europe",
      "description": "Prague, the capital of the Czech Republic, is known for its stunning architecture, historic Old Town, and charming atmosphere. Explore Prague Castle, stroll across Charles Bridge, and enjoy traditional Czech beer.",
      "image": "https://cdn.pixabay.com/photo/2016/11/21/14/02/prague-1845560_1280.jpg",
      "population": "1.3 million",
      "currency": "Czech Koruna (CZK)",
      "language": "Czech",
      "best_time_to_visit": "April to October",
      "top_attractions": [
        "Prague Castle",
        "Charles Bridge",
        "Old Town Square",
        "Astronomical Clock"
      ],
      "local_dishes": [
        "Goulash",
        "Trdelník (Chimney Cake)",
        "Svíčková (Braised Beef with Cream Sauce)"
      ],
      "activities": [
        "Boat cruise on the Vltava River",
        "Visit to Prague Zoo",
        "Exploring Jewish Quarter"
      ]
    },
    {
      "id": 13,
      "name": "Singapore",
      "country": "Singapore",
      "continent": "Asia",
      "description": "Singapore is a modern city-state known for its clean streets, diverse cuisine, and futuristic architecture. Explore the iconic Marina Bay Sands, visit Gardens by the Bay, and enjoy shopping on Orchard Road.",
      "image": "https://cdn.pixabay.com/photo/2013/02/07/17/32/singapore-79116_1280.jpg",
      "population": "5.8 million",
      "currency": "Singapore Dollar (SGD)",
      "language": "English, Malay, Tamil, Chinese",
      "best_time_to_visit": "February to April",
      "top_attractions": [
        "Marina Bay Sands",
        "Gardens by the Bay",
        "Sentosa Island",
        "Chinatown"
      ],
      "local_dishes": [
        "Hainanese Chicken Rice",
        "Chilli Crab",
        "Laksa"
      ],
      "activities": [
        "Night safari at Singapore Zoo",
        "Visit to Universal Studios Singapore",
        "Shopping in Chinatown"
      ]
    },
    {
      "id": 14,
      "name": "Barcelona",
      "country": "Spain",
      "continent": "Europe",
      "description": "Barcelona is a lively city known for its unique architecture, sandy beaches, and rich cultural scene. Explore the works of Antoni Gaudí, relax on Barceloneta Beach, and experience the vibrant atmosphere of La Rambla.",
      "image": "https://cdn.pixabay.com/photo/2014/08/26/14/11/cathedral-427997_1280.jpg",
      "population": "1.6 million",
      "currency": "Euro (EUR)",
      "language": "Catalan, Spanish",
      "best_time_to_visit": "May to July, September to October",
      "top_attractions": [
        "Sagrada Familia",
        "Park Güell",
        "Casa Batlló",
        "Barri Gòtic (Gothic Quarter)"
      ],
      "local_dishes": [
        "Tapas",
        "Paella",
        "Crema Catalana (Catalan Custard)"
      ],
      "activities": [
        "Gaudi architecture tour",
        "Visit to Picasso Museum",
        "Wine tasting in Penedès"
      ]
    },
    {
      "id": 15,
      "name": "Seoul",
      "country": "South Korea",
      "continent": "Asia",
      "description": "Seoul is a dynamic city known for its modern skyscrapers, historic palaces, and K-pop culture. Visit Gyeongbokgung Palace, explore vibrant neighborhoods like Myeongdong, and enjoy the bustling street food scene.",
      "image": "https://cdn.pixabay.com/photo/2021/01/08/21/43/hyangwonjeong-pavilion-5900902_1280.jpg",
      "population": "9.7 million",
      "currency": "South Korean Won (KRW)",
      "language": "Korean",
      "best_time_to_visit": "April to June, September to November",
      "top_attractions": [
        "Gyeongbokgung Palace",
        "Myeongdong Shopping Street",
        "N Seoul Tower",
        "Hongdae"
      ],
      "local_dishes": [
        "Bibimbap",
        "Kimchi",
        "Korean BBQ"
      ],
      "activities": [
        "K-pop dance class",
        "Visit to DMZ (Demilitarized Zone)",
        "Traditional tea ceremony"
      ]
    },
    {
      "id": 16,
      "name": "Hong Kong",
      "country": "Hong Kong",
      "continent": "Asia",
      "description": "Hong Kong is a bustling city known for its impressive skyline, vibrant markets, and rich culinary scene. Explore Victoria Harbour, visit bustling street markets, and take the Peak Tram for stunning city views.",
      "image": "https://cdn.pixabay.com/photo/2016/05/26/14/04/skyline-1417229_1280.jpg",
      "population": "7.5 million",
      "currency": "Hong Kong Dollar (HKD)",
      "language": "Chinese, English",
      "best_time_to_visit": "October to December, March to April",
      "top_attractions": [
        "Victoria Peak",
        "Lan Kwai Fong",
        "Hong Kong Disneyland",
        "Temple Street Night Market"
      ],
      "local_dishes": [
        "Dim Sum",
        "Roast Goose",
        "Egg Waffles"
      ],
      "activities": [
        "Star Ferry ride",
        "Visit to Ocean Park",
        "Shopping in Causeway Bay"
      ]
    },
    // {
    //   "id": 17,
    //   "name": "Vienna",
    //   "country": "Austria",
    //   "continent": "Europe",
    //   "description": "Vienna, the capital of Austria, is known for its imperial palaces, classical music heritage, and elegant coffeehouses. Explore Schönbrunn Palace, attend a concert at the Vienna State Opera, and enjoy Viennese pastries.",
    //   "image": "https://cdn.pixabay.com/photo/2017/01/23/21/05/castle-2003867_1280.jpg",
    //   "population": "1.9 million",
    //   "currency": "Euro (EUR)",
    //   "language": "German",
    //   "best_time_to_visit": "April to May, September to October",
    //   "top_attractions": [
    //     "Belvedere Palace",
    //     "St. Stephen's Cathedral",
    //     "Hofburg Palace",
    //     "Naschmarkt"
    //   ],
    //   "local_dishes": [
    //     "Wiener Schnitzel",
    //     "Sachertorte",
    //     "Apfelstrudel"
    //   ],
    //   "activities": [
    //     "Visit to Schönbrunn Zoo",
    //     "Café-hopping",
    //     "Horse-drawn carriage ride"
    //   ]
    // },
    // {
    //   "id": 18,
    //   "name": "Amsterdam",
    //   "country": "Netherlands",
    //   "continent": "Europe",
    //   "description": "Amsterdam is a picturesque city known for its canals, historic houses, and artistic heritage. Explore the Anne Frank House, take a canal cruise, and visit world-class museums like the Rijksmuseum.",
    //   "image": "https://cdn.pixabay.com/photo/2019/08/06/11/58/city-4388160_1280.jpg",
    //   "population": "1.1 million",
    //   "currency": "Euro (EUR)",
    //   "language": "Dutch",
    //   "best_time_to_visit": "April to September",
    //   "top_attractions": [
    //     "Rijksmuseum",
    //     "Van Gogh Museum",
    //     "Anne Frank House",
    //     "Dam Square"
    //   ],
    //   "local_dishes": [
    //     "Herring",
    //     "Stroopwafels",
    //     "Bitterballen"
    //   ],
    //   "activities": [
    //     "Biking along canals",
    //     "Visit to Keukenhof Gardens",
    //     "Exploring Jordaan district"
    //   ]
    // },
    // {
    //   "id": 19,
    //   "name": "Florence",
    //   "country": "Italy",
    //   "continent": "Europe",
    //   "description": "Florence is a city known for its Renaissance art, historic architecture, and charming streets. Explore the Uffizi Gallery, visit the Florence Cathedral, and stroll across the Ponte Vecchio.",
    //   "image": "https://cdn.pixabay.com/photo/2016/09/28/18/51/florence-1701151_1280.jpg",
    //   "population": "382,000",
    //   "currency": "Euro (EUR)",
    //   "language": "Italian",
    //   "best_time_to_visit": "April to June, September to October",
    //   "top_attractions": [
    //     "Uffizi Gallery",
    //     "Florence Cathedral",
    //     "Ponte Vecchio",
    //     "Piazzale Michelangelo"
    //   ],
    //   "local_dishes": [
    //     "Florentine Steak",
    //     "Ribollita (Tuscan Soup)",
    //     "Gelato"
    //   ],
    //   "activities": [
    //     "Climb to the top of Florence Cathedral",
    //     "Explore Palazzo Pitti",
    //     "Wine tasting in Chianti region"
    //   ]
    // },
    // {
    //   "id": 20,
    //   "name": "Berlin",
    //   "country": "Germany",
    //   "continent": "Europe",
    //   "description": "Berlin is a city known for its rich history, vibrant arts scene, and eclectic neighborhoods. Visit the Berlin Wall Memorial, explore the Brandenburg Gate, and experience the city's diverse culinary offerings.",
    //   "image": "https://cdn.pixabay.com/photo/2019/09/21/06/16/castle-4493125_1280.jpg",
    //   "population": "3.7 million",
    //   "currency": "Euro (EUR)",
    //   "language": "German",
    //   "best_time_to_visit": "May to September",
    //   "top_attractions": [
    //     "Brandenburg Gate",
    //     "Berlin Wall Memorial",
    //     "Museum Island",
    //     "East Side Gallery"
    //   ],
    //   "local_dishes": [
    //     "Currywurst",
    //     "Schnitzel",
    //     "Berliner Pfannkuchen (Berliners)"
    //   ],
    //   "activities": [
    //     "Visit to Checkpoint Charlie",
    //     "Exploring art galleries",
    //     "Biking along the Spree River"
    //   ]
    // },
    // {
    //   "id": 21,
    //   "name": "Istanbul",
    //   "country": "Turkey",
    //   "continent": "Asia",
    //   "description": "Istanbul is a city known for its rich history, stunning architecture, and unique blend of cultures. Explore the Hagia Sophia, visit the Grand Bazaar, and take a Bosphorus cruise to experience the city's charm.",
    //   "image": "https://cdn.pixabay.com/photo/2017/11/02/19/37/istanbul-2912249_1280.jpg",
    //   "population": "15.0 million",
    //   "currency": "Turkish Lira (TRY)",
    //   "language": "Turkish",
    //   "best_time_to_visit": "April to June, September to October",
    //   "top_attractions": [
    //     "Hagia Sophia",
    //     "Blue Mosque",
    //     "Topkapi Palace",
    //     "Bosphorus Bridge"
    //   ],
    //   "local_dishes": [
    //     "Kebab",
    //     "Baklava",
    //     "Turkish Delight"
    //   ],
    //   "activities": [
    //     "Relax in a Turkish hammam",
    //     "Visit the Basilica Cistern",
    //     "Explore Beyoglu district"
    //   ]
    // },
    // {
    //   "id": 22,
    //   "name": "Marrakech",
    //   "country": "Morocco",
    //   "continent": "Africa",
    //   "description": "Marrakech is a vibrant city known for its bustling markets, historic medina, and vibrant colors. Explore Jardin Majorelle, visit the Bahia Palace, and experience the lively atmosphere of Jemaa el-Fnaa square.",
    //   "image": "https://cdn.pixabay.com/photo/2016/02/03/16/15/morocco-1177358_1280.jpg",
    //   "population": "928,850",
    //   "currency": "Moroccan Dirham (MAD)",
    //   "language": "Arabic, Berber",
    //   "best_time_to_visit": "March to May, September to November",
    //   "top_attractions": [
    //     "Jemaa el-Fnaa",
    //     "Medersa Ben Youssef",
    //     "Koutoubia Mosque",
    //     "Saadian Tombs"
    //   ],
    //   "local_dishes": [
    //     "Tagine",
    //     "Couscous",
    //     "Mint Tea"
    //   ],
    //   "activities": [
    //     "Exploring souks",
    //     "Camel ride in the desert",
    //     "Relaxing in a riad"
    //   ]
    // },
    // {
    //   "id": 23,
    //   "name": "Athens",
    //   "country": "Greece",
    //   "continent": "Europe",
    //   "description": "Athens is a city known for its ancient history, iconic ruins, and contributions to Western civilization. Visit the Acropolis, explore the Plaka district, and enjoy panoramic views from Lycabettus Hill.",
    //   "image": "https://cdn.pixabay.com/photo/2022/08/21/21/13/athens-7402123_1280.jpg",
    //   "population": "664,046",
    //   "currency": "Euro (EUR)",
    //   "language": "Greek",
    //   "best_time_to_visit": "April to June, September to October",
    //   "top_attractions": [
    //     "Acropolis",
    //     "Parthenon",
    //     "Ancient Agora",
    //     "National Archaeological Museum"
    //   ],
    //   "local_dishes": [
    //     "Moussaka",
    //     "Souvlaki",
    //     "Greek Salad"
    //   ],
    //   "activities": [
    //     "Visiting ancient sites",
    //     "Sunset at Cape Sounion",
    //     "Exploring Plaka's tavernas"
    //   ]
    // },
    // {
    //   "id": 24,
    //   "name": "Kyoto",
    //   "country": "Japan",
    //   "continent": "Asia",
    //   "description": "Kyoto is a city known for its traditional temples, historic tea houses, and serene gardens. Visit Kinkaku-ji (Golden Pavilion), experience a tea ceremony, and explore the historic Gion district.",
    //   "image": "https://cdn.pixabay.com/photo/2016/06/10/04/24/senso-ji-1447399_1280.jpg",
    //   "population": "1.5 million",
    //   "currency": "Japanese Yen (JPY)",
    //   "language": "Japanese",
    //   "best_time_to_visit": "April and October",
    //   "top_attractions": [
    //     "Kiyomizu-dera Temple",
    //     "Fushimi Inari Shrine",
    //     "Arashiyama Bamboo Grove",
    //     "Nijo Castle"
    //   ],
    //   "local_dishes": [
    //     "Kaiseki",
    //     "Matcha Green Tea",
    //     "Yudofu (Tofu Hot Pot)"
    //   ],
    //   "activities": [
    //     "Wearing a kimono",
    //     "Hanami (Cherry Blossom Viewing)",
    //     "Exploring traditional machiya houses"
    //   ]
    // },
    // {
    //   "id": 25,
    //   "name": "Hanoi",
    //   "country": "Vietnam",
    //   "continent": "Asia",
    //   "description": "Hanoi is a city known for its historic Old Quarter, colonial architecture, and bustling street markets. Explore Hoan Kiem Lake, visit the Ho Chi Minh Mausoleum, and savor Vietnamese street food.",
    //   "image": "https://cdn.pixabay.com/photo/2018/08/16/08/45/hanoi-3609871_1280.jpg",
    //   "population": "7.5 million",
    //   "currency": "Vietnamese Dong (VND)",
    //   "language": "Vietnamese",
    //   "best_time_to_visit": "October to April",
    //   "top_attractions": [
    //     "Hoan Kiem Lake",
    //     "Ho Chi Minh Mausoleum",
    //     "Temple of Literature",
    //     "Water Puppet Theatre"
    //   ],
    //   "local_dishes": [
    //     "Pho",
    //     "Bun Cha",
    //     "Egg Coffee"
    //   ],
    //   "activities": [
    //     "Cyclo tour of Old Quarter",
    //     "Visit to Hoa Lo Prison",
    //     "Exploring local markets"
    //   ]
    // },
    // {
    //   "id": 26,
    //   "name": "San Francisco",
    //   "country": "United States",
    //   "continent": "North America",
    //   "description": "San Francisco is a city known for its iconic Golden Gate Bridge, diverse neighborhoods, and tech innovation. Explore Alcatraz Island, ride a cable car, and enjoy panoramic views from Twin Peaks.",
    //   "image": "https://cdn.pixabay.com/photo/2017/03/18/14/56/panorama-2154194_1280.jpg",
    //   "population": "883,305",
    //   "currency": "US Dollar (USD)",
    //   "language": "English",
    //   "best_time_to_visit": "September to November",
    //   "top_attractions": [
    //     "Golden Gate Bridge",
    //     "Fisherman's Wharf",
    //     "Alcatraz Island",
    //     "Lombard Street"
    //   ],
    //   "local_dishes": [
    //     "Clam Chowder in Sourdough Bread Bowl",
    //     "Mission Burrito",
    //     "Dungeness Crab"
    //   ],
    //   "activities": [
    //     "Visit to Muir Woods",
    //     "Exploring Chinatown",
    //     "Tech company tours"
    //   ]
    // },
    // {
    //   "id": 27,
    //   "name": "Bali",
    //   "country": "Indonesia",
    //   "continent": "Asia",
    //   "description": "Bali is a tropical paradise known for its stunning beaches, lush landscapes, and vibrant culture. Relax on the sandy shores, explore ancient temples, and savor Indonesian cuisine.",
    //   "image": "https://cdn.pixabay.com/photo/2018/03/19/14/55/pagoda-3240169_1280.jpg",
    //   "population": "4.3 million",
    //   "currency": "Indonesian Rupiah (IDR)",
    //   "language": "Indonesian",
    //   "best_time_to_visit": "April to October",
    //   "top_attractions": [
    //     "Uluwatu Temple",
    //     "Tanah Lot",
    //     "Ubud Monkey Forest",
    //     "Mount Batur"
    //   ],
    //   "local_dishes": [
    //     "Nasi Goreng",
    //     "Babi Guling",
    //     "Balinese Satay"
    //   ],
    //   "activities": [
    //     "Surfing in Kuta",
    //     "Rice terrace trekking in Tegalalang",
    //     "Traditional Balinese dance performance"
    //   ]
    // },
    // {
    //   "id": 28,
    //   "name": "Toronto",
    //   "country": "Canada",
    //   "continent": "North America",
    //   "description": "Toronto is a diverse city known for its multicultural neighborhoods, iconic CN Tower, and vibrant arts scene. Explore the Distillery District, visit the Royal Ontario Museum, and enjoy stunning views from the Toronto Islands.",
    //   "image": "https://cdn.pixabay.com/photo/2018/01/27/23/46/toronto-3112508_1280.jpg",
    //   "population": "2.9 million",
    //   "currency": "Canadian Dollar (CAD)",
    //   "language": "English, French",
    //   "best_time_to_visit": "May to October",
    //   "top_attractions": [
    //     "CN Tower",
    //     "Royal Ontario Museum",
    //     "Toronto Islands",
    //     "Kensington Market"
    //   ],
    //   "local_dishes": [
    //     "Poutine",
    //     "Butter Tart",
    //     "Peameal Bacon Sandwich"
    //   ],
    //   "activities": [
    //     "Exploring St. Lawrence Market",
    //     "Cycling on Toronto's waterfront",
    //     "Visit to Ripley's Aquarium"
    //   ]
    // },
    // {
    //   "id": 29,
    //   "name": "Cusco",
    //   "country": "Peru",
    //   "continent": "South America",
    //   "description": "Cusco is a city known for its Incan heritage, historic architecture, and proximity to Machu Picchu. Explore the Sacred Valley, visit Sacsayhuaman, and experience the vibrant local culture.",
    //   "image": "https://cdn.pixabay.com/photo/2019/02/06/00/06/peru-3978148_1280.jpg",
    //   "population": "428,450",
    //   "currency": "Peruvian Sol (PEN)",
    //   "language": "Spanish, Quechua",
    //   "best_time_to_visit": "May to September",
    //   "top_attractions": [
    //     "Machu Picchu",
    //     "Sacsayhuaman",
    //     "Sacred Valley",
    //     "Qorikancha"
    //   ],
    //   "local_dishes": [
    //     "Cuy (Guinea Pig)",
    //     "Lomo Saltado",
    //     "Ceviche"
    //   ],
    //   "activities": [
    //     "Inca Trail trekking",
    //     "Visit to Pisac Market",
    //     "Traditional Andean textile workshops"
    //   ]
    // },
    // {
    //   "id": 30,
    //   "name": "Amman",
    //   "country": "Jordan",
    //   "continent": "Asia",
    //   "description": "Amman is a city known for its ancient ruins, modernity, and vibrant markets. Explore the Amman Citadel, visit the Jordan Museum, and experience the city's rich history and culture.",
    //   "image": "https://cdn.pixabay.com/photo/2019/07/14/07/19/temple-of-hercules-4336321_1280.jpg",
    //   "population": "4.0 million",
    //   "currency": "Jordanian Dinar (JOD)",
    //   "language": "Arabic",
    //   "best_time_to_visit": "March to May, September to November",
    //   "top_attractions": [
    //     "Amman Citadel",
    //     "Roman Theatre",
    //     "Rainbow Street",
    //     "Jordan Archaeological Museum"
    //   ],
    //   "local_dishes": [
    //     "Mansaf",
    //     "Falafel",
    //     "Knafeh"
    //   ],
    //   "activities": [
    //     "Visit to Jerash",
    //     "Shopping in local souks",
    //     "Exploring Amman's art galleries"
    //   ]
    // },
    // {
    //   "id": 31,
    //   "name": "Budapest",
    //   "country": "Hungary",
    //   "continent": "Europe",
    //   "description": "Budapest is a city known for its stunning architecture, thermal baths, and rich history. Explore Buda Castle, visit Széchenyi Thermal Bath, and cruise along the Danube River to see the Parliament building.",
    //   "image": "https://cdn.pixabay.com/photo/2015/02/11/18/02/budapest-632851_1280.jpg",
    //   "population": "1.7 million",
    //   "currency": "Hungarian Forint (HUF)",
    //   "language": "Hungarian",
    //   "best_time_to_visit": "April to October",
    //   "top_attractions": [
    //     "Buda Castle",
    //     "Széchenyi Thermal Bath",
    //     "Parliament Building",
    //     "Fisherman's Bastion"
    //   ],
    //   "local_dishes": [
    //     "Goulash",
    //     "Langos",
    //     "Chimney Cake"
    //   ],
    //   "activities": [
    //     "Cruise on the Danube",
    //     "Visit to Hungarian State Opera House",
    //     "Exploring ruin pubs"
    //   ]
    // },
    // {
    //   "id": 32,
    //   "name": "Edinburgh",
    //   "country": "United Kingdom",
    //   "continent": "Europe",
    //   "description": "Edinburgh is a historic city known for its medieval Old Town, iconic Edinburgh Castle, and annual festivals. Explore the Royal Mile, hike up Arthur's Seat, and attend the Edinburgh Festival Fringe.",
    //   "image": "https://cdn.pixabay.com/photo/2019/09/20/09/36/edinburgh-4491305_1280.jpg",
    //   "population": "540,000",
    //   "currency": "British Pound (GBP)",
    //   "language": "English, Scots",
    //   "best_time_to_visit": "May to September",
    //   "top_attractions": [
    //     "Edinburgh Castle",
    //     "Royal Mile",
    //     "Arthur's Seat",
    //     "Holyrood Palace"
    //   ],
    //   "local_dishes": [
    //     "Haggis",
    //     "Scotch Pie",
    //     "Cranachan"
    //   ],
    //   "activities": [
    //     "Ghost tour of the Old Town",
    //     "Whisky tasting",
    //     "Visit to National Museum of Scotland"
    //   ]
    // },
    // {
    //   "id": 33,
    //   "name": "Vancouver",
    //   "country": "Canada",
    //   "continent": "North America",
    //   "description": "Vancouver is a city known for its natural beauty, Stanley Park, and outdoor activities. Explore Granville Island, walk along the Seawall, and enjoy the views from Grouse Mountain.",
    //   "image": "https://cdn.pixabay.com/photo/2016/09/21/10/07/vancouver-1684467_1280.jpg",
    //   "population": "2.5 million",
    //   "currency": "Canadian Dollar (CAD)",
    //   "language": "English",
    //   "best_time_to_visit": "May to September",
    //   "top_attractions": [
    //     "Stanley Park",
    //     "Granville Island",
    //     "Grouse Mountain",
    //     "Capilano Suspension Bridge"
    //   ],
    //   "local_dishes": [
    //     "Japadog",
    //     "Salmon Candy",
    //     "Nanaimo Bar"
    //   ],
    //   "activities": [
    //     "Whale watching tour",
    //     "Visit to Vancouver Aquarium",
    //     "Biking in Stanley Park"
    //   ]
    // },
    // {
    //   "id": 34,
    //   "name": "Moscow",
    //   "country": "Russia",
    //   "continent": "Europe",
    //   "description": "Moscow is a city known for its historic architecture, Red Square, and rich cultural heritage. Visit the Kremlin, explore St. Basil's Cathedral, and enjoy performances at the Bolshoi Theatre.",
    //   "image": "https://cdn.pixabay.com/photo/2017/03/07/11/29/russia-2123697_1280.jpg",
    //   "population": "12.5 million",
    //   "currency": "Russian Ruble (RUB)",
    //   "language": "Russian",
    //   "best_time_to_visit": "May to September",
    //   "top_attractions": [
    //     "Red Square",
    //     "Kremlin",
    //     "St. Basil's Cathedral",
    //     "Bolshoi Theatre"
    //   ],
    //   "local_dishes": [
    //     "Borscht",
    //     "Pelmeni",
    //     "Blini"
    //   ],
    //   "activities": [
    //     "Metro tour of Moscow's stunning stations",
    //     "Visit to Gorky Park",
    //     "Russian bathhouse experience"
    //   ]
    // },
    // {
    //   "id": 35,
    //   "name": "New Delhi",
    //   "country": "India",
    //   "continent": "Asia",
    //   "description": "Delhi is a city known for its historical landmarks, vibrant markets, and diverse culture. Visit the Red Fort, explore Chandni Chowk, and experience the spiritual atmosphere of Akshardham Temple.",
    //   "image": "https://cdn.pixabay.com/photo/2020/04/22/17/33/indian-5079278_1280.jpg",
    //   "population": "30.3 million",
    //   "currency": "Indian Rupee (INR)",
    //   "language": "Hindi, English",
    //   "best_time_to_visit": "October to March",
    //   "top_attractions": [
    //     "Red Fort",
    //     "India Gate",
    //     "Qutub Minar",
    //     "Lotus Temple"
    //   ],
    //   "local_dishes": [
    //     "Chole Bhature",
    //     "Biryani",
    //     "Paratha"
    //   ],
    //   "activities": [
    //     "Rickshaw ride in Chandni Chowk",
    //     "Visit to Humayun's Tomb",
    //     "Shopping at Dilli Haat"
    //   ]
    // },
    // {
    //   "id": 36,
    //   "name": "Seville",
    //   "country": "Spain",
    //   "continent": "Europe",
    //   "description": "Seville is a city known for its flamenco music, historic architecture, and vibrant street life. Explore the Alcazar of Seville, visit the Seville Cathedral, and enjoy tapas by the Guadalquivir River.",
    //   "image": "https://cdn.pixabay.com/photo/2020/05/12/18/29/city-5164368_1280.jpg",
    //   "population": "688,711",
    //   "currency": "Euro (EUR)",
    //   "language": "Spanish",
    //   "best_time_to_visit": "March to May, September to November",
    //   "top_attractions": [
    //     "Alcazar of Seville",
    //     "Seville Cathedral",
    //     "Plaza de España",
    //     "Triana Neighborhood"
    //   ],
    //   "local_dishes": [
    //     "Salmorejo",
    //     "Espetos de Sardinas",
    //     "Flamenquín"
    //   ],
    //   "activities": [
    //     "Flamenco show in a tablao",
    //     "Climb the Giralda Tower",
    //     "Boat ride on the Guadalquivir River"
    //   ]
    // },
    // {
    //   "id": 37,
    //   "name": "Copenhagen",
    //   "country": "Denmark",
    //   "continent": "Europe",
    //   "description": "Copenhagen is a city known for its modern design, historic charm, and sustainable lifestyle. Explore Tivoli Gardens, visit the Little Mermaid statue, and enjoy the Nyhavn waterfront.",
    //   "image": "https://cdn.pixabay.com/photo/2019/01/31/07/16/copenhagen-3966077_1280.jpg",
    //   "population": "602,481",
    //   "currency": "Danish Krone (DKK)",
    //   "language": "Danish",
    //   "best_time_to_visit": "May to September",
    //   "top_attractions": [
    //     "Tivoli Gardens",
    //     "The Little Mermaid",
    //     "Nyhavn",
    //     "Rosenborg Castle"
    //   ],
    //   "local_dishes": [
    //     "Smørrebrød",
    //     "Danish Pastries",
    //     "Frikadeller"
    //   ],
    //   "activities": [
    //     "Biking tour of the city",
    //     "Visit to Christiania",
    //     "Exploring the National Museum of Denmark"
    //   ]
    // },
    // {
    //   "id": 38,
    //   "name": "Cairo",
    //   "country": "Egypt",
    //   "continent": "Africa",
    //   "description": "Cairo is a city known for its ancient history, the Pyramids of Giza, and bustling markets. Visit the Egyptian Museum, explore Khan el-Khalili bazaar, and experience a Nile River cruise.",
    //   "image": "https://cdn.pixabay.com/photo/2018/10/17/11/45/pyramids-3753769_1280.jpg",
    //   "population": "9.2 million",
    //   "currency": "Egyptian Pound (EGP)",
    //   "language": "Arabic",
    //   "best_time_to_visit": "October to April",
    //   "top_attractions": [
    //     "Pyramids of Giza",
    //     "Egyptian Museum",
    //     "Khan el-Khalili",
    //     "Cairo Citadel"
    //   ],
    //   "local_dishes": [
    //     "Koshari",
    //     "Ful Medames",
    //     "Mahshi"
    //   ],
    //   "activities": [
    //     "Camel ride around the pyramids",
    //     "Visit to Islamic Cairo",
    //     "Felucca sail on the Nile"
    //   ]
    // },
    // {
    //   "id": 39,
    //   "name": "Reykjavik",
    //   "country": "Iceland",
    //   "continent": "Europe",
    //   "description": "Reykjavik is a city known for its geothermal wonders, unique landscapes, and vibrant arts scene. Visit the Blue Lagoon, explore Hallgrimskirkja, and experience the Northern Lights.",
    //   "image": "https://cdn.pixabay.com/photo/2015/09/17/19/02/iceland-944592_1280.jpg",
    //   "population": "131,136",
    //   "currency": "Icelandic Krona (ISK)",
    //   "language": "Icelandic",
    //   "best_time_to_visit": "June to August",
    //   "top_attractions": [
    //     "Blue Lagoon",
    //     "Hallgrimskirkja",
    //     "Harpa Concert Hall",
    //     "Perlan"
    //   ],
    //   "local_dishes": [
    //     "Icelandic Lamb",
    //     "Skyr",
    //     "Plokkfiskur"
    //   ],
    //   "activities": [
    //     "Golden Circle tour",
    //     "Whale watching excursion",
    //     "Exploring Laugavegur shopping street"
    //   ]
    // },
    // {
    //   "id": 40,
    //   "name": "St. Petersburg",
    //   "country": "Russia",
    //   "continent": "Europe",
    //   "description": "St. Petersburg is a city known for its rich history, stunning architecture, and cultural heritage. Visit the State Hermitage Museum, explore the Peter and Paul Fortress, and enjoy performances at the Mariinsky Theatre.",
    //   "image": "https://cdn.pixabay.com/photo/2018/09/28/21/28/city-3710275_1280.jpg",
    //   "population": "5.4 million",
    //   "currency": "Russian Ruble (RUB)",
    //   "language": "Russian",
    //   "best_time_to_visit": "June to August",
    //   "top_attractions": [
    //     "State Hermitage Museum",
    //     "Peter and Paul Fortress",
    //     "Church of the Savior on Spilled Blood",
    //     "Nevsky Prospekt"
    //   ],
    //   "local_dishes": [
    //     "Borscht",
    //     "Pelmeni",
    //     "Blini"
    //   ],
    //   "activities": [
    //     "Boat cruise along the Neva River",
    //     "Visit to Catherine Palace in Pushkin",
    //     "Russian ballet performance"
    //   ]
    // },
    // {
    //   "id": 41,
    //   "name": "Stockholm",
    //   "country": "Sweden",
    //   "continent": "Europe",
    //   "description": "Stockholm is a city known for its islands, picturesque waterfront, and Scandinavian design. Visit the Vasa Museum, explore Gamla Stan (Old Town), and enjoy the Swedish concept of 'fika'.",
    //   "image": "https://cdn.pixabay.com/photo/2017/02/20/14/10/stockholm-2082591_1280.jpg",
    //   "population": "975,904",
    //   "currency": "Swedish Krona (SEK)",
    //   "language": "Swedish",
    //   "best_time_to_visit": "June to August",
    //   "top_attractions": [
    //     "Vasa Museum",
    //     "Gamla Stan (Old Town)",
    //     "ABBA Museum",
    //     "Skansen Open-Air Museum"
    //   ],
    //   "local_dishes": [
    //     "Swedish Meatballs",
    //     "Gravlax",
    //     "Kanelbullar (Cinnamon Rolls)"
    //   ],
    //   "activities": [
    //     "Boat tour of Stockholm's archipelago",
    //     "Visit to Fotografiska (Photography Museum)",
    //     "Shopping on Södermalm"
    //   ]
    // },
    // {
    //   "id": 42,
    //   "name": "Lisbon",
    //   "country": "Portugal",
    //   "continent": "Europe",
    //   "description": "Lisbon is a city known for its historic neighborhoods, colorful tiles, and scenic viewpoints. Visit the Belém Tower, explore Alfama district, and enjoy pastéis de nata.",
    //   "image": "https://cdn.pixabay.com/photo/2020/02/24/12/56/lisbon-4876136_1280.jpg",
    //   "population": "547,733",
    //   "currency": "Euro (EUR)",
    //   "language": "Portuguese",
    //   "best_time_to_visit": "March to May, September to October",
    //   "top_attractions": [
    //     "Belém Tower",
    //     "Castelo de São Jorge",
    //     "Tram 28 route",
    //     "Praça do Comércio"
    //   ],
    //   "local_dishes": [
    //     "Bacalhau à Brás",
    //     "Francesinha",
    //     "Arroz de Marisco (Seafood Rice)"
    //   ],
    //   "activities": [
    //     "Ride on Tram 28",
    //     "Visit to LX Factory",
    //     "Day trip to Sintra"
    //   ]
    // },
    // {
    //   "id": 43,
    //   "name": "Santorini",
    //   "country": "Greece",
    //   "continent": "Europe",
    //   "description": "Santorini is a picturesque island known for its stunning sunsets, white-washed buildings, and crystal-clear waters. Visit Oia, explore ancient Akrotiri, and relax on unique volcanic beaches.",
    //   "image": "https://cdn.pixabay.com/photo/2014/08/12/00/01/santorini-416136_1280.jpg",
    //   "population": "15,500",
    //   "currency": "Euro (EUR)",
    //   "language": "Greek",
    //   "best_time_to_visit": "April to October",
    //   "top_attractions": [
    //     "Oia",
    //     "Fira",
    //     "Akrotiri Archaeological Site",
    //     "Red Beach"
    //   ],
    //   "local_dishes": [
    //     "Santorini Tomatokeftedes",
    //     "Fava Santorinis",
    //     "Fresh seafood"
    //   ],
    //   "activities": [
    //     "Sunset cruise around the caldera",
    //     "Wine tasting tour of local vineyards",
    //     "Relaxing on Kamari Beach"
    //   ]
    // },
    // {
    //   "id": 44,
    //   "name": "Ålesund",
    //   "country": "Norway",
    //   "continent": "Europe",
    //   "description": "Ålesund is a charming coastal town known for its Art Nouveau architecture, fjords, and maritime heritage. Visit Ålesund Aquarium, explore the Atlantic Sea Park, and take a fjord cruise.",
    //   "image": "https://cdn.pixabay.com/photo/2019/07/06/06/50/norway-4319790_1280.jpg",
    //   "population": "48,460",
    //   "currency": "Norwegian Krone (NOK)",
    //   "language": "Norwegian",
    //   "best_time_to_visit": "May to August",
    //   "top_attractions": [
    //     "Ålesund Aquarium",
    //     "Atlantic Sea Park",
    //     "Jugendstilsenteret (Art Nouveau Centre)",
    //     "Aksla viewpoint"
    //   ],
    //   "local_dishes": [
    //     "Norwegian Salmon",
    //     "Raspeballer (Potato Dumplings)",
    //     "Lefse (Potato Flatbread)"
    //   ],
    //   "activities": [
    //     "Hiking up Aksla for panoramic views",
    //     "Boat trip through Geirangerfjord",
    //     "Visit to Sunnmøre Museum"
    //   ]
    // },
    // {
    //   "id": 45,
    //   "name": "Jaipur",
    //   "country": "India",
    //   "continent": "Asia",
    //   "description": "Jaipur is a city known for its rich history, royal architecture, and vibrant culture. Visit Amber Fort, explore Hawa Mahal, and shop for traditional textiles and handicrafts.",
    //   "image": "https://cdn.pixabay.com/photo/2018/09/11/17/20/jaipur-3670085_1280.jpg",
    //   "population": "3.1 million",
    //   "currency": "Indian Rupee (INR)",
    //   "language": "Hindi, Rajasthani",
    //   "best_time_to_visit": "October to March",
    //   "top_attractions": [
    //     "Amber Fort",
    //     "Hawa Mahal",
    //     "City Palace",
    //     "Jantar Mantar"
    //   ],
    //   "local_dishes": [
    //     "Dal Baati Churma",
    //     "Gatte ki Sabzi",
    //     "Mawa Kachori"
    //   ],
    //   "activities": [
    //     "Elephant ride to Amber Fort",
    //     "Visit to Nahargarh Fort",
    //     "Shopping in Johari Bazaar"
    //   ]
    // },
    // {
    //   "id": 46,
    //   "name": "Kathmandu",
    //   "country": "Nepal",
    //   "continent": "Asia",
    //   "description": "Kathmandu is a city known for its historic temples, vibrant markets, and breathtaking mountain views. Visit Swayambhunath Stupa, explore Durbar Square, and experience Nepali cuisine.",
    //   "image": "https://cdn.pixabay.com/photo/2017/07/04/05/56/pashupatinath-2470062_1280.jpg",
    //   "population": "1.7 million",
    //   "currency": "Nepalese Rupee (NPR)",
    //   "language": "Nepali",
    //   "best_time_to_visit": "October to April",
    //   "top_attractions": [
    //     "Swayambhunath Stupa",
    //     "Boudhanath Stupa",
    //     "Pashupatinath Temple",
    //     "Thamel"
    //   ],
    //   "local_dishes": [
    //     "Dal Bhat",
    //     "Momos",
    //     "Gundruk"
    //   ],
    //   "activities": [
    //     "Hiking in Shivapuri National Park",
    //     "Exploring Patan Durbar Square",
    //     "Mountain flight to see Mount Everest"
    //   ]
    // },
    // {
    //   "id": 47,
    //   "name": "Beijing",
    //   "country": "China",
    //   "continent": "Asia",
    //   "description": "Beijing is a city known for its historical landmarks, including the Great Wall and the Forbidden City. Visit the Summer Palace, explore Tiananmen Square, and savor Peking duck.",
    //   "image": "https://cdn.pixabay.com/photo/2013/11/28/10/37/forbidden-city-220099_1280.jpg",
    //   "population": "21.5 million",
    //   "currency": "Chinese Yuan (CNY)",
    //   "language": "Mandarin",
    //   "best_time_to_visit": "April to October",
    //   "top_attractions": [
    //     "Great Wall of China",
    //     "Forbidden City",
    //     "Summer Palace",
    //     "Temple of Heaven"
    //   ],
    //   "local_dishes": [
    //     "Peking Duck",
    //     "Jianbing",
    //     "Hot Pot"
    //   ],
    //   "activities": [
    //     "Visit to the Lama Temple",
    //     "Hutong tour by rickshaw",
    //     "Kung Fu show at Red Theatre"
    //   ]
    // },
    // {
    //   "id": 48,
    //   "name": "Mumbai",
    //   "country": "India",
    //   "continent": "Asia",
    //   "description": "Mumbai is a bustling metropolis known for its Bollywood film industry, historic landmarks, and diverse street food. Visit Gateway of India, explore Marine Drive, and sample Vada Pav.",
    //   "image": "https://cdn.pixabay.com/photo/2010/11/29/india-294_1280.jpg",
    //   "population": "20.4 million",
    //   "currency": "Indian Rupee (INR)",
    //   "language": "Marathi, Hindi",
    //   "best_time_to_visit": "November to February",
    //   "top_attractions": [
    //     "Gateway of India",
    //     "Marine Drive",
    //     "Chhatrapati Shivaji Terminus",
    //     "Bandra-Worli Sea Link"
    //   ],
    //   "local_dishes": [
    //     "Vada Pav",
    //     "Pav Bhaji",
    //     "Pani Puri"
    //   ],
    //   "activities": [
    //     "Bollywood studio tour",
    //     "Elephanta Caves visit",
    //     "Street food tour in Chowpatty"
    //   ]
    // },
    // {
    //   "id": 49,
    //   "name": "Jerusalem",
    //   "country": "Israel",
    //   "continent": "Asia",
    //   "description": "Jerusalem is a city of religious significance, with sites sacred to Judaism, Christianity, and Islam. Visit the Western Wall, explore the Old City, and experience the vibrant markets.",
    //   "image": "https://cdn.pixabay.com/photo/2019/10/31/18/56/jerusalem-4592574_1280.jpg",
    //   "population": "919,438",
    //   "currency": "Israeli New Shekel (ILS)",
    //   "language": "Hebrew, Arabic",
    //   "best_time_to_visit": "April to May, September to November",
    //   "top_attractions": [
    //     "Western Wall",
    //     "Church of the Holy Sepulchre",
    //     "Dome of the Rock",
    //     "Mahane Yehuda Market"
    //   ],
    //   "local_dishes": [
    //     "Falafel",
    //     "Hummus",
    //     "Shawarma"
    //   ],
    //   "activities": [
    //     "Walking the Ramparts of the Old City",
    //     "Visit to Yad Vashem Holocaust Memorial",
    //     "Cable car ride to Mount of Olives"
    //   ]
    // },
    // {
    //   "id": 50,
    //   "name": "Krakow",
    //   "country": "Poland",
    //   "continent": "Europe",
    //   "description": "Krakow is a city known for its rich history, medieval architecture, and vibrant arts scene. Visit Wawel Castle, explore the Old Town, and discover the poignant history of Auschwitz-Birkenau.",
    //   "image": "https://cdn.pixabay.com/photo/2019/08/29/20/07/krakow-4439925_1280.jpg",
    //   "population": "779,115",
    //   "currency": "Polish Złoty (PLN)",
    //   "language": "Polish",
    //   "best_time_to_visit": "April to June, September to October",
    //   "top_attractions": [
    //     "Wawel Castle",
    //     "Main Market Square",
    //     "Auschwitz-Birkenau Memorial and Museum",
    //     "St. Mary's Basilica"
    //   ],
    //   "local_dishes": [
    //     "Pierogi",
    //     "Kielbasa",
    //     "Obwarzanek Krakowski (Krakow Bagel)"
    //   ],
    //   "activities": [
    //     "Walking tour of Krakow's historic sites",
    //     "Visit to Wieliczka Salt Mine",
    //     "Enjoying local jazz scene"
    //   ]
    // }
  ]

  export default blogData;