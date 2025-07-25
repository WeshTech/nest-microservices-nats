# Stage 1: Build the application
FROM node:18-alpine

# Install dependencies (including devDependencies for build)
WORKDIR /usr/src/app
COPY package*.json ./
COPY package-lock.json ./

RUN npm install

# Copy source code and build
COPY . .
