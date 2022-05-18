declare const _default: {
    validator: {
        validateSchema: <T = any>({ schema, data }: {
            schema: import("yup").AnySchema<any, any, any>;
            data: T;
        }) => Promise<any>;
        schemaValidator: typeof import("yup");
    };
    utils: {
        required: (errorFunc?: (str: any) => never) => <T_1 = string | number | Date>(str: string) => T_1;
    };
    client: import("axios").AxiosInstance;
};
export default _default;
