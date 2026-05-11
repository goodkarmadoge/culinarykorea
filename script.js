const restaurants = [
  {
    name: "Andongjip Son Kalguksi",
    city: "Seoul",
    price: "$",
    chef: "Lee Mi-ryeong, Auntie Omakase #1",
    categories: ["Culinary Class Wars", "Social Heat"],
    address: "B1, 3 Gosanja-ro 36-gil, Dongdaemun-gu, Seoul",
    story: "A market noodle shop tied to one of the show's most emotional arcs: rebuilding through kalguksu after family hardship.",
    signature: "Hand-cut kalguksu, cabbage pancakes, boiled pork",
    reservationUrl: "https://english.visitseoul.net/restaurants/andongjip-sonkalguksi/ENP32dncy",
    platform: "Walk-in / phone check",
    release: { type: "walkin", label: "No reliable online booking window found. Plan an opening-time visit." },
    confidence: "Current guides conflict on Sunday hours, so verify day-of before crossing town.",
    map: [88, 250]
  },
  {
    name: "Happy Drinking Table",
    city: "Seoul",
    price: "$$",
    chef: "Lee Mi-ryeong, Auntie Omakase #1",
    categories: ["Culinary Class Wars"],
    address: "341 Nohae-ro, Dobong-gu, Seoul",
    story: "The intimate omakase-style sibling to Auntie Omakase's humble noodle shop, built around seasonal Korean drinking food.",
    signature: "Korean omakase drinking table",
    reservationUrl: "tel:+821075392020",
    platform: "Phone only",
    release: { type: "daysBefore", days: 3, label: "Call 3 working days before, reportedly between 2 PM and 5 PM Korea time." },
    confidence: "Phone timing comes from Korean travel/community listings; treat it as tactical guidance.",
    map: [160, 155]
  },
  {
    name: "Deepin",
    city: "Seoul",
    price: "$$",
    chef: "Yoon Nam-no, Cooking Maniac",
    categories: ["Culinary Class Wars", "Social Heat"],
    address: "1F, 411 Toegye-ro, Jung-gu, Seoul",
    story: "A natural wine bar from the show's fourth-place finalist, with relaxed energy and sharp bistro cooking.",
    signature: "Scallops, gnocchi, lamb, natural wine",
    reservationUrl: "https://www.catchtable.net/shop/deepin",
    platform: "CatchTable",
    release: { type: "watch", label: "Book ahead on CatchTable; exact release window not published in accessible sources." },
    confidence: "Reservation link and hours were sourced from Visit Korea / CatchTable guide.",
    map: [222, 195]
  },
  {
    name: "Via Toledo Pasta Bar",
    city: "Seoul",
    price: "$$$",
    chef: "Kwon Sung-jun, Napoli Matfia",
    categories: ["Culinary Class Wars", "Social Heat", "Fine Dining"],
    address: "7-2 Wonhyo-ro 83-gil, Yongsan-gu, Seoul",
    story: "The Season 1 winner's Italian counter became a post-finale phenomenon after fans overwhelmed reservation systems.",
    signature: "Seasonal handmade pasta with Korean-Italian inflection",
    reservationUrl: "https://www.catchtable.net/search?keyword=Via%20Toledo%20Pasta%20Bar",
    platform: "CatchTable",
    release: { type: "watch", label: "Use CatchTable alerts. Public sources confirm extreme demand but not a stable release rule." },
    confidence: "Demand spike is well documented; release timing should be verified on CatchTable.",
    map: [288, 118]
  },
  {
    name: "Trid",
    city: "Seoul",
    price: "$$$",
    chef: "Kang Seung-won, Triple Star",
    categories: ["Culinary Class Wars", "Fine Dining"],
    address: "2F, 16 Seolleung-ro 162-gil, Gangnam-gu, Seoul",
    story: "Triple Star brings Mosu and Benu training into a seasonal Korean tasting menu with French technique.",
    signature: "Seasonal tasting menu",
    reservationUrl: "https://www.catchtable.net/shop/trid",
    platform: "CatchTable",
    release: { type: "watch", label: "Reservation-only via CatchTable. Check early and monitor cancellations." },
    confidence: "Official site confirms CatchTable-only booking and cancellation policy, but not release cadence.",
    map: [360, 36]
  },
  {
    name: "CHOI.",
    city: "Seoul",
    price: "$$$",
    chef: "Choi Hyun-seok",
    categories: ["Culinary Class Wars", "Fine Dining"],
    address: "3F, 457 Dosan-daero, Gangnam-gu, Seoul",
    story: "A polished way to taste the celebrity chef's creative, theatrical Korean-European style.",
    signature: "Lunch and dinner course menus, show-inspired dishes",
    reservationUrl: "https://www.catchtable.net/shop/choidot",
    platform: "CatchTable",
    release: { type: "watch", label: "Reserve through CatchTable. Accessible sources recommend booking well ahead." },
    confidence: "Booking link and menu pricing sourced from Visit Korea / CatchTable guide.",
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
    release: { type: "walkin", label: "Plan for queues; check CatchTable or local waitlist before arrival." },
    confidence: "Viral/Bib Gourmand status sourced from current travel and Michelin-related listings.",
    map: [510, 86]
  },
  {
    name: "Mosu",
    city: "Seoul",
    price: "$$$$",
    chef: "Sung Anh",
    categories: ["Culinary Class Wars", "Fine Dining"],
    address: "4 Hoenamu-ro 41-gil, Yongsan-gu, Seoul",
    story: "The judge's San Francisco-to-Seoul restaurant tells Korean memory through globally trained fine-dining technique.",
    signature: "Dinner tasting menu",
    reservationUrl: "https://mosuseoul.com",
    platform: "Official site / CatchTable visibility",
    release: { type: "watch", label: "Monitor official booking drops. A 2025 release sold roughly three months of seats in one day." },
    confidence: "Korea JoongAng Daily reported 2025 CatchTable visibility and dinner pricing; current cadence may shift.",
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
    release: { type: "monthBefore", label: "Historical diner reports indicate month-ahead releases; verify on the official site." },
    confidence: "Accolades are current via 50 Best; release timing is lower-confidence and should be checked.",
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
    release: { type: "watch", label: "Reservations essential. Exact public release window not found in accessible sources." },
    confidence: "Hours and concept sourced from Seoul tourism and Asia's 50 Best.",
    map: [686, 62]
  },
  {
    name: "SHIA",
    city: "Washington, D.C.",
    price: "$$$$",
    chef: "Edward Lee",
    categories: ["Culinary Class Wars", "Fine Dining", "Social Heat"],
    address: "1252 4th St NE, Washington, D.C.",
    story: "Edward Lee's nonprofit modern Korean restaurant treats fine dining as sustainability research and cultural storytelling.",
    signature: "Five- or seven-course Hansik tasting menu",
    reservationUrl: "https://www.opentable.com/r/shia-restaurant-washington",
    platform: "OpenTable",
    release: { type: "daysBefore", days: 60, label: "Reservations release 60 days in advance at 5 PM Eastern." },
    confidence: "Exact release window comes from SHIA's official FAQ.",
    map: [88, 250]
  }
];

const grid = document.querySelector("#restaurantGrid");
const timeline = document.querySelector("#timeline");
const form = document.querySelector("#tripForm");
const cityInput = document.querySelector("#cityInput");
const arrivalInput = document.querySelector("#arrivalInput");
const departureInput = document.querySelector("#departureInput");
const visibleCount = document.querySelector("#visibleCount");
const urgentCount = document.querySelector("#urgentCount");
const fineCount = document.querySelector("#fineCount");
const routeTitle = document.querySelector("#routeTitle");
const routeSummary = document.querySelector("#routeSummary");
const mapPins = document.querySelector("#mapPins");
const filterButtons = [...document.querySelectorAll(".filter-button")];

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
    const filterMatch = activeFilter === "all" || restaurant.categories.includes(activeFilter);
    return cityMatch && filterMatch;
  });

  visibleCount.textContent = selected.length;
  fineCount.textContent = selected.filter((item) => item.categories.includes("Fine Dining")).length;
  urgentCount.textContent = selected.filter((item) => getBookingStatus(item).urgent).length;

  routeTitle.textContent = trip.city === "All" ? "Cross-city tasting route" : `${trip.city} food route`;
  routeSummary.textContent = `${formatDate(trip.arrival)} to ${formatDate(trip.departure)}. ${buildRouteSummary(selected)}`;

  renderPins(selected);
  renderTimeline(selected);
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
  return `
    <article class="restaurant-card">
      <div class="card-topline">
        <span class="price">${restaurant.price}</span>
        <span class="city-pill">${restaurant.city}</span>
      </div>
      <h3>${restaurant.name}</h3>
      <p><strong>Chef:</strong> ${restaurant.chef}</p>
      <div class="tags">${restaurant.categories.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      <p class="story">${restaurant.story}</p>
      <p><strong>Order for:</strong> ${restaurant.signature}</p>
      <p><strong>Address:</strong> ${restaurant.address}</p>
      <div class="booking-box">
        <div class="booking-meta">
          <span><strong>Book via:</strong> ${restaurant.platform}</span>
          <span><strong>Timing:</strong> ${status.copy}</span>
        </div>
        <a class="booking-link" href="${restaurant.reservationUrl}" target="_blank" rel="noreferrer">Reservation link</a>
        <span class="confidence">${restaurant.confidence}</span>
      </div>
    </article>
  `;
}

function renderTimeline(selected) {
  const sorted = [...selected].sort((a, b) => getBookingStatus(a).sortDate - getBookingStatus(b).sortDate);
  timeline.innerHTML = sorted.slice(0, 8).map((restaurant) => {
    const status = getBookingStatus(restaurant);
    return `
      <article class="timeline-item ${status.urgent ? "is-urgent" : ""}">
        <strong>${restaurant.name}</strong>
        <span>${status.headline}</span>
        <span>${status.copy}</span>
      </article>
    `;
  }).join("");
}

function renderPins(selected) {
  mapPins.innerHTML = selected.slice(0, 10).map((restaurant, index) => {
    const [x, y] = restaurant.map;
    return `
      <g class="pin" transform="translate(${x} ${y})">
        <circle r="18"></circle>
        <text y="1">${index + 1}</text>
      </g>
    `;
  }).join("");
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
      headline: `${formatDate(releaseDate)} booking target`,
      copy: `${release.label} For your arrival date, set an alert for ${formatDate(releaseDate)}.`
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
      headline: `${formatDate(releaseDate)} watch date`,
      copy: `${release.label} Start checking around ${formatDate(releaseDate)}.`
    };
  }

  if (release.type === "walkin") {
    return {
      sortDate: arrival,
      urgent: true,
      headline: "Plan around opening hours",
      copy: release.label
    };
  }

  return {
    sortDate: addDays(arrival, -30),
    urgent: differenceInDays(addDays(arrival, -30), today) <= 7,
    headline: "Add to reservation watchlist",
    copy: release.label
  };
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

render();
