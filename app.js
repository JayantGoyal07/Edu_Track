// ════════════════════════════════════════════
// DATA MODEL
// ════════════════════════════════════════════
const STUDENTS = [
  {id:1,roll:"EN23CE301026",name:"RUDRANSH DUBEY",age:21,grade:11,gender:"M",gpa:3.8,att:95,score:88,risk:"Low",ds:91,oops:87,python:90,sql:85,ses:"High",beh:"Excellent",tut:true,extra:true,trend:[82,84,86,88,87,89,88]},
  {id:2,roll:"EN23CS301953",name:"SHASHANK SINGH CHOUHAN",age:22,grade:10,gender:"M",gpa:2.1,att:67,score:52,risk:"Critical",ds:48,oops:55,python:58,sql:47,ses:"Low",beh:"Poor",tut:false,extra:false,trend:[60,58,55,52,50,48,52]},
  {id:3,roll:"EN23EL301071",name:"PRABHAV UPADHYAY",age:20,grade:12,gender:"F",gpa:3.5,att:90,score:81,risk:"Low",ds:84,oops:83,python:87,sql:79,ses:"Middle",beh:"Good",tut:false,extra:true,trend:[75,77,79,80,80,82,81]},
  {id:4,roll:"EN23EL301085",name:"SANIYA BAIG",age:21,grade:11,gender:"M",gpa:2.7,att:74,score:64,risk:"Medium",ds:60,oops:69,python:72,sql:58,ses:"Low",beh:"Fair",tut:false,extra:false,trend:[68,66,65,64,62,63,64]},
  {id:5,roll:"EN23EL301096",name:"SUHANI SEN",age:22,grade:9,gender:"F",gpa:3.9,att:98,score:94,risk:"Low",ds:95,oops:92,python:96,sql:93,ses:"High",beh:"Excellent",tut:true,extra:true,trend:[90,92,93,94,95,94,94]},
  {id:6,roll:"EN23CS301002",name:"Abhishek Kumar",age:20,grade:11,gender:"M",gpa:3.1,att:82,score:73,risk:"Low",ds:70,oops:75,python:78,sql:69,ses:"Middle",beh:"Good",tut:true,extra:false,trend:[70,71,72,73,72,74,73]},
  {id:7,roll:"EN23CS301045",name:"Bhumika Patidar",age:21,grade:11,gender:"F",gpa:2.4,att:61,score:58,risk:"High",ds:52,oops:60,python:64,sql:56,ses:"Low",beh:"Fair",tut:false,extra:true,trend:[62,60,59,58,56,55,58]},
  {id:8,roll:"EN23CS301112",name:"Gaurav Rathore",age:22,grade:12,gender:"M",gpa:1.8,att:55,score:46,risk:"Critical",ds:40,oops:48,python:50,sql:46,ses:"Low",beh:"Poor",tut:false,extra:false,trend:[52,50,48,46,45,43,46]},
  {id:9,roll:"EN23CS301180",name:"Kunal Tiwari",age:20,grade:10,gender:"M",gpa:3.6,att:92,score:85,risk:"Low",ds:88,oops:82,python:86,sql:84,ses:"High",beh:"Excellent",tut:false,extra:true,trend:[80,82,83,85,86,84,85]},
  {id:10,roll:"EN23CS301221",name:"Nisha Prajapat",age:21,grade:11,gender:"F",gpa:2.9,att:79,score:69,risk:"Medium",ds:66,oops:71,python:73,sql:66,ses:"Middle",beh:"Good",tut:true,extra:false,trend:[65,67,68,69,70,68,69]},
  {id:11,roll:"EN23CS301290",name:"Rahul Malviya",age:22,grade:12,gender:"M",gpa:3.3,att:88,score:78,risk:"Low",ds:76,oops:80,python:82,sql:74,ses:"Middle",beh:"Excellent",tut:false,extra:true,trend:[74,76,77,78,79,78,78]},
  {id:12,roll:"EN23CS301340",name:"Sakshi Sharma",age:20,grade:11,gender:"F",gpa:2.2,att:64,score:54,risk:"High",ds:50,oops:56,python:58,sql:52,ses:"Low",beh:"Fair",tut:true,extra:false,trend:[58,56,55,54,52,51,54]},
  {id:13,roll:"EN23CS301410",name:"Yash Wardhan",age:21,grade:11,gender:"M",gpa:3.7,att:94,score:89,risk:"Low",ds:92,oops:86,python:91,sql:87,ses:"High",beh:"Good",tut:false,extra:true,trend:[85,86,88,89,88,90,89]},
  {id:14,roll:"EN23CS301499",name:"James O'Brien",age:22,grade:12,gender:"M",gpa:2.3,att:70,score:61,risk:"High",ds:58,oops:63,python:65,sql:58,ses:"Middle",beh:"Poor",tut:false,extra:false,trend:[66,64,63,61,59,58,61]},
  {id:15,roll:"EN23CS301520",name:"Mia Kowalski",age:20,grade:10,gender:"F",gpa:2.8,att:80,score:73,risk:"Medium",ds:70,oops:72,python:75,sql:75,ses:"Middle",beh:"Good",tut:true,extra:true,trend:[65,68,70,73,72,75,73]}
];

const PAGE_META = {
  dashboard: ["Overview Dashboard","System-wide academic performance at a glance"],
  predict: ["Student Assessment Engine","Predictive model profiling and customized action matrix inference"],
  students: ["Student Directory Database","Granular tracking roster profile filters and history tracking"],
  analytics: ["Analytics Matrix Sandbox","Multivariate coefficient plots and parameter correlations"],
  interventions: ["Intervention Pipeline Hub","Priority queue triage mechanism and evidence strategy library"],
  compare: ["Comparative Analytics Interface","Side-by-side student differentiation metrics sandbox"],
  reports: ["Reports & Exports","Generate, download, and print academic reports"],
  settings: ["Settings","Application preferences and system configuration"],
};

let chartsInit = {};

// ════════════════════════════════════════════
// APPLICATION ROUTING & CORE ENGINE
// ════════════════════════════════════════════
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
  
  document.getElementById('notif-panel').classList.remove('open');
}

// ════════════════════════════════════════════
// THEME & INTERFACE UTILITIES
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

document.getElementById('date-pill').textContent=new Date().toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric',year:'numeric'});

function toast(msg,type='success'){
  const icons={success:'✅',error:'❌',info:'ℹ️',warn:'⚠️'};
  const tc=document.getElementById('toast-container');
  const t=document.createElement('div');
  t.className='toast';
  t.innerHTML=`<div class="toast-icon" style="background:${type==='success'?'var(--success-dim)':type==='error'?'var(--danger-dim)':type==='warn'?'var(--amber-dim)':'var(--blue-dim)'}">${icons[type]||'ℹ️'}</div><div class="toast-text">${msg}</div>`;
  tc.appendChild(t);
  setTimeout(()=>{t.style.opacity='0';t.style.transition='opacity .3s';setTimeout(()=>t.remove(),300)},3200);
}

function toggleNotif(){
  document.getElementById('notif-panel').classList.toggle('open');
}

// ════════════════════════════════════════════
// DASHBOARD VIEW LAYER
// ════════════════════════════════════════════
function initDashboard(){
  const critical=STUDENTS.filter(s=>s.risk==="Critical"||s.risk==="High");
  const avgScore=Math.round(STUDENTS.reduce((a,s)=>a+s.score,0)/STUDENTS.length);
  const avgAtt=Math.round(STUDENTS.reduce((a,s)=>a+s.att,0)/STUDENTS.length);
  
  const kpis=[
    {label:"Total Students",val:String(STUDENTS.length),sub:"Active Enrollment",icon:'<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>',color:"var(--accent)",trend:"+4.2%",up:true},
    {label:"Average Score",val:avgScore+"%",sub:"This Semester",icon:'<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',color:"var(--blue)",trend:"+1.8%",up:true},
    {label:"Attendance Rate",val:avgAtt+"%",sub:"System Mean",icon:'<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',color:"var(--success)",trend:"-0.4%",up:false},
    {label:"At-Risk Pipelines",val:String(critical.length),sub:"Action Required",icon:'<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',color:"var(--danger)",trend:"Critical Triage",up:false}
  ];

  document.getElementById('db-kpi-grid').innerHTML=kpis.map(k=>`
    <div class="kpi">
      <div style="display:flex;justify-content:between;align-items:start;margin-bottom:12px">
        <div class="kpi-icon" style="background:${k.color}15;color:${k.color}"><svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">${k.icon}</svg></div>
        <span class="trend ${k.up?'trend-up':'trend-dn'}">${k.trend}</span>
      </div>
      <div class="kpi-val">${k.val}</div>
      <div class="kpi-lbl">${k.label}</div>
      <div class="kpi-sub" style="color:var(--faint)">${k.sub}</div>
    </div>`).join('');

  // Top performers roster lists
  const sorted=[...STUDENTS].sort((a,b)=>b.score-a.score).slice(0,4);
  document.getElementById('db-top-performers').innerHTML=sorted.map((s,idx)=>`
    <div class="top-row">
      <div class="top-rank" style="background:${idx===0?'var(--amber)':idx===1?'#94a3b8':idx===2?'#b45309':'var(--border)'};color:${idx===0||idx===2?'#000':'var(--text)'}">${idx+1}</div>
      <div style="flex:1"><div style="font-size:12px;font-weight:600">${s.name}</div><div style="font-size:10px;color:var(--muted)">GPA ${s.gpa.toFixed(1)} · Att ${s.att}%</div></div>
      <div style="font-family:var(--mono);font-size:12px;font-weight:700;color:var(--accent)">${s.score}%</div>
    </div>`).join('');

  // Draw dashboard primary metrics chart
  const ctx=document.getElementById('chart-db-perf').getContext('2d');
  const dNames=STUDENTS.slice(0,8).map(s=>s.name.split(' ')[0]);
  const dScores=STUDENTS.slice(0,8).map(s=>s.score);
  const dAtt=STUDENTS.slice(0,8).map(s=>s.att);

  if(window.dbChartInstance) window.dbChartInstance.destroy();
  window.dbChartInstance = new Chart(ctx,{
    type:'bar',
    data:{
      labels:dNames,
      datasets:[
        {label:'Academic Score',data:dScores,backgroundColor:'rgba(79,142,247,0.75)',borderRadius:5},
        {label:'Attendance %',data:dAtt,backgroundColor:'rgba(16,185,129,0.75)',borderRadius:5}
      ]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      plugins:{legend:{labels:{color:'#8892a4',font:{family:'Sora',size:11}}}},
      scales:{
        x:{grid:{display:false},ticks:{color:'#8892a4',font:{family:'Sora',size:10}}},
        y:{grid:{color:'rgba(26,47,80,0.3)'},ticks:{color:'#8892a4'},max:100}
      }
    }
  });

  // Calculate health rings indices
  setTimeout(()=>{
    const lowRiskPct=Math.round((STUDENTS.filter(s=>s.risk==='Low').length/STUDENTS.length)*100);
    const health=Math.round((avgScore+avgAtt+lowRiskPct)/3);
    const fill=document.getElementById('health-ring-fill');
    if(fill){
      const offset=239-((239*health)/100);
      fill.style.strokeDashoffset=offset;
      const el=document.getElementById('health-score-val');
      el.textContent=health;
      if(health>=80) fill.setAttribute('stroke','var(--success)');
      else if(health>=60) fill.setAttribute('stroke','var(--amber)');
      else fill.setAttribute('stroke','var(--danger)');
    }
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
// PREDICTIVE ASSESSMENT ENGINE LAYERS
// ════════════════════════════════════════════
function runAnalysis(){
  const btn=document.getElementById('analyze-btn');
  btn.disabled=true;
  btn.innerHTML=`<svg class="spinner" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="10"/></svg> Synthesizing Data Vector Matrix...`;

  setTimeout(()=>{
    const p={
      name:document.getElementById('p-name').value,
      roll:document.getElementById('p-roll').value,
      age:parseInt(document.getElementById('p-age').value),
      grade:parseInt(document.getElementById('p-grade').value),
      gender:document.getElementById('p-gender').value,
      gpa:parseFloat(document.getElementById('p-gpa').value),
      attendance:parseInt(document.getElementById('p-att').value),
      prevScore:parseInt(document.getElementById('p-prev').value),
      dsScore:parseInt(document.getElementById('p-ds').value),
      oopsScore:parseInt(document.getElementById('p-oops').value),
      pythonScore:parseInt(document.getElementById('p-python').value),
      sqlScore:parseInt(document.getElementById('p-sql').value),
      behavior:document.getElementById('p-beh').value,
      ses:document.getElementById('p-ses').value,
      studyHours:parseInt(document.getElementById('p-study').value),
      sleepHours:parseInt(document.getElementById('p-sleep').value),
      parentInvolvement:document.getElementById('p-parent').value,
      tutoring:document.getElementById('p-tut').checked,
      extracurricular:document.getElementById('p-extra').checked
    };

    try{
      const res = assessStudent(p);
      renderAssessmentResult(res);
      toast('Analysis structural model complete!','success');
    } catch(e){
      document.getElementById('results-panel').innerHTML=`<div class="card empty"><div class="empty-title">Assessment Failed</div><div class="empty-sub">${e.message||'An unexpected error occurred.'}</div></div>`;
    }
    btn.disabled=false;
    btn.innerHTML=`<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg> Analyze Student`;
  }, 900);
}

function assessStudent(p){
  const subAvg = Math.round((p.dsScore+p.oopsScore+p.pythonScore+p.sqlScore)/4);
  const baseScore = Math.round(subAvg*0.45 + p.prevScore*0.3 + p.gpa/4*100*0.15 + p.attendance*0.1);
  
  let mod = 0;
  if(p.behavior=='Excellent') mod+=4;
  else if(p.behavior=='Good') mod+=2;
  else if(p.behavior=='Poor') mod-=4;
  
  if(p.tutoring) mod+=3;
  if(p.extracurricular) mod+=1;
  if(p.studyHours>=4) mod+=3;
  else if(p.studyHours>=2) mod+=1;
  else mod-=2;
  
  if(p.sleepHours>=7&&p.sleepHours<=9) mod+=2;
  else if(p.sleepHours<6) mod-=3;
  
  if(p.parentInvolvement=='High') mod+=3;
  else if(p.parentInvolvement=='None') mod-=3;
  
  const predictedScore = Math.max(10,Math.min(100,baseScore+mod));
  
  let riskScore = Math.round((100-predictedScore)*0.6 + (100-p.attendance)*0.4);
  if(p.behavior=='Poor') riskScore+=12;
  if(p.ses=='Low') riskScore+=4;
  riskScore = Math.max(5,Math.min(98,riskScore));

  let level = "Low";
  if(riskScore>=75) level="Critical";
  else if(riskScore>=55) level="High";
  else if(riskScore>=35) level="Medium";

  const keyRiskFactors=[];
  if(p.attendance<75) keyRiskFactors.push('Sub-optimal critical systemic attendance (<75%)');
  if(subAvg<60) keyRiskFactors.push('Academic learning core gap below parameter line');
  if(p.studyHours<2) keyRiskFactors.push('Deficiency in active structural study hours');
  if(p.behavior=='Poor') keyRiskFactors.push('Behavioral incident patterns noted');
  if(p.parentInvolvement=='None'||p.parentInvolvement=='Low') keyRiskFactors.push('Low critical environmental home support vector');

  const strengths=[];
  if(p.attendance>=90) strengths.push('Excellent attendance patterns — structural presence high');
  if(subAvg>=80) strengths.push('Strong capabilities across subject domains');
  if(p.tutoring) strengths.push('Active deployment of tutoring workflows');
  if(p.extracurricular) strengths.push('Extracurricular profile active');
  if(p.studyHours>=4) strengths.push(`Highly disciplined self-study timelines (${p.studyHours}h/day)`);

  const interventions=[];
  if(p.attendance<80) interventions.push({title:'Attendance Recovery Plan',description:'Daily dashboard check-ins, automated absence triggers to guardians, and milestone targets.',priority:'High',timeline:'Immediate',expectedImpact:'+10-15% attendance restoration'});
  if(subAvg<70) interventions.push({title:'Subject-Specific Tutoring',description:`Prioritize lowest scoring structures (${[['DS',p.dsScore],['OOPS',p.oopsScore],['Python',p.pythonScore],['SQL',p.sqlScore]].sort((a,b)=>a[1]-b[1]).slice(0,2).map(x=>x[0]).join(', ')}). 3× weekly checkins.`,priority:'High',timeline:'Next 2 weeks',expectedImpact:'+12% tracking gain'});
  if(p.studyHours<2) interventions.push({title:'Study Strategy Workshop',description:'Enroll in structured space-repetition and optimization framework cohorts.',priority:'Medium',timeline:'This month',expectedImpact:'+5–8% performance improvement'});
  if(p.behavior=='Poor'||p.behavior=='Fair') interventions.push({title:'Behavioral Framework Referral',description:'Counselor triage for engagement optimization vectors and peer coordination workflows.',priority:'Medium',timeline:'This week',expectedImpact:'Improved engagement metrics'});
  if(!interventions.length) interventions.push({title:'Enrichment Tracks Deployment',description:'Advanced analytical track assignments, peer mentor roles, and research projects.',priority:'Low',timeline:'Next term',expectedImpact:'Long term excellence retention'});

  return {name:p.name,roll:p.roll,predictedScore,riskScore,level,keyRiskFactors,strengths,interventions};
}

function renderAssessmentResult(r){
  const color = r.level==='Critical'?'var(--danger)':r.level==='High'?'var(--amber)':r.level==='Medium'?'var(--blue)':'var(--success)';
  const bg = r.level==='Critical'?'var(--danger-dim)':r.level==='High'?'var(--amber-dim)':r.level==='Medium'?'var(--blue-dim)':'var(--success-dim)';

  document.getElementById('results-panel').innerHTML=`
    <div class="card" style="display:flex;flex-direction:column;gap:14px">
      <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--border);padding-bottom:10px">
        <div><h3 style="font-size:15px;font-weight:700">${r.name}</h3><p style="font-size:11px;color:var(--muted)">${r.roll}</p></div>
        <span class="badge" style="background:${bg};color:${color};border:1px solid ${color}44">${r.level} Risk Profile</span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
        <div class="stat-box"><div class="stat-val" style="color:var(--accent)">${r.predictedScore}%</div><div class="stat-lbl">Inferred Score Predictor</div></div>
        <div class="stat-box"><div class="stat-val" style="color:${color}">${r.riskScore}</div><div class="stat-lbl">Composite Risk Multiplier</div></div>
      </div>
      <div class="field">
        <label>Risk Coefficient Spectrum Index</label>
        <div class="progress" style="height:8px;border-radius:4px;margin-top:4px"><div class="progress-fill" style="width:${r.riskScore}%;background:${color}"></div></div>
        <div style="display:flex;justify-content:space-between;font-size:9px;color:var(--faint);margin-top:2px"><span>Low</span><span>${r.riskScore}/100</span><span>Critical</span></div>
      </div>
      ${(r.keyRiskFactors?.length||r.strengths?.length)?`
      <div class="card" style="padding:10px;background:var(--surface)">
        ${r.keyRiskFactors?.length?`<div style="font-size:11px;font-weight:700;color:var(--danger);margin-bottom:4px">⚠ Risk Factors</div>${r.keyRiskFactors.map(f=>`<div style="font-size:11px;padding:3px 0;color:var(--text)">• ${f}</div>`).join('')}`:''}
        ${r.strengths?.length?`<div style="font-size:11px;font-weight:700;color:var(--success);margin:8px 0 4px">✓ Strengths Matrix</div>${r.strengths.map(s=>`<div style="font-size:11px;padding:3px 0;color:var(--text)">• ${s}</div>`).join('')}`:''}
      </div>`:''}
      <div style="font-size:12px;font-weight:700;margin-top:4px">Prescribed Intervention Sequences</div>
      <div style="display:flex;flex-direction:column;gap:8px">
        ${r.interventions.map(i=>`
          <div style="padding:10px;border-radius:8px;background:var(--surface);border-left:3px solid ${i.priority==='High'?'var(--danger)':'var(--blue)'}">
            <div style="display:flex;justify-content:space-between;align-items:center"><span style="font-size:12px;font-weight:600">${i.title}</span><span class="badge ${i.priority==='High'?'badge-critical':'badge-medium'} btn-sm" style="font-size:8px;padding:1px 5px">${i.priority}</span></div>
            <p style="font-size:11px;color:var(--muted);margin-top:3px">${i.description}</p>
            <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--faint);margin-top:6px;font-family:var(--mono)"><span>Timeline: ${i.timeline}</span><span>Impact: ${i.expectedImpact}</span></div>
          </div>`).join('')}
      </div>
    </div>`;
}

// ════════════════════════════════════════════
// STUDENT DIRECTORY DATABASES
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
  
  document.getElementById('stu-tbody').innerHTML=filtered.map(s=>{
    const av=avg4(s);
    const bars=['ds','oops','python','sql'].map(sub=>`<div style="width:8px;height:${Math.max(8,Math.round(s[sub]/100*30))}px;border-radius:2px;background:${s[sub]>=80?'var(--success)':s[sub]>=65?'var(--blue)':s[sub]>=50?'var(--amber)':'var(--danger)'};" title="${sub}: ${s[sub]}%"></div>`).join('');
    return `
      <tr style="cursor:pointer" onclick="openStudentModal(${s.id})">
        <td><div style="display:flex;align-items:center;gap:9px"><div style="width:31px;height:31px;border-radius:50%;background:${riskBg(s.risk)};display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:${riskColor(s.risk)};flex-shrink:0">${initials(s.name)}</div><div><div style="font-size:13px;font-weight:600">${s.name}</div><div style="font-size:11px;color:var(--muted)">${s.roll} · ${s.gender}</div></div></div></td>
        <td style="font-family:var(--mono);font-weight:600">${s.grade}</td>
        <td style="font-family:var(--mono);font-weight:600;color:${s.gpa>3.4?'var(--success)':s.gpa>2.4?'var(--amber)':'var(--danger)'}">${s.gpa.toFixed(1)}</td>
        <td><div style="font-size:13px;font-weight:600;font-family:var(--mono);color:${s.att<70?'var(--danger)':s.att<80?'var(--amber)':'var(--success)'}">${s.att}%</div><div class="progress" style="width:55px;margin-top:4px"><div class="progress-fill" style="width:${s.att}%;background:${s.att<70?'var(--danger)':s.att<80?'var(--amber)':'var(--success)'}"></div></div></td>
        <td><div class="mini-bars">${bars}</div></td>
        <td style="font-family:var(--mono);font-weight:700;color:var(--accent)">${av}%</td>
        <td><span class="badge" style="background:${riskBg(s.risk)};color:${riskColor(s.risk)}">${s.risk}</span></td>
      </tr>`;
  }).join('');
}

const avg4=(s)=>Math.round((s.ds+s.oops+s.python+s.sql)/4);
const riskColor=(r)=>r==='Critical'?'var(--danger)':r==='High'?'var(--amber)':r==='Medium'?'var(--blue)':'var(--success)';
const riskBg=(r)=>r==='Critical'?'var(--danger-dim)':r==='High'?'var(--amber-dim)':r==='Medium'?'var(--blue-dim)':'var(--success-dim)';
const initials=(n)=>n.split(' ').slice(0,2).map(x=>x[0]).join('');

// ════════════════════════════════════════════
// STUDENT DETAILED PROFILE MODAL OVERLAY
// ════════════════════════════════════════════
function openStudentModal(id){
  const s=STUDENTS.find(x=>x.id===id);if(!s)return;
  document.getElementById('modal-name').textContent=s.name;
  document.getElementById('modal-sub').textContent=`Roster Record Reference Identifier: ${s.roll} · System Registration Active`;
  
  const av=avg4(s);
  document.getElementById('modal-body').innerHTML=`
    <div style="display:flex;flex-direction:column;gap:16px">
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px">
        <div class="stat-box"><div class="stat-val">${s.age}</div><div class="stat-lbl">Age Chrono</div></div>
        <div class="stat-box"><div class="stat-val">${s.grade}</div><div class="stat-lbl">Grade Cohort</div></div>
        <div class="stat-box"><div class="stat-val" style="color:var(--accent)">${s.gpa.toFixed(2)}</div><div class="stat-lbl">Cumulative GPA</div></div>
        <div class="stat-box"><div class="stat-val" style="color:${riskColor(s.risk)}">${av}%</div><div class="stat-lbl">Academic Mean</div></div>
      </div>
      <div class="card">
        <div style="font-size:12px;font-weight:700;margin-bottom:12px">Granular Subject Domain Breakdown</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
          <div><div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:3px"><span>Data Structures</span><span style="font-family:var(--mono)">${s.ds}%</span></div><div class="progress"><div class="progress-fill" style="width:${s.ds}%;background:var(--blue)"></div></div></div>
          <div><div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:3px"><span>Object Oriented Architecture</span><span style="font-family:var(--mono)">${s.oops}%</span></div><div class="progress"><div class="progress-fill" style="width:${s.oops}%;background:var(--blue)"></div></div></div>
          <div><div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:3px"><span>Python Systems Programming</span><span style="font-family:var(--mono)">${s.python}%</span></div><div class="progress"><div class="progress-fill" style="width:${s.python}%;background:var(--blue)"></div></div></div>
          <div><div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:3px"><span>Relational SQL Engines</span><span style="font-family:var(--mono)">${s.sql}%</span></div><div class="progress"><div class="progress-fill" style="width:${s.sql}%;background:var(--blue)"></div></div></div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
        <div class="card"><div style="font-size:12px;font-weight:700;margin-bottom:6px">System Attributes Matrix</div>
          <div style="font-size:11px;line-height:1.7;color:var(--muted)">
            Socioeconomic Status Vector: <span style="color:var(--text);font-weight:600">${s.ses}</span><br>
            Behavioral Profiler Metric: <span style="color:var(--text);font-weight:600">${s.beh}</span><br>
            Institutional Tutoring Deployment: <span style="color:var(--text);font-weight:600">${s.tut?'Active Engagement':'No Configuration'}</span><br>
            Co-Curricular Strategy Index: <span style="color:var(--text);font-weight:600">${s.extra?'Enrolled':'None'}</span>
          </div>
        </div>
        <div class="card"><div style="font-size:12px;font-weight:700;margin-bottom:8px">Historical Trajectory Pipeline</div>
          <div class="sparkline" style="height:45px;align-items:flex-end;margin-top:10px">
            ${s.trend.map(t=>`<div style="flex:1;height:${t}%;background:var(--accent);opacity:0.85;border-radius:2px" title="Term node score: ${t}%"></div>`).join('')}
          </div>
          <div style="display:flex;justify-content:space-between;font-size:9px;color:var(--faint);margin-top:4px"><span>Historical Initialization</span><span>Active Node</span></div>
        </div>
      </div>
    </div>`;
  document.getElementById('stu-modal').style.display='block';
}

function closeModal(){document.getElementById('stu-modal').style.display='none'}

// ════════════════════════════════════════════
// ANALYTICS VIEW PLOT MATRIX
// ════════════════════════════════════════════
function initAnalyticsCharts(){
  const dsAvg=Math.round(STUDENTS.reduce((a,x)=>a+x.ds,0)/STUDENTS.length);
  const oopsAvg=Math.round(STUDENTS.reduce((a,x)=>a+x.oops,0)/STUDENTS.length);
  const pyAvg=Math.round(STUDENTS.reduce((a,x)=>a+x.python,0)/STUDENTS.length);
  const sqlAvg=Math.round(STUDENTS.reduce((a,x)=>a+x.sql,0)/STUDENTS.length);

  const ctxSub=document.getElementById('chart-an-sub').getContext('2d');
  if(window.anSubChart) window.anSubChart.destroy();
  window.anSubChart=new Chart(ctxSub,{
    type:'radar',
    data:{
      labels:['Data Struct.','OOPS','Python Core','SQL DB'],
      datasets:[{label:'Mean Metrics Class Index',data:[dsAvg,oopsAvg,pyAvg,sqlAvg],backgroundColor:'rgba(0,229,190,0.15)',borderColor:'var(--accent)',borderWidth:2}]
    },
    options:{
      responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false}},
      scales:{r:{grid:{color:'rgba(26,47,80,0.4)'},angleLines:{color:'rgba(26,47,80,0.4)'},pointLabels:{color:'#8892a4',font:{family:'Sora'}},ticks:{backdropColor:'transparent',color:'var(--faint)'}}}
    }
  });

  const crit=STUDENTS.filter(x=>x.risk==='Critical').length;
  const high=STUDENTS.filter(x=>x.risk==='High').length;
  const med=STUDENTS.filter(x=>x.risk==='Medium').length;
  const low=STUDENTS.filter(x=>x.risk==='Low').length;

  const ctxRisk=document.getElementById('chart-an-risk').getContext('2d');
  if(window.anRiskChart) window.anRiskChart.destroy();
  window.anRiskChart=new Chart(ctxRisk,{
    type:'doughnut',
    data:{
      labels:['Critical','High','Medium','Low'],
      datasets:[{data:[crit,high,med,low],backgroundColor:['#f43f5e','#f59e0b','#4f8ef7','#10b981'],borderWidth:0}]
    },
    options:{
      responsive:true,maintainAspectRatio:false,
      plugins:{legend:{position:'right',labels:{color:'#8892a4',font:{family:'Sora',size:11}}}}
    }
  });

  const ctxScatter=document.getElementById('chart-an-scatter').getContext('2d');
  const points=STUDENTS.map(x=>({x:x.att,y:x.gpa}));
  if(window.anScatterChart) window.anScatterChart.destroy();
  window.anScatterChart=new Chart(ctxScatter,{
    type:'scatter',
    data:{datasets:[{label:'Student Roster Vector Mapping',data:points,backgroundColor:'var(--accent)'}]},
    options:{
      responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false}},
      scales:{
        x:{title:{display:true,text:'System Attendance %',color:'#8892a4'},grid:{color:'rgba(26,47,80,0.2)'},ticks:{color:'#8892a4'}},
        y:{title:{display:true,text:'GPA',color:'#8892a4'},grid:{color:'rgba(26,47,80,0.2)'},ticks:{color:'#8892a4'}}
      }
    }
  });
}

// ════════════════════════════════════════════
// INTERVENTIONS HUB COHORTS
// ════════════════════════════════════════════
function renderInterventions(){
  const criticals=STUDENTS.filter(x=>x.risk==='Critical'||x.risk==='High');
  document.getElementById('int-critical-count').textContent=criticals.length;
  
  document.getElementById('interv-queue').innerHTML=criticals.map(s=>`
    <div class="risk-row">
      <div style="display:flex;align-items:center;gap:10px">
        <div style="width:7px;height:7px;border-radius:50%;background:${riskColor(s.risk)}"></div>
        <div><div style="font-size:12px;font-weight:600">${s.name}</div><div style="font-size:10px;color:var(--muted)">GPA ${s.gpa.toFixed(1)} · Grade ${s.grade}</div></div>
      </div>
      <div style="font-family:var(--mono);font-size:12px;font-weight:700;color:${s.att<70?'var(--danger)':'var(--amber)'}">${s.att}% Att</div>
      <div style="font-family:var(--mono);font-size:12px;font-weight:700;color:var(--danger)">${avg4(s)}% Score</div>
      <div><span class="badge" style="background:${riskBg(s.risk)};color:${riskColor(s.risk)}">${s.risk}</span></div>
      <div style="display:flex;gap:4px;justify-content:flex-end">
        <button class="btn btn-primary btn-sm" onclick="openStudentModal(${s.id})">Profile</button>
        <button class="btn btn-ghost btn-sm" onclick="toast('Intervention pipeline established for execution framework context.','success')">Deploy</button>
      </div>
    </div>`).join('');

  const library=[
    {t:"Academic Tutoring Program",d:"Intense one-on-one small group logic review schedules 3× weekly.",e:"📚",c:"var(--accent)"},
    {t:"Attendance Recovery Protocol",d:"Daily active registry tracing alerts, mentor calls, operational triggers.",e:"📅",c:"var(--amber)"},
    {t:"Counseling Behavioral Module",d:"Triage referrals tracking behavioral drop coefficients.",e:"🛡️",c:"var(--purple)"},
    {t:"Peer Collaborative Pods",d:"Pairing lower performance matrices nodes with high validation scores.",e:"👥",c:"var(--blue)"}
  ];

  document.getElementById('strat-grid').innerHTML=library.map(l=>`
    <div class="strat-card">
      <div class="strat-icon" style="background:${l.c}22;color:${l.c}">${l.e}</div>
      <div>
        <div style="font-size:13px;font-weight:600">${l.t}</div>
        <p style="font-size:11px;color:var(--muted);margin-top:3px;line-height:1.4">${l.d}</p>
      </div>
    </div>`).join('');
}

// ════════════════════════════════════════════
// COMPARATIVE ANALYTICS CROSS BOARD
// ════════════════════════════════════════════
function populateCompareSelects(){
  const sA=document.getElementById('cmp-a'),sB=document.getElementById('cmp-b');
  const opts=`<option value="">— Select student —</option>`+STUDENTS.map(x=>`<option value="${x.id}">${x.name}</option>`).join('');
  sA.innerHTML=opts;sB.innerHTML=opts;
}

function renderComparison(){
  const idA=parseInt(document.getElementById('cmp-a').value),idB=parseInt(document.getElementById('cmp-b').value);
  if(!idA||!idB){
    document.getElementById('cmp-result').innerHTML=`<div class="empty card"><div class="empty-sub">Select two records to establish differential vectors.</div></div>`;
    return;
  }
  const a=STUDENTS.find(x=>x.id===idA),b=STUDENTS.find(x=>x.id===idB);
  
  const mRow=(lbl,valA,valB,isBetter)=>{
    return `
      <div class="compare-metric">
        <span style="font-size:12px;font-weight:500;color:var(--muted);width:30%">${lbl}</span>
        <span style="font-family:var(--mono);font-size:12px;font-weight:600;width:35%;text-align:center;color:${isBetter(valA,valB)?'var(--accent)':'var(--text)'}">${valA}</span>
        <span style="font-family:var(--mono);font-size:12px;font-weight:600;width:35%;text-align:center;color:${isBetter(valB,valA)?'var(--accent)':'var(--text)'}">${valB}</span>
      </div>`;
  };

  document.getElementById('cmp-result').innerHTML=`
    <div style="display:flex;gap:16px">
      <div class="compare-col">
        <div style="display:flex;justify-content:space-between;border-bottom:1px solid var(--border);padding-bottom:10px;margin-bottom:10px">
          <span style="font-size:11px;font-weight:700;color:var(--faint);text-transform:uppercase">Metrics Configuration Parameter Node</span>
          <span style="font-size:12px;font-weight:700;color:var(--blue);width:35%;text-align:center">${a.name.split(' ')[0]}</span>
          <span style="font-size:12px;font-weight:700;color:var(--purple);width:35%;text-align:center">${b.name.split(' ')[0]}</span>
        </div>
        ${mRow('Cumulative GPA',a.gpa.toFixed(2),b.gpa.toFixed(2),(x,y)=>x>y)}
        ${mRow('System Attendance %',a.att+'%',b.att+'%',(x,y)=>parseInt(x)>parseInt(y))}
        ${mRow('Academic Score Mean',avg4(a)+'%',avg4(b)+'%',(x,y)=>parseInt(x)>parseInt(y))}
        ${mRow('Structures (DS)',a.ds,b.ds,(x,y)=>x>y)}
        ${mRow('Architecture (OOPS)',a.