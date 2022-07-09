export type HeaderLinks = Array<{
  component?: React.ReactNode;
  isDesktop?: boolean;
  isExternal?: boolean;
  name?: string;
  url?: string;
}>;

export interface NavProps {
  className?: string;
}
