# Stage 1: Build the application
FROM node:20-alpine

# Install dependencies (including devDependencies for build)
WORKDIR /usr/src/app
COPY package*.json ./
COPY package-lock.json ./

RUN npm install
RUN npm install @nestjs/cli

# Copy source code and build
COPY . .
