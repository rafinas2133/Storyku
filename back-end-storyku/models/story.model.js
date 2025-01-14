const db = require('../config/database');

class Story {
    static async findAll() {
        try {
            const [rows] = await db.query('SELECT * FROM story');
            return rows;
        } catch (error) {
            throw error;
        }
    }

    static async findById(id) {
        try {
            const [rows] = await db.query('SELECT * FROM story WHERE id = ?', [id]);
            return rows[0];
        } catch (error) {
            throw error;
        }
    }

    static async create(storyData) {
        try {
            const { title, author, synopsis, category, story_cover, tags, status } = storyData;
            const [result] = await db.query(
                'INSERT INTO story (title, author, synopsis, category, story_cover, tags, status) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [title, author, synopsis, category, story_cover, tags, status]
            );
            return {
                id: result.insertId,
                ...storyData
            };
        } catch (error) {
            throw error;
        }
    }

    static async update(id, storyData) {
        try {
            const { title, author, synopsis, category, tags, status } = storyData;
            let query = 'UPDATE story SET title = ?, author = ?, synopsis = ?, category = ?, tags = ?, status = ?';
            let params = [title, author, synopsis, category, tags, status];

            if (storyData.story_cover) {
                query += ', story_cover = ?';
                params.push(storyData.story_cover);
            }

            query += ' WHERE id = ?';
            params.push(id);

            const [result] = await db.query(query, params);
            if (result.affectedRows === 0) {
                throw new Error('Story not found');
            }
            return {
                id: parseInt(id),
                ...storyData
            };
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            const [rows] = await db.query('SELECT story_cover FROM story WHERE id = ?', [id]);
            if (rows.length === 0) {
                throw new Error('Story not found');
            }

            const [result] = await db.query('DELETE FROM story WHERE id = ?', [id]);
            return { story_cover: rows[0].story_cover };
        } catch (error) {
            throw error;
        }
    }

    static validateCategory(category) {
        const validCategories = ['Financial', 'Technology', 'Health'];
        return validCategories.includes(category);
    }

    static validateStatus(status) {
        const validStatuses = ['Publish', 'Draft'];
        return validStatuses.includes(status);
    }

    static validate(storyData) {
        const { title, author, synopsis, category, status } = storyData;
        
        if (!title || !author || !synopsis || !category || !status) {
            throw new Error('Title, author, synopsis, category, and status are required');
        }

        if (!this.validateCategory(category)) {
            throw new Error('Invalid category. Must be Financial, Technology, or Health');
        }

        if (!this.validateStatus(status)) {
            throw new Error('Invalid status. Must be Publish or Draft');
        }

        return true;
    }
}

module.exports = Story;