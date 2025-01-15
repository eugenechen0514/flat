export interface FlattenOptions {
    delimiter?: string;
    maxDepth?: number;
    safe?: boolean;
    transformKey?: (key: string) => string;
}
export interface UnflattenOptions {
    delimiter?: string;
    object?: boolean;
    overwrite?: boolean;
    transformKey?: (key: string) => string;
}
export declare function flatten<T, R>(target: T, opts?: FlattenOptions): R;
export declare function unflatten<T extends Record<string, any>, R>(target: T, opts?: UnflattenOptions): R;
