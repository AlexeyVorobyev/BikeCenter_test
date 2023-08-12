declare module '*.scss' {
    const content: Record<string, string | undefined>;
    export default content;
}

declare module '*.png' {
    const value: string;
    export  = value;
}

declare module '*.svg';