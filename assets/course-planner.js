const STORAGE_KEY = "architecture-course-planner-v1";

const requirements = [
  { id: "publicRequired", label: "公共必修", min: 7, max: 7 },
  { id: "publicElective", label: "公共选修", min: 1, max: 1 },
  { id: "majorRequired", label: "专业必修", min: 10, max: 10 },
  { id: "majorElective", label: "专业选修", min: 5, max: 5 },
  { id: "courseTotal", label: "课程总学分", min: 23, max: 23 },
  { id: "process", label: "培养过程", min: 9, max: 9 },
  { id: "grandTotal", label: "总学分", min: 32, max: 32 },
];

const courses = [
  c("2070310021", "中国式现代化理论与实践", 2, "秋", "publicRequired", "政治理论类", "必选"),
  c("2070310031", "当代社会思潮辨析", 1, "春", "publicRequired", "政治理论类", "3选1"),
  c("2070350031", "马克思主义与社会科学方法论", 1, "秋", "publicRequired", "政治理论类", "3选1"),
  c("2070310041", "马克思主义与当代科技", 1, "春", "publicRequired", "政治理论类", "3选1"),
  c("2100010181", "国际英语测试", 2, "秋/春", "publicRequired", "外语类", "3选1"),
  c("21000102113", "专业硕士英语（工程三）", 2, "秋/春", "publicRequired", "外语类", "3选1"),
  c("21000102213", "通用英语（工程三）", 2, "秋/春", "publicRequired", "外语类", "3选1"),
  c("2070110059", "论文写作与学术规范", 1, "秋/春", "publicRequired", "论文写作类", "必选"),
  c("2070110041", "工程伦理", 1, "秋", "publicRequired", "工程伦理类", "必选"),

  c("2070340081", "研究生形势与政策", 1, "秋", "publicElective", "公共选修", "多选1"),
  c("2070140032", "中华优秀传统文化", 1, "秋", "publicElective", "公共选修", "多选1"),
  c("2070150041", "中国古代艺术专题", 1, "春", "publicElective", "公共选修", "多选1"),
  c("2070150031", "中国古代文学专题", 1, "春", "publicElective", "公共选修", "多选1"),
  c("2070150051", "新兴科技伦理问题及其治理", 1, "春", "publicElective", "公共选修", "多选1"),
  c("2070150061", "科技美学A", 1, "秋", "publicElective", "公共选修", "多选1"),
  c("2060240601", "创业管理与企业家精神", 2, "春", "publicElective", "公共选修", "多选1"),
  c("2060252191", "管理沟通", 2, "秋", "publicElective", "公共选修", "多选1"),
  c("2070110062", "知识产权", 1, "秋", "publicElective", "公共选修", "多选1"),
  c("2070110072", "信息检索", 1, "秋", "publicElective", "公共选修", "多选1"),
  c("2070350089", "研究生人格发展和情绪管理", 1, "秋", "publicElective", "公共选修", "多选1"),
  c("2903020011", "研究生就业指导", 2, "秋/春", "publicElective", "公共选修", "多选1"),
  c("2130050031", "体育（游泳）", 2, "秋/春", "publicElective", "公共选修", "多选1"),
  c("2130050024", "运动与健康", 1, "秋/春", "publicElective", "公共选修", "多选1"),

  c("2060321621", "统计与计量分析方法", 2, "秋", "majorRequired", "数理类", "2选1"),
  c("2080442083", "设计统计学", 2, "春", "majorRequired", "数理类", "2选1"),
  c("2080130122", "建筑设计方法论", 2, "秋", "majorRequired", "领域核心与产教融合类", "2选1"),
  c("3080132011", "城市建筑智能评价与设计", 2, "春", "majorRequired", "领域核心与产教融合类", "2选1"),
  c("2080132011", "建筑设计研究Ⅰ", 3, "秋", "majorRequired", "领域核心与产教融合类", "设计型必选", "design"),
  c("2080132031", "建筑设计研究Ⅱ", 3, "春", "majorRequired", "实验实践类", "设计型必选", "design"),
  c("2080132021", "建筑专题研究Ⅰ", 3, "秋", "majorRequired", "领域核心与产教融合类", "专题型必选", "research"),
  c("2080132041", "建筑专题研究Ⅱ", 3, "春", "majorRequired", "实验实践类", "专题型必选", "research"),

  c("2080130093", "建筑构法与设计", 2, "春", "majorElective", "设计方法与理论模块"),
  c("2080142141", "建筑师执业实践", 1, "春", "majorElective", "设计方法与理论模块"),
  c("2080130113", "环境行为理论与方法", 2, "春", "majorElective", "设计方法与理论模块"),
  c("2080140482", "建筑计划学", 1, "秋", "majorElective", "设计方法与理论模块"),
  c("2080442011", "室内智能化设计研究", 1, "秋", "majorElective", "设计方法与理论模块"),
  c("2080142111", "居住与社区发展", 1, "秋", "majorElective", "设计方法与理论模块"),
  c("2080142121", "建筑材料、构造和结构的形式生成与表现", 1, "春", "majorElective", "设计方法与理论模块"),
  c("2080142131", "研究型设计方法", 1, "秋", "majorElective", "设计方法与理论模块"),
  c("2080230183", "城市设计理论", 2, "秋", "majorElective", "城市设计与管理理论模块"),
  c("2080140512", "地理信息系统空间分析技术应用", 1, "春", "majorElective", "城市设计与管理理论模块"),
  c("2080140523", "风景园林艺术原理", 1, "秋", "majorElective", "城市设计与管理理论模块"),
  c("2080240601", "城市健康社区规划理论与方法", 1, "春", "majorElective", "城市设计与管理理论模块"),
  c("2080242041", "气候韧性与低碳城市设计", 2, "春", "majorElective", "城市设计与管理理论模块"),
  c("2080142211", "城市更新智能技术与应用", 1, "秋", "majorElective", "城市设计与管理理论模块"),
  c("2080130103", "建筑历史与理论", 2, "秋", "majorElective", "历史与保护模块"),
  c("2080140453", "历史建筑保护研究", 1, "秋", "majorElective", "历史与保护模块"),
  c("2080140543", "建筑再生导论", 2, "春", "majorElective", "历史与保护模块"),
  c("2080140553", "历史城镇形态分析", 1, "春", "majorElective", "历史与保护模块"),
  c("2080140413", "建筑地域文化", 2, "春", "majorElective", "历史与保护模块"),
  c("2080142311", "建筑遗产保护的发展历程与理论实践", 2, "春", "majorElective", "历史与保护模块"),
  c("2080142331", "中国近现代城市建筑的历史与理论", 1, "春", "majorElective", "历史与保护模块"),
  c("2080140422", "建筑声环境设计研究", 1, "春", "majorElective", "绿色健康与新能源模块"),
  c("2080140443", "建筑光环境设计研究", 1, "春", "majorElective", "绿色健康与新能源模块"),
  c("2080140432", "建筑热环境设计研究", 1, "春", "majorElective", "绿色健康与新能源模块"),
  c("2080140561", "建筑环境感知与评价", 1, "春", "majorElective", "绿色健康与新能源模块"),
  c("2080142411", "当代节能建筑技术与建筑设计", 1, "春", "majorElective", "绿色健康与新能源模块"),
  c("2080142421", "数字化建筑设计导论", 1, "秋", "majorElective", "绿色健康与新能源模块"),
  c("2900010083", "科创竞赛2", 2, "秋/春", "majorElective", "科创竞赛"),

  c("2900010013", "文献综述与开题报告", 1, "秋2", "process", "培养过程", "必修"),
  c("2900010023", "中期考核", 1, "秋3", "process", "培养过程", "必修"),
  c("2900010033", "学术活动（专）", 1, "秋/春", "process", "培养过程", "必修"),
  c("2080132513", "专业实践Ⅰ（校内）", 2, "秋/春", "process", "培养过程", "必修"),
  c("2080132523", "专业实践Ⅱ（校外）", 4, "秋/春", "process", "培养过程", "必修"),
];

const minimumByTrack = {
  design: [
    "2070310021", "2070350031", "2100010181", "2070110059", "2070110041",
    "2070340081", "2080442083", "2080130122", "2080132011", "2080132031",
    "2080130103", "2080230183", "2080140482",
    "2900010013", "2900010023", "2900010033", "2080132513", "2080132523",
  ],
  research: [
    "2070310021", "2070350031", "2100010181", "2070110059", "2070110041",
    "2070340081", "2080442083", "2080130122", "2080132021", "2080132041",
    "2080130103", "2080230183", "2080140482",
    "2900010013", "2900010023", "2900010033", "2080132513", "2080132523",
  ],
};

const systemRules = {
  requiredMin: 17,
  totalMin: 32,
  publicRequired: 7,
  publicElective: 2,
  majorRequired: 10,
};

const systemPlan = [
  s("2070110041", "工程伦理", 1, 16, "公共必修课", "必修课", "工程伦理", "秋"),
  s("2070110059", "论文写作与学术规范", 1, 16, "公共必修课", "必修课", "论文写作与学术规范", "秋、春"),
  s("2070310021", "中国式现代化理论与实践", 2, 32, "公共必修课", "必修课", "政治理论类", "秋"),
  s("2070310031", "当代社会思潮辨析", 1, 16, "公共必修课", "必修课", "政治理论类", "春"),
  s("2070310041", "马克思主义与当代科技", 1, 16, "公共必修课", "必修课", "政治理论类", "春"),
  s("2070350031", "马克思主义与社会科学方法论", 1, 16, "公共必修课", "必修课", "政治理论类", "秋"),
  s("2100010113", "硕士生第一外语：日语", 3, 48, "公共必修课", "必修课", "外语类", "秋、春"),
  s("2100010181", "国际英语测试", 2, 32, "公共必修课", "必修课", "外语类", "秋、春"),
  s("2100010211", "专业硕士英语", 2, 32, "公共必修课", "必修课", "外语类", "秋、春"),
  s("2100010221", "通用英语", 2, 32, "公共必修课", "必修课", "外语类", "秋、春"),
  s("2900010013", "文献综述与开题报告", 1, 16, "公共必修课", "必修课", "培养过程类", "秋、春"),
  s("2900010023", "中期考核", 1, 16, "公共必修课", "必修课", "培养过程类", "秋、春"),
  s("2900010033", "学术活动", 1, 16, "公共必修课", "必修课", "培养过程类", "秋、春"),
  s("2080130122", "建筑设计方法论", 2, 32, "专业必修课", "必修课", "", "秋"),
  s("2080132011", "建筑设计研究Ⅰ", 3, 48, "专业必修课", "必修课", "", "秋"),
  s("2080132021", "建筑专题研究Ⅰ", 3, 48, "专业必修课", "必修课", "", "秋"),
  s("2080132031", "建筑设计研究Ⅱ", 3, 48, "专业必修课", "必修课", "", "春"),
  s("2080132041", "建筑专题研究Ⅱ", 3, 48, "专业必修课", "必修课", "", "春"),
  s("2080132513", "专业实践Ⅰ（校内）", 2, 32, "专业必修课", "必修课", "", "秋、春"),
  s("2080132523", "专业实践Ⅱ（校外）", 4, 64, "专业必修课", "必修课", "", "秋、春"),
  s("2080442083", "设计统计学", 2, 32, "专业必修课", "必修课", "数理类、人工智能类", "春"),
  s("3080132011", "城市建筑智能评价与设计", 2, 32, "专业必修课", "必修课", "", "春"),
  s("2060240601", "创业管理与企业家精神", 2, 32, "公共选修课", "选修课", "综合素养类", "春"),
  s("2060252191", "管理沟通", 2, 32, "公共选修课", "选修课", "综合素养类", "秋"),
  s("2070110062", "知识产权", 1, 16, "公共选修课", "选修课", "综合素养类", "秋"),
  s("2070110072", "信息检索", 1, 16, "公共选修课", "选修课", "综合素养类", "秋"),
  s("2070140032", "中华优秀传统文化", 1, 16, "公共选修课", "选修课", "优秀传统文化类", "秋、春"),
  s("2070150031", "中国古代文学专题", 1, 16, "公共选修课", "选修课", "优秀传统文化类", "秋、春"),
  s("2070150041", "中国古代艺术专题", 1, 16, "公共选修课", "选修课", "优秀传统文化类", "秋、春"),
  s("2070150061", "科技美学A", 1, 16, "公共选修课", "选修课", "综合素养类", "春"),
  s("2070340081", "研究生形势与政策", 1, 16, "公共选修课", "选修课", "优秀传统文化类", "秋、春"),
  s("2070350011", "中华民族共同体概论", 1, 16, "公共选修课", "选修课", "优秀传统文化类", "秋"),
  s("2070350089", "研究生人格发展和情绪管理", 1, 16, "公共选修课", "选修课", "综合素养类", "春"),
  s("2130050011", "女子形体", 2, 32, "公共选修课", "选修课", "综合素养类", "秋、春"),
  s("2130050031", "游泳", 2, 32, "公共选修课", "选修课", "综合素养类", "秋、春"),
  s("2130050041", "研究生体育俱乐部", 2, 32, "公共选修课", "选修课", "综合素养类", "秋、春"),
  s("2903020011", "研究生就业指导", 2, 32, "公共选修课", "选修课", "综合素养类", "秋、春"),
  s("2060311621", "统计与计量分析方法", 2, 32, "专业选修课", "选修课", "数理类、人工智能类", "秋、春"),
  s("2080130093", "建筑构法与设计", 2, 32, "专业选修课", "选修课", "", "秋"),
  s("2080130103", "建筑历史与理论", 2, 32, "专业选修课", "选修课", "", "秋"),
  s("2080130113", "环境行为理论与方法", 2, 32, "专业选修课", "选修课", "", "春"),
  s("2080140413", "建筑地域文化", 2, 32, "专业选修课", "选修课", "", "春"),
  s("2080140422", "建筑声环境设计研究", 1, 16, "专业选修课", "选修课", "", "春"),
  s("2080140443", "建筑光环境设计研究", 1, 16, "专业选修课", "选修课", "", "春"),
  s("2080140453", "历史建筑保护研究", 1, 16, "专业选修课", "选修课", "", "秋"),
  s("2080140462", "高层建筑设计方法", 1, 16, "专业选修课", "选修课", "", "秋"),
  s("2080140482", "建筑计划学", 1, 16, "专业选修课", "选修课", "", "秋"),
  s("2080140512", "地理信息系统空间分析技术应用", 1, 16, "专业选修课", "选修课", "", "春"),
  s("2080140523", "风景园林艺术原理", 1, 16, "专业选修课", "选修课", "", "秋"),
  s("2080140543", "建筑再生导论", 2, 32, "专业选修课", "选修课", "", "春"),
  s("2080140553", "历史城镇形态分析", 1, 16, "专业选修课", "选修课", "", "秋"),
  s("2080140561", "建筑环境感知与评价", 1, 16, "专业选修课", "选修课", "", "春"),
  s("2080142111", "居住与社区发展", 1, 16, "专业选修课", "选修课", "", "秋"),
  s("2080142121", "建筑材料、构造和结构的形式生成与表现", 1, 16, "专业选修课", "选修课", "", "春"),
  s("2080142131", "研究型设计方法", 1, 16, "专业选修课", "选修课", "", "秋"),
  s("2080142141", "建筑师执业实践", 1, 16, "专业选修课", "选修课", "", "春"),
  s("2080142211", "城市更新智能技术与应用", 1, 16, "专业选修课", "选修课", "", "秋"),
  s("2080142311", "建筑遗产保护的发展历程与理论实践", 2, 32, "专业选修课", "选修课", "", "春"),
  s("2080142331", "中国近现代城市建筑的历史与理论", 1, 16, "专业选修课", "选修课", "", "春"),
  s("2080142411", "当代节能建筑技术与建筑设计", 1, 16, "专业选修课", "选修课", "", "春"),
  s("2080142421", "数字化建筑设计导论", 1, 16, "专业选修课", "选修课", "", "秋"),
  s("2080230183", "城市设计理论", 2, 32, "专业选修课", "选修课", "", "秋"),
  s("2080240601", "城市健康社区规划理论与方法", 1, 16, "专业选修课", "选修课", "", "春"),
  s("2080242041", "气候韧性与低碳城市设计", 2, 32, "专业选修课", "选修课", "", "秋"),
  s("2080442011", "室内智能化设计研究", 1, 16, "专业选修课", "选修课", "", "秋"),
  s("2900010083", "科创竞赛2", 2, 32, "专业选修课", "选修课", "", "秋、春"),
];

const offerings = [
  o("2080130103", "建筑历史与理论", "建筑历史与理论1", 2, "唐建", [{ day: "周二", slot: "9-12节", room: "综合教学1号楼357", weeks: "3-10周" }]),
  o("2080132011", "建筑设计研究Ⅰ", "建筑设计研究Ⅰ1", 3, "李冰", [{ day: "周三", slot: "5-8节", room: "研教楼409", weeks: "6-17周" }]),
  o("2080132021", "建筑专题研究Ⅰ", "建筑专题研究Ⅰ1", 3, "张弘驰", [{ day: "周三", slot: "5-8节", room: "", weeks: "2-13周" }]),
  o("2080132021", "建筑专题研究Ⅰ", "建筑专题研究Ⅰ2", 3, "杨笑音", [{ day: "周三", slot: "5-8节", room: "", weeks: "2-13周" }]),
  o("2080132021", "建筑专题研究Ⅰ", "建筑专题研究Ⅰ3", 3, "肖彦", [{ day: "周三", slot: "5-8节", room: "", weeks: "2-13周" }]),
  o("2080132513", "专业实践Ⅰ（校内）", "专业实践Ⅰ（校内）1", 2, "申大鹏", [{ day: "周一", slot: "9-12节", room: "", weeks: "2-9周" }]),
  o("2080140453", "历史建筑保护研究", "历史建筑保护研究1", 1, "鞠伟", [{ day: "周二", slot: "1-2节", room: "研教楼201", weeks: "2-9周" }]),
  o("2080140482", "建筑计划学", "建筑计划学1", 1, "曲艺", [{ day: "周四", slot: "9-12节", room: "研教楼212-2", weeks: "3-6周" }]),
  o("2080140523", "风景园林艺术原理", "风景园林艺术原理1", 1, "董丽", [{ day: "周四", slot: "3-4节", room: "研教楼412", weeks: "2-9周" }]),
  o("2080140553", "历史城镇形态分析", "历史城镇形态分析1", 1, "李冰", [{ day: "周三", slot: "3-4节", room: "研教楼407", weeks: "5-12周" }]),
  o("2080142111", "居住与社区发展", "居住与社区发展1", 1, "李嘉彬", [{ day: "周二", slot: "5-6节", room: "环管学院A206", weeks: "2-9周" }]),
  o("2080230183", "城市设计理论", "城市设计理论1", 2, "梁江", [{ day: "周日", slot: "9-12节", room: "综合教学1号楼359", weeks: "2-9周" }]),
  o("2080242041", "气候韧性与低碳城市设计", "气候韧性与低碳城市设计1", 2, "刘代云", [{ day: "周三", slot: "5-6节", room: "", weeks: "2-17周" }]),
  o("2080342013", "品牌整合与传播", "品牌整合与传播1", 1, "邹佰晶", [{ day: "周二", slot: "5-8节", room: "研教楼408", weeks: "10-13周" }]),
  o("2080441733", "交互设计及理论", "交互设计及理论1", 1, "徐威", [{ day: "周三", slot: "5-8节", room: "", weeks: "10-13周" }]),
  o("2080441773", "设计心理学研究", "设计心理学研究1", 1, "马兰", [{ day: "周二", slot: "1-2节", room: "研教楼306", weeks: "2-9周" }]),
  o("2080442011", "室内智能化设计研究", "室内智能化设计研究1", 1, "陈岩（建艺）", [{ day: "周五", slot: "9-12节", room: "", weeks: "3-6周" }]),
  o("2080442021", "AIGC参数化设计实践", "AIGC参数化设计实践1", 1, "刘建军", [{ day: "周一", slot: "5-6节", room: "综合教学1号楼355", weeks: "2-9周" }]),
  o("2080442041", "设计历史及理论", "设计历史及理论1", 1, "徐威", [{ day: "周二", slot: "5-8节", room: "研教楼414", weeks: "2-5周" }]),
  o("2080442051", "产品专题设计", "产品专题设计1", 2, "徐威", [{ day: "周六", slot: "5-8节", room: "", weeks: "2-9周" }]),
  o("2080442081", "外国美术史论", "外国美术史论1", 1, "叶洪图", [{ day: "周六", slot: "9-11节", room: "", weeks: "3-5周" }, { day: "周日", slot: "9-11节", room: "", weeks: "3-5周" }]),
  o("3080140040", "建筑、规划研究的分析方法", "建筑、规划研究的分析方法1", 2, "金日学", [{ day: "周四", slot: "5-8节", room: "", weeks: "9-16周" }]),
  o("3080142011", "全龄友好建筑", "全龄友好建筑1", 1, "曲艺", [{ day: "周四", slot: "1-4节", room: "", weeks: "3-6周" }]),
  o("3080230020", "城市设计历史与理论", "城市设计历史与理论1", 2, "梁江", [{ day: "周六", slot: "9-12节", room: "综合教学1号楼355", weeks: "2-9周" }]),

  o("2080130113", "环境行为理论与方法", "环境行为理论与方法1", 2, "金日学", [{ day: "周三", slot: "9-10节", room: "综合教学1号楼359", weeks: "3-18周" }]),
  o("2080132031", "建筑设计研究Ⅱ", "建筑设计研究Ⅱ1", 3, "郎亮", [{ day: "周三", slot: "5-8节", room: "", weeks: "3-14周" }]),
  o("2080132041", "建筑专题研究Ⅱ", "建筑专题研究Ⅱ1", 3, "张弘驰", [{ day: "周三", slot: "5-8节", room: "", weeks: "5-16周" }]),
  o("2080132513", "专业实践Ⅰ（校内）", "专业实践Ⅰ（校内）1", 2, "郎亮", [{ day: "周六", slot: "1-4节", room: "", weeks: "1-8周" }]),
  o("2080132513", "专业实践Ⅰ（校内）", "专业实践Ⅰ（校内）2", 2, "胡沈健", [{ day: "周六", slot: "1-4节", room: "", weeks: "3-10周" }]),
  o("2080132513", "专业实践Ⅰ（校内）", "专业实践Ⅰ（校内）3", 2, "徐威", [{ day: "周六", slot: "9-12节", room: "", weeks: "9-16周" }]),
  o("2080132513", "专业实践Ⅰ（校内）", "专业实践Ⅰ（校内）4", 2, "张耿", [{ day: "周六", slot: "9-12节", room: "", weeks: "3-6周" }, { day: "周日", slot: "9-12节", room: "", weeks: "3-6周" }]),
  o("2080132523", "专业实践Ⅱ（校外）", "专业实践Ⅱ（校外）1", 4, "申大鹏", [{ day: "周六", slot: "11-12节", room: "", weeks: "1-8周" }, { day: "周日", slot: "5-8节", room: "", weeks: "1-8周" }]),
  o("2080132523", "专业实践Ⅱ（校外）", "专业实践Ⅱ（校外）2", 4, "郎亮", [{ day: "周六", slot: "1-16节", room: "", weeks: "" }]),
  o("2080132523", "专业实践Ⅱ（校外）", "专业实践Ⅱ（校外）3", 4, "胡沈健", [{ day: "周日", slot: "1-8节", room: "", weeks: "3-10周" }]),
  o("2080132523", "专业实践Ⅱ（校外）", "专业实践Ⅱ（校外）4", 4, "徐威", [{ day: "周日", slot: "1-8节", room: "", weeks: "5-20周" }]),
  o("2080132523", "专业实践Ⅱ（校外）", "专业实践Ⅱ（校外）5", 4, "张耿", [{ day: "周六", slot: "9-12节", room: "", weeks: "7-14周" }, { day: "周日", slot: "9-12节", room: "", weeks: "7-14周" }]),
  o("2080140413", "建筑地域文化", "建筑地域文化1", 2, "邵明", [{ day: "周三", slot: "3-4节", room: "研教楼509", weeks: "1-16周" }]),
  o("2080140422", "建筑声环境设计研究", "建筑声环境设计研究1", 1, "路晓东", [{ day: "周二", slot: "7-8节", room: "研教楼407", weeks: "5-12周" }]),
  o("2080140443", "建筑光环境设计研究", "建筑光环境设计研究1", 1, "刘鸣", [{ day: "周一", slot: "1-4节", room: "", weeks: "9-12周" }]),
  o("2080140561", "建筑环境感知与评价", "建筑环境感知与评价1", 1, "任欣欣", [{ day: "周二", slot: "3-4节", room: "研教楼509", weeks: "8-11周" }, { day: "周五", slot: "1-2节", room: "研教楼509", weeks: "8-11周" }]),
  o("2080142121", "建筑材料、构造和结构的形式生成与表现", "建筑材料、构造和结构的形式生成与表现1", 1, "鞠伟", [{ day: "周四", slot: "3-4节", room: "研教楼212-2", weeks: "1-8周" }]),
  o("2080142311", "建筑遗产保护的发展历程与理论实践", "建筑遗产保护的发展历程与理论实践1", 2, "李东遥", [{ day: "周二", slot: "7-8节", room: "研教楼512", weeks: "5-12周" }, { day: "周五", slot: "7-8节", room: "研教楼512", weeks: "5-12周" }]),
  o("2080242041", "气候韧性与低碳城市设计", "气候韧性与低碳城市设计1", 2, "刘代云", [{ day: "周二", slot: "9-12节", room: "综合教学1号楼362", weeks: "9-16周" }]),
  o("2080442083", "设计统计学", "设计统计学1", 2, "刘建军", [{ day: "周一", slot: "5-8节", room: "综合教学1号楼359", weeks: "2-9周" }]),
  o("2080442201", "产品设计研究", "产品设计研究1", 2, "徐威", [{ day: "周日", slot: "1-4节", room: "", weeks: "1-8周" }]),
  o("2080442211", "环境设计研究", "环境设计研究1", 2, "郁伟", [{ day: "周二", slot: "3-4节", room: "", weeks: "9-16周" }, { day: "周五", slot: "3-4节", room: "", weeks: "9-16周" }]),
  o("2080442221", "视觉传达设计研究", "视觉传达设计研究1", 2, "张耿", [{ day: "周日", slot: "5-8节", room: "", weeks: "3-10周" }]),
  o("3080130010", "建筑设计理论", "建筑设计理论1", 2, "唐建", [{ day: "周三", slot: "5-8节", room: "", weeks: "5-12周" }]),
  o("3080132011", "城市建筑智能评价与设计", "城市建筑智能评价与设计1", 2, "郭飞", [{ day: "周一", slot: "7-8节", room: "", weeks: "1-8周" }, { day: "周四", slot: "1-2节", room: "", weeks: "1-8周" }]),
  o("3080232111", "智慧交通规划", "智慧交通规划1", 1, "蔡军", [{ day: "周二", slot: "5-6节", room: "综合教学1号楼354", weeks: "1-8周" }]),
  o("3080240060", "科研选题与学术规范", "科研选题与学术规范1", 1, "梁江", [{ day: "周日", slot: "9-10节", room: "研教楼205-1", weeks: "2-9周" }]),
];

let state = loadState();

function c(code, name, credits, term, type, module, rule = "", track = "both") {
  return { code, name, credits, term, type, module, rule, track };
}

function s(code, name, credits, hours, category, kind, subcategory, term) {
  return { code, name, credits, hours, category, kind, subcategory, term };
}

function o(code, name, className, credits, teacher, times) {
  return { code, name, className, credits, teacher, times };
}

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { selected: [], times: {}, classChoice: {}, track: "design" };
  } catch {
    return { selected: [], times: {}, classChoice: {}, track: "design" };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function visibleCourses() {
  const q = document.getElementById("courseSearch").value.trim().toLowerCase();
  return courses.filter((course) => {
    const trackOk = course.track === "both" || course.track === state.track || course.type !== "majorRequired";
    const queryOk = !q || `${course.code}${course.name}${course.module}`.toLowerCase().includes(q);
    return trackOk && queryOk;
  });
}

function selectedCourses() {
  return allCourseCatalog().filter((course) => state.selected.includes(course.code));
}

function allCourseCatalog() {
  const extras = systemPlan
    .filter((item) => !courses.some((course) => course.code === item.code))
    .map((item) => ({
      code: item.code,
      name: item.name,
      credits: item.credits,
      term: item.term,
      type: mapSystemType(item.category),
      module: item.subcategory || "系统课程",
      rule: "仅系统",
      track: "both",
      systemOnly: true,
    }));
  return [...courses, ...extras];
}

function renderCourses() {
  document.querySelectorAll("[data-track]").forEach((button) => {
    button.classList.toggle("active", button.dataset.track === state.track);
  });

  const list = document.getElementById("courseList");
  const extraSystem = systemPlan
    .filter((item) => !courses.some((course) => course.code === item.code))
    .map((item) => ({
      code: item.code,
      name: item.name,
      credits: item.credits,
      term: item.term,
      type: mapSystemType(item.category),
      module: item.subcategory || "系统课程",
      rule: "仅系统",
      track: "both",
      systemOnly: true,
    }));
  const source = [...visibleCourses(), ...extraSystem].filter((course) => {
    const q = document.getElementById("courseSearch").value.trim().toLowerCase();
    return !q || `${course.code}${course.name}${course.module}`.toLowerCase().includes(q);
  });
  const grouped = groupBy(source, (course) => `${typeLabel(course.type)} / ${course.module}`);
  list.innerHTML = "";

  Object.entries(grouped).forEach(([label, groupCourses]) => {
    const section = document.createElement("section");
    section.className = "group";
    section.innerHTML = `<div class="group-head"><strong>${label}</strong><span>${sumCredits(groupCourses)} 分</span></div>`;
    groupCourses.forEach((course) => section.appendChild(courseRow(course)));
    list.appendChild(section);
  });
}

function courseRow(course) {
  const badges = compareBadges(course);
  const disabled = course.systemOnly ? "" : "";
  const row = document.createElement("label");
  row.className = "course-row";
  row.innerHTML = `
    <input type="checkbox" ${state.selected.includes(course.code) ? "checked" : ""} data-code="${course.code}" ${disabled} />
    <span>
      <span class="course-name">${course.name}</span>
      <span class="course-meta">${course.code} · ${course.term} · ${course.module}${course.rule ? ` · ${course.rule}` : ""}</span>
      <span class="badges">${badges.map((badge) => `<span class="badge ${badge.level}">${badge.text}</span>`).join("")}</span>
    </span>
    <span class="credit-pill">${course.credits}分</span>
  `;
  return row;
}

function renderSummary() {
  const totals = calculateTotals();
  const cards = [
    ["课程学分", totals.courseTotal, 23],
    ["公共必修", totals.publicRequired, 7],
    ["专业必修", totals.majorRequired, 10],
    ["总学分", totals.grandTotal, 32],
  ];
  document.getElementById("summaryGrid").innerHTML = cards.map(([label, value, target]) => {
    const status = value === target ? "ok" : value > target ? "warn" : "bad";
    return `<article class="summary-card ${status}"><div class="label">${label}</div><div class="value">${value}/${target}</div></article>`;
  }).join("");
}

function renderSchedule() {
  const term = document.getElementById("termFilter").value;
  const selected = selectedCourses().filter((course) => term === "all" || course.term === term || course.term.includes(term));
  const conflicts = findConflicts(selected);
  document.getElementById("selectedCount").textContent = `${selectedCourses().length} 门`;
  renderWeeklyTimetable(selected, conflicts);

  const table = document.getElementById("scheduleTable");
  if (!selected.length) {
    table.innerHTML = `<div class="empty">还没有选择课程</div>`;
    return;
  }

  table.innerHTML = selected.map((course) => {
    const courseOfferings = offerings.filter((item) => item.code === course.code);
    const chosen = getChosenOffering(course.code);
    const customTime = state.times[course.code] || {};
    const isConflict = offeringKeys(chosen, customTime).some((key) => conflicts.has(key));
    const timeLines = chosen
      ? chosen.times.map((time) => `${time.day} ${time.slot} ${time.room || ""} ${time.weeks || ""}`.trim()).join("<br>")
      : "暂无截图课表时间，可手动填写";
    return `
      <div class="schedule-row ${isConflict ? "conflict" : ""}">
        <div><strong>${course.name}</strong><small>${course.code} · ${typeLabel(course.type)} · ${course.credits}分</small></div>
        <div>${course.term}</div>
        ${courseOfferings.length ? `
          <select class="class-select" data-class-code="${course.code}">
            ${courseOfferings.map((item, index) => `<option value="${index}" ${String(state.classChoice[course.code] || "0") === String(index) ? "selected" : ""}>${item.className} · ${item.teacher}</option>`).join("")}
          </select>
        ` : `
          <div class="time-inputs">
            <select class="time-input" data-time="day" data-code="${course.code}">
              ${["", "周一", "周二", "周三", "周四", "周五", "周六", "周日"].map((day) => `<option value="${day}" ${customTime.day === day ? "selected" : ""}>${day || "星期"}</option>`).join("")}
            </select>
            <select class="time-input" data-time="slot" data-code="${course.code}">
              ${["", "1-2节", "3-4节", "5-6节", "7-8节", "9-10节", "11-12节"].map((slot) => `<option value="${slot}" ${customTime.slot === slot ? "selected" : ""}>${slot || "节次"}</option>`).join("")}
            </select>
          </div>
        `}
        <span class="time-lines">${timeLines}</span>
        <span>${isConflict ? "时间冲突" : " "}</span>
      </div>
    `;
  }).join("");
}

function renderWeeklyTimetable(selected, conflicts) {
  const days = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
  const slots = [
    { label: "1-2节", start: 1, end: 2 },
    { label: "3-4节", start: 3, end: 4 },
    { label: "5-6节", start: 5, end: 6 },
    { label: "7-8节", start: 7, end: 8 },
    { label: "9-10节", start: 9, end: 10 },
    { label: "11-12节", start: 11, end: 12 },
  ];
  const grid = new Map();

  selected.forEach((course) => {
    const offering = getChosenOffering(course.code);
    const customTime = state.times[course.code];
    const times = offering ? offering.times : customTime && customTime.day && customTime.slot ? [customTime] : [];
    times.forEach((time) => {
      const range = slotRange(time.slot);
      slots.forEach((slot) => {
        if (!rangesOverlap(range, slot)) return;
        const key = `${time.day}-${slot.label}`;
        const item = {
          course,
          offering,
          time,
          conflict: expandTimeKeys(time).some((timeKeyValue) => conflicts.has(timeKeyValue)),
        };
        grid.set(key, [...(grid.get(key) || []), item]);
      });
    });
  });

  const html = [
    `<div class="timetable-head">节次</div>`,
    ...days.map((day) => `<div class="timetable-head">${day}</div>`),
    ...slots.flatMap((slot) => [
      `<div class="timetable-slot">${slot.label}</div>`,
      ...days.map((day) => {
        const items = grid.get(`${day}-${slot.label}`) || [];
        return `<div class="timetable-cell">${items.map(renderClassBlock).join("")}</div>`;
      }),
    ]),
  ].join("");

  document.getElementById("weeklyTimetable").innerHTML = html;
}

function renderClassBlock(item) {
  const { course, offering, time, conflict } = item;
  const teacher = offering ? offering.teacher : "手动填写";
  const className = offering ? offering.className : "";
  return `
    <div class="class-block ${conflict ? "conflict" : ""}">
      <strong>${course.name}</strong>
      <span>${className}${className ? " · " : ""}${teacher}</span>
      <span>${time.room || "教室未录入"} · ${time.weeks || "周次未录入"}</span>
    </div>
  `;
}

function slotRange(slotText = "") {
  const nums = (slotText.match(/\d+/g) || []).map(Number);
  if (nums.length < 2) return { start: 0, end: 0 };
  return { start: nums[0], end: nums[1] };
}

function rangesOverlap(a, b) {
  return a.start <= b.end && b.start <= a.end;
}

function renderRequirements() {
  const totals = calculateTotals();
  const allOk = requirements.every((req) => totals[req.id] >= req.min && totals[req.id] <= req.max);
  const noConflicts = findConflicts(selectedCourses()).size === 0;
  document.getElementById("gradStatus").textContent = allOk && noConflicts ? "已达标" : "未达标";

  document.getElementById("requirements").innerHTML = requirements.map((req) => {
    const value = totals[req.id];
    const pct = Math.min(100, (value / req.min) * 100);
    const cls = value === req.max ? "done" : value > req.max ? "over" : "";
    const text = value > req.max ? `多选 ${value - req.max} 分` : value >= req.min ? "刚好" : `还差 ${req.min - value} 分`;
    return `
      <div class="requirement ${cls}">
        <strong>${req.label}</strong>
        <div class="bar"><span style="width:${pct}%"></span></div>
        <span class="status-text">${value}/${req.min} · ${text}</span>
      </div>
    `;
  }).join("");
}

function calculateTotals() {
  const totals = { publicRequired: 0, publicElective: 0, majorRequired: 0, majorElective: 0, process: 0 };
  selectedCourses().forEach((course) => {
    totals[course.type] += course.credits;
  });
  totals.courseTotal = totals.publicRequired + totals.publicElective + totals.majorRequired + totals.majorElective;
  totals.grandTotal = totals.courseTotal + totals.process;
  return totals;
}

function findConflicts(items) {
  const seen = new Map();
  const conflicts = new Set();
  items.forEach((course) => {
    const keys = offeringKeys(getChosenOffering(course.code), state.times[course.code]);
    keys.forEach((key) => {
      if (!key) return;
      if (seen.has(key)) conflicts.add(key);
      seen.set(key, course.code);
    });
  });
  return conflicts;
}

function getChosenOffering(code) {
  const courseOfferings = offerings.filter((item) => item.code === code);
  if (!courseOfferings.length) return null;
  const index = Number(state.classChoice[code] || 0);
  return courseOfferings[index] || courseOfferings[0];
}

function offeringKeys(offering, customTime) {
  if (offering) return offering.times.flatMap(expandTimeKeys);
  return [timeKey(customTime)];
}

function expandTimeKeys(time) {
  const nums = (time.slot.match(/\d+/g) || []).map(Number);
  if (nums.length < 2) return [timeKey(time)];
  const weeks = expandWeeks(time.weeks);
  const keys = [];
  for (let n = nums[0]; n <= nums[1]; n += 1) {
    weeks.forEach((week) => keys.push(`${time.day}-${n}-${week}`));
  }
  return keys;
}

function expandWeeks(text = "") {
  const range = text.match(/(\d+)\s*-\s*(\d+)/);
  if (!range) return ["all"];
  const start = Number(range[1]);
  const end = Number(range[2]);
  const weeks = [];
  for (let week = start; week <= end; week += 1) weeks.push(week);
  if (text.includes("单周")) return weeks.filter((week) => week % 2 === 1);
  if (text.includes("双周")) return weeks.filter((week) => week % 2 === 0);
  return weeks;
}

function timeKey(time) {
  if (!time || !time.day || !time.slot) return "";
  return `${time.day}-${time.slot}`;
}

function groupBy(items, getter) {
  return items.reduce((acc, item) => {
    const key = getter(item);
    acc[key] = acc[key] || [];
    acc[key].push(item);
    return acc;
  }, {});
}

function sumCredits(items) {
  return items.reduce((sum, course) => sum + course.credits, 0);
}

function typeLabel(type) {
  return {
    publicRequired: "公共必修",
    publicElective: "公共选修",
    majorRequired: "专业必修",
    majorElective: "专业选修",
    process: "培养过程",
  }[type];
}

function mapSystemType(category) {
  if (category === "公共必修课") return "publicRequired";
  if (category === "公共选修课") return "publicElective";
  if (category === "专业必修课") return "majorRequired";
  if (category === "专业选修课") return "majorElective";
  return "majorElective";
}

function compareBadges(course) {
  const system = systemPlan.find((item) => item.code === course.code);
  const hasOffering = offerings.some((item) => item.code === course.code);
  const badges = [];
  if (course.systemOnly) {
    badges.push({ text: "仅系统", level: "warn" });
  } else if (!system) {
    const sameName = systemPlan.find((item) => item.name === normalizeName(course.name));
    badges.push({ text: sameName ? `代码不同：系统${sameName.code}` : "仅Word", level: "bad" });
  } else {
    const diffs = [];
    if (normalizeName(system.name) !== normalizeName(course.name)) diffs.push("名称");
    if (Number(system.credits) !== Number(course.credits)) diffs.push("学分");
    if (mapSystemType(system.category) !== course.type) diffs.push("类别");
    badges.push(diffs.length ? { text: `系统不同：${diffs.join("/")}`, level: "warn" } : { text: "系统一致", level: "ok" });
  }
  badges.push(hasOffering ? { text: "有开课时间", level: "ok" } : { text: "未见开课时间", level: "warn" });
  return badges;
}

function renderDiffs() {
  const diffs = collectDiffs();
  document.getElementById("diffCount").textContent = `${diffs.length} 项`;
  document.getElementById("diffList").innerHTML = diffs.map((item) => `
    <div class="diff-item">
      <strong>${item.code}</strong>
      <p>${item.text}</p>
    </div>
  `).join("");
}

function collectDiffs() {
  const diffs = [
    { code: "公共选修", text: `Word 要求 1 学分，系统截图显示公共选修课最低 ${systemRules.publicElective} 学分。若最终以系统提交为准，需要公共选修选到 2 学分。` },
    { code: "统计与计量分析方法", text: "Word 为 2060321621，专业必修数理类；系统截图为 2060311621，专业选修课，代码和类别不同。" },
    { code: "专业硕士英语", text: "Word 为 21000102113 专业硕士英语（工程三）；系统截图为 2100010211 专业硕士英语，代码和名称不同。" },
    { code: "通用英语", text: "Word 为 21000102213 通用英语（工程三）；系统截图为 2100010221 通用英语，代码和名称不同。" },
  ];

  courses.forEach((course) => {
    const system = systemPlan.find((item) => item.code === course.code);
    if (!system) {
      const sameName = systemPlan.find((item) => normalizeName(item.name) === normalizeName(course.name));
      diffs.push({
        code: course.code,
        text: sameName
          ? `Word：${course.name}；系统同名/近名课程代码为 ${sameName.code}，需按系统代码选。`
          : `Word 有该课：${course.name}；截图中的系统培养方案列表未看到同代码课程。`,
      });
      return;
    }
    const parts = [];
    if (normalizeName(system.name) !== normalizeName(course.name)) parts.push(`名称 Word“${course.name}” / 系统“${system.name}”`);
    if (Number(system.credits) !== Number(course.credits)) parts.push(`学分 Word ${course.credits} / 系统 ${system.credits}`);
    if (mapSystemType(system.category) !== course.type) parts.push(`类别 Word ${typeLabel(course.type)} / 系统 ${system.category}`);
    if (parts.length) diffs.push({ code: course.code, text: parts.join("；") });
  });

  systemPlan.forEach((item) => {
    if (!courses.some((course) => course.code === item.code)) {
      diffs.push({ code: item.code, text: `系统有该课：${item.name}（${item.category}，${item.credits}学分）；Word 建筑专硕课程表未见同代码。` });
    }
  });

  return dedupeDiffs(diffs);
}

function normalizeName(name) {
  return name.replace(/[（(].*?[）)]/g, "").replace(/[ⅠⅡ]/g, "").replace(/\s/g, "");
}

function dedupeDiffs(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = `${item.code}-${item.text}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function render() {
  renderCourses();
  renderSummary();
  renderSchedule();
  renderRequirements();
  renderDiffs();
}

document.addEventListener("change", (event) => {
  const checkbox = event.target.closest("input[type='checkbox'][data-code]");
  if (checkbox) {
    state.selected = checkbox.checked
      ? [...new Set([...state.selected, checkbox.dataset.code])]
      : state.selected.filter((code) => code !== checkbox.dataset.code);
    saveState();
    render();
    return;
  }

  const timeInput = event.target.closest("[data-time][data-code]");
  if (timeInput) {
    const code = timeInput.dataset.code;
    state.times[code] = state.times[code] || {};
    state.times[code][timeInput.dataset.time] = timeInput.value;
    saveState();
    renderSchedule();
    renderRequirements();
    return;
  }

  const classInput = event.target.closest("[data-class-code]");
  if (classInput) {
    state.classChoice[classInput.dataset.classCode] = classInput.value;
    saveState();
    renderSchedule();
    renderRequirements();
  }
});

document.querySelectorAll("[data-track]").forEach((button) => {
  button.addEventListener("click", () => {
    state.track = button.dataset.track;
    const hiddenRequired = courses
      .filter((course) => course.type === "majorRequired" && course.track !== "both" && course.track !== state.track)
      .map((course) => course.code);
    state.selected = state.selected.filter((code) => !hiddenRequired.includes(code));
    saveState();
    render();
  });
});

document.getElementById("courseSearch").addEventListener("input", renderCourses);
document.getElementById("termFilter").addEventListener("change", renderSchedule);
document.getElementById("clearSelection").addEventListener("click", () => {
  state.selected = [];
  state.times = {};
  state.classChoice = {};
  saveState();
  render();
});
document.getElementById("selectMinimum").addEventListener("click", () => {
  state.selected = minimumByTrack[state.track];
  saveState();
  render();
});

render();
