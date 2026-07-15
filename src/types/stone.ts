export type Material = "marble" | "quartzite" | "granite" | "onyx" | "travertine";

export interface Stone {
  slug: string;
  name: string;
  material: Material;
  origin: string;
  finish: string[];
  dimensions?: string;
  thickness?: string;
  description: string;
  descriptionRu?: string;
  descriptionUz?: string;
  images: string[];
  featured?: boolean;
}
