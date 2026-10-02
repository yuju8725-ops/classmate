const gradeSubjects={
 '초등학생':['국어','영어','수학','사회','과학'],
 '중학생':['국어','영어','수학','사회','과학'],
 '고등학생':['국어','영어','수학','사회','과학'],
 '고3·재수생':['국어','영어','수학','사회','과학'],
 '검정고시':['국어','영어','수학','사회','과학','검정고시']
};
const details={
 '초등학생':{국어:['독해','어휘·문법','글쓰기','교과 국어'],영어:['파닉스','기초 문법','초등 독해','기초 회화'],수학:['연산','수와 연산','도형','측정','문제해결'],사회:['교과 사회','한국사 기초','자료 해석'],과학:['교과 과학','실험·탐구','과학 개념']},
 '중학생':{국어:['문학','독서','문법','내신 국어'],영어:['중등 문법','독해','어휘','듣기','내신 영어'],수학:['중1 수학','중2 수학','중3 수학','연산·개념','내신 심화'],사회:['중등 사회','역사①','역사②','내신 사회'],과학:['중1 과학','중2 과학','중3 과학','내신 과학']},
 '고등학생':{국어:['공통국어','문학','독서','화법과 언어','내신 국어','수능 국어'],영어:['공통영어','내신 영어','수능 영어','영어 독해','영어 문법'],수학:['공통수학','대수','미적분Ⅰ','확률과 통계','미적분Ⅱ','기하'],사회:['통합사회','한국사','세계사','동아시아사','생활과 윤리','사회·문화','정치와 법','경제'],과학:['통합과학','물리학Ⅰ','물리학Ⅱ','화학Ⅰ','화학Ⅱ','생명과학Ⅰ','생명과학Ⅱ','지구과학Ⅰ','지구과학Ⅱ']},
 '고3·재수생':{국어:['수능 문학','수능 독서','화법과 언어','수능 실전'],영어:['수능 독해','수능 어휘','수능 듣기','수능 실전'],수학:['대수','미적분Ⅰ','확률과 통계','미적분Ⅱ','기하','수능 수학 실전'],사회:['한국사','세계사','동아시아사','생활과 윤리','사회·문화','정치와 법','경제','수능 사탐 실전'],과학:['물리학Ⅰ','물리학Ⅱ','화학Ⅰ','화학Ⅱ','생명과학Ⅰ','생명과학Ⅱ','지구과학Ⅰ','지구과학Ⅱ','수능 과탐 실전']},
 '검정고시':{국어:['고졸 국어','중졸 국어','초졸 국어'],영어:['고졸 영어','중졸 영어','초졸 영어'],수학:['고졸 수학','중졸 수학','초졸 수학'],사회:['고졸 사회','중졸 사회','초졸 사회'],과학:['고졸 과학','중졸 과학','초졸 과학'],검정고시:['초졸 검정고시 종합','중졸 검정고시 종합','고졸 검정고시 종합']}
};
const targets=[['초등학생','기초부터 탄탄하게'],['중학생','내신관리와 실력향상'],['고등학생','내신·수능 대비'],['고3·재수생','목표 대학을 위해'],['검정고시','새로운 출발을 응원합니다']];
const subjectIcons={국어:'▤',영어:'A',수학:'√x',사회:'◎',과학:'⚗',검정고시:'◇'};
const subjectFocus={국어:'독해력과 표현력, 지문 분석 능력을 단계적으로 키웁니다.',영어:'어휘·문법·독해를 연결해 학교 시험과 목표 시험에 대응합니다.',수학:'개념 이해 → 유형 적용 → 오답 교정 → 실전 문제 해결 순서로 완성합니다.',사회:'핵심 개념과 자료 해석, 서술형·선택형 문제 적용을 함께 훈련합니다.',과학:'개념 원리와 탐구 자료 해석을 연결하고 계산·응용 문제까지 확장합니다.',검정고시:'출제 범위를 압축 정리하고 기출 중심으로 합격에 필요한 점수를 준비합니다.'};
const monthPlans={
 3:[['1개월차','진단 & 기초 정리','현재 실력과 취약 단원을 진단하고 필수 개념을 다시 세웁니다.','진단 테스트 · 핵심 개념 노트 · 기초 문제'],['2개월차','핵심 유형 집중','자주 출제되는 대표 유형을 익히고 틀린 이유를 스스로 설명하도록 훈련합니다.','유형별 문제 · 오답 분석 · 주간 점검'],['3개월차','실전 적용 & 완성','시간 안배와 실전 문제 적용을 반복하며 최종 취약점을 보완합니다.','실전 세트 · 누적 복습 · 최종 피드백']],
 6:[['1개월차','진단 & 학습설계','수준·목표·학습습관을 점검하고 개인별 6개월 로드맵을 설정합니다.','진단평가 · 목표설정 · 학습계획'],['2개월차','기초 개념 강화','선행 단원과 필수 개념의 빈틈을 메우고 기본 문제의 정확도를 높입니다.','개념정리 · 기본문제 · 복습체크'],['3개월차','핵심 개념 완성','현재 과정의 핵심 개념을 연결하고 단원별 대표 유형을 정리합니다.','개념 연결 · 대표유형 · 단원평가'],['4개월차','유형 & 심화 훈련','응용·서술형·고난도 유형으로 확장하며 문제 해결 과정을 다듬습니다.','응용문제 · 서술형 · 오답노트'],['5개월차','취약점 집중 보완','누적 결과를 분석해 반복되는 실수와 약한 단원을 집중 보완합니다.','취약단원 · 재시험 · 1:1 피드백'],['6개월차','실전 & 총정리','실전 세트와 누적 복습으로 목표 시험 또는 다음 단계에 대비합니다.','실전모의 · 누적복습 · 최종진단']],
 9:[['1개월차','정밀 진단','현재 수준과 학습 습관을 세밀하게 분석하고 장기 목표를 설정합니다.','진단평가 · 상담 · 목표설정'],['2개월차','기초 체력 만들기','이전 과정의 결손을 보완하고 꼭 필요한 기본기를 안정화합니다.','필수개념 · 기초문제 · 복습루틴'],['3개월차','개념 1단계','핵심 개념을 이해하고 기본 유형에 정확하게 적용합니다.','개념수업 · 기본유형 · 단원점검'],['4개월차','개념 2단계','단원 간 연결과 복합 개념을 다루며 사고 범위를 넓힙니다.','연결개념 · 복합유형 · 서술훈련'],['5개월차','유형 집중','빈출 유형을 빠르게 구분하고 풀이 전략을 선택하는 힘을 기릅니다.','빈출유형 · 풀이전략 · 시간관리'],['6개월차','심화 적용','난도가 높은 문제와 변형 문제를 통해 응용력을 강화합니다.','심화문제 · 변형문제 · 1:1 첨삭'],['7개월차','취약점 보완','누적 오답을 분석해 반복되는 약점을 제거하고 정확도를 높입니다.','오답분석 · 취약단원 · 재점검'],['8개월차','실전 대비','실제 시험과 유사한 환경에서 문제를 풀며 속도와 안정성을 높입니다.','실전세트 · 시간훈련 · 실수교정'],['9개월차','최종 완성','전 범위를 압축 복습하고 이후 학습 방향까지 정리합니다.','누적복습 · 최종평가 · 다음단계 설계']]
};
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
function setOptions(el,arr,placeholder){el.innerHTML=(placeholder?`<option value="">${placeholder}</option>`:'')+arr.map(x=>`<option value="${x}">${x}</option>`).join('')}
$('.target-cards').innerHTML=targets.map((x,i)=>`<article data-grade="${x[0]}"><div class="avatar">${['👧','👦','👩‍🎓','👨‍🎓','🧑‍💻'][i]}</div><h3>${x[0]}</h3><small>${x[1]}</small></article>`).join('');
const subjects=['국어','영어','수학','사회','과학','검정고시'];
$('.subject-grid').innerHTML=subjects.map(x=>`<button data-subject="${x}">${subjectIcons[x]}<br>${x}</button>`).join('');
const cG=$('#cGrade'),cS=$('#cSubject'),cD=$('#cDetail'), fG=$('#grade'),fS=$('#subject'),fD=$('#detail');
setOptions(cG,Object.keys(gradeSubjects));
let month=3;
function availableDetails(g,s){return (details[g]&&details[g][s])||[`${s} 종합`]}
function syncCurrSubjects(){setOptions(cS,gradeSubjects[cG.value]);syncCurrDetails()}
function syncCurrDetails(){setOptions(cD,availableDetails(cG.value,cS.value));updateDetailPanel();render()}
function updateDetailPanel(){
 const g=cG.value,s=cS.value,arr=availableDetails(g,s); $('#detailPanel b').textContent=`${g} · ${s} 세부과목`;
 $('#detailChips').innerHTML=arr.map(x=>`<button data-detail="${x}" class="${x===cD.value?'active':''}">${x}</button>`).join('');
 $$('#detailChips button').forEach(b=>b.onclick=()=>{cD.value=b.dataset.detail;updateDetailPanel();render();$('#curriculum').scrollIntoView({behavior:'smooth',block:'start'})});
}
function render(){
 const g=cG.value,s=cS.value,d=cD.value,plans=monthPlans[month];
 $('#roadmapSummary').innerHTML=`<div><span>${g}</span><b>${d}</b><p>${subjectFocus[s]||'학생의 현재 수준과 목표에 맞춰 단계별로 학습합니다.'}</p></div><strong>${month}개월 과정 · 총 ${plans.length}단계</strong>`;
 $('#roadmap').innerHTML=plans.map((p,i)=>`<article style="animation-delay:${i*.035}s"><div class="road-head"><b>${p[0]}</b><span>STEP ${String(i+1).padStart(2,'0')}</span></div><h3>${p[1]}</h3><p>${d} 학습에서 ${p[2]}</p><div class="learn-box"><small>이달의 학습</small><strong>${p[3]}</strong></div></article>`).join('');
}
cG.onchange=syncCurrSubjects;cS.onchange=syncCurrDetails;cD.onchange=()=>{updateDetailPanel();render()};syncCurrSubjects();
$$('.months button').forEach(b=>b.onclick=()=>{$$('.months button').forEach(x=>x.classList.remove('active'));b.classList.add('active');month=+b.dataset.month;render()});
function syncFinderDetails(){const g=fG.value||'고등학생',s=fS.value||'수학';setOptions(fD,availableDetails(g,s),'세부과목 선택')}
fG.onchange=syncFinderDetails;fS.onchange=syncFinderDetails;syncFinderDetails();
$$('[data-grade]').forEach(x=>x.onclick=()=>{cG.value=x.dataset.grade;syncCurrSubjects();updateDetailPanel();$('#subjects').scrollIntoView({behavior:'smooth',block:'center'})});
$$('[data-subject]').forEach(x=>x.onclick=()=>{const s=x.dataset.subject;if(!gradeSubjects[cG.value].includes(s)){cG.value=s==='검정고시'?'검정고시':'고등학생';syncCurrSubjects()}cS.value=s;syncCurrDetails();$$('[data-subject]').forEach(y=>y.classList.remove('active'));x.classList.add('active');updateDetailPanel()});
$('.finder .big').onclick=e=>{e.preventDefault();if(fG.value)cG.value=fG.value;syncCurrSubjects();if(fS.value&&gradeSubjects[cG.value].includes(fS.value)){cS.value=fS.value;syncCurrDetails()}if(fD.value&&availableDetails(cG.value,cS.value).includes(fD.value)){cD.value=fD.value;updateDetailPanel();render()}$('#curriculum').scrollIntoView({behavior:'smooth'})};


// 수업 후기 30개: 첫 화면에는 3개만 표시하고, 더보기 버튼으로 전체 후기를 펼칩니다.
const reviews=[
 ['중3 수학 수강생','수학에서 막히는 부분을 바로 질문할 수 있고, 제 진도에 맞춰 설명해줘서 좋아요.'],
 ['고2 과학 수강생','지역에 원하는 과학 선생님이 없었는데 화상수업으로 세부과목까지 선택할 수 있었어요.'],
 ['검정고시 준비생','검정고시 준비 순서를 잡아주니 혼자 공부할 때보다 계획이 명확해졌습니다.'],
 ['초6 수학 학부모','아이가 문제를 대충 넘기는 습관이 있었는데 풀이 과정을 하나씩 확인해주셔서 좋아졌어요.'],
 ['중2 영어 수강생','문법만 외울 때보다 독해 문장에서 같이 설명해주셔서 이해가 훨씬 잘 됩니다.'],
 ['고1 공통수학 수강생','고등학교 올라와서 수학이 갑자기 어려워졌는데 기초부터 다시 정리해주셔서 따라갈 수 있었어요.'],
 ['고3 수능 영어 수강생','매주 약한 유형을 따로 정리해주셔서 모의고사 공부 방향을 잡는 데 도움이 됐어요.'],
 ['고2 물리학Ⅰ 수강생','공식만 외우는 게 아니라 왜 그렇게 되는지 그림으로 설명해주셔서 문제 적용이 쉬워졌습니다.'],
 ['중1 국어 학부모','온라인 수업이라 집중을 걱정했는데 1:1이라 질문도 많이 하고 수업 참여도가 높아요.'],
 ['초5 영어 수강생','모르는 단어를 바로 물어볼 수 있고 선생님이 재미있게 설명해주셔서 영어 시간이 덜 어렵게 느껴져요.'],
 ['고2 미적분Ⅰ 수강생','개념과 문제풀이를 따로 하지 않고 연결해서 알려주셔서 오답이 왜 생겼는지 알게 됐어요.'],
 ['고1 통합과학 학부모','학교 진도에 맞춰 복습과 다음 단원 예습을 조절해주셔서 내신 준비가 한결 편해졌습니다.'],
 ['중3 수학 학부모','시험 전에 취약 단원만 다시 모아서 점검해주시는 방식이 아이에게 잘 맞았습니다.'],
 ['고3 확률과 통계 수강생','문제 유형별 접근 순서를 정리해주셔서 처음 보는 문제에서도 무엇부터 해야 할지 알겠어요.'],
 ['검정고시 영어 수강생','영어 기초가 거의 없어서 걱정했는데 시험에 필요한 부분부터 차근차근 알려주셔서 부담이 줄었어요.'],
 ['초4 국어 학부모','독해 문제를 풀고 끝나는 게 아니라 왜 그렇게 생각했는지 말하게 해주셔서 읽는 습관이 좋아졌어요.'],
 ['중2 과학 수강생','학교에서 이해하지 못했던 단원을 화면 자료로 다시 설명해주셔서 시험 공부할 때 도움이 됐습니다.'],
 ['고1 한국사 수강생','시대 흐름을 먼저 잡고 세부 내용을 정리하니까 암기할 내용이 훨씬 체계적으로 보였어요.'],
 ['재수생 수학 수강생','혼자 공부하면서 계속 미뤘던 취약 단원을 정해진 계획대로 관리받을 수 있어서 좋았습니다.'],
 ['중3 영어 학부모','숙제만 내주는 수업이 아니라 틀린 문제를 다음 시간에 다시 확인해주셔서 관리받는 느낌이 들어요.'],
 ['고2 화학Ⅰ 수강생','계산 문제에서 자꾸 막혔는데 풀이 순서를 반복해서 연습하니 실수가 많이 줄었습니다.'],
 ['초6 수학 수강생','제가 푼 화면을 같이 보면서 어디서 틀렸는지 바로 알려주셔서 혼자 오답할 때보다 이해가 빨라요.'],
 ['고3 수능 국어 수강생','지문을 읽는 순서와 근거를 찾는 방법을 반복해서 연습하니 문제를 보는 방식이 달라졌습니다.'],
 ['중1 수학 수강생','학교 수업에서 놓친 부분을 제 속도에 맞춰 다시 설명해주셔서 질문하기 편해요.'],
 ['고2 생명과학Ⅰ 수강생','자료 해석 문제를 단계별로 같이 풀어보면서 어려웠던 유형에 자신감이 생겼어요.'],
 ['검정고시 수학 학부모','오랜만에 공부를 다시 시작해서 걱정했는데 목표 기간에 맞춘 계획이 있어서 꾸준히 하고 있습니다.'],
 ['고1 영어 수강생','내신 본문을 그냥 외우는 게 아니라 문장 구조까지 같이 분석해주셔서 변형 문제에 도움이 됩니다.'],
 ['중3 역사 수강생','사건을 연도만 외우지 않고 앞뒤 흐름으로 설명해주셔서 기억하기가 쉬워졌어요.'],
 ['고3 지구과학Ⅰ 수강생','헷갈리는 자료와 그래프를 반복해서 비교해주셔서 실전 문제에서 판단 속도가 빨라졌습니다.'],
 ['재수생 국어 수강생','매달 학습 목표와 점검 내용을 확인할 수 있어서 혼자 공부할 때보다 루틴을 유지하기 좋았습니다.']
];
let reviewsExpanded=false;
function renderReviews(){
 const visible=reviewsExpanded?reviews:reviews.slice(0,3);
 $('#reviewGrid').innerHTML=visible.map((r,i)=>`<article class="review-card" style="animation-delay:${Math.min(i,9)*.035}s"><b>★★★★★</b><p>“${r[1]}”</p><small>${r[0]}</small></article>`).join('');
 const btn=$('#reviewMore'), count=$('#reviewCount');
 btn.innerHTML=reviewsExpanded?'후기 접기 <span>−</span>':'후기 더보기 <span>＋</span>';
 btn.setAttribute('aria-expanded',String(reviewsExpanded));
 count.textContent=`${visible.length} / ${reviews.length}개 후기`;
}
$('#reviewMore').onclick=()=>{
 reviewsExpanded=!reviewsExpanded;
 renderReviews();
 if(!reviewsExpanded) $('#reviews').scrollIntoView({behavior:'smooth',block:'start'});
};
renderReviews();

// V21 — consultation modal + Netlify Forms AJAX submission
(() => {
  const modal=document.getElementById('consultModal');
  const form=document.getElementById('consultForm');
  const status=document.getElementById('consultStatus');
  if(!modal||!form) return;
  const open=()=>{modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');setTimeout(()=>form.querySelector('input[name="name"]')?.focus(),80)};
  const close=()=>{modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open')};
  document.querySelectorAll('[data-open-consult]').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();open()}));
  document.querySelectorAll('[data-close-consult]').forEach(el=>el.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('is-open')) close()});
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    if(!form.reportValidity()) return;
    const btn=form.querySelector('.consult-submit'), old=btn.innerHTML;
    btn.disabled=true; btn.textContent='상담 신청을 접수하고 있습니다...'; status.textContent=''; status.className='consult-status';
    try{
      const body=new URLSearchParams(new FormData(form)).toString();
      const res=await fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body});
      if(!res.ok) throw new Error('submit failed');
      status.textContent='상담 신청이 접수되었습니다. 담당자가 확인 후 연락드리겠습니다.';
      status.className='consult-status ok'; form.reset();
    }catch(err){
      status.textContent='현재 접수에 실패했습니다. 잠시 후 다시 시도해주세요.';
      status.className='consult-status err';
    }finally{btn.disabled=false;btn.innerHTML=old}
  });
})();

// V23 teacher section
(()=>{const s=document.querySelector(".teachers-section"),b=document.getElementById("teacherMoreBtn");if(s&&b)b.addEventListener("click",()=>{const x=s.classList.toggle("expanded");b.textContent=x?"선생님 접기 −":"선생님 더보기 ＋"});const p=document.getElementById("preferredTeacher");document.querySelectorAll("[data-teacher-consult]").forEach(x=>x.addEventListener("click",()=>{if(p)p.value=x.dataset.teacherConsult||"";document.querySelector("[data-open-consult]")?.click()}));})();
