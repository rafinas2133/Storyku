const express = require('express');
const router = express.Router();
const ChapterController = require('../controllers/chapter.controller');

router.get('/:storyId/chapters', ChapterController.getAllChapters);
router.get('/:storyId/chapters/:id', ChapterController.getChapterById);
router.post('/:storyId/chapters', ChapterController.createChapter);
router.put('/:storyId/chapters/:id', ChapterController.updateChapter);
router.delete('/:storyId/chapters/:id', ChapterController.deleteChapter);

module.exports = router;