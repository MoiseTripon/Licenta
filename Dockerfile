# syntax=docker/dockerfile:1

# Use an official PHP runtime as a parent image
FROM php:8.0-apache

# Set the working directory to /var/www/html (Apache web root)
WORKDIR /var/www/html

# Copy the current directory contents into the container at /var/www/html
COPY . .

# Install any PHP extensions or dependencies your application requires
# For example, if you need to install additional PHP extensions:
# RUN docker-php-ext-install pdo pdo_mysql

# Expose port 80 (the default HTTP port for Apache)
EXPOSE 80

# Start the Apache web server
CMD ["apache2-foreground"]
