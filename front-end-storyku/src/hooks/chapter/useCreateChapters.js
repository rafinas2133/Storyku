import ApiService from "../../services/ApiService";
import { useMutation } from "@tanstack/react-query";

export const useCreateChapters = () => {
    return useMutation({
        mutationFn: async ({storyId, data}) => await ApiService.post(`/story/${storyId}/chapters/`, data),
    });
};