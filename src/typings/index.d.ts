/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="react-scripts" />

declare module '*.svg' {
  const content: any;
  export default content;
}
declare module '*.png' {
  const content: any;
  export default content;
}

declare interface ParamTypes {
  id: string;
}
