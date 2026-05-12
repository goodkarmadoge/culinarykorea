const restaurants = [
  {
    name: "Andongjip Son Kalguksi",
    city: "Seoul",
    price: "$",
    chef: "Lee Mi-ryeong, Auntie Omakase #1",
    showChef: "Celebrity Chef: Lee Mi-ryeong, known on Culinary Class Wars as Auntie Omakase #1.",
    categories: ["Culinary Class Wars", "Social Heat"],
    address: "B1, 3 Gosanja-ro 36-gil, Dongdaemun-gu, Seoul",
    story: "A market noodle shop tied to one of the show's most emotional arcs: rebuilding through kalguksu after family hardship.",
    signature: "Hand-cut kalguksu, cabbage pancakes, boiled pork",
    reservationUrl: "https://english.visitseoul.net/restaurants/andongjip-sonkalguksi/ENP32dncy",
    platform: "Walk-in / phone check",
    release: { type: "walkin", urgency: "green", label: "No reliable online booking window found. Plan an opening-time visit.", lead: "Go at opening during your trip." },
    confidence: "Current guides conflict on Sunday hours, so verify day-of before crossing town.",
    coordinates: [37.5787, 127.0396],
    map: [88, 250]
  },
  {
    name: "Happy Drinking Table",
    city: "Seoul",
    price: "$$",
    chef: "Lee Mi-ryeong, Auntie Omakase #1",
    showChef: "Celebrity Chef: Lee Mi-ryeong, known on Culinary Class Wars as Auntie Omakase #1.",
    categories: ["Culinary Class Wars"],
    address: "341 Nohae-ro, Dobong-gu, Seoul",
    story: "The intimate omakase-style sibling to Auntie Omakase's humble noodle shop, built around seasonal Korean drinking food.",
    signature: "Korean omakase drinking table",
    reservationUrl: "tel:+821075392020",
    platform: "Phone only",
    release: { type: "daysBefore", days: 3, urgency: "red", label: "Call 3 working days before, reportedly between 2 PM and 5 PM Korea time.", lead: "Call three working days before your meal." },
    confidence: "Phone timing comes from Korean travel/community listings; treat it as tactical guidance.",
    coordinates: [37.6541, 127.0372],
    map: [160, 155]
  },
  {
    name: "Deepin",
    city: "Seoul",
    price: "$$",
    chef: "Yoon Nam-no, Cooking Maniac",
    showChef: "Celebrity Chef: Yoon Nam-no, known on Culinary Class Wars as Cooking Maniac.",
    categories: ["Culinary Class Wars", "Social Heat"],
    address: "1F, 411 Toegye-ro, Jung-gu, Seoul",
    story: "A natural wine bar from the show's fourth-place finalist, with relaxed energy and sharp bistro cooking.",
    signature: "Scallops, gnocchi, lamb, natural wine",
    reservationUrl: "https://www.catchtable.net/shop/deepin",
    platform: "CatchTable",
    release: { type: "watch", days: 30, urgency: "yellow", label: "Book ahead on CatchTable; exact release window not published in accessible sources.", lead: "Start checking 30 days before arrival and turn on alerts." },
    confidence: "Reservation link and hours were sourced from Visit Korea / CatchTable guide.",
    coordinates: [37.5652, 127.0186],
    map: [222, 195]
  },
  {
    name: "Via Toledo Pasta Bar",
    city: "Seoul",
    price: "$$$",
    chef: "Kwon Sung-jun, Napoli Matfia",
    showChef: "Celebrity Chef: Kwon Sung-jun, known on Culinary Class Wars as Napoli Matfia and the Season 1 winner.",
    categories: ["Culinary Class Wars", "Social Heat", "Fine Dining"],
    address: "7-2 Wonhyo-ro 83-gil, Yongsan-gu, Seoul",
    story: "The Season 1 winner's Italian counter became a post-finale phenomenon after fans overwhelmed reservation systems.",
    signature: "Seasonal handmade pasta with Korean-Italian inflection",
    reservationUrl: "https://www.catchtable.net/search?keyword=Via%20Toledo%20Pasta%20Bar",
    platform: "CatchTable",
    release: { type: "watch", days: 45, urgency: "red", label: "Use CatchTable alerts. Public sources confirm extreme demand but not a stable release rule.", lead: "Set alerts 45 days before arrival; check cancellations daily." },
    confidence: "Demand spike is well documented; release timing should be verified on CatchTable.",
    coordinates: [37.5388, 126.9645],
    map: [288, 118]
  },
  {
    name: "Trid",
    city: "Seoul",
    price: "$$$",
    chef: "Kang Seung-won, Triple Star",
    showChef: "Celebrity Chef: Kang Seung-won, known on Culinary Class Wars as Triple Star.",
    categories: ["Culinary Class Wars", "Fine Dining"],
    address: "2F, 16 Seolleung-ro 162-gil, Gangnam-gu, Seoul",
    story: "Triple Star brings Mosu and Benu training into a seasonal Korean tasting menu with French technique.",
    signature: "Seasonal tasting menu",
    reservationUrl: "https://www.catchtable.net/shop/trid",
    platform: "CatchTable",
    release: { type: "watch", days: 45, urgency: "red", label: "Reservation-only via CatchTable. Check early and monitor cancellations.", lead: "Start checking 45 days before arrival; expect cancellation hunting." },
    confidence: "Official site confirms CatchTable-only booking and cancellation policy, but not release cadence.",
    coordinates: [37.5258, 127.0397],
    map: [360, 36]
  },
  {
    name: "CHOI.",
    city: "Seoul",
    price: "$$$",
    chef: "Choi Hyun-seok",
    showChef: "Celebrity Chef: Choi Hyun-seok, a White Spoon chef on Culinary Class Wars.",
    categories: ["Culinary Class Wars", "Fine Dining"],
    address: "3F, 457 Dosan-daero, Gangnam-gu, Seoul",
    story: "A polished way to taste the celebrity chef's creative, theatrical Korean-European style.",
    signature: "Lunch and dinner course menus, show-inspired dishes",
    reservationUrl: "https://www.catchtable.net/shop/choidot",
    platform: "CatchTable",
    release: { type: "watch", days: 30, urgency: "yellow", label: "Reserve through CatchTable. Accessible sources recommend booking well ahead.", lead: "Check 30 days before arrival and again one week before." },
    confidence: "Booking link and menu pricing sourced from Visit Korea / CatchTable guide.",
    coordinates: [37.5237, 127.0445],
    map: [432, 132]
  },
  {
    name: "Neungdong Minari",
    city: "Seoul",
    price: "$",
    chef: "House team",
    categories: ["Social Heat"],
    address: "28 Hangang-daero 40-gil, Yongsan-gu, Seoul",
    story: "A social-feed magnet for gomtang buried under a vivid mound of minari, with Michelin Bib Gourmand validation.",
    signature: "Minari gomtang, beef tartare bibimbap",
    reservationUrl: "https://www.catchtable.net/search?keyword=%EB%8A%A5%EB%8F%99%EB%AF%B8%EB%82%98%EB%A6%AC",
    platform: "Walk-in / CatchTable waitlist check",
    release: { type: "walkin", urgency: "green", label: "Plan for queues; check CatchTable or local waitlist before arrival.", lead: "No dependable advance booking. Go early or outside peak meal times." },
    confidence: "Viral/Bib Gourmand status sourced from current travel and Michelin-related listings.",
    coordinates: [37.5304, 126.9688],
    map: [510, 86]
  },
  {
    name: "Mosu",
    city: "Seoul",
    price: "$$$$",
    chef: "Sung Anh",
    showChef: "Celebrity Chef: Sung Anh, a Culinary Class Wars judge.",
    categories: ["Culinary Class Wars", "Fine Dining"],
    address: "4 Hoenamu-ro 41-gil, Yongsan-gu, Seoul",
    story: "The judge's San Francisco-to-Seoul restaurant tells Korean memory through globally trained fine-dining technique.",
    signature: "Dinner tasting menu",
    reservationUrl: "https://mosuseoul.com",
    platform: "Official site / CatchTable visibility",
    release: { type: "watch", days: 90, urgency: "red", label: "Monitor official booking drops. A 2025 release sold roughly three months of seats in one day.", lead: "Start monitoring 90 days before arrival; book immediately when seats drop." },
    confidence: "Korea JoongAng Daily reported 2025 CatchTable visibility and dinner pricing; current cadence may shift.",
    coordinates: [37.5399, 126.9965],
    map: [586, 44]
  },
  {
    name: "Mingles",
    city: "Seoul",
    price: "$$$$",
    chef: "Kang Mingoo",
    categories: ["Fine Dining"],
    address: "2F, 19 Dosan-daero 67-gil, Gangnam-gu, Seoul",
    story: "Seoul's destination modern Korean table, known for jang, regional ingredients, and top international rankings.",
    signature: "Modern Korean tasting menu",
    reservationUrl: "https://www.mingles.kr",
    platform: "Official site / booking inquiry",
    release: { type: "monthBefore", urgency: "yellow", label: "Historical diner reports indicate month-ahead releases; verify on the official site.", lead: "Check from the first day of the month before your trip." },
    confidence: "Accolades are current via 50 Best; release timing is lower-confidence and should be checked.",
    coordinates: [37.5253, 127.0441],
    map: [640, 108]
  },
  {
    name: "Onjium",
    city: "Seoul",
    price: "$$$$",
    chef: "Cho Eun-hee and Park Sung-bae",
    categories: ["Fine Dining"],
    address: "4F, 49 Hyoja-ro, Jongno-gu, Seoul",
    story: "A culinary studio inside a Korean heritage institute, reimagining centuries-old recipes for today.",
    signature: "Research-led Korean heritage tasting menu",
    reservationUrl: "https://www.catchtable.net/search?keyword=Onjium",
    platform: "CatchTable / official channels",
    release: { type: "watch", days: 45, urgency: "yellow", label: "Reservations essential. Exact public release window not found in accessible sources.", lead: "Start checking 45 days before arrival; keep backup dates flexible." },
    confidence: "Hours and concept sourced from Seoul tourism and Asia's 50 Best.",
    coordinates: [37.5806, 126.9732],
    map: [686, 62]
  },
  {
    name: "Jungsik",
    city: "Seoul",
    price: "$$$$",
    chef: "Yim Jung-sik",
    categories: ["Fine Dining"],
    address: "11 Seolleung-ro 158-gil, Gangnam-gu, Seoul",
    story: "A defining modern Korean fine-dining room that helped make New Korean cuisine a global category.",
    signature: "Contemporary Korean tasting menu",
    reservationUrl: "https://www.jungsik.kr/reservation",
    platform: "Official site",
    release: { type: "watch", days: 60, urgency: "red", label: "Use the official reservation channel and check as soon as your dates are known.", lead: "Start checking 60 days before arrival; book the moment a preferred date appears." },
    confidence: "Release timing can vary by season, so verify the official reservation page before locking flights around it.",
    coordinates: [37.5253, 127.0445],
    map: [706, 116]
  },
  {
    name: "The 7th Door",
    city: "Seoul",
    price: "$$$$",
    chef: "Kim Dae-chun",
    categories: ["Fine Dining"],
    address: "4F, 16 Dosan-daero 67-gil, Gangnam-gu, Seoul",
    story: "A precise Gangnam tasting counter built around fermentation, aging, and restrained modern Korean technique.",
    signature: "Fermentation-led Korean tasting menu",
    reservationUrl: "https://www.catchtable.net/search?keyword=The%207th%20Door",
    platform: "CatchTable",
    release: { type: "watch", days: 45, urgency: "red", label: "Small dining room and Michelin demand make prime dates disappear quickly.", lead: "Set CatchTable alerts 45 days before arrival and check cancellations daily." },
    confidence: "Demand is high for Michelin-starred Seoul dates; exact release cadence should be checked on CatchTable.",
    coordinates: [37.5229, 127.0388],
    map: [720, 136]
  },
  {
    name: "Eatanic Garden",
    city: "Seoul",
    price: "$$$$",
    chef: "Son Jong-won",
    categories: ["Fine Dining", "Social Heat"],
    address: "36F, Josun Palace, 231 Teheran-ro, Gangnam-gu, Seoul",
    story: "A dramatic sky-high fine-dining room inside Josun Palace, built around polished Korean seasonal storytelling.",
    signature: "Seasonal Korean tasting menu",
    reservationUrl: "https://www.catchtable.net/search?keyword=Eatanic%20Garden",
    platform: "CatchTable",
    release: { type: "watch", days: 60, urgency: "red", label: "Luxury hotel seating and Michelin attention make advance booking important.", lead: "Start checking 60 days before arrival and keep backup dinner times ready." },
    confidence: "Reserve through current hotel or CatchTable listings; release windows can shift around holidays.",
    coordinates: [37.5105, 127.0600],
    map: [738, 176]
  },
  {
    name: "Solbam",
    city: "Seoul",
    price: "$$$$",
    chef: "Eom Tae-jun",
    categories: ["Fine Dining"],
    address: "4F, 7 Dosan-daero 37-gil, Gangnam-gu, Seoul",
    story: "A quiet, exacting modern Korean restaurant with a loyal following for elegant seasonal pacing.",
    signature: "Modern Korean tasting menu",
    reservationUrl: "https://www.catchtable.net/search?keyword=Solbam",
    platform: "CatchTable",
    release: { type: "watch", days: 45, urgency: "red", label: "Prime dinner seats are limited; treat this as a must-book anchor.", lead: "Turn on alerts 45 days before arrival and reserve immediately if a slot opens." },
    confidence: "Use CatchTable or the restaurant's linked channel to confirm current availability.",
    coordinates: [37.5237, 127.0379],
    map: [752, 146]
  },
  {
    name: "Kwonsooksoo",
    city: "Seoul",
    price: "$$$$",
    chef: "Kwon Woo-joong",
    categories: ["Fine Dining"],
    address: "4F, 37 Apgujeong-ro 80-gil, Gangnam-gu, Seoul",
    story: "A refined Korean table known for courtly technique, seasonal ingredients, and polished hospitality.",
    signature: "Traditional Korean tasting course",
    reservationUrl: "https://www.catchtable.net/search?keyword=Kwonsooksoo",
    platform: "CatchTable",
    release: { type: "watch", days: 45, urgency: "yellow", label: "Book well ahead for weekends; weekday lunches may be more flexible.", lead: "Begin checking 45 days before arrival, especially for Friday or Saturday." },
    confidence: "Public listings confirm booking demand, but exact release rules are not consistently published.",
    coordinates: [37.5230, 127.0402],
    map: [764, 128]
  },
  {
    name: "Evett",
    city: "Seoul",
    price: "$$$$",
    chef: "Joseph Lidgerwood",
    categories: ["Fine Dining"],
    address: "1F, 45 Dosan-daero 45-gil, Gangnam-gu, Seoul",
    story: "An Australian chef's Seoul restaurant that interprets Korean ingredients through fermentation, memory, and surprise.",
    signature: "Korean ingredient tasting menu",
    reservationUrl: "https://www.catchtable.net/search?keyword=Evett",
    platform: "CatchTable",
    release: { type: "watch", days: 45, urgency: "yellow", label: "Reservations are essential, with better odds if you can take early or late seatings.", lead: "Start checking 45 days before arrival; monitor cancellations in the final week." },
    confidence: "Booking channel and availability should be confirmed through current CatchTable listings.",
    coordinates: [37.5237, 127.0371],
    map: [772, 156]
  },
  {
    name: "Alla Prima",
    city: "Seoul",
    price: "$$$$",
    chef: "Kim Jin-hyuk",
    categories: ["Fine Dining"],
    address: "13 Hakdong-ro 17-gil, Gangnam-gu, Seoul",
    story: "A chef-driven tasting room blending Korean seasonality with Japanese and European fine-dining discipline.",
    signature: "Seasonal tasting menu",
    reservationUrl: "https://www.catchtable.net/search?keyword=Alla%20Prima",
    platform: "CatchTable",
    release: { type: "watch", days: 45, urgency: "yellow", label: "Reserve ahead for dinner; lunch can be a useful fallback.", lead: "Check 45 days before arrival and keep lunch options open." },
    confidence: "Public sources confirm high demand; verify the active booking channel before your date.",
    coordinates: [37.5226, 127.0427],
    map: [784, 116]
  },
  {
    name: "Soigne",
    city: "Seoul",
    price: "$$$$",
    chef: "Lee Jun",
    categories: ["Fine Dining"],
    address: "2F, 652 Gangnam-daero, Gangnam-gu, Seoul",
    story: "A narrative tasting menu restaurant organized like culinary episodes, with a long-running Seoul fan base.",
    signature: "Episode-style tasting menu",
    reservationUrl: "https://www.catchtable.net/search?keyword=Soigne",
    platform: "CatchTable",
    release: { type: "watch", days: 45, urgency: "yellow", label: "Book in advance, especially for new menu episodes and weekend dinners.", lead: "Start checking 45 days before arrival and recheck after menu changes." },
    confidence: "Exact opening windows are not consistently visible in public sources.",
    coordinates: [37.5011, 127.0253],
    map: [802, 190]
  },
  {
    name: "Zero Complex",
    city: "Seoul",
    price: "$$$$",
    chef: "Lee Choong-hu",
    categories: ["Fine Dining"],
    address: "Hannam-dong, Yongsan-gu, Seoul",
    story: "A minimalist tasting counter focused on clean lines, produce, and contemporary Korean-European restraint.",
    signature: "Seasonal tasting menu",
    reservationUrl: "https://www.catchtable.net/search?keyword=Zero%20Complex",
    platform: "CatchTable",
    release: { type: "watch", days: 30, urgency: "yellow", label: "Monitor for openings; flexibility helps with this small-format fine-dining room.", lead: "Start checking 30 days before arrival and keep alternate dates ready." },
    confidence: "Public booking details change periodically; confirm through the current booking channel.",
    coordinates: [37.5416, 126.9904],
    map: [554, 172]
  },
  {
    name: "Born and Bred",
    city: "Seoul",
    price: "$$$$",
    chef: "Jung Sang-won and team",
    categories: ["Fine Dining", "Social Heat"],
    address: "1 Majang-ro 42-gil, Seongdong-gu, Seoul",
    story: "A destination for premium Korean beef, from butcher counter energy to serious omakase-style hanwoo tasting.",
    signature: "Hanwoo beef omakase",
    reservationUrl: "https://www.catchtable.net/search?keyword=Born%20and%20Bred",
    platform: "CatchTable",
    release: { type: "watch", days: 60, urgency: "red", label: "Hanwoo omakase seats are limited and widely chased by visiting diners.", lead: "Start checking 60 days before arrival and book immediately for prime dinner slots." },
    confidence: "Availability varies by room and format; confirm the exact branch and course before booking.",
    coordinates: [37.5440, 127.0487],
    map: [502, 144]
  },
  {
    name: "Kojima",
    city: "Seoul",
    price: "$$$$",
    chef: "Park Kyung-jae",
    categories: ["Fine Dining"],
    address: "6F, Boon the Shop, 21 Apgujeong-ro 60-gil, Gangnam-gu, Seoul",
    story: "One of Seoul's benchmark sushi counters, prized for exacting seafood sourcing and a highly limited seat count.",
    signature: "Sushi omakase",
    reservationUrl: "https://www.catchtable.net/search?keyword=Kojima",
    platform: "CatchTable",
    release: { type: "watch", days: 60, urgency: "red", label: "Small counter, luxury demand, and limited seatings make this an ASAP booking.", lead: "Set alerts 60 days before arrival and check cancellations frequently." },
    confidence: "Use the active reservation channel to confirm current seating rules and deposit terms.",
    coordinates: [37.5250, 127.0462],
    map: [656, 126]
  },
  {
    name: "La Yeon",
    city: "Seoul",
    price: "$$$$",
    chef: "Kim Sung-il and The Shilla Seoul team",
    categories: ["Fine Dining"],
    address: "23F, The Shilla Seoul, 249 Dongho-ro, Jung-gu, Seoul",
    story: "A landmark hotel restaurant for formal Korean fine dining, known for elegant service and classic technique.",
    signature: "Korean course menu",
    reservationUrl: "https://www.shillahotels.com/seoul/dining/viewDining.do?contId=KRN",
    platform: "Official hotel site",
    release: { type: "watch", days: 45, urgency: "yellow", label: "Hotel dining reservations should be made early for skyline dinner slots.", lead: "Check 45 days before arrival and call the hotel if online slots are unclear." },
    confidence: "Use the official hotel page to verify operating days and reservation rules.",
    coordinates: [37.5559, 127.0052],
    map: [454, 164]
  },
  {
    name: "Myeongdong Kyoja",
    city: "Seoul",
    price: "$",
    chef: "House team",
    categories: ["Social Heat"],
    address: "29 Myeongdong 10-gil, Jung-gu, Seoul",
    story: "A classic noodle stop with global guidebook fame and constant traveler traffic in the center of Myeongdong.",
    signature: "Kalguksu and mandu",
    reservationUrl: "https://www.google.com/maps/search/?api=1&query=Myeongdong%20Kyoja%20Seoul",
    platform: "Walk-in / map listing",
    release: { type: "walkin", urgency: "green", label: "No advance reservation needed; queues move quickly but peak lunch is busy.", lead: "Plan as a walk-in and avoid the exact lunch rush if possible." },
    confidence: "Treat as a tactical walk-in rather than a reservation target.",
    coordinates: [37.5626, 126.9850],
    map: [400, 186]
  },
  {
    name: "Woo Lae Oak",
    city: "Seoul",
    price: "$$",
    chef: "House team",
    categories: ["Social Heat"],
    address: "62-29 Changgyeonggung-ro, Jung-gu, Seoul",
    story: "A legendary Seoul naengmyeon and barbecue room that remains a reference point for old-school Korean dining.",
    signature: "Pyongyang naengmyeon and bulgogi",
    reservationUrl: "https://www.google.com/maps/search/?api=1&query=Woo%20Lae%20Oak%20Seoul",
    platform: "Walk-in / phone check",
    release: { type: "walkin", urgency: "green", label: "Walk-ins are common, but large groups should phone ahead when possible.", lead: "Go early for lunch or reserve by phone if traveling with a group." },
    confidence: "Online reservation rules are not consistently available in English.",
    coordinates: [37.5683, 126.9989],
    map: [426, 158]
  },
  {
    name: "Gwangjang Market Food Alley",
    city: "Seoul",
    price: "$",
    chef: "Market vendors",
    categories: ["Social Heat"],
    address: "88 Changgyeonggung-ro, Jongno-gu, Seoul",
    story: "A high-energy market crawl for bindaetteok, kimbap, knife-cut noodles, and the street-food scenes travelers save all year.",
    signature: "Bindaetteok, mayak kimbap, kalguksu",
    reservationUrl: "https://www.google.com/maps/search/?api=1&query=Gwangjang%20Market%20Seoul",
    platform: "Walk-in",
    release: { type: "walkin", urgency: "green", label: "No booking required; timing matters more than reservation strategy.", lead: "Go before peak dinner or late afternoon for better movement through the aisles." },
    confidence: "Vendor hours vary, so use the map listing on the day of your visit.",
    coordinates: [37.5701, 126.9996],
    map: [438, 148]
  },
  {
    name: "London Bagel Museum Anguk",
    city: "Seoul",
    price: "$$",
    chef: "House team",
    categories: ["Social Heat"],
    address: "20 Bukchon-ro 4-gil, Jongno-gu, Seoul",
    story: "A viral bakery-cafe whose lines became part of the Seoul itinerary for social-media food travelers.",
    signature: "Bagels, scallion cream cheese, cafe breakfast",
    reservationUrl: "https://www.google.com/maps/search/?api=1&query=London%20Bagel%20Museum%20Anguk",
    platform: "Queue / local waitlist",
    release: { type: "walkin", urgency: "yellow", label: "Treat it like a queue strategy, not a reservation: arrive early or use any available local waitlist.", lead: "Arrive near opening if this is a must-hit stop." },
    confidence: "Queue systems can change, so check the latest local listing before going.",
    coordinates: [37.5793, 126.9868],
    map: [378, 122]
  },
  {
    name: "Cafe Onion Anguk",
    city: "Seoul",
    price: "$$",
    chef: "House team",
    categories: ["Social Heat"],
    address: "5 Gyedong-gil, Jongno-gu, Seoul",
    story: "A hanok cafe with enduring visual pull, making it a reliable breakfast or coffee stop near Bukchon.",
    signature: "Pastries, coffee, pandoro",
    reservationUrl: "https://www.google.com/maps/search/?api=1&query=Cafe%20Onion%20Anguk%20Seoul",
    platform: "Walk-in",
    release: { type: "walkin", urgency: "green", label: "No advance booking needed, but seating is easier off-peak.", lead: "Go early morning or mid-afternoon for a calmer visit." },
    confidence: "Opening hours and wait policies can change by branch.",
    coordinates: [37.5778, 126.9866],
    map: [366, 132]
  },
  {
    name: "Geumdwaeji Sikdang",
    city: "Seoul",
    price: "$$",
    chef: "House team",
    categories: ["Social Heat"],
    address: "149 Dasan-ro, Jung-gu, Seoul",
    story: "A pork barbecue favorite amplified by Michelin Bib Gourmand attention and celebrity traveler lore.",
    signature: "Aged pork barbecue",
    reservationUrl: "https://www.google.com/maps/search/?api=1&query=Geumdwaeji%20Sikdang%20Seoul",
    platform: "Queue / phone check",
    release: { type: "walkin", urgency: "yellow", label: "Expect waits; arrive before peak meal times or check same-day queue options.", lead: "Plan an early dinner and keep a backup nearby." },
    confidence: "Reservation and queue rules are not reliably published in English.",
    coordinates: [37.5570, 127.0118],
    map: [470, 184]
  },
  {
    name: "Hadongkwan",
    city: "Seoul",
    price: "$",
    chef: "House team",
    categories: ["Social Heat"],
    address: "12 Myeongdong 9-gil, Jung-gu, Seoul",
    story: "A historic gomtang house where the order is simple, fast, and deeply tied to Seoul breakfast culture.",
    signature: "Gomtang beef soup",
    reservationUrl: "https://www.google.com/maps/search/?api=1&query=Hadongkwan%20Seoul",
    platform: "Walk-in",
    release: { type: "walkin", urgency: "green", label: "No reservation needed; go earlier in the day because service can end after sellout.", lead: "Plan this as a breakfast or early lunch stop." },
    confidence: "Hours can vary by day and sellout, so verify before heading over.",
    coordinates: [37.5644, 126.9848],
    map: [390, 176]
  },
  {
    name: "SHIA",
    city: "Washington, D.C.",
    price: "$$$$",
    chef: "Edward Lee",
    showChef: "Celebrity Chef: Edward Lee, Culinary Class Wars runner-up.",
    categories: ["Culinary Class Wars", "Fine Dining", "Social Heat"],
    address: "1252 4th St NE, Washington, D.C.",
    story: "Edward Lee's nonprofit modern Korean restaurant treats fine dining as sustainability research and cultural storytelling.",
    signature: "Five- or seven-course Hansik tasting menu",
    reservationUrl: "https://www.opentable.com/r/shia-restaurant-washington",
    platform: "OpenTable",
    release: { type: "daysBefore", days: 60, urgency: "red", label: "Reservations release 60 days in advance at 5 PM Eastern.", lead: "Book exactly 60 days before your meal at 5 PM Eastern." },
    confidence: "Exact release window comes from SHIA's official FAQ.",
    coordinates: [38.9074, -76.9992],
    map: [88, 250]
  }
];

const mediaByName = {
  "Andongjip Son Kalguksi": {
    image: "https://ajfxrnatbinyjjcsbhfs.supabase.co/storage/v1/object/public/restaurant-images/restaurants/andongjip-son-kalguksi.jpg",
    credit: "EatingSeoul"
  },
  "Happy Drinking Table": {
    image: "https://english.seoul.go.kr/wp-content/themes/seoul-e/assets/images/food/kit-9-2.jpg",
    chefImage: "https://english.seoul.go.kr/wp-content/themes/seoul-e/assets/images/food/c-kim.png",
    credit: "Seoul Metropolitan Government / CatchTable"
  },
  "Deepin": {
    image: "https://english.seoul.go.kr/wp-content/themes/seoul-e/assets/images/food/kit-3-2.jpg",
    chefImage: "https://english.seoul.go.kr/wp-content/themes/seoul-e/assets/images/food/c-yoon.png",
    credit: "Seoul Metropolitan Government / CatchTable"
  },
  "Via Toledo Pasta Bar": {
    image: "https://english.seoul.go.kr/wp-content/themes/seoul-e/assets/images/food/kit-1-2.jpg",
    chefImage: "https://english.seoul.go.kr/wp-content/themes/seoul-e/assets/images/food/c-gwon.png",
    credit: "Seoul Metropolitan Government / CatchTable"
  },
  "Trid": {
    image: "https://english.seoul.go.kr/wp-content/themes/seoul-e/assets/images/food/kit-2-2.jpg",
    chefImage: "https://english.seoul.go.kr/wp-content/themes/seoul-e/assets/images/food/c-kang.png",
    credit: "Seoul Metropolitan Government / CatchTable"
  },
  "CHOI.": {
    image: "https://english.seoul.go.kr/wp-content/themes/seoul-e/assets/images/food/kit-12-2.jpg",
    chefImage: "https://english.seoul.go.kr/wp-content/themes/seoul-e/assets/images/food/c-choi.png",
    credit: "Seoul Metropolitan Government / CatchTable"
  },
  "Neungdong Minari": {
    image: "https://koreaeats.soundedfun.dev/photos/neungdongminari/3.webp",
    credit: "KoreaEats"
  },
  "Mosu": {
    image: "https://www.theworlds50best.com/discovery/filestore/jpg/Mosu-Seoul-South%20Korea-1.jpg",
    credit: "50 Best Discovery"
  },
  "Mingles": {
    image: "https://www.theworlds50best.com/discovery/filestore/jpg/Mingles-Seoul-Korea-fb.jpg",
    credit: "50 Best Discovery"
  },
  "Onjium": {
    image: "https://www.theworlds50best.com/discovery/filestore/jpg/onjium-seoul-fb.jpg",
    credit: "50 Best Discovery"
  },
  "Jungsik": {
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
    credit: "Full-color dining reference"
  },
  "The 7th Door": {
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
    credit: "Full-color tasting menu reference"
  },
  "Eatanic Garden": {
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    credit: "Full-color restaurant reference"
  },
  "Solbam": {
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1200&q=80",
    credit: "Full-color Korean dining reference"
  },
  "Kwonsooksoo": {
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80",
    credit: "Full-color plated course reference"
  },
  "Evett": {
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80",
    credit: "Full-color ingredient reference"
  },
  "Alla Prima": {
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1200&q=80",
    credit: "Full-color omakase reference"
  },
  "Soigne": {
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=1200&q=80",
    credit: "Full-color dining reference"
  },
  "Zero Complex": {
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    credit: "Full-color seasonal plate reference"
  },
  "Born and Bred": {
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1200&q=80",
    credit: "Full-color beef dining reference"
  },
  "Kojima": {
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=1200&q=80",
    credit: "Full-color sushi reference"
  },
  "La Yeon": {
    image: "https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?auto=format&fit=crop&w=1200&q=80",
    credit: "Full-color Korean table reference"
  },
  "Myeongdong Kyoja": {
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80",
    credit: "Full-color noodle reference"
  },
  "Woo Lae Oak": {
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1200&q=80",
    credit: "Full-color Korean barbecue reference"
  },
  "Gwangjang Market Food Alley": {
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    credit: "Full-color market food reference"
  },
  "London Bagel Museum Anguk": {
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    credit: "Full-color bakery reference"
  },
  "Cafe Onion Anguk": {
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
    credit: "Full-color cafe reference"
  },
  "Geumdwaeji Sikdang": {
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1200&q=80",
    credit: "Full-color pork barbecue reference"
  },
  "Hadongkwan": {
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80",
    credit: "Full-color soup reference"
  },
  "SHIA": {
    image: "https://shiarestaurant.org/wp-content/uploads/2025/10/header-about-1.jpg",
    credit: "SHIA"
  }
};

const grid = document.querySelector("#restaurantGrid");
const form = document.querySelector("#tripForm");
const cityInput = document.querySelector("#cityInput");
const arrivalInput = document.querySelector("#arrivalInput");
const departureInput = document.querySelector("#departureInput");
const visibleCount = document.querySelector("#visibleCount");
const urgentCount = document.querySelector("#urgentCount");
const fineCount = document.querySelector("#fineCount");
const routeTitle = document.querySelector("#routeTitle");
const routeSummary = document.querySelector("#routeSummary");
const mapLinks = document.querySelector("#mapLinks");
const filterButtons = [...document.querySelectorAll(".filter-button")];
let restaurantMap;
let markerLayer;

const today = new Date();
let activeFilter = "all";
let trip = {
  city: "Seoul",
  arrival: addDays(today, 45),
  departure: addDays(today, 50)
};

arrivalInput.value = toInputDate(trip.arrival);
departureInput.value = toInputDate(trip.departure);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    render();
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  trip = {
    city: cityInput.value,
    arrival: parseDate(arrivalInput.value) || trip.arrival,
    departure: parseDate(departureInput.value) || trip.departure
  };
  render();
});

function render() {
  const selected = restaurants.filter((restaurant) => {
    const cityMatch = trip.city === "All" || restaurant.city === trip.city;
    const filterMatch = activeFilter === "all" || restaurant.categories.includes(activeFilter) || restaurant.price === activeFilter;
    return cityMatch && filterMatch;
  });

  visibleCount.textContent = selected.length;
  fineCount.textContent = selected.filter((item) => item.categories.includes("Fine Dining")).length;
  urgentCount.textContent = selected.filter((item) => getBookingStatus(item).level === "red").length;

  routeTitle.textContent = trip.city === "All" ? "Cross-city tasting route" : `${trip.city} food route`;
  routeSummary.textContent = `${formatDate(trip.arrival)} to ${formatDate(trip.departure)}. ${buildRouteSummary(selected)}`;

  renderInteractiveMap(selected);
  renderCards(selected);
}

function renderCards(selected) {
  const priceLabels = {
    "$": "Easy bites",
    "$$": "Casual-special",
    "$$$": "Hard-to-book anchors",
    "$$$$": "Destination tasting menus"
  };
  const sections = ["$", "$$", "$$$", "$$$$"].map((price) => {
    const items = selected.filter((restaurant) => restaurant.price === price);
    if (!items.length) return "";

    return `
      <section class="price-section">
        <div>
          <h2>${price} ${priceLabels[price]}</h2>
          <p>Grouped by price point, with chef identity and the story hook visible on every card.</p>
        </div>
        <div class="price-cards">
          ${items.map(renderRestaurantCard).join("")}
        </div>
      </section>
    `;
  });

  grid.innerHTML = sections.join("");
}

function renderRestaurantCard(restaurant) {
  const status = getBookingStatus(restaurant);
  const media = mediaByName[restaurant.name] || {};
  const reservationPlatform = getReservationPlatform(restaurant.reservationUrl);
  const showChef = restaurant.showChef ? `<p class="show-chef"><strong>Culinary Class Wars:</strong> ${restaurant.showChef}</p>` : "";
  const chefPortrait = media.chefImage ? `
    <img class="chef-portrait" src="${media.chefImage}" alt="${restaurant.chef}" loading="lazy" onerror="this.remove()">
  ` : "";
  return `
    <article class="restaurant-card" id="${getRestaurantId(restaurant)}">
      <a class="media-frame" href="${restaurant.reservationUrl}" target="_blank" rel="noreferrer" aria-label="Open reservation link for ${restaurant.name}">
        ${media.image ? `<img src="${media.image}" alt="${restaurant.name}" loading="lazy" onerror="this.closest('.media-frame').classList.add('image-failed'); this.remove()">` : ""}
        ${chefPortrait}
        <span class="media-credit">${media.credit || "Restaurant photo"}</span>
      </a>
      <div class="card-topline">
        <span class="price">${restaurant.price}</span>
        <span class="city-pill">${restaurant.city}</span>
      </div>
      <h3>${restaurant.name}</h3>
      <p><strong>Chef:</strong> ${restaurant.chef}</p>
      ${showChef}
      <div class="tags">${restaurant.categories.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      <p class="story">${restaurant.story}</p>
      <p><strong>Order for:</strong> ${restaurant.signature}</p>
      <p><strong>Address:</strong> ${restaurant.address}</p>
      <div class="booking-box">
        <div class="booking-guidance urgency-${status.level}">
          <strong><span class="urgency-badge">${status.label}</span> When to book: ${status.headline}</strong>
          <span>${status.copy}</span>
        </div>
        <div class="booking-meta">
          <span><strong>Book via:</strong> ${restaurant.platform}</span>
        </div>
        <a class="booking-link" href="${restaurant.reservationUrl}" target="_blank" rel="noreferrer">${reservationPlatform}</a>
        <span class="confidence">${restaurant.confidence}</span>
      </div>
    </article>
  `;
}

function renderInteractiveMap(selected) {
  const mappedRestaurants = selected.filter((restaurant) => restaurant.coordinates);
  renderMapLinks(mappedRestaurants);

  if (!window.L) {
    document.querySelector("#restaurantMap").innerHTML = "<div class='map-fallback'>Map loading is unavailable. Use the numbered restaurant links.</div>";
    return;
  }

  if (!restaurantMap) {
    restaurantMap = L.map("restaurantMap", {
      scrollWheelZoom: false,
      zoomControl: true
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(restaurantMap);

    markerLayer = L.layerGroup().addTo(restaurantMap);
  }

  markerLayer.clearLayers();

  if (!mappedRestaurants.length) {
    restaurantMap.setView([37.5665, 126.9780], 11);
    return;
  }

  const bounds = [];
  mappedRestaurants.forEach((restaurant, index) => {
    const marker = L.marker(restaurant.coordinates, {
      icon: L.divIcon({
        className: "numbered-map-marker",
        html: `<span>${index + 1}</span>`,
        iconSize: [34, 34],
        iconAnchor: [17, 17],
        popupAnchor: [0, -18]
      })
    });
    marker.bindPopup(renderMapPopup(restaurant, index));
    marker.addTo(markerLayer);
    bounds.push(restaurant.coordinates);
  });

  if (bounds.length === 1) {
    restaurantMap.setView(bounds[0], 13);
  } else {
    restaurantMap.fitBounds(bounds, { padding: [32, 32], maxZoom: 12 });
  }
}

function renderMapLinks(mappedRestaurants) {
  mapLinks.innerHTML = mappedRestaurants.map((restaurant, index) => `
    <a href="#${getRestaurantId(restaurant)}" data-map-index="${index}">
      <span>${index + 1}</span>
      <strong>${restaurant.name}</strong>
    </a>
  `).join("");

  [...mapLinks.querySelectorAll("a")].forEach((link) => {
    link.addEventListener("click", () => {
      const index = Number(link.dataset.mapIndex);
      const restaurant = mappedRestaurants[index];
      if (restaurantMap && restaurant) {
        restaurantMap.setView(restaurant.coordinates, 15);
        const marker = markerLayer.getLayers()[index];
        if (marker) marker.openPopup();
      }
    });
  });
}

function renderMapPopup(restaurant, index) {
  const cardId = getRestaurantId(restaurant);
  const mapsUrl = getMapUrl(restaurant);
  return `
    <div class="map-popup">
      <strong>${index + 1}. ${restaurant.name}</strong>
      <span>${restaurant.price} - ${restaurant.chef}</span>
      <a href="#${cardId}">View card</a>
      <a href="${restaurant.reservationUrl}" target="_blank" rel="noreferrer">Reserve</a>
      <a href="${mapsUrl}" target="_blank" rel="noreferrer">Open map</a>
    </div>
  `;
}

function getBookingStatus(restaurant) {
  const release = restaurant.release;
  const arrival = trip.arrival;

  if (release.type === "daysBefore") {
    const releaseDate = addDays(arrival, -release.days);
    const days = differenceInDays(releaseDate, today);
    return {
      sortDate: releaseDate,
      urgent: days <= 7,
      level: getUrgencyLevel(release, days),
      label: getUrgencyLabel(getUrgencyLevel(release, days)),
      headline: formatDate(releaseDate),
      copy: `${release.lead || release.label} For your ${formatDate(arrival)} arrival, set the alert for ${formatDate(releaseDate)}. ${release.label}`
    };
  }

  if (release.type === "monthBefore") {
    const releaseDate = new Date(arrival);
    releaseDate.setMonth(releaseDate.getMonth() - 1);
    releaseDate.setDate(1);
    const days = differenceInDays(releaseDate, today);
    return {
      sortDate: releaseDate,
      urgent: days <= 7,
      level: getUrgencyLevel(release, days),
      label: getUrgencyLabel(getUrgencyLevel(release, days)),
      headline: formatDate(releaseDate),
      copy: `${release.lead || release.label} For your ${formatDate(arrival)} arrival, begin around ${formatDate(releaseDate)}. ${release.label}`
    };
  }

  if (release.type === "walkin") {
    return {
      sortDate: arrival,
      urgent: true,
      level: getUrgencyLevel(release, 0),
      label: getUrgencyLabel(getUrgencyLevel(release, 0)),
      headline: "During your trip",
      copy: `${release.lead || "Plan around opening hours."} ${release.label}`
    };
  }

  const daysBefore = release.days || 30;
  const releaseDate = addDays(arrival, -daysBefore);
  return {
    sortDate: releaseDate,
    urgent: differenceInDays(releaseDate, today) <= 7,
    level: getUrgencyLevel(release, differenceInDays(releaseDate, today)),
    label: getUrgencyLabel(getUrgencyLevel(release, differenceInDays(releaseDate, today))),
    headline: formatDate(releaseDate),
    copy: `${release.lead || `Start checking ${daysBefore} days before arrival.`} For your ${formatDate(arrival)} arrival, begin around ${formatDate(releaseDate)}. ${release.label}`
  };
}

function getUrgencyLevel(release, daysUntilTarget) {
  if (release.urgency) return release.urgency;
  if (daysUntilTarget <= 7) return "red";
  if (daysUntilTarget <= 45) return "yellow";
  return "green";
}

function getUrgencyLabel(level) {
  if (level === "red") return "Must book ASAP";
  if (level === "yellow") return "Monitor";
  return "Flexible";
}

function buildRouteSummary(selected) {
  if (!selected.length) return "No matches yet. Change the city or filter.";
  const exact = selected.filter((item) => item.release.type === "daysBefore").length;
  const watch = selected.filter((item) => item.release.type === "watch").length;
  const walkin = selected.filter((item) => item.release.type === "walkin").length;
  return `${exact} exact release windows, ${watch} watchlist bookings, ${walkin} walk-in or queue plans.`;
}

function addDays(date, days) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function differenceInDays(a, b) {
  const left = new Date(a);
  const right = new Date(b);
  left.setHours(0, 0, 0, 0);
  right.setHours(0, 0, 0, 0);
  return Math.ceil((left - right) / 86400000);
}

function parseDate(value) {
  if (!value) return null;
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function toInputDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(date);
}

function getReservationPlatform(url) {
  if (url.startsWith("tel:")) return "Phone";
  try {
    const hostname = new URL(url).hostname.replace(/^www\./, "");
    if (hostname.includes("google.com")) return "Google Maps";
    if (hostname.includes("catchtable.net")) return "CatchTable";
    if (hostname.includes("opentable.com")) return "OpenTable";
    if (hostname.includes("visitseoul.net")) return "Visit Seoul";
    if (hostname.includes("shillahotels.com")) return "Shilla Hotels";
    if (hostname.includes("mosuseoul.com")) return "Mosu";
    if (hostname.includes("mingles.kr")) return "Mingles";
    if (hostname.includes("jungsik.kr")) return "Jungsik";
    if (hostname.includes("tridseoul.com")) return "Trid";
    if (hostname.includes("shiarestaurant.org")) return "SHIA";
    return "Official Site";
  } catch {
    return "Booking Link";
  }
}

function getRestaurantId(restaurant) {
  return `restaurant-${restaurant.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}

function getMapUrl(restaurant) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${restaurant.name} ${restaurant.address || restaurant.city}`)}`;
}

render();
