import { ComponentType, ReactNode } from "react";

export type Product = {
  id: number;
  name: string;
  price: number;
  discount: number;
};

export type Question = {
  id: number;
  question: string;
  answer: string;
};

export type Toast = {
  id: number;
  title?: string;
  description?: string;
  duration?: number;
  position?: string;
  render?: () => ReactNode;
};

export type Modal = {
  Component: ComponentType<any>;
  props: any;
};

export type ModalAction = {
  open: (Component: ComponentType<any>, props: any) => void;
  close: (Component: ComponentType<any>) => void;
};
