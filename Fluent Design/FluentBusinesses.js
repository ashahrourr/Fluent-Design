class FluentBusinesses {
  // constructor(data: object[])
  constructor(data) {
    this.data = data;
  }
  filter(f) {
    return new FluentBusinesses(this.data.filter(f));
  }
  fromCityInState(city, state) {
    let new_data = this.filter((x) => "city" in x);
    let next_data = new_data.filter((x) => "state" in x);
    let final_data = new_data.filter((x) => x["city"] === city);
    let solution = final_data.filter((x) => x["state"] === state);
    return solution;
  }
  hasStarsGeq(stars) {
    let new_data = this.filter((x) => "stars" in x);
    let final_data = new_data.filter((x) => x["stars"] >= stars);
    return final_data;
  }
  inCategory(category) {
    let new_data = this.filter((x) => "categories" in x);
    let final_data = new_data.filter((x) => x["categories"] === category);
    return final_data;
  }
  isOpenOnDays(days) {
    let new_data = this.filter((x) => "hours" in x);
    let final_data = new_data.filter((x) => days.every((y) => y in x["hours"]));
    return final_data;
  }
  hasAmbience(ambience) {
    let new_data = this.filter((x) => "attributes" in x);
    let next_data = new_data.filter((x) => "Ambience" in x["attributes"]);
    let final_data = next_data.filter((x) => ambience in x["attributes"]["Ambience"]);
    let solution = final_data.filter((x) => x["attributes"]["Ambience"][ambience]);
    return solution;
  }
  bestPlace() {
    let new_data = this.filter((x) => "stars" in x);
    let highestRating = new_data.data.reduce(
      (acc, e) => (e.stars > acc ? e.stars : acc),
      0
    );
    let next_data = new_data.data.filter((x) => x.stars === highestRating);

    if (next_data.length > 1) {
      // if stars matched
      let final_data = next_data.filter((x) => "review_count" in x); //check for review count
      if (final_data.length === 1) {
        // if only one has review count
        return final_data[0];
      } else if (final_data.length > 1) {
        // if more than one has review count
        let highestReview = final_data.reduce(
          (acc, e) => (e.review_count > acc ? e.review_count : acc),
          0
        );
        let solution = final_data.filter(
          (x) => x.review_count === highestReview
        ); //filter for highest review count
        return solution[0];
      } else {
        // if non has review count field
        return next_data[0];
      }
    } else if (next_data.length === 1) {
      //if stars not matched
      return next_data[0];
    } else {
      // if stars field does not exist
      return {};
    }
  }
  mostReviews() {
    let new_data = this.filter((x) => "review_count" in x);
    let highestRating = new_data.data.reduce(
      (acc, e) => (e.review_count > acc ? e.review_count : acc),
      0
    );
    let next_data = new_data.data.filter((x) => x.review_count === highestRating);

    if (next_data.length > 1) {
      // if stars matched
      let final_data = next_data.filter((x) => "stars" in x); //check for review count
      if (final_data.length === 1) {
        // if only one has review count
        return final_data[0];
      } else if (final_data.length > 1) {
        // if more than one has review count
        let highestReview = final_data.reduce(
          (acc, e) => (e.stars > acc ? e.stars : acc),
          0
        );
        let solution = final_data.filter(
          (x) => x.stars === highestReview
        ); //filter for highest review count
        return solution[0];
      } else {
        // if non has review count field
        return next_data[0];
      }
    } else if (next_data.length === 1) {
      //if stars not matched
      return next_data[0];
    } else {
      // if stars field does not exist
      return {};
    }
  }
}
module.exports = FluentBusinesses;
