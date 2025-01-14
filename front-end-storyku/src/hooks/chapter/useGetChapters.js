import ApiService from "../../services/ApiService";
import { useQuery } from "@tanstack/react-query";

export const useGetChapters = (storyId, chaptersId) => {
    return useQuery({
        queryKey: [
            "/story/",
            { storyId },
            "/chapters/",
            { chaptersId },
        ],
        queryFn: async () =>
            await ApiService.get(
                `/story/${storyId}/chapters/${chaptersId}`
            ),
    });
};
