var SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyjlcDvCPxFQjSKsusnTQ-7IS6WU0wWdoPkhPxXueaOVRI1vx_0QmY7rvsNRxPrsIac0A/exec";
var TOTAL = 68;
var LD = {total:0, districts:{}, submissions:[]};

var DC = [
  {n:"Capital District",    pe:"The Rev. Mandisi Albert Mexico",       t:18},
  {n:"Ga-Rankuwa District", pe:"The Rev. Lekubela Simon Moobi",        t:10},
  {n:"Bela-Bela District",  pe:"The Rev. George Olehile Motabogi",     t:10},
  {n:"Polokwane District",  pe:"The Rev. Mohale Daniel Thabo Makhene", t:11},
  {n:"North End District",  pe:"The Rev. Dibetu Onica Leepo",          t:9},
  {n:"Vhembe District",     pe:"The Rev. Ndinannyi Martin Tshivhase",  t:8}
];

var CH = {
  "Capital District":["Ebenezer AME Church, Atteridgeville","Mt. Sinai AME Church, Mamelodi","Nkosi Memorial AME Church, Tlhabane","DM Robinson AME Church, Saulsville","Chirwa Memorial AME Church, Mabeskraal","Madiga Memorial AME Church, Sandfontein","Ludia Phiring AME Church, Luka","Emmanuel A.M.E. Church, Boitekong","Mt. Olivet A.M.E. Church, Olievenhoutbosch","Bethel A.M.E. Church, Pretoria CBD","PA Khiba Memorial AME Church, Mogwase","The Ark AME Church, Ekangala","The Diamond A.M.E. Church, Cullinan","Nellmapius AME Church, Nellmapius","Anna Senatle AME Church, Allemansedrift","Monnakato AME Church, Monnakato","Kwa-Mhlanga A.M.E. Church, Kwa-Mhlanga","Nthoane Memorial AME Church, Mmatau"],
  "Ga-Rankuwa District":["Mokone Temple","Agnes B. Hildebrand","John E. Hunter Memorial","W.N. Nduna Memorial","Emmanuel A.M.E. Church, Ga-Rankuwa","Lake Bethesda","Ginya Memorial","Francis Herman Gow","S.S. Manyane Memorial","Mount Zion, Ga-Rankuwa"],
  "Bela-Bela District":["DG Ming","Lebala","Mabel Ming","William White","Mathibe Memorial","Ming Chapel","Jerusalem E Ncha","Hickman Chapel","Thabazimbi AME Church","BLM Lesutu"],
  "Polokwane District":["John E Hunter","Mt. Horeb","Bethel, Polokwane","Mt. Zion","H.J Bryant","Aganang","R.C Kgopong","H.E Malaka Memorial","T.R Kgarose","Antioch","Richard Maponya"],
  "North End District":["SPS Chesane","Edith Ming","Thorometjane","Thomas Morumudi","FC James","Polokwane AME Church","FC Cummings","New Bethel","Mosoge Lebelo"],
  "Vhembe District":["HB Senatle Cathedral","Charles Rathogwa Ndou","Sibasa Circuit","Songozwi Circuit","Mara Circuit","EM Makhuvha Chapel","Maba Memorial","Dzanani Circuit"]
};

var PWS = {
  "capital2026":   {d:"Capital District",   pe:"The Rev. Mandisi Albert Mexico"},
  "garankuwa2026": {d:"Ga-Rankuwa District", pe:"The Rev. Lekubela Simon Moobi"},
  "belabela2026":  {d:"Bela-Bela District",  pe:"The Rev. George Olehile Motabogi"},
  "polokwane2026": {d:"Polokwane District",  pe:"The Rev. Mohale Daniel Thabo Makhene"},
  "northend2026":  {d:"North End District",  pe:"The Rev. Dibetu Onica Leepo"},
  "vhembe2026":    {d:"Vhembe District",     pe:"The Rev. Ndinannyi Martin Tshivhase"},
  "MMM2026admin":  {d:"ALL",                 pe:"The Rev. Mohale Daniel Thabo Makhene"}
};

function nm(s){ return (s||"").trim().toLowerCase().replace(/[^a-z0-9]/g,""); }
function fV(v){ return (!v||v==="undefined"||v===""||v==="—")?"—":v; }
function fR(v){ var n=parseFloat(v); return (!v||isNaN(n))?"—":"R"+n.toLocaleString("en-ZA",{minimumFractionDigits:2,maximumFractionDigits:2}); }
function fN(v){ return (!v||v==="0"||v==="")?"0":v; }

function fetchLive(){
  var ctrl = new AbortController();
  setTimeout(function(){ ctrl.abort(); }, 8000);
  fetch(SCRIPT_URL, {method:"GET", signal:ctrl.signal})
    .then(function(r){ return r.json(); })
    .then(function(data){
      LD.total = data.total||0;
      LD.districts = data.districts||{};
      LD.submissions = data.submissions||[];
      window._liveSubmissions = data.submissions||[];
      updateRing();
    })
    .catch(function(e){
      document.getElementById("rcap").textContent = "Data will appear once pastors submit";
    });
}

function updateRing(){
  var t = LD.total;
  document.getElementById("rnum").textContent = t;
  document.getElementById("rof").textContent = "of " + TOTAL;
  document.getElementById("rcap").textContent = t===0 ? "No reports yet — be the first!" :
    t===TOTAL ? "All reports received!" : (TOTAL-t)+" churches still to submit";
  var offset = 420 - Math.round(420*t/TOTAL);
  document.getElementById("ring").style.strokeDashoffset = offset;
  var keys = ["Capital District","Ga-Rankuwa District","Bela-Bela District","Polokwane District","North End District","Vhembe District"];
  var tots = [18,10,10,11,9,8];
  keys.forEach(function(k,i){
    var c = LD.districts[k]||0;
    document.getElementById("m"+i).textContent = c+"/"+tots[i];
    document.getElementById("mb"+i).style.width = Math.round(c/tots[i]*100)+"%";
  });
}

function countdown(target, dId, hId, mId, sId){
  function tick(){
    var diff = new Date(target) - new Date();
    if(diff<=0){ return; }
    document.getElementById(dId).textContent = String(Math.floor(diff/86400000)).padStart(2,"0");
    document.getElementById(hId).textContent = String(Math.floor(diff%86400000/3600000)).padStart(2,"0");
    document.getElementById(mId).textContent = String(Math.floor(diff%3600000/60000)).padStart(2,"0");
    document.getElementById(sId).textContent = String(Math.floor(diff%60000/1000)).padStart(2,"0");
  }
  tick(); setInterval(tick,1000);
}

function doLogin(){
  var pw = document.getElementById("pwInput").value.trim();
  var match = PWS[pw];
  document.getElementById("loginErr").classList.remove("show");
  if(!match){ document.getElementById("loginErr").classList.add("show"); return; }
  document.getElementById("loginWrap").style.display = "none";
  if(match.d==="ALL"){ showAdmin(); }
  else { showDistrict(match.d, match.pe); }
}

function goBack(){
  document.getElementById("dvWrap").classList.remove("on");
  document.getElementById("avWrap").classList.remove("on");
  document.getElementById("loginWrap").style.display = "block";
  document.getElementById("pwInput").value = "";
  document.getElementById("loginErr").classList.remove("show");
}

function switchTab(tabsId, paneIds, idx){
  document.getElementById(tabsId).querySelectorAll(".tab-btn").forEach(function(t){ t.classList.remove("on"); });
  document.getElementById(tabsId).querySelectorAll(".tab-btn")[idx].classList.add("on");
  paneIds.forEach(function(p){ document.getElementById(p).classList.remove("on"); });
  document.getElementById(paneIds[idx]).classList.add("on");
}

function dvTab(name, idx){
  switchTab("dvTabs", ["dvList","dvSum","dvRoster"], idx);
  if(name==="sum") buildDistrictSummary();
  if(name==="roster") {
    // Load roster from live data
    var district = document.getElementById("dvTitle") ? document.getElementById("dvTitle").textContent : "";
    if(district && window._liveSubmissions) {
      showPERoster(district, window._liveSubmissions);
    } else {
      // Fetch live data
      var rc = document.getElementById("pe-roster-container");
      if(rc) rc.innerHTML = '<div style="text-align:center;padding:30px;color:#9b7bb5">Loading charge roster&#8230;</div>';
      if(rc) rc.style.display = "block";
      fetch("https://script.google.com/macros/s/AKfycbyjlcDvCPxFQjSKsusnTQ-7IS6WU0wWdoPkhPxXueaOVRI1vx_0QmY7rvsNRxPrsIac0A/exec")
        .then(function(r){return r.json();})
        .then(function(data){
          window._liveSubmissions = data.submissions||[];
          showPERoster(district, window._liveSubmissions);
        })
        .catch(function(){
          if(rc) rc.innerHTML = '<div style="text-align:center;padding:30px;color:#c0392b">Could not load roster. Check connection.</div>';
        });
    }
  }
}

function avTab(name, idx){
  switchTab("avTabs", ["avOv","avPE","avBk"], idx);
  if(name==="pe") buildPESummary();
}

function showDistrict(dName, peName){
  var all = CH[dName]||[];
  var subs = LD.submissions||[];
  var map = {};
  subs.forEach(function(s){
    if(nm(s["District"])===nm(dName)){
      var k = nm(s["Church"]);
      if(!map[k]) map[k]={raw:s["Church"],list:[]};
      map[k].list.push(s);
    }
  });
  var subCount = Object.keys(map).length;
  var pct = all.length>0 ? Math.round(subCount/all.length*100) : 0;
  document.getElementById("dvTitle").textContent = dName;
  document.getElementById("dvPE").textContent = peName;
  document.getElementById("dvSub").textContent = subCount;
  document.getElementById("dvPend").textContent = all.length - subCount;
  document.getElementById("dvPct").textContent = pct+"%";
  var listEl = document.getElementById("dvList");
  listEl.innerHTML = "";
  all.forEach(function(c){
    var k = nm(c);
    var entry = map[k];
    var done = !!entry;
    var isResub = done && (entry.list.length>1 || (entry.list[0] && entry.list[0]["Resubmission"]==="Yes"));
    var div = document.createElement("div");
    var dispName = c.indexOf(",")>-1 ? c.split(",")[0].trim() : c;
    if(done){
      div.className = "ci " + (isResub ? "resub" : "done");
      (function(ch, dn, rawName){
        div.onclick = function(){ openReport(ch, dn, rawName); };
      })(c, dName, entry.raw);
      div.innerHTML = "<span class='ci-name'>"+dispName+"</span><div style='display:flex;align-items:center;gap:5px'><span class='ci-tap'>tap to read</span><span class='ci-badge'>"+(isResub?"⚠ Resubmitted":"✓ Report")+"</span></div>";
    } else {
      div.className = "ci pending";
      div.innerHTML = "<span class='ci-name'>"+dispName+"</span><span class='ci-badge'>⏳ Pending</span>";
    }
    listEl.appendChild(div);
  });
  document.getElementById("dvSum").innerHTML = "";
  document.getElementById("dvWrap").classList.add("on");
  switchTab("dvTabs", ["dvList","dvSum"], 0);
}

function buildDistrictSummary(){
  var dName = document.getElementById("dvTitle").textContent;
  var subs = (LD.submissions||[]).filter(function(s){ return nm(s["District"])===nm(dName); });
  var latest = {};
  subs.forEach(function(s){ latest[nm(s["Church"]||"")] = s; });
  var rows = Object.values(latest);
  var el = document.getElementById("dvSum");
  if(!rows.length){ el.innerHTML = "<div class='no-data'>No reports submitted yet for this district.</div>"; return; }
  var t={c:0,a:0,b:0,m:0,f:0,pp:0,pe:0,pc:0};
  rows.forEach(function(s){
    t.c+=parseInt(s["Conversions"]||0)||0; t.a+=parseInt(s["Accessions"]||0)||0;
    t.b+=parseInt(s["Baptisms"]||0)||0; t.m+=parseInt(s["Total Members"]||0)||0;
    t.f+=parseFloat(s["Funds Raised"]||0)||0; t.pp+=parseFloat(s["Paid to Pastor"]||0)||0;
    t.pe+=parseFloat(s["Paid to PE"]||0)||0; t.pc+=parseFloat(s["Brought to Conf"]||0)||0;
  });
  var tbody = document.createElement("tbody");
  rows.forEach(function(s, i){
    var tr = document.createElement("tr");
    tr.style.cursor = "pointer";
    tr.innerHTML = "<td>"+fV(s["Church"])+"</td><td class='ps'>"+fV(s["Pastor"])+"</td>"+
      "<td class='r'>"+fN(s["Conversions"])+"</td><td class='r'>"+fN(s["Accessions"])+"</td>"+
      "<td class='r'>"+fN(s["Baptisms"])+"</td><td class='r'>"+fN(s["Total Members"])+"</td>"+
      "<td class='r'>"+fR(s["Funds Raised"])+"</td><td class='r'>"+fR(s["Paid to Pastor"])+"</td>"+
      "<td class='r'>"+fR(s["Paid to PE"])+"</td><td class='r'>"+fR(s["Brought to Conf"])+"</td>";
    (function(row){ tr.onclick = function(){ openReport(row["Church"], dName, row["Church"]); }; })(s);
    tbody.appendChild(tr);
  });
  var totRow = document.createElement("tr");
  totRow.className = "tot-tr";
  totRow.innerHTML = "<td colspan='2'><strong>TOTALS</strong></td>"+
    "<td>"+t.c+"</td><td>"+t.a+"</td><td>"+t.b+"</td><td>"+t.m+"</td>"+
    "<td>"+fR(t.f)+"</td><td>"+fR(t.pp)+"</td><td>"+fR(t.pe)+"</td><td>"+fR(t.pc)+"</td>";
  tbody.appendChild(totRow);
  var table = document.createElement("table");
  table.className = "pe-tbl";
  table.innerHTML = "<thead><tr><th>Church</th><th>Pastor</th><th>Conv.</th><th>Acc.</th><th>Bap.</th><th>Members</th><th>Funds Raised</th><th>Paid to Pastor</th><th>Paid to PE</th><th>Brought to Conf.</th></tr></thead>";
  table.appendChild(tbody);
  var wrap = document.createElement("div");
  wrap.className = "tbl-wrap";
  wrap.appendChild(table);
  el.innerHTML = "";
  el.appendChild(wrap);
  var btn = document.createElement("button");
  btn.className = "print-btn2";
  btn.style.marginTop = "10px";
  btn.textContent = "Print District Summary";
  btn.onclick = function(){ window.print(); };
  el.appendChild(btn);
}

function showAdmin(){
  var grid = document.getElementById("avGrid");
  grid.innerHTML = "";
  var colors = ["#9b59b6","#1a7a4a","#C4972A","#185FA5","#7d35a3","#8B4513"];
  var tots = [18,10,10,11,9,8];
  DC.forEach(function(d,i){
    var c = LD.districts[d.n]||0;
    var tot = tots[i];
    var pct = Math.round(c/tot*100);
    var el = document.createElement("div");
    el.className = "admin-card";
    (function(dn,pe){ el.onclick = function(){ showDistrict(dn,pe); document.getElementById("avWrap").classList.remove("on"); }; })(d.n,d.pe);
    el.innerHTML = "<div class='ac-dist'>"+d.n+"</div><div class='ac-pe'>"+d.pe+"</div>"+
      "<div class='ac-frac' style='color:"+colors[i]+"'>"+c+"<span style='font-size:13px;color:rgba(255,255,255,.4)'> / "+tot+"</span></div>"+
      "<div class='ac-bar'><div class='ac-fill' style='width:"+pct+"%;background:"+colors[i]+"'></div></div>";
    grid.appendChild(el);
  });
  document.getElementById("avWrap").classList.add("on");
  switchTab("avTabs", ["avOv","avPE","avBk"], 0);
}

function buildPESummary(){
  var body = document.getElementById("peSumBody");
  var subs = LD.submissions||[];
  if(!subs.length){ body.innerHTML = "<div class='no-data'>No submissions yet.</div>"; return; }
  body.innerHTML = "";
  DC.forEach(function(d){
    var dSubs = subs.filter(function(s){ return nm(s["District"])===nm(d.n); });
    var latest = {};
    dSubs.forEach(function(s){ latest[nm(s["Church"]||"")] = s; });
    var rows = Object.values(latest);
    var block = document.createElement("div");
    block.className = "pe-block";
    if(!rows.length){
      block.innerHTML = "<div class='pe-block-head'><div class='pe-block-title'>"+d.n+"</div><div class='pe-block-sub'>"+d.pe+"</div></div>"+
        "<div class='no-data' style='background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-top:none;border-radius:0 0 11px 11px'>No reports for this district.</div>";
      body.appendChild(block);
      return;
    }
    var t={c:0,a:0,b:0,m:0,f:0,pp:0,pe:0,pc:0};
    rows.forEach(function(s){
      t.c+=parseInt(s["Conversions"]||0)||0; t.a+=parseInt(s["Accessions"]||0)||0;
      t.b+=parseInt(s["Baptisms"]||0)||0; t.m+=parseInt(s["Total Members"]||0)||0;
      t.f+=parseFloat(s["Funds Raised"]||0)||0; t.pp+=parseFloat(s["Paid to Pastor"]||0)||0;
      t.pe+=parseFloat(s["Paid to PE"]||0)||0; t.pc+=parseFloat(s["Brought to Conf"]||0)||0;
    });
    var tbody = document.createElement("tbody");
    rows.forEach(function(s){
      var tr = document.createElement("tr");
      tr.style.cursor = "pointer";
      tr.innerHTML = "<td>"+fV(s["Church"])+"</td><td class='ps'>"+fV(s["Pastor"])+"</td>"+
        "<td class='r'>"+fN(s["Conversions"])+"</td><td class='r'>"+fN(s["Accessions"])+"</td>"+
        "<td class='r'>"+fN(s["Baptisms"])+"</td><td class='r'>"+fN(s["Total Members"])+"</td>"+
        "<td class='r'>"+fR(s["Funds Raised"])+"</td><td class='r'>"+fR(s["Paid to Pastor"])+"</td>"+
        "<td class='r'>"+fR(s["Paid to PE"])+"</td><td class='r'>"+fR(s["Brought to Conf"])+"</td>";
      (function(row, dn){ tr.onclick = function(){ openReport(row["Church"], dn, row["Church"]); }; })(s, d.n);
      tbody.appendChild(tr);
    });
    var totRow = document.createElement("tr");
    totRow.className = "tot-tr";
    totRow.innerHTML = "<td colspan='2'><strong>"+d.n.toUpperCase()+" TOTALS</strong></td>"+
      "<td>"+t.c+"</td><td>"+t.a+"</td><td>"+t.b+"</td><td>"+t.m+"</td>"+
      "<td>"+fR(t.f)+"</td><td>"+fR(t.pp)+"</td><td>"+fR(t.pe)+"</td><td>"+fR(t.pc)+"</td>";
    tbody.appendChild(totRow);
    var table = document.createElement("table");
    table.className = "pe-tbl";
    table.innerHTML = "<thead><tr><th>Church</th><th>Pastor</th><th>Conv.</th><th>Acc.</th><th>Bap.</th><th>Members</th><th>Funds Raised</th><th>Paid to Pastor</th><th>Paid to PE</th><th>Brought to Conf.</th></tr></thead>";
    table.appendChild(tbody);
    var wrap = document.createElement("div");
    wrap.className = "tbl-wrap";
    wrap.appendChild(table);
    block.innerHTML = "<div class='pe-block-head'><div class='pe-block-title'>"+d.n+"</div>"+
      "<div class='pe-block-sub'>"+d.pe+" · "+rows.length+" report(s)</div>"+
      "<div class='pe-mini-stats'>"+
      "<div class='pe-mini-s'><div class='pe-mini-num'>"+t.c+"</div><span class='pe-mini-label'>Conv.</span></div>"+
      "<div class='pe-mini-s'><div class='pe-mini-num'>"+t.m+"</div><span class='pe-mini-label'>Members</span></div>"+
      "<div class='pe-mini-s'><div class='pe-mini-num'>"+fR(t.f)+"</div><span class='pe-mini-label'>Funds</span></div>"+
      "</div></div>";
    block.appendChild(wrap);
    body.appendChild(block);
  });
}

function printPE(){
  buildPESummary();
  switchTab("avTabs",["avOv","avPE","avBk"],1);
  setTimeout(function(){ window.print(); },500);
}

function openReport(churchName, districtName, storedName){
  var look = storedName||churchName;
  var all = (LD.submissions||[]).filter(function(s){
    return nm(s["Church"])===nm(look) && nm(s["District"])===nm(districtName);
  });
  if(!all.length && look!==churchName){
    all = (LD.submissions||[]).filter(function(s){
      return nm(s["Church"])===nm(churchName) && nm(s["District"])===nm(districtName);
    });
  }
  var sub = all[all.length-1];
  document.getElementById("mChurch").textContent = sub ? (sub["Church"]||churchName) : churchName;
  document.getElementById("mPastor").textContent = sub ? (sub["Pastor"]||"") : "";
  if(!sub){
    document.getElementById("mBody").innerHTML =
      "<div style='text-align:center;padding:40px;color:rgba(255,255,255,.5)'><div style='font-size:36px;margin-bottom:12px'>⏳</div>"+
      "<div style='font-size:14px;color:white;margin-bottom:8px'>Report data still loading</div>"+
      "<div style='font-size:12px'>Please close and tap again in a few seconds.</div></div>";
    document.getElementById("modal").classList.add("on");
    return;
  }
  var isR = all.length>1||(all[0]&&all[0]["Resubmission"]==="Yes");
  var rH = isR ? "<div style='background:rgba(196,151,42,.15);border:1px solid rgba(196,151,42,.3);border-radius:9px;padding:11px;margin-bottom:14px'><div style='font-size:10px;color:#e8c97a;font-weight:700;margin-bottom:3px'>⚠ Resubmission</div><div style='font-size:12px;color:rgba(255,255,255,.8)'>"+all.length+" submissions. Showing most recent."+(sub["Resubmission Reason"] ? " Reason: "+sub["Resubmission Reason"] : "")+"</div></div>" : "";
  var mC=[["WMS","WMS Members"],["YPD","YPD Members"],["Lay Org","Lay Members"],["SOA","SOA Members"],["RAYAC","RAYAC Members"],["CMLF","CMLF Members"],["ACE","ACE Members"]];
  var mL=["Women's Missionary Society (WMS)","Young People's & Children's Division (YPD)","Lay Organization","Sons of Allen (SOA)","Richard Allen Young Adult Council (RAYAC)","Charlotte Maxeke Ladies' Fellowship (CMLF)","Allen Christian Evangelical League (ACE)"];
  var mR = mC.map(function(c,i){
    var y = (sub[c[0]]||"").toLowerCase()==="yes";
    return "<tr><td>"+mL[i]+"</td><td>"+(y?"<span class='yes-badge'>Yes</span>":"<span class='no-badge'>No</span>")+"</td><td>"+(y?fV(sub[c[1]]):"—")+"</td></tr>";
  }).join("");
  var ts = sub["Timestamp"] ? new Date(sub["Timestamp"]).toLocaleDateString("en-ZA",{year:"numeric",month:"long",day:"numeric"}) : "—";
  document.getElementById("mBody").innerHTML = rH+
    "<div class='r-sec'><div class='r-title'>Church Identification</div>"+
    "<div class='r-grid'>"+
    "<div class='r-row'><div class='r-label'>District</div><div class='r-value'>"+fV(sub["District"])+"</div></div>"+
    "<div class='r-row'><div class='r-label'>Presiding Elder</div><div class='r-value'>"+fV(sub["Presiding Elder"])+"</div></div>"+
    "<div class='r-row' style='grid-column:span 2'><div class='r-label'>Church</div><div class='r-value'>"+fV(sub["Church"])+"</div></div>"+
    "<div class='r-row' style='grid-column:span 2'><div class='r-label'>Pastor</div><div class='r-value'>"+fV(sub["Pastor"])+"</div></div>"+
    "</div><div class='del-row'>"+
    "<div class='del-box'><div class='del-type'>Adult Delegate</div><div class='del-name'>"+fV(sub["Adult Delegate"])+"</div></div>"+
    "<div class='del-box'><div class='del-type'>Youth Delegate</div><div class='del-name'>"+fV(sub["Youth Delegate"])+"</div></div>"+
    "</div></div>"+
    "<div class='r-sec'><div class='r-title'>Church Statistics</div><div class='stat-grid'>"+
    "<div class='stat-box'><span class='stat-num'>"+fV(sub["Conversions"])+"</span><span class='stat-label'>Conversions</span></div>"+
    "<div class='stat-box'><span class='stat-num'>"+fV(sub["Accessions"])+"</span><span class='stat-label'>Accessions</span></div>"+
    "<div class='stat-box'><span class='stat-num'>"+fV(sub["Baptisms"])+"</span><span class='stat-label'>Baptisms</span></div>"+
    "<div class='stat-box'><span class='stat-num'>"+fV(sub["Total Members"])+"</span><span class='stat-label'>Members</span></div>"+
    "<div class='stat-box'><span class='stat-num'>"+fV(sub["Avg Attendance"])+"</span><span class='stat-label'>Avg Att.</span></div>"+
    "</div></div>"+
    "<div class='r-sec'><div class='r-title'>Financial Report</div><table class='fin-tbl'>"+
    "<tr><td>Total Funds Raised</td><td>"+fR(sub["Funds Raised"])+"</td></tr>"+
    "<tr><td>Total Paid to Pastor</td><td>"+fR(sub["Paid to Pastor"])+"</td></tr>"+
    "<tr><td>Total Paid to Presiding Elder</td><td>"+fR(sub["Paid to PE"])+"</td></tr>"+
    "<tr><td>Total Brought to Annual Conference</td><td>"+fR(sub["Brought to Conf"])+"</td></tr>"+
    "</table></div>"+
    "<div class='r-sec'><div class='r-title'>Do You Have the Following Ministries?</div>"+
    "<table class='min-tbl'><thead><tr><th>Ministry</th><th>Yes / No</th><th>Members</th></tr></thead>"+
    "<tbody>"+mR+"</tbody></table></div>"+
    "<div class='r-sec'><div class='r-title'>Evangelism &amp; Outreach</div>"+
    "<div class='r-box'><div class='r-box-text'>"+(sub["Outreach Desc"]&&sub["Outreach Desc"]!==""&&sub["Outreach Desc"]!=="—"?sub["Outreach Desc"]:(sub["Outreach"]==="Yes"?"Active":"Not reported"))+"</div></div></div>"+
    "<div class='r-sec'><div class='r-title'>UIF, Retirement &amp; Annuity</div><div class='comp-grid'>"+
    "<div class='comp-item'><div class='comp-label'>U.I.F</div><div class='comp-val'>"+fV(sub["UIF"])+"</div></div>"+
    "<div class='comp-item'><div class='comp-label'>Retirement</div><div class='comp-val'>"+fV(sub["Retirement"])+"</div></div>"+
    "<div class='comp-item'><div class='comp-label'>Annuity</div><div class='comp-val'>"+fV(sub["Annuity"])+"</div></div>"+
    "<div class='comp-item'><div class='comp-label'>PE Annuity</div><div class='comp-val'>"+fV(sub["PE Annuity"])+"</div></div>"+
    "</div></div>"+
    "<div class='r-sec'><div class='r-title'>Two Major Accomplishments</div>"+
    (sub["Accomplishment 1"]?"<div class='r-box'><div class='r-box-label'>Accomplishment 1</div><div class='r-box-text'>"+sub["Accomplishment 1"]+"</div></div>":"")+
    (sub["Accomplishment 2"]&&sub["Accomplishment 2"]!==""?"<div class='r-box' style='margin-top:7px'><div class='r-box-label'>Accomplishment 2</div><div class='r-box-text'>"+sub["Accomplishment 2"]+"</div></div>":"")+
    "</div>"+
    "<div style='text-align:center;padding:8px 0;font-size:11px;color:rgba(255,255,255,.25)'>Submitted: "+ts+"</div>";
  document.getElementById("modal").classList.add("on");
  document.getElementById("modal").scrollTop = 0;
}

function closeModal(){ document.getElementById("modal").classList.remove("on"); }

function genBooklet(){
  var subs = LD.submissions||[];
  if(!subs.length){
    openReport("", "", "");
    document.getElementById("mChurch").textContent = "No data yet";
    document.getElementById("mBody").innerHTML = "<div style='text-align:center;padding:40px;color:rgba(255,255,255,.5)'>No submissions yet. Generate booklet once pastors have submitted.</div>";
    document.getElementById("modal").classList.add("on");
    return;
  }
  var latest = {};
  subs.forEach(function(s){
    var k = (s["District"]||"")+"||"+(s["Church"]||"");
    if(!latest[k]||new Date(s["Timestamp"])>new Date(latest[k]["Timestamp"])){ latest[k]=s; }
  });
  var allRows = Object.values(latest);
  var mCols=[["WMS","WMS Members"],["YPD","YPD Members"],["Lay Org","Lay Members"],["SOA","SOA Members"],["RAYAC","RAYAC Members"],["CMLF","CMLF Members"],["ACE","ACE Members"]];
  var mLabs=["Women's Missionary Society (WMS)","Young People's & Children's Division (YPD)","Lay Organization","Sons of Allen (SOA)","Richard Allen Young Adult Council (RAYAC)","Charlotte Maxeke Ladies' Fellowship (CMLF)","Allen Christian Evangelical League (ACE)"];
  function fRb(v){ var n=parseFloat(v); return (!v||isNaN(n))?"—":"R"+n.toLocaleString("en-ZA",{minimumFractionDigits:2}); }

  var w = window.open("","_blank");
  w.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Mokone Conference Booklet 2026</title>');
  w.document.write('<style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Georgia,serif;color:#1a1a2e;font-size:11pt}@page{size:A4;margin:12mm 14mm}.page{page-break-after:always}');
  w.document.write('.cover{background:#6B2D8B;color:white;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:30mm;-webkit-print-color-adjust:exact;print-color-adjust:exact;border-bottom:6mm solid #C4972A}');
  w.document.write('table{width:100%;border-collapse:collapse;font-size:8pt}thead th{background:#6B2D8B;color:white;padding:5pt 6pt;text-align:left;-webkit-print-color-adjust:exact;print-color-adjust:exact}');
  w.document.write('tbody tr:nth-child(even){background:#faf8ff}tbody td{padding:4pt 6pt;border-bottom:0.3mm solid #f0ecf9}');
  w.document.write('.tot{background:#3a1750!important;color:#e8c97a!important;-webkit-print-color-adjust:exact;print-color-adjust:exact;font-weight:700}');
  w.document.write('.dh{background:#6B2D8B;color:white;padding:8mm 14mm 6mm;-webkit-print-color-adjust:exact;print-color-adjust:exact;border-bottom:3mm solid #C4972A}');
  w.document.write('.rh{background:#6B2D8B;color:white;padding:5mm 14mm 4mm;-webkit-print-color-adjust:exact;print-color-adjust:exact;border-bottom:2mm solid #C4972A;margin:-8mm -14mm 5mm}');
  w.document.write('.rp{padding:8mm 14mm}.st{font-size:10pt;color:#6B2D8B;margin:5pt 0 3pt;padding-bottom:2pt;border-bottom:0.5mm solid #C4972A;font-family:Georgia,serif}');
  w.document.write('.sg{display:grid;grid-template-columns:repeat(5,1fr);gap:3pt}.sb{background:#f8f5ff;padding:5pt;text-align:center}.sn{font-size:14pt;font-weight:700;color:#6B2D8B}.sl{font-size:7pt;color:#9b7bb5;text-transform:uppercase}');
  w.document.write('.ig{display:grid;grid-template-columns:1fr 1fr}.ir{padding:3pt 0;border-bottom:0.3mm solid #f5f0fa}.il{font-size:7pt;color:#9b7bb5;text-transform:uppercase}.iv{font-size:9pt;font-weight:600}');
  w.document.write('.tc{display:grid;grid-template-columns:1fr 1fr;gap:6pt}.box{background:#f0ecf9;border-left:2pt solid #6B2D8B;padding:4pt 7pt;font-size:8pt;line-height:1.5}');
  w.document.write('.dg{display:grid;grid-template-columns:1fr 1fr;gap:5pt;margin-top:4pt}.db{background:#f8f5ff;padding:5pt;text-align:center}.dt{font-size:7pt;color:#9b7bb5;text-transform:uppercase}.dn{font-size:9pt;font-weight:600}');
  w.document.write('.rf{text-align:center;padding:4pt;background:#f8f5ff;font-size:7.5pt;color:#9b7mb5;margin:5mm -14mm -8mm;border-top:0.5mm solid #ede8f5}');
  w.document.write('</style></head><body>');

  // Cover
  w.document.write('<div class="page cover">');
  w.document.write('<h2 style="font-size:13pt;color:#e8c97a;margin-bottom:8pt">African Methodist Episcopal Church</h2>');
  w.document.write('<div style="width:40mm;height:1mm;background:#C4972A;margin:8pt auto"></div>');
  w.document.write('<h1 style="font-size:22pt;color:white;margin:8pt 0">M.M. Mokone Memorial Annual Conference 2026</h1>');
  w.document.write('<p style="font-size:11pt;color:#d4b8f0;line-height:1.9">Presiding Elder Summary Reports &amp; Pastor Summary Reports<br><br>Senior Bishop Wilfred Jacobus Messiah, Presiding Prelate<br>Rev. Carol Isabella Messiah, Supervisor<br><br>Annual Conference: 08 October 2026</p>');
  w.document.write('<div style="width:40mm;height:1mm;background:#C4972A;margin:10pt auto"></div>');
  w.document.write('<p style="font-size:9pt;color:rgba(255,255,255,.4)">Generated: '+new Date().toLocaleDateString("en-ZA",{year:"numeric",month:"long",day:"numeric"})+'</p>');
  w.document.write('</div>');

  // PE Summary per district
  DC.forEach(function(d){
    var dRows = allRows.filter(function(s){ return nm(s["District"])===nm(d.n); });
    if(!dRows.length) return;
    var t={c:0,a:0,b:0,m:0,f:0,pp:0,pe:0,pc:0};
    dRows.forEach(function(s){ t.c+=parseInt(s["Conversions"]||0)||0; t.a+=parseInt(s["Accessions"]||0)||0; t.b+=parseInt(s["Baptisms"]||0)||0; t.m+=parseInt(s["Total Members"]||0)||0; t.f+=parseFloat(s["Funds Raised"]||0)||0; t.pp+=parseFloat(s["Paid to Pastor"]||0)||0; t.pe+=parseFloat(s["Paid to PE"]||0)||0; t.pc+=parseFloat(s["Brought to Conf"]||0)||0; });
    var tr2 = dRows.map(function(s){ return '<tr><td>'+fV(s["Church"])+'</td><td style="font-size:8pt;color:#555">'+fV(s["Pastor"])+'</td><td>'+fN(s["Conversions"])+'</td><td>'+fN(s["Accessions"])+'</td><td>'+fN(s["Baptisms"])+'</td><td>'+fN(s["Total Members"])+'</td><td>'+fRb(s["Funds Raised"])+'</td><td>'+fRb(s["Paid to Pastor"])+'</td><td>'+fRb(s["Paid to PE"])+'</td><td>'+fRb(s["Brought to Conf"])+'</td></tr>'; }).join("");
    w.document.write('<div class="page"><div class="dh"><h2 style="font-size:13pt;margin-bottom:2pt">'+d.n+' — Presiding Elder\'s Summary</h2><p style="font-size:10pt;color:#d4b8f0">'+d.pe+' · '+dRows.length+' Churches Submitted</p></div><div style="padding:0"><table><thead><tr><th>Church</th><th>Pastor</th><th>Conv.</th><th>Acc.</th><th>Bap.</th><th>Members</th><th>Funds Raised</th><th>Paid to Pastor</th><th>Paid to PE</th><th>Brought to Conf.</th></tr></thead><tbody>'+tr2+'<tr class="tot"><td colspan="2">TOTALS</td><td>'+t.c+'</td><td>'+t.a+'</td><td>'+t.b+'</td><td>'+t.m+'</td><td>'+fRb(t.f)+'</td><td>'+fRb(t.pp)+'</td><td>'+fRb(t.pe)+'</td><td>'+fRb(t.pc)+'</td></tr></tbody></table></div></div>');
  });

  // Individual pastor reports
  allRows.forEach(function(s){
    var mR2 = mCols.map(function(c,i){ var y=(s[c[0]]||"").toLowerCase()==="yes"; return '<tr><td>'+mLabs[i]+'</td><td>'+(y?"Yes":"No")+'</td><td>'+(y?fV(s[c[1]]):"—")+'</td></tr>'; }).join("");
    w.document.write('<div class="page rp"><div class="rh"><h3 style="font-size:12pt;margin-bottom:2pt">'+fV(s["Church"])+'</h3><p style="font-size:9pt;color:#d4b8f0">'+fV(s["Pastor"])+' · '+fV(s["District"])+'</p></div>');
    w.document.write('<div class="st">Church Identification</div><div class="ig"><div class="ir"><div class="il">District</div><div class="iv">'+fV(s["District"])+'</div></div><div class="ir"><div class="il">Presiding Elder</div><div class="iv">'+fV(s["Presiding Elder"])+'</div></div><div class="ir" style="grid-column:span 2"><div class="il">Church</div><div class="iv">'+fV(s["Church"])+'</div></div><div class="ir" style="grid-column:span 2"><div class="il">Pastor</div><div class="iv">'+fV(s["Pastor"])+'</div></div></div>');
    w.document.write('<div class="dg"><div class="db"><div class="dt">Adult Delegate</div><div class="dn">'+fV(s["Adult Delegate"])+'</div></div><div class="db"><div class="dt">Youth Delegate</div><div class="dn">'+fV(s["Youth Delegate"])+'</div></div></div>');
    w.document.write('<div class="st">Statistics</div><div class="sg"><div class="sb"><div class="sn">'+fN(s["Conversions"])+'</div><div class="sl">Conv.</div></div><div class="sb"><div class="sn">'+fN(s["Accessions"])+'</div><div class="sl">Acc.</div></div><div class="sb"><div class="sn">'+fN(s["Baptisms"])+'</div><div class="sl">Bap.</div></div><div class="sb"><div class="sn">'+fN(s["Total Members"])+'</div><div class="sl">Members</div></div><div class="sb"><div class="sn">'+fN(s["Avg Attendance"])+'</div><div class="sl">Avg Att.</div></div></div>');
    w.document.write('<div class="st">Financial Report</div><table><tbody><tr><td>Total Funds Raised</td><td>'+fRb(s["Funds Raised"])+'</td></tr><tr><td>Total Paid to Pastor</td><td>'+fRb(s["Paid to Pastor"])+'</td></tr><tr><td>Paid to Presiding Elder</td><td>'+fRb(s["Paid to PE"])+'</td></tr><tr><td>Brought to Annual Conference</td><td>'+fRb(s["Brought to Conf"])+'</td></tr></tbody></table>');
    w.document.write('<div class="tc"><div><div class="st">Ministries</div><table><thead><tr><th>Ministry</th><th>Yes/No</th><th>Members</th></tr></thead><tbody>'+mR2+'</tbody></table></div>');
    w.document.write('<div><div class="st">Outreach</div><div class="box">'+(s["Outreach Desc"]&&s["Outreach Desc"]!==""?s["Outreach Desc"]:(s["Outreach"]==="Yes"?"Active":"Not reported"))+'</div><div class="st" style="margin-top:5pt">UIF &amp; Annuity</div><div class="box">UIF: '+fV(s["UIF"])+'<br>Retirement: '+fV(s["Retirement"])+'<br>Annuity: '+fV(s["Annuity"])+'<br>PE Annuity: '+fV(s["PE Annuity"])+'</div>');
    w.document.write('<div class="st" style="margin-top:5pt">Accomplishments</div>');
    if(s["Accomplishment 1"]) w.document.write('<div class="box" style="margin-bottom:3pt"><strong>1.</strong> '+s["Accomplishment 1"]+'</div>');
    if(s["Accomplishment 2"]&&s["Accomplishment 2"]!=="") w.document.write('<div class="box"><strong>2.</strong> '+s["Accomplishment 2"]+'</div>');
    w.document.write('</div></div>');
    w.document.write('<div class="rf">African Methodist Episcopal Church · 19th Episcopal District · M.M. Mokone Memorial Annual Conference 2026</div>');
    w.document.write('</div>');
  });

  w.document.write('</body></html>');
  w.document.close();
  setTimeout(function(){ w.print(); }, 800);
}

// Init
countdown("2026-09-20T23:59:59","c1d","c1h","c1m","c1s");
countdown("2026-10-08T08:00:00","c2d","c2h","c2m","c2s");
fetchLive();
setInterval(fetchLive, 120000);



// PE CHARGE ROSTER - Official Summary Table
function showPERoster(district, submissions) {
  var container = document.getElementById('pe-roster-container');
  if (!container) return;
  
  var distSubs = submissions.filter(function(s) {
    return (s['District']||'').trim() === district.trim();
  });
  
  // Get unique churches (latest submission per church)
  var churchMap = {};
  distSubs.forEach(function(s) {
    var c = s['Church'];
    if (!churchMap[c] || s['Timestamp'] > churchMap[c]['Timestamp']) {
      churchMap[c] = s;
    }
  });
  var churches = Object.values(churchMap);
  
  if (churches.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:30px;color:#9b7bb5">No submissions received for this district yet.</div>';
    return;
  }

  var html = '<div style="margin-bottom:14px;display:flex;justify-content:space-between;align-items:center">';
  html += '<div><div style="font-size:13px;color:#e8c97a;font-weight:700">'+district+' — Charge Roster Summary</div>';
  html += '<div style="font-size:11px;color:#d4b8f0;margin-top:2px">'+churches.length+' of churches submitted</div></div>';
  html += '<button onclick="window.open('pe-print.html?district='+encodeURIComponent(district)+'','_blank')" style="padding:8px 16px;background:#C4972A;color:white;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer">&#128438; Print PE Summary</button>';
  html += '</div>';
  
  html += '<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:11px;min-width:1200px">';
  html += '<thead><tr style="background:#3a1750">';
  html += '<th style="padding:7px 6px;text-align:left;color:#e8c97a;border:1px solid #4a2560;white-space:nowrap">No.</th>';
  html += '<th style="padding:7px 6px;text-align:left;color:#e8c97a;border:1px solid #4a2560;white-space:nowrap">Charge / Circuit</th>';
  html += '<th style="padding:7px 6px;text-align:left;color:#e8c97a;border:1px solid #4a2560;white-space:nowrap">Name of Pastor</th>';
  html += '<th style="padding:7px 6px;text-align:right;color:#e8c97a;border:1px solid #4a2560;white-space:nowrap">Members<br>Prev Yr</th>';
  html += '<th style="padding:7px 6px;text-align:right;color:#e8c97a;border:1px solid #4a2560;white-space:nowrap">Members<br>This Yr</th>';
  html += '<th style="padding:7px 6px;text-align:right;color:#e8c97a;border:1px solid #4a2560;white-space:nowrap">Avg<br>Attend</th>';
  html += '<th style="padding:7px 6px;text-align:right;color:#e8c97a;border:1px solid #4a2560;white-space:nowrap">Conv</th>';
  html += '<th style="padding:7px 6px;text-align:right;color:#e8c97a;border:1px solid #4a2560;white-space:nowrap">Access</th>';
  html += '<th style="padding:7px 6px;text-align:right;color:#e8c97a;border:1px solid #4a2560;white-space:nowrap">Bapt</th>';
  html += '<th style="padding:7px 6px;text-align:right;color:#e8c97a;border:1px solid #4a2560;white-space:nowrap">Tithers</th>';
  html += '<th style="padding:7px 6px;text-align:right;color:#e8c97a;border:1px solid #4a2560;white-space:nowrap">Total Funds<br>Raised</th>';
  html += '<th style="padding:7px 6px;text-align:right;color:#e8c97a;border:1px solid #4a2560;white-space:nowrap">AC Budget<br>Assessed</th>';
  html += '<th style="padding:7px 6px;text-align:right;color:#e8c97a;border:1px solid #4a2560;white-space:nowrap">AC Budget<br>Paid</th>';
  html += '<th style="padding:7px 6px;text-align:right;color:#e8c97a;border:1px solid #4a2560;white-space:nowrap">Advance<br>Offering</th>';
  html += '<th style="padding:7px 6px;text-align:right;color:#e8c97a;border:1px solid #4a2560;white-space:nowrap">Office<br>Staff</th>';
  html += '<th style="padding:7px 6px;text-align:right;color:#e8c97a;border:1px solid #4a2560;white-space:nowrap">PE<br>Annuity</th>';
  html += '<th style="padding:7px 6px;text-align:right;color:#e8c97a;border:1px solid #4a2560;white-space:nowrap">Pastor<br>Annuity</th>';
  html += '<th style="padding:7px 6px;text-align:right;color:#e8c97a;border:1px solid #4a2560;white-space:nowrap">Provident<br>/Risk</th>';
  html += '<th style="padding:7px 6px;text-align:right;color:#e8c97a;border:1px solid #4a2560;white-space:nowrap">Episcopal<br>Residence</th>';
  html += '<th style="padding:7px 6px;text-align:right;color:#e8c97a;border:1px solid #4a2560;white-space:nowrap">Total Brought<br>to Conf</th>';
  html += '</tr></thead><tbody>';

  var totals = {membP:0,membC:0,att:0,conv:0,acc:0,bap:0,tith:0,funds:0,acbA:0,acbP:0,adv:0,ost:0,pan:0,pas:0,ret:0,erp:0,tac:0};

  churches.forEach(function(s, i) {
    var n = function(k) { return parseFloat(s[k]||'0')||0; };
    var f = function(k) { return s[k]||''; };
    var membP = n('Total Prev') || n('totalMembP');
    var membC = n('Total Curr') || n('totalMembC');
    var att = n('Attendance Curr') || n('attendanceC');
    var conv = n('Conversions Curr') || n('conversionsC');
    var acc = n('Accessions Curr') || n('accessionsC');
    var bap = n('Baptisms Curr') || n('baptismsC');
    var tith = n('Tithers Curr') || n('tithersC');
    var funds = n('Funds Raised') || n('fundsRaised');
    var acbA = n('ACB Assessed') || n('acbAssessed');
    var acbP = n('ACB Paid') || n('acbPaid');
    var adv = n('ADV Paid') || n('advPaid');
    var ost = n('OST Paid') || n('ostPaid');
    var pan = n('PAN Paid') || n('panPaid');
    var pas = n('PAS Paid') || n('pasPaid');
    var ret = n('RET Paid') || n('retPaid');
    var erp = n('ERP Paid') || n('erpPaid');
    var tac = n('TAC Paid') || n('tacPaid');

    totals.membP+=membP; totals.membC+=membC; totals.att+=att;
    totals.conv+=conv; totals.acc+=acc; totals.bap+=bap; totals.tith+=tith;
    totals.funds+=funds; totals.acbA+=acbA; totals.acbP+=acbP;
    totals.adv+=adv; totals.ost+=ost; totals.pan+=pan; totals.pas+=pas;
    totals.ret+=ret; totals.erp+=erp; totals.tac+=tac;

    var bg = i%2===0 ? 'rgba(255,255,255,.04)' : 'rgba(255,255,255,.08)';
    var td = function(val,right) {
      return '<td style="padding:6px;border:1px solid #3a2560;color:#e8e4f0;text-align:'+(right?'right':'left')+'">'+val+'</td>';
    };
    var fmt = function(n) { return n>0 ? n.toLocaleString('en-ZA') : '&#8212;'; };

    html += '<tr style="background:'+bg+'">';
    html += td(i+1);
    html += td('<strong style="color:white">'+f('Church')+'</strong>');
    html += td(f('Pastor'));
    html += td(fmt(membP),true);
    html += td(fmt(membC),true);
    html += td(fmt(att),true);
    html += td(fmt(conv),true);
    html += td(fmt(acc),true);
    html += td(fmt(bap),true);
    html += td(fmt(tith),true);
    html += td(funds>0?'R '+funds.toLocaleString('en-ZA'):'&#8212;',true);
    html += td(acbA>0?'R '+acbA.toLocaleString('en-ZA'):'&#8212;',true);
    html += td(acbP>0?'R '+acbP.toLocaleString('en-ZA'):'&#8212;',true);
    html += td(adv>0?'R '+adv.toLocaleString('en-ZA'):'&#8212;',true);
    html += td(ost>0?'R '+ost.toLocaleString('en-ZA'):'&#8212;',true);
    html += td(pan>0?'R '+pan.toLocaleString('en-ZA'):'&#8212;',true);
    html += td(pas>0?'R '+pas.toLocaleString('en-ZA'):'&#8212;',true);
    html += td(ret>0?'R '+ret.toLocaleString('en-ZA'):'&#8212;',true);
    html += td(erp>0?'R '+erp.toLocaleString('en-ZA'):'&#8212;',true);
    html += td(tac>0?'R '+tac.toLocaleString('en-ZA'):'&#8212;',true);
    html += '</tr>';
  });

  // TOTALS ROW
  var td2 = function(val) { return '<td style="padding:6px;border:1px solid #3a2560;color:#e8c97a;text-align:right;font-weight:700">'+val+'</td>'; };
  var fmt2 = function(n) { return n>0 ? 'R '+Math.round(n).toLocaleString('en-ZA') : '&#8212;'; };
  html += '<tr style="background:#3a1750">';
  html += '<td colspan="3" style="padding:6px;border:1px solid #3a2560;color:#e8c97a;font-weight:700;font-size:12px">DISTRICT TOTALS</td>';
  html += td2(totals.membP>0?totals.membP:'&#8212;');
  html += td2(totals.membC>0?totals.membC:'&#8212;');
  html += td2(totals.att>0?totals.att:'&#8212;');
  html += td2(totals.conv>0?totals.conv:'&#8212;');
  html += td2(totals.acc>0?totals.acc:'&#8212;');
  html += td2(totals.bap>0?totals.bap:'&#8212;');
  html += td2(totals.tith>0?totals.tith:'&#8212;');
  html += td2(fmt2(totals.funds));
  html += td2(fmt2(totals.acbA));
  html += td2(fmt2(totals.acbP));
  html += td2(fmt2(totals.adv));
  html += td2(fmt2(totals.ost));
  html += td2(fmt2(totals.pan));
  html += td2(fmt2(totals.pas));
  html += td2(fmt2(totals.ret));
  html += td2(fmt2(totals.erp));
  html += td2(fmt2(totals.tac));
  html += '</tr>';

  html += '</tbody></table></div>';
  container.innerHTML = html;
  container.style.display = 'block';
  
  // Store for PE print
  try { sessionStorage.setItem('peRosterData', JSON.stringify({district:district, churches:churches, totals:totals})); } catch(e) {}
}
