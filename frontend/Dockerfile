# Base image
FROM node:18 as build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build

# Production server to serve static files
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose the frontend port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
