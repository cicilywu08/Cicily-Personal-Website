export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year: number;
  href: string;
  imageUrl?: string;
  featured?: boolean;
  category?: string;
  detail?: string;
}

export const currentProjects: Project[] = [
  {
    id: "cashcoach",
    title: "CashCoach",
    description:
      "A personal finance intelligence platform that analyzes credit card statements, categorizes transactions with AI, and helps plan for financial independence.",
    tags: ["Next.js", "PostgreSQL", "OpenAI", "Finance"],
    year: 2025,
    href: "/projects/cashcoach",
    imageUrl: "/project-images/cashcoach.svg",
    featured: true,
    detail: `<h2>Why I built it</h2>
<p>I wanted a clearer picture of where my money actually goes — not just monthly totals, but patterns that inform real decisions about saving, spending, and long-term independence.</p>
<h2>What it does</h2>
<p>CashCoach ingests credit card statements, uses AI to categorize transactions with context (not just merchant names), and surfaces trends over time. The goal is practical: help you understand cash flow, spot drift, and plan toward financial independence without turning finance into a second job.</p>
<h2>How it works</h2>
<p>The stack is a Next.js web app with PostgreSQL for persistence and OpenAI for categorization and insight generation. Upload a statement, review AI-suggested categories, adjust anything that looks off, and watch summaries update across months.</p>
<h2>What I'm learning</h2>
<p>Building for myself keeps the feedback loop tight — every friction point in upload, categorization, or reporting shows up in my own usage the following week.</p>`,
  },
  {
    id: "ai-builder-radar",
    title: "AI Builder Radar",
    description:
      "A personal AI digest that lands in my inbox every day at noon — tracking what builders in the AI space are actually shipping, not just talking about.",
    tags: ["Python", "OpenRouter", "Gemini", "Resend", "Cron"],
    year: 2026,
    href: "/projects/ai-builder-radar",
    imageUrl: "/project-images/ai-builder-radar.svg",
    featured: true,
    detail: `<h2>Why I built it</h2>
<p>The AI builder space moves fast. I was spending too much time scrolling X and newsletters to find out what people had actually shipped — releases, repos, products — versus what they were merely discussing.</p>
<h2>What it does</h2>
<p>AI Builder Radar is a daily digest that arrives at noon. It tracks a curated set of builders and sources, summarizes what shipped in the last 24 hours, and cuts through hype to highlight concrete output: launches, demos, open-source releases, and meaningful updates.</p>
<h2>How it works</h2>
<p>A Python pipeline runs on a cron schedule, pulls from configured feeds and accounts, uses Gemini via OpenRouter to synthesize and rank items, and sends the result through Resend. The whole thing is tuned for signal — I'd rather miss a hot take than miss a real ship.</p>
<h2>Why noon</h2>
<p>Morning is for building. Noon is a natural pause to see what the world shipped while I was heads-down — a small ritual, not another infinite feed.</p>`,
  },
  {
    id: "cookprep",
    title: "CookPrep AI",
    description:
      "An iOS app and web app that turns recipe links or pasted text into structured recipes and a shoppable grocery list — powered by AI.",
    tags: ["React", "Node.js", "OpenAI", "iOS", "PostgreSQL"],
    year: 2025,
    href: "/projects/cookprep",
    imageUrl: "/project-images/cookprep.svg",
    featured: true,
    detail: `<h2>Why I built it</h2>
<p>Recipes on the internet are messy — buried in blog posts, inconsistent formatting, and never quite ready for a grocery run. I wanted to paste a link or block of text and walk away with something I could actually cook from and shop from.</p>
<h2>What it does</h2>
<p>CookPrep AI accepts a recipe URL or pasted text, extracts structured ingredients and steps with AI, and generates a shoppable grocery list. The same backend powers a web experience and an iOS app so I can add recipes from my phone and prep on my laptop.</p>
<h2>How it works</h2>
<p>React and Node.js handle the web layer; PostgreSQL stores recipes and lists; OpenAI parses unstructured input into consistent schema. The iOS app shares the same API — one source of truth for what's in the fridge plan this week.</p>
<h2>Design principle</h2>
<p>Reduce friction between inspiration and execution. The win isn't a clever model — it's fewer open tabs and one list I trust when I walk into the store.</p>`,
  },
  {
    id: "habitat-compass",
    title: "Habitat Compass",
    description:
      "A data-driven platform helping urban planners visualize green infrastructure gaps across neighborhoods, combining satellite imagery with community input.",
    tags: ["React", "Python", "GIS", "Data Viz"],
    year: 2024,
    href: "/projects/habitat-compass",
    featured: true,
    detail: `<h2>Concept</h2>
<p>Habitat Compass explores how urban planners might combine satellite imagery with on-the-ground community input to see where green infrastructure is missing — parks, tree cover, cool corridors — block by block.</p>
<h2>What I explored</h2>
<p>A React front end maps neighborhood layers; Python processes geospatial data; GIS tooling joins aerial signals with survey-style community reports. The emphasis is on making gaps visible, not on prescribing a single policy answer.</p>
<h2>Status</h2>
<p>This is an exploratory build — a sandbox for thinking about civic data products rather than a deployed platform.</p>`,
  },
  {
    id: "tender-roots",
    title: "Tender Roots",
    description:
      "A mindful journaling app for processing grief and loss, featuring guided prompts written by therapists and gentle UI designed for emotional safety.",
    tags: ["Next.js", "TypeScript", "Supabase"],
    year: 2024,
    href: "/projects/tender-roots",
    detail: `<h2>Concept</h2>
<p>Tender Roots is a journaling app designed for people processing grief — guided prompts shaped with therapist input, calm typography, and interaction patterns that never rush you toward a false "done."</p>
<h2>Design choices</h2>
<p>Emotional safety shows up in the details: no streaks, no guilt-inducing notifications, soft color palette, and prompts that meet you where you are rather than pushing productivity framing onto loss.</p>
<h2>Stack</h2>
<p>Next.js and TypeScript on the front end; Supabase for auth and entries. A small product experiment in what humane software for hard seasons might feel like.</p>`,
  },
  {
    id: "neighborhood-pulse",
    title: "Neighborhood Pulse",
    description:
      "Hyperlocal community board connecting residents through neighborhood-specific events, mutual aid requests, and local business highlights.",
    tags: ["React Native", "Firebase", "Maps API"],
    year: 2023,
    href: "/projects/neighborhood-pulse",
    detail: `<h2>Concept</h2>
<p>Neighborhood Pulse imagines a hyperlocal board scoped to a few blocks — events, mutual aid asks, and small businesses — instead of a city-wide feed where everything drowns.</p>
<h2>What I prototyped</h2>
<p>React Native mobile client, Firebase for real-time posts, Maps API for place context. The hypothesis: trust and relevance come from geographic smallness, not better algorithms alone.</p>`,
  },
  {
    id: "pattern-studio",
    title: "Pattern Studio",
    description:
      "An in-browser generative art tool that creates seamless textile patterns using mathematical curves. Exports to SVG and print-ready formats.",
    tags: ["Canvas API", "SVG", "WebGL", "Design"],
    year: 2023,
    href: "/projects/pattern-studio",
    featured: true,
    detail: `<h2>Concept</h2>
<p>Pattern Studio generates seamless textile patterns in the browser using mathematical curves — tweak parameters, preview tile repeat, export SVG or print-ready output.</p>
<h2>Why it matters to me</h2>
<p>A bridge between code and craft: the same logic that powers generative art can produce objects you'd actually print, sew, or wear. Canvas, SVG, and WebGL each handle a different part of the pipeline.</p>`,
  },
  {
    id: "slow-reader",
    title: "Slow Reader",
    description:
      "A browser extension that paces your reading, adding mindful pauses and comprehension prompts to combat skimming habits built by social media.",
    tags: ["Chrome Extension", "JavaScript", "UX Research"],
    year: 2022,
    href: "/projects/slow-reader",
    detail: `<h2>Concept</h2>
<p>Slow Reader is a Chrome extension that paces long-form reading — intentional pauses, light comprehension checks — as a counterweight to the skim-and-scroll habits social feeds train into us.</p>
<h2>Research angle</h2>
<p>Part tool, part UX research probe: can software nudge attention without feeling punitive? Early prototypes focused on article pages and adjustable pacing, not universal blocking.</p>`,
  },
  {
    id: "foragers-atlas",
    title: "Forager's Atlas",
    description:
      "A community-sourced map of wild edible plants with seasonal availability, safety guides, and foraging ethics for urban and rural explorers.",
    tags: ["Next.js", "PostgreSQL", "Mapbox", "Community"],
    year: 2022,
    href: "/projects/foragers-atlas",
    detail: `<h2>Concept</h2>
<p>Forager's Atlas maps wild edible plants with seasonal windows, safety notes, and ethics reminders — community-sourced, Mapbox-backed, built for people who forage carefully rather than collect trophies.</p>
<h2>Community layer</h2>
<p>Contributions include identification notes, lookalike warnings, and respect-for-habitat guidelines. The map is only useful if trust in the data is high.</p>`,
  },
];

export const archivedProjects: Project[] = [
  {
    id: "a1",
    title: "SharkNinja Robot Reviews — NLP",
    description:
      "Applied NLP to 1,000 Amazon reviews for SharkNinja robot vacuums, extracting sentiment and recurring themes to surface actionable product insights. Built while working on robot data at SharkNinja.",
    tags: ["NLP", "Python", "Machine Learning", "Data Visualization"],
    year: 2020,
    href: "https://nbviewer.org/github/wuxt830/Shark-robot-comments-NLP/blob/master/SharkNinja%20Robot%20Data-%201000%20comments-checkpoint.ipynb",
    imageUrl: "/project-images/sharkninja.jpeg",
    category: "Business",
    detail: `<h2>Context</h2>
<p>Built while I was a data scientist on SharkNinja's robot team — we had thousands of customer reviews and needed structured insight, not anecdote.</p>
<h2>Approach</h2>
<p>Applied NLP to 1,000 Amazon reviews for robot vacuums: sentiment scoring, theme extraction, and visualizations that product managers could act on. The notebook walks through cleaning, modeling, and the recurring pain points that showed up in the data.</p>
<h2>Outcome</h2>
<p>Surfaced actionable themes — navigation, battery, app experience — that informed how we talked about product improvements internally.</p>`,
  },
  {
    id: "a2",
    title: "Online Shoppers Intentions",
    description:
      "Analyzed behavioral data from ~12,000 online sessions to predict purchase intent. Covered the full ML pipeline — feature evaluation, class imbalance handling, and hyperparameter tuning across multiple classifiers.",
    tags: ["Machine Learning", "Python", "Data Analysis", "Feature Engineering"],
    year: 2020,
    href: "https://nbviewer.org/github/wuxt830/Online-Users-Intention-Analysis/blob/master/Online%20users%20intentions-checkpoint.ipynb",
    imageUrl: "/project-images/online-shoppers.webp",
    category: "Business",
    detail: `<h2>Problem</h2>
<p>Predict whether an online browsing session will end in a purchase — useful for understanding funnel drop-off and intent signals.</p>
<h2>Approach</h2>
<p>~12,000 sessions, full pipeline: feature engineering, class imbalance techniques, comparing classifiers with proper validation. The notebook documents tradeoffs, not just final accuracy.</p>`,
  },
  {
    id: "a3",
    title: "DonorsChoose Project Approval Prediction",
    description:
      "Predicted whether teacher funding proposals on DonorsChoose.org would be approved, using NLP on project descriptions, word clouds for exploration, and ensemble classifiers for prediction.",
    tags: ["NLP", "Machine Learning", "Python", "Word Cloud"],
    year: 2020,
    href: "https://nbviewer.org/github/wuxt830/donors/blob/master/DonorsChoose%20Project%20Approval%20Prediction.ipynb",
    imageUrl: "/project-images/donorschoose.png",
    category: "Business",
    detail: `<h2>Problem</h2>
<p>Teachers submit classroom project proposals to DonorsChoose — which submissions get approved, and what language patterns correlate with success?</p>
<h2>Approach</h2>
<p>NLP on project descriptions, exploratory word clouds, ensemble classifiers. Combines text features with structured fields to model approval likelihood.</p>`,
  },
  {
    id: "a4",
    title: "Anime Recommender System",
    description:
      "Content-based recommendation engine over 12,000+ anime titles using TF-IDF and cosine similarity. Applied K-Means clustering and PCA to explore the latent structure of the dataset.",
    tags: ["NLP", "TF-IDF", "K-Means", "PCA", "Python"],
    year: 2020,
    href: "https://www.kaggle.com/code/wuxt830/anime-recommender-system",
    imageUrl: "/project-images/anime-recommender.png",
    category: "Business",
    detail: `<h2>Approach</h2>
<p>Content-based recommendations over 12,000+ anime titles: TF-IDF on descriptions, cosine similarity for nearest neighbors, K-Means and PCA to visualize how titles cluster in latent space.</p>
<h2>Why it's useful</h2>
<p>A clean playground for classic recsys techniques without the cold-start complexity of collaborative filtering at first.</p>`,
  },
  {
    id: "a5",
    title: "Electricity Usage Prediction",
    description:
      "Compared two forecasting approaches — Seasonal ARIMA and an LSTM neural network — for predicting household electricity consumption, with stationarity testing and full data pipeline.",
    tags: ["Time Series", "ARIMA", "LSTM", "Python"],
    year: 2019,
    href: "https://www.kaggle.com/code/wuxt830/electricity-usage-prediction-simple-time-series",
    imageUrl: "/project-images/electricity-usage.png",
    category: "Business",
    detail: `<h2>Problem</h2>
<p>Forecast household electricity consumption — compare classical and neural approaches on the same dataset.</p>
<h2>Approach</h2>
<p>Seasonal ARIMA with stationarity testing versus an LSTM pipeline. Documents preprocessing, seasonality, and where each method wins or fails.</p>`,
  },
  {
    id: "a6",
    title: "Graduate School Admission Prediction",
    description:
      "Modeled admission likelihood from GRE scores, GPA, and research experience using Multiple Linear Regression, Random Forest, and XGBoost. All analysis and visualizations done in R with ggplot2.",
    tags: ["R", "ggplot2", "Random Forest", "XGBoost"],
    year: 2019,
    href: "https://www.kaggle.com/code/wuxt830/graduate-scool-admission-prediction-in-r",
    imageUrl: "/project-images/grad-admission.png",
    category: "Research",
    detail: `<h2>Approach</h2>
<p>Predict graduate admission likelihood from GRE, GPA, and research experience. Compared linear models, Random Forest, and XGBoost in R with ggplot2 visualizations throughout — emphasis on interpretability, not just leaderboard scores.</p>`,
  },
  {
    id: "a7",
    title: "20 Newsgroups — Text Analysis",
    description:
      "Group project analyzing and clustering 20,000 newsgroup posts across 20 categories using NLP, dimensionality reduction with PCA, and visualization. Code not public; report available on request.",
    tags: ["NLP", "Clustering", "PCA", "Python"],
    year: 2019,
    href: "/archive/20-newsgroups",
    imageUrl: "/project-images/20-newsgroups.png",
    category: "Research",
    detail: `<h2>Project</h2>
<p>Group analysis of 20,000 newsgroup posts across 20 categories — NLP preprocessing, clustering, PCA for dimensionality reduction, and visualization of how topics separate (or blur) in embedding space.</p>
<h2>Availability</h2>
<p>Code isn't public; the written report is available on request. Reach out via LinkedIn if you'd like a copy.</p>`,
  },
  {
    id: "a8",
    title: "Unplanned ICU Transfer Prediction",
    description:
      "Predicted risk of unplanned ICU transfers from clinical data using association rule mining and Gurobi optimization modeling — an early foray into healthcare AI before it became my career.",
    tags: ["Association Rules", "Gurobi", "Optimization", "Healthcare"],
    year: 2019,
    href: "/archive/icu-transfer",
    imageUrl: "/project-images/icu-transfer.png",
    category: "Healthcare",
    detail: `<h2>Context</h2>
<p>An early healthcare AI project — before that became my career at PointClickCare. Predict unplanned ICU transfers from clinical signals.</p>
<h2>Approach</h2>
<p>Association rule mining for interpretable patterns, Gurobi optimization for constraint-heavy scenarios. The goal was risk stratification clinicians could reason about, not a black box score alone.</p>
<h2>Availability</h2>
<p>Report available on request — <a href="https://www.linkedin.com/in/cicily-wu-749983177/" target="_blank" rel="noopener noreferrer">LinkedIn</a> is the best way to reach me.</p>`,
  },
];
