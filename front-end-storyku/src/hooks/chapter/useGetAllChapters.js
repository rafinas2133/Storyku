import ApiService from "../../services/ApiService";
import { useQuery } from "@tanstack/react-query";

export const useGetAllChapters = (storyId) => {
    return useQuery({
        queryKey: [
            "/story/",
            { storyId },
            "/chapters/",
        ],
        queryFn: async () =>
            await ApiService.get(
                `/story/${storyId}/chapters/`
            ),
    });
};
