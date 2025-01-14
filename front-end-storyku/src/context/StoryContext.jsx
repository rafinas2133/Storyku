import React, { createContext, useContext, useState } from "react";

const StoryContext = createContext();

export const useStoryContext = () => useContext(StoryContext);

export const StoryProvider = ({ children }) => {
  const [storyData, setStoryData] = useState({
    story_cover: null,
    title: "",
    author: "",
    synopsis: "",
    category: "",
    tags: "",
    status: "",
  });

  return (
    <StoryContext.Provider value={{ storyData, setStoryData }}>
      {children}
    </StoryContext.Provider>
  );
};
