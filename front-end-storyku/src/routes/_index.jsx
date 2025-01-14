import { createHashRouter} from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { DasboardLayout } from "../components/@layout/DashboardLayout";
import { StoryPage } from "../pages/StoryPage";
import { CreateStoryPage } from "../pages/CreateStoryPage";
import { DetailStoryPage } from "../pages/DetailStoryPage";
import { UpdateStoryPage } from "../pages/UpdateStoryPage";
import { CreateChapterPage } from "../pages/CreateChapterPage";
import { DetailChapterPage } from "../pages/DetailChapterPage";
import { UpdateChapterPage } from "../pages/UpdateChapterPage";

export const appRouter = createHashRouter([
    {
        path: "/",
        element: <DasboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "story",
                children: [
                    {
                        index: true,
                        element: <StoryPage />,
                    },
                    {
                        path: "add",
                        element: <CreateStoryPage />,
                    },
                    {
                        path: ":id/detail",
                        element: <DetailStoryPage />,
                    },
                    {
                        path: ":id/update",
                        element: <UpdateStoryPage />,
                    },
                    {
                        path: "chapter/add",
                        element: <CreateChapterPage />,
                    },
                    {
                        path: ":id/chapter/:chapterId/detail",
                        element: <DetailChapterPage />,
                    },
                    {
                        path: ":id/chapter/:chapterId/update",
                        element: <UpdateChapterPage />,
                    },
                ],
            },
        ],
    },
]);
