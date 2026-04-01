FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
RUN apk add --no-cache su-exec
RUN addgroup -S app && adduser -S app -G app

COPY --from=build /app/dist ./dist
COPY --from=build /app/server ./server
COPY --from=build /app/package.json ./
COPY --from=build /app/package-lock.json ./
RUN npm ci --omit=dev

RUN mkdir -p /app/server/data && chown -R app:app /app/server/data
RUN chmod +x /app/server/entrypoint.sh

EXPOSE 3000
CMD ["/app/server/entrypoint.sh"]
