# FROM docker

# # Install Node
# RUN apk add --update nodejs npm 

FROM mongo:4.0.10-xenial

# FROM cypress/browsers	

EXPOSE 3000
EXPOSE 4100
EXPOSE 27017

# Install Node
RUN apt-get update \
    && apt-get install -y  curl python-software-properties \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash - \
    && apt-get install -y nodejs


# Install Cypress
RUN apt-get update && apt-get install -y xvfb libgtk2.0-0 libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 
    # && npm install cypress

# Install Mongo 
# RUN  apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6 \
# 	&& echo "deb http://repo.mongodb.org/apt/debian jessie/mongodb-org/3.4 main" | tee /etc/apt/sources.list.d/mongodb-org-3.4.list \
# 	&& apt-get update \
# 	&& apt-get install -y mongodb-org \
# 	&& mkdir -p /data/db 

# COPY . /app
# WORKDIR /app

# CMD nohup mongod 

