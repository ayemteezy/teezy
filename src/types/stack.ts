export type StackItem = {
  name: string;
  pinned?: boolean;
};

export type StackCategory = {
  label: string;
  stack: StackItem[];
};
