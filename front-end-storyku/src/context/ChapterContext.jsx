import React, { createContext, useContext, useState } from 'react';

const ChapterContext = createContext();

export const ChapterProvider = ({ children }) => {
  const [temporaryChapters, setTemporaryChapters] = useState([]);
  const [temporaryStory, setTemporaryStory] = useState(null);

  const addTemporaryChapter = (chapter) => {
    setTemporaryChapters(prev => [...prev, chapter]);
  };

  const removeTemporaryChapter = (index) => {
    setTemporaryChapters(prev => prev.filter((_, i) => i !== index));
  };

  const clearTemporaryChapters = () => {
    setTemporaryChapters([]);
  };

  const clearTemporaryStory = () => {
    setTemporaryStory(null); 
  };

  return (
    <ChapterContext.Provider value={{
      temporaryChapters,
      temporaryStory,
      setTemporaryStory,
      addTemporaryChapter,
      removeTemporaryChapter,
      clearTemporaryChapters,
      setTemporaryChapters,
      clearTemporaryStory,
    }}>
      {children}
    </ChapterContext.Provider>
  );
};

export const useChapterContext = () => {
  const context = useContext(ChapterContext);
  if (!context) {
    throw new Error('useChapterContext must be used within a ChapterProvider');
  }
  return context;
};