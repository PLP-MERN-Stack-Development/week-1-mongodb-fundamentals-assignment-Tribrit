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
git clone (https://github.com/PLP-MERN-Stack-Development/week-1-mongodb-fundamentals-assignment-Tribrit.git)
```

3. Install MongoDB (Choose one)
Option A: Local Installation
Download and install MongoDB from the official website

Start MongoDB locally using:
mongod


Option B: MongoDB Atlas (Cloud)
Sign up at MongoDB Atlas

Create a free cluster

Whitelist your IP address

Get your connection string and use it in your application or Compass

4. Run the Insert Script
To populate your database with sample book data:

node insert_books.js
This creates a database named library and a books collection with sample documents.

Working with the Assignment
Files Included
insert_books.js – Script to populate MongoDB with book data

queries.js – MongoDB queries (CRUD, advanced, aggregation, indexing)

Week1-Assignment.md – Assignment instructions

README.md – Setup and instructions

screenshot.png – Screenshot showing sample data

How to Run Queries
You can run queries using:

Option 1: MongoDB Shell (mongosh)
mongosh
use library
Run your queries directly inside the shell.

Option 2: Node.js Script
Write your queries in queries.js and run:

node queries.js
Option 3: MongoDB Compass
Connect using your connection string

Navigate to the library > books collection

Use the GUI to explore data and run queries

Screenshot
Example output of books collection:


Notes
Indexed fields were tested using .explain() to compare query performance.

All assignment tasks are complete and pushed to the GitHub Classroom repository.

Author
Britney Temu
MongoDB Fundamentals – Week 1 Assignment


