FROM node:18

WORKDIR /app
COPY package*.json ./
RUN npm install

# Install json-server globally
RUN npm install -g json-server

# Copy the rest of your app 
COPY . .

EXPOSE 5000

CMD ["npx", "json-server", "--watch","/app/books.json", "--host", "0.0.0.0", "--port", "5000"]
