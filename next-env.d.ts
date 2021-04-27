/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="react-scripts" />
// declaration.d.ts
declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}
