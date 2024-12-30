# BASIC REST API (EXPRESS JS, PRISMA, POSTGRE)

# SETUP
## 0. Setup Postgres dengan Docker
### 0.1 Unduh image postgres dari docker
``` 
docker pull postgres 
```
### 0.2 Buat dan jalankan container
```
docker run --name postgres-container -p 5432:5432 -e POSTGRES-PASSWORD=12345 -d postgres
```  
Catatan singkat tentang docker
* `--name nama-container`
- `-p xxxx:xxxx` (port)
- `-d nama-image`

* tambahan : untuk mengecek apakah postgres sudah run atau belum, bisa menggunakan bantuan aplikasi dbeaver

## 1. Inisilisasi NPM
```npm init```

## 2. Membuat file .gitignore
Agar folder dengan ukuran besar seperti `node_modules/` dan file dengan informasi sensitif seperti .env tidak ikut terupload di repository remote github.

## 3. Membuat .env dan .env.development`
`.env` untuk konfigurasi db, sedangkan `.env.development` untuk membuat dokumentasi api (bisa dibuka di postman)

## 4. Menginstall dotenv
agar bisa mengakses variabel di file `.env`

## 5. Menginstall Express JS
```
npm install express
```

## 6. Menginstall CORS
```
npm install cors
```

## 7. Menginstall ORM Prisma
```
npm install prisma
```

# REFERENSI
Sumber : Channel Youtube VoidFnc
https://www.youtube.com/watch?v=5YUTB3WGxWs&t=5616s

