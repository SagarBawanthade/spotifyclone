# Use the official Apache HTTP server as the base image
FROM httpd:2.4

# Copy your web application files into the Apache document root
COPY . /usr/local/apache2/htdocs/

# Expose port 80 to the outside world
EXPOSE 80

# Start the Apache HTTP server
CMD ["httpd-foreground"]
