# Stage 1: Build the app
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Run the app
FROM node:20-alpine

WORKDIR /app

# Copy only production files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public

# Expose default Next.js port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]