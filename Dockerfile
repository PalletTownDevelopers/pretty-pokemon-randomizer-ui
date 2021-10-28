FROM node as build-stage

WORKDIR /app
COPY package*.json ./

#Install dependencies
RUN npm install
COPY . .

# Run lint
RUN npm run lint

# Run audit
RUN npm audit

# Build frontend
RUN npm run build

# étape de production
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY .nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
