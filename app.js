const mentors=[
  {name:'周明远',title:'教授 / 博导',college:'人工智能学院',area:'自然语言处理 · 大模型',students:7,quota:9,color:'blue-avatar'},
  {name:'林雅雯',title:'副教授 / 硕导',college:'计算机学院',area:'数据挖掘 · 推荐系统',students:5,quota:6,color:'purple-avatar'},
  {name:'张立新',title:'教授 / 博导',college:'信息工程学院',area:'智能感知 · 机器人',students:8,quota:8,color:'orange'},
  {name:'王海峰',title:'副教授 / 硕导',college:'人工智能学院',area:'计算机视觉 · 多模态',students:4,quota:7,color:'green'},
  {name:'陈思远',title:'教授 / 硕导',college:'计算机学院',area:'软件工程 · 云计算',students:6,quota:8,color:'blue-avatar'},
  {name:'赵一鸣',title:'副教授 / 硕导',college:'信息工程学院',area:'网络安全 · 区块链',students:3,quota:6,color:'purple-avatar'}
];
const students=[
  ['李沐辰','2026010241','人工智能','周明远','论文开题','良好','李'],['王可心','2026010186','软件工程','陈思远','课程学习','良好','王'],['许嘉言','2026010330','计算机技术','林雅雯','论文撰写','需关注','许'],['郑书涵','2026010208','人工智能','周明远','论文开题','良好','郑'],['苏然','2026010159','网络与信息安全','赵一鸣','课程学习','良好','苏'],['何雨桐','2026010294','电子信息','张立新','答辩毕业','良好','何']
];
const candidateNames=[['林知夏','软件工程 · NLP 与大模型','林'],['顾予安','人工智能 · 计算机视觉','顾'],['沈清扬','电子信息 · 智能机器人','沈'],['宋言澈','计算机技术 · 数据挖掘','宋'],['唐语柔','人工智能 · 多模态学习','唐']];
const progress={
  '课程学习':[['培养计划提交','2026 级新生','10 月 12 日'],['中期课程选课','全体硕士生','10 月 16 日']],
  '论文开题':[['开题报告审核','李沐辰等 12 人','10 月 18 日'],['开题答辩安排','人工智能学院','10 月 20 日']],
  '论文撰写':[['中期检查材料','许嘉言等 8 人','10 月 28 日'],['学术成果登记','全体博士生','11 月 03 日']],
  '答辩毕业':[['预答辩资格审查','何雨桐等 5 人','10 月 15 日'],['学位论文盲审','2024 级硕士生','10 月 22 日']]
};
function initials(n){return n[0]}
function render(){
 document.querySelector('#mentor-load').innerHTML=mentors.slice(0,4).map((m,i)=>`<tr><td><span class="avatar ${m.color}">${initials(m.name)}</span><b>${m.name}</b></td><td>${m.college}</td><td>${m.title.split(' / ')[0]}</td><td>${m.students} 人</td><td><div class="load"><span>${m.students}/${m.quota}</span><div class="loadbar"><i style="width:${m.students/m.quota*100}%"></i></div></div></td><td><span class="status ${m.students/m.quota>.85?'busy':'good'}">${m.students/m.quota>.85?'接近满额':'正常'}</span></td></tr>`).join('');
 document.querySelector('#mentor-directory').innerHTML=mentors.map(m=>`<article class="mentor-card"><div class="mentor-top"><span class="avatar large ${m.color}">${initials(m.name)}</span><div><h3>${m.name}</h3><p>${m.title}</p><p>${m.college}</p></div></div><span class="direction">${m.area}</span><div class="mentor-foot"><span>在读学生 <b>${m.students} / ${m.quota}</b></span><button class="text-btn">查看档案 →</button></div></article>`).join('');
 document.querySelector('#student-list').innerHTML=students.map(s=>`<tr><td><span class="avatar">${s[6]}</span><b>${s[0]}</b></td><td>${s[1]}</td><td>${s[2]}</td><td>${s[3]}</td><td><span class="stage">${s[4]}</span></td><td><span class="online"></span>${s[5]}</td><td>⋮</td></tr>`).join('');
 document.querySelector('#candidates').innerHTML=candidateNames.map((c,i)=>`<div class="candidate ${i===0?'selected':''}"><span class="avatar ${i===0?'purple-avatar':''}">${c[2]}</span><div><b>${c[0]}</b><p>${c[1]}</p></div><small>查看 ›</small></div>`).join('');
 document.querySelector('#progress-board').innerHTML=Object.entries(progress).map(([stage,tasks])=>`<div class="progress-column"><header>${stage}<span>${tasks.length}</span></header>${tasks.map(t=>`<div class="task-card"><b>${t[0]}</b><p>${t[1]}</p><small>◷ ${t[2]}</small><div class="avatars"><span class="avatar">研</span><span class="avatar blue-avatar">导</span></div></div>`).join('')}</div>`).join('');
 document.querySelector('#messages-list').innerHTML=[['培养进度提醒','12 名学生的开题报告将于 10 月 18 日截止，请提醒相关导师及时审核。','10 分钟前'],['双选结果待确认','林知夏已接受周明远教授的指导邀请，等待导师确认。','1 小时前'],['系统公告','2026 年研究生导师年度考核工作现已开始。','昨天']].map(x=>`<div class="message"><div class="message-icon">◌</div><div><b>${x[0]}</b><p>${x[1]}</p><small>${x[2]}</small></div></div>`).join('');
}
function openModal(title){document.querySelector('#modal-title').textContent=title;document.querySelector('#modal').classList.add('show')}
document.querySelectorAll('.nav-item[data-view], [data-view-link]').forEach(el=>el.addEventListener('click',()=>{let id=el.dataset.view||el.dataset.viewLink;document.querySelectorAll('.view').forEach(v=>v.classList.toggle('visible',v.id===id));document.querySelectorAll('.nav-item').forEach(v=>v.classList.toggle('active',v.dataset.view===id));const titles={dashboard:'概览',mentors:'导师管理',students:'研究生管理',matching:'师生匹配',progress:'培养进度',messages:'通知中心'};document.querySelector('#page-title').textContent=titles[id]}));
document.querySelector('#quick-add').onclick=()=>openModal('新增档案');document.querySelector('#add-mentor').onclick=()=>openModal('添加导师');document.querySelector('#add-student').onclick=()=>openModal('添加学生');document.querySelector('#close-modal').onclick=()=>document.querySelector('#modal').classList.remove('show');document.querySelector('#modal').onclick=e=>{if(e.target.id==='modal')e.currentTarget.classList.remove('show')};document.querySelector('.modal').onsubmit=e=>{e.preventDefault();document.querySelector('#modal').classList.remove('show')};render();

const roles={
 student:{label:'研究生',name:'李沐辰',account:'2026010241',nav:['dashboard','progress','messages']},
 mentor:{label:'导师',name:'周明远',account:'mentor01',nav:['dashboard','students','matching','progress','messages']},
 secretary:{label:'学院研究生教学秘书',name:'陈老师',account:'secretary01',nav:['dashboard','mentors','students','matching','progress','messages']},
 leader:{label:'学院分管领导',name:'王院长',account:'leader01',nav:['dashboard','mentors','students','progress','messages']},
 admin:{label:'研究生院工作人员（超级权限）',name:'研究生院管理员',account:'admin',nav:['dashboard','mentors','students','matching','progress','messages']}
};
const rolePicker=document.querySelector('#login-role');
rolePicker.addEventListener('change',()=>{document.querySelector('#login-account').value=roles[rolePicker.value].account});
document.querySelector('#toggle-password').onclick=()=>{const input=document.querySelector('#login-password');input.type=input.type==='password'?'text':'password';document.querySelector('#toggle-password').textContent=input.type==='password'?'显示':'隐藏'};
document.querySelector('#login-form').addEventListener('submit',event=>{
 event.preventDefault();
 const role=rolePicker.value, account=document.querySelector('#login-account').value.trim(), password=document.querySelector('#login-password').value;
 if(password!=='123456'){document.querySelector('#login-error').textContent='演示登录密码为 123456';return}
 const selected=roles[role];
 document.querySelector('#login-error').textContent='';
 document.querySelector('#login-screen').hidden=true;document.querySelector('#app-shell').hidden=false;
 document.querySelector('#user-name').textContent=account===selected.account?selected.name:account;
 document.querySelector('#user-avatar').textContent=(account===selected.account?selected.name:account)[0];
 document.querySelector('#user-role').textContent=selected.label;
 const workspace=document.querySelector('.workspace');workspace.querySelector('b').textContent=role==='admin'?'研究生院':role==='student'?'个人空间':role==='mentor'?'导师工作台':'人工智能学院';workspace.querySelector('small').textContent=selected.label;
 document.querySelectorAll('.nav-item[data-view]').forEach(item=>{item.hidden=!selected.nav.includes(item.dataset.view)});
 document.querySelector('#settings-link').hidden=role!=='admin';
 document.querySelector('#quick-add').hidden=role!=='admin'&&role!=='secretary';
 document.querySelector('#add-mentor').hidden=role!=='admin'&&role!=='secretary';
 document.querySelector('#add-student').hidden=role!=='admin'&&role!=='secretary';
 document.querySelector('#dashboard .stats-grid').hidden=role==='student'||role==='mentor';
 document.querySelector('#dashboard .distribution').hidden=role==='student'||role==='mentor';
 const welcome=document.querySelector('#dashboard .welcome');welcome.querySelector('h2').innerHTML=`早上好，${selected.name} <span>👋</span>`;
 welcome.querySelector('p').textContent=role==='student'?'查看个人培养计划、导师反馈与近期培养节点。':role==='mentor'?'查看指导学生进度、待审核事项与师生匹配邀请。':role==='leader'?'查看学院研究生培养情况与需要关注的事项。':'本学期共有 186 名研究生、42 名导师正在开展培养工作。';
 document.querySelector('#mentor-load').closest('.table-panel').hidden=role==='student'||role==='mentor';
 if(role==='student'){document.querySelector('#page-title').textContent='概览'}
});
document.querySelector('#logout').onclick=()=>{document.querySelector('#app-shell').hidden=true;document.querySelector('#login-screen').hidden=false};
