|       | Pemrograman Berbasis Framework 2025 |
| ----- | ----------------------------------- |
| NIM   | 2241720197                          |
| Nama  | Emir Abiyyu Dellanggra                  |
| Kelas | TI - 3C                             |

# Jobsheet Week 3

## Langkah-langkah Praktikum

### 1. Persiapan Lingkungan

1. Pastikan Node.js dan npm sudah terinstal di komputer Anda. Anda dapat memeriksanya dengan menjalankan perintah berikut di terminal atau command prompt:
2. Buat direktori baru untuk proyek Next.js Anda
3. Inisialisasi proyek Next.js dengan menjalankan perintah berikut: Perhatikan bahwa App Router belum digunakan
4. Jalankan aplikasi Next.js dengan perintah: Aplikasi akan terbuka di browser pada alamat http://localhost:3000.

### 2. Membuat Halaman dengan Server-Side Rendering (SSR)

1. Buka file pages/index.tsx di text editor Anda.
2. Ganti kode di dalamnya dengan kode berikut untuk membuat halaman sederhana:
3. Simpan file dan lihat perubahan di browser. Anda akan melihat halaman utama dengan teks "Selamat Datang di Website Saya!".
   ![alt text](public/1.png)

### 3. Menggunakan Static Site Generation (SSG)

1. Buat file baru di direktori pages dengan nama blog js.
2. Tambahkan kode berikut untuk membuat halaman blog dengan SSG:
3. Simpan file dan buka http://localhost:3000/blog di browser. Anda akan melihat daftar post yang
   diambil dari API eksternal.
   ![alt text](public/2.png)

### 4. Menggunakan Dynamic Routes

1. Buat direktori baru di pages dengan nama blog.
2. Buat file di dalam direktori blog dengan nama [slug].js
3. Tambahkan kode berikut untuk membuat halaman dinamis berdasarkan slug:
4. Simpan file dan buka http://localhost:3000/blog/contoh-post di browser. Anda akan melihat
   halaman yang menampilkan slug dari URL.
   ![alt text](public/3.png)

### 5. Menggunakan API Routes

1. Pastikan terdapat direktori di pages dengan nama api.
2. Buat file di dalam direktori api dengan nama products.js.
3. Tambahkan kode berikut untuk membuat API route yang mengembalikan daftar produk:
4. Buat file baru di pages dengan nama products.js untuk menampilkan daftar produk:
5. Simpan file dan buka http://localhost:3000/products di browser. Anda akan melihat daftar
   produk yang diambil dari API route.
   ![alt text](public/4.png)

### 6. Menggunakan Link Component

1. Buka file pages/index.tsx dan tambahkan modif dengan kode berikut untuk membuat link ke
   halaman lain:
2. Buat file baru di pages dengan nama about.js untuk halaman "Tentang Kami":
3. Simpan file dan buka http://localhost:3000 di browser. Klik link "Tentang Kami" untuk navigasi ke
   halaman tentang.
   ![alt text](public/5.png)
