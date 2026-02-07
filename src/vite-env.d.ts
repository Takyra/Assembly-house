declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

declare module '*.webp' {
  const value: string;
  export default value;
}

// Декларации для PDF файлов
declare module '*.pdf' {
  const value: string;
  export default value;
}

// Альтернативный вариант с более строгими типами
declare module '*.pdf' {
  const src: string;
  export default src;
}