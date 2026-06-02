/* ══════════════════════════════════════════════════════════════════════════
   MOTOR INTERACTIVO UNIFICADO DE LA PLATAFORMA (SOPORTE 33 SESIONES REALES)
   ══════════════════════════════════════════════════════════════════════════ */
let curModIdx = null;
let curSesIdx = null;
let curCSEIdx = null;

// Calibrado técnico e indexación según la distribución completa del MEN 
const TOTAL_SESSIONS = 33; 
const PROG_KEY = 'cfe_dse_progress_v3_2026';
const LAST_KEY = 'cfe_dse_last_v3_2026';
const REF_PREFIX = 'reflexion_';
const AE_PREFIX  = 'autoeval_';

// Inicialización del sistema al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  renderModulos();
  renderCSE();
  updateProgressUI();
});

/* ══════════════════════════════════════════
   SISTEMA DE NAVEGACIÓN DE PÁGINAS (DOM)
   ══════════════════════════════════════════ */
function showPage(id, evt) {
  if (evt) evt.preventDefault();
  
  // Alternar estados activos en el marcado de páginas
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-pills button, .npill').forEach(b => b.classList.remove('active', 'on'));
  
  const targetPage = document.getElementById('page-' + id);
  if (targetPage) targetPage.classList.add('active');
  
  // Sincronizar estados de botones de barra de navegación superior
  const activeBtn = document.getElementById('nav-' + id);
  if (activeBtn) activeBtn.classList.add('active', 'on');
  
  // Ejecutar renders dinámicos si se requiere
  if (id === 'diario') renderDiario();
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ══════════════════════════════════════════
   RENDER DE MÓDULOS Y VISTAS ASOCIADAS
   ══════════════════════════════════════════ */
function renderModulos() {
  const el = document.getElementById('modulos-list');
  if (!el) return;
  
  el.innerHTML = MODULOS.map((m, i) => {
    const done = countModDone(i);
    const total = m.sesiones.length;
    const pct = total ? Math.round(done / total * 100) : 0;
    const allDone = done === total && total > 0;
    
    return `
    <button class="mod-card" onclick="openModulo(${i})">
      <div class="mod-icon" style="background:${m.bg}">
        <i class="ti ${allDone ? 'ti-circle-check-filled' : m.icon}" style="color:${m.color}"></i>
      </div>
      <div style="flex:1; min-width:0; text-align:left">
        <div class="mod-meta" style="color:${m.color}">${m.num}</div>
        <div class="mod-title">${m.title}</div>
        <div class="mod-sub">${m.sub}</div>
        ${done > 0 ? `
        <div class="mod-progress">
          <div class="mod-progress-bar"><div class="mod-progress-fill" style="width:${pct}%; background:${m.color}"></div></div>
          <span class="mod-progress-txt">${done}/${total} laboratorio(s)</span>
          ${allDone ? '<span class="mod-badge-done">✓ Listo</span>' : ''}
        </div>` : ''}
      </div>
      <i class="ti ti-chevron-right chevron"></i>
    </button>`;
  }).join('');
}

function openModulo(idx) {
  curModIdx = idx;
  const m = MODULOS[idx];
  
  document.getElementById('view-modulos').style.display = 'none';
  document.getElementById('view-sesiones').style.display = 'block';
  document.getElementById('view-sesion').style.display = 'none';

  document.getElementById('mod-header').innerHTML = `
    <div style="display:flex; align-items:center; gap:12px; margin-bottom:.5rem">
      <div class="mod-icon" style="background:${m.bg}">
        <i class="ti ${m.icon}" style="color:${m.color}"></i>
      </div>
      <div>
        <div class="mod-meta" style="color:${m.color}">${m.num}</div>
        <div style="font-size:18px; font-weight:600; color:var(--text)">${m.title}</div>
      </div>
    </div>
    <p style="font-size:13px; color:var(--muted); margin-bottom:.5rem">${m.sub}</p>
  `;
  
  document.getElementById('ses-count-label').textContent = `Estructura Pedagógica — ${m.sesiones.length} Laboratorio(s)`;

  document.getElementById('sesiones-list').innerHTML = m.sesiones.map((s, i) => {
    const done = isDone(idx, i);
    return `
    <button class="ses-card" onclick="openSesion(${i})" style="${done ? 'border-color:#6EE7B7; background:#F0FDF4' : ''}">
      <div style="display:flex; align-items:center; justify-content:between; width:100%">
        <div style="flex:1; text-align:left">
          <span class="ses-badge" style="background:${m.bg}; color:${m.color}">${s.tipo}</span>
          <span class="ses-dur"><i class="ti ti-clock"></i> ${s.dur}</span>
        </div>
        ${done ? '<span style="font-size:13px; color:#059669; font-weight:600; display:flex; align-items:center; gap:3px"><i class="ti ti-circle-check-filled"></i> Completado</span>' : ''}
      </div>
      <div class="ses-title" style="margin-top:4px; text-align:left">${s.title}</div>
      <div class="ses-obj" style="margin-top:2px; text-align:left">${s.obj[0]}</div>
    </button>`;
  }).join('');
  
  window.scrollTo(0, 0);
}

function backToModulos() {
  document.getElementById('view-modulos').style.display = 'block';
  document.getElementById('view-sesiones').style.display = 'none';
  document.getElementById('view-sesion').style.display = 'none';
  window.scrollTo(0, 0);
}

/* ══════════════════════════════════════════
   SISTEMA DE DETALLE DE SESIÓN Y TABS INTERNOS
   ══════════════════════════════════════════ */
function openSesion(idx) {
  curSesIdx = idx;
  const m = MODULOS[curModIdx];
  const s = m.sesiones[idx];

  document.getElementById('view-sesiones').style.display = 'none';
  document.getElementById('view-sesion').style.display = 'block';

  document.getElementById('ses-badge-row').innerHTML = `
    <span class="ses-badge" style="background:${m.bg}; color:${m.color}">${s.tipo}</span>
  `;
  document.getElementById('ses-title').textContent = s.title;
  document.getElementById('ses-meta').innerHTML = `<i class="ti ti-clock"></i> ${s.dur}`;

  const rKey = REF_PREFIX + curModIdx + '_' + curSesIdx;
  const aeKey = AE_PREFIX + curModIdx + '_' + curSesIdx;
  const savedRef = localStorage.getItem(rKey) || '';
  const savedAe = JSON.parse(localStorage.getItem(aeKey) || '{}');

  // Renderizar Tab Contenidos + Cajas de Retos Interactivos
  document.getElementById('tab-contenido').innerHTML = `
    <div class="section-label">Objetivos de aprendizaje de la sesión</div>
    <div class="obj-list">${s.obj.map(o => `<div class="content-block" style="color:var(--text); border-color:${m.color}">${o}</div>`).join('')}</div>
    
    <div class="section-label" style="margin-top:1.25rem">Ejes y Contenidos Centrales</div>
    <div class="obj-list">${s.contenidos.map(c => `<div class="content-block" style="color:var(--text); border-color:${m.color}">${c}</div>`).join('')}</div>

    <div class="reflexion-card" style="border-color:${m.color}30; margin-top:2rem">
      <div class="reflexion-header">
        <div class="reflexion-icon" style="background:${m.bg}; color:${m.color}"><i class="ti ti-pencil"></i></div>
        <div>
          <div class="reflexion-title">Mi Diario Pedagógico e Institucional</div>
          <div class="reflexion-sub">El registro reflexivo de tu práctica se almacena de forma local</div>
        </div>
      </div>
      <div class="reflexion-question" style="font-weight:600; color:var(--text)">Disparador Reflexivo: ${s.rq}</div>
      <textarea class="reflexion-textarea" id="reflexion-input" placeholder="Escribe tu reflexión con un enfoque transformador para tu institución aquí..." rows="4">${savedRef}</textarea>
      <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap; margin-top:.65rem">
        <button class="reflexion-save-btn" style="background:${m.color}" onclick="saveReflexion()">
          <i class="ti ti-device-floppy"></i> Guardar en Diario
        </button>
        <div class="reflexion-saved" id="reflexion-saved" style="display:${savedRef ? 'flex' : 'none'}">
          <i class="ti ti-circle-check"></i> ¡Guardada con éxito en tu bitácora!
        </div>
      </div>
    </div>

    <div class="autoeval-card" style="margin-top:1.5rem">
      <div class="autoeval-title" style="color:${m.color}; font-weight:700">
        <i class="ti ti-star-filled"></i> Autoevaluación Descriptiva de Avance
      </div>
      <div class="reflexion-question" style="margin-bottom:.5rem; font-size:13px; font-style:italic">${s.aq}</div>
      <div class="scale-wrap" id="ae-comprension">
        ${[1, 2, 3, 4].map(n => `
          <button class="scale-btn ${savedAe.comprension == n ? 'selected' : ''}" 
                  onclick="setAE('comprension', ${n}, this)" 
                  style="${savedAe.comprension == n ? 'background:' + m.color + '; border-color:' + m.color + '; color:#fff' : ''}">
            ${n}
          </button>`).join('')}
      </div>
      <div class="scale-label"><span>1. Explorando Conceptos</span><span>4. Liderando con Evidencias</span></div>
    </div>
  `;

  // Renderizar Tab Actividades Expandidas Secuenciadas
  document.getElementById('tab-actividades').innerHTML = `
    <div class="section-label">Secuencia de Actividades para Comunidades de Práctica</div>
    <div class="act-list">${s.actividades.map((a, i) => `
      <div class="act-item">
        <div class="act-num" style="background:${m.bg}; color:${m.color}">${i + 1}</div>
        <div class="act-text" style="font-size:13.5px; color:var(--text2)">${a}</div>
      </div>`).join('')}
    </div>
  `;

  // Renderizar Tab Recursos y Referencias
  document.getElementById('tab-recursos').innerHTML = `
    <div class="section-label">Referencias del MEN y Recursos Técnicos de Apoyo</div>
    <div class="res-list">${s.recursos.map(r => `
      <div class="res-item" style="background:#fff; box-shadow:var(--shadow-sm); padding:.75rem; border-radius:6px; margin-bottom:.5rem; display:flex; align-items:center; gap:8px">
        <i class="ti ti-link" style="color:${m.color}; flex-shrink:0; font-size:16px"></i>
        <span style="font-size:13px; color:var(--text2)">${r}</span>
      </div>`).join('')}
    </div>
  `;

  // Forzar reseteo de estados visuales de pestañas
  document.querySelectorAll('#ses-tabs .tab-btn').forEach(b => {
    b.classList.remove('active');
    b.style.color = 'var(--muted)';
  });
  const firstTab = document.querySelectorAll('#ses-tabs .tab-btn')[0];
  firstTab.classList.add('active');
  firstTab.style.color = m.color;

  document.getElementById('tab-contenido').style.display = 'block';
  document.getElementById('tab-actividades').style.display = 'none';
  document.getElementById('tab-recursos').style.display = 'none';

  // Configurar propiedades de color css nativo en pestañas activas
  document.querySelectorAll('#ses-tabs .tab-btn').forEach(b => {
    b.style.setProperty('--tab-active', m.color);
  });

  // Configurar botones de pie de página de navegación interna
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  btnPrev.disabled = idx === 0;
  btnNext.style.background = m.color;
  btnNext.textContent = idx < m.sesiones.length - 1 ? 'Siguiente Laboratorio →' : '✓ Finalizar Módulo';

  saveLastPos(curModIdx, idx);
  updateDoneBtn();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToSesiones() {
  document.getElementById('view-sesion').style.display = 'none';
  document.getElementById('view-sesiones').style.display = 'block';
  openModulo(curModIdx);
}

function navSesion(dir) {
  const m = MODULOS[curModIdx];
  const next = curSesIdx + dir;
  if (next < 0 || next >= m.sesiones.length) { 
    backToSesiones(); 
    return; 
  }
  openSesion(next);
}

function switchTab(tab, btn) {
  ['contenido', 'actividades', 'recursos'].forEach(t => {
    const el = document.getElementById('tab-' + t);
    if (el) el.style.display = (t === tab) ? 'block' : 'none';
  });
  document.querySelectorAll('#ses-tabs .tab-btn').forEach(b => {
    b.classList.remove('active');
    b.style.color = 'var(--muted)';
  });
  btn.classList.add('active');
  const m = MODULOS[curModIdx];
  btn.style.color = m.color;
}

/* ══════════════════════════════════════════
   SISTEMA DE PROFUNDIZACIÓN DE COMPETENCIAS CSE
   ══════════════════════════════════════════ */
function renderCSE() {
  const listContainer = document.getElementById('cse-list');
  if (!listContainer) return;
  if (typeof CSE === 'undefined') return;
  
  listContainer.innerHTML = CSE.map((c, i) => `
    <button class="mod-card" onclick="openCSE(${i})">
      <div class="mod-icon" style="background:${c.bg}">
        <i class="ti ${c.icon}" style="color:${c.color}"></i>
      </div>
      <div style="flex:1; min-width:0; text-align:left">
        <div style="display:flex; gap:8px; align-items:center; margin-bottom:3px">
          <span class="ses-badge" style="background:${c.bg}; color:${c.tc}">${c.num}</span>
          <span style="font-size:11px; color:var(--muted)">Eje: ${c.eje}</span>
        </div>
        <div class="mod-title">${c.title}</div>
      </div>
      <i class="ti ti-chevron-right chevron"></i>
    </button>
  `).join('');
}

function openCSE(idx) {
  curCSEIdx = idx;
  const c = CSE[idx];
  
  const listCont = document.getElementById('view-cse-list-container');
  if (listCont) listCont.style.display = 'none';
  
  const detailCont = document.getElementById('view-cse-detail');
  if (detailCont) detailCont.style.display = 'block';

  document.getElementById('cse-header').innerHTML = `
    <div style="display:flex; align-items:flex-start; gap:14px; margin-bottom:.75rem">
      <div class="mod-icon" style="background:${c.bg}">
        <i class="ti ${c.icon}" style="color:${c.color}"></i>
      </div>
      <div style="text-align:left">
        <div style="display:flex; gap:8px; align-items:center; margin-bottom:3px">
          <span class="ses-badge" style="background:${c.bg}; color:${c.tc}">${c.num}</span>
          <span style="font-size:11px; color:var(--muted)">Eje de Desarrollo: ${c.eje}</span>
        </div>
        <div style="font-size:19px; font-weight:600; color:var(--text)">Competencia: ${c.title}</div>
      </div>
    </div>
    <p style="font-size:13.5px; color:var(--text2); line-height:1.65; padding:.75rem 1rem; background:var(--bg2); border-radius:8px; border-left:3px solid ${c.color}; margin-bottom:1.5rem; text-align:left">${c.def}</p>
  `;

  renderCSETab('secuencia');
  document.querySelectorAll('#cse-tabs .tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('#cse-tabs .tab-btn')[0].classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToCSE() {
  const listCont = document.getElementById('view-cse-list-container');
  if (listCont) listCont.style.display = 'block';
  
  const detailCont = document.getElementById('view-cse-detail');
  if (detailCont) detailCont.style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchCSETab(tab, btn) {
  ['secuencia', 'actividades', 'rubrica', 'guia'].forEach(t => {
    const el = document.getElementById('cse-' + t);
    if (el) el.style.display = (t === tab) ? 'block' : 'none';
  });
  document.querySelectorAll('#cse-tabs .tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCSETab(tab);
}

function renderCSETab(tab) {
  const c = CSE[curCSEIdx];
  if (!c) return;

  if (tab === 'secuencia') {
    document.getElementById('cse-secuencia').innerHTML = c.secuencia.map((f, i) => `
      <div class="seq-phase">
        <div class="seq-head" style="background:${c.bg}">
          <div style="display:flex; align-items:center; gap:10px">
            <div style="width:24px; height:24px; border-radius:50%; background:${c.color}; color:#fff; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:600; flex-shrink:0">${i + 1}</div>
            <span style="font-size:13.5px; font-weight:600; color:${c.tc}">${f.fase}</span>
          </div>
          <span style="font-size:12px; color:${c.tc}; font-weight:500"><i class="ti ti-clock"></i> ${f.tiempo}</span>
        </div>
        <div class="seq-body" style="background:#fff; padding:1rem; text-align:left">
          <div class="seq-desc" style="font-size:13.5px; color:var(--text2)">${f.desc}</div>
          <div class="seq-rol" style="color:var(--muted); font-size:12px; margin-top:4px"><i class="ti ti-user"></i> Rol de Facilitación: ${f.rol}</div>
        </div>
      </div>
    `).join('');
  }

  if (tab === 'actividades') {
    document.getElementById('cse-actividades').innerHTML = c.actividades.map(n => `
      <div class="nivel-card" style="box-shadow:var(--shadow-sm); border-radius:12px; margin-bottom:1rem; border:1px solid var(--border); overflow:hidden">
        <div class="nivel-head" style="background:${n.bg}; color:${n.tc}; font-weight:600; padding:.7rem 1rem; text-align:left">${n.nivel}</div>
        <ul class="nivel-body" style="background:#fff; padding:1rem 1rem 1rem 2rem; text-align:left">
          ${n.items.map(it => `<li style="font-size:13px; color:var(--text2); margin-bottom:.5rem">${it}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }

  if (tab === 'rubrica') {
    document.getElementById('cse-rubrica').innerHTML = `
      <div class="rubrica-wrap" style="overflow-x:auto; background:#fff; padding:1rem; border:1px solid var(--border); border-radius:8px">
        <table style="width:100%; border-collapse:collapse; text-align:left">
          <thead><tr style="background:${c.bg}">
            <th style="color:${c.tc}; font-size:12px; padding:8px; border:1px solid var(--border)">Criterios Evaluativos</th>
            <th style="color:${c.tc}; font-size:12px; padding:8px; border:1px solid var(--border)">1. Explorando</th>
            <th style="color:${c.tc}; font-size:12px; padding:8px; border:1px solid var(--border)">2. Comprendiendo</th>
            <th style="color:${c.tc}; font-size:12px; padding:8px; border:1px solid var(--border)">3. Aplicando</th>
            <th style="color:${c.tc}; font-size:12px; padding:8px; border:1px solid var(--border)">4. Liderando</th>
          </tr></thead>
          <tbody>${c.rubrica.map(r => `<tr>
            <td style="font-weight:600; font-size:12.5px; padding:8px; border:1px solid var(--border)">${r.criterio}</td>
            ${r.d.map(desc => `<td style="font-size:12px; color:var(--text2); padding:8px; border:1px solid var(--border)">${desc}</td>`).join('')}
          </tr>`).join('')}</tbody>
        </table>
      </div>
    `;
  }

  if (tab === 'guia') {
    document.getElementById('cse-guia').innerHTML = `
      <div class="guia-box" style="background:var(--bg2); border-left:4px solid ${c.color}; padding:1rem; margin-bottom:1rem; border-radius:4px; text-align:left">
        <div class="guia-title" style="font-weight:700">Propósito Formativo Integral</div>
        <div class="guia-text" style="color:var(--text); font-size:13.5px">${c.guia.prop}</div>
      </div>
      <div style="border:1px solid var(--border); border-radius:10px; overflow:hidden; margin-bottom:1rem; box-shadow:var(--shadow-sm); text-align:left">
        <div style="padding:.65rem 1rem; background:#FEF2F2; border-bottom:1px solid var(--border)">
          <span style="font-size:13px; font-weight:600; color:#991B1B"><i class="ti ti-alert-triangle-filled"></i> Alertas y Resguardos Pedagógicos Esenciales</span>
        </div>
        <div style="padding:.75rem 1rem; background:#fff">
          ${c.guia.adv.map(a => `<div class="warn-item" style="font-size:13px; color:var(--text2); margin-bottom:4px">⚠ ${a}</div>`).join('')}
        </div>
      </div>
      <div class="guia-box" style="background:${c.bg}; border-left:4px solid ${c.color}; padding:1rem; border-radius:4px; text-align:left">
        <div class="guia-title" style="font-weight:700; color:${c.tc}"><i class="ti ti-flag-filled"></i> Directriz del Cierre Afectivo</div>
        <div class="guia-text" style="font-size:13.5px; color:var(--text2)">${c.guia.cierre}</div>
      </div>
    `;
  }
}

/* ══════════════════════════════════════════
   SISTEMA DE PERSISTENCIA Y LOCALSTORAGE (PROGRESO)
   ══════════════════════════════════════════ */
function getProgress() {
  try { return JSON.parse(localStorage.getItem(PROG_KEY)) || {}; }
  catch(e) { return {}; }
}

function saveProgress(p) {
  try { localStorage.setItem(PROG_KEY, JSON.stringify(p)); } catch(e){}
}

function saveLastPos(modIdx, sesIdx) {
  try { localStorage.setItem(LAST_KEY, JSON.stringify({ modIdx, sesIdx })); } catch(e){}
}

function isDone(modIdx, sesIdx) { return !!getProgress()[modIdx + '_' + sesIdx]; }

function countDone() {
  const p = getProgress();
  return Object.keys(p).filter(k => p[k]).length;
}

function countModDone(modIdx) {
  if (!MODULOS[modIdx]) return 0;
  return MODULOS[modIdx].sesiones.filter((_, i) => isDone(modIdx, i)).length;
}

function toggleDone() {
  const p = getProgress();
  const key = curModIdx + '_' + curSesIdx;
  p[key] = !p[key];
  saveProgress(p);
  
  updateDoneBtn();
  updateProgressUI();
  renderModulos();
}

function updateDoneBtn() {
  const btn = document.getElementById('ses-done-btn');
  const txt = document.getElementById('ses-done-txt');
  if (!btn) return;
  
  const done = isDone(curModIdx, curSesIdx);
  btn.className = 'ses-done-btn ' + (done ? 'done' : 'pending');
  txt.textContent = done ? 'Laboratorio Completado ✓ — Clic para revertir' : 'Marcar laboratorio como completado';
}

function updateProgressUI() {
  const done = countDone();
  const pct = Math.round(done / TOTAL_SESSIONS * 100);

  // Panel de visualización de Hero en Inicio
  const heroEl = document.getElementById('progress-hero');
  if (heroEl) {
    heroEl.style.display = done > 0 ? 'block' : 'none';
    document.getElementById('hero-pct').textContent = pct + '%';
    document.getElementById('hero-bar').style.width = pct + '%';
    document.getElementById('hero-sub-txt').textContent = `${done} de ${TOTAL_SESSIONS} laboratorios registrados `;
    
    const resumeBtn = document.getElementById('resume-btn');
    if (resumeBtn) resumeBtn.style.display = done < TOTAL_SESSIONS ? 'flex' : 'none';
  }

  // Barra de navegación superior rápida
  const topProg = document.getElementById('topbar-prog');
  if (topProg) {
    topProg.style.display = done > 0 ? 'flex' : 'none';
    document.getElementById('topbar-prog-txt').textContent = pct + '%';
    document.getElementById('topbar-prog-fill').style.width = pct + '%';
  }
}

function resumeCourse() {
  try {
    const last = JSON.parse(localStorage.getItem(LAST_KEY));
    if (!last) return;
    curModIdx = last.modIdx;
    showPage('curso');
    openModulo(last.modIdx);
    setTimeout(() => openSesion(last.sesIdx), 150);
  } catch(e){}
}

/* ══════════════════════════════════════════
   GESTIÓN DEL DIARIO PEDAGÓGICO
   ══════════════════════════════════════════ */
function saveReflexion() {
  const el = document.getElementById('reflexion-input');
  if (!el || !el.value.trim()) return;
  
  localStorage.setItem(REF_PREFIX + curModIdx + '_' + curSesIdx, el.value.trim());
  
  const dKey = 'diario_meta_' + curModIdx + '_' + curSesIdx;
  const m = MODULOS[curModIdx];
  const s = m.sesiones[curSesIdx];
  
  localStorage.setItem(dKey, JSON.stringify({
    modTitle: m.num + ' — ' + m.title,
    modColor: m.color,
    sesTitle: s.title,
    date: new Date().toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' })
  }));
  
  const savedIndicator = document.getElementById('reflexion-saved');
  if (savedIndicator) {
    savedIndicator.style.display = 'flex';
    setTimeout(() => { savedIndicator.style.display = 'none'; }, 3000);
  }
}

function setAE(field, val, btn) {
  const key = AE_PREFIX + curModIdx + '_' + curSesIdx;
  localStorage.setItem(key, JSON.stringify({ [field]: val }));
  
  const m = MODULOS[curModIdx];
  const wrap = document.getElementById('ae-' + field);
  if (!wrap) return;
  
  wrap.querySelectorAll('.scale-btn').forEach(b => {
    b.classList.remove('selected');
    b.style.background = ''; b.style.borderColor = ''; b.style.color = '';
  });
  
  btn.classList.add('selected');
  btn.style.background = m.color;
  btn.style.borderColor = m.color;
  btn.style.color = '#fff';
}

function renderDiario() {
  const container = document.getElementById('diario-entries');
  const emptyEl = document.getElementById('diario-empty');
  const clearBtn = document.getElementById('diario-clear-btn');
  if (!container) return;

  const entries = [];
  for (let mi = 0; mi < MODULOS.length; mi++) {
    for (let si = 0; si < MODULOS[mi].sesiones.length; si++) {
      const ref = localStorage.getItem(REF_PREFIX + mi + '_' + si);
      if (!ref) continue;
      const meta = JSON.parse(localStorage.getItem('diario_meta_' + mi + '_' + si) || '{}');
      const ae = JSON.parse(localStorage.getItem(AE_PREFIX + mi + '_' + si) || '{}');
      entries.push({ ref, meta, ae });
    }
  }

  if (!entries.length) {
    container.innerHTML = '';
    if (emptyEl) emptyEl.style.display = 'block';
    if (clearBtn) clearBtn.style.display = 'none';
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';
  if (clearBtn) clearBtn.style.display = 'inline-flex';

  container.innerHTML = entries.map(e => `
    <div class="diario-entry" style="border-left:4px solid ${e.meta.modColor || 'var(--verde)'}; background:#fff; margin-bottom:1rem; border-radius:8px; box-shadow:var(--shadow-sm); padding:1.25rem; text-align:left">
      <div class="diario-entry-date" style="font-weight:500; font-size:12px; color:var(--muted)"><i class="ti ti-calendar"></i> Registro: ${e.meta.date || '—'}</div>
      <div class="diario-entry-mod" style="color:${e.meta.modColor || 'var(--verde)'}; font-weight:600; font-size:13px; margin:4px 0">${e.meta.modTitle} &rsaquo; ${e.meta.sesTitle}</div>
      <div class="diario-entry-txt" style="font-size:13.5px; line-height:1.6; color:var(--text2); background:var(--bg); padding:.75rem; border-radius:6px; margin-top:6px; font-style:italic">"${e.ref}"</div>
      ${e.ae.comprension ? `<div style="margin-top:.5rem"><span style="font-size:11px; background:var(--bg2); padding:3px 9px; border-radius:99px; color:var(--text); font-weight:600">Nivel de Progresión: ${e.ae.comprension} / 4</span></div>` : ''}
    </div>
  `).join('');
}

function clearDiario() {
  if (!confirm('¿Seguro que deseas purgar la base de datos de tus reflexiones pedagógicas? Esto no se puede deshacer.')) return;
  localStorage.clear();
  renderDiario();
  updateProgressUI();
  renderModulos();
}