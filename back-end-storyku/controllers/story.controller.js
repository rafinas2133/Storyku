const Story = require('../models/story.model');
const fs = require('fs');
const path = require('path');

class StoryController {
    static async getAllStories(req, res) {
        try {
            const stories = await Story.findAll();
            const storiesWithUrl = stories.map(story => ({
                ...story,
                story_cover: story.story_cover ? `https://api.storyku.site${story.story_cover}` : null
            }));
            res.json(storiesWithUrl);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error retrieving stories' });
        }
    }

    static async getStoryById(req, res) {
        try {
            const story = await Story.findById(req.params.id);
            if (!story) {
                return res.status(404).json({ message: 'Story not found' });
            }
            const storyWithUrl = {
                ...story,
                story_cover: story.story_cover ? `https://api.storyku.site${story.story_cover}` : null
            };
            res.json(storyWithUrl);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error retrieving story' });
        }
    }

    static async createStory(req, res) {
        try {
            const { title, author, synopsis, category, tags, status } = req.body;
            
            const storyData = {
                title,
                author,
                synopsis,
                category,
                tags,
                status,
                story_cover: req.file ? `/uploads/${req.file.filename}` : null
            };

            Story.validate(storyData);

            const newStory = await Story.create(storyData);
            res.status(201).json(newStory);

        } catch (err) {
            if (req.file) {
                const filePath = path.join(__dirname, '../public/uploads', req.file.filename);
                fs.unlink(filePath, (unlinkErr) => {
                    if (unlinkErr) console.error('Error deleting file:', unlinkErr);
                });
            }

            console.error(err);
            res.status(400).json({ message: err.message });
        }
    }

    static async updateStory(req, res) {
        try {
            const { title, author, synopsis, category, tags, status } = req.body;
            const id = req.params.id;

            const existingStory = await Story.findById(id);
            if (!existingStory) {
                return res.status(404).json({ message: 'Story not found' });
            }

            const updateData = {
                title,
                author,
                synopsis,
                category,
                tags,
                status
            };

            if (req.file) {
                updateData.story_cover = `/uploads/${req.file.filename}`;

                if (existingStory.story_cover) {
                    const oldFilePath = path.join(__dirname, '../public', existingStory.story_cover);
                    fs.unlink(oldFilePath, (err) => {
                        if (err) console.error('Error deleting old file:', err);
                    });
                }
            }

            Story.validate(updateData);

            const updatedStory = await Story.update(id, updateData);
            res.json(updatedStory);

        } catch (err) {
            if (req.file) {
                const filePath = path.join(__dirname, '../public/uploads', req.file.filename);
                fs.unlink(filePath, (unlinkErr) => {
                    if (unlinkErr) console.error('Error deleting file:', unlinkErr);
                });
            }

            console.error(err);
            res.status(400).json({ message: err.message });
        }
    }

    static async deleteStory(req, res) {
        try {
            const result = await Story.delete(req.params.id);
            
            if (result.story_cover) {
                const filePath = path.join(__dirname, '../public', result.story_cover);
                fs.unlink(filePath, (err) => {
                    if (err) console.error('Error deleting file:', err);
                });
            }

            res.status(204).send();
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error deleting story' });
        }
    }
}

module.exports = StoryController;