const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const storyRoutes = require('./routes/story.routes');
const chapterRoutes = require('./routes/chapter.routes');
const errorMiddleware = require('./middleware/error.middleware');

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    next();
});

const cors = require('cors');
const isDevelopment = process.env.NODE_ENV !== 'production';

app.use(cors({
    origin: isDevelopment 
        ? '*'   
        : 'https://storyku.site', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());
app.use('/uploads', express.static('public/uploads'));

app.use('/api/story', storyRoutes);
app.use('/api/story', chapterRoutes);

app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});