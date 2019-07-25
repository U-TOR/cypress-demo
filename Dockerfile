FROM docker

EXPOSE 3000
EXPOSE 4100
EXPOSE 27017

# Install Node
RUN apk add --update nodejs npm 
