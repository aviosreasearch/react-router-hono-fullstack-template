
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

  "glp3-r": [
    {
      lotNumber: "20260505101",
      strength: "10 mg",
      documents: [
        {
          label: "Janoshik Independent Lab Report — Task #165661",
          kind: "Independent Lab Report",
          url: "/coas/glp3-r-10mg-janoshik.pdf",
          laboratory: "Janoshik",
        },
      ],
    },
  ] as PublicProductLot[],

  "nad-plus": [] as PublicProductLot[],
  "ghk-cu": [] as PublicProductLot[],
};

export type ProductSlug = keyof typeof publicProductLots;
