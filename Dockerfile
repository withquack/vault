FROM node:lts-slim as builder
WORKDIR /app

COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY nginx_custom.conf /etc/nginx/nginx_custom.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
