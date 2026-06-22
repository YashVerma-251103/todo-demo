FROM node:18-alpine
WORKDIR /app
COPY package.json ./
# npm install (not `npm ci`) — this fixture intentionally ships without a lockfile.
RUN npm install --omit=dev --no-audit --no-fund
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
