export declare const breakpoints: string[];
export declare const breakpointValues: number[];
export declare function insertCssIntoHead(document: Document, fontCssUrl: string): void;
export declare function format(first: string, middle: string, last: string): string;
export declare function generateResponsiveClass(classPrefix: string, responsiveValue: string): string;
export declare function generateResponsiveValues(responsiveValue: string): string[];
export declare function getCurrentBreakpointIndex(): number;
export declare function getCurrentValue(responsiveValue: string): string;
