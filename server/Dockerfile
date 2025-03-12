# Build Stage
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package files first 
COPY package*.json ./

# Install dependencies 
RUN npm install --only=production

# Copy application source code
COPY . .

# Run Stage (Minimal Runtime)
FROM node:18-slim

WORKDIR /app

# Copy only necessary files from builder stage
COPY --from=builder /app /app

# Set environment variables
ENV NODE_ENV=production

# Expose the application port
EXPOSE 8000

# Start the application
CMD ["node", "index.js"]
