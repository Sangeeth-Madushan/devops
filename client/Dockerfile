# Use a specific Node.js version on Alpine Linux
FROM node:18-alpine

# Set up the working directory
WORKDIR /app

# Copy package.json and package-lock.json first 
COPY package.json .

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose the React app development port
EXPOSE 3000

# Start the React application
CMD ["npm", "start"]
