FROM node:18 as builder

WORKDIR /app/frontend

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.21

COPY --from=builder /app/frontend/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
