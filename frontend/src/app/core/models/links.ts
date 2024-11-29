export interface Link {
  label: string;
  url: string;
}

export interface GroupLink {
  label: string;
  links: Link[];
}
