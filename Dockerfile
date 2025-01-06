# Use a basic image to build your app (Node.js)
FROM node:18-alpine as build

# Set up the directory in the container where your app will live
WORKDIR /app

# Copy your app's package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of your app into the container
COPY . .

# Build the app for production
RUN npm run build

# Use a smaller image to serve the app
FROM nginx:alpine

# Copy the built app from the first stage to the web server
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (default HTTP port)
EXPOSE 80

# Keep the web server running
CMD ["nginx", "-g", "daemon off;"]
