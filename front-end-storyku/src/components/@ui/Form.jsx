import { Formik, Form as FormikForm } from "formik";

export const Form = ({ children, ...props }) => (
    <Formik
        {...props}
    >
        <FormikForm>
            {children}
        </FormikForm>
    </Formik>
);
