const STORAGE_KEY = "architecture-academic-course-planner-v1";

const requirements = [
  { id: "requiredTotal", label: "必修课", min: 12, max: 12 },
  { id: "electiveTotal", label: "选修课", min: 13, max: 13 },
  { id: "process", label: "培养过程", min: 3, max: 3 },
  { id: "grandTotal", label: "总学分", min: 28, max: 28 },
];

const courses = [
  c("2070310021", "中国式现代化理论与实践", 2, "秋", "required", "公共必修 / 政治理论类", "必选"),
  c("2070310031", "当代社会思潮辨析", 1, "春", "required", "公共必修 / 政治理论类", "3选1"),
  c("2070350031", "马克思主义与社会科学方法论", 1, "秋", "required", "公共必修 / 政治理论类", "3选1"),
  c("2070310041", "马克思主义与当代科技", 1, "春", "required", "公共必修 / 政治理论类", "3选1"),
  c("2100010181", "国际英语测试", 2, "秋/春", "required", "公共必修 / 外语类", "3选1"),
  c("21000101913", "学术英语（工程三）", 2, "秋/春", "required", "公共必修 / 外语类", "3选1"),
  c("21000102013", "跨文化国际传播英语（工程三）", 2, "秋/春", "required", "公共必修 / 外语类", "3选1"),
  c("2070110059", "论文写作与学术规范", 1, "秋/春", "required", "公共必修 / 论文写作类", "必选"),
  c("2120020011", "科学计算方法", 2, "秋/春", "required", "专业必修 / 数理与人工智能类", "数理类至少2分"),
  c("2120020041", "应用数理统计", 2, "秋/春", "required", "专业必修 / 数理与人工智能类", "数理类至少2分"),
  c("2060321621", "统计与计量分析方法", 2, "秋", "required", "专业必修 / 数理与人工智能类", "数理类至少2分"),
  c("2020420013", "深度学习与算法设计", 2, "春", "required", "专业必修 / 数理与人工智能类", "数理类至少2分"),
  c("2080442083", "设计统计学", 2, "春", "required", "专业必修 / 数理与人工智能类", "数理类至少2分"),
  c("2020740120", "物联网与嵌入式技术", 2, "春", "required", "专业必修 / 数理与人工智能类", "数理类至少2分"),
  c("3080132011", "城市建筑智能评价与设计", 2, "春", "required", "专业必修 / 前沿交叉课", "必选"),
  c("2080130122", "建筑设计方法论", 2, "春", "required", "专业必修 / 学科核心课", "必选"),
  c("2070340081", "研究生形势与政策", 1, "秋", "elective", "公共选修", "多选1"),
  c("2070140032", "中华优秀传统文化", 1, "秋", "elective", "公共选修", "多选1"),
  c("2070150031", "中国古代文学专题", 1, "春", "elective", "公共选修", "多选1"),
  c("2070150041", "中国古代艺术专题", 1, "春", "elective", "公共选修", "多选1"),
  c("2070150051", "新兴科技伦理问题及其治理", 1, "春", "elective", "公共选修", "多选1"),
  c("2070150061", "科技美学A", 1, "春", "elective", "公共选修", "多选1"),
  c("2060240601", "创业管理与企业家精神", 2, "春", "elective", "公共选修", "多选1"),
  c("2060252191", "管理沟通", 2, "秋", "elective", "公共选修", "多选1"),
  c("2070110062", "知识产权", 1, "秋", "elective", "公共选修", "多选1"),
  c("2070110072", "信息检索", 1, "秋", "elective", "公共选修", "多选1"),
  c("2070350089", "研究生人格发展和情绪管理", 1, "春", "elective", "公共选修", "多选1"),
  c("2903020011", "研究生就业指导", 2, "秋/春", "elective", "公共选修", "多选1"),
  c("2130050031", "体育（游泳）", 2, "秋/春", "elective", "公共选修", "多选1"),
  c("2130050024", "运动与健康", 1, "秋/春", "elective", "公共选修", "多选1"),
  c("2080130113", "环境行为理论与方法", 2, "秋", "elective", "专业选修 / 设计方法与理论"),
  c("2080140482", "建筑计划学", 1, "秋", "elective", "专业选修 / 设计方法与理论"),
  c("2080130093", "建筑构法与设计", 2, "春", "elective", "专业选修 / 设计方法与理论"),
  c("2080442011", "室内智能化设计研究", 1, "秋", "elective", "专业选修 / 设计方法与理论"),
  c("2080441743", "交互设计及理论", 1, "秋", "elective", "专业选修 / 设计方法与理论"),
  c("2080132021", "建筑专题研究Ⅰ", 3, "秋", "elective", "专业选修 / 设计方法与理论"),
  c("2080132041", "建筑专题研究Ⅱ", 3, "春", "elective", "专业选修 / 设计方法与理论"),
  c("2080140422", "建筑声环境设计研究", 1, "春", "elective", "专业选修 / 绿色健康与新能源"),
  c("2080140432", "建筑热环境设计研究", 1, "春", "elective", "专业选修 / 绿色健康与新能源"),
  c("2080140443", "建筑光环境设计研究", 1, "春", "elective", "专业选修 / 绿色健康与新能源"),
  c("2080142411", "当代节能建筑技术与建筑设计", 1, "春", "elective", "专业选修 / 绿色健康与新能源"),
  c("2080140561", "建筑环境感知与评价", 1, "春", "elective", "专业选修 / 绿色健康与新能源"),
  c("2080142421", "数字化建筑设计导论", 1, "秋", "elective", "专业选修 / 绿色健康与新能源"),
  c("2080240511", "西方城市规划理论", 2, "秋", "elective", "专业选修 / 城市规划与管理"),
  c("2080242041", "气候韧性与低碳城市设计", 2, "春", "elective", "专业选修 / 城市规划与管理"),
  c("2080240601", "城市健康社区规划理论与方法", 1, "春", "elective", "专业选修 / 城市规划与管理"),
  c("2080140523", "风景园林艺术原理", 1, "秋", "elective", "专业选修 / 城市规划与管理"),
  c("2080142211", "城市更新智能技术与应用", 1, "秋", "elective", "专业选修 / 城市规划与管理"),
  c("2080140453", "历史建筑保护研究", 1, "秋", "elective", "专业选修 / 哲学与历史"),
  c("2080140553", "历史城镇形态分析", 1, "春", "elective", "专业选修 / 哲学与历史"),
  c("2080240631", "历史城镇保护规划", 1, "秋", "elective", "专业选修 / 哲学与历史"),
  c("2080130103", "建筑历史与理论", 2, "秋", "elective", "专业选修 / 哲学与历史"),
  c("2080140413", "建筑地域文化", 2, "春", "elective", "专业选修 / 哲学与历史"),
  c("2900010083", "科创竞赛2", 2, "秋/春", "elective", "专业选修 / 创新创业"),
  c("2900010013", "文献综述与开题报告", 1, "秋/春", "process", "培养过程", "必修"),
  c("2900010023", "中期考核", 1, "秋/春", "process", "培养过程", "必修"),
  c("2900010033", "学术活动", 1, "秋/春", "process", "培养过程", "必修"),
];

const minimum = ["2070310021", "2070350031", "2100010181", "2070110059", "2080442083", "3080132011", "2080130122", "2070340081", "2080130103", "2080130113", "2080140413", "2080240511", "2080242041", "2080130093", "2080140482", "2900010013", "2900010023", "2900010033"];

const systemPlan = [
  s("2070110059", "论文写作与学术规范", 1, 16, "公共必修课", "论文写作与学术规范", "秋、春"),
  s("2070150021", "自然辩证法概论", 1, 18, "公共必修课", "政治理论类", "春"),
  s("2070310013", "新时代中国特色社会主义理论与实践", 2, 36, "公共必修课", "政治理论类", "秋"),
  s("2070330311", "习近平新时代中国特色社会主义思想研究（硕士）", 2, 32, "公共必修课", "政治理论类", "秋"),
  s("2070350031", "马克思主义与社会科学方法论", 1, 16, "公共必修课", "政治理论类", "秋"),
  s("2100010181", "国际英语测试", 2, 32, "公共必修课", "外语类", "秋、春"),
  s("2100010191", "学术英语", 2, 32, "公共必修课", "外语类", "秋、春"),
  s("2100010201", "跨文化国际传播英语", 2, 32, "公共必修课", "外语类", "秋、春"),
  s("2900010013", "文献综述与开题报告", 1, 16, "公共必修课", "培养过程类", "秋、春"),
  s("2900010023", "中期考核", 1, 16, "公共必修课", "培养过程类", "秋、春"),
  s("2900010033", "学术活动", 1, 16, "公共必修课", "培养过程类", "秋、春"),
  s("2020420013", "深度学习与算法设计", 2, 32, "专业必修课", "数理类、人工智能类", "秋、春"),
  s("2020740120", "物联网与嵌入式技术", 2, 32, "专业必修课", "数理类、人工智能类", "春"),
  s("2060311621", "统计与计量分析方法", 2, 32, "专业必修课", "数理类、人工智能类", "秋、春"),
  s("2080130122", "建筑设计方法论", 2, 32, "专业必修课", "", "秋"),
  s("2080442083", "设计统计学", 2, 32, "专业必修课", "数理类、人工智能类", "春"),
  s("2120020011", "科学计算方法", 2, 32, "专业必修课", "数理类、人工智能类", "秋、春"),
  s("2120020041", "应用数理统计", 2, 32, "专业必修课", "数理类、人工智能类", "秋、春"),
  s("3080132011", "城市建筑智能评价与设计", 2, 32, "专业必修课", "", "春"),
  s("2060240601", "创业管理与企业家精神", 2, 32, "公共选修课", "综合素养类", "春"),
  s("2060252191", "管理沟通", 2, 32, "公共选修课", "综合素养类", "秋"),
  s("2070110062", "知识产权", 1, 16, "公共选修课", "综合素养类", "秋"),
  s("2070110072", "信息检索", 1, 16, "公共选修课", "综合素养类", "秋"),
  s("2070140032", "中华优秀传统文化", 1, 16, "公共选修课", "优秀传统文化类", "秋、春"),
  s("2070150031", "中国古代文学专题", 1, 16, "公共选修课", "优秀传统文化类", "秋、春"),
  s("2070150041", "中国古代艺术专题", 1, 16, "公共选修课", "优秀传统文化类", "秋、春"),
  s("2070150061", "科技美学A", 1, 16, "公共选修课", "综合素养类", "春"),
  s("2070340081", "研究生形势与政策", 1, 16, "公共选修课", "优秀传统文化类", "秋、春"),
  s("2070350011", "中华民族共同体概论", 1, 16, "公共选修课", "优秀传统文化类", "秋"),
  s("2070350089", "研究生人格发展和情绪管理", 1, 16, "公共选修课", "综合素养类", "春"),
  s("2130050011", "女子形体", 2, 32, "公共选修课", "综合素养类", "秋、春"),
  s("2130050031", "游泳", 2, 32, "公共选修课", "综合素养类", "秋、春"),
  s("2130050041", "研究生体育俱乐部", 2, 32, "公共选修课", "综合素养类", "秋、春"),
  s("2903020011", "研究生就业指导", 2, 32, "公共选修课", "综合素养类", "秋、春"),
  s("2070150051", "新兴科技伦理问题及其治理", 1, 16, "专业选修课", "综合素养类", "春"),
  s("2080130093", "建筑构法与设计", 2, 32, "专业选修课", "", "秋"),
  s("2080130103", "建筑历史与理论", 2, 32, "专业选修课", "", "秋"),
  s("2080130113", "环境行为理论与方法", 2, 32, "专业选修课", "", "春"),
  s("2080132021", "建筑专题研究Ⅰ", 3, 48, "专业选修课", "", "秋"),
  s("2080132041", "建筑专题研究Ⅱ", 3, 48, "专业选修课", "", "春"),
  s("2080140413", "建筑地域文化", 2, 32, "专业选修课", "", "春"),
  s("2080140422", "建筑声环境设计研究", 1, 16, "专业选修课", "", "春"),
  s("2080140443", "建筑光环境设计研究", 1, 16, "专业选修课", "", "春"),
  s("2080140453", "历史建筑保护研究", 1, 16, "专业选修课", "", "秋"),
  s("2080140462", "高层建筑设计方法", 1, 16, "专业选修课", "", "秋"),
  s("2080140482", "建筑计划学", 1, 16, "专业选修课", "", "秋"),
  s("2080140523", "风景园林艺术原理", 1, 16, "专业选修课", "", "秋"),
  s("2080140553", "历史城镇形态分析", 1, 16, "专业选修课", "", "秋"),
  s("2080140561", "建筑环境感知与评价", 1, 16, "专业选修课", "", "春"),
  s("2080142211", "城市更新智能技术与应用", 1, 16, "专业选修课", "", "秋"),
  s("2080142411", "当代节能建筑技术与建筑设计", 1, 16, "专业选修课", "", "春"),
  s("2080142421", "数字化建筑设计导论", 1, 16, "专业选修课", "", "秋"),
  s("2080240511", "西方城市规划理论", 2, 32, "专业选修课", "", "秋"),
  s("2080240601", "城市健康社区规划理论与方法", 1, 16, "专业选修课", "", "春"),
  s("2080240631", "历史城镇保护规划", 1, 16, "专业选修课", "", "秋"),
  s("2080242041", "气候韧性与低碳城市设计", 2, 32, "专业选修课", "", "秋"),
  s("2080441743", "交互设计及理论", 1, 16, "专业选修课", "", "秋"),
  s("2080442011", "室内智能化设计研究", 1, 16, "专业选修课", "", "秋"),
  s("2080442021", "AIGC参数化设计实践", 1, 16, "专业选修课", "", "秋"),
  s("2900010083", "科创竞赛2", 2, 32, "专业选修课", "", "秋、春"),
];

const offerings = [
  o("2080130103", "建筑历史与理论", "建筑历史与理论1", 2, "唐建", [{ day: "周二", slot: "9-12节", room: "综合教学1号楼357", weeks: "3-10周" }]),
  o("2080132011", "建筑设计研究Ⅰ", "建筑设计研究Ⅰ1", 3, "李冰", [{ day: "周三", slot: "5-8节", room: "研教楼409", weeks: "6-17周" }]),
  o("2080132021", "建筑专题研究Ⅰ", "建筑专题研究Ⅰ1", 3, "张弘驰", [{ day: "周三", slot: "5-8节", room: "", weeks: "2-13周" }]),
  o("2080132021", "建筑专题研究Ⅰ", "建筑专题研究Ⅰ2", 3, "杨笑音", [{ day: "周三", slot: "5-8节", room: "", weeks: "2-13周" }]),
  o("2080132021", "建筑专题研究Ⅰ", "建筑专题研究Ⅰ3", 3, "肖彦", [{ day: "周三", slot: "5-8节", room: "", weeks: "2-13周" }]),
  o("2080140453", "历史建筑保护研究", "历史建筑保护研究1", 1, "鞠伟", [{ day: "周二", slot: "1-2节", room: "研教楼201", weeks: "2-9周" }]),
  o("2080140482", "建筑计划学", "建筑计划学1", 1, "曲艺", [{ day: "周四", slot: "9-12节", room: "研教楼212-2", weeks: "3-6周" }]),
  o("2080140523", "风景园林艺术原理", "风景园林艺术原理1", 1, "董丽", [{ day: "周四", slot: "3-4节", room: "研教楼412", weeks: "2-9周" }]),
  o("2080140553", "历史城镇形态分析", "历史城镇形态分析1", 1, "李冰", [{ day: "周三", slot: "3-4节", room: "研教楼407", weeks: "5-12周" }]),
  o("2080142111", "居住与社区发展", "居住与社区发展1", 1, "李嘉彬", [{ day: "周二", slot: "5-6节", room: "环管学院A206", weeks: "2-9周" }]),
  o("2080230073", "规划课题研究实践", "规划课题研究实践1", 1, "孙晖", [{ day: "周日", slot: "9-10节", room: "综合教学1号楼354", weeks: "2-9周" }]),
  o("2080230083", "规划实践与设计研究", "规划实践与设计研究1", 1, "孙晖", [{ day: "周日", slot: "9-10节", room: "综合教学1号楼354", weeks: "10-17周" }]),
  o("2080230183", "城市设计理论", "城市设计理论1", 2, "梁江", [{ day: "周日", slot: "9-12节", room: "综合教学1号楼359", weeks: "2-9周" }]),
  o("2080230191", "概念规划与总体规划", "概念规划与总体规划1", 2, "陈伟新（建筑）", [{ day: "周二", slot: "5-8节", room: "研教楼302", weeks: "2-16双周" }]),
  o("2080232021", "智慧国土空间规划理论", "智慧国土空间规划理论1", 2, "陈飞", [{ day: "周二", slot: "5-8节", room: "研教楼418", weeks: "8-15周" }]),
  o("2080232031", "北方滨海国土空间规划Ⅰ", "北方滨海国土空间规划Ⅰ1", 2, "刘代云", [{ day: "周三", slot: "9-12节", room: "", weeks: "2-9周" }]),
  o("2080232031", "北方滨海国土空间规划Ⅰ", "北方滨海国土空间规划Ⅰ2", 2, "钱芳", [{ day: "周四", slot: "5-8节", room: "研教楼414", weeks: "2-9周" }]),
  o("2080240511", "西方城市规划理论", "西方城市规划理论1", 2, "杨东峰", [{ day: "周四", slot: "1-4节", room: "研教楼303", weeks: "2-5周" }, { day: "周五", slot: "1-4节", room: "研教楼303", weeks: "2-5周" }]),
  o("2080240571", "城市规划管理", "城市规划管理1", 1, "沈娜", [{ day: "周四", slot: "9-12节", room: "综合教学1号楼359", weeks: "2-5周" }]),
  o("2080240621", "城市交通研究前沿", "城市交通研究前沿1", 1, "蔡军", [{ day: "周二", slot: "5-8节", room: "研教楼103", weeks: "2-5周" }]),
  o("2080240631", "历史城镇保护规划", "历史城镇保护规划1", 1, "苗力", [{ day: "周一", slot: "5-6节", room: "研教楼414", weeks: "9-16周" }]),
  o("2080240651", "城市规划新技术实践", "城市规划新技术实践1", 2, "陈伟新（建筑）", [{ day: "周三", slot: "5-8节", room: "综合教学1号楼356", weeks: "2-16双周" }]),
  o("2080242041", "气候韧性与低碳城市设计", "气候韧性与低碳城市设计1", 2, "刘代云", [{ day: "周三", slot: "5-6节", room: "", weeks: "2-17周" }]),
  o("2080330283", "综合创作理论与实践", "综合创作理论与实践1", 2, "申大鹏", [{ day: "周二", slot: "9-12节", room: "", weeks: "3-10周" }]),
  o("2080330433", "视觉传达专题设计", "视觉传达专题设计1", 3, "张耿", [{ day: "周六", slot: "5-8节", room: "研教楼205-2", weeks: "2-13周" }]),
  o("2080341693", "数字艺术设计理论与实践", "数字艺术设计理论与实践1", 1, "张耿", [{ day: "周二", slot: "3-4节", room: "综合教学1号楼356", weeks: "3-6周" }, { day: "周五", slot: "3-4节", room: "综合教学1号楼356", weeks: "3-6周" }]),
  o("2080341793", "视觉形象国际化热点问题研究", "视觉形象国际化热点问题研究1", 1, "达妮莎", [{ day: "周四", slot: "5-8节", room: "研教楼510", weeks: "9-12周" }]),
  o("2080342013", "品牌整合与传播", "品牌整合与传播1", 1, "邹佰晶", [{ day: "周二", slot: "5-8节", room: "研教楼408", weeks: "10-13周" }]),
  o("2080441733", "交互设计及理论", "交互设计及理论1", 1, "徐威", [{ day: "周三", slot: "5-8节", room: "", weeks: "10-13周" }]),
  o("2080441773", "设计心理学研究", "设计心理学研究1", 1, "马兰", [{ day: "周二", slot: "1-2节", room: "研教楼306", weeks: "2-9周" }]),
  o("2080442011", "室内智能化设计研究", "室内智能化设计研究1", 1, "陈岩（建艺）", [{ day: "周五", slot: "9-12节", room: "", weeks: "3-6周" }]),
  o("2080442021", "AIGC参数化设计实践", "AIGC参数化设计实践1", 1, "刘建军", [{ day: "周一", slot: "5-6节", room: "综合教学1号楼355", weeks: "2-9周" }]),
  o("2080442041", "设计历史及理论", "设计历史及理论1", 1, "徐威", [{ day: "周二", slot: "5-8节", room: "研教楼414", weeks: "2-5周" }]),
  o("2080442051", "产品专题设计", "产品专题设计1", 2, "徐威", [{ day: "周六", slot: "5-8节", room: "", weeks: "2-9周" }]),
  o("2080442091", "公共艺术研究", "公共艺术研究1", 1, "温洋", [{ day: "周三", slot: "5-8节", room: "", weeks: "11-14周" }]),
  o("3080140040", "建筑、规划研究的分析方法", "建筑、规划研究的分析方法1", 2, "金日学", [{ day: "周五", slot: "5-8节", room: "", weeks: "9-16周" }]),
];

let state = loadState();

function c(code, name, credits, term, type, module, rule = "") { return { code, name, credits, term, type, module, rule }; }
function s(code, name, credits, hours, category, subcategory, term) { return { code, name, credits, hours, category, subcategory, term }; }
function o(code, name, className, credits, teacher, times) { return { code, name, className, credits, teacher, times }; }
function loadState() { try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { selected: [], times: {}, classChoice: {} }; } catch { return { selected: [], times: {}, classChoice: {} }; } }
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function typeLabel(type) { return { required: "必修课", elective: "选修课", process: "培养过程" }[type] || type; }
function selectedCourses() { return allCourseCatalog().filter((course) => state.selected.includes(course.code)); }
function allCourseCatalog() {
  const extras = systemPlan.filter((item) => !courses.some((course) => course.code === item.code)).map((item) => ({ code: item.code, name: item.name, credits: item.credits, term: item.term, type: item.category.includes("必修") ? "required" : "elective", module: item.category, rule: "仅系统", systemOnly: true }));
  return [...courses, ...extras];
}
function renderCourses() {
  const q = document.getElementById("courseSearch").value.trim().toLowerCase();
  const source = allCourseCatalog().filter((course) => !q || `${course.code}${course.name}${course.module}`.toLowerCase().includes(q));
  const grouped = groupBy(source, (course) => `${typeLabel(course.type)} / ${course.module}`);
  document.getElementById("courseList").innerHTML = Object.entries(grouped).map(([label, items]) => `<section class="group"><div class="group-head"><strong>${label}</strong><span>${sumCredits(items)} 分</span></div>${items.map(courseRow).join("")}</section>`).join("");
}
function courseRow(course) {
  const badges = compareBadges(course);
  return `<label class="course-row"><input type="checkbox" ${state.selected.includes(course.code) ? "checked" : ""} data-code="${course.code}" /><span><span class="course-name">${course.name}</span><span class="course-meta">${course.code} · ${course.term} · ${course.module}${course.rule ? ` · ${course.rule}` : ""}</span><span class="badges">${badges.map((b) => `<span class="badge ${b.level}">${b.text}</span>`).join("")}</span></span><span class="credit-pill">${course.credits}分</span></label>`;
}
function calculateTotals() {
  const totals = { requiredTotal: 0, electiveTotal: 0, process: 0 };
  selectedCourses().forEach((course) => {
    if (course.type === "required") totals.requiredTotal += course.credits;
    if (course.type === "elective") totals.electiveTotal += course.credits;
    if (course.type === "process") totals.process += course.credits;
  });
  totals.grandTotal = totals.requiredTotal + totals.electiveTotal + totals.process;
  return totals;
}
function renderSummary() {
  const totals = calculateTotals();
  const cards = [["必修课", totals.requiredTotal, 12], ["选修课", totals.electiveTotal, 13], ["培养过程", totals.process, 3], ["总学分", totals.grandTotal, 28]];
  document.getElementById("summaryGrid").innerHTML = cards.map(([label, value, target]) => `<article class="summary-card ${value === target ? "ok" : value > target ? "warn" : "bad"}"><div class="label">${label}</div><div class="value">${value}/${target}</div></article>`).join("");
}
function renderSchedule() {
  const term = document.getElementById("termFilter").value;
  const selected = selectedCourses().filter((course) => term === "all" || course.term.includes(term));
  const conflicts = findConflicts(selected);
  document.getElementById("selectedCount").textContent = `${selectedCourses().length} 门`;
  renderWeeklyTimetable(selected, conflicts);
  const table = document.getElementById("scheduleTable");
  if (!selected.length) { table.innerHTML = `<div class="empty">还没有选择课程</div>`; return; }
  table.innerHTML = selected.map((course) => {
    const opts = offerings.filter((item) => item.code === course.code);
    const chosen = getChosenOffering(course.code);
    const customTime = state.times[course.code] || {};
    const timeLines = chosen ? chosen.times.map((time) => `${time.day} ${time.slot} ${time.room || ""} ${time.weeks || ""}`.trim()).join("<br>") : "暂无截图课表时间，可手动填写";
    const isConflict = offeringKeys(chosen, customTime).some((key) => conflicts.has(key));
    return `<div class="schedule-row ${isConflict ? "conflict" : ""}"><div><strong>${course.name}</strong><small>${course.code} · ${typeLabel(course.type)} · ${course.credits}分</small></div><div>${course.term}</div>${opts.length ? `<select class="class-select" data-class-code="${course.code}">${opts.map((item, index) => `<option value="${index}" ${String(state.classChoice[course.code] || "0") === String(index) ? "selected" : ""}>${item.className} · ${item.teacher}</option>`).join("")}</select>` : `<div class="time-inputs"><select class="time-input" data-time="day" data-code="${course.code}">${["", "周一", "周二", "周三", "周四", "周五", "周六", "周日"].map((day) => `<option value="${day}" ${customTime.day === day ? "selected" : ""}>${day || "星期"}</option>`).join("")}</select><select class="time-input" data-time="slot" data-code="${course.code}">${["", "1-2节", "3-4节", "5-6节", "7-8节", "9-10节", "11-12节"].map((slot) => `<option value="${slot}" ${customTime.slot === slot ? "selected" : ""}>${slot || "节次"}</option>`).join("")}</select></div>`}<span class="time-lines">${timeLines}</span><span>${isConflict ? "时间冲突" : " "}</span></div>`;
  }).join("");
}
function renderWeeklyTimetable(selected, conflicts) {
  const days = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
  const slots = [{ label: "1-2节", start: 1, end: 2 }, { label: "3-4节", start: 3, end: 4 }, { label: "5-6节", start: 5, end: 6 }, { label: "7-8节", start: 7, end: 8 }, { label: "9-10节", start: 9, end: 10 }, { label: "11-12节", start: 11, end: 12 }];
  const grid = new Map();
  selected.forEach((course) => {
    const offering = getChosenOffering(course.code);
    const customTime = state.times[course.code];
    const times = offering ? offering.times : customTime && customTime.day && customTime.slot ? [customTime] : [];
    times.forEach((time) => slots.forEach((slot) => {
      if (!rangesOverlap(slotRange(time.slot), slot)) return;
      const key = `${time.day}-${slot.label}`;
      grid.set(key, [...(grid.get(key) || []), { course, offering, time, conflict: expandTimeKeys(time).some((v) => conflicts.has(v)) }]);
    }));
  });
  document.getElementById("weeklyTimetable").innerHTML = [`<div class="timetable-head">节次</div>`, ...days.map((day) => `<div class="timetable-head">${day}</div>`), ...slots.flatMap((slot) => [`<div class="timetable-slot">${slot.label}</div>`, ...days.map((day) => `<div class="timetable-cell">${(grid.get(`${day}-${slot.label}`) || []).map(renderClassBlock).join("")}</div>`)])].join("");
}
function renderClassBlock(item) { return `<div class="class-block ${item.conflict ? "conflict" : ""}"><strong>${item.course.name}</strong><span>${item.offering ? `${item.offering.className} · ${item.offering.teacher}` : "手动填写"}</span><span>${item.time.room || "教室未录入"} · ${item.time.weeks || "周次未录入"}</span></div>`; }
function renderRequirements() {
  const totals = calculateTotals();
  const allOk = requirements.every((req) => totals[req.id] >= req.min && totals[req.id] <= req.max);
  const noConflicts = findConflicts(selectedCourses()).size === 0;
  document.getElementById("gradStatus").textContent = allOk && noConflicts ? "已达标" : "未达标";
  document.getElementById("requirements").innerHTML = requirements.map((req) => {
    const value = totals[req.id], pct = Math.min(100, value / req.min * 100), text = value > req.max ? `多选 ${value - req.max} 分` : value >= req.min ? "刚好" : `还差 ${req.min - value} 分`;
    return `<div class="requirement ${value === req.max ? "done" : value > req.max ? "over" : ""}"><strong>${req.label}</strong><div class="bar"><span style="width:${pct}%"></span></div><span class="status-text">${value}/${req.min} · ${text}</span></div>`;
  }).join("");
}
function compareBadges(course) {
  const system = systemPlan.find((item) => item.code === course.code);
  const hasOffering = offerings.some((item) => item.code === course.code);
  const badges = [];
  if (course.systemOnly) badges.push({ text: "仅系统", level: "warn" });
  else if (!system) badges.push({ text: "仅Word", level: "bad" });
  else {
    const diffs = [];
    if (normalizeName(system.name) !== normalizeName(course.name)) diffs.push("名称");
    if (Number(system.credits) !== Number(course.credits)) diffs.push("学分");
    badges.push(diffs.length ? { text: `系统不同：${diffs.join("/")}`, level: "warn" } : { text: "系统一致", level: "ok" });
  }
  badges.push(hasOffering ? { text: "有开课时间", level: "ok" } : { text: "未见开课时间", level: "warn" });
  return badges;
}
function renderDiffs() {
  const diffs = collectDiffs();
  document.getElementById("diffCount").textContent = `${diffs.length} 项`;
  document.getElementById("diffList").innerHTML = diffs.map((item) => `<div class="diff-item"><strong>${item.code}</strong><p>${item.text}</p></div>`).join("");
}
function collectDiffs() {
  const diffs = [
    { code: "学硕总要求", text: "Word：总学分不低于28，其中必修12、选修13、培养过程3。系统截图未显示顶部汇总要求，页面以 Word 为毕业标准基准。" },
    { code: "政治理论课", text: "Word 包含中国式现代化理论与实践、当代社会思潮辨析、马克思主义与当代科技；系统截图显示新时代中国特色社会主义理论与实践、习近平新时代中国特色社会主义思想研究等课程，代码和名称存在替换。" },
    { code: "英语课", text: "Word 学术英语/跨文化国际传播英语代码为 21000101913/21000102013；系统截图为 2100010191/2100010201，代码不同。" },
    { code: "统计与计量分析方法", text: "Word 为 2060321621；系统截图为 2060311621，代码不同。" },
    { code: "建筑设计方法论", text: "Word 开课学期为春；系统截图显示秋。" },
    { code: "气候韧性与低碳城市设计", text: "Word 开课学期为春；系统截图显示秋。" },
  ];
  courses.forEach((course) => {
    const system = systemPlan.find((item) => item.code === course.code);
    if (!system) diffs.push({ code: course.code, text: `Word 有该课：${course.name}；系统截图未见同代码课程。` });
    else if (normalizeName(system.name) !== normalizeName(course.name) || Number(system.credits) !== Number(course.credits)) diffs.push({ code: course.code, text: `Word：${course.name} ${course.credits}分；系统：${system.name} ${system.credits}分。` });
  });
  systemPlan.forEach((item) => { if (!courses.some((course) => course.code === item.code)) diffs.push({ code: item.code, text: `系统有该课：${item.name}（${item.category}，${item.credits}学分）；Word 未见同代码。` }); });
  return dedupeDiffs(diffs);
}
function findConflicts(items) { const seen = new Map(), conflicts = new Set(); items.forEach((course) => offeringKeys(getChosenOffering(course.code), state.times[course.code]).forEach((key) => { if (!key) return; if (seen.has(key)) conflicts.add(key); seen.set(key, course.code); })); return conflicts; }
function getChosenOffering(code) { const opts = offerings.filter((item) => item.code === code); if (!opts.length) return null; return opts[Number(state.classChoice[code] || 0)] || opts[0]; }
function offeringKeys(offering, customTime) { if (offering) return offering.times.flatMap(expandTimeKeys); return [timeKey(customTime)]; }
function timeKey(time) { return time && time.day && time.slot ? `${time.day}-${time.slot}` : ""; }
function expandTimeKeys(time) { const nums = (time.slot.match(/\d+/g) || []).map(Number); if (nums.length < 2) return [timeKey(time)]; const weeks = expandWeeks(time.weeks), keys = []; for (let n = nums[0]; n <= nums[1]; n++) weeks.forEach((week) => keys.push(`${time.day}-${n}-${week}`)); return keys; }
function expandWeeks(text = "") { const range = text.match(/(\d+)\s*-\s*(\d+)/); if (!range) return ["all"]; const weeks = []; for (let i = Number(range[1]); i <= Number(range[2]); i++) weeks.push(i); if (text.includes("单周")) return weeks.filter((i) => i % 2); if (text.includes("双周")) return weeks.filter((i) => i % 2 === 0); return weeks; }
function slotRange(slotText = "") { const nums = (slotText.match(/\d+/g) || []).map(Number); return nums.length < 2 ? { start: 0, end: 0 } : { start: nums[0], end: nums[1] }; }
function rangesOverlap(a, b) { return a.start <= b.end && b.start <= a.end; }
function groupBy(items, getter) { return items.reduce((acc, item) => { const key = getter(item); acc[key] = acc[key] || []; acc[key].push(item); return acc; }, {}); }
function sumCredits(items) { return items.reduce((sum, course) => sum + course.credits, 0); }
function normalizeName(name) { return name.replace(/[（(].*?[）)]/g, "").replace(/[ⅠⅡ]/g, "").replace(/\s/g, ""); }
function dedupeDiffs(items) { const seen = new Set(); return items.filter((item) => { const key = `${item.code}-${item.text}`; if (seen.has(key)) return false; seen.add(key); return true; }); }
function render() { renderCourses(); renderSummary(); renderSchedule(); renderRequirements(); renderDiffs(); }

document.addEventListener("change", (event) => {
  const checkbox = event.target.closest("input[type='checkbox'][data-code]");
  if (checkbox) { state.selected = checkbox.checked ? [...new Set([...state.selected, checkbox.dataset.code])] : state.selected.filter((code) => code !== checkbox.dataset.code); saveState(); render(); return; }
  const timeInput = event.target.closest("[data-time][data-code]");
  if (timeInput) { const code = timeInput.dataset.code; state.times[code] = state.times[code] || {}; state.times[code][timeInput.dataset.time] = timeInput.value; saveState(); renderSchedule(); renderRequirements(); return; }
  const classInput = event.target.closest("[data-class-code]");
  if (classInput) { state.classChoice[classInput.dataset.classCode] = classInput.value; saveState(); renderSchedule(); renderRequirements(); }
});
document.getElementById("courseSearch").addEventListener("input", renderCourses);
document.getElementById("termFilter").addEventListener("change", renderSchedule);
document.getElementById("clearSelection").addEventListener("click", () => { state.selected = []; state.times = {}; state.classChoice = {}; saveState(); render(); });
document.getElementById("selectMinimum").addEventListener("click", () => { state.selected = minimum; saveState(); render(); });
document.body.classList.add("academic");
render();
