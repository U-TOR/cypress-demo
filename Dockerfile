FROM mongo:4.0.10-xenial

EXPOSE 3000
EXPOSE 4100
EXPOSE 27017

# Install Node
RUN apt-get update \
    && apt-get install -y  curl python-software-properties \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash - \
    && apt-get install -y nodejs

COPY . /app
WORKDIR /app

