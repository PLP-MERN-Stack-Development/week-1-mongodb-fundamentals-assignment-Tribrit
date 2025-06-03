// 1. Find all books in a specific genre (e.g. "Fiction")
db.books.find({ genre: "Fiction" });

// 2. Find books published after a certain year (e.g. after 2000)
db.books.find({ published_year: { $gt: 2000 } });

// 3. Find books by a specific author (e.g. "George Orwell")
db.books.find({ author: "George Orwell" });

// 4. Update the price of a specific book (e.g. "1984" to 12.99)
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 12.99 } }
);

// 5. Delete a book by its title (e.g. "Moby Dick")
db.books.deleteOne({ title: "Moby Dick" });

// 6. Find books that are both in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// 7. Projection: return only title, author, price for books in "Fiction"
db.books.find(
  { genre: "Fiction" },
  { title: 1, author: 1, price: 1, _id: 0 }
);

// 8. Sorting books by price ascending
db.books.find().sort({ price: 1 });

// 9. Sorting books by price descending
db.books.find().sort({ price: -1 });

// 10. Pagination: show first 5 books (page 1)
db.books.find().skip(0).limit(5);

// 11. Pagination: show next 5 books (page 2)
db.books.find().skip(5).limit(5);

// 12. Aggregation pipeline: average price by genre
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" }, count: { $sum: 1 } } }
]);

// 13. Aggregation pipeline: find author with most books
db.books.aggregate([
  { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
  { $sort: { totalBooks: -1 } },
  { $limit: 1 }
]);

// 14. Aggregation pipeline: group books by decade and count
db.books.aggregate([
  {
    $project: {
      decade: { $subtract: [ "$published_year", { $mod: [ "$published_year", 10 ] } ] }
    }
  },
  {
    $group: { _id: "$decade", count: { $sum: 1 } }
  },
  { $sort: { _id: 1 } }
]);

// 15. Create an index on the title field
db.books.createIndex({ title: 1 });

// 16. Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 });

// 17. Explain query performance with index
db.books.find({ title: "1984" }).explain("executionStats");
