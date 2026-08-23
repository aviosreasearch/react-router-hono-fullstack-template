export type PublicLotDocument = {
  label: string;
  kind:
    | "Supplier COA"
    | "Independent Lab Report"
    | "Other Documentation";
  url: string;
  verificationUrl?: string;
  laboratory?: string;
};

export type PublicProductLot = {
  lotNumber: string;
  strength: string;
  documents: PublicLotDocument[];
};

export const publicProductLots = {
  "mots-c": [] as PublicProductLot[],
  "glp3-r": [] as PublicProductLot[],
  "nad-plus": [] as PublicProductLot[],
  "ghk-cu": [] as PublicProductLot[],
};

export type ProductSlug = keyof typeof publicProductLots;
