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
  githubUrl?: string;
  linkedinUrl?: string;
  appStoreUrl?: string;
  subscribeUrl?: string;
  videoUrl?: string;
  previewImages?: { src: string; alt: string; caption?: string }[];
  previewNote?: string;
}

export const currentProjects: Project[] = [
  {
    id: "finance-analyzer",
    title: "Finance Analyzer",
    description:
      "A personal finance tool that reads credit card statements, categorizes spending with AI, and tracks the patterns behind real money decisions.",
    tags: ["Next.js", "PostgreSQL", "OpenAI", "Finance"],
    year: 2025,
    href: "/projects/finance-analyzer",
    imageUrl: "/project-images/cashcoach.svg",
    featured: true,
    githubUrl: "https://github.com/cicilywu08/finance-analyzer-v1",
    videoUrl: "/videos/finance-analyzer-demo.mp4",
    detail: `<h2>Why I built it</h2>
<p>I wanted to know where my money actually goes. Not monthly totals, but the patterns behind real decisions about saving, spending, and eventually not needing a salary.</p>
<h2>What it does</h2>
<p>Finance Analyzer reads credit card statements, uses AI to categorize transactions with context (not just merchant names), and surfaces spending trends over time. The goal is practical: understand your cash flow, spot drift, and work toward financial independence without turning finance into a second job.</p>
<h2>How it works</h2>
<p>It's a Next.js web app with PostgreSQL for storage and OpenAI for categorization and insights. Upload a statement, review the suggested categories, fix anything that looks wrong, and watch the summaries update across months. Run it on your own computer so your data stays local.</p>
<h2>What I'm learning</h2>
<p>Building for myself keeps the feedback loop tight. Every friction point in upload, categorization, or reporting shows up in my own usage the following week.</p>`,
  },
  {
    id: "ai-builder-radar",
    title: "AI Builder Radar",
    description:
      "A daily morning brief on what AI builders shipped, powered by an OpenClaw backend that scrapes, scores, and summarizes the signal for a five-minute read.",
    tags: ["OpenClaw", "Resend", "GitHub", "Hacker News", "X"],
    year: 2026,
    href: "/projects/ai-builder-radar",
    imageUrl: "/project-images/ai-builder-radar.svg",
    featured: true,
    githubUrl: "https://github.com/cicilywu08/AI-Launch-Radar-Landing-Page",
    subscribeUrl: "/launch-radar/index.html",
    previewNote:
      "This is the Launch Radar landing page. Subscribe with your email to get the daily digest. The sample below is what an OpenClaw-generated brief looks like in your inbox.",
    previewImages: [
      {
        src: "/project-images/launch-radar-landing.png",
        alt: "Launch Radar landing page with subscribe form",
        caption: "Landing page: subscribe for the daily brief",
      },
      {
        src: "/project-images/launch-radar-digest.png",
        alt: "Sample Launch Radar email digest generated via OpenClaw",
        caption: "Sample digest, generated via OpenClaw",
      },
    ],
    detail: `<h2>Why I built it</h2>
<p>The AI space moves fast. I was spending too much time scrolling X and newsletters trying to figure out what people had actually shipped: releases, repos, products. I wanted signal, not discourse, and I wanted an agent to do the gathering for me.</p>
<h2>What it does</h2>
<p>AI Builder Radar (Launch Radar) arrives every morning. It tracks builders across GitHub, Hacker News, and the X builder feed, then delivers a scored, summarized five-minute brief instead of another infinite scroll.</p>
<h2>Backend: OpenClaw</h2>
<p>The entire backend is built on <strong>OpenClaw</strong>. OpenClaw is the agent that scrapes the feeds, qualifies what actually shipped, scores items, and writes the digest you see in the email preview (the sample even labels itself “VIA OPENCLAW”). This project is not a hand-curated newsletter. It’s an OpenClaw-driven pipeline that turns builder activity into a readable brief.</p>
<h2>How it ships</h2>
<p>OpenClaw produces the structured digest; Resend delivers it to subscribers. The landing page is where people subscribe. Front end is the brief and the signup page; the intelligence layer is OpenClaw end to end.</p>`,
  },
  {
    id: "cookprep",
    title: "CookPrep AI",
    description:
      "A free iOS app that turns recipe links, food blogs, and YouTube cooking videos into clean grocery lists in seconds.",
    tags: ["iOS", "AI", "Grocery"],
    year: 2025,
    href: "/projects/cookprep",
    imageUrl: "/project-images/cookprep.svg",
    featured: true,
    linkedinUrl: "https://lnkd.in/p/d8wg2vi3",
    appStoreUrl: "https://apps.apple.com/us/app/cookprep-ai-grocery-list/id6760265014",
    videoUrl: "/videos/cookprep-demo.mp4",
    detail: `<h2>Why I built it</h2>
<p>I realized one of the hardest parts of cooking is remembering what to buy. Recipes online are a mess: buried in blog posts, inconsistently formatted, never quite ready for a grocery run. I made CookPrep for myself first, and I've been using it for months.</p>
<h2>What it does</h2>
<p>Paste a recipe link, food blog, or YouTube cooking video, and CookPrep AI pulls out the ingredients into a clean grocery list. At the store, I open that list instead of scrolling through the recipe again in the produce aisle.</p>
<h2>How it works</h2>
<p>It's a free iPhone app on the App Store. The backend is hosted on DigitalOcean, and the LLM inference runs on DigitalOcean Serverless Inference, so I can switch between models through a simple API.</p>
<h2>Design principle</h2>
<p>Reduce friction between inspiration and execution. The win isn't a clever model. It's fewer open tabs and one list I actually trust.</p>`,
  },
];

export const archivedProjects: Project[] = [
  {
    id: "a1",
    title: "SharkNinja Robot Reviews: NLP",
    description:
      "Applied NLP to 1,000 Amazon reviews for SharkNinja robot vacuums, extracting sentiment and recurring themes to surface actionable product insights. Built while working on robot data at SharkNinja.",
    tags: ["NLP", "Python", "Machine Learning", "Data Visualization"],
    year: 2020,
    href: "https://nbviewer.org/github/wuxt830/Shark-robot-comments-NLP/blob/master/SharkNinja%20Robot%20Data-%201000%20comments-checkpoint.ipynb",
    imageUrl: "/project-images/sharkninja.jpeg",
    category: "Business",
    detail: `<h2>Context</h2>
<p>Built while I was a data scientist on SharkNinja's robot team; we had thousands of customer reviews and needed structured insight, not anecdote.</p>
<h2>Approach</h2>
<p>Applied NLP to 1,000 Amazon reviews for robot vacuums: sentiment scoring, theme extraction, and visualizations that product managers could act on. The notebook walks through cleaning, modeling, and the recurring pain points that showed up in the data.</p>
<h2>Outcome</h2>
<p>Surfaced actionable themes (navigation, battery, app experience) that informed how we talked about product improvements internally.</p>`,
  },
  {
    id: "a2",
    title: "Online Shoppers Intentions",
    description:
      "Analyzed behavioral data from ~12,000 online sessions to predict purchase intent. Covered the full ML pipeline: feature evaluation, class imbalance handling, and hyperparameter tuning across multiple classifiers.",
    tags: ["Machine Learning", "Python", "Data Analysis", "Feature Engineering"],
    year: 2020,
    href: "https://nbviewer.org/github/wuxt830/Online-Users-Intention-Analysis/blob/master/Online%20users%20intentions-checkpoint.ipynb",
    imageUrl: "/project-images/online-shoppers.webp",
    category: "Business",
    detail: `<h2>Problem</h2>
<p>Predict whether an online browsing session will end in a purchase, useful for understanding funnel drop-off and intent signals.</p>
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
<p>Teachers submit classroom project proposals to DonorsChoose: which submissions get approved, and what language patterns correlate with success?</p>
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
      "Compared two forecasting approaches, Seasonal ARIMA and an LSTM neural network, for predicting household electricity consumption, with stationarity testing and full data pipeline.",
    tags: ["Time Series", "ARIMA", "LSTM", "Python"],
    year: 2019,
    href: "https://www.kaggle.com/code/wuxt830/electricity-usage-prediction-simple-time-series",
    imageUrl: "/project-images/electricity-usage.png",
    category: "Business",
    detail: `<h2>Problem</h2>
<p>Forecast household electricity consumption, comparing classical and neural approaches on the same dataset.</p>
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
<p>Predict graduate admission likelihood from GRE, GPA, and research experience. Compared linear models, Random Forest, and XGBoost in R with ggplot2 visualizations throughout, with emphasis on interpretability, not just leaderboard scores.</p>`,
  },
  {
    id: "a7",
    title: "20 Newsgroups: Text Analysis",
    description:
      "Group project analyzing and clustering 20,000 newsgroup posts across 20 categories using NLP, dimensionality reduction with PCA, and visualization. Code not public; report available on request.",
    tags: ["NLP", "Clustering", "PCA", "Python"],
    year: 2019,
    href: "/archive/20-newsgroups",
    imageUrl: "/project-images/20-newsgroups.png",
    category: "Research",
    detail: `<h2>Project</h2>
<p>Group analysis of 20,000 newsgroup posts across 20 categories: NLP preprocessing, clustering, PCA for dimensionality reduction, and visualization of how topics separate (or blur) in embedding space.</p>
<h2>Availability</h2>
<p>Code isn't public; the written report is available on request. Reach out via LinkedIn if you'd like a copy.</p>`,
  },
  {
    id: "a8",
    title: "Unplanned ICU Transfer Prediction",
    description:
      "Predicted risk of unplanned ICU transfers from clinical data using association rule mining and Gurobi optimization modeling, an early foray into healthcare AI before it became my career.",
    tags: ["Association Rules", "Gurobi", "Optimization", "Healthcare"],
    year: 2019,
    href: "/archive/icu-transfer",
    imageUrl: "/project-images/icu-transfer.png",
    category: "Healthcare",
    detail: `<h2>Context</h2>
<p>An early healthcare AI project, before that became my career at PointClickCare. Predict unplanned ICU transfers from clinical signals.</p>
<h2>Approach</h2>
<p>Association rule mining for interpretable patterns, Gurobi optimization for constraint-heavy scenarios. The goal was risk stratification clinicians could reason about, not a black box score alone.</p>
<h2>Availability</h2>
<p>Report available on request; <a href="https://www.linkedin.com/in/cicily-wu-749983177/" target="_blank" rel="noopener noreferrer">LinkedIn</a> is the best way to reach me.</p>`,
  },
];
