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
  
* catatan : proyek ini tidak secara penuh containerized dengan docker karena projek ini hanya membangun dan menjalankan container dari image postgre saja. jadi dockernya hanya untuk menjalankan postgrenya saja bukan dengan sekalian nodenya (nodenya menggunakan local machine)

## 1. Inisilisasi NPM
```npm init```

## 2. Membuat file .gitignore
Agar folder dengan ukuran besar seperti `node_modules/` dan file dengan informasi sensitif seperti .env tidak ikut terupload di repository remote github.

## 3. Membuat .env dan .env.development`
`.env` untuk konfigurasi db, sedangkan `.env.development` untuk membuat dokumentasi api (bisa dibuka di postman)

## 4. Menginstall dotenv
agar bisa mengakses variabel di file `.env`
```
npm install dotenv
```

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
Siapkan proyek Prisma ORM Anda dengan membuat templat file skema Prisma dengan perintah berikut:
```
npx prisma init
```
untuk push skema (biasanya untuk development pakai push, sedangkan untuk production pakai migration)
```
npx prisma db push
```
ada lagi tools dari prisma yang bisa membantu dalam mengembangkan api, namanya prisma studio, sebuah visual editor yang dikembangkan oleh prisma. bisa digunakan dengan menjalankan cl
```
npx prisma studio
```
* jangan lupa install extension prisma di vscode.
prisma by prisma.io : syntax highlighting, formatting, auto-completion, jump-to-definition and linting for .prisma files.

## 8. Menginstall Nodemon (tidak wajib)
ini tools pendukung yang akan secara otomatis merestart saat terjadi perubahan (kayak hotreload atau liveserver)
sebelumnya install dulu secara global, maksudnya diinstall di system path.

```
npm install -g nodemon
```
selanjutnya bisa install di dependencies development
``` 
npm install --save-dev nodemon
```
catatan : --save-dev untuk menginstall dependencies di lingkungan development saja, bisa cek di package.json nodemon akan berada di bagian dev dependencies.
```
"devDependencies": {
    "nodemon": "^3.1.9"
  }
```
nah kalau mau nerapin auto restart kalau ada perubahan ini runnya gak lagi pake
```
node .
```
tetapi
```
nodemon .
```

# REFERENSI
Sumber : Channel Youtube VoidFnc
https://www.youtube.com/watch?v=5YUTB3WGxWs&t=5616s

