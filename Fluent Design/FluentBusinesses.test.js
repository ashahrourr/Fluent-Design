const assert = require("assert");
const FluentBusinesses  = require("./FluentBusinesses");

const testData = [
  {
    name: "Applebee's",
    city: "Charlotte",
    state: "NC",
    stars: 4,
    review_count: 6,
    hours: {
      Monday: "0:0-0:0",
      Tuesday: "10:0-18:0",
      Wednesday: "10:0-18:0",
      Thursday: "10:0-18:0",
      Friday: "10:0-18:0",
      Saturday: "10:0-18:0",
      Sunday: "12:0-18:0"
  },
  attributes: {
    Ambience: {
      football: true,
    },
  }
  },
  {
    name: "China Garden",
    state: "NC",
    city: "Charlotte",
    stars: 4,
    review_count: 10,
    hours: {
      Monday: "0:0-0:0",
      Tuesday: "10:0-18:0",
      Wednesday: "10:0-18:0"
    }
  },
  {
    name: "Beach Ventures Roofing",
    state: "AZ",
    city: "Phoenix",
    stars: 3,
    review_count: 30,
    hours: {
      Monday: "0:0-0:0",
      Tuesday: "10:0-18:0",
      Wednesday: "10:0-18:0",
      Thursday: "10:0-18:0",
      Friday: "10:0-18:0",
      Saturday: "10:0-18:0",
      Sunday: "12:0-18:0"
  }
  },
  {
    name: "Alpaul Automobile Wash",
    city: "Charlotte",
    state: "NC",
    stars: 3,
    review_count: 30,
    categories: "Sports",
    hours: {
    Friday: "10:0-18:0",
      Saturday: "10:0-18:0",
      Sunday: "12:0-18:0"
  },
  
    
  },
  {
    name: "y",
    stars: 5,
    state: "MA",
    city: "boston",
    review_count: 4
  },
  {
    name: "x",
    stars: 8,
    review_count: 4,
    state: "MA",
    city: "boston"
  }
];

test("fromCityInState filters correctly", () => {
  const list = new FluentBusinesses(testData).fromCityInState(
    "Charlotte",
    "NC"
  ).data;
  assert(list.length === 3);
  assert(list[0].name === "Applebee's");
  assert(list[1].name === "China Garden");
  assert(list[2].name === "Alpaul Automobile Wash");
});

test("categories" , () => {
  const cat = new FluentBusinesses(testData).inCategory("Sports").data;
  assert(cat[0].name === "Alpaul Automobile Wash");
});

test("hasStarGeq", () => {
  const has = new FluentBusinesses(testData).hasStarsGeq(4).data;
  assert(has.length === 4);
});

test("isOpenOnDays", () => {
  let s = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]; 
  const is = new FluentBusinesses(testData).isOpenOnDays(s).data;
  assert(is.length === 2);

});

test ("hasAmbiance", () => {
  const hi = new FluentBusinesses(testData).hasAmbience("football").data;
  assert(hi[0].name === "Applebee's");
});

test("bestPlace tie-breaking", () => {
  const best = new FluentBusinesses(testData)
    .fromCityInState("Charlotte", "NC")
    .bestPlace();
  assert(best.name === "China Garden");
});

test("mostReviews tie-breaking", () => {
  const best = new FluentBusinesses(testData)
  .fromCityInState("boston", "MA")
    .mostReviews();
  assert(best.name === "x");
});
