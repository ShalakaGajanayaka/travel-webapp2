#!/bin/bash

# Update system packages
sudo apt update
sudo apt upgrade -y

# Install required packages
sudo apt install -y nodejs npm nginx git

# Install PM2 globally
sudo npm install -g pm2

# Clone the repository (if not already done)
# git clone <your-repository-url>

# Install dependencies for server
cd server
npm install

# Install dependencies for client
cd ../client
npm install
npm run build

# Install dependencies for admin
cd ../admin
npm install
npm run build

# Configure Nginx for all domains
sudo tee /etc/nginx/sites-available/travel-app << EOF
# Main site configuration
server {
    listen 80;
    server_name intrepiid.expert www.intrepiid.expert;

    # Frontend
    location / {
        root /path/to/your/client/dist;
        try_files \$uri \$uri/ /index.html;
    }
}

# Admin site configuration
server {
    listen 80;
    server_name admin.intrepiid.expert;

    # Admin frontend
    location / {
        root /path/to/your/admin/dist;
        try_files \$uri \$uri/ /index.html;
    }
}

# API configuration
server {
    listen 80;
    server_name api.intrepiid.expert;

    # Backend API
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# Enable the site
sudo ln -s /etc/nginx/sites-available/travel-app /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# Start the server with PM2
cd ../server
pm2 start app.js --name "travel-app-server"

# Save PM2 process list
pm2 save

# Configure PM2 to start on boot
sudo pm2 startup

# Install and configure SSL with Let's Encrypt
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d intrepiid.expert -d www.intrepiid.expert -d admin.intrepiid.expert -d api.intrepiid.expert 