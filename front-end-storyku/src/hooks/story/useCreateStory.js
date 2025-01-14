import ApiService from "../../services/ApiService";
import { useMutation } from "@tanstack/react-query";

export const useCreateStory = () => {
    return useMutation({
        mutationFn: async (data) => await ApiService.post("/story/", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            }

        }),
    });
};
