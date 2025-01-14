import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
import { Field, useFormikContext } from "formik";

export const File = ({ ...props }) => {
    const { name } = props;
    const { values, setFieldValue } = useFormikContext();

    const getImageSrc = (file) => {
        try {
            return typeof file === 'string' ? file : URL.createObjectURL(file);
        } catch (error) {
            return file;
        }
    };

    return (
        <div className="w-full relative">
            <div className="flex flex-col">
                <div className="block mb-2 text-lg font-light text-gray-900">
                    Cover Image
                </div>
                <div className="flex items-start gap-4">
                    {values[name] && (
                        <img 
                            src={getImageSrc(values[name])} 
                            alt="Preview" 
                            className="w-24 h-24 object-cover rounded-lg"
                        />
                    )}
                    <div className="w-full relative">
                        <div className="flex flex-col items-center justify-center w-full px-4 py-3 bg-gray-50 border border-gray-300 border-dashed rounded-lg">
                            <CloudArrowUpIcon className="h-8 text-gray-400" />
                            <h3 className="font-semibold text-gray-500">
                                {!values[name] ? "Drag & Drop dokumen disini" : values[name].name || values[name]}
                            </h3>
                            {!values[name] && (
                                <p className="text-sm text-gray-500">
                                    Drag & Drop or Click to Upload
                                </p>
                            )}
                        </div>
                        <Field
                            value=""
                            accept="image/*"
                            type="file"
                            onChange={({ target }) => {
                                const file = target.files[0];
                                setFieldValue(name, file);
                            }}
                            className="absolute top-0 w-full h-full rounded-lg opacity-0 cursor-pointer"
                            {...props}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};