FROM nginx

# Copy the built code
COPY build /usr/share/nginx/html

# Copy the Nginx configuration file 
COPY nginx.conf /etc/nginx/nginx.conf

# Copy ssl certificates
COPY ssl-certificate /usr/share/ssl-certificate

# Expose port 80 to the host machine
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]