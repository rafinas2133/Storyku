const express = require('express');
const router = express.Router();
const storyController = require('../controllers/story.controller');
const upload = require('../config/multer');

router.get('/', storyController.getAllStories);
router.get('/:id', storyController.getStoryById);
router.post('/', upload.single('story_cover'), storyController.createStory);
router.put('/:id', upload.single('story_cover'), storyController.updateStory);
router.delete('/:id', storyController.deleteStory);

module.exports = router;