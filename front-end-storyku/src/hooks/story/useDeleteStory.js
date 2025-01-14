import ApiService from "../../services/ApiService";
import { useMutation } from "@tanstack/react-query";

export const useDeleteStory = () => {
    return useMutation({
        mutationFn: async (storyId) => await ApiService.delete("/story/" + storyId)
    });
};
