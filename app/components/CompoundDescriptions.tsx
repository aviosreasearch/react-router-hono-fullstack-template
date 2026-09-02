const compoundDescriptions: Record<string, string> = {
  "glp3-r":
    "GLP3-R is a research compound studied in laboratory models involving metabolic signaling and pathways associated with energy balance and nutrient regulation.",

  "mots-c":
    "MOTS-C is a mitochondrial-derived peptide encoded within mitochondrial DNA. It is studied in laboratory research involving mitochondrial signaling, cellular metabolism, energy regulation, and metabolic stress-response pathways.",

  "nad-plus":
    "NAD+ (nicotinamide adenine dinucleotide) is a naturally occurring cellular coenzyme studied in laboratory research involving energy metabolism, redox reactions, mitochondrial function, and cellular signaling.",

  "ghk-cu":
    "GHK-Cu is a copper-binding peptide complex studied in laboratory research involving cellular signaling, extracellular matrix processes, and copper-dependent biological pathways.",

  semax:
    "Semax is a synthetic peptide studied in laboratory research involving neurobiological signaling, neuronal pathways, and mechanisms associated with cellular responses in nervous-system models.",

  dsip:
    "DSIP (Delta Sleep-Inducing Peptide) is a peptide studied in laboratory research involving sleep-related signaling, circadian processes, and neuroendocrine pathways.",

  trzp:
    "TRZP is a research compound studied in laboratory models involving metabolic signaling, glucose-related pathways, and mechanisms associated with nutrient and energy regulation.",

  tesamorelin:
    "Tesamorelin is a synthetic peptide analogue of growth hormone-releasing hormone studied in laboratory research involving growth-hormone signaling and related endocrine pathways.",

  glow:
    "GLOW is a research peptide blend studied in laboratory models involving peptide signaling, cellular repair processes, and extracellular matrix-related pathways.",

  ipamorelin:
    "Ipamorelin is a synthetic peptide studied in laboratory research involving growth-hormone secretagogue receptor signaling and related endocrine pathways.",

  sermorelin:
    "Sermorelin is a synthetic peptide corresponding to a portion of growth hormone-releasing hormone and is studied in laboratory research involving growth-hormone signaling pathways.",

  semaglutide:
    "Semaglutide is a GLP-1 receptor agonist studied in laboratory research involving incretin signaling, glucose-related pathways, metabolic regulation, and energy-balance mechanisms.",

  "ss-31":
    "SS-31 is a mitochondria-targeted research peptide studied in laboratory models involving mitochondrial membranes, oxidative stress, cellular energetics, and mitochondrial function.",

  epithalon:
    "Epithalon is a synthetic tetrapeptide studied in laboratory research involving cellular aging, gene-expression pathways, and mechanisms associated with cellular longevity.",
};

type CompoundDescriptionProps = {
  productSlug: string;
};

export default function CompoundDescription({
  productSlug,
}: CompoundDescriptionProps) {
  const description = compoundDescriptions[productSlug];

  if (!description) {
    return null;
  }

  return (
    <p className="mt-4 max-w-xl text-lg leading-8 text-slate-400">
      {description}
    </p>
  );
}
