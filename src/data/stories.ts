export interface Story {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  location: string;
  date: string;
  readTime: number; // in minutes
  featured: boolean;
  imageGradient?: string;
  body?: string;
  bodyEn?: string;
  lang?: "en" | "zh";
}

export const stories: Story[] = [
  {
    id: "1",
    title: "马伊达内克，一个晴天",
    slug: "thirty-days-in-oaxaca",
    excerpt:
      "为了参观一座叫马伊达内克的集中营，我坐了三小时火车，来到波兰的小城卢布林。营地几乎完整地保留了下来。铁丝网、瞭望塔、营房、毒气室，一切都还在那里。",
    location: "卢布林，波兰",
    date: "2024年夏",
    readTime: 6,
    featured: true,
    imageGradient: "from-amber-300 via-orange-300 to-rose-300",
    lang: "zh",
    body: `<p>为了参观一座叫马伊达内克的集中营，我坐了三小时火车，来到波兰的小城卢布林。</p>

<p>营地几乎完整地保留了下来。铁丝网、瞭望塔、营房、毒气室，一切都还在那里。</p>

<p>参观路线的尽头，是后来修建的一座骨灰纪念堂。那是一只巨大的混凝土穹顶，像一只扣在地面的沉重的碗。穹顶下，堆放着从焚尸场收集来的受害者骨灰。无数人的生命，在那里被压缩成一层沉默的灰。穹顶边缘刻着一句波兰语：</p>

<blockquote>Los nasz dla was przestrogą.<br/>——让我们的命运，成为对你们的警告。</blockquote>

<p>纪念堂正对着营地入口。入口处矗立着另一座巨大的石质纪念碑，岩石仿佛被撕裂、压扭成一扇沉重的门。两座庞然大物隔着整座营地遥遥相望。</p>

<p>从纪念堂走回入口的路很长。一条笔直的水泥大道，一眼望到尽头。铁丝网的另一侧，一座座瞭望塔整齐地立着，彼此之间没有区别。我走了很久。左手边始终是营地。焚尸炉、营房、毒气室，一个接一个地从身旁退去。历史像倒叙一样，再次在我面前展开。</p>

<p>马伊达内克不像奥斯维辛那样拥挤。来这里的多半是学校组织的学生。</p>

<p>天气晴朗，营地很空。老师带着一队一队的少年走进来。</p>

<p>学生们在草地上围坐下来，从书包里拿出记事本写东西。写完以后，有人站起来念自己写的句子，其他人听着。女孩的发丝被微风吹拂，男生的声音带着一点变声期的粗糙。</p>

<p>远处是铁丝网和瞭望塔，木制营房一排一排地站在那里。念完以后，他们把本子收进书包，又排好队继续往前走。草地上很快又空下来。</p>`,
  },
  {
    id: "2",
    title: "The Slow Train Through Japan",
    slug: "slow-train-japan",
    excerpt:
      "Taking every local train from Kyoto to the tip of Kyushu, stopping in towns with no tourist infrastructure, eating things I couldn't identify, and learning to be uncomfortable.",
    location: "Japan",
    date: "March 2024",
    readTime: 15,
    featured: true,
    imageGradient: "from-pink-200 via-rose-200 to-red-200",
    body: `<p>The Shinkansen is a miracle. The Shinkansen is also, in my opinion, a way to completely miss Japan. You arrive somewhere too fast and with too little context, and the country never quite gets beneath your skin.</p>

<p>I decided to take only local trains — the ones that stop every twelve minutes, the ones where the announcement is a woman's gentle voice in Japanese, and then the same sentence in a slightly different voice that is also Japanese, because the English announcement stopped being funded ten years ago.</p>

<h2>Kurashiki on a Wednesday</h2>

<p>I didn't plan to spend three days in Kurashiki. The canal district looked pretty in photos. I arrived, the canal district was pretty, and then I wandered into a ceramics shop and got into a conversation with the owner that lasted four hours and covered grief, clay memory, and the particular loneliness of making beautiful things.</p>

<p>He had studied in Kyoto and returned to his hometown, which he described as "a decision that sounds wrong but feels right." I understood this more than I expected to.</p>

<blockquote>We ate convenience store onigiri by the canal at dusk and watched egrets land in the water with impossible delicacy. "This is the best part of any day," he said. I didn't disagree.</blockquote>

<p>I took 47 local trains over 18 days. I arrived in places I had never heard of and ate things that turned out to be extraordinary and things that turned out to be an acquired taste I did not acquire. I was lonely sometimes in the specific way that solo travel makes you lonely — acutely, cleanly, without the buffer of familiar context.</p>

<p>By the time I reached the southern tip of Kyushu, I felt like I'd moved through something rather than past it. That's the whole point, I think.</p>`,
  },
  {
    id: "3",
    title: "One Week in Tbilisi",
    slug: "one-week-tbilisi",
    excerpt:
      "Georgia's capital is warm, crumbling, alive, and completely unlike anywhere else. Also the wine is extraordinary and costs almost nothing.",
    location: "Tbilisi, Georgia",
    date: "September 2023",
    readTime: 8,
    featured: true,
    imageGradient: "from-violet-200 via-purple-200 to-indigo-200",
    body: `<p>Tbilisi doesn't try to charm you. It just exists — peeling frescoes and sulfur baths and those extraordinary carved wooden balconies in the old town that look like they'll collapse at any moment and have probably been looking like that for two hundred years.</p>

<p>I stayed in a guesthouse in Abanotubani, the sulfur bath district, where you can hear the baths running all night like underground rivers. My host was a woman named Nino who made churchkhela every morning and left some outside my door as a matter of course, the way someone might leave a newspaper.</p>

<h2>The Wine</h2>

<p>Georgia invented wine. Not invented in the marketing sense — invented in the literal archaeological sense, 8,000 years ago, in clay vessels called qvevri buried in the earth. Orange wine made this way doesn't taste like other orange wine. It tastes like something older than wine, something that predates the concept of a wine menu.</p>

<p>I sat in a wine bar in the old town for four hours with a carafe of Rkatsiteli and the second volume of a novel I'd started in the airport. This is my ideal evening. Tbilisi provided it effortlessly.</p>

<blockquote>At the table next to me, a three-generation family was arguing about something with the passionate specificity that Georgians bring to disagreements, and occasionally one of them would refill my glass without being asked. This happened twice.</blockquote>

<p>I left wanting to return immediately. I am writing this a year later and still wanting to return immediately. That seems like the correct response to Tbilisi.</p>`,
  },
  {
    id: "4",
    title: "Finding Quiet in Portuguese Villages",
    slug: "portuguese-villages",
    excerpt:
      "A two-week circuit through inland villages that don't appear on travel blogs. Stone houses, terraced vineyards, and the particular magic of places that haven't decided to be charming.",
    location: "Northern Portugal",
    date: "June 2023",
    readTime: 10,
    featured: false,
    imageGradient: "from-green-200 via-teal-200 to-cyan-200",
    body: `<p>Everyone goes to Lisbon. Many people go to Porto. Almost nobody goes to Lindoso, or Pitões das Júnias, or the villages that string themselves along the Peneda-Gerês range like beads that someone keeps forgetting to finish.</p>

<p>This was the trip I took when I needed to remember how to be quiet. I'd been working hard on several things that weren't going well, and I needed to go somewhere that didn't have opinions about productivity.</p>

<h2>Stone and Time</h2>

<p>The espigueiros in Lindoso are grain stores built on staddle stones, narrow and elegant, assembled without mortar in a way that has lasted eight hundred years. The village has been tending them for eight hundred years. The village will, presumably, tend them for eight hundred more. There is something very calming about this.</p>

<p>I rented a house for a week in a village of perhaps sixty people. The couple next door kept a vegetable garden of exuberant proportions and fed me from it daily. I helped them with something involving fence posts one afternoon and was paid in wine and conversation I only partially understood, which was more than enough.</p>`,
  },
  {
    id: "5",
    title: "Morocco on a Slow Budget",
    slug: "morocco-slow-budget",
    excerpt:
      "Thirty days, roughly $1,200, endless mint tea, and the education of trying to photograph people who are living rather than performing.",
    location: "Morocco",
    date: "February 2022",
    readTime: 11,
    featured: false,
    imageGradient: "from-yellow-200 via-amber-200 to-orange-200",
    body: `<p>Morocco confiscates your sense of time. The medinas have no grid, which means you can't find anything by logic — only by repetition, until the logic becomes spatial rather than conceptual. By the third day in Fez, I knew where the brass-workers' souk was. By the fifth day, I knew how to arrive there from anywhere.</p>

<p>I traveled slowly and cheaply, which in Morocco means eating wherever the plastic stools are, taking the CTM buses rather than the tourist shuttles, and staying in riads where the family clearly lives in the back and isn't quite sure what to make of you.</p>

<h2>On Photography and Permission</h2>

<p>I stopped taking street photos in Fez after a woman made it very clear she didn't want to be photographed, and I realized I'd been treating the medina as a backdrop rather than a place where people were trying to do their shopping.</p>

<p>After that I only photographed architecture, and occasionally food, and once a very dramatic camel that seemed to be offering. The trip became more itself without the camera as a filter.</p>

<blockquote>"You look like you are finally here," said the man who made my coffee every morning at a cart near Bab Boujloud. I don't know exactly what he meant, but I knew what he meant.</blockquote>`,
  },
];
