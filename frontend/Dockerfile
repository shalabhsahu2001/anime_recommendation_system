# Stage 1: Build the Vite app
FROM node:18 as build

WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files into the container
COPY . .

# Build the Vite app for production
RUN npm run build

# Debug step: list the generated files in /app/dist to confirm the build folder exists
RUN ls -la /app
RUN ls -la /app/dist

# Stage 2: Serve the built app with Nginx
FROM nginx:stable-alpine

# Copy the output from the build stage (adjusting for Vite which outputs to /app/dist)
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 (default for Nginx)
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
