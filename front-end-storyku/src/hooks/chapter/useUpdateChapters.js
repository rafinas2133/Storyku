import ApiService from "../../services/ApiService";
import { useMutation } from "@tanstack/react-query";

export const useUpdateChapters = () => {
    return useMutation({
        mutationFn: async ({ storyId, chaptersId, data }) => await ApiService.put(`/story/${storyId}/chapters/` + chaptersId, data)
    });
};
