# Backend Readme

## Project Name

Storyku Backend

---

## Table of Contents

- [Feature](#feature)
- [Library](#library)
- [Project Structure](#project-structure)
- [Cara Menggunakan](#cara-menggunakan)

---

### Feature

- Story List
- Add Story
- Story Detail
- Edit Story
- Delete Story

---

### Library

- Express.js
- Body Parser
- CORS
- dotenv
- Multer
- MySQL2

---

### Project Structure

```
- config
- controllers
- middleware
- models
- routes
```

---

### Cara Menggunakan

1. Clone repository ini:
   ```bash
   git clone https://gitlab.com/storyku/back-end-storyku
   ```
2. Masuk ke folder proyek:
   ```bash
   cd back-end-storyku
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Buat database di mysql atau lainnya dan jalankan query yang berada di database.sh.
5. Samakan config .env dengan databasemu.
6. Jalankan server:
   ```bash
   node app.js
   ```
