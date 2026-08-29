// 这是最适合手动修改的配置文件：课表、训练模板和排程比例都集中在这里。
const APP_CONFIG = {
  semester: { name: '2026–2027学年第1学期', start: '2026-09-07', weeks: 16 },
  ratio: { paper: 3, reading: 1 },
  workoutGoal: { min: 3, recommended: 4, max: 5 },
  courses: [
    {id:'c1',weekday:1,start:'10:10',end:'11:50',period:'3–4节',title:'公共政策专题',place:'中农701',teacher:'郝亚光'},
    {id:'c2',weekday:1,start:'15:30',end:'17:10',period:'7–8节',title:'政治学研究方法',place:'文科楼333',teacher:'陈立夫'},
    {id:'c3',weekday:2,start:'13:30',end:'15:10',period:'5–6节',title:'国家理论专题',place:'文科楼333',teacher:'刘金海'},
    {id:'c4',weekday:4,start:'19:00',end:'20:40',period:'11–12节',title:'县域治理专题',place:'文科楼332',teacher:'卢青青'},
    {id:'c5',weekday:5,start:'10:10',end:'11:50',period:'3–4节',title:'权利理论与福利政治',place:'8315',teacher:'张利明'},
    {id:'c6',weekday:5,start:'13:30',end:'15:10',period:'5–6节',title:'民主理论专题',place:'8111',teacher:'胡平江'}
  ],
  workoutTemplates: [
    {name:'臀腿 A',items:['杠铃臀推 4 × 8–12','罗马尼亚硬拉 4 × 8–10','保加利亚分腿蹲 3 × 10','髋外展 4 × 15','爬坡 20分钟']},
    {name:'臀腿 B',items:['深蹲 4 × 8–10','臀推 4 × 10','箭步蹲 3 × 12','绳索后踢腿 3 × 15','爬坡 20–30分钟']},
    {name:'臀腿轻量日',items:['臀桥 4 × 12','髋外展 4 × 15','后踢腿 3 × 15','爬坡 30–40分钟']},
    {name:'纯爬坡减脂',items:['跑步机爬坡','记录坡度、速度、时间和心率（可选）']}
  ]
};

