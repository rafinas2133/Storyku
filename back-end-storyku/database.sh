-- Buat database
CREATE DATABASE storyDB;
USE storyDB;

-- Buat tabel story
CREATE TABLE story (
   id INT AUTO_INCREMENT PRIMARY KEY,
   title VARCHAR(255) NOT NULL,
   author VARCHAR(255) NOT NULL,
   synopsis TEXT NOT NULL, 
   category ENUM('Financial', 'Technology', 'Health') NOT NULL,
   story_cover VARCHAR(255),
   tags VARCHAR(255),
   status ENUM('Publish', 'Draft') NOT NULL,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Buat tabel chapters dengan foreign key ke story
CREATE TABLE chapters (
   id INT AUTO_INCREMENT PRIMARY KEY,        
   title VARCHAR(255) NOT NULL,              
   story TEXT NOT NULL,                      
   story_id INT NOT NULL,                    
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   FOREIGN KEY (story_id) REFERENCES story(id) ON DELETE CASCADE 
);

-- Contoh insert data story
INSERT INTO story (title, author, synopsis, category, tags, status) 
VALUES (
   'Judul Story',
   'Nama Author',
   'Sinopsis cerita...',
   'Financial',
   'finance,investment',
   'Publish'
);

-- Contoh insert chapter
INSERT INTO chapters (title, story, story_id)
VALUES (
   'Chapter 1',
   'Isi cerita chapter 1...',
   1  -- story_id yang merujuk ke tabel story
);

-- Query untuk mengambil story dengan chapter-nya
SELECT s.*, c.title as chapter_title, c.story as chapter_content
FROM story s
LEFT JOIN chapters c ON s.id = c.story_id
WHERE s.id = 1;

-- Reset auto increment jika perlu
ALTER TABLE story AUTO_INCREMENT = 1;
ALTER TABLE chapters AUTO_INCREMENT = 1;

-- Hapus data tanpa menghapus struktur
TRUNCATE TABLE chapters;
TRUNCATE TABLE story;

-- Check struktur tabel
DESCRIBE story;
DESCRIBE chapters;