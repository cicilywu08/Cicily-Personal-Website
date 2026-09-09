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
];
