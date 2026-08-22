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
