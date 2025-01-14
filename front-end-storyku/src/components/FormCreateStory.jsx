import { InputV2, TagsInput } from "./@ui/Input";
import { Form } from "./@ui/Form";
import { File } from "./@ui/File";
import { DropdownOptions } from "./@ui/DropdownOptions";
import { useChapterContext } from '../context/ChapterContext';
import { useEffect } from "react";
import { Link } from "react-router-dom";


export const FormCreateStory = ({ children, isDisabled, ...props }) => {

    const categoryOptions = [
        { label: "Financial", value: "Financial" },
        { label: "Health", value: "Health" },
        { label: "Technology", value: "Technology" },
    ];

    const statusOptions = [
        { value: "Publish", label: "Publish" },
        { value: "Draft", label: "Draft" }
    ];

    return (
        <Form
            initialValues={ {
                story_cover: null,
                title: "",
                author: "",
                synopsis: "",
                category: "",
                tags: "",
                status: ""
            }}
            {...props}
        >
            <div className="w-full mx-auto">
                <div className="flex gap-4 justify-between">
                    <InputV2 
                        name="title" 
                        id="title" 
                        placeholder="Enter story title"
                        className={"w-full"}
                        disabled={isDisabled}
                    >
                        Title
                    </InputV2>
                    <InputV2 
                        name="author" 
                        id="author" 
                        placeholder="Enter writer name"
                        className={"w-full"}
                        disabled={isDisabled}
                    >
                        Writer Name
                    </InputV2>
                </div>
                <InputV2 
                    as="textarea" 
                    rows="4" 
                    name="synopsis" 
                    id="synopsis" 
                    placeholder="Enter synopsis"
                    disabled={isDisabled}
                >
                    Synopsis
                </InputV2>
                <div className="flex gap-4 justify-between">
                    <DropdownOptions 
                        name="category" 
                        options={categoryOptions}
                        isDisabled={isDisabled}
                    >
                        Category
                    </DropdownOptions>    
                    <TagsInput 
                        name="tags"
                        isDisabled={isDisabled}
                    >
                        Tags/Keywords Story
                    </TagsInput>
                </div>
                <div className="flex gap-4 justify-between">
                    <File 
                        name="story_cover"
                        disabled={isDisabled} 
                    />
                    <DropdownOptions 
                        name="status" 
                        options={statusOptions}
                        isDisabled={isDisabled}
                    >
                        Status
                    </DropdownOptions>
                </div>

                <div className="flex justify-between items-center mt-8">
                    <h2 className="text-xl font-medium">Chapters</h2> 
                        <Link 
                            to="/story/chapter/add" 
                            className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600"
                        >
                            + Add Chapter
                        </Link>
                </div>


                <div className="mt-4">{children}</div>
            </div>
        </Form>
    );
};