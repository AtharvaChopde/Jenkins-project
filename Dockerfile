# Use an official Apache runtime as a parent image
FROM httpd:2.4

# Copy the custom index.html file from the current directory to the container
COPY . /usr/local/apache2/htdocs/

# Expose port 80 to the Docker host
EXPOSE 80


# # Use the official Nginx image as the base image
# FROM nginx:latest

# # Copy the project files into the Nginx server's root directory
# COPY . /usr/share/nginx/html

# # Expose port 80 for HTTP traffic
# EXPOSE 80

# # Start the Nginx server
# CMD ["nginx", "-g", "daemon off;"]
