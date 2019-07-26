# FROM docker

# # Install Node
# RUN apk add --update nodejs npm 

FROM mongo:4.0.10-xenial

EXPOSE 3000
EXPOSE 4100
EXPOSE 27017

# Install Node
RUN apt-get update \
    && apt-get install -y  curl python-software-properties \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash - \
    && apt-get install -y nodejs


# Install Cypress
RUN apt-get update && apt-get install -y xvfb libgtk2.0-0 libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 \
    && npm install cypress

#COPY . /app
#WORKDIR /app

