import ApiService from "../../services/ApiService";
import { useQuery } from "@tanstack/react-query";

export const useGetAllStory = () => {
    return useQuery({
        queryKey: ["/story/"],
        queryFn: async () => await ApiService.get("/story/"),
    });
};
