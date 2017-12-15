FROM node:8.9.3-alpine

MAINTAINER Aaron O. Ellis <aaron.o.ellis@gmail.com>

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --production
COPY . .

CMD ["npm", "start"]
