# Use an official Node.js runtime as a base image with Node.js 18.x
FROM node:18-alpine

# Create and set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

COPY .env ./


# Install dependencies
RUN npm install

# Copy the Prisma schema directory so that Prisma can find it
COPY prisma ./prisma

# Generate the Prisma Client (this command now finds prisma/schema.prisma)
RUN npx prisma generate

# Copy the rest of the application code
COPY . .

# Build your TypeScript code (ensure tsconfig.json outputs to the 'dist' folder)
RUN npx tsc

# Expose the port that your app will run on
EXPOSE 3000

# Start the app using node
CMD ["node", "dist/index.js"]
