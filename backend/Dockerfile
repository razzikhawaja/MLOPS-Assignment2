# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory to /app
COPY . .

# Expose the backend port
EXPOSE 5000

# Start the application using nodemon
CMD ["npx", "nodemon", "server.js"]
