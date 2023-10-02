# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
RUN npm cache clean -f
RUN rm -rf node_modules
RUN rm package-lock.json
RUN npm uninstall -g @angular

# Install Angular CLI and dependencies
RUN npm install -g @angular/cli
# RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app for production
# RUN ng build --prod

# Expose the port the app runs on
EXPOSE 4200

# Start the Angular app
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
