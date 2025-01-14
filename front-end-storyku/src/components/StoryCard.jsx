import React from "react";

export const StoryCard = ({ story }) => {

    return (
        <div className="group flex flex-col border bg-slate-200 border-gray-300 rounded-lg overflow-hidden p-4 w-full hover:bg-gray-300 hover:shadow-md">
            <div className="overflow-hidden">
                <img
                    src={story.story_cover ?? 'https://via.placeholder.com/300x200?text=Image+Not+Available'} 
                    alt="Story Cover"
                    loading="lazy"
                    className="w-full h-52 object-cover mb-4 transition-transform duration-1000 ease-in-out transform group-hover:scale-110"
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
                      }}           
                />
            </div>
            <div className="flex flex-col flex-grow">
                <h2 className="text-xl font-semibold">{story.title}</h2>
                <p><strong>Author:</strong> {story.author}</p>
                <p><strong>Category:</strong> {story.category}</p>
                <p><strong>Tags:</strong> {story.tags}</p>
                <p className="mt-2"><strong>Synopsis:</strong> {story.synopsis}</p>
            </div>
        </div>
    );
};
