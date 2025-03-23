export interface MenuItemProps extends React.PropsWithChildren {
  href: string;
  selected?: boolean;
  targetBlank?: boolean;
}
