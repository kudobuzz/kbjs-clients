declare type ParamType = string | number | Date;
declare function required(errorFunc?: (str: any) => never): <T = ParamType>(str: string) => T;
declare const _default: {
    required: typeof required;
};
export default _default;
