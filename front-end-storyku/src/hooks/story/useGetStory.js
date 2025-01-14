import ApiService from "../../services/ApiService";
import { useQuery } from "@tanstack/react-query";

export const useGetStory = (storyId) => {
    return useQuery({
        queryKey: ["/story/", { storyId }],
        queryFn: async () =>
            await ApiService.get("/story/" + storyId),
    });
};
