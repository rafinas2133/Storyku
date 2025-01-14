const Chapter = require('../models/chapter.model');

class ChapterController {
    static async getAllChapters(req, res) {
        try {
            const storyId = req.params.storyId;
            
            const storyExists = await Chapter.verifyStory(storyId);
            if (!storyExists) {
                return res.status(404).json({ message: 'Story not found' });
            }

            const chapters = await Chapter.findAllByStoryId(storyId);
            res.json(chapters);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error retrieving chapters' });
        }
    }

    static async getChapterById(req, res) {
        try {
            const { storyId, id: chapterId } = req.params;

            const storyExists = await Chapter.verifyStory(storyId);
            if (!storyExists) {
                return res.status(404).json({ message: 'Story not found' });
            }

            const chapter = await Chapter.findOne(chapterId, storyId);
            if (!chapter) {
                return res.status(404).json({ message: 'Chapter not found' });
            }

            res.json(chapter);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error retrieving chapter' });
        }
    }

    static async createChapter(req, res) {
        try {
            const storyId = req.params.storyId;
            const { title, story } = req.body;

            const storyExists = await Chapter.verifyStory(storyId);
            if (!storyExists) {
                return res.status(404).json({ message: 'Story not found' });
            }

            const chapterData = {
                title,
                story,
                story_id: storyId
            };

            Chapter.validate(chapterData);

            const newChapter = await Chapter.create(chapterData);
            res.status(201).json(newChapter);

        } catch (err) {
            console.error(err);
            if (err.message.includes('required')) {
                return res.status(400).json({ message: err.message });
            }
            res.status(500).json({ message: 'Error creating chapter' });
        }
    }

    static async updateChapter(req, res) {
        try {
            const { storyId, id: chapterId } = req.params;
            const { title, story } = req.body;

            const storyExists = await Chapter.verifyStory(storyId);
            if (!storyExists) {
                return res.status(404).json({ message: 'Story not found' });
            }

            const updateData = {
                title,
                story
            };

            Chapter.validate(updateData);

            const updatedChapter = await Chapter.update(chapterId, storyId, updateData);
            res.json(updatedChapter);

        } catch (err) {
            console.error(err);
            if (err.message === 'Chapter not found') {
                return res.status(404).json({ message: err.message });
            }
            if (err.message.includes('required')) {
                return res.status(400).json({ message: err.message });
            }
            res.status(500).json({ message: 'Error updating chapter' });
        }
    }

    static async deleteChapter(req, res) {
        try {
            const { storyId, id: chapterId } = req.params;

            const storyExists = await Chapter.verifyStory(storyId);
            if (!storyExists) {
                return res.status(404).json({ message: 'Story not found' });
            }

            await Chapter.delete(chapterId, storyId);
            res.status(204).send();

        } catch (err) {
            console.error(err);
            if (err.message === 'Chapter not found') {
                return res.status(404).json({ message: err.message });
            }
            res.status(500).json({ message: 'Error deleting chapter' });
        }
    }
}

module.exports = ChapterController;