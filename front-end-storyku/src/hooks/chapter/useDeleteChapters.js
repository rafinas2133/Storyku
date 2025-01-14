import ApiService from "../../services/ApiService";
import { useMutation } from "@tanstack/react-query";

export const useDeleteChapters = () => {
    return useMutation({
        mutationFn: async ({ storyId, chaptersId, data }) => 
            await ApiService.delete(`/story/${storyId}/chapters/${chaptersId}`, { data })
    });
};