FROM node:22-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --omit=dev

COPY app.js ./
COPY public ./public

EXPOSE 3000

CMD ["node", "app.js"]
