// Edit this file to change brand, nav, products, and static pages.
window.BRAND = {
  name: "drippppaprearl",
  tagline: "MESH SHORTS ONLY",
  instagram: "https://instagram.com/drippppaprearl",
  tiktok: "https://tiktok.com/@drippppaprearl",
};

window.NAV = {
  primary: [
    { label: "SHOP ALL",     href: "collection.html?c=mesh-shorts" },
    { label: "ADULT MESH",   href: "collection.html?c=adult-mesh" },
    { label: "YOUTH MESH",   href: "collection.html?c=youth-mesh" },
  ],
  secondary: [
    { label: "ORDER TRACKING", href: "page.html?p=tracking" },
    { label: "SUPPORT",        href: "page.html?p=support" },
  ],
  footer: [
    { label: "Order Tracking", href: "page.html?p=tracking" },
    { label: "Support",        href: "page.html?p=support" },
    { label: "Shipping & Returns", href: "page.html?p=shipping" },
  ],
};

window.COLLECTIONS = {
  "mesh-shorts": { title: "MESH SHORTS" },
  "adult-mesh":  { title: "ADULT MESH SHORTS" },
  "youth-mesh":  { title: "YOUTH MESH SHORTS" },
};

const IMG = {
  meshBlack: "https://ryokorain.com/cdn/shop/files/black_994c99a8-e60b-49d9-ad04-b5117e0edc2f.jpg",
  seigaiha:  "https://ryokorain.com/cdn/shop/files/seigawawaves.jpg",
  paisley:   "https://ryokorain.com/cdn/shop/files/blackpaisley_1.jpg",
  pearl:     "https://ryokorain.com/cdn/shop/files/pearl.jpg",
};

window.SIZES = ["S","M","L","XL","XXL"];

// Every product is mesh, double-stitched, drawcord waist, side pockets, breathable.
// All prices in USD. Replace `img` with your own product photos when ready.
window.PRODUCTS = [
  { slug:"classic-black-mesh",   title:"CLASSIC BLACK MESH SHORTS",   price:55, sizes:window.SIZES, img:IMG.meshBlack, collections:["mesh-shorts","adult-mesh"], desc:"The everyday staple. Solid black mesh, drippppaprearl wordmark on the leg. Lightweight, breathable, built to move." },
  { slug:"royal-bloom-mesh",     title:"ROYAL BLOOM MESH SHORTS",     price:55, sizes:window.SIZES, img:IMG.pearl,     collections:["mesh-shorts","adult-mesh"], desc:"Royal blue base with an all-over yellow bloom motif. Loud colorway, clean cut, drawcord waist." },
  { slug:"linked-stone-mesh",    title:"LINKED STONE MESH SHORTS",    price:55, sizes:window.SIZES, img:IMG.paisley,   collections:["mesh-shorts","adult-mesh"], desc:"Stone-tan mesh with a repeating navy linked-loop geometric. Relaxed fit, elastic waist." },
  { slug:"seigaiha-wave-mesh",   title:"SEIGAIHA WAVE MESH SHORTS",   price:60, sizes:window.SIZES, img:IMG.seigaiha,  collections:["mesh-shorts","adult-mesh"], desc:"All-over wave print inspired by traditional seigaiha. Tonal navy on white." },
  { slug:"midnight-paisley-mesh",title:"MIDNIGHT PAISLEY MESH SHORTS",price:60, sizes:window.SIZES, img:IMG.paisley,   collections:["mesh-shorts","adult-mesh"], desc:"Black-on-black paisley mesh. Subtle from a distance, loud up close." },
  { slug:"sunburst-mesh",        title:"SUNBURST MESH SHORTS",        price:60, sizes:window.SIZES, img:IMG.pearl,     collections:["mesh-shorts","adult-mesh"], desc:"Cream base with a hand-drawn sunburst repeat in marigold. Soft hand, athletic cut." },
  { slug:"checker-flag-mesh",    title:"CHECKER FLAG MESH SHORTS",    price:62, sizes:window.SIZES, img:IMG.meshBlack, collections:["mesh-shorts","adult-mesh"], desc:"Black-and-white racing checker print. High-contrast, classic shape." },
  { slug:"camo-drift-mesh",      title:"CAMO DRIFT MESH SHORTS",      price:62, sizes:window.SIZES, img:IMG.seigaiha,  collections:["mesh-shorts","adult-mesh"], desc:"Custom drippppaprearl drift camo in muted greens and bone." },
  { slug:"cherry-bloom-mesh",    title:"CHERRY BLOOM MESH SHORTS",    price:65, sizes:window.SIZES, img:IMG.pearl,     collections:["mesh-shorts","adult-mesh"], desc:"Off-white mesh with a scattered cherry blossom repeat in pink and red." },
  { slug:"static-grid-mesh",     title:"STATIC GRID MESH SHORTS",     price:65, sizes:window.SIZES, img:IMG.paisley,   collections:["mesh-shorts","adult-mesh"], desc:"Charcoal grid on smoke gray. Tech-leaning, clean lines." },
  { slug:"pearl-floral-mesh",    title:"PEARL FLORAL MESH SHORTS",    price:65, sizes:window.SIZES, img:IMG.pearl,     collections:["mesh-shorts","adult-mesh"], desc:"Premium pearl floral print on a soft cream mesh." },
  { slug:"tree-camo-mesh",       title:"TREE CAMO MESH SHORTS",       price:65, sizes:window.SIZES, img:IMG.seigaiha,  collections:["mesh-shorts","adult-mesh"], desc:"Oversized custom tree-camo print. Heavier mesh, longer drop." },

  // Youth
  { slug:"youth-classic-mesh",   title:"YOUTH CLASSIC MESH SHORTS",   price:50, sizes:["YS","YM","YL"], img:IMG.meshBlack, collections:["mesh-shorts","youth-mesh"], desc:"The classic black mesh short, sized for kids." },
  { slug:"youth-bloom-mesh",     title:"YOUTH ROYAL BLOOM MESH SHORTS",price:50, sizes:["YS","YM","YL"], img:IMG.pearl,    collections:["mesh-shorts","youth-mesh"], desc:"Royal blue and yellow bloom print, kid-sized." },
  { slug:"youth-wave-mesh",      title:"YOUTH SEIGAIHA WAVE MESH SHORTS",price:52, sizes:["YS","YM","YL"], img:IMG.seigaiha, collections:["mesh-shorts","youth-mesh"], desc:"Youth mesh shorts with the wave repeat print." },
];

window.PAGES = {
  tracking: {
    title: "ORDER TRACKING",
    body: "Enter your order number and email in the link from your shipping confirmation to track your package. If you can't find your tracking info, contact support@drippppaprearl.local and we'll look it up for you.",
  },
  support: {
    title: "CUSTOMER SUPPORT",
    body: "Need help with an order, sizing, or a return? Email support@drippppaprearl.local and we'll get back within 24 hours.",
  },
  shipping: {
    title: "SHIPPING & RETURNS",
    body: "Orders ship within 2 business days. Domestic shipping is $7 flat or free on orders over $150. Returns accepted within 30 days on unworn items.",
  },
};

window.EDITORIAL = [];
