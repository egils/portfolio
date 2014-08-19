#!/usr/bin/env bash

echo "--- Let's get to work. Installing now. ---"

echo "--- Updating packages list ---"
sudo apt-get update

echo "--- Installing base packages ---"
sudo apt-get install -y vim curl python-software-properties

echo "--- Updating packages list ---"
sudo apt-get update

echo "--- Installing node.js ---"
sudo apt-get install -y  python g++ make
sudo add-apt-repository -y ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install -y  nodejs

echo "--- Installing Ruby ---"
\curl -L https://get.rvm.io | bash -s stable
source /usr/local/rvm/scripts/rvm
rvm requirements
rvm install ruby
rvm use ruby --default
rvm rubygems current

sudo apt-get update
sudo apt-get install -y  apache2

# Add ServerName to apache2.conf
echo "ServerName www.portfolio" >> /etc/apache2/apache2.conf
# Setup hosts file
VHOST=$(cat <<EOF
<VirtualHost *:80>
DocumentRoot "/var/www/portfolio"
ServerName www.portfolio
<Directory "/var/www/portfolio">
AllowOverride All
Require all granted
</Directory>
</VirtualHost>
EOF
)
echo "${VHOST}" > /etc/apache2/sites-enabled/000-default
# Enable mod_rewrite
a2enmod rewrite

sed -i 's/AllowOverride None/AllowOverride All/' /etc/apache2/apache2.conf

echo "--- Restarting Apache ---"
sudo service apache2 restart

echo "--- All done, enjoy! :) ---"