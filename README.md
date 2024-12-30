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

## 1. Inisilisasi NPM
```npm init```

Sumber : Channel Youtube VoidFnc
https://www.youtube.com/watch?v=5YUTB3WGxWs&t=5616s

