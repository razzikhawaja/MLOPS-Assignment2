# Stage 1: Build
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application
FROM node:18

# Set working directory for serving
WORKDIR /app

# Copy build artifacts from the build stage
COPY --from=build /app/dist ./dist

# Install a simple HTTP server to serve static files
RUN npm install -g serve

# Command to run the server
CMD ["serve", "-s", "dist", "-l", "3000"]
