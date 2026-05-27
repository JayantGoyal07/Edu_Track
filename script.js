// ════════════════════════════════════════════
// DATA
// ════════════════════════════════════════════
const STUDENTS = [
  {id:1,roll:"EN23CE301026",name:"RUDRANSH DUBEY",age:21,grade:11,gender:"M",gpa:3.8,att:95,score:88,risk:"Low",ds:91,oops:87,python:90,sql:85,ses:"High",beh:"Excellent",tut:true,extra:true,trend:[82,84,86,88,87,89,88]},
  {id:2,roll:"EN23CS301953",name:"SHASHANK SINGH CHOUHAN",age:22,grade:10,gender:"M",gpa:2.1,att:67,score:52,risk:"Critical",ds:48,oops:55,python:58,sql:47,ses:"Low",beh:"Poor",tut:false,extra:false,trend:[60,58,55,52,50,48,52]},
  {id:3,roll:"EN23EL301071",name:"PRABHAV UPADHYAY",age:20,grade:12,gender:"F",gpa:3.5,att:90,score:81,risk:"Low",ds:84,oops:83,python:87,sql:79,ses:"Middle",beh:"Good",tut:false,extra:true,trend:[75,77,79,80,80,82,81]},
  {id:4,roll:"EN23EL301085",name:"SANIYA BAIG",age:21,grade:11,gender:"M",gpa:2.7,att:74,score:64,risk:"Medium",ds:60,oops:69,python:72,sql:58,ses:"Low",beh:"Fair",tut:false,extra:false,trend:[68,66,65,64,62,63,64]},
  {id:5,roll:"EN23EL301096",name:"SUHANI SEN",age:22,grade:9,gender:"F",gpa:3.9,att:98,score:94,risk:"Low",ds:96,oops:95,python:91,sql:92,ses:"High",beh:"Excellent",tut:false,extra:true,trend:[90,91,92,93,94,95,94]},
  {id:6,roll:"EN23IT301002",name:"AADITYA KANTHED",age:20,grade:10,gender:"M",gpa:2.3,att:71,score:58,risk:"High",ds:53,oops:61,python:65,sql:54,ses:"Low",beh:"Poor",tut:false,extra:false,trend:[65,63,62,60,59,57,58]},
  {id:7,roll:"EN23IT301003",name:"AAKRITI JAISWAL",age:21,grade:12,gender:"F",gpa:3.6,att:93,score:85,risk:"Low",ds:88,oops:90,python:82,sql:80,ses:"Middle",beh:"Good",tut:false,extra:true,trend:[80,81,83,84,85,85,85]},
  {id:8,roll:"EN23IT301004",name:"AAYUSH KHANDELWAL",age:22,grade:11,gender:"M",gpa:3.0,att:83,score:72,risk:"Medium",ds:70,oops:74,python:76,sql:68,ses:"Middle",beh:"Good",tut:true,extra:true,trend:[66,68,70,71,72,73,72]},
  {id:9,roll:"EN23IT301005",name:"ABEER BHARADWAJ",age:20,grade:10,gender:"M",gpa:3.3,att:88,score:78,risk:"Low",ds:79,oops:81,python:80,sql:72,ses:"Middle",beh:"Good",tut:true,extra:false,trend:[73,74,75,76,77,79,78]},
  {id:10,roll:"EN23IT301006",name:"ADARSH MALVIYA",age:21,grade:11,gender:"M",gpa:1.8,att:59,score:44,risk:"Critical",ds:40,oops:48,python:51,sql:38,ses:"Low",beh:"Poor",tut:false,extra:false,trend:[55,52,50,48,46,43,44]},
  {id:11,roll:"EN23IT301007",name:"ADITYA MAHESHWARI",age:22,grade:9,gender:"M",gpa:3.7,att:92,score:86,risk:"Low",ds:89,oops:88,python:85,sql:82,ses:"High",beh:"Excellent",tut:false,extra:true,trend:[80,81,83,84,85,87,86]},
  {id:12,roll:"EN23IT301008",name:"ADITYA THAKUR",age:20,grade:11,gender:"M",gpa:2.9,att:80,score:69,risk:"Medium",ds:65,oops:73,python:74,sql:64,ses:"Middle",beh:"Fair",tut:true,extra:false,trend:[64,65,67,68,69,70,69]},
  {id:13,roll:"EN23IT301009",name:"AISHWARY BIVARE",age:21,grade:12,gender:"M",gpa:4.0,att:99,score:97,risk:"Low",ds:98,oops:97,python:96,sql:95,ses:"High",beh:"Excellent",tut:false,extra:true,trend:[93,94,95,96,97,97,97]},
  {id:14,roll:"EN23IT301010",name:"AJAY MANDLOI",age:22,grade:10,gender:"M",gpa:2.4,att:70,score:60,risk:"High",ds:56,oops:63,python:67,sql:55,ses:"Low",beh:"Fair",tut:false,extra:false,trend:[65,63,62,61,60,59,60]},
  {id:15,roll:"EN23IT301011",name:"AKSHAT BAGORA",age:20,grade:11,gender:"M",gpa:3.2,att:86,score:75,risk:"Low",ds:76,oops:78,python:77,sql:69,ses:"Middle",beh:"Good",tut:false,extra:true,trend:[70,71,72,73,74,75,75]},
  {id:16,roll:"EN23IT301012",name:"AKSHAT JAIN",age:21,grade:9,gender:"M",gpa:3.4,att:89,score:80,risk:"Low",ds:82,oops:80,python:79,sql:78,ses:"Middle",beh:"Good",tut:true,extra:true,trend:[75,76,77,78,79,80,80]},
  {id:17,roll:"EN23IT301013",name:"AKSHAY PRATAP SINGH GOUR",age:22,grade:12,gender:"M",gpa:2.6,att:76,score:66,risk:"Medium",ds:62,oops:68,python:71,sql:60,ses:"Low",beh:"Fair",tut:true,extra:false,trend:[70,69,68,67,66,66,66]},
  {id:18,roll:"EN23IT301014",name:"AMAR PATEL",age:20,grade:10,gender:"M",gpa:1.5,att:55,score:39,risk:"Critical",ds:35,oops:42,python:46,sql:33,ses:"Low",beh:"Poor",tut:false,extra:false,trend:[50,48,45,42,40,38,39]},
  {id:19,roll:"EN23IT301015",name:"ANKIT RATHOR",age:21,grade:11,gender:"M",gpa:3.1,att:85,score:73,risk:"Low",ds:73,oops:75,python:75,sql:70,ses:"Middle",beh:"Good",tut:false,extra:false,trend:[68,69,70,71,72,73,73]},
  {id:20,roll:"EN23IT301016",name:"ANNU PATEL",age:22,grade:12,gender:"M",gpa:3.9,att:97,score:93,risk:"Low",ds:95,oops:94,python:90,sql:92,ses:"High",beh:"Excellent",tut:false,extra:true,trend:[89,90,91,92,93,93,93]},
  {id:21,roll:"EN23IT301017",name:"ANSH PATIDAR",age:20,grade:11,gender:"M",gpa:3.8,att:95,score:88,risk:"Low",ds:91,oops:87,python:90,sql:85,ses:"High",beh:"Excellent",tut:true,extra:true,trend:[82,84,86,88,87,89,88]},
  {id:22,roll:"EN23IT301018",name:"ANUBHAV PANDEY",age:21,grade:10,gender:"M",gpa:2.1,att:67,score:52,risk:"Critical",ds:48,oops:55,python:58,sql:47,ses:"Low",beh:"Poor",tut:false,extra:false,trend:[60,58,55,52,50,48,52]},
  {id:23,roll:"EN23IT301019",name:"ANUJ UNIYAL",age:22,grade:12,gender:"M",gpa:3.5,att:90,score:81,risk:"Low",ds:84,oops:83,python:87,sql:79,ses:"Middle",beh:"Good",tut:false,extra:true,trend:[75,77,79,80,80,82,81]},
  {id:24,roll:"EN23IT301020",name:"ANUP YADAV",age:20,grade:11,gender:"M",gpa:2.7,att:74,score:64,risk:"Medium",ds:60,oops:69,python:72,sql:58,ses:"Low",beh:"Fair",tut:false,extra:false,trend:[68,66,65,64,62,63,64]},
  {id:25,roll:"EN23IT301021",name:"ANURAG MANDLOI",age:21,grade:9,gender:"M",gpa:3.9,att:98,score:94,risk:"Low",ds:96,oops:95,python:91,sql:92,ses:"High",beh:"Excellent",tut:false,extra:true,trend:[90,91,92,93,94,95,94]},
  {id:26,roll:"EN23IT301023",name:"ARITRA HAZRA",age:22,grade:10,gender:"M",gpa:2.3,att:71,score:58,risk:"High",ds:53,oops:61,python:65,sql:54,ses:"Low",beh:"Poor",tut:false,extra:false,trend:[65,63,62,60,59,57,58]},
  {id:27,roll:"EN23IT301024",name:"ARNAV JAISWAL",age:20,grade:12,gender:"M",gpa:3.6,att:93,score:85,risk:"Low",ds:88,oops:90,python:82,sql:80,ses:"Middle",beh:"Good",tut:false,extra:true,trend:[80,81,83,84,85,85,85]},
  {id:28,roll:"EN23IT301025",name:"ARPIT DEVDA",age:21,grade:11,gender:"M",gpa:3.0,att:83,score:72,risk:"Medium",ds:70,oops:74,python:76,sql:68,ses:"Middle",beh:"Good",tut:true,extra:true,trend:[66,68,70,71,72,73,72]},
  {id:29,roll:"EN23IT301026",name:"ARYAN SHARMA",age:22,grade:10,gender:"M",gpa:3.3,att:88,score:78,risk:"Low",ds:79,oops:81,python:80,sql:72,ses:"Middle",beh:"Good",tut:true,extra:false,trend:[73,74,75,76,77,79,78]},
  {id:30,roll:"EN23IT301028",name:"AVADHI DHANOTIYA",age:20,grade:11,gender:"F",gpa:1.8,att:59,score:44,risk:"Critical",ds:40,oops:48,python:51,sql:38,ses:"Low",beh:"Poor",tut:false,extra:false,trend:[55,52,50,48,46,43,44]},
  {id:31,roll:"EN23IT301029",name:"AVIJIT ANAND",age:21,grade:9,gender:"M",gpa:3.7,att:92,score:86,risk:"Low",ds:89,oops:88,python:85,sql:82,ses:"High",beh:"Excellent",tut:false,extra:true,trend:[80,81,83,84,85,87,86]},
  {id:32,roll:"EN23IT301030",name:"AVIRAL PATIL",age:22,grade:11,gender:"M",gpa:2.9,att:80,score:69,risk:"Medium",ds:65,oops:73,python:74,sql:64,ses:"Middle",beh:"Fair",tut:true,extra:false,trend:[64,65,67,68,69,70,69]},
  {id:33,roll:"EN23IT301031",name:"AYUSH CHOUDHARY",age:20,grade:12,gender:"M",gpa:4.0,att:99,score:97,risk:"Low",ds:98,oops:97,python:96,sql:95,ses:"High",beh:"Excellent",tut:false,extra:true,trend:[93,94,95,96,97,97,97]},
  {id:34,roll:"EN23IT301032",name:"AYUSH DANDOTIYA",age:21,grade:10,gender:"M",gpa:2.4,att:70,score:60,risk:"High",ds:56,oops:63,python:67,sql:55,ses:"Low",beh:"Fair",tut:false,extra:false,trend:[65,63,62,61,60,59,60]},
  {id:35,roll:"EN23IT301033",name:"AYUSHI JAISWAL",age:22,grade:11,gender:"F",gpa:3.2,att:86,score:75,risk:"Low",ds:76,oops:78,python:77,sql:69,ses:"Middle",beh:"Good",tut:false,extra:true,trend:[70,71,72,73,74,75,75]},
  {id:36,roll:"EN23IT301035",name:"BHAVESH GUPTA",age:20,grade:9,gender:"M",gpa:3.4,att:89,score:80,risk:"Low",ds:82,oops:80,python:79,sql:78,ses:"Middle",beh:"Good",tut:true,extra:true,trend:[75,76,77,78,79,80,80]},
  {id:37,roll:"EN23IT301037",name:"BHUMI BALDWA",age:21,grade:12,gender:"F",gpa:2.6,att:76,score:66,risk:"Medium",ds:62,oops:68,python:71,sql:60,ses:"Low",beh:"Fair",tut:true,extra:false,trend:[70,69,68,67,66,66,66]},
  {id:38,roll:"EN23IT301038",name:"BHUMI MANDLOI",age:22,grade:10,gender:"F",gpa:1.5,att:55,score:39,risk:"Critical",ds:35,oops:42,python:46,sql:33,ses:"Low",beh:"Poor",tut:false,extra:false,trend:[50,48,45,42,40,38,39]},
  {id:39,roll:"EN23IT301040",name:"CHINMAY PANDEY",age:20,grade:11,gender:"M",gpa:3.1,att:85,score:73,risk:"Low",ds:73,oops:75,python:75,sql:70,ses:"Middle",beh:"Good",tut:false,extra:false,trend:[68,69,70,71,72,73,73]},
  {id:40,roll:"EN23IT301041",name:"DEEPALI NIGAM",age:21,grade:12,gender:"F",gpa:3.9,att:97,score:93,risk:"Low",ds:95,oops:94,python:90,sql:92,ses:"High",beh:"Excellent",tut:false,extra:true,trend:[89,90,91,92,93,93,93]},
  {id:41,roll:"EN23IT301043",name:"DEVANSH KORDE",age:22,grade:11,gender:"M",gpa:3.8,att:95,score:88,risk:"Low",ds:91,oops:87,python:90,sql:85,ses:"High",beh:"Excellent",tut:true,extra:true,trend:[82,84,86,88,87,89,88]},
  {id:42,roll:"EN23IT301045",name:"GARIMA YADAV",age:20,grade:10,gender:"F",gpa:2.1,att:67,score:52,risk:"Critical",ds:48,oops:55,python:58,sql:47,ses:"Low",beh:"Poor",tut:false,extra:false,trend:[60,58,55,52,50,48,52]},
  {id:43,roll:"EN23IT301046",name:"GAURI RAWATE",age:21,grade:12,gender:"F",gpa:3.5,att:90,score:81,risk:"Low",ds:84,oops:83,python:87,sql:79,ses:"Middle",beh:"Good",tut:false,extra:true,trend:[75,77,79,80,80,82,81]},
  {id:44,roll:"EN23IT301047",name:"GAUTAM DHARVIYA",age:22,grade:11,gender:"M",gpa:2.7,att:74,score:64,risk:"Medium",ds:60,oops:69,python:72,sql:58,ses:"Low",beh:"Fair",tut:false,extra:false,trend:[68,66,65,64,62,63,64]},
  {id:45,roll:"EN23IT301049",name:"HARSHIL JAIN",age:21,grade:10,gender:"M",gpa:2.3,att:71,score:58,risk:"High",ds:53,oops:61,python:65,sql:54,ses:"Low",beh:"Poor",tut:false,extra:false,trend:[65,63,62,60,59,57,58]},
  {id:46,roll:"EN23IT301050",name:"HARSHIL PODDAR",age:22,grade:12,gender:"M",gpa:3.6,att:93,score:85,risk:"Low",ds:88,oops:90,python:82,sql:80,ses:"Middle",beh:"Good",tut:false,extra:true,trend:[80,81,83,84,85,85,85]},
  {id:47,roll:"EN23IT301051",name:"HARSHIT DHAKAD",age:20,grade:11,gender:"M",gpa:3.0,att:83,score:72,risk:"Medium",ds:70,oops:74,python:76,sql:68,ses:"Middle",beh:"Good",tut:true,extra:true,trend:[66,68,70,71,72,73,72]},
  {id:48,roll:"EN23IT301052",name:"HASHITA BATHAM",age:21,grade:10,gender:"F",gpa:3.3,att:88,score:78,risk:"Low",ds:79,oops:81,python:80,sql:72,ses:"Middle",beh:"Good",tut:true,extra:false,trend:[73,74,75,76,77,79,78]},
  {id:49,roll:"EN23IT301055",name:"HUSAIN LOOMWALA",age:22,grade:11,gender:"M",gpa:1.8,att:59,score:44,risk:"Critical",ds:40,oops:48,python:51,sql:38,ses:"Low",beh:"Poor",tut:false,extra:false,trend:[55,52,50,48,46,43,44]},
  {id:50,roll:"EN23IT301056",name:"ISHITA KASLIWAL",age:20,grade:9,gender:"F",gpa:3.7,att:92,score:86,risk:"Low",ds:89,oops:88,python:85,sql:82,ses:"High",beh:"Excellent",tut:false,extra:true,trend:[80,81,83,84,85,87,86]},
  {id:51,roll:"EN23IT301057",name:"JAYANT GOYAL",age:21,grade:11,gender:"M",gpa:2.9,att:80,score:69,risk:"Medium",ds:65,oops:73,python:74,sql:64,ses:"Middle",beh:"Fair",tut:true,extra:false,trend:[64,65,67,68,69,70,69]},
  {id:52,roll:"EN23IT301058",name:"JESHIKA KHARD",age:22,grade:12,gender:"F",gpa:4.0,att:99,score:97,risk:"Low",ds:98,oops:97,python:96,sql:95,ses:"High",beh:"Excellent",tut:false,extra:true,trend:[93,94,95,96,97,97,97]},
  {id:53,roll:"EN23IT301059",name:"KANIKA JAIN",age:20,grade:10,gender:"F",gpa:2.4,att:70,score:60,risk:"High",ds:56,oops:63,python:67,sql:55,ses:"Low",beh:"Fair",tut:false,extra:false,trend:[65,63,62,61,60,59,60]},
  {id:54,roll:"EN23IT301060",name:"KANISHKA YADUWANSHI",age:21,grade:11,gender:"F",gpa:3.2,att:86,score:75,risk:"Low",ds:76,oops:78,python:77,sql:69,ses:"Middle",beh:"Good",tut:false,extra:true,trend:[70,71,72,73,74,75,75]},
];

const riskColor = r => ({Critical:"#f43f5e",High:"#f59e0b",Medium:"#4f8ef7",Low:"#10b981"}[r]||"#8892a4");
const riskBg = r => ({Critical:"rgba(244,63,94,.12)",High:"rgba(245,158,11,.12)",Medium:"rgba(79,142,247,.12)",Low:"rgba(16,185,129,.12)"}[r]||"transparent");
const riskClass = r => ({Critical:"badge-critical",High:"badge-high",Medium:"badge-medium",Low:"badge-low"}[r]||"");
const initials = n => n.split(" ").map(x=>x[0]).join("");
const avg4 = s => Math.round((s.ds+s.oops+s.python+s.sql)/4);

// ════════════════════════════════════════════
// NAVIGATION
// ════════════════════════════════════════════
const PAGE_META = {
  dashboard:["Overview Dashboard","System-wide academic performance at a glance"],
  predict:["Student Assessment","Rule-based performance analysis and academic risk evaluation"],
  students:["Student Roster","Full directory with risk status and academic indicators"],
  analytics:["Deep Analytics","Multi-dimensional performance insights & correlations"],
  interventions:["Intervention Center","Evidence-based programs for at-risk student support"],
  compare:["Student Comparison","Side-by-side academic profile analysis"],
  reports:["Reports & Exports","Generate, download, and print academic reports"],
  settings:["Settings","Application preferences and system configuration"],
};

let chartsInit = {};
function showView(v){
  document.querySelectorAll('.view').forEach(el=>el.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(el=>el.classList.remove('active'));
  document.getElementById('view-'+v).classList.add('active');
  const nb = document.getElementById('nav-'+v);
  if(nb) nb.classList.add('active');
  const [t,s]=PAGE_META[v]||["",""];
  document.getElementById('page-title').textContent=t;
  document.getElementById('page-sub').textContent=s;
  if(v==='students'&&!chartsInit.students){chartsInit.students=true;renderStudents()}
  if(v==='analytics'&&!chartsInit.analytics){chartsInit.analytics=true;setTimeout(initAnalyticsCharts,50)}
  if(v==='interventions'&&!chartsInit.interventions){chartsInit.interventions=true;renderInterventions()}
  if(v==='compare') populateCompareSelects();
  if(v==='reports') renderReportHistory();
  // close notif panel
  document.getElementById('notif-panel').classList.remove('open');
}

// ════════════════════════════════════════════
// THEME
// ════════════════════════════════════════════
let isDark = true;
function toggleTheme(){
  isDark=!isDark;
  document.documentElement.setAttribute('data-theme',isDark?'dark':'light');
  document.getElementById('theme-icon').textContent=isDark?'☀️':'🌙';
  document.getElementById('theme-lbl').textContent=isDark?'Light':'Dark';
  const sb=document.getElementById('settings-theme-btn');
  if(sb) sb.textContent=isDark?'Switch to Light':'Switch to Dark';
  toast(`Switched to ${isDark?'dark':'light'} mode`,'info');
}

// ════════════════════════════════════════════
// DATE
// ════════════════════════════════════════════
document.getElementById('date-pill').textContent=new Date().toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric',year:'numeric'});

// ════════════════════════════════════════════
// TOAST
// ════════════════════════════════════════════
function toast(msg,type='success'){
  const icons={success:'✅',error:'❌',info:'ℹ️',warn:'⚠️'};
  const tc=document.getElementById('toast-container');
  const t=document.createElement('div');
  t.className='toast';
  t.innerHTML=`<div class="toast-icon" style="background:${type==='success'?'var(--success-dim)':type==='error'?'var(--danger-dim)':type==='warn'?'var(--amber-dim)':'var(--blue-dim)'}">${icons[type]||'ℹ️'}</div><div class="toast-text">${msg}</div>`;
  tc.appendChild(t);
  setTimeout(()=>{t.style.opacity='0';t.style.transition='opacity .3s';setTimeout(()=>t.remove(),300)},3200);
}

// ════════════════════════════════════════════
// NOTIFICATIONS
// ════════════════════════════════════════════
function toggleNotif(){
  document.getElementById('notif-panel').classList.toggle('open');
}

// ════════════════════════════════════════════
// DASHBOARD
// ════════════════════════════════════════════
function initDashboard(){
  const critical=STUDENTS.filter(s=>s.risk==="Critical"||s.risk==="High");
  const avgScore=Math.round(STUDENTS.reduce((a,s)=>a+s.score,0)/STUDENTS.length);
  const avgAtt=Math.round(STUDENTS.reduce((a,s)=>a+s.att,0)/STUDENTS.length);

  // KPIs
  const kpis=[
    {label:"Total Students",val:String(STUDENTS.length),sub:"Active Enrollment",icon:'<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>',color:"var(--accent)",trend:"+4.2%",up:true},
    {label:"Average Score",val:avgScore+"%",sub:"This Semester",icon:'<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',color:"var(--blue)",trend:"+2.1pts",up:true},
    {label:"Attendance Rate",val:avgAtt+"%",sub:"Weekly Average",icon:'<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',color:"var(--success)",trend:"+1.3%",up:true},
    {label:"At-Risk Students",val:String(critical.length),sub:"Need Intervention",icon:'<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',color:"var(--danger)",trend:"↓1 this week",up:true},
  ];
  document.getElementById('kpi-row').innerHTML=kpis.map(k=>`
    <div class="kpi">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px">
        <div class="kpi-icon" style="background:${k.color}22"><svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="${k.color}" stroke-width="2">${k.icon}</svg></div>
        <span class="trend ${k.up?'trend-up':'trend-dn'}">${k.up?'↑':'↓'} ${k.trend}</span>
      </div>
      <div class="kpi-val" style="color:${k.color==='var(--danger)'?'var(--danger)':'var(--text)'}">${k.val}</div>
      <div class="kpi-lbl">${k.label}</div>
      <div class="kpi-sub" style="color:${k.color}">${k.sub}</div>
    </div>`).join('');

  // Trend Chart
  new Chart(document.getElementById('trendChart'),{type:'line',data:{labels:['Sep','Oct','Nov','Dec','Jan','Feb','Mar'],datasets:[
    {label:'Class Avg',data:[72,74,71,69,73,76,78],borderColor:'#00e5be',backgroundColor:'rgba(0,229,190,.1)',fill:true,tension:.4,borderWidth:2.5,pointBackgroundColor:'#00e5be',pointRadius:3},
    {label:'Target (75%)',data:[75,75,75,75,75,75,75],borderColor:'#f59e0b',borderDash:[5,5],borderWidth:1.5,fill:false,pointRadius:0},
  ]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:'#8892a4',font:{size:11},boxWidth:10}},tooltip:{backgroundColor:'var(--card)',borderColor:'var(--border)',borderWidth:1,titleColor:'var(--text)',bodyColor:'var(--muted)'}},scales:{x:{grid:{color:'rgba(26,47,80,.5)'},ticks:{color:'#8892a4',font:{size:11}}},y:{grid:{color:'rgba(26,47,80,.5)'},ticks:{color:'#8892a4',font:{size:11}},min:65,max:82}}}});

  // Risk Donut
  new Chart(document.getElementById('riskChart'),{type:'doughnut',data:{labels:['Low','Medium','High','Critical'],datasets:[{data:[12,5,2,1],backgroundColor:['#10b981','#4f8ef7','#f59e0b','#f43f5e'],borderWidth:0,hoverOffset:4}]},options:{responsive:true,maintainAspectRatio:false,cutout:'68%',plugins:{legend:{display:false},tooltip:{backgroundColor:'#101e36',borderColor:'#1a2f50',borderWidth:1,titleColor:'#e2e8f0',bodyColor:'#8892a4'}}}});
  document.getElementById('risk-legend').innerHTML=[['Low Risk',12,'#10b981'],['Medium',5,'#4f8ef7'],['High Risk',2,'#f59e0b'],['Critical',1,'#f43f5e']].map(([l,n,c])=>`<div style="display:flex;justify-content:space-between;align-items:center"><div style="display:flex;align-items:center;gap:7px"><div style="width:8px;height:8px;border-radius:2px;background:${c}"></div><span style="font-size:12px;color:var(--muted)">${l}</span></div><span style="font-size:13px;font-weight:600;color:${c};font-family:var(--mono)">${n}</span></div>`).join('');

  // Subject Chart
  new Chart(document.getElementById('subChart'),{type:'bar',data:{labels:['DS','OOPS','PYTHON','SQL'],datasets:[{label:'Your School',data:[71,74,76,69],backgroundColor:'#00e5be',borderRadius:4,barPercentage:.6},{label:'District',data:[68,71,73,66],backgroundColor:'#4f8ef7',borderRadius:4,barPercentage:.6}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:'#8892a4',font:{size:10},boxWidth:8}},tooltip:{backgroundColor:'#101e36',borderColor:'#1a2f50',borderWidth:1}},scales:{x:{grid:{display:false},ticks:{color:'#8892a4',font:{size:11}}},y:{grid:{color:'rgba(26,47,80,.5)'},ticks:{color:'#8892a4',font:{size:11}},min:60,max:82}}}});

  // Retention
  new Chart(document.getElementById('retChart'),{type:'line',data:{labels:['2020','2021','2022','2023','2024','2025'],datasets:[{label:'Retention %',data:[88,85,87,89,91,93],borderColor:'#10b981',backgroundColor:'rgba(16,185,129,.1)',fill:true,tension:.4,borderWidth:2.5,pointBackgroundColor:'#10b981',pointRadius:4}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{backgroundColor:'#101e36',borderColor:'#1a2f50',borderWidth:1}},scales:{x:{grid:{color:'rgba(26,47,80,.5)'},ticks:{color:'#8892a4',font:{size:11}}},y:{grid:{color:'rgba(26,47,80,.5)'},ticks:{color:'#8892a4',font:{size:11}},min:82,max:97}}}});

  // Attendance Bands
  const bands=[{l:'95-100%',n:STUDENTS.filter(s=>s.att>=95).length,c:'#10b981'},{l:'85-94%',n:STUDENTS.filter(s=>s.att>=85&&s.att<95).length,c:'#00e5be'},{l:'75-84%',n:STUDENTS.filter(s=>s.att>=75&&s.att<85).length,c:'#4f8ef7'},{l:'65-74%',n:STUDENTS.filter(s=>s.att>=65&&s.att<75).length,c:'#f59e0b'},{l:'<65%',n:STUDENTS.filter(s=>s.att<65).length,c:'#f43f5e'}];
  new Chart(document.getElementById('attChart'),{type:'bar',data:{labels:bands.map(b=>b.l),datasets:[{label:'Students',data:bands.map(b=>b.n),backgroundColor:bands.map(b=>b.c),borderRadius:5,barPercentage:.65}]},options:{responsive:true,maintainAspectRatio:false,indexAxis:'y',plugins:{legend:{display:false},tooltip:{backgroundColor:'#101e36',borderColor:'#1a2f50',borderWidth:1}},scales:{x:{grid:{color:'rgba(26,47,80,.5)'},ticks:{color:'#8892a4',font:{size:11},stepSize:1}},y:{grid:{display:false},ticks:{color:'#8892a4',font:{size:11}}}}}});

  // At-risk
  document.getElementById('risk-count-sub').textContent=`${critical.length} students flagged for priority intervention`;
  document.getElementById('at-risk-list').innerHTML=critical.map(s=>`
    <div class="risk-row" style="grid-template-columns:2fr 1fr 1fr 1fr 2fr;border-color:${riskColor(s.risk)}33;">
      <div style="display:flex;align-items:center;gap:10px">
        <div style="width:34px;height:34px;border-radius:50%;background:${riskBg(s.risk)};display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:${riskColor(s.risk)};flex-shrink:0">${initials(s.name)}</div>
        <div><div style="font-size:13px;font-weight:600">${s.name}</div><div style="font-size:11px;color:var(--muted)">Grade ${s.grade} · GPA ${s.gpa.toFixed(1)}</div></div>
      </div>
      <div style="text-align:center"><div style="font-size:17px;font-weight:700;font-family:var(--mono);color:${s.score<50?'var(--danger)':'var(--amber)'}">${s.score}%</div><div style="font-size:10px;color:var(--muted)">Score</div></div>
      <div style="text-align:center"><div style="font-size:17px;font-weight:700;font-family:var(--mono);color:${s.att<70?'var(--danger)':'var(--amber)'}">${s.att}%</div><div style="font-size:10px;color:var(--muted)">Attendance</div></div>
      <span class="badge ${riskClass(s.risk)}">${s.risk}</span>
      <div style="display:flex;gap:7px;justify-content:flex-end">
        <button class="btn btn-ghost btn-sm" onclick="openStudentModal(${s.id})">View Profile</button>
        <button class="btn btn-primary btn-sm" onclick="showView('interventions')">Intervene</button>
      </div>
    </div>`).join('');
}

// ════════════════════════════════════════════
// STUDENTS TABLE
// ════════════════════════════════════════════
let activeFilter='All';
function renderStudents(){
  const filters=document.getElementById('risk-filters');
  if(!filters.innerHTML){
    filters.innerHTML=['All','Critical','High','Medium','Low'].map(r=>`
      <button onclick="setFilter('${r}')" id="sf-${r}" class="btn btn-ghost btn-sm" style="font-size:11px;">${r}</button>`).join('');
    updateFilterBtns();
  }
  filterStudents();
}
function setFilter(r){activeFilter=r;updateFilterBtns();filterStudents()}
function updateFilterBtns(){
  ['All','Critical','High','Medium','Low'].forEach(r=>{
    const b=document.getElementById('sf-'+r);if(!b)return;
    if(r===activeFilter){b.style.background=r==='All'?'var(--accent)':riskColor(r);b.style.color=r==='All'?'#000':'#fff';b.style.border='1px solid transparent'}
    else{b.style.background='transparent';b.style.color='var(--muted)';b.style.border='1px solid var(--border)'}
  });
}
function filterStudents(){
  const q=(document.getElementById('stu-search').value||'').toLowerCase();
  const filtered=STUDENTS.filter(s=>(activeFilter==='All'||s.risk===activeFilter)&&(s.name.toLowerCase().includes(q)||String(s.grade).includes(q)));
  document.getElementById('stu-tbody').innerHTML=filtered.map((s,i)=>{
    const av=avg4(s);
    const bars=['ds','oops','python','sql'].map(sub=>`<div style="width:8px;height:${Math.max(8,Math.round(s[sub]/100*30))}px;border-radius:2px;background:${s[sub]>=80?'var(--success)':s[sub]>=65?'var(--blue)':s[sub]>=50?'var(--amber)':'var(--danger)'};" title="${sub}: ${s[sub]}%"></div>`).join('');
    return`<tr style="cursor:pointer" onclick="openStudentModal(${s.id})">
      <td><div style="display:flex;align-items:center;gap:9px"><div style="width:31px;height:31px;border-radius:50%;background:${riskBg(s.risk)};display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:${riskColor(s.risk)};flex-shrink:0">${initials(s.name)}</div><div><div style="font-size:13px;font-weight:600">${s.name}</div><div style="font-size:11px;color:var(--muted)">${s.roll || ('ID #' + String(s.id).padStart(4,'0'))} · ${s.gender}</div></div></div></td>
      <td style="font-family:var(--mono);font-weight:600">${s.grade}</td>
      <td style="font-family:var(--mono);font-weight:600;color:${s.gpa>=3.5?'var(--success)':s.gpa>=2.5?'var(--amber)':'var(--danger)'}">${s.gpa.toFixed(1)}</td>
      <td><div style="font-size:13px;font-weight:600;font-family:var(--mono);color:${s.att<70?'var(--danger)':s.att<80?'var(--amber)':'var(--success)'}">${s.att}%</div><div class="progress" style="width:55px;margin-top:4px"><div class="progress-fill" style="width:${s.att}%;background:${s.att<70?'var(--danger)':s.att<80?'var(--amber)':'var(--success)'}"></div></div></td>
      <td style="font-family:var(--mono);font-weight:600;color:${av>=75?'var(--success)':av>=60?'var(--amber)':'var(--danger)'}">${av}%</td>
      <td><div class="mini-bars">${bars}</div></td>
      <td><span class="badge ${riskClass(s.risk)}">${s.risk}</span></td>
      <td><span style="font-size:12px;color:var(--muted)">${s.ses}</span></td>
      <td><button class="btn btn-ghost btn-sm" onclick="event.stopPropagation();showView('predict')">Assess ↗</button></td>
    </tr>`;
  }).join('');
  document.getElementById('stu-count-lbl').textContent=`Showing ${filtered.length} of ${STUDENTS.length} students`;
}

// ════════════════════════════════════════════
// STUDENT MODAL
// ════════════════════════════════════════════
function openStudentModal(id){
  const s=STUDENTS.find(x=>x.id===id);if(!s)return;
  document.getElementById('modal-name').textContent=s.name;
  document.getElementById('modal-sub').textContent=`Grade ${s.grade} · ${s.gender==='M'?'Male':s.gender==='F'?'Female':'Other'} · Age ${s.age} · ${s.ses} SES`;
  const av=avg4(s);
  const trendDir=s.trend[6]>s.trend[0]?'↑ Improving':'↓ Declining';
  const trendColor=s.trend[6]>s.trend[0]?'var(--success)':'var(--danger)';
  document.getElementById('modal-body').innerHTML=`
    <div style="display:flex;gap:10px;margin-bottom:18px;flex-wrap:wrap">
      <span class="badge ${riskClass(s.risk)}" style="font-size:12px;padding:5px 12px">${s.risk} Risk</span>
      <span style="font-size:12px;padding:5px 12px;background:var(--surface);border-radius:20px;border:1px solid var(--border);color:var(--muted)">Behavior: ${s.beh}</span>
      <span style="font-size:12px;padding:5px 12px;background:var(--surface);border-radius:20px;border:1px solid var(--border);color:${trendColor}">${trendDir}</span>
      ${s.tut?'<span style="font-size:12px;padding:5px 12px;background:var(--success-dim);border-radius:20px;border:1px solid rgba(16,185,129,.3);color:var(--success)">📚 Tutoring</span>':''}
      ${s.extra?'<span style="font-size:12px;padding:5px 12px;background:var(--blue-dim);border-radius:20px;border:1px solid rgba(79,142,247,.3);color:var(--blue)">⚽ Extracurricular</span>':''}
    </div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:18px">
      <div class="stat-box"><div class="stat-val" style="color:${s.gpa>=3.0?'var(--success)':'var(--danger)'}">${s.gpa.toFixed(1)}</div><div class="stat-lbl">GPA</div></div>
      <div class="stat-box"><div class="stat-val" style="color:${s.att>=80?'var(--success)':s.att>=70?'var(--amber)':'var(--danger)'}">${s.att}%</div><div class="stat-lbl">Attendance</div></div>
      <div class="stat-box"><div class="stat-val" style="color:${av>=75?'var(--success)':av>=60?'var(--amber)':'var(--danger)'}">${av}%</div><div class="stat-lbl">Avg Score</div></div>
      <div class="stat-box"><div class="stat-val" style="color:${s.score>=75?'var(--success)':s.score>=60?'var(--amber)':'var(--danger)'}">${s.score}%</div><div class="stat-lbl">Last Exam</div></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:18px">
      <div class="card card-sm">
        <div style="font-size:13px;font-weight:700;margin-bottom:12px">Subject Breakdown</div>
        ${[['DS',s.ds,'var(--blue)'],['OOPS',s.oops,'var(--purple)'],['PYTHON',s.python,'var(--amber)'],['SQL',s.sql,'var(--success)']].map(([name,val,col])=>`
          <div style="margin-bottom:10px">
            <div style="display:flex;justify-content:space-between;margin-bottom:4px">
              <span style="font-size:12px;color:var(--muted)">${name}</span>
              <span style="font-size:12px;font-weight:600;font-family:var(--mono);color:${col}">${val}%</span>
            </div>
            <div class="progress"><div class="progress-fill" style="width:${val}%;background:${col}"></div></div>
          </div>`).join('')}
      </div>
      <div class="card card-sm">
        <div style="font-size:13px;font-weight:700;margin-bottom:10px">Score Trend (7 Months)</div>
        <div style="height:120px;position:relative"><canvas id="modal-trend-chart"></canvas></div>
        <div style="font-size:11px;color:var(--muted);margin-top:8px;text-align:center">Sep → Mar: <span style="color:${trendColor};font-weight:600">${s.trend[0]}% → ${s.trend[6]}%</span></div>
      </div>
    </div>
    <div class="card card-sm">
      <div style="font-size:13px;font-weight:700;margin-bottom:12px">Performance Factors</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
        ${[['Socioeconomic Status',s.ses],['Parent Involvement','Moderate'],['Study Hours','~2h/day'],['Classroom Behavior',s.beh],['Tutoring Support',s.tut?'Yes':'No'],['Extracurricular',s.extra?'Yes':'No']].map(([l,v])=>`<div style="display:flex;justify-content:space-between;padding:7px 10px;background:var(--surface);border-radius:8px"><span style="font-size:12px;color:var(--muted)">${l}</span><span style="font-size:12px;font-weight:600;color:var(--text)">${v}</span></div>`).join('')}
      </div>
    </div>
    <div style="display:flex;gap:10px;margin-top:16px">
      <button class="btn btn-primary btn-sm" onclick="closeModal();showView('predict')">Analyze Student</button>
      <button class="btn btn-outline btn-sm" onclick="closeModal();showView('interventions')">Create Intervention</button>
      <button class="btn btn-ghost btn-sm" onclick="toast('Student report downloaded!','success')">⬇ Download Report</button>
    </div>`;
  document.getElementById('stu-modal').style.display='block';
  // Draw trend chart after render
  setTimeout(()=>{
    const c=document.getElementById('modal-trend-chart');
    if(c){new Chart(c,{type:'line',data:{labels:['Sep','Oct','Nov','Dec','Jan','Feb','Mar'],datasets:[{data:s.trend,borderColor:riskColor(s.risk),backgroundColor:riskBg(s.risk),fill:true,tension:.4,borderWidth:2,pointRadius:3,pointBackgroundColor:riskColor(s.risk)}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{backgroundColor:'#101e36',borderColor:'#1a2f50',borderWidth:1}},scales:{x:{grid:{display:false},ticks:{color:'#8892a4',font:{size:9}}},y:{grid:{color:'rgba(26,47,80,.3)'},ticks:{color:'#8892a4',font:{size:9}},min:Math.min(...s.trend)-5,max:Math.min(100,Math.max(...s.trend)+5)}}}})}
  },50);
}
function closeModal(){document.getElementById('stu-modal').style.display='none'}

// ════════════════════════════════════════════
// ANALYTICS CHARTS
// ════════════════════════════════════════════
function initAnalyticsCharts(){
  // Scatter
  new Chart(document.getElementById('scatChart'),{type:'scatter',data:{datasets:['Low','Medium','High','Critical'].map(r=>({label:r,data:STUDENTS.filter(s=>s.risk===r).map(s=>({x:s.att,y:s.score,name:s.name})),backgroundColor:riskColor(r)+'bb',pointRadius:7}))},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:'#8892a4',font:{size:11},boxWidth:10}},tooltip:{backgroundColor:'#101e36',borderColor:'#1a2f50',borderWidth:1,callbacks:{label:c=>`${c.raw.name}: Att ${c.raw.x}% / Score ${c.raw.y}%`}}},scales:{x:{grid:{color:'rgba(26,47,80,.5)'},ticks:{color:'#8892a4',font:{size:11}},title:{display:true,text:'Attendance %',color:'#8892a4',font:{size:11}},min:50,max:100},y:{grid:{color:'rgba(26,47,80,.5)'},ticks:{color:'#8892a4',font:{size:11}},title:{display:true,text:'Score %',color:'#8892a4',font:{size:11}},min:30,max:100}}}});
  // Radar
  new Chart(document.getElementById('radChart'),{type:'radar',data:{labels:['Attendance','Engagement','Homework','Participation','Prior GPA','Family Support'],datasets:[{label:'Cohort Avg',data:[82,74,78,70,76,65],borderColor:'#4f8ef7',backgroundColor:'rgba(79,142,247,.15)',borderWidth:2,pointBackgroundColor:'#4f8ef7'},{label:'Top 10%',data:[96,92,95,88,97,85],borderColor:'#00e5be',backgroundColor:'rgba(0,229,190,.1)',borderWidth:2,pointBackgroundColor:'#00e5be'}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:'#8892a4',font:{size:11},boxWidth:10}},tooltip:{backgroundColor:'#101e36',borderColor:'#1a2f50',borderWidth:1}},scales:{r:{grid:{color:'rgba(26,47,80,.6)'},ticks:{color:'#8892a4',font:{size:9},backdropColor:'transparent'},pointLabels:{color:'#8892a4',font:{size:11}},min:0,max:100}}}});
  // Distribution
  const ranges=[{l:'90-100',n:STUDENTS.filter(s=>s.score>=90).length,c:'#10b981'},{l:'80-89',n:STUDENTS.filter(s=>s.score>=80&&s.score<90).length,c:'#00e5be'},{l:'70-79',n:STUDENTS.filter(s=>s.score>=70&&s.score<80).length,c:'#4f8ef7'},{l:'60-69',n:STUDENTS.filter(s=>s.score>=60&&s.score<70).length,c:'#f59e0b'},{l:'50-59',n:STUDENTS.filter(s=>s.score>=50&&s.score<60).length,c:'#f43f5e'},{l:'<50',n:STUDENTS.filter(s=>s.score<50).length,c:'#7f1d1d'}];
  new Chart(document.getElementById('distChart'),{type:'bar',data:{labels:ranges.map(r=>r.l),datasets:[{label:'Students',data:ranges.map(r=>r.n),backgroundColor:ranges.map(r=>r.c),borderRadius:5,barPercentage:.6}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{backgroundColor:'#101e36',borderColor:'#1a2f50',borderWidth:1}},scales:{x:{grid:{display:false},ticks:{color:'#8892a4',font:{size:11}}},y:{grid:{color:'rgba(26,47,80,.5)'},ticks:{color:'#8892a4',font:{size:11},stepSize:1}}}}});
  // Multi-line
  new Chart(document.getElementById('multiChart'),{type:'line',data:{labels:['Sep','Oct','Nov','Dec','Jan','Feb','Mar'],datasets:[{label:'Math',data:[68,70,67,66,71,73,75],borderColor:'#4f8ef7',tension:.4,borderWidth:2,pointRadius:3,fill:false},{label:'Science',data:[72,73,71,70,74,76,78],borderColor:'#a78bfa',tension:.4,borderWidth:2,pointRadius:3,fill:false},{label:'English',data:[74,75,73,72,76,78,80],borderColor:'#f59e0b',tension:.4,borderWidth:2,pointRadius:3,fill:false},{label:'History',data:[66,68,65,64,69,70,73],borderColor:'#10b981',tension:.4,borderWidth:2,pointRadius:3,fill:false}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:'#8892a4',font:{size:11},boxWidth:10}},tooltip:{backgroundColor:'#101e36',borderColor:'#1a2f50',borderWidth:1}},scales:{x:{grid:{color:'rgba(26,47,80,.5)'},ticks:{color:'#8892a4',font:{size:11}}},y:{grid:{color:'rgba(26,47,80,.5)'},ticks:{color:'#8892a4',font:{size:11}},min:60,max:84}}}});
}

// ════════════════════════════════════════════
// INTERVENTIONS
// ════════════════════════════════════════════
function renderInterventions(){
  const crit=STUDENTS.filter(s=>s.risk==="Critical"||s.risk==="High");
  document.getElementById('interv-queue').innerHTML=crit.map((s,i)=>{
    const av=avg4(s);const u=s.risk==="Critical"?{l:"URGENT",c:"var(--danger)"}:{l:"ACTION NEEDED",c:"var(--amber)"};
    return`<div style="display:grid;grid-template-columns:22px 2fr 1fr 1fr 1fr 2fr;align-items:center;gap:14px;padding:12px 0;border-bottom:${i<crit.length-1?'1px solid rgba(26,47,80,.4)':'none'}">
      <span style="font-size:15px;font-weight:800;color:var(--faint);font-family:var(--mono)">${i+1}</span>
      <div style="display:flex;align-items:center;gap:9px"><div style="width:33px;height:33px;border-radius:50%;background:${riskBg(s.risk)};display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:${riskColor(s.risk)};flex-shrink:0">${initials(s.name)}</div><div><div style="font-size:13px;font-weight:600">${s.name}</div><div style="font-size:11px;color:var(--muted)">GPA ${s.gpa.toFixed(1)} · Grade ${s.grade}</div></div></div>
      <div><div style="font-size:14px;font-weight:700;font-family:var(--mono);color:${s.att<65?'var(--danger)':'var(--amber)'}">${s.att}%</div><div style="font-size:10px;color:var(--muted)">Attendance</div></div>
      <div><div style="font-size:14px;font-weight:700;font-family:var(--mono);color:var(--danger)">${av}%</div><div style="font-size:10px;color:var(--muted)">Score</div></div>
      <span style="font-size:10px;font-weight:800;padding:3px 9px;border-radius:20px;background:${u.c}22;color:${u.c};border:1px solid ${u.c}44">${u.l}</span>
      <div style="display:flex;gap:7px"><button class="btn btn-primary btn-sm" onclick="openStudentModal(${s.id})">View Profile</button><button class="btn btn-ghost btn-sm" onclick="toast('Intervention plan created for ${s.name}!','success')">Create Plan</button></div>
    </div>`;
  }).join('');

  const strats=[
    {t:"Academic Tutoring Program",d:"One-on-one or small group tutoring 3×/week for Critical & High-risk students. Focuses on core subjects showing the lowest scores.",e:"📚",c:"var(--accent)",n:3,imp:"High"},
    {t:"Attendance Recovery Protocol",d:"Daily check-ins for students with <75% attendance. Mentor assignment, family outreach, and flexible catch-up plans.",e:"📅",c:"var(--amber)",n:4,imp:"High"},
    {t:"Mental Health & Wellbeing",d:"Counselor referrals for behavioral decline. Weekly wellbeing check-ins and stress management resources for at-risk students.",e:"🛡️",c:"var(--purple)",n:3,imp:"Medium"},
    {t:"Peer Learning Circles",d:"Structured study groups pairing at-risk students with high performers. Encourages collaborative learning and mentorship.",e:"👥",c:"var(--blue)",n:5,imp:"Medium"},
    {t:"Parent Engagement Initiative",d:"Monthly parent-teacher conferences, automated progress reports, and family involvement workshops via digital communication portal.",e:"👨‍👩‍👧",c:"var(--success)",n:6,imp:"Medium"},
    {t:"Personalized Learning Plans",d:"Tailored curriculum adjustments and modified assessments for students with documented learning challenges or achievement gaps.",e:"🎯",c:"var(--danger)",n:2,imp:"High"},
  ];
  document.getElementById('strat-grid').innerHTML=strats.map(s=>`
    <div class="strat-card">
      <div class="strat-icon" style="background:${s.c}22">${s.e}</div>
      <div style="flex:1">
        <div style="display:flex;justify-content:space-between;margin-bottom:5px">
          <div style="font-size:13px;font-weight:700">${s.t}</div>
          <span style="font-size:10px;padding:2px 8px;border-radius:20px;background:${s.imp==='High'?'var(--danger-dim)':'var(--amber-dim)'};color:${s.imp==='High'?'var(--danger)':'var(--amber)'}">${s.imp} Impact</span>
        </div>
        <p style="font-size:12px;color:var(--muted);margin:0 0 10px;line-height:1.6">${s.d}</p>
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:11px;color:var(--faint)">${s.n} students enrolled</span>
          <button class="btn btn-outline btn-sm" onclick="toast('${s.t} deployed successfully!','success')">Deploy →</button>
        </div>
      </div>
    </div>`).join('');
}

// ════════════════════════════════════════════
// COMPARE STUDENTS
// ════════════════════════════════════════════
function populateCompareSelects(){
  const opts=STUDENTS.map(s=>`<option value="${s.id}">${s.name} (G${s.grade})</option>`).join('');
  const a=document.getElementById('cmp-a'),b=document.getElementById('cmp-b');
  if(a.options.length<=1){a.innerHTML='<option value="">— Select student —</option>'+opts;b.innerHTML='<option value="">— Select student —</option>'+opts}
}
function renderComparison(){
  const idA=+document.getElementById('cmp-a').value,idB=+document.getElementById('cmp-b').value;
  if(!idA||!idB){document.getElementById('cmp-result').innerHTML='<div class="empty card"><div class="empty-title">Select two different students above.</div></div>';return}
  if(idA===idB){document.getElementById('cmp-result').innerHTML='<div class="empty card"><div class="empty-title">Please select two different students.</div></div>';return}
  const A=STUDENTS.find(s=>s.id===idA),B=STUDENTS.find(s=>s.id===idB);
  const metrics=[
    ['GPA',A.gpa.toFixed(1),B.gpa.toFixed(1),A.gpa>B.gpa],
    ['Avg Score',avg4(A)+'%',avg4(B)+'%',avg4(A)>avg4(B)],
    ['Attendance',A.att+'%',B.att+'%',A.att>B.att],
    ['Last Exam',A.score+'%',B.score+'%',A.score>B.score],
    ['DS',A.ds+'%',B.ds+'%',A.ds>B.ds],
    ['OOPS',A.oops+'%',B.oops+'%',A.oops>B.oops],
    ['PYTHON',A.python+'%',B.python+'%',A.python>B.python],
    ['SQL',A.sql+'%',B.sql+'%',A.sql>B.sql],
    ['Risk Level',A.risk,B.risk,['Low','Medium','High','Critical'].indexOf(A.risk)<['Low','Medium','High','Critical'].indexOf(B.risk)],
    ['Behavior',A.beh,B.beh,['Excellent','Good','Fair','Poor'].indexOf(A.beh)<['Excellent','Good','Fair','Poor'].indexOf(B.beh)],
    ['SES',A.ses,B.ses,false],
    ['Tutoring',A.tut?'Yes':'No',B.tut?'Yes':'No',A.tut&&!B.tut],
  ];
  document.getElementById('cmp-result').innerHTML=`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:16px;align-items:start">
      <div class="compare-col" style="border-top:3px solid ${riskColor(A.risk)}">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
          <div style="width:38px;height:38px;border-radius:50%;background:${riskBg(A.risk)};display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;color:${riskColor(A.risk)}">${initials(A.name)}</div>
          <div><div style="font-size:14px;font-weight:700">${A.name}</div><span class="badge ${riskClass(A.risk)}">${A.risk}</span></div>
        </div>
        ${metrics.map(([l,va,vb,aw])=>`<div class="compare-metric"><span style="font-size:12px;color:var(--muted)">${l}</span><span style="font-size:13px;font-weight:600;font-family:var(--mono);color:${aw?'var(--success)':'var(--text)'}">${va} ${aw?'▲':''}</span></div>`).join('')}
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 8px;gap:8px;color:var(--faint)">
        ${metrics.map(([l])=>`<div style="font-size:10px;color:var(--faint);padding:10px 0;border-bottom:1px solid var(--border);width:100%;text-align:center;white-space:nowrap">${l}</div>`).join('')}
      </div>
      <div class="compare-col" style="border-top:3px solid ${riskColor(B.risk)}">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
          <div style="width:38px;height:38px;border-radius:50%;background:${riskBg(B.risk)};display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;color:${riskColor(B.risk)}">${initials(B.name)}</div>
          <div><div style="font-size:14px;font-weight:700">${B.name}</div><span class="badge ${riskClass(B.risk)}">${B.risk}</span></div>
        </div>
        ${metrics.map(([l,va,vb,aw])=>`<div class="compare-metric"><span style="font-size:12px;color:var(--muted)">${l}</span><span style="font-size:13px;font-weight:600;font-family:var(--mono);color:${!aw&&va!==vb?'var(--success)':'var(--text)'}"> ${!aw&&va!==vb?'▲':''} ${vb}</span></div>`).join('')}
      </div>
    </div>
    <div style="margin-top:14px;padding:12px 16px;background:var(--surface);border-radius:10px;border-left:3px solid var(--accent)">
      <span style="font-size:12px;color:var(--muted)"><b style="color:var(--accent)">Summary:</b> ${A.name} shows ${avg4(A)>avg4(B)?'stronger':'weaker'} overall academic performance with a ${Math.abs(avg4(A)-avg4(B))} point score difference. ${A.risk==='Low'&&B.risk!=='Low'?A.name+' is not at risk; '+B.name+' requires attention.':A.risk!=='Low'&&B.risk==='Low'?B.name+' is not at risk; '+A.name+' requires attention.':'Both students have similar risk profiles.'}</span>
    </div>`;
}

// ════════════════════════════════════════════
// REPORTS
// ════════════════════════════════════════════
const reportHistory=[];
function generateReport(type){
  const titles={class:'Full Class Performance Report',risk:'At-Risk Student Report',attendance:'Attendance Tracker Report',intervention:'Intervention Effectiveness Report'};
  const title=titles[type];
  const now=new Date().toLocaleString();
  reportHistory.unshift({title,time:now,type});
  renderReportHistory();
  const pv=document.getElementById('report-preview');
  if(type==='class'){
    const avgS=Math.round(STUDENTS.reduce((a,s)=>a+s.score,0)/STUDENTS.length);
    const avgA=Math.round(STUDENTS.reduce((a,s)=>a+s.att,0)/STUDENTS.length);
    pv.innerHTML=`<div><div style="font-size:15px;font-weight:700;margin-bottom:4px">${title}</div><div style="font-size:11px;color:var(--muted);margin-bottom:16px">Generated: ${now}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:14px">
        <div class="stat-box"><div class="stat-val">${STUDENTS.length}</div><div class="stat-lbl">Total Students</div></div>
        <div class="stat-box"><div class="stat-val" style="color:var(--accent)">${avgS}%</div><div class="stat-lbl">Avg Score</div></div>
        <div class="stat-box"><div class="stat-val" style="color:var(--success)">${avgA}%</div><div class="stat-lbl">Avg Attendance</div></div>
      </div>
      ${STUDENTS.map(s=>`<div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid var(--border);font-size:12px"><span>${s.name}</span><span style="font-family:var(--mono);color:${avg4(s)>=75?'var(--success)':'var(--danger)'}">${avg4(s)}%</span></div>`).join('')}
      <button class="btn btn-primary btn-sm" style="margin-top:12px;width:100%;justify-content:center" onclick="window.print()">🖨️ Print Report</button>
    </div>`;
  } else if(type==='risk'){
    const atRisk=STUDENTS.filter(s=>s.risk!=='Low');
    pv.innerHTML=`<div><div style="font-size:15px;font-weight:700;margin-bottom:4px">${title}</div><div style="font-size:11px;color:var(--muted);margin-bottom:14px">Generated: ${now}</div>
      ${atRisk.map(s=>`<div style="padding:10px;background:var(--surface);border-radius:9px;margin-bottom:8px;border-left:3px solid ${riskColor(s.risk)}">
        <div style="display:flex;justify-content:space-between"><span style="font-size:13px;font-weight:600">${s.name}</span><span class="badge ${riskClass(s.risk)}">${s.risk}</span></div>
        <div style="font-size:11px;color:var(--muted);margin-top:4px">Attendance: ${s.att}% · Score: ${avg4(s)}% · GPA: ${s.gpa.toFixed(1)}</div>
      </div>`).join('')}
      <button class="btn btn-primary btn-sm" style="margin-top:12px;width:100%;justify-content:center" onclick="window.print()">🖨️ Print</button>
    </div>`;
  } else {
    pv.innerHTML=`<div><div style="font-size:15px;font-weight:700;margin-bottom:4px">${title}</div><div style="font-size:11px;color:var(--muted);margin-bottom:14px">Generated: ${now}</div><div style="padding:20px;background:var(--surface);border-radius:10px;text-align:center;color:var(--muted);font-size:13px">Report data compiled. Click Print to save.</div><button class="btn btn-primary btn-sm" style="margin-top:12px;width:100%;justify-content:center" onclick="window.print()">🖨️ Print Report</button></div>`;
  }
  toast(`${title} generated!`,'success');
}
function renderReportHistory(){
  const el=document.getElementById('report-history');
  if(!el)return;
  if(!reportHistory.length){el.innerHTML='<div style="text-align:center;padding:20px;color:var(--faint);font-size:13px">No reports generated yet.</div>';return}
  el.innerHTML=reportHistory.slice(0,5).map(r=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border)"><div><div style="font-size:13px;font-weight:600">${r.title}</div><div style="font-size:11px;color:var(--muted);margin-top:2px">${r.time}</div></div><button class="btn btn-ghost btn-sm" onclick="window.print()">🖨️ Print</button></div>`).join('');
}

// ════════════════════════════════════════════
// CSV EXPORT
// ════════════════════════════════════════════
function exportCSV(){
  const hdr='EnrollmentNo,Name,Age,Grade,Gender,GPA,Attendance,Score,DS,OOPS,PYTHON,SQL,Risk,SES,Behavior,Tutoring,Extracurricular\n';
  const rows=STUDENTS.map(s=>[s.roll||s.id,s.name,s.age,s.grade,s.gender,s.gpa,s.att,s.score,s.ds,s.oops,s.python,s.sql,s.risk,s.ses,s.beh,s.tut,s.extra].join(',')).join('\n');
  const blob=new Blob([hdr+rows],{type:'text/csv'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='EduPredict_Students_'+new Date().toISOString().slice(0,10)+'.csv';a.click();
  toast('Student data exported to CSV!','success');
}

// ════════════════════════════════════════════
// AI PREDICTION
// ════════════════════════════════════════════
// ════════════════════════════════════════════
// ASSESSMENT ENGINE (Rule-Based)
// ════════════════════════════════════════════
function resetPredictForm(){
  ['p-name','p-age','p-grade','p-gender','p-ses','p-parent','p-beh','p-tut','p-extra'].forEach(id=>{const el=document.getElementById(id);if(el){if(el.tagName==='INPUT')el.value=id==='p-age'?'16':'';else if(el.tagName==='SELECT'){el.selectedIndex=id==='p-grade'?1:id==='p-ses'?1:id==='p-parent'?2:id==='p-beh'?2:id==='p-tut'?1:id==='p-extra'?1:0}}});
  ['p-gpa','p-prev','p-math','p-sci','p-eng','p-hist','p-att','p-study','p-sleep'].forEach(id=>{const el=document.getElementById(id);if(el){const defaults={'p-gpa':2.5,'p-prev':65,'p-math':65,'p-sci':65,'p-eng':65,'p-hist':65,'p-att':80,'p-study':2,'p-sleep':7};el.value=defaults[id]||65}});
  document.getElementById('v-gpa').textContent='2.5';document.getElementById('v-prev').textContent='65';
  document.getElementById('v-math').textContent='65';document.getElementById('v-sci').textContent='65';
  document.getElementById('v-eng').textContent='65';document.getElementById('v-hist').textContent='65';
  document.getElementById('v-att').textContent='80';document.getElementById('v-study').textContent='2.0';document.getElementById('v-sleep').textContent='7.0';
  document.getElementById('results-panel').innerHTML=`<div class="card empty"><div class="empty-icon" style="opacity:.3"><svg width="44" height="44" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg></div><div class="empty-title">Student Assessment Engine</div><div class="empty-sub">Fill in the student profile and click Analyze Student to receive a data-driven assessment.</div></div>`;
  document.getElementById('pred-error').style.display='none';
  toast('Form reset','info');
}

function runPrediction(){
  const btn=document.getElementById('predict-btn');
  btn.disabled=true;
  btn.innerHTML=`<svg class="spinner" width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 11-6.219-8.56"/></svg> Analyzing...`;
  document.getElementById('pred-error').style.display='none';
  document.getElementById('results-panel').innerHTML=`
    <div class="card" style="text-align:center;padding:3rem 1.5rem">
      <div style="width:60px;height:60px;border-radius:50%;background:var(--accent-dim);display:flex;align-items:center;justify-content:center;margin:0 auto 16px;animation:pulse 1.5s ease-in-out infinite">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="var(--accent)" stroke-width="1.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
      </div>
      <div style="font-size:15px;font-weight:600;color:var(--accent);margin-bottom:8px">Running Assessment...</div>
      <div style="font-size:13px;color:var(--muted);line-height:1.7">Evaluating academic indicators, behavioral metrics, and risk factors.</div>
    </div>`;

  const payload={
    name:document.getElementById('p-name').value||'Student',
    age:+document.getElementById('p-age').value,
    grade:+document.getElementById('p-grade').value,
    gender:document.getElementById('p-gender').value,
    ses:document.getElementById('p-ses').value,
    parentInvolvement:document.getElementById('p-parent').value,
    gpa:parseFloat(document.getElementById('p-gpa').value),
    prevScore:+document.getElementById('p-prev').value,
    attendance:+document.getElementById('p-att').value,
    dsScore:+document.getElementById('p-math').value,
    oopsScore:+document.getElementById('p-sci').value,
    pythonScore:+document.getElementById('p-eng').value,
    sqlScore:+document.getElementById('p-hist').value,
    behavior:document.getElementById('p-beh').value,
    tutoring:document.getElementById('p-tut').value==='true',
    extracurricular:document.getElementById('p-extra').value==='true',
    studyHours:+document.getElementById('p-study').value,
    sleepHours:+document.getElementById('p-sleep').value,
  };

  // Simulate brief processing time
  setTimeout(()=>{
    try{
      const result = assessStudent(payload);
      renderPredResult(result, payload.name);
      toast('Assessment complete for '+payload.name,'success');
    } catch(e){
      document.getElementById('results-panel').innerHTML=`<div class="card empty"><div class="empty-title">Assessment Failed</div><div class="empty-sub">${e.message||'An unexpected error occurred.'}</div></div>`;
    }
    btn.disabled=false;
    btn.innerHTML=`<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg> Analyze Student`;
  }, 900);
}

function assessStudent(p){
  // ── Score Prediction ──
  const subAvg = Math.round((p.dsScore+p.oopsScore+p.pythonScore+p.sqlScore)/4);
  const baseScore = Math.round(subAvg*0.45 + p.prevScore*0.3 + p.gpa/4*100*0.15 + p.attendance*0.1);
  // Modifiers
  let mod = 0;
  if(p.behavior==='Excellent') mod+=4; else if(p.behavior==='Good') mod+=2; else if(p.behavior==='Poor') mod-=4;
  if(p.tutoring) mod+=3;
  if(p.extracurricular) mod+=1;
  if(p.studyHours>=4) mod+=3; else if(p.studyHours>=2) mod+=1; else mod-=2;
  if(p.sleepHours>=7&&p.sleepHours<=9) mod+=2; else if(p.sleepHours<6) mod-=3;
  if(p.parentInvolvement==='High') mod+=3; else if(p.parentInvolvement==='None') mod-=3;
  if(p.ses==='High') mod+=2; else if(p.ses==='Low') mod-=2;
  const predictedScore = Math.min(100, Math.max(0, baseScore+mod));

  // ── Pass Probability ──
  let passPct = predictedScore >= 75 ? 85 : predictedScore >= 60 ? 55 : 25;
  if(p.attendance>=90) passPct+=8; else if(p.attendance<70) passPct-=12;
  if(p.tutoring) passPct+=5;
  passPct = Math.min(99, Math.max(5, passPct));

  // ── Risk Level ──
  let riskScore = 0;
  if(p.attendance<65) riskScore+=30; else if(p.attendance<75) riskScore+=18; else if(p.attendance<85) riskScore+=8;
  if(p.gpa<1.5) riskScore+=25; else if(p.gpa<2.0) riskScore+=18; else if(p.gpa<2.5) riskScore+=10;
  if(subAvg<50) riskScore+=25; else if(subAvg<60) riskScore+=18; else if(subAvg<70) riskScore+=8;
  if(p.behavior==='Poor') riskScore+=12; else if(p.behavior==='Fair') riskScore+=5;
  if(p.ses==='Low') riskScore+=8;
  if(p.parentInvolvement==='None') riskScore+=8;
  if(p.studyHours<1) riskScore+=10;
  riskScore = Math.min(100, riskScore);
  const dropoutRisk = riskScore>=70?'Critical':riskScore>=50?'High':riskScore>=30?'Medium':'Low';

  // ── GPA Projection ──
  let gpaProj = p.gpa + (predictedScore>=80?0.2:predictedScore>=70?0.1:predictedScore>=60?0:predictedScore>=50?-0.2:-0.4);
  if(p.tutoring) gpaProj+=0.1;
  gpaProj = +Math.min(4.0, Math.max(0.0, gpaProj)).toFixed(1);

  // ── Outlook ──
  const semesterOutlook = predictedScore>p.prevScore+3?'Improving':predictedScore<p.prevScore-3?'Declining':'Stable';

  // ── Class Rank Estimate ──
  const pctile = Math.round((predictedScore/100)*100);
  const predictedRank = pctile>=90?'Top 10% of class':pctile>=75?'Top 25% of class':pctile>=50?'Top 50% of class':'Bottom 50% of class';

  // ── Risk Factors ──
  const keyRiskFactors=[];
  if(p.attendance<75) keyRiskFactors.push(`Low attendance (${p.attendance}%) — chronic absenteeism risk`);
  if(p.gpa<2.0) keyRiskFactors.push(`GPA below threshold (${p.gpa.toFixed(1)}) — academic probation concern`);
  if(subAvg<60) keyRiskFactors.push(`Low subject average (${subAvg}%) — foundational knowledge gaps`);
  if(p.behavior==='Poor') keyRiskFactors.push('Behavioral concerns — classroom disruption reported');
  if(p.studyHours<1.5) keyRiskFactors.push(`Insufficient study time (${p.studyHours}h/day) — below recommended 2h`);
  if(p.sleepHours<6) keyRiskFactors.push(`Sleep deprivation (${p.sleepHours}h) — impacts memory and focus`);
  if(p.parentInvolvement==='None') keyRiskFactors.push('No parental involvement — reduced academic support at home');
  if(p.ses==='Low') keyRiskFactors.push('Low socioeconomic background — may need resource support');

  // ── Strengths ──
  const strengths=[];
  if(p.attendance>=90) strengths.push(`Excellent attendance (${p.attendance}%) — strong commitment`);
  if(p.gpa>=3.5) strengths.push(`High GPA (${p.gpa.toFixed(1)}) — consistent academic performance`);
  if(p.behavior==='Excellent') strengths.push('Excellent classroom behavior — positive learning environment');
  if(p.tutoring) strengths.push('Active tutoring participation — proactive academic support');
  if(p.extracurricular) strengths.push('Extracurricular involvement — well-rounded development');
  if(p.studyHours>=4) strengths.push(`High study hours (${p.studyHours}h/day) — strong work ethic`);
  if(p.parentInvolvement==='High') strengths.push('Strong parental involvement — supported home learning');

  // ── Interventions ──
  const interventions=[];
  if(p.attendance<80) interventions.push({title:'Attendance Recovery Plan',description:'Daily check-ins with a mentor, automated absence alerts to parents, and flexible make-up sessions to restore consistent attendance.',priority:'High',timeline:'This week',expectedImpact:'+8–12% attendance'});
  if(subAvg<70) interventions.push({title:'Subject-Specific Tutoring',description:`Focus on weaker subjects (${[['DS',p.dsScore],['OOPS',p.oopsScore],['Python',p.pythonScore],['SQL',p.sqlScore]].sort((a,b)=>a[1]-b[1]).slice(0,2).map(x=>x[0]).join(', ')}). Schedule 3× weekly sessions with a subject tutor.`,priority:'High',timeline:'Next 2 weeks',expectedImpact:'+10–15% score'});
  if(p.studyHours<2) interventions.push({title:'Study Skills Workshop',description:'Enroll in structured study habits program covering time management, active recall, and spaced repetition techniques.',priority:'Medium',timeline:'This month',expectedImpact:'+5–8% performance'});
  if(p.behavior==='Poor'||p.behavior==='Fair') interventions.push({title:'Behavioral Counseling',description:'Refer to school counselor for behavioral assessment and development of a behavior improvement plan with teacher collaboration.',priority:'Medium',timeline:'This week',expectedImpact:'Improved engagement'});
  if(p.parentInvolvement==='None'||p.parentInvolvement==='Low') interventions.push({title:'Parent Engagement Initiative',description:'Schedule a parent-teacher conference and set up a monthly progress-sharing communication channel via email or parent portal.',priority:'Low',timeline:'This month',expectedImpact:'Improved home support'});
  if(!interventions.length) interventions.push({title:'Enrichment Program',description:'Student is performing well. Recommend advanced coursework, peer mentoring opportunities, or competitive academic events.',priority:'Low',timeline:'Next semester',expectedImpact:'Continued excellence'});

  // ── Learning Profile ──
  const studyStr = p.studyHours>=3?'disciplined self-study habits':'limited independent study time';
  const learnStyle = p.extracurricular?'collaborative, hands-on learner who thrives with practical engagement':'focused independent learner who benefits from structured guidance';
  const learningProfile = `This student presents as a ${learnStyle} with ${studyStr}. ${p.sleepHours>=7?'Adequate sleep supports cognitive retention.':'Improving sleep hygiene could significantly boost memory consolidation and exam performance.'}`;

  // ── Outlook ──
  const outlookMap={
    Improving:`${p.name}'s academic trajectory shows positive momentum. With consistent effort and the recommended support measures, a meaningful score improvement of 5–10 points is realistic by semester end. Continued monitoring is advised.`,
    Stable:`${p.name} is maintaining current performance levels. Targeted interventions in weaker subjects could push performance above the passing threshold and reduce risk classification.`,
    Declining:`${p.name}'s indicators suggest a declining trend that requires prompt educator action. Immediate intervention enrollment and a structured recovery plan are strongly recommended.`,
  };
  const outlook = outlookMap[semesterOutlook];

  return {predictedScore,passProbability:passPct,dropoutRisk,riskScore,gpaProjection:gpaProj,semesterOutlook,keyRiskFactors:keyRiskFactors.slice(0,4),strengths:strengths.slice(0,3),interventions:interventions.slice(0,4),learningProfile,outlook,confidenceLevel:82,predictedRank};
}

function renderPredResult(r,name){
  const rc=riskColor(r.dropoutRisk),rb=riskBg(r.dropoutRisk);
  const ok=r.semesterOutlook==='Improving';
  document.getElementById('results-panel').innerHTML=`
    <div style="display:flex;flex-direction:column;gap:13px">
      <div class="card" style="border:1px solid ${rc}55">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
          <div style="font-size:14px;font-weight:700">Assessment: ${name}</div>
          <span class="badge ${riskClass(r.dropoutRisk)}">${r.dropoutRisk} Risk</span>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-bottom:14px">
          ${[['Predicted Score',r.predictedScore+'%',r.predictedScore>=75?'var(--success)':r.predictedScore>=50?'var(--amber)':'var(--danger)'],['Pass Probability',r.passProbability+'%',r.passProbability>=70?'var(--success)':r.passProbability>=50?'var(--amber)':'var(--danger)'],['GPA Projection',r.gpaProjection,'var(--blue)'],['Confidence Level',r.confidenceLevel+'%','var(--accent)']].map(([l,v,c])=>`<div style="background:var(--surface);padding:9px 11px;border-radius:9px"><div style="font-size:19px;font-weight:700;font-family:var(--mono);color:${c}">${v}</div><div style="font-size:11px;color:var(--muted)">${l}</div></div>`).join('')}
        </div>
        <div style="display:flex;gap:8px;margin-bottom:12px">
          <span style="font-size:11px;padding:4px 10px;border-radius:20px;background:${ok?'var(--success-dim)':r.semesterOutlook==='Stable'?'var(--blue-dim)':'var(--danger-dim)'};color:${ok?'var(--success)':r.semesterOutlook==='Stable'?'var(--blue)':'var(--danger)'}">Trend: ${r.semesterOutlook}</span>
          ${r.predictedRank?`<span style="font-size:11px;padding:4px 10px;border-radius:20px;background:var(--blue-dim);color:var(--blue)">Est. Rank: ${r.predictedRank}</span>`:''}
        </div>
        <div style="font-size:11px;color:var(--muted);margin-bottom:5px;font-weight:600">RISK SCORE</div>
        <div class="progress" style="height:8px"><div class="progress-fill" style="width:${r.riskScore}%;background:linear-gradient(90deg,var(--success),var(--amber),var(--danger))"></div></div>
        <div style="display:flex;justify-content:space-between;margin-top:3px"><span style="font-size:10px;color:var(--success)">Low</span><span style="font-size:11px;font-family:var(--mono)">${r.riskScore}/100</span><span style="font-size:10px;color:var(--danger)">Critical</span></div>
      </div>
      ${(r.keyRiskFactors?.length||r.strengths?.length)?`<div class="card">
        ${r.keyRiskFactors?.length?`<div style="font-size:12px;font-weight:700;color:var(--danger);margin-bottom:8px">⚠ Risk Factors</div>${r.keyRiskFactors.map((f,i)=>`<div style="display:flex;gap:7px;padding:6px 0;${i<r.keyRiskFactors.length-1?'border-bottom:1px solid rgba(26,47,80,.4)':''}"><span style="color:var(--danger);flex-shrink:0">✕</span><span style="font-size:12px">${f}</span></div>`).join('')}`:''}
        ${r.strengths?.length?`<div style="font-size:12px;font-weight:700;color:var(--success);margin:12px 0 8px">✓ Strengths</div>${r.strengths.map((s,i)=>`<div style="display:flex;gap:7px;padding:6px 0;${i<r.strengths.length-1?'border-bottom:1px solid rgba(26,47,80,.4)':''}"><span style="color:var(--success);flex-shrink:0">✓</span><span style="font-size:12px">${s}</span></div>`).join('')}`:''}
      </div>`:''}
      ${r.interventions?.length?`<div class="card"><div style="font-size:12px;font-weight:700;color:var(--accent);margin-bottom:11px">💡 Recommended Interventions</div>${r.interventions.map(iv=>`<div style="padding:9px 11px;background:var(--surface);border-radius:9px;margin-bottom:7px;border-left:3px solid ${iv.priority==='High'?'var(--danger)':iv.priority==='Medium'?'var(--amber)':'var(--success)'}"><div style="display:flex;justify-content:space-between;margin-bottom:3px"><span style="font-size:12px;font-weight:600">${iv.title}</span><span style="font-size:10px;padding:2px 7px;border-radius:20px;background:${iv.priority==='High'?'var(--danger-dim)':iv.priority==='Medium'?'var(--amber-dim)':'var(--success-dim)'};color:${iv.priority==='High'?'var(--danger)':iv.priority==='Medium'?'var(--amber)':'var(--success)'}">${iv.priority}</span></div><div style="font-size:11px;color:var(--muted);line-height:1.5">${iv.description}</div>${iv.timeline?`<div style="font-size:10px;color:var(--faint);margin-top:4px">⏱ ${iv.timeline}${iv.expectedImpact?' · Expected: '+iv.expectedImpact:''}</div>`:''}</div>`).join('')}</div>`:''}
      ${r.outlook?`<div class="card"><div style="font-size:11px;font-weight:700;color:var(--accent);margin-bottom:7px;letter-spacing:1px">ASSESSMENT OUTLOOK</div><p style="font-size:12px;color:var(--muted);line-height:1.7;margin:0">${r.outlook}</p>${r.learningProfile?`<p style="font-size:12px;color:var(--muted);line-height:1.7;margin:10px 0 0;padding-top:10px;border-top:1px solid var(--border)">${r.learningProfile}</p>`:''}</div>`:''}
      <button class="btn btn-ghost btn-sm" onclick="toast('Report saved!','success')" style="justify-content:center">💾 Save Report</button>
    </div>`;
}

// ════════════════════════════════════════════
// LIVE CLOCK
// ════════════════════════════════════════════
function updateClock(){
  const now=new Date();
  const h=String(now.getHours()).padStart(2,'0');
  const m=String(now.getMinutes()).padStart(2,'0');
  const s=String(now.getSeconds()).padStart(2,'0');
  const el=document.getElementById('live-clock');
  if(el) el.textContent=`${h}:${m}:${s}`;
}
setInterval(updateClock,1000);
updateClock();

// ════════════════════════════════════════════
// WELCOME BANNER
// ════════════════════════════════════════════
(function(){
  const wd=document.getElementById('welcome-date');
  if(wd) wd.textContent=new Date().toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'});
  const wrc=document.getElementById('welcome-risk-count');
  if(wrc) wrc.textContent=STUDENTS.filter(s=>s.risk==='Critical'||s.risk==='High').length;
})();

// ════════════════════════════════════════════
// TOP PERFORMERS
// ════════════════════════════════════════════
function renderTopPerformers(){
  const el=document.getElementById('top-performers-list');
  if(!el)return;
  const top=[...STUDENTS].sort((a,b)=>b.score-a.score).slice(0,5);
  const medals=['🥇','🥈','🥉','4','5'];
  const medalBg=['#f59e0b','#8892a4','#a16207','var(--faint)','var(--faint)'];
  el.innerHTML=top.map((s,i)=>`
    <div class="top-row" onclick="openStudentModal(${s.id})" style="cursor:pointer">
      <div class="top-rank" style="background:${medalBg[i]}22;color:${medalBg[i]}">${medals[i]}</div>
      <div style="width:28px;height:28px;border-radius:50%;background:${riskBg(s.risk)};display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:${riskColor(s.risk)};flex-shrink:0">${initials(s.name)}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${s.name}</div>
        <div style="font-size:11px;color:var(--muted)">Grade ${s.grade} · GPA ${s.gpa.toFixed(1)}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:15px;font-weight:700;font-family:var(--mono);color:var(--success)">${s.score}%</div>
        <div class="sparkline" style="justify-content:flex-end">${s.trend.map(v=>`<div class="spark-bar" style="height:${Math.round(v/100*18)+2}px;background:${v>=75?'var(--success)':'var(--amber)'}"></div>`).join('')}</div>
      </div>
    </div>`).join('');
}

// ════════════════════════════════════════════
// CLASS HEALTH SCORE
// ════════════════════════════════════════════
function renderHealthScore(){
  const avgScore=Math.round(STUDENTS.reduce((a,s)=>a+s.score,0)/STUDENTS.length);
  const avgAtt=Math.round(STUDENTS.reduce((a,s)=>a+s.att,0)/STUDENTS.length);
  const lowRisk=STUDENTS.filter(s=>s.risk==='Low').length;
  const lowRiskPct=Math.round((lowRisk/STUDENTS.length)*100);
  // Composite health = weighted average
  const health=Math.round(avgScore*0.4+avgAtt*0.4+lowRiskPct*0.2);
  // Animate ring: dashoffset goes from 239 to 239*(1-health/100)
  const offset=Math.round(239*(1-health/100));
  setTimeout(()=>{
    const ring=document.getElementById('health-ring-fill');
    const val=document.getElementById('health-score-val');
    if(ring) ring.style.strokeDashoffset=offset;
    if(val) val.textContent=health;
    // Color ring based on score
    if(ring){
      if(health>=75) ring.setAttribute('stroke','var(--success)');
      else if(health>=60) ring.setAttribute('stroke','var(--amber)');
      else ring.setAttribute('stroke','var(--danger)');
    }
    // Sub-bars
    const setBar=(id,barId,val)=>{
      const el=document.getElementById(id),bar=document.getElementById(barId);
      if(el) el.textContent=val+'%';
      if(bar) bar.style.width=val+'%';
    };
    setBar('h-academic','h-academic-bar',avgScore);
    setBar('h-att','h-att-bar',avgAtt);
    setBar('h-safe','h-safe-bar',lowRiskPct);
  },300);
}

// ════════════════════════════════════════════
// KEYBOARD SHORTCUTS
// ════════════════════════════════════════════
const viewKeys={'1':'dashboard','2':'predict','3':'students','4':'analytics','5':'interventions','6':'compare','7':'reports','8':'settings'};
document.addEventListener('keydown',e=>{
  if(['INPUT','TEXTAREA','SELECT'].includes(e.target.tagName)) return;
  if(viewKeys[e.key]) showView(viewKeys[e.key]);
  if(e.key==='Escape') closeModal();
});

// ════════════════════════════════════════════
// SCROLL-TO-TOP
// ════════════════════════════════════════════
document.getElementById('content').addEventListener('scroll',function(){
  const btn=document.getElementById('scroll-top');
  if(btn) btn.classList.toggle('show',this.scrollTop>150);
});

// ════════════════════════════════════════════
// INIT
// ════════════════════════════════════════════
initDashboard();
renderTopPerformers();
renderHealthScore();