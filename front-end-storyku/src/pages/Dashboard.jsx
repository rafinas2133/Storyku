import React from "react";
import { useGetAllStory } from "../hooks/story/useGetAllStory";
import { Skeleton } from "../components/@ui/Skeleton";
import { StoryCard } from "../components/StoryCard";

export const Dashboard = () => {
    const { data, isLoading, error } = useGetAllStory();

    if (isLoading) {
        return <Skeleton className={"mx-auto w-full h-full"} />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="p-4 items-center justify-center bg-slate-50">
            <h1 className="text-4xl font-bold mb-6 text-center">Storyku</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {data &&
                    data
                        .filter((story) => story.status === "Publish") // Filter only published stories
                        .map((story) => (
                            <StoryCard key={story.id} story={story} />
                        ))}
            </div>
        </div>
    );
};
