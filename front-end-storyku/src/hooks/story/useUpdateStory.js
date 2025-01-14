import ApiService from "../../services/ApiService";
import { useMutation } from "@tanstack/react-query";

export const useUpdateStory = () => {
    return useMutation({
        mutationFn: async ({ storyId, data }) => await ApiService.put("/story/" + storyId, data)
    });
};
