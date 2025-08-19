## Acknowledgments

Special thanks to https://github.com/stuyy for their guidance and expertise in building this project.

## Description

Microservices with NestJS and NATS
This project demonstrates the implementation of a microservices architecture using NestJS with NATS as the message broker. It consists of three main components:

API Gateway: Handles incoming API requests and routes them to the appropriate microservices.
Users Microservice: Manages user-related operations (e.g., creating users with email, username, and password).
Payments Microservice: Processes payment-related operations (e.g., handling payment amounts).

Both microservices communicate via the NATS server.
Prerequisites

Docker Desktop: Ensure Docker Desktop is installed and running.
Node.js: For local development (optional, as Docker handles dependencies).

## Setup and Running the Project

Clone the Repository:
git clone https://github.com/WeshTech/nest-microservices-nats

Run the Application:

Ensure Docker Desktop is running.
Execute the following command to start all services:docker-compose up --build

This will build and run the API Gateway, Users Microservice, Payments Microservice, and NATS server in separate containers.

Usage
Once the containers are running, you can interact with the API Gateway via HTTP requests:

Create a User:

Endpoint: POST http://localhost:3000/users
Body (JSON):{
"email": "example@email.com",
"username": "example_user",
"password": "your_password"
}

Process a Payment:

Endpoint: POST http://localhost:3000/payment
Body (JSON):{
"amount": 100
}
