# Express CRUD API

## Overview

This project is a simple Express.js application that implements basic CRUD operations for managing items. It provides endpoints to create, read, update, and delete items in a list.

## Installation

To run this project locally, follow these steps:

1. **Clone the Repository**

git clone https://github.com/your-username/your-repository.git

2. **Navigate to the Project Directory**

cd your-repository

3. **Install Dependencies**
Make sure you have Node.js installed. Then, install the required packages:

npm install

4. **Start the Server**

npm start

The server will start and listen on port 3000.

## Testing the API

You can test the API using tools like Postman or curl. Here are some example curl commands:

## Create an Item:
```bash
curl -X POST http://localhost:3000/api/items -H "Content-Type: application/json" -d '{"id": 1, "name": "Item 1"}'

## Get All Items:

curl -X GET http://localhost:3000/api/items

## Get a Single Item:

curl -X GET http://localhost:3000/api/items/1

## Update an Item:

curl -X PUT http://localhost:3000/api/items/1 -H "Content-Type: application/json" -d '{"id": 1, "name": "Updated Item"}'

## Delete an Item:

curl -X DELETE http://localhost:3000/api/items/1

License
This project is licensed under the MIT License - see the LICENSE file for details.
