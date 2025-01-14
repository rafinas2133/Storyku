import { Input, InputQuill, InputV2, TagsInput } from "./@ui/Input";
import { Form } from "./@ui/Form";

export const FormCreateChapter = ({ children, isDisabled, ...props }) => {
    return (
        <Form
            initialValues={{
                title: "",
                story: "",

            }}
            {...props}
        >
            <div className="w-full mx-auto">
                    <InputV2 
                        name="title" 
                        id="title" 
                        placeholder="Enter story title"
                        className={"w-full"}
                        disabled={isDisabled}
                    >
                        Title
                    </InputV2>
                    <InputQuill 
                        name="story" 
                        id="story" 
                        placeholder="Enter story"
                        className={"w-full"}
                        isDisabled={isDisabled}
                    >
                        Story
                    </InputQuill>
                
                <div className="mt-auto">{children}</div>
            </div>
        </Form>
    );
};