# MongoDB Fundamentals Assignment – Week 1

## Overview

This repository contains my solutions for the MongoDB Fundamentals Week 1 assignment. The tasks cover:

- MongoDB setup
- CRUD operations
- Advanced queries with filters, projections, and sorting
- Aggregation pipelines
- Indexing for performance optimization

---

## Setup Instructions

### 1. Prerequisites

Ensure the following are installed on your machine:

- **Node.js** (v18 or higher)
- **MongoDB** (either locally or using MongoDB Atlas)
- **MongoDB Shell** (`mongosh`) or **MongoDB Compass**

---

### 2. Clone the Repository

```bash
git clone <your-github-classroom-repo-url>
cd <repo-folder>



3. Install MongoDB (Choose one)
Option A: Local Installation
Download and install MongoDB from the official website.

Start MongoDB locally:

mongod
Option B: MongoDB Atlas (Cloud)
Sign up at https://www.mongodb.com/cloud/atlas

Create a free cluster

Whitelist your IP

Get the connection string

Replace the connection string in your scripts if needed

4. Run the Insert Script
Populate the library database with sample book data:

node insert_books.js
This will create a books collection under the library database.

5. Working with the Assignment
Files:
insert_books.js: Inserts sample books into the database.

queries.js: Contains all MongoDB queries (CRUD, advanced, aggregation, indexing).

Week1-Assignment.md: Assignment instructions.

README.md: Setup and project info.

screenshot.png: Screenshot showing sample data in the books collection.

How to Run Queries
Use either:

mongosh


mongosh
use library
Node.js Script
Include your queries in the queries.js file and run:

bash
Copy
Edit
node queries.js
MongoDB Compass

Connect to your MongoDB instance

Navigate to the library database > books collection

Use GUI to run queries or aggregation pipelines

Screenshot
Sample data (limited to 3 records):

Indexed fields were tested using the .explain() method to measure performance.

Author
Britney Temu
MongoDB Fundamentals – Week 1 Assignment
GitHub Classroom Submission
