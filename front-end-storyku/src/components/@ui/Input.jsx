import { useField, Field, useFormikContext } from "formik";
import { tr } from "motion/react-client";
import { useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const Input = ({ children, ...props }) => {
    const {
        id,
    } = props;

    return (
        <div className="relative mt-4">
            <Field
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-primary peer transition-colors duration-300 "
                {...props}
            />
            <label
                htmlFor={id}
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 start-2 z-9 origin-[0] bg-white  dark:bg-gray-900 px-2"
            >
                {children}
            </label>
        </div>
    );
};

export const InputV2 = ({ className, children, ...props }) => {
    const { id } = props;

    return (
        <div className={`mb-6 ${className}`}>
            <label
                htmlFor={id}
                className="block mb-2 text-lg font-light text-gray-900"
            >
                {children}
            </label>
            <Field
                autoComplete="on"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                {...props}
            />
        </div>
    );
};

export const InputQuill = ({ children, isDisabled, ...props }) => {
    const [field, meta, helpers] = useField(props);

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            [{ align: [] }],
            ["clean"],
        ],
    };

    return (
        <div className={`mb-24 h-40 `}>
            <label className="block mb-2 text-lg font-light text-gray-900">
                {children}
            </label>
            <ReactQuill
                value={field.value}
                onChange={(value) => helpers.setValue(value)}
                modules={modules}
                readOnly={isDisabled}
                className={`bg-white rounded-lg h-full ${isDisabled ? 'pointer-events-none' : ''}`}
                theme="snow"
            />
            {meta.touched && meta.error ? (
                <div className="text-red-500 text-sm mt-1">{meta.error}</div>
            ) : null}
        </div>
    );
};

export const TagsInput = ({ children, isDisabled, ...props }) => {
    const { values, setFieldValue } = useFormikContext();
    const { name } = props;
    const inputRef = useRef(null);

    const tagsArray = values[name] ? values[name].split(',').filter(Boolean) : [];

    const handleKeyDown = (e) => {
        if (isDisabled) return;
        
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            const value = e.target.value.trim();
            if (value && !tagsArray.includes(value)) {
                const newTags = [...tagsArray, value];
                setFieldValue(name, newTags.join(','));
                e.target.value = '';
            }
        }
    };

    const removeTag = (tagToRemove) => {
        if (isDisabled) return;
        const newTags = tagsArray.filter(tag => tag !== tagToRemove);
        setFieldValue(name, newTags.join(','));
        inputRef.current?.focus();
    };

    return (
        <div className={`w-full mb-6`}>
            <label htmlFor={name} className="block mb-2 text-lg font-light text-gray-900">
                {children}
            </label>
            <div className="relative">
                <div className={`flex flex-wrap items-center gap-2 p-2 min-h-[42px] w-full bg-white border border-gray-300 rounded-lg ${isDisabled ? 'pointer-events-none' : ''}`}>
                    {tagsArray.map((tag, index) => (
                        <span key={index} className="inline-flex items-center px-3 py-1 bg-orange-400 text-white rounded-full text-sm">
                            {tag}
                            {!isDisabled && (
                                <button type="button" onClick={() => removeTag(tag)} className="ml-2 text-white hover:text-gray-200">
                                    ×
                                </button>
                            )}
                        </span>
                    ))}
                    <input
                        ref={inputRef}
                        type="text"
                        onKeyDown={handleKeyDown}
                        disabled={isDisabled}
                        className="flex-grow min-w-[120px] bg-transparent border-none outline-none text-sm md:h-8 "
                        placeholder={tagsArray.length === 0 ? "Type and press Enter or comma to add tags" : ""}
                    />
                </div>
            </div>
        </div>
    );
};