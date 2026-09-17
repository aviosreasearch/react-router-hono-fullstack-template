  const products = [
    {
      name: "GLP3 R",
      amount: "Research Compound",
      category: "Metabolic Research",
      group: "Metabolic Research",
      sizes: [
        { label: "10 mg", price: 29.99 },
        { label: "15 mg", price: 34.99 },
        { label: "20 mg", price: 44.99 },
        { label: "30 mg", price: 59.99 },
        { label: "40 mg", price: 74.99 },
        { label: "50 mg", price: 89.99 },
      ],
      image: "/avios-glp3r-product.PNG",
      href: "/products/glp3-r",
      description:
        "Research compound with batch documentation and third-party laboratory records.",
    },
    {
      name: "TRZP",
      amount: "Research Compound",
      category: "Metabolic Research",
      group: "Metabolic Research",
      sizes: [
        { label: "10 mg", price: 29.99 },
        { label: "20 mg", price: 44.99 },
        { label: "30 mg", price: 59.99 },
      ],
      image: "/avios-trzp-product.PNG",
      href: "/products/trzp",
      description:
        "Research compound with organized product documentation and available laboratory records.",
    },
    {
      name: "GLP-1",
      amount: "20 mg",
      category: "Metabolic Research",
      group: "Metabolic Research",
      sizes: [
        { label: "20 mg", price: 34.99 },
      ],
      image: "/avios-semaglutide-product.PNG",
      href: "/products/semaglutide",
      description:
        "Research compound with organized product documentation and available laboratory records.",
    },
    {
      name: "MOTS-C",
      amount: "Research Compound",
      category: "Metabolic / Mitochondrial Research",
      group: "Mitochondrial & Cellular Research",
      sizes: [
        { label: "10 mg", price: 29.99 },
        { label: "20 mg", price: 39.99 },
      ],
      image: "/avios-motsc-product.PNG",
      href: "/products/mots-c",
      description:
        "Research compound with batch documentation and third-party laboratory records.",
    },
    {
      name: "NAD+",
      amount: "Research Material",
      category: "Metabolic / Cellular Research",
      group: "Mitochondrial & Cellular Research",
      sizes: [
        { label: "500 mg", price: 34.99 },
        { label: "1000 mg", price: 49.99 },
      ],
      image: "/avios-nad-product.PNG",
      href: "/products/nad-plus",
      description:
        "Research material with associated documentation and laboratory records.",
    },
    {
      name: "SS-31",
      amount: "10 mg",
      category: "Mitochondrial Research",
      group: "Mitochondrial & Cellular Research",
      sizes: [
        { label: "10 mg", price: 39.99 },
      ],
      image: "/avios-ss-31-product.PNG",
      href: "/products/ss-31",
      description:
        "Research peptide with organized product documentation and available laboratory records.",
    },
    {
      name: "Tesamorelin",
      amount: "5 mg",
      category: "Growth Hormone Research",
      group: "Growth Hormone Research",
      sizes: [
        { label: "5 mg", price: 36.99 },
      ],
      image: "/avios-tesamorelin-product.PNG",
      href: "/products/tesamorelin",
      description:
        "Research compound with organized product documentation and available laboratory records.",
    },
    {
      name: "Ipamorelin",
      amount: "10 mg",
      category: "Growth Hormone Research",
      group: "Growth Hormone Research",
      sizes: [
        { label: "10 mg", price: 34.99 },
      ],
      image: "/avios-ipamorelin-product.PNG",
      href: "/products/ipamorelin",
      description:
        "Research peptide with organized product documentation and available laboratory records.",
    },
    {
      name: "Sermorelin",
      amount: "10 mg",
      category: "Growth Hormone Research",
      group: "Growth Hormone Research",
      sizes: [
        { label: "10 mg", price: 36.99 },
      ],
      image: "/avios-sermorelin-product.PNG",
      href: "/products/sermorelin",
      description:
        "Research peptide with organized product documentation and available laboratory records.",
    },
    {
      name: "Semax",
      amount: "10 mg",
      category: "Cognitive Research",
      group: "Cognitive & Sleep Research",
      sizes: [
        { label: "10 mg", price: 34.99 },
      ],
      image: "/avios-semax-product.PNG",
      href: "/products/semax",
      description:
        "Research compound with organized product documentation and available laboratory records.",
    },
    {
      name: "DSIP",
      amount: "10 mg",
      category: "Sleep & Circadian Research",
      group: "Cognitive & Sleep Research",
      sizes: [
        { label: "10 mg", price: 34.99 },
      ],
      image: "/avios-dsip-product.PNG",
      href: "/products/dsip",
      description:
        "Research peptide with organized product documentation and available laboratory records.",
    },
    {
      name: "Melanotan II",
      amount: "10 mg",
      category: "Melanocortin Research",
      group: "Peptide & Tissue Research",
      sizes: [
        { label: "10 mg", price: 34.99 },
      ],
      image: "/avios-melanotanII-product.PNG",
      href: "/products/melanotan-ii",
      description:
        "Research peptide with organized product documentation and available laboratory records.",
    },
    {
      name: "BPC-157",
      amount: "10 mg",
      category: "Peptide Research",
      group: "Peptide & Tissue Research",
      sizes: [
        { label: "10 mg", price: 39.99 },
      ],
      image: "/avios-bpc157-product.PNG",
      href: "/products/bpc-157",
      description:
        "Research peptide with organized product documentation and available laboratory records.",
    },
    {
      name: "Wolverine Blend",
      amount: "10 mg total",
      category: "Peptide Blend Research",
      group: "Peptide & Tissue Research",
      sizes: [
        {
          label: "5 mg / 5 mg",
          price: 44.99,
        },
      ],
      image: "/avios-wolverine-product.PNG",
      href: "/products/wolverine-blend",
      description:
        "BPC-157 and TB-500 research blend with organized product documentation and available laboratory records.",
    },
    {
      name: "GHK-CU",
      amount: "Research Compound",
      category: "Copper Peptide Research",
      group: "Peptide & Tissue Research",
      sizes: [
        { label: "50 mg", price: 32.99 },
        { label: "100 mg", price: 49.99 },
      ],
      image: "/ghk-cu-100mg.PNG",
      href: "/products/ghk-cu",
      description:
        "Research peptide with associated product information and laboratory documentation.",
    },
    {
      name: "GLOW",
      amount: "70 mg",
      category: "Peptide Blend Research",
      group: "Peptide & Tissue Research",
      sizes: [
        { label: "70 mg", price: 54.99 },
      ],
      image: "/avios-glow-product.PNG",
      href: "/products/glow",
      description:
        "Research peptide blend with organized product documentation and available laboratory records.",
    },
    {
      name: "Epithalon",
      amount: "10 mg",
      category: "Cellular Aging Research",
      group: "Cellular Aging Research",
      sizes: [
        { label: "10 mg", price: 36.99 },
      ],
      image: "/avios-epithalon-product.PNG",
      href: "/products/epithalon",
      description:
        "Research peptide with organized product documentation and available laboratory records.",
    },
  ];
