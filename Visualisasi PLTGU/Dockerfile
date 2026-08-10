# ==========================================
# STAGE 1: Build Static Assets with Node.js
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy file dependency terlebih dahulu untuk memanfaatkan Docker Layer Caching
COPY package*.json ./
RUN npm ci

# Copy seluruh source code proyek
COPY . .

# Jalankan kompilasi Vite (menghasilkan folder /app/dist)
RUN npm run build

# ==========================================
# STAGE 2: Serve Static Bundle with Nginx
# ==========================================
FROM nginx:1.27-alpine AS runner

# Hapus konfigurasi default Nginx
RUN rm -rf /etc/nginx/conf.d/*

# Copy konfigurasi kustom nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy hasil build statis (folder dist) dari Stage 1 ke folder root Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Ekspos port 80 untuk akses web
EXPOSE 80

# Jalankan Nginx di foreground
CMD ["nginx", "-g", "daemon off;"]
