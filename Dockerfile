# Use an official Apache runtime as a parent image
FROM httpd:2.4

# Copy the custom index.html file from the current directory to the container
COPY ./usr/local/apache2/htdocs/

# Expose port 80 to the Docker host
EXPOSE 80
