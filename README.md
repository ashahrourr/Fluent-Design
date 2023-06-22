# Fluent-Design

FluentBusinesses is a JavaScript class that provides a fluent interface for filtering and manipulating a collection of business data. It allows you to easily filter businesses based on various criteria such as location, rating, category, operating hours, and more.


# Usage
To use FluentBusinesses in your JavaScript project, you need to require the module and create an instance of the class with the business data as a parameter. Here's an example:

javascript
Copy code
const FluentBusinesses = require('fluent-businesses');

// Sample business data
const businessesData = [
  // ... your business data array ...
];

// Create an instance of FluentBusinesses
const businesses = new FluentBusinesses(businessesData);

// Example usage: Filter businesses from a specific city and state
const filteredBusinesses = businesses.fromCityInState('New York', 'NY');
console.log(filteredBusinesses);

# Methods
The FluentBusinesses class provides the following methods for filtering and finding businesses:

filter(f): Returns a new FluentBusinesses instance with businesses that match the given filter function f.
fromCityInState(city, state): Filters businesses based on the specified city and state.
hasStarsGeq(stars): Filters businesses based on the minimum star rating.
inCategory(category): Filters businesses based on the specified category.
isOpenOnDays(days): Filters businesses that are open on all the specified days.
hasAmbience(ambience): Filters businesses based on the specified ambience.
bestPlace(): Returns the business with the highest star rating. If multiple businesses have the same rating, the one with the highest review count is returned.
mostReviews(): Returns the business with the most review counts. If multiple businesses have the same review count, the one with the highest star rating is returned.
Please refer to the inline comments in the code for more detailed information about each method.

# Contributing
Contributions to FluentBusinesses are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on the GitHub repository.
