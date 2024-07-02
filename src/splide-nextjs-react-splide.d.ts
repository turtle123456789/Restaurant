declare module 'splide-nextjs/react-splide' {
    import { ComponentType, ReactNode } from 'react';
  
    export interface SplideProps {
      options?: object;
      children?: ReactNode;
      [key: string]: any;
    }
  
    export interface SplideSlideProps {
      children?: ReactNode;
      [key: string]: any;
    }
  
    export const Splide: ComponentType<SplideProps>;
    export const SplideSlide: ComponentType<SplideSlideProps>;
  }
  