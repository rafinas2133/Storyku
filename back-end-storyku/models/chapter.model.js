const db = require('../config/database');

class Chapter {
   static async findAllByStoryId(storyId) {
       try {
           const [rows] = await db.query(
               'SELECT * FROM chapters WHERE story_id = ? ORDER BY id ASC',
               [storyId]
           );
           return rows;
       } catch (error) {
           throw error;
       }
   }

   static async findOne(chapterId, storyId) {
       try {
           const [rows] = await db.query(
               'SELECT * FROM chapters WHERE id = ? AND story_id = ?',
               [chapterId, storyId]
           );
           return rows[0];
       } catch (error) {
           throw error;
       }
   }

   static async verifyStory(storyId) {
       try {
           const [rows] = await db.query(
               'SELECT id FROM story WHERE id = ?',
               [storyId]
           );
           return rows.length > 0;
       } catch (error) {
           throw error;
       }
   }

   static async create(chapterData) {
       try {
           const { title, story, story_id } = chapterData;
           const [result] = await db.query(
               'INSERT INTO chapters (title, story, story_id) VALUES (?, ?, ?)',
               [title, story, story_id]
           );
           return {
               id: result.insertId,
               title,
               story,
               story_id,
               created_at: new Date(),
               updated_at: new Date()
           };
       } catch (error) {
           throw error;
       }
   }

   static async update(chapterId, storyId, chapterData) {
       try {
           const { title, story } = chapterData;
           const [result] = await db.query(
               'UPDATE chapters SET title = ?, story = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ? AND story_id = ?',
               [title, story, chapterId, storyId]
           );
           
           if (result.affectedRows === 0) {
               throw new Error('Chapter not found');
           }
           
           return {
               id: parseInt(chapterId),
               title,
               story,
               story_id: parseInt(storyId),
               updated_at: new Date()
           };
       } catch (error) {
           throw error;
       }
   }

   static async delete(chapterId, storyId) {
       try {
           const [result] = await db.query(
               'DELETE FROM chapters WHERE id = ? AND story_id = ?',
               [chapterId, storyId]
           );
           
           if (result.affectedRows === 0) {
               throw new Error('Chapter not found');
           }
           
           return true;
       } catch (error) {
           throw error;
       }
   }

   static validate(chapterData) {
       const { title, story } = chapterData;

       if (!title || !story) {
           throw new Error('Title and story content are required');
       }

       if (title.length < 1) {
           throw new Error('Title cannot be empty');
       }

       if (story.length < 1) {
           throw new Error('Story content cannot be empty');
       }

       return true;
   }
}

module.exports = Chapter;