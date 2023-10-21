FROM node

WORKDIR /HW11/app

COPY package*.json ./

RUN npm install --silent

COPY . ./

EXPOSE 3100