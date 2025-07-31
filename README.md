# 🏁 Tugas Akhir (TA) - Final Project

**Nama Mahasiswa**: Nadya Zuhria Amana  
**NRP**: 5025211058  
**Judul TA**: Pengembangan Antarmuka Multimodal untuk Aplikasi Pembelajaran Asistif Bahasa Oral Anak Tuli di SLB Karya Mulia Surabaya  
**Dosen Pembimbing**: Siska Arifiani, S.Kom., M.Kom  
**Dosen Ko-pembimbing**: Endah Riwayati, S.Pd

---

## 📺 Demo Aplikasi  
Embed video demo di bawah ini (ganti `VIDEO_ID` dengan ID video YouTube Anda):  

[![Demo Aplikasi](https://drive.google.com/uc?export=view&id=1ClahnhtM5VUy1a22fC44B_XaDrQtCi6E)](https://www.youtube.com/watch?v=frrw7sgdrB0)  
*Klik gambar di atas untuk menonton demo*

## 🛠 Panduan Instalasi & Menjalankan Software  

### Prasyarat  
- Daftar dependensi :
  - Node.js v18+
  - npm
  - Expo CLI (untuk aplikasi mobile)

### Langkah-langkah  
1. **Clone Repository**  
   ```bash
   git clone https://github.com/Informatics-ITS/ta-nadyaza.git
   cd ta-nadyaza
   ```
2. **Instalasi Dependensi**
- Untuk aplikasi mobile:
   ```bash
   cd voca/mobile
   npm install
   ```
- Untuk aplikasi dashboard:
   ```bash
   cd voca/dashboard
   npm install
   ```
3. **Konfigurasi**
- Salin/rename file .env.example menjadi .env
- Isi variabel lingkungan sesuai kebutuhan (database, API key, dll.)
4. **Jalankan Aplikasi**
- Untuk Web Dashboard
   ```bash
   cd voca/dashboard
   npm run dev
   ```
- Untuk Mobile App
   ```bash
   cd voca/mobile
   npx expo start
   ```
5. Buka browser dan kunjungi: `http://localhost:3000` (sesuaikan dengan port proyek Anda)

---

## 📚 Dokumentasi Tambahan

- 🔗 [Prototipe Mobile (Figma)](https://www.figma.com/proto/paEsleqadhn0hNcEb3ALRc/Voca-part-2?page-id=1011%3A41299&node-id=1011-50209&p=f&viewport=2196%2C36%2C0.09&t=kvDRjvmOF09hf8vF-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1011%3A48871&show-proto-sidebar=1)
- 🔗 [Prototipe Dashboard (Figma)](https://www.figma.com/proto/paEsleqadhn0hNcEb3ALRc/Voca-part-2?page-id=1169%3A27318&node-id=1169-34474&viewport=135%2C79%2C0.05&t=witSrHqtJSF2kqo5-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1169%3A34474)

## ✅ Validasi

Pastikan proyek memenuhi kriteria berikut sebelum submit:
- Source code dapat di-build/run tanpa error
- Video demo jelas menampilkan fitur utama
- README lengkap dan terupdate
- Tidak ada data sensitif (password, API key) yang ter-expose

---

## ⁉️ Pertanyaan?

Hubungi:
- Penulis: [nadyazuhria@gmail.com]
- Pembimbing Utama: [siska@its.ac.id]
