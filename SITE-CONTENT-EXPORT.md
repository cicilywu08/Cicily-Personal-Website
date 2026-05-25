# Cicily Personal Website — Complete Content & Segment Export

> **Purpose:** Single source document for redesign tools (e.g. Claude Design). Contains every user-facing string, content segment, data record, navigation label, design token, and planned route referenced in the codebase as of export date.
>
> **Implementation note:** Only the **Home** page (`/`) is implemented under `src/app/`. Navigation and data files describe **Projects**, **Archive**, **About**, **Life / Stories**, and **Life / Cicily's Pick** — those routes are linked in the UI but page files are not present in `src/app/` yet. Components like `LetterModal`, `HeartWidget`, `CityGuide`, and `StoryBody` exist and are documented here because they define intended UX copy.

---

## Table of Contents

1. [Brand & Persona](#1-brand--persona)
2. [Site Metadata (SEO)](#2-site-metadata-seo)
3. [Information Architecture & Routes](#3-information-architecture--routes)
4. [Global Chrome: Navigation & Footer](#4-global-chrome-navigation--footer)
5. [Design System Tokens](#5-design-system-tokens)
6. [Typography & Fonts](#6-typography--fonts)
7. [Page: Home (`/`)](#7-page-home-)
8. [Page: Projects (planned `/projects`)](#8-page-projects-planned-projects)
9. [Page: Archive (planned `/archive`)](#9-page-archive-planned-archive)
10. [Page: About (planned `/about`)](#10-page-about-planned-about)
11. [Page: Life / Stories (planned `/life`)](#11-page-life--stories-planned-life)
12. [Page: Life / Story Detail (planned `/life/[slug]`)](#12-page-life--story-detail-planned-lifeslug)
13. [Page: Cicily's Pick (planned `/life/picks`)](#13-page-cicilys-pick-planned-lifepicks)
14. [Interactive Components (copy & behavior)](#14-interactive-components-copy--behavior)
15. [External Links & Employers](#15-external-links--employers)
16. [Asset References](#16-asset-references)
17. [Content Inventory Summary](#17-content-inventory-summary)

---

## 1. Brand & Persona

| Field | Value |
|-------|-------|
| **Site owner / protagonist** | Cicily |
| **Professional identity (hero)** | AI product manager and builder |
| **Value proposition (hero)** | I turn emerging AI into practical tools people can rely on |
| **Current mode (hero)** | Currently building small things and occasionally disappearing somewhere in the world to think |
| **Metadata title** | Cicily — Designer & Builder |
| **Metadata description** | Personal website of Cicily — a designer, builder, and curious traveler |
| **Footer tagline** | made with care |
| **Voice** | Warm, personal, reflective; mix of English product voice and Chinese literary essays for Life content |
| **Languages in content** | English (primary UI + most essays), Chinese (native essays with optional English translation UX) |

**Positioning tension (useful for redesign):** Metadata says "Designer & Builder" while hero says "AI product manager and builder." Timeline and projects skew heavily toward AI/ML/product; Life section skews toward travel, memory, and place.

---

## 2. Site Metadata (SEO)

```
Title: Cicily — Designer & Builder
Description: Personal website of Cicily — a designer, builder, and curious traveler.
HTML lang: en
```

---

## 3. Information Architecture & Routes

### Primary navigation (desktop & mobile)

| Label | Path | Status in repo |
|-------|------|----------------|
| Home | `/` | Implemented |
| Projects | `/projects` | Linked, not implemented |
| Archive | `/archive` | Linked, not implemented |
| About | `/about` | Linked, not implemented |
| Life (dropdown parent) | — | Button only |
| → Stories | `/life` | Linked, not implemented |
| → Cicily's Pick | `/life/picks` | Linked, not implemented |

### Life dropdown descriptions

| Sub-item | Description text |
|----------|------------------|
| Stories | Travel essays & field notes |
| Cicily's Pick | Places I'd send a friend to |

### Other routes referenced in data

| Path | Purpose |
|------|---------|
| `/projects/cashcoach` | Project detail (linked from data) |
| `/projects/ai-builder-radar` | Project detail |
| `/projects/cookprep` | Project detail |
| `/archive/20-newsgroups` | Archived project |
| `/archive/icu-transfer` | Archived project |
| `/life/{slug}` | Story detail (5 slugs in data) |
| `/api/likes` | Heart widget (GET/POST) |
| `/api/translate` | Story translation (POST) |

### Mobile menu

- Same links as desktop
- Life expands to: Stories, Cicily's Pick (indented)
- Hamburger `aria-label`: Toggle menu

---

## 4. Global Chrome: Navigation & Footer

### Logo / site mark

```
Cicily
```
(Links to `/`, serif display font, accent color)

### Footer

```
LinkedIn  →  https://www.linkedin.com/in/cicily-wu-749983177/
Cicily · made with care · {current year}
```

---

## 5. Design System Tokens

From `globals.css` and inline styles across components.

### CSS variables

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#FAFAF7` | Page background |
| `--foreground` | `#1a1a1a` | Primary text |
| `--accent` | `#E07A5F` | Links, active nav, CTAs, hearts |
| `--accent-light` | `#F2A68E` | (defined, lighter accent) |
| `--accent-muted` | `#F5E6E0` | Tags, pills |
| `--border` | `#E8E8E2` | Dividers, nav border |
| `--muted` | `#6B6B6B` | Secondary text |
| `--card-bg` | `#FFFFFF` | Cards |

### Additional colors used in UI

| Color | Where |
|-------|-------|
| `#92400E` | Hero eyebrow, name highlight, primary CTA background |
| `#3a2a24` | Hero body text |
| `#4a4a4a` | Card descriptions |
| `#C05A3F` | Tag text, wax seal gradient end |
| `#F5F0EB` | Dropdown hover |
| `#FFFDF9` | Dropdown panel, guide bubble |
| `#FDFAF5` | Letter modal paper |
| `#EBE5DA` | Letter ruled lines |
| `#B0A89E` | Letter modal muted text |
| `#A09890` | Dropdown descriptions |
| `#AAAAAA` | Guide UI muted |
| `#C8C8C2` | Heart hint text |
| `#FECDD3`, `#FDBA74`, `#FDA4AF`, `#F59E0B`, `#F97316`, `#FB7185` | Hero gradient & decorative dots |

### Hero gradient (home)

```
linear-gradient(150deg, #FCD34D 0%, #FDBA74 22%, #FDA4AF 50%, #FECDD3 72%, #FAFAF7 100%)
```

### Base font size

```
html: 17px
```

---

## 6. Typography & Fonts

| Role | Font family |
|------|-------------|
| Headings (Latin) | DM Serif Display |
| Body (Latin) | Plus Jakarta Sans (weights 300–700) |
| Chinese prose / titles | Noto Sans SC (weights 300, 400, 500, 700) |

### Prose classes (story pages)

- `prose-custom` — English articles
- `prose-zh` — Chinese articles (wider line-height, Noto Sans SC)
- `title-zh` — Chinese story titles

---

## 7. Page: Home (`/`)

Segment order on the live home page: **Hero → My Journey (timeline) → Current Projects (preview) → From the Field (preview)**.

---

### Segment 7.1 — Hero

| Element | Copy |
|---------|------|
| Eyebrow | Hello there |
| H1 | Hi, I'm **Cicily**. |
| Body paragraph | AI product manager and builder. |
| Body line 2 | I turn emerging AI into practical tools people can rely on. |
| Body line 3 | Currently building small things and occasionally disappearing somewhere in the world to think. |
| Primary CTA | See my work → `/projects` |
| Secondary CTA | About me → `/about` |

**Visual segment notes:** Full-width warm gradient; scattered rotated square dots; layered SVG wave transition to `#FAFAF7`; no photo in hero.

---

### Segment 7.2 — My Journey (Timeline)

| Element | Copy |
|---------|------|
| Section H2 | My Journey |
| Section intro | A brief history of where I've been and what I've built along the way. |

#### Timeline entries (chronological in UI, newest first)

**2025**
- **Role:** DigitalOcean — Senior AI Product Manager  
- **Detail:** Working at the intersection of cloud infrastructure and AI, building agentic AI capabilities for developers.  
- **Company link:** https://www.digitalocean.com/

**2024**
- **Role:** PointClickCare — Senior AI Product Manager  
- **Detail:** Moved into healthcare AI, building LLM-powered capabilities on top of the EHR platform to support nurses and clinicians.  
- **Company link:** https://www.pointclickcare.com/

**2022**
- **Role:** eBay — Senior Product Manager, Core AI  
- **Detail:** Joined the core AI team working on innovative AI initiatives including computer vision, LLMs, and generative media.  
- **Company link:** https://www.ebay.com/

**2021**
- **Role:** SharkNinja — Product Manager, Robot Division  
- **Detail:** Transitioned into product management, leading multiple robot vacuum products across hardware, software, and mobile app, while owning both technical execution and go-to-market.  
- **Company link:** https://www.sharkninja.com/

**2020**
- **Role:** SharkNinja — Data Scientist  
- **Detail:** Worked on robot data, user behavior analysis, modeling, and NLP on customer reviews to understand how people interact with our products.  
- **Company link:** https://www.sharkninja.com/

**2020**
- **Role:** Northeastern University, Boston — M.S. Data Analytics Engineering  
- **Detail:** This was where my journey into AI and machine learning truly began.

**2018**
- **Role:** Chang'an University — Bachelor's Degree in Engineering  
- **Detail:** Started my journey in engineering and problem-solving.

---

### Segment 7.3 — Current Projects (preview)

| Element | Copy |
|---------|------|
| Section H2 | Current Projects |
| Section intro | Things I'm actively building and thinking about. |
| Desktop link | View all → `/projects` |
| Mobile link | View all projects → `/projects` |

**Home shows first 3 items from `currentProjects` array:**

1. **CashCoach** (2025)  
2. **AI Builder Radar** (2026)  
3. **CookPrep AI** (2025)  

(Full project copy in Section 8.)

---

### Segment 7.4 — From the Field (preview)

| Element | Copy |
|---------|------|
| Section H2 | From the Field |
| Section intro | Travel stories and personal essays. |
| Desktop link | Read more → `/life` |
| Mobile link | Read more stories → `/life` |

**Home shows featured stories only (`featured: true`), max 2:**

1. 马伊达内克，一个晴天  
2. The Slow Train Through Japan  

(StoryCard also shows badge **Featured**, location, date, read time.)

---

## 8. Page: Projects (planned `/projects`)

*Inferred from `currentProjects` data + `ProjectCard` UI patterns. Full listing would show all `currentProjects`; home preview shows subset.*

### Section framing (suggested from home)

- **Title:** Current Projects  
- **Subtitle:** Things I'm actively building and thinking about.

### Card UI labels (component)

- Year badge on card (numeric)
- Tags as pills (tech stack / themes)
- External links open in new tab
- `href: "#"` projects are non-clickable placeholders
- Archive variant shows category pill defaulting to **Archive**

---

### Project: CashCoach

| Field | Value |
|-------|-------|
| ID | cashcoach |
| Title | CashCoach |
| Year | 2025 |
| Href | /projects/cashcoach |
| Featured | yes |
| Image | /project-images/cashcoach.svg |
| Description | A personal finance intelligence platform that analyzes credit card statements, categorizes transactions with AI, and helps plan for financial independence. |
| Tags | Next.js, PostgreSQL, OpenAI, Finance |

---

### Project: AI Builder Radar

| Field | Value |
|-------|-------|
| ID | ai-builder-radar |
| Title | AI Builder Radar |
| Year | 2026 |
| Href | /projects/ai-builder-radar |
| Featured | yes |
| Image | /project-images/ai-builder-radar.svg |
| Description | A personal AI digest that lands in my inbox every day at noon — tracking what builders in the AI space are actually shipping, not just talking about. |
| Tags | Python, OpenRouter, Gemini, Resend, Cron |

---

### Project: CookPrep AI

| Field | Value |
|-------|-------|
| ID | cookprep |
| Title | CookPrep AI |
| Year | 2025 |
| Href | /projects/cookprep |
| Featured | yes |
| Image | /project-images/cookprep.svg |
| Description | An iOS app and web app that turns recipe links or pasted text into structured recipes and a shoppable grocery list — powered by AI. |
| Tags | React, Node.js, OpenAI, iOS, PostgreSQL |

---

### Project: Habitat Compass

| Field | Value |
|-------|-------|
| ID | 1 |
| Title | Habitat Compass |
| Year | 2024 |
| Href | # (placeholder) |
| Featured | yes |
| Description | A data-driven platform helping urban planners visualize green infrastructure gaps across neighborhoods, combining satellite imagery with community input. |
| Tags | React, Python, GIS, Data Viz |

---

### Project: Tender Roots

| Field | Value |
|-------|-------|
| ID | 2 |
| Title | Tender Roots |
| Year | 2024 |
| Href | # |
| Description | A mindful journaling app for processing grief and loss, featuring guided prompts written by therapists and gentle UI designed for emotional safety. |
| Tags | Next.js, TypeScript, Supabase |

---

### Project: Neighborhood Pulse

| Field | Value |
|-------|-------|
| ID | 3 |
| Title | Neighborhood Pulse |
| Year | 2023 |
| Href | # |
| Description | Hyperlocal community board connecting residents through neighborhood-specific events, mutual aid requests, and local business highlights. |
| Tags | React Native, Firebase, Maps API |

---

### Project: Pattern Studio

| Field | Value |
|-------|-------|
| ID | 4 |
| Title | Pattern Studio |
| Year | 2023 |
| Href | # |
| Featured | yes |
| Description | An in-browser generative art tool that creates seamless textile patterns using mathematical curves. Exports to SVG and print-ready formats. |
| Tags | Canvas API, SVG, WebGL, Design |

---

### Project: Slow Reader

| Field | Value |
|-------|-------|
| ID | 5 |
| Title | Slow Reader |
| Year | 2022 |
| Href | # |
| Description | A browser extension that paces your reading, adding mindful pauses and comprehension prompts to combat skimming habits built by social media. |
| Tags | Chrome Extension, JavaScript, UX Research |

---

### Project: Forager's Atlas

| Field | Value |
|-------|-------|
| ID | 6 |
| Title | Forager's Atlas |
| Year | 2022 |
| Href | # |
| Description | A community-sourced map of wild edible plants with seasonal availability, safety guides, and foraging ethics for urban and rural explorers. |
| Tags | Next.js, PostgreSQL, Mapbox, Community |

---

## 9. Page: Archive (planned `/archive`)

*From `archivedProjects` — likely grouped by `category` pill on cards.*

### Categories used

- Business
- Research
- Healthcare

---

### Archive: SharkNinja Robot Reviews — NLP

| Field | Value |
|-------|-------|
| Title | SharkNinja Robot Reviews — NLP |
| Year | 2020 |
| Category | Business |
| Href | https://nbviewer.org/github/wuxt830/Shark-robot-comments-NLP/blob/master/SharkNinja%20Robot%20Data-%201000%20comments-checkpoint.ipynb |
| Image | /project-images/sharkninja.jpeg |
| Description | Applied NLP to 1,000 Amazon reviews for SharkNinja robot vacuums, extracting sentiment and recurring themes to surface actionable product insights. Built while working on robot data at SharkNinja. |
| Tags | NLP, Python, Machine Learning, Data Visualization |

---

### Archive: Online Shoppers Intentions

| Field | Value |
|-------|-------|
| Title | Online Shoppers Intentions |
| Year | 2020 |
| Category | Business |
| Href | https://nbviewer.org/github/wuxt830/Online-Users-Intention-Analysis/blob/master/Online%20users%20intentions-checkpoint.ipynb |
| Image | /project-images/online-shoppers.webp |
| Description | Analyzed behavioral data from ~12,000 online sessions to predict purchase intent. Covered the full ML pipeline — feature evaluation, class imbalance handling, and hyperparameter tuning across multiple classifiers. |
| Tags | Machine Learning, Python, Data Analysis, Feature Engineering |

---

### Archive: DonorsChoose Project Approval Prediction

| Field | Value |
|-------|-------|
| Title | DonorsChoose Project Approval Prediction |
| Year | 2020 |
| Category | Business |
| Href | https://nbviewer.org/github/wuxt830/donors/blob/master/DonorsChoose%20Project%20Approval%20Prediction.ipynb |
| Image | /project-images/donorschoose.png |
| Description | Predicted whether teacher funding proposals on DonorsChoose.org would be approved, using NLP on project descriptions, word clouds for exploration, and ensemble classifiers for prediction. |
| Tags | NLP, Machine Learning, Python, Word Cloud |

---

### Archive: Anime Recommender System

| Field | Value |
|-------|-------|
| Title | Anime Recommender System |
| Year | 2020 |
| Category | Business |
| Href | https://www.kaggle.com/code/wuxt830/anime-recommender-system |
| Image | /project-images/anime-recommender.png |
| Description | Content-based recommendation engine over 12,000+ anime titles using TF-IDF and cosine similarity. Applied K-Means clustering and PCA to explore the latent structure of the dataset. |
| Tags | NLP, TF-IDF, K-Means, PCA, Python |

---

### Archive: Electricity Usage Prediction

| Field | Value |
|-------|-------|
| Title | Electricity Usage Prediction |
| Year | 2019 |
| Category | Business |
| Href | https://www.kaggle.com/code/wuxt830/electricity-usage-prediction-simple-time-series |
| Image | /project-images/electricity-usage.png |
| Description | Compared two forecasting approaches — Seasonal ARIMA and an LSTM neural network — for predicting household electricity consumption, with stationarity testing and full data pipeline. |
| Tags | Time Series, ARIMA, LSTM, Python |

---

### Archive: Graduate School Admission Prediction

| Field | Value |
|-------|-------|
| Title | Graduate School Admission Prediction |
| Year | 2019 |
| Category | Research |
| Href | https://www.kaggle.com/code/wuxt830/graduate-scool-admission-prediction-in-r |
| Image | /project-images/grad-admission.png |
| Description | Modeled admission likelihood from GRE scores, GPA, and research experience using Multiple Linear Regression, Random Forest, and XGBoost. All analysis and visualizations done in R with ggplot2. |
| Tags | R, ggplot2, Random Forest, XGBoost |

---

### Archive: 20 Newsgroups — Text Analysis

| Field | Value |
|-------|-------|
| Title | 20 Newsgroups — Text Analysis |
| Year | 2019 |
| Category | Research |
| Href | /archive/20-newsgroups |
| Image | /project-images/20-newsgroups.png |
| Description | Group project analyzing and clustering 20,000 newsgroup posts across 20 categories using NLP, dimensionality reduction with PCA, and visualization. Code not public; report available on request. |
| Tags | NLP, Clustering, PCA, Python |

---

### Archive: Unplanned ICU Transfer Prediction

| Field | Value |
|-------|-------|
| Title | Unplanned ICU Transfer Prediction |
| Year | 2019 |
| Category | Healthcare |
| Href | /archive/icu-transfer |
| Image | /project-images/icu-transfer.png |
| Description | Predicted risk of unplanned ICU transfers from clinical data using association rule mining and Gurobi optimization modeling — an early foray into healthcare AI before it became my career. |
| Tags | Association Rules, Gurobi, Optimization, Healthcare |

---

## 10. Page: About (planned `/about`)

*No dedicated page file in repo. Components suggest intended content:*

### LetterModal (likely About hero CTA)

| Element | Copy |
|---------|------|
| Trigger button | Write me a letter ✉ |
| Greeting | Hello Cicily, |
| Placeholder | Write whatever you'd like — a hello, a thought, a question, something you've been meaning to say... |
| Empty footer hint | Take your time. |
| Footer with text | {N} characters |
| Submit button | Send this letter ✉ |
| Close | × |

### HeartWidget (likely About page social proof)

| Element | Copy |
|---------|------|
| aria-label | Give some love |
| Hint (0 clicks) | leave some love |
| Hint (partial) | {N} left (max 10 per user) |
| Hint (full) | thank you ♡ |
| Counter | Total likes from `/api/likes` (displays "—" while loading) |
| Pop animation | +1 |

---

## 11. Page: Life / Stories (planned `/life`)

*Listing page inferred from `stories` data + StoryCard.*

### Likely section framing

- Nav: **Stories** — Travel essays & field notes
- Home preview title: **From the Field**

### Story list metadata fields (all stories)

| # | Title | Slug | Location | Date | Read time | Featured | Lang |
|---|-------|------|----------|------|-----------|----------|------|
| 1 | 马伊达内克，一个晴天 | thirty-days-in-oaxaca | 卢布林，波兰 | 2024年夏 | 6 min | yes | zh |
| 2 | The Slow Train Through Japan | slow-train-japan | Japan | March 2024 | 15 min | yes | en |
| 3 | One Week in Tbilisi | one-week-tbilisi | Tbilisi, Georgia | September 2023 | 8 min | yes | en |
| 4 | Finding Quiet in Portuguese Villages | portuguese-villages | Northern Portugal | June 2023 | 10 min | no | en |
| 5 | Morocco on a Slow Budget | morocco-slow-budget | Morocco | February 2022 | 11 min | no | en |

### Story excerpts (card / list view)

**1 — 马伊达内克，一个晴天**  
为了参观一座叫马伊达内克的集中营，我坐了三小时火车，来到波兰的小城卢布林。营地几乎完整地保留了下来。铁丝网、瞭望塔、营房、毒气室，一切都还在那里。

**2 — The Slow Train Through Japan**  
Taking every local train from Kyoto to the tip of Kyushu, stopping in towns with no tourist infrastructure, eating things I couldn't identify, and learning to be uncomfortable.

**3 — One Week in Tbilisi**  
Georgia's capital is warm, crumbling, alive, and completely unlike anywhere else. Also the wine is extraordinary and costs almost nothing.

**4 — Finding Quiet in Portuguese Villages**  
A two-week circuit through inland villages that don't appear on travel blogs. Stone houses, terraced vineyards, and the particular magic of places that haven't decided to be charming.

**5 — Morocco on a Slow Budget**  
Thirty days, roughly $1,200, endless mint tea, and the education of trying to photograph people who are living rather than performing.

### Image gradients (visual segment IDs)

| Story | Tailwind gradient classes |
|-------|---------------------------|
| 1 | from-amber-300 via-orange-300 to-rose-300 |
| 2 | from-pink-200 via-rose-200 to-red-200 |
| 3 | from-violet-200 via-purple-200 to-indigo-200 |
| 4 | from-green-200 via-teal-200 to-cyan-200 |
| 5 | from-yellow-200 via-amber-200 to-orange-200 |

---

## 12. Page: Life / Story Detail (planned `/life/[slug]`)

Uses `StoryBody` component. Full article bodies below (HTML converted to readable markdown).

---

### Story 1: 马伊达内克，一个晴天

**Slug:** `thirty-days-in-oaxaca` *(note: slug does not match title)*  
**Location:** 卢布林，波兰  
**Date:** 2024年夏  
**Read time:** 6 分钟 (Chinese) / 6 min read (English toggle)  
**Language:** Chinese (`lang: zh`)

#### Translation banner (Chinese stories only)

```
These essays were originally written in Chinese, my native language.
The English version you're reading is automatically translated.
When writing about life, I still prefer my mother tongue :)
```

| Button state | Label |
|--------------|-------|
| Default | Read in English |
| Loading | Translating… |
| English active | 读中文版 |
| Error | Translation failed — try again |

#### Full body (Chinese)

为了参观一座叫马伊达内克的集中营，我坐了三小时火车，来到波兰的小城卢布林。

营地几乎完整地保留了下来。铁丝网、瞭望塔、营房、毒气室，一切都还在那里。

参观路线的尽头，是后来修建的一座骨灰纪念堂。那是一只巨大的混凝土穹顶，像一只扣在地面的沉重的碗。穹顶下，堆放着从焚尸场收集来的受害者骨灰。无数人的生命，在那里被压缩成一层沉默的灰。穹顶边缘刻着一句波兰语：

> Los nasz dla was przestrogą.  
> ——让我们的命运，成为对你们的警告。

纪念堂正对着营地入口。入口处矗立着另一座巨大的石质纪念碑，岩石仿佛被撕裂、压扭成一扇沉重的门。两座庞然大物隔着整座营地遥遥相望。

从纪念堂走回入口的路很长。一条笔直的水泥大道，一眼望到尽头。铁丝网的另一侧，一座座瞭望塔整齐地立着，彼此之间没有区别。我走了很久。左手边始终是营地。焚尸炉、营房、毒气室，一个接一个地从身旁退去。历史像倒叙一样，再次在我面前展开。

马伊达内克不像奥斯维辛那样拥挤。来这里的多半是学校组织的学生。

天气晴朗，营地很空。老师带着一队一队的少年走进来。

学生们在草地上围坐下来，从书包里拿出记事本写东西。写完以后，有人站起来念自己写的句子，其他人听着。女孩的发丝被微风吹拂，男生的声音带着一点变声期的粗糙。

远处是铁丝网和瞭望塔，木制营房一排一排地站在那里。念完以后，他们把本子收进书包，又排好队继续往前走。草地上很快又空下来。

---

### Story 2: The Slow Train Through Japan

**Slug:** `slow-train-japan`  
**Location:** Japan  
**Date:** March 2024  
**Read time:** 15 min read  
**Language:** English

#### Full body

The Shinkansen is a miracle. The Shinkansen is also, in my opinion, a way to completely miss Japan. You arrive somewhere too fast and with too little context, and the country never quite gets beneath your skin.

I decided to take only local trains — the ones that stop every twelve minutes, the ones where the announcement is a woman's gentle voice in Japanese, and then the same sentence in a slightly different voice that is also Japanese, because the English announcement stopped being funded ten years ago.

## Kurashiki on a Wednesday

I didn't plan to spend three days in Kurashiki. The canal district looked pretty in photos. I arrived, the canal district was pretty, and then I wandered into a ceramics shop and got into a conversation with the owner that lasted four hours and covered grief, clay memory, and the particular loneliness of making beautiful things.

He had studied in Kyoto and returned to his hometown, which he described as "a decision that sounds wrong but feels right." I understood this more than I expected to.

> We ate convenience store onigiri by the canal at dusk and watched egrets land in the water with impossible delicacy. "This is the best part of any day," he said. I didn't disagree.

I took 47 local trains over 18 days. I arrived in places I had never heard of and ate things that turned out to be extraordinary and things that turned out to be an acquired taste I did not acquire. I was lonely sometimes in the specific way that solo travel makes you lonely — acutely, cleanly, without the buffer of familiar context.

By the time I reached the southern tip of Kyushu, I felt like I'd moved through something rather than past it. That's the whole point, I think.

---

### Story 3: One Week in Tbilisi

**Slug:** `one-week-tbilisi`  
**Location:** Tbilisi, Georgia  
**Date:** September 2023  
**Read time:** 8 min read

#### Full body

Tbilisi doesn't try to charm you. It just exists — peeling frescoes and sulfur baths and those extraordinary carved wooden balconies in the old town that look like they'll collapse at any moment and have probably been looking like that for two hundred years.

I stayed in a guesthouse in Abanotubani, the sulfur bath district, where you can hear the baths running all night like underground rivers. My host was a woman named Nino who made churchkhela every morning and left some outside my door as a matter of course, the way someone might leave a newspaper.

## The Wine

Georgia invented wine. Not invented in the marketing sense — invented in the literal archaeological sense, 8,000 years ago, in clay vessels called qvevri buried in the earth. Orange wine made this way doesn't taste like other orange wine. It tastes like something older than wine, something that predates the concept of a wine menu.

I sat in a wine bar in the old town for four hours with a carafe of Rkatsiteli and the second volume of a novel I'd started in the airport. This is my ideal evening. Tbilisi provided it effortlessly.

> At the table next to me, a three-generation family was arguing about something with the passionate specificity that Georgians bring to disagreements, and occasionally one of them would refill my glass without being asked. This happened twice.

I left wanting to return immediately. I am writing this a year later and still wanting to return immediately. That seems like the correct response to Tbilisi.

---

### Story 4: Finding Quiet in Portuguese Villages

**Slug:** `portuguese-villages`  
**Location:** Northern Portugal  
**Date:** June 2023  
**Read time:** 10 min read

#### Full body

Everyone goes to Lisbon. Many people go to Porto. Almost nobody goes to Lindoso, or Pitões das Júnias, or the villages that string themselves along the Peneda-Gerês range like beads that someone keeps forgetting to finish.

This was the trip I took when I needed to remember how to be quiet. I'd been working hard on several things that weren't going well, and I needed to go somewhere that didn't have opinions about productivity.

## Stone and Time

The espigueiros in Lindoso are grain stores built on staddle stones, narrow and elegant, assembled without mortar in a way that has lasted eight hundred years. The village has been tending them for eight hundred years. The village will, presumably, tend them for eight hundred more. There is something very calming about this.

I rented a house for a week in a village of perhaps sixty people. The couple next door kept a vegetable garden of exuberant proportions and fed me from it daily. I helped them with something involving fence posts one afternoon and was paid in wine and conversation I only partially understood, which was more than enough.

---

### Story 5: Morocco on a Slow Budget

**Slug:** `morocco-slow-budget`  
**Location:** Morocco  
**Date:** February 2022  
**Read time:** 11 min read

#### Full body

Morocco confiscates your sense of time. The medinas have no grid, which means you can't find anything by logic — only by repetition, until the logic becomes spatial rather than conceptual. By the third day in Fez, I knew where the brass-workers' souk was. By the fifth day, I knew how to arrive there from anywhere.

I traveled slowly and cheaply, which in Morocco means eating wherever the plastic stools are, taking the CTM buses rather than the tourist shuttles, and staying in riads where the family clearly lives in the back and isn't quite sure what to make of you.

## On Photography and Permission

I stopped taking street photos in Fez after a woman made it very clear she didn't want to be photographed, and I realized I'd been treating the medina as a backdrop rather than a place where people were trying to do their shopping.

After that I only photographed architecture, and occasionally food, and once a very dramatic camel that seemed to be offering. The trip became more itself without the camera as a filter.

> "You look like you are finally here," said the man who made my coffee every morning at a cart near Bab Boujloud. I don't know exactly what he meant, but I knew what he meant.

---

## 13. Page: Cicily's Pick (planned `/life/picks`)

*Travel recommendations with optional audio guide widget (`CityGuide`).*

### Page-level concept

- **Nav label:** Cicily's Pick  
- **Nav description:** Places I'd send a friend to  
- Five cities in South America / Uruguay with eats + see lists and voice-note scripts

---

### City: Buenos Aires, Argentina

| Field | Value |
|-------|-------|
| Slug | buenos-aires |
| Tagline | steak, bookstores, old-world softness |
| Opening line | I'd go back for the steak. I'd stay for everything else. |
| Gradient | linear-gradient(135deg, #FECDD3 0%, #FDBA74 100%) |
| Audio | /audio/buenos-aires.m4a |

#### Voice guide script (typewriter / audio transcript)

1. Okay so — Buenos Aires. Where do I even start.
2. First thing you need to know: this city does not wake up until midnight. Literally. We rolled out for dinner at 10pm and the restaurant was still filling up.
3. But that steak at Don Julio? I am still thinking about it. Order the bife de chorizo. Don't overthink it.
4. El Ateneo is one of those places that sounds touristy but genuinely stops you in your tracks. It's a theatre. That became a bookstore. You get coffee on the old stage. Just go.
5. Last morning I sat at Café Tortoni with a café con leche and almost didn't leave. There's something about Buenos Aires that feels like it already knows you.

#### Eats

| Name | Category | Note |
|------|----------|------|
| Don Julio Parrilla | Steakhouse | Order the bife de chorizo. Come early or expect a wait. Worth every minute either way. |
| El Ateneo Grand Splendid | Bookstore café | A converted theatre that became a bookstore. Get coffee on the old stage. One of the most beautiful rooms I've sat in. |
| Café Tortoni | Historic café | Buenos Aires's oldest café. Touristy? Yes. Worth it? Also yes. The medialunas are non-negotiable. |

#### See

| Name | Category | Note |
|------|----------|------|
| Caminito | Street / Open-air museum | Colorful, chaotic, completely alive. Go in the morning before the crowds arrive. |

---

### City: Montevideo, Uruguay

| Field | Value |
|-------|-------|
| Slug | montevideo |
| Tagline | quiet, coastal, and quietly perfect |
| Opening line | The kind of city that doesn't try to impress you — and somehow does. |
| Gradient | linear-gradient(135deg, #D1FAE5 0%, #6EE7B7 100%) |

#### Voice guide script

1. Everyone skips Montevideo for Buenos Aires. That is exactly why I love it.
2. It's quieter. Slower. And somehow more itself. The kind of city that doesn't perform for you.
3. I had the best morning of the whole trip at Wild Bakery — just bread, coffee, a window seat. No plans. That was enough.
4. IKIGAI was a surprise. Japanese-Peruvian in Uruguay? Somehow it works perfectly. The ceviche was one of the best things I ate on the whole trip.
5. And the Mercado Agrícola — walk through the whole thing before you sit down anywhere. You'll know what you want by the time you've seen it all.

#### Eats

| Name | Category | Note |
|------|----------|------|
| IKIGAI Nikkei | Japanese-Peruvian | Unexpected and wonderful. The ceviches are delicate and bright — not what you'd expect in Uruguay. |
| Wild Bakery | Bakery | Perfect morning stop. Natural sourdough, good coffee, easy atmosphere. The kind of place you'd go every day if you lived here. |
| Mercado Agrícola de Montevideo | Food market | The city's best food market. Walk through everything first, then sit down and order something. |

#### See

| Name | Category | Note |
|------|----------|------|
| Solís Theater | Theatre / Architecture | If there's a show on, go. If not, peek inside anyway — the interior alone is worth the detour. |

---

### City: Cartagena, Colombia

| Field | Value |
|-------|-------|
| Slug | cartagena |
| Tagline | color, heat, something ancient in the air |
| Opening line | Walk slowly. The city rewards it. |
| Gradient | linear-gradient(135deg, #FEF3C7 0%, #FCD34D 100%) |

#### Voice guide script

1. The heat hits you immediately. Like a warm wall you walk straight into.
2. And then you just... surrender to it. That's the only way to do Cartagena.
3. Walk the old city at golden hour. Stop at Ábaco for a coffee — books everywhere, ceiling fans turning slowly, completely unhurried. That's the afternoon right there.
4. Candé for lunch. 100% local, unpretentious, exactly what the city actually tastes like. Don't go to the tourist spots first.
5. Then at night, Café Havana. Cold drink, warm air, music from somewhere. It's a classic for good reason.

#### Eats

| Name | Category | Note |
|------|----------|------|
| Restaurante Candé | Colombian | 100% Cartagena cooking. Unpretentious, deeply local, exactly right. Go for lunch. |
| Ábaco Libros y Café | Bookstore café | Books in Spanish, coffee in hand, ceiling fans overhead. A perfect humid afternoon. |
| Café Havana | Bar / Café | Cold drink, warm night, live music somewhere in the background. A classic for good reason. |

#### See

| Name | Category | Note |
|------|----------|------|
| Farmacia San Miguel | Historic pharmacy | An old apothecary turned small museum. Tiny, strange, completely worth five minutes of your time. |

---

### City: Medellín, Colombia

| Field | Value |
|-------|-------|
| Slug | medellin |
| Tagline | spring weather, strong coffee, real energy |
| Opening line | Every season is spring here. The coffee is serious. The city is alive. |
| Gradient | linear-gradient(135deg, #EDE9FE 0%, #C4B5FD 100%) |

#### Voice guide script

1. I did not expect to love Medellín this much. Nobody warned me.
2. The weather is genuinely perfect every single day. Like, suspiciously perfect. 72°F and sunny. Always.
3. The coffee at Pergamino is world-class. I'm not exaggerating. Order the filter, find a seat, stay two hours.
4. Mondongo's — the mondongo is the point. Order it even if you're not sure. Especially if you're not sure.
5. And then — go to Comuna 13. With a guide. Let them tell the story. It is not a tourist attraction. It's a neighborhood that rebuilt itself from scratch, and the murals are proof of that.

#### Eats

| Name | Category | Note |
|------|----------|------|
| Pergamino Café | Specialty coffee | The best coffee I had in Colombia, full stop. Order the filter. Stay as long as you can. |
| Restaurante Mondongo's | Colombian | The mondongo is the point. Order it even if you're not sure. Especially if you're not sure. |
| Bihao | Colombian modern | Local ingredients, careful cooking. The kind of restaurant that makes you trust a city's food scene. |

#### See

| Name | Category | Note |
|------|----------|------|
| Zippy Tour, Comuna 13 | Neighborhood tour | Go with a local guide. The murals are remarkable. The story behind them even more so. |

---

### City: Punta del Este, Uruguay

| Field | Value |
|-------|-------|
| Slug | punta-del-este |
| Tagline | sun, seafood, and a slower pace |
| Opening line | Come off-season. The city shows you its real self. |
| Gradient | linear-gradient(135deg, #DBEAFE 0%, #93C5FD 100%) |

#### Voice guide script

1. Go off-season. I cannot stress this enough.
2. In summer it's packed with the wrong kind of energy. Off-season, the city exhales. You can actually hear it.
3. Muelle 3 — right on the port, order whatever came in that morning. Don't look at the menu too hard, just ask.
4. And then after dinner: walk the port, get ice cream at Arlecchino. That's the whole evening right there.
5. Casapueblo at sunset is one of those things that feels almost too perfect to be real. White sculptural house on a cliff above the sea. Go. No exceptions.

#### Eats

| Name | Category | Note |
|------|----------|------|
| Muelle 3 | Seafood | Right on the port. Order whatever came in that morning and trust the kitchen. |
| 481 Gourmet | Restaurant | Quietly excellent. The kind of place locals go when they actually want a good meal. |
| Heladería Arlecchino | Ice cream | Walk the port after dinner, then come here. That's the move. |

#### See

| Name | Category | Note |
|------|----------|------|
| Casapueblo | Art museum / Architecture | Carlos Páez Vilaró's white sculptural house above the sea. Go at sunset. No exceptions. |

---

## 14. Interactive Components (copy & behavior)

### CityGuide — floating character (city pick pages)

| Context | Copy |
|---------|------|
| Closed button aria-label | Hear Cicily's take |
| Closed button title | Hear Cicily's voice note |
| Audio teaser | psst — I left you a little voice note about this city 🎙 |
| Audio teaser sub | (put in your earphones if you're somewhere quiet!) |
| Start audio CTA | I'm ready, play it |
| Playing | playing... |
| Paused | paused |
| Done | that's all from me ✨ |
| Signature | — Cicily |
| Pause / Resume | Pause / Resume |
| Typewriter skip | skip → |
| Close | × |

### LetterModal — see Section 10

### HeartWidget — see Section 10

### StoryCard — labels

| Variant | Extra label |
|---------|-------------|
| featured | Featured |
| default | (location only as accent) |

### ProjectCard — implicit labels

- Archive category pill: defaults to **Archive** if no category
- External link behavior for `http` hrefs

---

## 15. External Links & Employers

| Entity | URL |
|--------|-----|
| LinkedIn (Cicily Wu) | https://www.linkedin.com/in/cicily-wu-749983177/ |
| DigitalOcean | https://www.digitalocean.com/ |
| PointClickCare | https://www.pointclickcare.com/ |
| eBay | https://www.ebay.com/ |
| SharkNinja | https://www.sharkninja.com/ |
| SharkNinja NLP notebook | https://nbviewer.org/github/wuxt830/Shark-robot-comments-NLP/... |
| Online shoppers notebook | https://nbviewer.org/github/wuxt830/Online-Users-Intention-Analysis/... |
| DonorsChoose notebook | https://nbviewer.org/github/wuxt830/donors/... |
| Anime recommender (Kaggle) | https://www.kaggle.com/code/wuxt830/anime-recommender-system |
| Electricity usage (Kaggle) | https://www.kaggle.com/code/wuxt830/electricity-usage-prediction-simple-time-series |
| Grad admission (Kaggle) | https://www.kaggle.com/code/wuxt830/graduate-scool-admission-prediction-in-r |
| Google Maps URLs | Embedded per place in `picks.ts` (Buenos Aires, Montevideo, Cartagena, Medellín, Punta del Este venues) |

---

## 16. Asset References

### Project images (`/public/project-images/`)

- cashcoach.svg  
- ai-builder-radar.svg  
- cookprep.svg  
- sharkninja.jpeg  
- online-shoppers.webp  
- donorschoose.png  
- anime-recommender.png  
- electricity-usage.png  
- grad-admission.png  
- 20-newsgroups.png  
- icu-transfer.png  

### Audio

- /audio/buenos-aires.m4a (Buenos Aires voice guide only in data)

### Fonts (Google Fonts)

- DM Serif Display (italic 0,1)  
- Plus Jakarta Sans (300,400,500,600,700)  
- Noto Sans SC (300,400,500,700)  

---

## 17. Content Inventory Summary

| Content type | Count |
|--------------|-------|
| Implemented pages | 1 (Home) |
| Nav routes (linked) | 6 path patterns + 3 project detail paths + 2 archive paths + 5 story slugs |
| Timeline entries | 7 |
| Current projects | 9 |
| Archived projects | 8 |
| Travel stories | 5 (full long-form bodies) |
| City picks | 5 cities, 15 eat entries, 5 see entries, 25 guide script lines |
| Standalone UI components with copy | 4 (Nav, Footer, CityGuide, LetterModal, HeartWidget, StoryBody, cards) |
| Distinct accent/tag colors in project cards | 6 gradient presets (hash from title) |

---

## Appendix A — Raw tag vocabulary (all projects)

```
Next.js, PostgreSQL, OpenAI, Finance, Python, OpenRouter, Gemini, Resend, Cron,
React, Node.js, iOS, GIS, Data Viz, TypeScript, Supabase, React Native, Firebase,
Maps API, Canvas API, SVG, WebGL, Design, Chrome Extension, JavaScript, UX Research,
Mapbox, Community, NLP, Machine Learning, Data Visualization, Data Analysis,
Feature Engineering, Word Cloud, TF-IDF, K-Means, PCA, Time Series, ARIMA, LSTM,
R, ggplot2, Random Forest, XGBoost, Clustering, Association Rules, Gurobi,
Optimization, Healthcare
```

---

## Appendix B — Suggested prompts for Claude Design

When feeding this file to a design tool, you may want to specify:

1. **Dual personality:** Professional AI PM portfolio + intimate travel/life writing (including Chinese essays).  
2. **Existing warmth:** Coral/amber cream palette, serif headlines, soft cards — or explicit request to break away.  
3. **Signature interactions to preserve or reimagine:** letter-writing modal, heart fill widget, floating voice-note character, zh/en story toggle.  
4. **Missing pages:** Design system should scale to Projects grid, Archive, About, Life index, story reader, and city picks map/list.  
5. **Content volume:** 5 full essays + 5 city guides with audio — layout needs long-form reading and place directories.

---

*End of export. Generated from repository source: `src/app`, `src/components`, `src/data`.*
