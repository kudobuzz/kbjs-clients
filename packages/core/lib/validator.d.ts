import * as yup from 'yup';
declare function validateSchema<T = any>({ schema, data }: {
    schema: yup.AnySchema;
    data: T;
}): Promise<any>;
declare const _default: {
    validateSchema: typeof validateSchema;
    schemaValidator: typeof yup;
};
export default _default;
