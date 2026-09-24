// M.M. Mokone Memorial Annual Conference 2026 — Full 8-Section Form
// GitHub Pages version

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzuLLT1P3bypTDws-lwex8Ieq_svIeXJpjN3a5yX5R-GSLWH4t9C8T3zyMRXT5WWac78Q/exec";

const D={
  "Capital District":{pe:"The Rev. Mandisi Albert Mexico",c:[
    {n:"Ebenezer AME Church, Atteridgeville",p:"The Rev. Modikoe Amiel Mpye",a:"Sis Elizabeth Dooka",y:"Sis Reagile Madiba"},
    {n:"Mt. Sinai AME Church, Mamelodi",p:"The Rev. Bernice Mothibi Ntsepe",a:"Sis Portia Khanye",y:"Sis Mpho Mothobi"},
    {n:"Nkosi Memorial AME Church, Tlhabane",p:"The Rev. Sebego Zephaniah Moremi",a:"Bro Ofentse Johannes Mosidi",y:"Sis Botlhale Salamina Mojapelo"},
    {n:"DM Robinson AME Church, Saulsville",p:"The Rev. Thapelo Maswabi Simon Selebalo",a:"Bro Sammy Dithole",y:"Bro Thato Kgatiso"},
    {n:"Chirwa Memorial AME Church, Mabeskraal",p:"The Rev. Letta Boitumelo Masigo",a:"Sis Violet Lenkwane",y:"Bro Nkosinathi Cindi"},
    {n:"Madiga Memorial AME Church, Sandfontein",p:"The Rev. Ngaletsang Frans Maloreng",a:"Sis Josephine Mandlazi",y:"Sis Koketso Sekoboane"},
    {n:"Ludia Phiring AME Church, Luka",p:"The Rev. Tebogo Kingsley Baloyi",a:"Sis Getrude Tshigeng",y:"Sis Mpho Nethonzhe"},
    {n:"Emmanuel A.M.E. Church, Boitekong",p:"The Rev. Fred Modisaotsile Mogaadile",a:"Sis Ouma Legodi",y:"Sis Sibongile Adams"},
    {n:"Mt. Olivet A.M.E. Church, Olievenhoutbosch",p:"The Rev. Louisa Elminah Phomotso Makhura",a:"Dr Vusi Nduna",y:"Sis Reshoketswe Makhura"},
    {n:"Bethel A.M.E. Church, Pretoria CBD",p:"The Rev. Kgositlou Mmalorato Moikanyi",a:"Sis Maphefo Mangena",y:"Bro Katleho Makhetla"},
    {n:"PA Khiba Memorial AME Church, Mogwase",p:"The Rev. Dr. Maria Shadibo Diale",a:"Sis Kgomotso Seraelo",y:"Sis Palesa Keoagile Mphela"},
    {n:"The Ark AME Church, Ekangala",p:"The Rev. Martin Billy Mokgoko",a:"Sis Mmakepa Mogaswa",y:"Sis Thobile Mahlangu"},
    {n:"The Diamond A.M.E. Church, Cullinan",p:"The Rev. Prof Velaphi John Ndimande",a:"Sis Zoliswa Shongoane",y:"Sis Rinae Mahosi"},
    {n:"Nellmapius AME Church, Nellmapius",p:"The Rev. Tebogo Gordon Mabena",a:"Sis Lindiwe Mtilene",y:"Sis Zanele Ngwenya"},
    {n:"Anna Senatle AME Church, Allemansedrift",p:"The Rev. Dr. Ramphelane Wheelwright Morewane",a:"Bro Isaac Shika",y:"Sis Adolphina Ratlhagane"},
    {n:"Monnakato AME Church, Monnakato",p:"The Rev. Sekhupi Peter Machuisa",a:"Sis Moipone Motlhamme",y:"Sis Thato Sebalo"},
    {n:"Kwa-Mhlanga A.M.E. Church, Kwa-Mhlanga",p:"Rev. Moiketsi Jacob Morake",a:"Sis Mildred Sibiya",y:"Bro Aron Khumalo"},
    {n:"Nthoane Memorial AME Church, Mmatau",p:"Rev. Dr. Kelebogile Patience Olyn",a:"Bro Bassie Motswenyane",y:"Sis Ntswaki Motswenyane"}
  ]},
  "Ga-Rankuwa District":{pe:"The Rev. Lekubela Simon Moobi",c:[
    {n:"Mokone Temple",p:"The Rev. George Olihile Motabogi",a:"Sis. Didintle V. Motsuenyane",y:"Bro. Goitsemang Mpye"},
    {n:"Agnes B. Hildebrand",p:"The Rev. Ramotsepa Dan Saul Nkopodi",a:"Sis. Bontle Thibedi",y:"Sis. Kopano Phehla"},
    {n:"John E. Hunter Memorial",p:"The Rev. Montle Andries Nketle",a:"Sis. Esther Maduma",y:"Sis. Khwezi Makhura"},
    {n:"W.N. Nduna Memorial",p:"The Rev. Dr. Mathapelo Sugar Sekhu",a:"Bro. Malakia Matlhabe",y:"Sis. Motlhago Motsai"},
    {n:"Emmanuel A.M.E. Church, Ga-Rankuwa",p:"The Rev. Collen Manzini Moseki",a:"Bro. Gopolang Mogorosi",y:"Sis. Semakaleng Maribatse"},
    {n:"Lake Bethesda",p:"The Rev. Mmakgabo Gwendoline Judy Sepoloane",a:"Sis. Granny Moselane",y:"Didintle Motlhamme"},
    {n:"Ginya Memorial",p:"Rev. Lindiwe Minah Mathenjwa",a:"Sis. Anna Diale",y:"Sis Basetsana Chipane"},
    {n:"Francis Herman Gow",p:"The Rev. Mothusi Clouphurs Mekgoe",a:"Sis. Rebecca Nyathi",y:"Sis. Tsholofelo Molatlhegi"},
    {n:"S.S. Manyane Memorial",p:"The Rev. Bontle Jacqueline Lebelwane-Qwabe",a:"Bro. Xolani Mfundisi",y:"Sis. Lethabo Mohlala"},
    {n:"Mount Zion, Ga-Rankuwa",p:"The Rev. Margaret Malebo Mahlako",a:"Bro. Kaizer Malebye",y:"Sis. Rorisang Motswaledi"}
  ]},
  "Bela-Bela District":{pe:"The Rev. George Olehile Motabogi",c:[
    {n:"DG Ming",p:"The Rev. Gaborone Phumuza Lesito",a:"Sis Obedin Buys",y:"Sis Otsile Montsho"},
    {n:"Lebala",p:"The Rev. Hendrick Madumetja Mogashoa",a:"Bro Dibetso Ernest Mametse",y:"Bro Maubane Makgoke"},
    {n:"Mabel Ming",p:"The Rev. Rametse Alex Ncube",a:"Sis Mona Phyllis Moloisane",y:"Sis Gloria Mmapula Rammutlwa"},
    {n:"William White",p:"The Rev. Charles Tshweene Mmatlwa",a:"Sis Mosima Mphela",y:"Sis V Malebye"},
    {n:"Mathibe Memorial",p:"The Rev. Daniel Vusi Mathe",a:"Sis Olga Makhene",y:"Sis Lettah Nkoko"},
    {n:"Ming Chapel",p:"The Rev. Mieta Mamsy Mabuela",a:"Sis Annah M Moeng",y:"Bro Ben Letlhabi"},
    {n:"Jerusalem E Ncha",p:"The Rev. Sello Joseph Booysen",a:"Bro Daniel Moatshe",y:"Sis Baratang Hlalethwa"},
    {n:"Hickman Chapel",p:"The Rev. Dikeledi Margaret Mokubyane",a:"Sis Elizabeth Ramolotja",y:"Sis Susannah Mothobi"},
    {n:"Thabazimbi AME Church",p:"Rev. Morulaganyi Botsheleng",a:"Sis Pauline Masenya",y:"Sis Nkele Kgomo"},
    {n:"BLM Lesutu",p:"The Rev. Bantekile Jacob Sehau",a:"Bro Tshepo Chiloane",y:"Sis Lesedi Molwantwa"}
  ]},
  "Polokwane District":{pe:"The Rev. Mohale Daniel Thabo Makhene",c:[
    {n:"John E Hunter",p:"The Rev. Allen Molefi Ambrose Sefora",a:"Bro. Setlakalane Mokou",y:"Bro. Neo Mannya"},
    {n:"Mt. Horeb",p:"The Rev. Sepeke Alpheus Moloelang",a:"Bro. Mahlatsi Seale",y:"Bro. Moletathaba Molewa"},
    {n:"Bethel, Polokwane",p:"The Rev. Thomas Molefi Leepo",a:"Sis. Motlatso Masipa",y:"Bro. Tshepo Tladi"},
    {n:"Mt. Zion",p:"The Rev. Khala Stephens Motsumi",a:"Sis. Asina Mashudu Maake",y:""},
    {n:"H.J Bryant",p:"The Rev. Lucas Matuma Moasa",a:"Sis. N.F Monyai",y:"Sis. Sewati Delica Sebata"},
    {n:"Aganang",p:"The Rev. Headman Mputiki Manabalala",a:"Sis. Mmanoko Masehela",y:"Sis. Manoko Matsi"},
    {n:"R.C Kgopong",p:"The Rev. Lehlohonolo Christian Ntshonyane",a:"Sis. R.M Masekwameng",y:"Bro. T Kgagabi"},
    {n:"H.E Malaka Memorial",p:"The Rev. Sewela Marichen Maila",a:"Sis. M.E Mailula",y:"Bro. Mack Mohale"},
    {n:"T.R Kgarose",p:"The Rev. Ntebatse Jael Nconco",a:"Sis. Julia Molepo",y:"Sis. Neo Mothapo"},
    {n:"Antioch",p:"The Rev. Andrew Bhekumuzi Nconco",a:"Sis. Winny Maboya",y:"Surprise Mochitele"},
    {n:"Richard Maponya",p:"Rev. Alpheus Madumetja Maribatse",a:"Bro. Isaac Machaba",y:"Sis. Boitumelo Pheto"}
  ]},
  "North End District":{pe:"The Rev. Dibetu Onica Leepo",c:[
    {n:"SPS Chesane",p:"The Rev. Rasekete Frans Moloisane",a:"Sis MS Magoro",y:"Sis T Rasebotsa"},
    {n:"Edith Ming",p:"The Rev. Paledi Shadrack Ratsoana",a:"Bro MJ Molala",y:"Bro TK Mokoena"},
    {n:"Thorometjane",p:"The Rev. Setumo Daniel Moloisane",a:"Bro TM Morewane",y:"Sis MB Motubatse"},
    {n:"Thomas Morumudi",p:"The Rev. Katlego Lesego Bodigelo",a:"Sis MP Mashishi",y:"Sis AB Morumudi"},
    {n:"FC James",p:"The Rev. Semakaleng Joel Mengoae",a:"Sis MT Thloaela",y:"Sis DN Legodi"},
    {n:"Polokwane AME Church",p:"The Rev. Fulufhelo Godfrey Maiwashe",a:"Sis Lk Mathabatha",y:"Sis W Mashabela"},
    {n:"FC Cummings",p:"Rev. Thabang Masego Kobue",a:"Sis RM Rakgoale",y:"Sis RJ Sebata"},
    {n:"New Bethel",p:"The Rev. Mieki Moemise Mareme",a:"Sis SB Leshalabe",y:"Sis MS Mmadi"},
    {n:"Mosoge Lebelo",p:"The Rev. Dibetu Onica Leepo",a:"Bro MP Shika",y:""}
  ]},
  "Vhembe District":{pe:"The Rev. Ndinannyi Martin Tshivhase",c:[
    {n:"HB Senatle Cathedral",p:"The Rev. Mohale Daniel Thabo Makhene",a:"Sis. Khakhu J. Setjie",y:"Sis. Shonisani Mpilo"},
    {n:"Charles Rathogwa Ndou",p:"The Rev. Jabulane Hendrick Monegi",a:"Sis. Nthatheni G Maguga",y:"Sis. Muano M Mukhuba"},
    {n:"Sibasa Circuit",p:"The Rev. Maropeng Aubrey Monyemorathwe",a:"Bro. Azwitamisi J. Rasivhaga",y:"Bro. Shandukani Mahandana"},
    {n:"Songozwi Circuit",p:"The Rev. Kagisho Kenneth Mangate",a:"Sis. Monica Lebalane",y:"Sis. Zwivhuya Tshikota"},
    {n:"Mara Circuit",p:"The Rev. Mmbengeni McDonald Maiwashe",a:"Sis. MI Phuluwa",y:"Sis. Tendani T Maiwashe"},
    {n:"EM Makhuvha Chapel",p:"The Rev. Ndivhuwo Hazel Ndou",a:"Sis. Tshimangadzo Ramakuela",y:"Sis. Mulalo K Ramaliwa"},
    {n:"Maba Memorial",p:"Rev. Felleng Daphny Montjane",a:"Sis. Meriam Matibe",y:"Sis. Tumelo Molepo"},
    {n:"Dzanani Circuit",p:"Vacant",a:"Sis. Fhatuwani J. Ndou",y:"Bro. Junior Ngobeni"}
  ]}
};

function toggleEdit(fieldId,noteId,btn){
  const el=document.getElementById(fieldId);
  const note=document.getElementById(noteId);
  const isLocked=el.classList.contains("locked");
  if(isLocked){
    el.classList.remove("locked");el.classList.add("editable");
    el.removeAttribute("readonly");el.focus();
    btn.textContent="✓ Done editing";btn.classList.add("active");
    note.classList.add("show");
  } else {
    el.classList.add("locked");el.classList.remove("editable");
    el.setAttribute("readonly","");
    btn.textContent=fieldId==="pastor"?"✏ Edit name":"✏ Edit delegate";
    btn.classList.remove("active");
  }
}

function onDistrict(){
  const dv=document.getElementById("district").value;
  const cs=document.getElementById("church");
  document.getElementById("pe").value="";
  document.getElementById("pastor-card").style.display="none";
  document.getElementById("q1").style.display="none";
  document.getElementById("step1-btns").style.display="none";
  cs.innerHTML='<option value="">— Select Your Church —</option>';
  if(!dv){cs.disabled=true;return;}
  document.getElementById("pe").value=D[dv].pe;
  D[dv].c.forEach((c,i)=>{const o=document.createElement("option");o.value=i;o.textContent=c.n;cs.appendChild(o);});
  cs.disabled=false;
}

function onChurch(){
  const dv=document.getElementById("district").value,cv=document.getElementById("church").value;
  if(!dv||cv==="")return;
  const c=D[dv].c[+cv];
  // Reset edit state
  ["pastor","adult","youth"].forEach(id=>{
    const el=document.getElementById(id);
    el.classList.add("locked");el.classList.remove("editable");el.setAttribute("readonly","");
  });
  document.querySelectorAll(".edit-btn").forEach(b=>{b.classList.remove("active");});
  document.querySelectorAll(".edit-note").forEach(n=>{n.classList.remove("show");});
  document.getElementById("pastor").value=c.p;
  document.getElementById("adult").value=c.a||"—";
  document.getElementById("youth").value=c.y||"—";
  document.getElementById("pastor-card").style.display="block";
  document.getElementById("step1-btns").style.display="flex";
  // Random start for quotes
  startIdx=Math.floor(Math.random()*7);
  setQuotes();
  document.getElementById("q1").style.display="block";
  setTimeout(()=>document.getElementById("q1").scrollIntoView({behavior:"smooth",block:"nearest"}),100);
  // Show the Next button immediately — don't make pastor wait
  resubmissionAllowed = true;
  document.getElementById('step1-btns').style.display = 'flex';
  
  // Run resubmission check in background — will show warning if needed
  checkPreviousSubmission(c.n, dv);
}

function ax(id,val){
  const g=document.getElementById("tg-"+id);
  g.children[0].className=val?"y":"";g.children[1].className=val?"":"n";
  document.getElementById("am-"+id).style.display=val?"block":"none";
  if(!val)document.getElementById("ct-"+id).value="";
}
function tog(id,val){
  const g=document.getElementById("tg-"+id);
  g.children[0].className=val?"y":"";g.children[1].className=val?"":"n";
  const m={"out":["f-out",val],"ret":["f-ret",!val],"ann":["f-ann",val],"pea":["f-pea",val]};
  if(m[id])document.getElementById(m[id][0]).style.display=m[id][1]?"block":"none";
}
function goNext(s){
  if(!validate(s))return;
  document.getElementById("step-"+s).classList.remove("active");
  step=s+1;document.getElementById("step-"+step).classList.add("active");
  updateProg();window.scrollTo(0,0);
}
function goBack(s){
  document.getElementById("step-"+s).classList.remove("active");
  step=s-1;document.getElementById("step-"+step).classList.add("active");
  updateProg();window.scrollTo(0,0);
}
function updateProg(){
  for(let i=1;i<=4;i++){
    const ci=document.getElementById("c"+i),li=document.getElementById("l"+i);
    if(i<step){ci.className="pc done";ci.textContent="✓";li.className="pl off";}
    else if(i===step){ci.className="pc on";ci.textContent=i;li.className="pl on";}
    else{ci.className="pc off";ci.textContent=i;li.className="pl off";}
    if(i<4)document.getElementById("ln"+i).className=i<step?"pline done":"pline off";
  }
}
function validate(s){
  if(s===1){
    const d=document.getElementById("district").value,c=document.getElementById("church").value;
    document.getElementById("e-d").classList.toggle("show",!d);
    document.getElementById("e-c").classList.toggle("show",d&&c==="");
    return d&&c!=="";
  }
  if(s===2){
    const ids=["conversions","accessions","baptisms","membership","attendance","funds","paid-pastor","paid-pe","brought"];
    const empty=ids.filter(id=>document.getElementById(id).value==="");
    if(empty.length){const b=document.getElementById("eb2");b.textContent="Please complete all required fields.";b.classList.add("show");document.getElementById(empty[0]).scrollIntoView({behavior:"smooth",block:"center"});return false;}
    document.getElementById("eb2").classList.remove("show");return true;
  }
  if(s===4){
    if(!document.getElementById("acc1").value.trim()){document.getElementById("eb4").textContent="Please enter at least one major accomplishment.";document.getElementById("eb4").classList.add("show");return false;}
    document.getElementById("eb4").classList.remove("show");return true;
  }
  return true;
}


const COMPLETION_QUOTES = [
  {
    text: "Well done, good and faithful servant. You have been faithful over a little; I will set you over much. Enter into the joy of your Lord.",
    author: "Matthew 25:21",
    role: "The word spoken to every faithful shepherd who gives account of their year"
  },
  {
    text: "I have fought a good fight, I have finished my course, I have kept the faith. Henceforth there is laid up for me a crown of righteousness.",
    author: "2 Timothy 4:7",
    role: "The Apostle Paul — your report is your testimony of a year faithfully run"
  },
  {
    text: "There is something in every one of you that waits and listens for the sound of the genuine in yourself. It is the only true guide you will ever have.",
    author: "Howard Thurman",
    role: "Theologian & Mystic — Jesus and the Disinherited"
  },
  {
    text: "Do all the good you can, by all the means you can, in all the ways you can, in all the places you can, at all the times you can, to all the people you can, as long as ever you can.",
    author: "John Wesley",
    role: "Founder, Methodism — the theological root from which the AME connexion grew"
  },
  {
    text: "We are beholden to God for the light of the Gospel we enjoy — and we owe it to the generations who come after us to be found faithful. You have been found faithful.",
    author: "Richard Allen",
    role: "Founder, African Methodist Episcopal Church, Philadelphia 1816"
  },
  {
    text: "The minister is called to recognise the sufferings of his time in his own heart and make that recognition the starting point of his service. You have served well.",
    author: "Henri Nouwen",
    role: "The Wounded Healer — Priest and Spiritual Director"
  },
  {
    text: "Preaching is the business of eternity transacted in time. You have been faithful in that transaction through another year. Well done.",
    author: "Gardner Taylor",
    role: "Dean of American Preaching — Concord Baptist Church, Brooklyn"
  }
];

const MINISTRIES = [
  "Women's Missionary Society",
  "Lay Organisation",
  "Young People's and Children's Division",
  "Sons of Allen",
  "Allen Christian Evangelical League",
  "Richard Allen Young Adult Council",
  "Charlotte Maxeke Ladies Fellowship",
  "Women in Ministry",
  "MSWAWO + PK's",
  "Church School",
  "Music Ministry",
  "Evangelism and Outreach Ministry"
];

// Build ministry table rows
(function(){
  var tb = document.getElementById('min-tbody');
  if(!tb) return;
  MINISTRIES.forEach(function(m,i){
    var id = 'min'+i;
    var tr = document.createElement('tr');
    if(i%2===0) tr.className='alt';
    tr.innerHTML = '<td class="name">'+m+'</td>'+
      '<td><select id="'+id+'-a"><option value="">&#8212;</option><option>Yes</option><option>No</option></select></td>'+
      '<td><input type="number" id="'+id+'-m" min="0" placeholder="0"></td>'+
      '<td><input type="number" id="'+id+'-mt" min="0" placeholder="0"></td>'+
      '<td><input type="text" id="'+id+'-l" placeholder="Leader name"></td>';
    tb.appendChild(tr);
  });
})();

var step = 1;
var isResub = false;
var canProceed = false;
var editMode = false;
var _loadedSub = null;

function n(id){return document.getElementById(id);}
function v(id){var e=n(id);return e?e.value:'';}

// COUNTDOWN
function startCountdown(){
  function tick(){
    // Submission deadline
    var diff1 = new Date('2026-09-20T23:59:59') - new Date();
    if(diff1>0){
      n('c1d').textContent=String(Math.floor(diff1/86400000)).padStart(2,'0');
      n('c1h').textContent=String(Math.floor(diff1%86400000/3600000)).padStart(2,'0');
      n('c1m').textContent=String(Math.floor(diff1%3600000/60000)).padStart(2,'0');
      n('c1s').textContent=String(Math.floor(diff1%60000/1000)).padStart(2,'0');
    } else {
      var els=['c1d','c1h','c1m','c1s'];
      els.forEach(function(id){var e=n(id);if(e)e.textContent='00';});
    }
    // Annual Conference
    var diff2 = new Date('2026-10-08T08:00:00') - new Date();
    if(diff2>0){
      n('c2d').textContent=String(Math.floor(diff2/86400000)).padStart(2,'0');
      n('c2h').textContent=String(Math.floor(diff2%86400000/3600000)).padStart(2,'0');
      n('c2m').textContent=String(Math.floor(diff2%3600000/60000)).padStart(2,'0');
      n('c2s').textContent=String(Math.floor(diff2%60000/1000)).padStart(2,'0');
    } else {
      var els2=['c2d','c2h','c2m','c2s'];
      els2.forEach(function(id){var e=n(id);if(e)e.textContent='00';});
    }
  }
  tick();setInterval(tick,1000);
}
startCountdown();

// DISTRICT / CHURCH
function onDistrict(){
  var dv = v('district');
  var cs = n('church');
  cs.innerHTML='<option value="">&#8212; Select Church &#8212;</option>';
  n('pastor-card').style.display='none';
  n('s1btns').style.display='none';
  n('qcard').classList.remove('show');
  n('resub').classList.remove('show');
  n('chk').classList.remove('show');
  if(!dv||!D[dv])return;
  n('pe-name').value = D[dv].pe;
  D[dv].c.forEach(function(ch,i){
    var o=document.createElement('option');
    o.value=i; o.textContent=ch.n; cs.appendChild(o);
  });
}

function onChurch(){
  var dv=v('district'), cv=v('church');
  n('pastor-card').style.display='none';
  n('s1btns').style.display='none';
  n('qcard').classList.remove('show');
  n('resub').classList.remove('show');
  n('chk').classList.remove('show');
  isResub=false; canProceed=false;
  if(!dv||cv==='')return;
  var ch=D[dv].c[+cv];
  n('pastor').value=ch.p; n('adult').value=ch.a; n('youth').value=ch.y;
  n('h-pastor').value=ch.p; n('h-adult').value=ch.a; n('h-youth').value=ch.y;
  n('pastor-card').style.display='block';
  // Quote
  var QBANK=[
    {text:"There is something in every one of you that waits and listens for the sound of the genuine in yourself. It is the only true guide you will ever have.",author:"Howard Thurman",role:"Jesus and the Disinherited &#183; Theologian & Mystic"},
    {text:"A long obedience in the same direction &#8212; this is the heart of pastoral ministry. The congregation does not need a genius. They need someone faithful, someone who shows up, year after year.",author:"Eugene Peterson",role:"A Long Obedience in the Same Direction &#183; Presbyterian Pastor & Theologian"},
    {text:"Do all the good you can, by all the means you can, in all the ways you can, in all the places you can, at all the times you can, to all the people you can, as long as ever you can.",author:"John Wesley",role:"Founder, Methodism &#183; The theological root from which the AME connexion grew"},
    {text:"The minister is called to recognise the sufferings of his time in his own heart and make that recognition the starting point of his service.",author:"Henri Nouwen",role:"The Wounded Healer &#183; Priest, Author and Spiritual Director"},
    {text:"We are beholden to God for the light of the Gospel we enjoy &#8212; and we owe it to the generations who come after us to be found faithful.",author:"Richard Allen",role:"Founder, African Methodist Episcopal Church &#183; Philadelphia 1816"},
    {text:"Preaching is the business of eternity transacted in time. You have been faithful in that transaction through another year. Well done.",author:"Gardner Taylor",role:"Dean of American Preaching &#183; Concord Baptist Church, Brooklyn"},
    {text:"I have fought a good fight, I have finished my course, I have kept the faith. Henceforth there is laid up for me a crown of righteousness.",author:"2 Timothy 4:7",role:"The Apostle Paul &#183; Your report is your testimony of a year faithfully run"}
  ];
  var q=QBANK[Math.floor(Math.random()*QBANK.length)];
  n('qtxt').innerHTML='"'+q.text+'"';
  n('qauth').innerHTML='&#8212; '+q.author;
  n('qrole').innerHTML=q.role;
  n('qcard').classList.add('show');
  canProceed=true;
  n('s1btns').style.display='flex';
  checkResub(ch.n, dv);
}

function checkResub(churchName, districtName){
  var lk='sub_'+(churchName+districtName).replace(/[^a-z0-9]/gi,'').toLowerCase();
  var lp=null;
  try{lp=localStorage.getItem(lk);}catch(e){}
  if(lp){
    // localStorage shows previous submission — fetch sheet data for Load & Edit button
    n('chk').classList.add('show');
    fetch(SCRIPT_URL,{method:'GET'})
      .then(function(r){return r.json();})
      .then(function(data){
        n('chk').classList.remove('show');
        var ex=(data.submissions||[]).filter(function(s){
          return (s['Church']||'').trim().toLowerCase()===churchName.trim().toLowerCase()&&
                 (s['District']||'').trim().toLowerCase()===districtName.trim().toLowerCase();
        });
        var subData = ex.length>0 ? ex[ex.length-1] : null;
        showResub(churchName,lp,subData?subData['Pastor']:null,subData);
      })
      .catch(function(){
        n('chk').classList.remove('show');
        showResub(churchName,lp,null,null);
      });
    return;
  }
  n('chk').classList.add('show');
  var ctrl=new AbortController();
  var t=setTimeout(function(){ctrl.abort();},8000);
  fetch(SCRIPT_URL,{method:'GET',signal:ctrl.signal})
    .then(function(r){return r.json();})
    .then(function(data){
      clearTimeout(t);
      n('chk').classList.remove('show');
      var ex=(data.submissions||[]).filter(function(s){
        return (s['Church']||'').trim().toLowerCase()===churchName.trim().toLowerCase()&&
               (s['District']||'').trim().toLowerCase()===districtName.trim().toLowerCase();
      });
      if(ex.length>0){
        var last=ex[ex.length-1];
        var ts=last['Timestamp']?new Date(last['Timestamp']).toLocaleString('en-ZA',{year:'numeric',month:'long',day:'numeric',hour:'2-digit',minute:'2-digit'}):'Unknown date';
        showResub(churchName,ts,last['Pastor'],last);
      }
    })
    .catch(function(){
      clearTimeout(t);
      n('chk').classList.remove('show');
    });
}

function showResub(churchName,ts,pastor,subData){
  var prev=n('resub-prev');
  prev.innerHTML='<strong>Previous submission received:</strong> '+ts+(pastor?'<br>Pastor: '+pastor:'');
  n('rerr').classList.remove('show');
  _loadedSub = subData || null;
  var existing = document.getElementById('load-edit-btn');
  if(existing) existing.parentNode.removeChild(existing);
  if(subData){
    var loadBtn = document.createElement('button');
    loadBtn.id = 'load-edit-btn';
    loadBtn.textContent = '📋 Load & Edit My Previous Report';
    loadBtn.style.cssText = 'width:100%;padding:12px;background:#1a7a4a;color:white;border:none;border-radius:9px;font-size:14px;font-weight:700;cursor:pointer;font-family:"Open Sans",sans-serif;margin-bottom:10px';
    loadBtn.onclick = loadAndEdit;
    n('resub').insertBefore(loadBtn, n('resub').querySelector('.rl'));
  }
  n('resub').classList.add('show');
  isResub=true;
}

function cancelResub(){
  n('resub').classList.remove('show');
  n('church').value='';
  n('pastor-card').style.display='none';
  n('qcard').classList.remove('show');
  n('s1btns').style.display='none';
  isResub=false; canProceed=false;
}

function proceedResub(){
  var reason=n('resub-reason').value.trim();
  if(!reason){n('rerr').classList.add('show');return;}
  n('rerr').classList.remove('show');
  n('resub').classList.remove('show');
}

function toggleEdit(fid,bid){
  var f=n(fid), b=n(bid);
  if(f.hasAttribute('readonly')){
    f.removeAttribute('readonly'); f.classList.remove('lf'); f.focus();
    b.textContent='&#10003; Done'; b.classList.add('active');
  } else {
    f.setAttribute('readonly',''); f.classList.add('lf');
    b.textContent='&#9998; Edit'; b.classList.remove('active');
  }
}

// CALCULATIONS
function cv(pfx){
  var p=parseFloat(n(pfx+'-p').value)||0, c=parseFloat(n(pfx+'-c').value)||0;
  n(pfx+'-v').value=c-p;
}
function ct(){
  var pp=(parseFloat(n('adl-p').value)||0)+(parseFloat(n('yth-p').value)||0)+(parseFloat(n('chd-p').value)||0);
  var pc=(parseFloat(n('adl-c').value)||0)+(parseFloat(n('yth-c').value)||0)+(parseFloat(n('chd-c').value)||0);
  n('tot-p').value=pp; n('tot-c').value=pc; n('tot-v').value=pc-pp;
}
function co(pfx){
  var a=parseFloat(n(pfx+'-a').value)||0, p=parseFloat(n(pfx+'-p').value)||0;
  n(pfx+'-o').value=Math.max(0,a-p).toFixed(2);
}

// STEP NAVIGATION

function loadAndEdit(){
  if(!_loadedSub){return;}
  var s = _loadedSub;
  editMode = true;
  isResub = true;
  canProceed = true;
  n('resub').classList.remove('show');
  var loadBtn = document.getElementById('load-edit-btn');
  if(loadBtn) loadBtn.parentNode.removeChild(loadBtn);

  // Helper
  function set(id, val){ var el=n(id); if(el&&val!==undefined&&val!=='') el.value=val; }
  function g(k1,k2){ return s[k1]||s[k2]||''; }

  // SECTION A
  set('min-status', g('Ministerial Status','ministerialStatus'));
  set('date-appt',  g('Date Appointment','dateAppointment'));
  set('yrs-served', g('Years Served','yearsServed'));
  set('pastor-tel', g('Pastor Contact','pastorContact'));
  set('pastor-email',g('Pastor Email','pastorEmail'));
  set('station',    g('Station/Circuit','stationCircuit'));
  set('num-pts',    g('Preaching Points','numPreachingPoints'));
  set('church-addr',g('Church Address','churchAddress'));
  // Override locked pastor/delegate if different
  if(g('Pastor','pastor')) n('pastor').value = g('Pastor','pastor');
  if(g('Adult Delegate','adultDelegate')) n('adult').value = g('Adult Delegate','adultDelegate');
  if(g('Youth Delegate','youthDelegate')) n('youth').value = g('Youth Delegate','youthDelegate');

  // SECTION B
  var bMap={
    'Adults Prev':'adl-p','Adults Curr':'adl-c',
    'Youth Prev':'yth-p','Youth Curr':'yth-c',
    'Children Prev':'chd-p','Children Curr':'chd-c',
    'Attendance Prev':'att-p','Attendance Curr':'att-c',
    'Church School Prev':'cs-p','Church School Curr':'cs-c',
    'Tithers Prev':'tit-p','Tithers Curr':'tit-c',
    'Conversions Prev':'con-p','Conversions Curr':'con-c',
    'Accessions Prev':'acc-p','Accessions Curr':'acc-c',
    'Baptisms Prev':'bap-p','Baptisms Curr':'bap-c',
    'Confirmations Prev':'cfm-p','Confirmations Curr':'cfm-c',
    'Deaths Prev':'dth-p','Deaths Curr':'dth-c',
    'Transfers Prev':'trf-p','Transfers Curr':'trf-c'
  };
  Object.keys(bMap).forEach(function(k){ set(bMap[k], s[k]); });
  ct(); // recalculate totals

  // SECTION C
  var cMap={
    'ACB Assessed':'acb-a','ACB Paid':'acb-p','ACB Date':'acb-d',
    'MYB Assessed':'myb-a','MYB Paid':'myb-p','MYB Date':'myb-d',
    'ADV Assessed':'adv-a','ADV Paid':'adv-p','ADV Date':'adv-d',
    'OST Assessed':'ost-a','OST Paid':'ost-p','OST Date':'ost-d',
    'PEA Assessed':'pea-a','PEA Paid':'pea-p','PEA Date':'pea-d',
    'PED Assessed':'ped-a','PED Paid':'ped-p','PED Date':'ped-d',
    'PEC Assessed':'pec-a','PEC Paid':'pec-p','PEC Date':'pec-d',
    'PAN Assessed':'pan-a','PAN Paid':'pan-p','PAN Date':'pan-d',
    'PAS Assessed':'pas-a','PAS Paid':'pas-p','PAS Date':'pas-d',
    'RET Assessed':'ret-a','RET Paid':'ret-p','RET Date':'ret-d',
    'ERP Assessed':'erp-a','ERP Paid':'erp-p','ERP Date':'erp-d',
    'TAC Assessed':'tac-a','TAC Paid':'tac-p','TAC Date':'tac-d'
  };
  Object.keys(cMap).forEach(function(k){ set(cMap[k], s[k]); });
  set('funds-raised', g('Funds Raised','fundsRaised'));
  set('paid-pastor',  g('Paid to Pastor','paidPastor'));
  set('total-tithes', g('Total Tithes','totalTithes'));

  // SECTION D
  set('erp-pledged',    g('ERP Pledged','erpPledged'));
  set('erp-pledged-ref',g('ERP Pledged Ref','erpPledgedRef'));
  set('erp-paid-yr',    g('ERP Paid Year','erpPaidYear'));
  set('erp-paid-yr-ref',g('ERP Paid Year Ref','erpPaidYearRef'));
  set('erp-cumulative', g('ERP Cumulative','erpCumulative'));
  set('erp-cum-ref',    g('ERP Cum Ref','erpCumRef'));
  set('erp-outstanding',g('ERP Outstanding','erpOutstanding'));
  set('erp-settle',     g('ERP Settle Date','erpSettleDate'));

  // SECTION E - Ministries JSON
  var mins={};
  try{mins=JSON.parse(s['Ministries JSON']||s['ministries']||'{}');}catch(e){}
  MINISTRIES.forEach(function(m,i){
    var id='min'+i, info=mins[m]||{};
    set(id+'-a', info.active);
    set(id+'-m', info.members);
    set(id+'-mt',info.meetings);
    set(id+'-l', info.leader);
  });

  // SECTION F
  set('f-deed',      g('Title Deed','titleDeed'));
  set('f-deed-name', g('Title Deed Name','titleDeedName'));
  set('f-ame',       g('AME Registered','ameRegistered'));
  set('f-erf',       g('ERF Number','erfNumber'));
  set('f-ins',       g('Insured','insured'));
  set('f-ins-no',    g('Insurer Policy','insurerPolicy'));
  set('f-pars',      g('Parsonage','parsonage'));
  set('f-pars-cond', g('Parsonage Cond','parsonageCond'));
  set('f-npo',       g('NPO Number','npoNumber'));
  set('f-sars',      g('SARS Number','sarsNumber'));
  set('f-bank',      g('Bank AME','bankAME'));
  set('f-sigs',      g('Num Signatories','numSignatories'));
  set('f-fin',       g('Fin Statements','finStatements'));
  set('f-fin-date',  g('Fin Statements Date','finStatementsDate'));
  set('f-board',     g('Board Constituted','boardConstituted'));
  set('f-cc-date',   g('Last Church Conf','lastChurchConf'));

  // SECTION G
  set('g-acc1', g('Accomplishment 1','accomplishment1'));
  set('g-acc2', g('Accomplishment 2','accomplishment2'));
  set('g-ch1',  g('Challenge 1','challenge1'));
  set('g-ch2',  g('Challenge 2','challenge2'));
  set('g-out',  g('Outreach','outreach'));
  set('g-mat',  g('Matters for PE','mattersForPE'));

  // SECTION H
  set('h-pastor-date',  g('Cert Pastor Date','certPastorDate'));
  set('h-steward',      g('Steward Chair','stewardBoardChair'));
  set('h-steward-date', g('Steward Date','stewardBoardDate'));

  // Make ALL step dots clickable and show edit mode banner
  var banner = document.createElement('div');
  banner.style.cssText = 'background:#1a7a4a;color:white;padding:10px 16px;text-align:center;font-size:13px;font-weight:700;font-family:"Open Sans",sans-serif;margin-bottom:10px;border-radius:10px';
  banner.innerHTML = '✅ Report loaded — click any section (A–H) to jump directly to what you want to edit';
  var fw = document.getElementById('fw');
  if(fw) fw.insertBefore(banner, fw.firstChild);

  // Make progress dots clickable
  for(var i=1;i<=8;i++){
    (function(step_num){
      var dot = document.getElementById('d'+step_num);
      if(dot){ dot.style.cursor='pointer'; dot.onclick=function(){goStep(step_num);} }
    })(i);
  }

  // Show next button on step 1
  n('s1btns').style.display='flex';
  window.scrollTo(0,0);
}


function goStep(ns){
  if(ns>step&&!editMode&&!validate(step))return;
  document.querySelectorAll('.sc').forEach(function(s){s.style.display='none';});
  n('s'+ns).style.display='block';
  for(var i=1;i<=8;i++){
    var d=n('d'+i), l=n('l'+i), ln=n('ln'+i);
    d.className='dot'+(i===ns?' active':i<ns?' done':'');
    l.className='sl'+(i===ns?' active':'');
    if(ln) ln.className='sline'+(i<ns?' done':'');
  }
  n('spf').style.width=(ns/8*100)+'%';
  step=ns; window.scrollTo(0,0);
}

function validate(s){
  if(s===1){
    if(!v('district')){showErr("err1",'Please select your district.');return false;}
    if(v('church')===''){showErr("err1",'Please select your church.');return false;}
    if(!v('station')){showErr("err1",'Please select Station or Circuit.');return false;}
    if(!v('pastor-tel')){showErr("err1",'Please enter the Pastor contact number.');return false;}
    if(!v('pastor-email')){showErr("err1",'Please enter the Pastor e-mail address.');return false;}
    if(n("resub").classList.contains("show")){showErr("err1","Please respond to the resubmission notice above.");return false;}
    hideErr("err1");return true;
  }
  if(s===2){
    var tc=parseFloat(n('tot-c').value)||0;
    if(!tc&&!n('adl-c').value&&!n('yth-c').value&&!n('chd-c').value){showErr("err2",'Please enter this year membership figures — enter 0 if nil.');return false;}
    if(n('att-c').value===''){showErr("err2",'Please enter Average Sunday Attendance — enter 0 if nil.');return false;}
    if(n('tit-c').value===''){showErr("err2",'Please enter Number of Tithers — enter 0 if nil.');return false;}
    if(n('cs-c').value===''){showErr("err2",'Please enter Church School Enrolment — enter 0 if nil.');return false;}
    hideErr("err2");return true;
  }
  if(s===3){
    var finFields=[
      ['acb-a','Annual Conference Budget (Assessed)'],
      ['acb-p','Annual Conference Budget (Paid)'],
      ['adv-p','Advance Offering (Paid)'],
      ['pan-p',"Presiding Elder Annuity (Paid)"],
      ['tac-p','Total Brought to Annual Conference'],
      ['funds-raised','Total Funds Raised']
    ];
    for(var i=0;i<finFields.length;i++){
      if(n(finFields[i][0]).value===''){
        showErr("err3",'Please enter '+finFields[i][1]+' — enter 0 if nil.');
        n(finFields[i][0]).focus();
        return false;
      }
    }
    hideErr("err3");return true;
  }
  if(s===4){
    // Section D - Episcopal Residence - all fields compulsory (enter 0 if nil)
    var erpFields=[
      ['erp-pledged','Amount pledged by the charge'],
      ['erp-paid-yr','Paid during this conference year'],
      ['erp-cumulative','Cumulative amount paid to date'],
      ['erp-outstanding','Outstanding balance on pledge']
    ];
    for(var j=0;j<erpFields.length;j++){
      if(n(erpFields[j][0]).value===''){
        showErr("err4",'Please enter '+erpFields[j][1]+' — enter 0 if nil (Section D: Episcopal Residence Project).');
        n(erpFields[j][0]).focus();
        return false;
      }
    }
    hideErr("err4");return true;
  }
  if(s===5){return true;}
  if(s===6){
    if(!v('f-deed')){showErr("err6",'Please indicate whether the title deed is held (Section F).');return false;}
    if(!v('f-ame')){showErr("err6",'Please indicate whether property is registered in name of A.M.E. Church (Section F).');return false;}
    if(!v('f-ins')){showErr("err6",'Please indicate whether the church property is insured (Section F).');return false;}
    if(!v('f-bank')){showErr("err6",'Please indicate whether the bank account is in the name of the A.M.E. Church (Section F).');return false;}
    if(!v('f-fin')){showErr("err6",'Please indicate whether annual financial statements were prepared (Section F).');return false;}
    if(!v('f-board')){showErr("err6",'Please indicate whether the Steward/Trustee Board is fully constituted (Section F).');return false;}
    hideErr("err6");return true;
  }
  if(s===7){
    if(!n('g-acc1').value.trim()){showErr("err7",'Please describe your first major accomplishment (Section G).');return false;}
    if(!n('g-acc2').value.trim()){showErr("err7",'Please describe your second major accomplishment (Section G).');return false;}
    if(!n('g-ch1').value.trim()){showErr("err7",'Please describe your first major challenge (Section G).');return false;}
    if(!n('g-ch2').value.trim()){showErr("err7",'Please describe your second major challenge (Section G).');return false;}
    if(!n('g-out').value.trim()){showErr("err7",'Please describe ministry and outreach undertaken (Section G).');return false;}
    hideErr("err7");return true;
  }
  return true;
}

function showErr(id,msg){var e=n(id);if(e){e.textContent=msg;e.classList.add('show');}}
function hideErr(id){var e=n(id);if(e)e.classList.remove('show');}

// SUBMIT
function submitForm(){
  // Final check before sending: every required field in Sections A-G must be filled.
  // Protects edited reports where a box was cleared by mistake.
  for(var sec=1;sec<=7;sec++){
    if(!validate(sec)){ goStep(sec); validate(sec); return; }
  }
  if(!validate(8))return;
  var dv=v('district'), cv_=v('church');
  var ch=D[dv].c[+cv_];
  n('ov').classList.add('show');

  // Build ministry data
  var minData={};
  MINISTRIES.forEach(function(m,i){
    var id='min'+i;
    minData[m]={active:v(id+'-a'),members:v(id+'-m'),meetings:v(id+'-mt'),leader:v(id+'-l')};
  });

  var data={
    timestamp:new Date().toISOString(),
    district:dv, presidingElder:D[dv].pe, church:ch.n,
    pastor:v('pastor'), ministerialStatus:v('min-status'),
    dateAppointment:v('date-appt'), yearsServed:v('yrs-served'),
    pastorContact:v('pastor-tel'), pastorEmail:v('pastor-email'),
    stationCircuit:v('station'), numPreachingPoints:v('num-pts'),
    churchAddress:v('church-addr'),
    adultDelegate:v('adult'), youthDelegate:v('youth'),
    // Section B
    adultsP:v('adl-p'),adultsC:v('adl-c'),
    youthP:v('yth-p'),youthC:v('yth-c'),
    childrenP:v('chd-p'),childrenC:v('chd-c'),
    totalMembP:v('tot-p'),totalMembC:v('tot-c'),
    attendanceP:v('att-p'),attendanceC:v('att-c'),
    churchSchoolP:v('cs-p'),churchSchoolC:v('cs-c'),
    tithersP:v('tit-p'),tithersC:v('tit-c'),
    conversionsP:v('con-p'),conversionsC:v('con-c'),
    accessionsP:v('acc-p'),accessionsC:v('acc-c'),
    baptismsP:v('bap-p'),baptismsC:v('bap-c'),
    confirmationsP:v('cfm-p'),confirmationsC:v('cfm-c'),
    deathsP:v('dth-p'),deathsC:v('dth-c'),
    transfersP:v('trf-p'),transfersC:v('trf-c'),
    // Section C
    acbAssessed:v('acb-a'),acbPaid:v('acb-p'),acbDate:v('acb-d'),
    mybAssessed:v('myb-a'),mybPaid:v('myb-p'),mybDate:v('myb-d'),
    advAssessed:v('adv-a'),advPaid:v('adv-p'),advDate:v('adv-d'),
    ostAssessed:v('ost-a'),ostPaid:v('ost-p'),ostDate:v('ost-d'),
    peaAssessed:v('pea-a'),peaPaid:v('pea-p'),peaDate:v('pea-d'),
    pedAssessed:v('ped-a'),pedPaid:v('ped-p'),pedDate:v('ped-d'),
    pecAssessed:v('pec-a'),pecPaid:v('pec-p'),pecDate:v('pec-d'),
    panAssessed:v('pan-a'),panPaid:v('pan-p'),panDate:v('pan-d'),
    pasAssessed:v('pas-a'),pasPaid:v('pas-p'),pasDate:v('pas-d'),
    retAssessed:v('ret-a'),retPaid:v('ret-p'),retDate:v('ret-d'),
    erpAssessed:v('erp-a'),erpPaid:v('erp-p'),erpDate:v('erp-d'),
    tacAssessed:v('tac-a'),tacPaid:v('tac-p'),tacDate:v('tac-d'),
    fundsRaised:v('funds-raised'),paidPastor:v('paid-pastor'),totalTithes:v('total-tithes'),
    // Section D
    erpPledged:v('erp-pledged'),erpPledgedRef:v('erp-pledged-ref'),
    erpPaidYear:v('erp-paid-yr'),erpPaidYearRef:v('erp-paid-yr-ref'),
    erpCumulative:v('erp-cumulative'),erpCumRef:v('erp-cum-ref'),
    erpOutstanding:v('erp-outstanding'),erpSettleDate:v('erp-settle'),
    // Section E
    ministries:JSON.stringify(minData),
    // Section F
    titleDeed:v('f-deed'),titleDeedName:v('f-deed-name'),
    ameRegistered:v('f-ame'),erfNumber:v('f-erf'),
    insured:v('f-ins'),insurerPolicy:v('f-ins-no'),
    parsonage:v('f-pars'),parsonageCond:v('f-pars-cond'),
    npoNumber:v('f-npo'),sarsNumber:v('f-sars'),
    bankAME:v('f-bank'),numSignatories:v('f-sigs'),
    finStatements:v('f-fin'),finStatementsDate:v('f-fin-date'),
    boardConstituted:v('f-board'),lastChurchConf:v('f-cc-date'),
    // Section G
    accomplishment1:v('g-acc1'),accomplishment2:v('g-acc2'),
    challenge1:v('g-ch1'),challenge2:v('g-ch2'),
    outreach:v('g-out'),mattersForPE:v('g-mat'),
    // Section H
    certPastorDate:v('h-pastor-date'),
    stewardBoardChair:v('h-steward'),stewardBoardDate:v('h-steward-date'),
    adultDelegateSig:v('h-adult-sig'),youthDelegateSig:v('h-youth-sig'),
    isResubmission:isResub?'Yes':'No',
    resubmissionReason:isResub?v('resub-reason'):''
  };

  var show = function(){
    n('ov').classList.remove('show');
    // Hide form sections, show confirmation
    var fw=n('fw'); if(fw) fw.style.display='none';
    var spb=document.querySelector('.spbar'); if(spb) spb.style.display='none';
    n('conf').style.display='block';
    n('conf').classList.add('show');
    n('ctext').innerHTML='Thank you, <strong>'+data.pastor+'</strong>.<br>The summary report for <strong>'+data.church+'</strong> has been received and recorded.';
    n('cref').textContent='Reference: RPT-'+Date.now().toString(36).toUpperCase()+' &#183; '+new Date().toLocaleDateString('en-ZA',{year:'numeric',month:'long',day:'numeric'});
    var q=COMPLETION_QUOTES[Math.floor(Math.random()*COMPLETION_QUOTES.length)];
    n('cqx').textContent='"'+q.text+'"';
    n('cqa').textContent='&#8212; '+q.author;
    n('cqr').textContent=q.role;
    try{var lk='sub_'+(data.church+data.district).replace(/[^a-z0-9]/gi,'').toLowerCase();localStorage.setItem(lk,new Date().toLocaleString('en-ZA'));}catch(e){}
    // Store for printing
    try{localStorage.setItem('lastReport',JSON.stringify(data));}catch(e){}
    // Add print button to confirmation
    var pBtn=document.createElement('button');
    pBtn.textContent='Print / Download My Report';
    pBtn.style.cssText='margin-top:14px;width:100%;padding:13px;background:linear-gradient(135deg,#3a1750,#6B2D8B);color:white;border:none;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer;font-family:"Open Sans",sans-serif';
    pBtn.onclick=function(){window.open('print.html','_blank');};
    document.querySelector('.ccard').appendChild(pBtn);
    window.scrollTo(0,0);
  };

  // Reliable submission with retry
  var attempts = 0;
  var maxAttempts = 3;
  
  function trySubmit(){
    attempts++;
    var stillWaiting = null;
    if(attempts > 1){
      var spt = document.getElementById('spt');
      if(spt) spt.textContent = 'Retrying submission (attempt '+attempts+' of '+maxAttempts+')...';
    }
    stillWaiting = setTimeout(function(){
      var spt = document.getElementById('spt');
      if(spt) spt.textContent = 'Still sending — please keep this page open...';
    }, 6000);
    
    fetch(SCRIPT_URL, {method:'POST', mode:'no-cors', body:JSON.stringify(data)})
      .then(function(){
        clearTimeout(stillWaiting);
        // Verify it landed in the sheet
        setTimeout(function(){
          fetch(SCRIPT_URL, {method:'GET'})
            .then(function(r){return r.json();})
            .then(function(result){
              var found = (result.submissions||[]).some(function(s){
                return (s['Church']||'').trim().toLowerCase() === data.church.trim().toLowerCase() &&
                       (s['District']||'').trim().toLowerCase() === data.district.trim().toLowerCase();
              });
              if(found || attempts >= maxAttempts){
                show();
              } else if(attempts < maxAttempts){
                setTimeout(trySubmit, 2000);
              } else {
                show();
              }
            })
            .catch(function(){ show(); });
        }, 3000);
      })
      .catch(function(){
        clearTimeout(stillWaiting);
        if(attempts < maxAttempts){
          setTimeout(trySubmit, 3000);
        } else {
          show();
        }
      });
  }
  trySubmit();
}


// ===== GRAMMAR SUGGESTION FEATURE =====
var _sgTarget = null;
var _sgSuggestion = "";

function suggestText(fieldId) {
  var el = document.getElementById(fieldId);
  if (!el) return;
  var text = el.value.trim();
  if (!text) {
    alert("Please type something in the field first before requesting a suggestion.");
    return;
  }
  if (text.length < 10) {
    alert("Please write more detail before requesting a suggestion.");
    return;
  }
  
  _sgTarget = fieldId;
  _sgSuggestion = "";
  
  // Show modal with loading state
  document.getElementById("sg-orig").textContent = '"' + text.substring(0, 120) + (text.length > 120 ? '...' : '') + '"';
  document.getElementById("sg-sugg").innerHTML = '<em style="color:#999">✨ Generating suggestion... please wait...</em>';
  document.getElementById("sg-modal").classList.add("show");
  
  // Get the button and show loading
  var btn = document.querySelector('[onclick="suggestText(\''+fieldId+'\')"]');
  if (btn) { btn.classList.add("loading"); btn.textContent = "⏳ Generating..."; }
  
  // Call Apps Script grammar endpoint
  var url = SCRIPT_URL + "?action=grammar&text=" + encodeURIComponent(text);
  
  fetch(url, {method: "GET"})
    .then(function(r) { return r.json(); })
    .then(function(data) {
      if (btn) { btn.classList.remove("loading"); btn.textContent = "✨ Suggest better wording"; }
      if (data.improved) {
        _sgSuggestion = data.improved;
        document.getElementById("sg-sugg").textContent = data.improved;
      } else {
        document.getElementById("sg-sugg").innerHTML = '<em style="color:#c0392b">Could not generate suggestion. Please check your connection and try again.</em>';
      }
    })
    .catch(function() {
      if (btn) { btn.classList.remove("loading"); btn.textContent = "✨ Suggest better wording"; }
      document.getElementById("sg-sugg").innerHTML = '<em style="color:#c0392b">Connection error. Please try again.</em>';
    });
}

function useSuggestion() {
  if (_sgTarget && _sgSuggestion) {
    var el = document.getElementById(_sgTarget);
    if (el) el.value = _sgSuggestion;
  }
  closeSuggestion();
}

function closeSuggestion() {
  document.getElementById("sg-modal").classList.remove("show");
  _sgTarget = null;
  _sgSuggestion = "";
}
