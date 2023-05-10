# Use an official Node.js runtime as a parent image
FROM node:16.1.0-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package*.json yarn.lock ./

# Install dependencies using yarn
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Expose port 8080 for the Vue app
EXPOSE 8080

# Start the Vue app
CMD ["yarn", "dev"]   