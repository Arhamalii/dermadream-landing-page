import type { PhotoName } from "@/data/photos";
import type { TextSegment } from "@/components/rich-text";

type PressLogo = { name: PhotoName; width: number };

type BeforeAfterReview = {
  before: PhotoName;
  after: PhotoName;
  stars: number;
  quote: string;
  name: string;
  place: string;
};

type Ingredient = {
  kicker: string;
  title: string;
  pill: string;
  image: PhotoName;
  reverse: boolean;
  paragraphs: (string | TextSegment[])[];
};

type LoveReview = {
  avatar: PhotoName;
  name: string;
  meta: string;
  stars: number;
  quote: string;
};

type TimelineRow = { time: string; image: PhotoName; result: string };
type RoutineStep = { image: PhotoName; title: string; body: string };

export const logos: PressLogo[] = [
  { name: "pressGlamour", width: 134 },
  { name: "pressUsaToday", width: 163 },
  { name: "pressLaWeekly", width: 126 },
  { name: "pressLifeAndStyle", width: 120 },
  { name: "pressLogoFive", width: 124 },
  { name: "pressLogoSix", width: 164 },
];

export const benefits = [
  { lead: "Fixes", rest: "jowls" },
  { lead: "Lifts", rest: "the sagging skin" },
  { lead: "Drained", rest: "the puffiness" },
  { lead: "Erases", rest: "marionette lines" },
  { lead: "Stops", rest: "enzyme eating collagen" },
  { lead: "Rebuilds", rest: "skin structure" },
  { lead: "Reduces", rest: "turkey neck appearance" },
  { lead: "Works", rest: "in 28 days or less" },
];

export const introDisclaimer: TextSegment[] = [
  { text: "Reduces the appearance of " },
  { text: "dreaded jowls", bold: true },
  { text: " in the most natural way using " },
  { text: "Korean based", bold: true },
  { text: " technology in " },
  { text: "28 days!", bold: true },
];

export const effectsHeading: TextSegment[] = [
  { text: "Experience Incredible " },
  { text: "Noticeable", pink: true },
  { text: " Effects:" },
];

export const speedHeading: TextSegment[] = [
  { text: "Speed Up Your Results With The " },
  { text: "Revolutionary Ingredients", pink: true },
  { text: " Inside JawGlow" },
];

export const guaranteeHeading: TextSegment[] = [
  { text: "Wondering If This Will Work For You Even If " },
  { text: "\"It's Genetics\"", pink: true },
  { text: "?" },
];

export const formulaHeading: TextSegment[] = [
  { text: "The JawGlow™ Formula That " },
  { text: "Works Even If It's Just Genetics", pink: true },
];

export const priceHeading: TextSegment[] = [
  { text: "Fix The Dreaded Jowls And Snatch Your Jawline " },
  { text: "Without The Extraordinary Price Tag", pink: true },
];

export const faceChips = [
  { label: "Hollow Cheeks", left: "6%", top: "20%" },
  { label: "Marrionatte Lines", left: "3%", top: "36%" },
  { label: "Volume loss", left: "6%", top: "52%" },
  { label: "Saggy jawline", left: "14%", top: "66%" },
  { label: "Turkey Neck", left: "50%", top: "76%", center: true },
  { label: "Sunken Look", left: "68%", top: "20%" },
  { label: "Crepey Skin", left: "71%", top: "36%" },
  { label: "Dreaded jowls", left: "68%", top: "52%" },
  { label: "Sagging Cheeks", left: "58%", top: "66%" },
];

export const savings = [
  "Thousands on expensive, risky and painful procedures",
  "Hundreds of dollars on creams, serum and Gua Sha products that only make the problem worse",
  "Countless of hours hating the way the reflection looks and looking like your mother",
];

export const effectReviews: BeforeAfterReview[] = [
  {
    before: "effectSusieBefore",
    after: "effectSusieAfter",
    stars: 5,
    quote:
      "I've watched so many videos from experts. A lot said there's nothing I could do. But then my friend told me about JawGlow. And WOW! The cream feels rich but not greasy. I can visibly see a noticeable change in my face. It’s like Im getting my face back? My husband asked me if got a new haircut haha so I think it’s workin!”",
    name: "Susie Mae, 71.",
    place: "Orlando Fl",
  },
  {
    before: "effectKathreneBefore",
    after: "effectKathreneAfter",
    stars: 4.5,
    quote:
      "“I was like to not develop wrinkles until after I turned 50. But I did get my mom’s jowls! And I hated them so much. Every time I looked in the mirror it was my mom, not me who I saw!!1 SO UPSETTING!! Anyways, I didn’t want to get a procedure done. It was sooo expensive! So I gave this POcket sntacher a try. It’s been just a week, and so far, I can tell my face is looking better. Not as much sagging as it used to be”",
    name: "Kathrene, 57.",
    place: "Boston, MA",
  },
  {
    before: "effectLindsayBefore",
    after: "effectLindsayAfter",
    stars: 5,
    quote:
      "“ I have unfortunately inherited that \"sagging\" genes. My mom had little wrinkles when she was in her 60s but her face sags pretty bad. And I could see the same thing at 40!! Im so glad I found JawGlow! I can tell it keeps my jowls in check, the skin feels firmer and the sagging that started to developed has almost disappeare! So recommend!”",
    name: "Lindsay, 49.",
    place: "Waco, TX",
  },
];

export const ingredients: Ingredient[] = [
  {
    kicker: "Ingredient 01",
    title: "Korean Regeneration Molecule",
    pill: "PDRN",
    image: "ingredientPdrn",
    reverse: false,
    paragraphs: [
      "Helps drain the fluid and rebuild the skin it stretched for a sharper, firmer jawline.",
      [
        { text: "PDRN is the ingredient that took over Korean clinics and, since 2025, American ones. A single session runs " },
        { text: "$450 to $1,000", bold: true },
        { text: "." },
      ],
      [
        { text: "In a split face trial against retinol, PDRN cut wrinkles by " },
        { text: "20 to 23%", bold: true },
        { text: " in just 28 days." },
      ],
    ],
  },
  {
    kicker: "Ingredient 02",
    title: "The Natural Filler",
    pill: "VOLUFILINE",
    image: "ingredientVolufiline",
    reverse: true,
    paragraphs: [
      "Fills the slack your trapped fluid left behind, without a single needle.",
      [
        { text: "In lab testing it increased fat cell development by " },
        { text: "201%", bold: true },
        { text: " and " },
        { text: "lipid storage by 641%", bold: true },
        { text: "." },
      ],
      "This is how you fill in hollow, stretched skin without overly priced fillers.",
    ],
  },
  {
    kicker: "Ingredient 03",
    title: "The Plumping Cushion",
    pill: "COLLAGEN",
    image: "ingredientCollagen",
    reverse: false,
    paragraphs: [
      "Think of collagen as the cushion. It holds water tight against your skin and restores the fullness stretching took away.",
      "Skin that is properly plumped reads firm. Skin that is stretched and dry reads slack.",
    ],
  },
  {
    kicker: "Ingredient 04",
    title: "The New Skin Rebuilder",
    pill: "RETINOL",
    image: "ingredientRetinol",
    reverse: true,
    paragraphs: [
      [
        { text: "The single most proven molecule in all of dermatology. In a controlled trial, firmness rose " },
        { text: "26 to 30%", bold: true },
        { text: " and elasticity rose " },
        { text: "46%", bold: true },
        { text: " in 12 weeks." },
      ],
      [
        { text: "It also shuts down the enzymes that eat your collagen, by " },
        { text: "70 to 80%", bold: true },
        { text: ", so the results you build do not get undone." },
      ],
    ],
  },
  {
    kicker: "Ingredient 05",
    title: "The Lifting Signal",
    pill: "5 PEPTIDE COMPLEX",
    image: "ingredientPeptides",
    reverse: false,
    paragraphs: [
      [
        { text: "Peptides are the messages your skin cells send each other. In one trial, copper peptide cut wrinkle volume by " },
        { text: "55.8%", bold: true },
        { text: "." },
      ],
      "Five of them work together in JawGlow™ to signal lift across your jaw and neck.",
    ],
  },
];

export const loveReviews: LoveReview[] = [
  {
    avatar: "avatarDorit",
    name: "Dorit Emmerson",
    meta: "57, Tampa",
    stars: 5,
    quote:
      "“I just love how it feels on my skin. Super rich but not greasy and its like I’m treating myself every night. My face is less puffy and heavy. I think I’m noticing less sagging but its only been 8 days tho. I’m being patient.”",
  },
  {
    avatar: "avatarKarla",
    name: "Karla Brady",
    meta: "71, Boston",
    stars: 5,
    quote:
      "“Getting great results with this! Hated my jowls. Thought I was cursed, but this thing just snatched everything back up. Of course I’m 71 and I don't expect to look 20. But I was mistaken for a 60 year old yesterday and that made me feel so good!”",
  },
  {
    avatar: "avatarNancy",
    name: "Nancy Ng",
    meta: "68, NYC",
    stars: 4,
    quote:
      "“I use this on my neck too. It helps so much. Its been 2 months and I cant top using it because I dont want to look like my mother ever again”",
  },
];

export const timeline: TimelineRow[] = [
  {
    time: "24 Hrs",
    image: "timeline24Hours",
    result: "The heaviness under your jaw lifts. Your face feels lighter. The tightness along your neck lets go.",
  },
  {
    time: "3 Days",
    image: "timeline3Days",
    result: "Morning puffiness is visibly down. Your jawline looks tighter in the mirror.",
  },
  {
    time: "14 Days",
    image: "timeline14Days",
    result: "You can see the jaw definition. You skin feels light, tight and smooths to touch.",
  },
  {
    time: "28 Days",
    image: "timeline28Days",
    result: "People around you are noticing the changes too!",
  },
  {
    time: "90 days",
    image: "timeline90Days",
    result: "Your snatched jawline has become the talk of the year! All your girlfriends want to know the secret!",
  },
];

export const speedPoints = [
  "Dermatologist approved ingredients",
  "Advanced snatching formula",
  "90 days satisfaction guarantee",
];

export const steps: RoutineStep[] = [
  {
    image: "stepDrains",
    title: "Step #1: Drains",
    body: "The Gua Sha-like head drains the stagnant fluid from your face. This can reduce the feeling of heaviness on your face.",
  },
  {
    image: "stepSnatches",
    title: "Step #2: Snatches",
    body: "Snatch5 ™ Korean based formula uses 5 ingredients to smooth, firm and lift.",
  },
  {
    image: "stepProtects",
    title: "Step #3: Protects.",
    body: "This formula is designed to stop the enzyme that eats collagen to delay the sagging in the future.",
  },
];

export const reflectionReviews: BeforeAfterReview[] = [
  {
    before: "reflectionNinaBefore",
    after: "reflectionNinaAfter",
    stars: 4.5,
    quote:
      "“I started using it sometime on the summer. But 3 weeks later my HUBBY was like \"honey did you get a hair cut? You look so beautiful today.” He started showing more affection and giving more compliments. He pulled me into the bedroom yesterday didn't even ask, just WANTED me. I forgot what that felt like. This is why I cannot shut up about this. Told all my gfs about this! This is a must if you HATE your jowls like I did”",
    name: "NINA",
    place: "Portland",
  },
  {
    before: "reflectionStaceyBefore",
    after: "reflectionStaceyAfter",
    stars: 5,
    quote:
      "“I’m 56 and my eyes have looked much younger than the bottom of my face. I consulted about 11 derms, and they all told me my only option was the face lift. And not gonna lie I almost convinced my husband to give me the money for the procedure. But then I found JawGlow n om my lord am I glad I found it. Not only this works, but we also spent an entire 2 weeks in Greece this summer on the money we saved!”",
    name: "Stacey",
    place: "Fort Lauderdale, FL",
  },
  {
    before: "reflectionLisaBefore",
    after: "reflectionLisaAfter",
    stars: 5,
    quote:
      "“I was lucky to NOT ger wrinkles, but the sagging of my cheeks?! Boy did I hate it. Luckily, Ive been using this jawline snatcher and its been so great on my skin. I feel good, I look good and I can stop dreading to look in the mirror”",
    name: "Lisa",
    place: "Amherst, MA",
  },
];

export const gummyPoints: TextSegment[][] = [
  [
    { text: "Collagen Peptides", bold: true },
    { text: " — to help firm sagging skin and support elasticity" },
  ],
  [
    { text: "Biotin", bold: true },
    { text: " — to strengthen hair, nails, and skin health" },
  ],
  [
    { text: "Vitamin E", bold: true },
    { text: " — a powerful antioxidant that helps protect your beauty" },
  ],
  [
    { text: "Purple Carrot Extract", bold: true },
    { text: " — rich in natural antioxidants for radiant skin" },
  ],
];

export const priceCopy = [
  "To get your jawline back and feel confident in your skin again, you need something you'll actually stick with...",
  "Something that works fast AND keeps working long-term.",
  "That's what makes JawGlow™ so effective...",
  "Because it takes just 5 minutes and fits right into your morning or night routine without any planning, or stress.",
  "Plus you'll feel the difference within days, and it just keeps getting better the longer you use it!",
];

export const formulaReviews: BeforeAfterReview[] = [
  {
    before: "formulaHannahBefore",
    after: "formulaHannahAfter",
    stars: 5,
    quote:
      "“I can’t believe what 1 months of using jawGlow did to my face! Even my husband tells me I look younger. The jowls are visibly less sagging, and my skin looks and feels tigher! I cannot wait to see what I’ll look like in a year!”",
    name: "Hannah",
    place: "Detroit",
  },
  {
    before: "formulaKatherinaBefore",
    after: "formulaKatherinaAfter",
    stars: 4.5,
    quote:
      "“I saw this on tiktok, a lady my age was using it. So I figured I have nothing to lose. In the end, my derm told me I should get face lift. So this was my last stop. But I am so glad I got this! Surely it’s not giving me instant results. But results are there!”",
    name: "Katherina",
    place: "Detroit, MI",
  },
  {
    before: "formulaMeganBefore",
    after: "formulaMeganAfter",
    stars: 5,
    quote:
      "“Big fan of MyDermaDream! So when I saw they had a fix for my jowls?1 It wasnt even a questions. S expected, it works evenbetter than I thought it would! So happy I got this!”",
    name: "Megan",
    place: "Grafton, ND",
  },
];

export const faqs: { question: string; answer: TextSegment[][] }[] = [
  {
    question: "Q: How does JawGlow™ work?",
    answer: [
      [
        {
          text: "A:It uses the K-Snatch Complex is a Korean based technology, designed to drain the fluid; lift and tighten the skin.",
        },
      ],
      [{ text: "It works in three simple steps:" }],
      [
        { text: "Step #1: Drains.", bold: true },
        {
          text: " The Gua Sha-like head drains the stagnant fluid from your face. This can reduce the feeling of heaviness on your face. ",
        },
        { text: "Step #2: Snatches.", bold: true },
        { text: " Snatch5 ™ Korean based formula uses 5 ingredients to smooth, firm and lift." },
      ],
      [
        { text: "Step #3: Protects.", bold: true },
        {
          text: " This formula is designed to stop the enzyme that eats collagen to delay the sagging in the future.",
        },
      ],
    ],
  },
  {
    question: 'Q: "My dermatologist told me jowls are genetic and nothing topical will help. Is tht true?"',
    answer: [
      [
        {
          text: "A: Genetics decide your bone structure and how fast you drain. But genetics don't change overnight and your face did. JawGlow™ doesn't change your genetics. It clears the drain your genetics left slow.",
        },
      ],
    ],
  },
  {
    question: 'Q: "Will it help my marionette lines?"',
    answer: [
      [
        {
          text: "A: Yes. A marionette line gets deeper when the tissue above it gets heavier and presses down on it. Take the fluid weight out and most women see the corners of their mouth start to lift around week two.",
        },
      ],
    ],
  },
  {
    question: 'Q: "How long does it take to see results?"',
    answer: [
      [
        {
          text: "A: The heaviness lifts the first time you use it. Puffiness is visibly down within 3 days, your jawline reads sharp at about a week, it looks snatched at 14 days, and people start commenting around 30 days.",
        },
      ],
    ],
  },
  {
    question: 'Q: "One side of my face is worse than the other. Can this fix that?"',
    answer: [
      [
        {
          text: "A: That's the side you sleep on, and it's the clearest sign the Lymph Lock is what you're dealing with. Fluid pools there for eight hours a night with nowhere to go. Treat both sides the same number of times and the difference evens out as it clears.",
        },
      ],
    ],
  },
  {
    question: 'Q: "I already own a gua sha. Why would this be different?"',
    answer: [
      [
        {
          text: "A: Because Gua-sha ONLY removes the fluid. But that fluid turned the sagging gene on. It ate the skin structure, which gave you the jowls.This Jawline Snatcher uses an advanced Korean led formula.",
        },
      ],
    ],
  },
  {
    question: 'Q: "Is it invasive? Will it hurt?"',
    answer: [
      [
        {
          text: "A: No needles, no numbing cream, no clinic and no downtime. It's 5 minutes of firm massage along your jaw and neck. If it hurts, you're pressing far too hard.",
        },
      ],
    ],
  },
  {
    question: "Q: \"Can I use JawGlow™ with my other skincare?”",
    answer: [
      [
        {
          text: "A: Yes. Apply it to clean skin before your moisturiser. If you already use a retinoid at night, use JawGlow™ in the morning rather than stacking them.",
        },
      ],
    ],
  },
  {
    question: 'Q: "When\'s the best time to use it?"',
    answer: [
      [
        {
          text: "A: \"Morning or evening, whichever you'll actually stick to. Morning sweeps out the fluid that pooled overnight. Evening lets the Korean ingredients work while you sleep.\"",
        },
      ],
    ],
  },
  {
    question: 'Q: "Are there any side effects?"',
    answer: [
      [
        {
          text: 'A: "JawGlow™ is fragrance free, dermatologist tested and suitable for sensitive skin. Start three days a week and build up daily as your skin adjusts."',
        },
      ],
    ],
  },
  {
    question: 'Q: "How much product comes in each tube?"',
    answer: [[{ text: 'A: "One full month of daily use per tube."' }]],
  },
  {
    question: 'Q: "Does it come with a money-back guarantee?"',
    answer: [
      [
        {
          text: 'A: "Yes. We offer a 90 day satisfaction guarantee. Get it, try it, not happy? Give us a call and we will make it right."',
        },
      ],
    ],
  },
  {
    question: 'Q: "Is shipping really free?"',
    answer: [[{ text: 'A: "Free on all orders over $100, and free on both the 3 tube and 6 tube bundles."' }]],
  },
];
