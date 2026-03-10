FROM node:20
WORKDIR /myapp

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 5173

CMD ["npm","run","dev"]




















































 

















# FROM node:20

# # Set working directory
# WORKDIR /myapp

# # Copy package files first
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy rest of the app
# COPY . .

# # Expose Vite default port
# EXPOSE 5173

# # Start the dev server
# CMD ["npm", "run", "dev"]
