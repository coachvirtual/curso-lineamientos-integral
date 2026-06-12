/* ══════════════════════════════════════════════════════════
   MOTOR INTERACTIVO v3 — Formación Ciudadana & DSE · MEN 2026
   ══════════════════════════════════════════════════════════ */

/* ── Estado global ── */
let curModIdx  = null;
let curSesIdx  = null;
let curCSEIdx  = null;

/* ── Claves localStorage ── */
const PROG_KEY   = 'cfe_prog_v4';
const LAST_KEY   = 'cfe_last_v4';
const QUIZ_KEY   = 'cfe_quiz_v4';
const ACT_KEY    = 'cfe_act_v4';
const LIKERT_KEY = 'cfe_likert_v4';
const DIARIO_KEY = 'cfe_diario_v4';

/* ══════════════════════════
   INIT
══════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderModulos();
  renderCSE();
  updateProgressUI();
  updateHeroStats();
});

/* ══════════════════════════
   STATS DINÁMICAS
══════════════════════════ */
function totalSessions() {
  return MODULOS.reduce((s, m) => s + (m.sesiones||[]).length, 0);
}
function updateHeroStats() {
  const mods  = MODULOS.length;
  const ses   = totalSessions();
  const horas = Math.round(ses * 1.4);
  const container = document.querySelector('.hero-stats');
  if (!container) return;
  container.innerHTML = [
    { num: mods,       lbl: 'Módulos' },
    { num: ses,        lbl: 'Sesiones' },
    { num: horas+'h+', lbl: 'Formación' },
    { num: 4,          lbl: 'Niveles Educ.' }
  ].map(s => `<div class="hero-stat">
    <div class="num">${s.num}</div>
    <div class="lbl">${s.lbl}</div>
  </div>`).join('');
}

/* ══════════════════════════
   NAVEGACIÓN
══════════════════════════ */
function showPage(id, evt) {
  if (evt) evt.preventDefault();
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.npill').forEach(b => b.classList.remove('on','active'));
  const page = document.getElementById('page-' + id);
  if (page) page.classList.add('active');
  const btn = document.getElementById('nav-' + id);
  if (btn) { btn.classList.add('on'); btn.classList.add('active'); }
  if (id === 'diario') renderDiario();
  if (id === 'dashboard') renderDashboard();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function show(id, visible) {
  const el = document.getElementById(id);
  if (el) el.style.display = visible ? 'block' : 'none';
}

/* ══════════════════════════
   MÓDULOS
══════════════════════════ */
function renderModulos() {
  const el = document.getElementById('modulos-list');
  if (!el) return;
  el.innerHTML = MODULOS.map((m, i) => {
    const done    = countModDone(i);
    const total   = (m.sesiones||[]).length;
    const pct     = total ? Math.round(done / total * 100) : 0;
    const allDone = done === total && total > 0;
    return `<button class="mod-card" onclick="openModulo(${i})">
      <div class="mod-icon" style="background:${m.bg}">
        <span style="font-size:22px">${m.icon||'📚'}</span>
      </div>
      <div style="flex:1;min-width:0">
        <div class="mod-meta" style="color:${m.color}">${m.num} · ${m.duracion||''}</div>
        <div class="mod-title">${m.titulo||m.title}</div>
        <div class="mod-sub">${m.subtitulo||m.sub||''}</div>
        ${done > 0 ? `<div class="mod-progress">
          <div class="mod-progress-bar">
            <div class="mod-progress-fill" style="width:${pct}%;background:${m.color}"></div>
          </div>
          <span class="mod-progress-txt">${done}/${total}</span>
          ${allDone ? '<span class="mod-badge-done">✓ Completo</span>' : ''}
        </div>` : ''}
      </div>
      <i class="ti ti-chevron-right chevron"></i>
    </button>`;
  }).join('');
}

function openModulo(idx) {
  curModIdx = idx;
  const m = MODULOS[idx];
  show('view-modulos', false);
  show('view-sesiones', true);
  show('view-sesion', false);

  document.getElementById('mod-header').innerHTML = `
    <div style="display:flex;align-items:center;gap:14px;margin-bottom:.85rem;padding:1.1rem;background:${m.bg};border-radius:var(--r-lg)">
      <span style="font-size:34px">${m.icon||'📚'}</span>
      <div>
        <div class="mod-meta" style="color:${m.color}">${m.num}</div>
        <div style="font-size:18px;font-weight:700;color:var(--text);letter-spacing:-.02em">${m.titulo||m.title}</div>
        <div style="font-size:12.5px;color:var(--muted);margin-top:2px">${m.duracion||''}</div>
      </div>
    </div>
    ${m.descripcion ? `<p style="font-size:13.5px;color:var(--text2);line-height:1.7;margin-bottom:1rem;padding:.9rem 1.1rem;background:var(--surface);border-radius:var(--r);border-left:4px solid ${m.color}">${m.descripcion}</p>` : ''}`;

  document.getElementById('ses-count-label').textContent =
    (m.sesiones||[]).length + ' sesión(es) en este módulo';

  document.getElementById('sesiones-list').innerHTML = (m.sesiones||[]).map((s, i) => {
    const done = isDone(idx, i);
    return `<button class="ses-card" onclick="openSesion(${i})" style="${done?'border-color:#6EE7B7;background:#F0FDF4':''}">
      <div style="display:flex;align-items:center;justify-content:space-between;width:100%;margin-bottom:6px">
        <div style="display:flex;align-items:center;gap:8px">
          <span class="ses-badge" style="background:${m.bg};color:${m.color}">${s.tipo||s.num||''}</span>
          <span class="ses-dur"><i class="ti ti-clock"></i> ${s.duracion||s.dur||''}</span>
        </div>
        ${done ? '<span style="font-size:12px;color:#059669;font-weight:600"><i class="ti ti-circle-check-filled"></i> Completada</span>' : ''}
      </div>
      <div class="ses-title">${s.titulo||s.title}</div>
      ${s.objetivo ? `<div class="ses-obj" style="margin-top:4px">${s.objetivo.substring(0,120)}…</div>` : ''}
    </button>`;
  }).join('');

  window.scrollTo(0, 0);
}

function backToModulos() {
  show('view-modulos', true);
  show('view-sesiones', false);
  show('view-sesion', false);
  window.scrollTo(0, 0);
}

/* ══════════════════════════
   SESIÓN
══════════════════════════ */
function openSesion(idx) {
  curSesIdx = idx;
  const m = MODULOS[curModIdx];
  const s = m.sesiones[idx];
  show('view-sesiones', false);
  show('view-sesion', true);

  document.getElementById('ses-badge-row').innerHTML =
    `<span class="ses-badge" style="background:${m.bg};color:${m.color}">${s.tipo||s.num||''}</span>`;
  document.getElementById('ses-title').textContent = s.titulo||s.title;
  document.getElementById('ses-meta').innerHTML =
    `<i class="ti ti-clock"></i> ${s.duracion||s.dur||''}`;

  /* ── TABS: siempre 4, actividades y evaluación con lock ── */
  const hasEval = s.evaluacion && (s.evaluacion.preguntas||[]).length > 0;
  const tabsEl  = document.getElementById('ses-tabs');
  tabsEl.innerHTML = `
    <button class="tab-btn active" onclick="switchTab('contenido',this)" data-tab="contenido">
      <i class="ti ti-book-2"></i> Contenidos
    </button>
    <button class="tab-btn" onclick="switchTab('actividades',this)" data-tab="actividades" id="tab-btn-act">
      <i class="ti ti-puzzle"></i> Actividades
    </button>
    <button class="tab-btn" onclick="switchTab('recursos',this)" data-tab="recursos">
      <i class="ti ti-link"></i> Recursos
    </button>
    ${hasEval ? `<button class="tab-btn" onclick="switchTab('evaluacion',this)" data-tab="evaluacion" id="tab-btn-eval">
      <i class="ti ti-checklist"></i> Evaluación
    </button>` : ''}`;

  /* Asegurar pane evaluación */
  if (hasEval && !document.getElementById('tab-evaluacion')) {
    const pane = document.createElement('div');
    pane.id = 'tab-evaluacion';
    pane.style.display = 'none';
    document.getElementById('tab-recursos').parentNode
      .insertBefore(pane, document.getElementById('tab-recursos').nextSibling);
  }

  /* ── Render tabs ── */
  renderTabContenido(m, s);
  renderTabActividades(m, s);
  renderTabRecursos(m, s);
  if (hasEval) renderTabEvaluacion(m, s);

  /* ── Mostrar solo contenidos ── */
  ['contenido','actividades','recursos','evaluacion'].forEach(t => {
    const el = document.getElementById('tab-' + t);
    if (el) el.style.display = t === 'contenido' ? 'block' : 'none';
  });

  /* Apply lock states */
  updateTabLocks(m, s);

  /* Nav */
  document.getElementById('btn-prev').disabled = idx === 0;
  const btnNext = document.getElementById('btn-next');
  btnNext.style.background = m.color;
  btnNext.innerHTML = idx < m.sesiones.length - 1
    ? 'Siguiente <i class="ti ti-arrow-right"></i>'
    : 'Finalizar módulo <i class="ti ti-check"></i>';

  saveLastPos(curModIdx, idx);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateTabLocks(m, s) {
  /* Actividades se desbloquean cuando el usuario ha scrolleado o interactuado con contenidos */
  /* Evaluación se desbloquea cuando se han respondido las actividades */
  const actUnlocked  = isActUnlocked(curModIdx, curSesIdx);
  const evalUnlocked = isEvalUnlocked(curModIdx, curSesIdx);

  const btnAct  = document.getElementById('tab-btn-act');
  const btnEval = document.getElementById('tab-btn-eval');

  if (btnAct) {
    if (!actUnlocked) {
      btnAct.title = 'Completa los contenidos primero';
      btnAct.style.opacity = '.5';
      btnAct.onclick = function(e) { e.stopPropagation(); showLockToast('Completa la lectura de contenidos para acceder a las actividades.'); };
    } else {
      btnAct.style.opacity = '';
      btnAct.title = '';
      btnAct.onclick = function() { switchTab('actividades', btnAct); };
    }
  }
  if (btnEval) {
    if (!evalUnlocked) {
      btnEval.title = 'Completa las actividades primero';
      btnEval.style.opacity = '.5';
      btnEval.onclick = function(e) { e.stopPropagation(); showLockToast('Completa las actividades para acceder a la evaluación.'); };
    } else {
      btnEval.style.opacity = '';
      btnEval.title = '';
      btnEval.onclick = function() { switchTab('evaluacion', btnEval); };
    }
  }
}

function showLockToast(msg) {
  let t = document.getElementById('lock-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'lock-toast';
    t.style.cssText = `position:fixed;bottom:24px;left:50%;transform:translateX(-50%);
      background:#1A1917;color:#fff;padding:10px 20px;border-radius:10px;
      font-size:13px;font-weight:500;z-index:9999;box-shadow:var(--shadow-lg);
      display:flex;align-items:center;gap:8px;max-width:90vw;text-align:center`;
    document.body.appendChild(t);
  }
  t.innerHTML = `<i class="ti ti-lock"></i> ${msg}`;
  t.style.opacity = '1';
  clearTimeout(t._tid);
  t._tid = setTimeout(() => { t.style.opacity = '0'; }, 3000);
}

function isActUnlocked(mi, si) {
  const d = getActData();
  return !!d['unlocked_' + mi + '_' + si];
}
function isEvalUnlocked(mi, si) {
  const d = getActData();
  return !!d['eval_unlocked_' + mi + '_' + si];
}
function unlockActividades() {
  const d = getActData();
  d['unlocked_' + curModIdx + '_' + curSesIdx] = true;
  saveActData(d);
  const m = MODULOS[curModIdx];
  const s = m.sesiones[curSesIdx];
  updateTabLocks(m, s);
}
function unlockEvaluacion() {
  const d = getActData();
  d['eval_unlocked_' + curModIdx + '_' + curSesIdx] = true;
  saveActData(d);
  const m = MODULOS[curModIdx];
  const s = m.sesiones[curSesIdx];
  updateTabLocks(m, s);
}

function switchTab(tab, btn) {
  ['contenido','actividades','recursos','evaluacion'].forEach(t => {
    const el = document.getElementById('tab-' + t);
    if (el) el.style.display = t === tab ? 'block' : 'none';
  });
  document.querySelectorAll('#ses-tabs .tab-btn').forEach(b => {
    b.classList.remove('active');
    b.style.color = '';
  });
  if (btn) { btn.classList.add('active'); }
  const m = MODULOS[curModIdx];
  if (btn) btn.style.color = m.color;

  /* Unlock actividades when user clicks contenidos and returns */
  if (tab === 'actividades') unlockActividades();
}

function backToSesiones() {
  show('view-sesion', false);
  show('view-sesiones', true);
  openModulo(curModIdx);
}
function navSesion(dir) {
  const m    = MODULOS[curModIdx];
  const next = curSesIdx + dir;
  if (next < 0 || next >= m.sesiones.length) { backToSesiones(); return; }
  openSesion(next);
}

/* ══════════════════════════
   TAB: CONTENIDOS
══════════════════════════ */
function renderTabContenido(m, s) {
  let html = '';

  const objetivo = s.objetivo || (s.obj ? s.obj[0] : '');
  if (objetivo) {
    html += `<div class="section-label">Objetivo de la sesión</div>
    <div style="padding:.9rem 1.1rem;background:${m.bg};border-radius:var(--r);border-left:4px solid ${m.color};font-size:13.5px;color:var(--text);margin-bottom:1.5rem;line-height:1.7">${objetivo}</div>`;
  }

  const contenidos = s.contenido || s.contenidos;
  if (contenidos && contenidos.length) {
    html += `<div class="section-label">Contenidos</div>`;
    contenidos.forEach(c => {
      html += (typeof c === 'string')
        ? `<div class="content-block" style="border-color:${m.color}">${c}</div>`
        : renderContenidoBloque(m, c);
    });
  }

  /* Metacognición Likert */
  if (s.metacognicion && (s.metacognicion.preguntas||[]).length) {
    html += renderLikertCard(m, s);
  }

  /* Botón "He terminado de leer" que desbloquea actividades */
  html += `<div style="margin-top:2rem;text-align:center">
    <button onclick="unlockActividades();switchTab('actividades',document.getElementById('tab-btn-act'))"
      style="padding:11px 28px;background:${m.color};color:#fff;border:none;border-radius:var(--r);
             font-size:14px;font-weight:600;cursor:pointer;font-family:var(--font-body);
             display:inline-flex;align-items:center;gap:8px;box-shadow:0 3px 12px ${m.color}40">
      <i class="ti ti-arrow-right"></i> Continuar a Actividades
    </button>
  </div>`;

  document.getElementById('tab-contenido').innerHTML = html;
}

/* ── Render de bloques de contenido ── */
function renderContenidoBloque(m, c) {
  let html = '';
  if (c.tipo === 'lectura') {
    html = `<div style="margin-bottom:1.5rem">
      <div style="font-size:11px;font-weight:700;color:${m.color};margin-bottom:.5rem;
                  text-transform:uppercase;letter-spacing:.07em">${c.titulo||''}</div>
      <div style="font-size:14px;color:var(--text2);line-height:1.8;padding:1rem 1.15rem;
                  background:var(--surface);border-radius:var(--r);border:1px solid var(--border)">${c.texto||''}</div>
    </div>`;

  } else if (c.tipo === 'tabla') {
    const t = c.tabla;
    html = `<div style="margin-bottom:1.5rem">
      <div style="font-size:11px;font-weight:700;color:${m.color};margin-bottom:.5rem;
                  text-transform:uppercase;letter-spacing:.07em">${c.titulo||''}</div>
      <div style="overflow-x:auto;border-radius:var(--r);border:1px solid var(--border);box-shadow:var(--shadow-sm)">
        <table style="width:100%;border-collapse:collapse;background:var(--surface);font-size:13px">
          <thead><tr style="background:${m.bg}">
            ${(t.cabeceras||[]).map(h=>`<th style="padding:.65rem .9rem;text-align:left;color:${m.color};font-weight:700;white-space:nowrap;font-size:12px">${h}</th>`).join('')}
          </tr></thead>
          <tbody>
            ${(t.filas||[]).map((row,ri)=>`<tr style="border-top:1px solid var(--border);background:${ri%2===0?'var(--surface)':'var(--bg)'}">
              ${row.map((cell,ci)=>`<td style="padding:.6rem .9rem;vertical-align:top;${ci===0?'font-weight:600;color:var(--text)':'color:var(--text2)'};white-space:pre-line;font-size:12.5px;line-height:1.6">${cell}</td>`).join('')}
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>`;

  } else if (c.tipo === 'grafico') {
    html = `<div style="margin-bottom:1.5rem">
      <div style="font-size:11px;font-weight:700;color:${m.color};margin-bottom:.5rem;
                  text-transform:uppercase;letter-spacing:.07em">${c.titulo||''}</div>
      ${c.subtitulo?`<div style="font-size:12.5px;color:var(--muted);margin-bottom:.65rem">${c.subtitulo}</div>`:''}
      ${renderGrafico(m, c)}
    </div>`;

  } else {
    if (c.titulo) html += `<div style="font-size:11px;font-weight:700;color:${m.color};margin-bottom:.5rem;text-transform:uppercase;letter-spacing:.07em">${c.titulo}</div>`;
    if (c.texto)  html += `<div style="font-size:14px;color:var(--text2);line-height:1.8;padding:1rem 1.15rem;background:var(--surface);border-radius:var(--r);border:1px solid var(--border);margin-bottom:1.5rem">${c.texto}</div>`;
  }
  return html;
}

/* ── Gráficos ── */
function renderGrafico(m, c) {
  const datos = c.datos || [];
  const tipo  = c.tipo_grafico || 'barras';
  let html = '';

  if (tipo === 'concentrico_svg') {
    const colores = datos.map(d => d.color);
    html = `<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);padding:1rem;box-shadow:var(--shadow-sm)">
      <svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px;display:block;margin:0 auto">
        <circle cx="160" cy="160" r="148" fill="${colores[3]||'#5A2E8A'}18" stroke="${colores[3]||'#5A2E8A'}" stroke-width="1.5"/>
        <circle cx="160" cy="160" r="110" fill="${colores[2]||'#B35900'}20" stroke="${colores[2]||'#B35900'}" stroke-width="1.5"/>
        <circle cx="160" cy="160" r="74"  fill="${colores[1]||'#1A4FA0'}25" stroke="${colores[1]||'#1A4FA0'}" stroke-width="1.5"/>
        <circle cx="160" cy="160" r="40"  fill="${colores[0]||'#0C7A4A'}" stroke="${colores[0]||'#0C7A4A'}" stroke-width="2"/>
        <text x="160" y="154" text-anchor="middle" font-size="9" font-weight="700" fill="#fff" font-family="Inter,sans-serif">${datos[0]&&datos[0].eje||'A'}</text>
        <text x="160" y="166" text-anchor="middle" font-size="7" fill="rgba(255,255,255,.85)" font-family="Inter,sans-serif">Yo conmigo</text>
        <text x="160" y="96"  text-anchor="middle" font-size="8.5" font-weight="700" fill="${colores[1]||'#1A4FA0'}" font-family="Inter,sans-serif">${datos[1]&&datos[1].eje||'B'}</text>
        <text x="160" y="58"  text-anchor="middle" font-size="8.5" font-weight="700" fill="${colores[2]||'#B35900'}" font-family="Inter,sans-serif">${datos[2]&&datos[2].eje||'C'}</text>
        <text x="160" y="20"  text-anchor="middle" font-size="8.5" font-weight="700" fill="${colores[3]||'#5A2E8A'}" font-family="Inter,sans-serif">${datos[3]&&datos[3].eje||'D'}</text>
      </svg>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:.85rem">
        ${datos.map(d=>`<div style="display:flex;align-items:flex-start;gap:7px;padding:.5rem .65rem;background:${d.color}12;border-radius:8px;border-left:3px solid ${d.color}">
          <div style="width:18px;height:18px;border-radius:50%;background:${d.color};color:#fff;font-size:9px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0">${d.eje}</div>
          <div><div style="font-size:11.5px;font-weight:700;color:${d.color}">${d.label}</div>
          <div style="font-size:10.5px;color:var(--text2);line-height:1.5;margin-top:1px">${(d.desc||'').substring(0,70)}…</div></div>
        </div>`).join('')}
      </div>
    </div>`;

  } else if (tipo === 'linea_tiempo') {
    html = `<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);padding:1rem;box-shadow:var(--shadow-sm)">`;
    datos.forEach((d, i) => {
      const isNew = (d.label||'').startsWith('🆕');
      html += `<div style="display:flex;gap:14px;margin-bottom:0">
        <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
          <div style="width:44px;height:44px;border-radius:50%;background:${d.color};display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:10px;text-align:center;line-height:1.2;flex-shrink:0">${d.anio}</div>
          ${i < datos.length-1 ? `<div style="width:2px;flex:1;min-height:16px;background:${d.color}40;margin:3px 0"></div>` : ''}
        </div>
        <div style="padding:.6rem 0 ${i<datos.length-1?'1rem':'0'}">
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
            <span style="font-size:13px;font-weight:700;color:${d.color}">${d.label}</span>
            ${isNew?`<span style="font-size:10px;padding:1px 7px;background:${d.color};color:#fff;border-radius:99px;font-weight:700">NUEVO</span>`:''}
          </div>
          <div style="font-size:12.5px;color:var(--text2);line-height:1.6">${d.desc}</div>
        </div>
      </div>`;
    });
    html += `</div>`;

  } else if (tipo === 'brecha') {
    html = `<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);padding:1rem;box-shadow:var(--shadow-sm)">`;
    datos.forEach(d => {
      html += `<div style="margin-bottom:1rem;border-radius:var(--r);overflow:hidden;border:1px solid var(--border)">
        <div style="padding:.5rem .9rem;background:#1A1917;color:#fff;font-size:12.5px;font-weight:700">${d.label}</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0">
          <div style="padding:.65rem .85rem;background:#E1F5EE;border-right:1px solid var(--border)">
            <div style="font-size:10px;font-weight:700;color:#085041;text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px">✓ Lo que dice la ley</div>
            <div style="font-size:12px;color:#085041;line-height:1.55">${d.ley}</div>
          </div>
          <div style="padding:.65rem .85rem;background:#FEF3C7">
            <div style="font-size:10px;font-weight:700;color:#92400E;text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px">⚠ Lo que ocurre</div>
            <div style="font-size:12px;color:#92400E;line-height:1.55">${d.realidad}</div>
          </div>
        </div>
      </div>`;
    });
    html += `</div>`;

  } else if (tipo === 'figura_cse') {
    html = `<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);padding:1rem;box-shadow:var(--shadow-sm)">
      <svg viewBox="0 0 340 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
        <rect x="4" y="4" width="100" height="212" rx="10" fill="#534AB710" stroke="#534AB7" stroke-width="1.5"/>
        <text x="54" y="22" text-anchor="middle" font-size="7.5" font-weight="700" fill="#534AB7" font-family="Inter,sans-serif">Yo conmigo mismo</text>
        <rect x="12" y="30" width="84" height="36" rx="7" fill="#534AB7"/>
        <text x="54" y="51" text-anchor="middle" font-size="7" font-weight="700" fill="#fff" font-family="Inter,sans-serif">CSE-1</text>
        <text x="54" y="61" text-anchor="middle" font-size="6.5" fill="#ffffffcc" font-family="Inter,sans-serif">Conciencia emocional</text>
        <rect x="12" y="72" width="84" height="36" rx="7" fill="#534AB7cc"/>
        <text x="54" y="93" text-anchor="middle" font-size="7" font-weight="700" fill="#fff" font-family="Inter,sans-serif">CSE-2</text>
        <text x="54" y="103" text-anchor="middle" font-size="6.5" fill="#ffffffcc" font-family="Inter,sans-serif">Regulación emocional</text>
        <rect x="12" y="114" width="84" height="36" rx="7" fill="#534AB799"/>
        <text x="54" y="135" text-anchor="middle" font-size="7" font-weight="700" fill="#fff" font-family="Inter,sans-serif">CSE-3</text>
        <text x="54" y="145" text-anchor="middle" font-size="6" fill="#ffffffcc" font-family="Inter,sans-serif">Decisiones éticas</text>
        <rect x="120" y="4" width="100" height="212" rx="10" fill="#0C7A4A10" stroke="#0C7A4A" stroke-width="1.5"/>
        <text x="170" y="22" text-anchor="middle" font-size="7.5" font-weight="700" fill="#0C7A4A" font-family="Inter,sans-serif">Yo con los otros</text>
        <rect x="128" y="30" width="84" height="36" rx="7" fill="#0C7A4A"/>
        <text x="170" y="51" text-anchor="middle" font-size="7" font-weight="700" fill="#fff" font-family="Inter,sans-serif">CSE-4</text>
        <text x="170" y="61" text-anchor="middle" font-size="6.5" fill="#ffffffcc" font-family="Inter,sans-serif">Empatía y reconocimiento</text>
        <rect x="128" y="72" width="84" height="36" rx="7" fill="#0C7A4Acc"/>
        <text x="170" y="93" text-anchor="middle" font-size="7" font-weight="700" fill="#fff" font-family="Inter,sans-serif">CSE-5</text>
        <text x="170" y="103" text-anchor="middle" font-size="6" fill="#ffffffcc" font-family="Inter,sans-serif">Habilidades de relación</text>
        <rect x="236" y="4" width="100" height="212" rx="10" fill="#B3590010" stroke="#B35900" stroke-width="1.5"/>
        <text x="286" y="22" text-anchor="middle" font-size="7.5" font-weight="700" fill="#B35900" font-family="Inter,sans-serif">Yo con la sociedad</text>
        <rect x="244" y="30" width="84" height="36" rx="7" fill="#B35900"/>
        <text x="286" y="51" text-anchor="middle" font-size="7" font-weight="700" fill="#fff" font-family="Inter,sans-serif">CSE-6</text>
        <text x="286" y="61" text-anchor="middle" font-size="6.5" fill="#ffffffcc" font-family="Inter,sans-serif">Emociones políticas</text>
        <rect x="244" y="72" width="84" height="36" rx="7" fill="#B35900cc"/>
        <text x="286" y="93" text-anchor="middle" font-size="7" font-weight="700" fill="#fff" font-family="Inter,sans-serif">CSE-7</text>
        <text x="286" y="103" text-anchor="middle" font-size="6.5" fill="#ffffffcc" font-family="Inter,sans-serif">Resiliencia comunitaria</text>
        <text x="170" y="178" text-anchor="middle" font-size="8" fill="#888" font-family="Inter,sans-serif" font-style="italic">Las 7 CSE son interdependientes · MEN 2026</text>
      </svg>
    </div>`;

  } else {
    /* fallback: lista con barras */
    html = `<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);padding:1rem;box-shadow:var(--shadow-sm)">`;
    datos.forEach((d, i) => {
      const w = Math.round((i+1) / Math.max(datos.length,1) * 100);
      html += `<div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:.75rem">
        <div style="width:9px;height:9px;border-radius:50%;background:${d.color||m.color};margin-top:4px;flex-shrink:0"></div>
        <div style="flex:1">
          <div style="font-size:13px;font-weight:600;color:${d.color||m.color}">${d.label||d.eje||''}</div>
          <div style="font-size:12.5px;color:var(--text2);line-height:1.55">${d.desc||d.valor||''}</div>
          <div style="height:4px;background:var(--bg2);border-radius:99px;margin-top:.3rem">
            <div style="width:${w}%;height:100%;border-radius:99px;background:${d.color||m.color}"></div>
          </div>
        </div>
      </div>`;
    });
    html += `</div>`;
  }

  if (c.nota) {
    html = html.replace(/<\/div>$/, `
      <div style="margin-top:.75rem;padding:.6rem .85rem;background:var(--bg2);border-radius:8px;font-size:12px;color:var(--muted);border-left:3px solid ${m.color}">
        <i class="ti ti-info-circle"></i> ${c.nota}
      </div></div>`);
  }
  return html;
}

/* ══════════════════════════
   LIKERT METACOGNICIÓN
══════════════════════════ */
function renderLikertCard(m, s) {
  const key     = LIKERT_KEY + '_' + curModIdx + '_' + curSesIdx;
  const saved   = JSON.parse(localStorage.getItem(key) || 'null');
  const pregs   = s.metacognicion.preguntas;
  const scale   = [
    {n:1, lbl:'Iniciando'}, {n:2, lbl:'Avanzando'},
    {n:3, lbl:'Aplicando'}, {n:4, lbl:'Liderando'}
  ];

  if (saved && saved.completed) {
    return `<div class="likert-card" style="margin-top:2rem">
      <div class="likert-header">
        <i class="ti ti-brain"></i>
        <div class="likert-header-text">
          <h3>Metacognición completada</h3>
          <p>Tu reflexión fue guardada</p>
        </div>
      </div>
      <div class="likert-saved">
        <i class="ti ti-circle-check-filled"></i>
        ¡Reflexión metacognitiva guardada! Puedes continuar a las actividades.
      </div>
    </div>`;
  }

  return `<div class="likert-card" style="margin-top:2rem" id="likert-card-main">
    <div class="likert-header">
      <i class="ti ti-brain"></i>
      <div class="likert-header-text">
        <h3>Metacognición y Autoevaluación</h3>
        <p>Valora tu nivel de apropiación — escala 1 (iniciando) a 4 (liderando)</p>
      </div>
    </div>
    <div class="likert-body">
      ${pregs.map((q, qi) => `
        <div class="likert-item">
          <div class="likert-q">${qi+1}. ${q}</div>
          <div class="likert-scale">
            ${scale.map(sc => `<button class="likert-btn ${saved&&saved[qi]===sc.n?'sel':''}"
              onclick="selectLikert(${qi}, ${sc.n}, this)"
              style="${saved&&saved[qi]===sc.n?'background:'+m.color+';border-color:'+m.color+';color:#fff':''}">
              <span class="num">${sc.n}</span>
              <span class="lbl">${sc.lbl}</span>
            </button>`).join('')}
          </div>
        </div>`).join('')}
      <button class="likert-save-btn" style="background:${m.color}" onclick="saveLikert(${pregs.length})">
        <i class="ti ti-device-floppy"></i> Guardar mi reflexión
      </button>
    </div>
  </div>`;
}

window._likertAnswers = {};
window.selectLikert = function(qi, val, btn) {
  window._likertAnswers[qi] = val;
  const row = btn.closest('.likert-scale');
  const m   = MODULOS[curModIdx];
  row.querySelectorAll('.likert-btn').forEach(b => {
    b.classList.remove('sel');
    b.style.background = b.style.borderColor = b.style.color = '';
  });
  btn.classList.add('sel');
  btn.style.background = m.color;
  btn.style.borderColor = m.color;
  btn.style.color = '#fff';
};

window.saveLikert = function(total) {
  const ans   = window._likertAnswers;
  const count = Object.keys(ans).length;
  if (count < total) {
    showLockToast('Responde todas las preguntas antes de guardar.');
    return;
  }
  const key  = LIKERT_KEY + '_' + curModIdx + '_' + curSesIdx;
  const m    = MODULOS[curModIdx];
  const s    = m.sesiones[curSesIdx];
  const data = { ...ans, completed: true,
    modTitle: m.num + ' — ' + (m.titulo||m.title),
    sesTitle: s.titulo||s.title,
    modColor: m.color,
    date: new Date().toLocaleDateString('es-CO', { day:'numeric', month:'long', year:'numeric' })
  };
  localStorage.setItem(key, JSON.stringify(data));

  /* Guardar en diario data */
  saveDiarioEntry(data);

  const card = document.getElementById('likert-card-main');
  if (card) {
    card.innerHTML = `<div class="likert-saved">
      <i class="ti ti-circle-check-filled"></i>
      ¡Metacognición guardada! Ya puedes acceder a las Actividades.
    </div>`;
  }
  window._likertAnswers = {};
  unlockActividades();
};

/* ══════════════════════════
   TAB: ACTIVIDADES (in situ / escape-room)
══════════════════════════ */
function renderTabActividades(m, s) {
  const acts = s.actividades || [];
  const pane = document.getElementById('tab-actividades');
  if (!acts.length) {
    pane.innerHTML = `<div style="color:var(--muted);font-size:13.5px;padding:2rem;text-align:center">
      <i class="ti ti-puzzle" style="font-size:32px;display:block;margin-bottom:.75rem;opacity:.4"></i>
      No hay actividades registradas para esta sesión.
    </div>`;
    return;
  }

  /* Check if all activities done */
  const actData = getActData();
  const totalActs = acts.length;
  let doneCnt = 0;
  acts.forEach((_, ai) => {
    if (actData[`act_${curModIdx}_${curSesIdx}_${ai}_done`]) doneCnt++;
  });

  let html = `<div class="section-label">Actividades de aprendizaje</div>`;

  acts.forEach((a, ai) => {
    const isDoneAct = !!actData[`act_${curModIdx}_${curSesIdx}_${ai}_done`];
    const attemptsKey = `act_${curModIdx}_${curSesIdx}_${ai}_att`;
    const attempts = parseInt(actData[attemptsKey]||'0');
    const maxAtt   = 2;
    const exhausted = attempts >= maxAtt;

    html += renderActivityCard(m, a, ai, isDoneAct, attempts, maxAtt, exhausted);
  });

  /* Unlock eval when all activities done */
  if (doneCnt >= totalActs && totalActs > 0) {
    unlockEvaluacion();
    html += `<div style="margin-top:1.5rem;padding:1.1rem 1.25rem;background:#D1FAE5;border-radius:var(--r-lg);
                          border:1px solid #6EE7B7;text-align:center">
      <i class="ti ti-circle-check-filled" style="font-size:28px;color:#059669;display:block;margin-bottom:.5rem"></i>
      <div style="font-size:14px;font-weight:600;color:#065F46">¡Actividades completadas!</div>
      <div style="font-size:13px;color:#059669;margin-top:4px">Ya puedes acceder a la Evaluación.</div>
    </div>`;
  }

  pane.innerHTML = html;
  attachActivityHandlers(m, s, acts);
}

function renderActivityCard(m, a, ai, isDone, attempts, maxAtt, exhausted) {
  const attColor = attempts === 0 ? 'var(--muted)' : attempts === 1 ? 'var(--amber)' : '#DC2626';
  const savedAnswer = (getActData())[`act_${curModIdx}_${curSesIdx}_${ai}_ans`];

  /* For structured activities (with options) — escape-room style */
  if (a.opciones && a.opciones.length) {
    const letters = ['A','B','C','D'];
    return `<div class="activity-card" id="act-card-${ai}">
      <div class="activity-header" style="background:${m.bg}20">
        <div class="activity-icon" style="background:${m.bg};color:${m.color}">${a.icono||'🎯'}</div>
        <div style="flex:1">
          <div class="activity-title">${a.titulo||''}</div>
          <div class="activity-sub">${a.tipo||''} ${a.tiempo?'· '+a.tiempo:''}</div>
        </div>
        ${isDone?`<span style="font-size:12px;font-weight:600;color:#059669;display:flex;align-items:center;gap:4px">
          <i class="ti ti-circle-check-filled"></i> Completada</span>`:''}
      </div>
      <div class="activity-body">
        ${a.video?`<div style="margin-bottom:1.25rem;border-radius:var(--r);overflow:hidden;background:#000;aspect-ratio:16/9">
          <iframe width="100%" height="100%" style="border:0;display:block"
            src="https://www.youtube.com/embed/${a.video}?rel=0"
            allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
            allowfullscreen></iframe>
        </div>`:'' }
        <div style="font-size:14px;line-height:1.7;color:var(--text2);margin-bottom:1rem">${a.instruccion||''}</div>
        ${!isDone && !exhausted ? `
          <div class="activity-attempts">
            <i class="ti ti-refresh"></i> Intentos restantes: ${maxAtt - attempts}/${maxAtt}
          </div>
          <div class="escape-options">
            ${a.opciones.map((op, oi) => {
              const letter = letters[oi]||oi;
              return `<button class="escape-opt" data-act="${ai}" data-opt="${oi}"
                onclick="handleActivityAnswer(${ai},${oi},${a.correcta})">
                <span class="escape-opt-letter">${letter}.</span>
                <span>${op}</span>
              </button>`;
            }).join('')}
          </div>` : '' }
        ${isDone ? `<div class="activity-feedback show ok">
          <strong>✓ ¡Completada!</strong> ${a.feedback_ok||'Excelente trabajo.'}
        </div>` : ''}
        ${exhausted && !isDone ? `<div class="activity-feedback show done">
          <strong>Intentos agotados.</strong> ${a.feedback_final||a.explicacion||'Revisemos el contenido y volvamos a intentarlo en la próxima sesión.'}
        </div>` : ''}
        <div class="activity-feedback" id="act-fb-${ai}"></div>
      </div>
    </div>`;
  }

  /* Plain activity (no opciones) — mark as read */
  return `<div class="activity-card" id="act-card-${ai}">
    <div class="activity-header" style="background:${m.bg}20">
      <div class="activity-icon" style="background:${m.bg};color:${m.color}">${a.icono||'🎯'}</div>
      <div style="flex:1">
        <div class="activity-title">${a.titulo||''}</div>
        <div class="activity-sub">${a.tipo||''} ${a.tiempo?'· '+a.tiempo:''}</div>
      </div>
    </div>
    <div class="activity-body">
      ${a.video?`<div style="margin-bottom:1.25rem;border-radius:var(--r);overflow:hidden;background:#000;aspect-ratio:16/9">
        <iframe width="100%" height="100%" style="border:0;display:block"
          src="https://www.youtube.com/embed/${a.video}?rel=0" allowfullscreen></iframe>
      </div>`:''}
      <div style="font-size:14px;line-height:1.7;color:var(--text2);margin-bottom:1rem">${a.instruccion||''}</div>
      ${!isDone ? `<button onclick="markActivityDone(${ai})"
        style="padding:9px 20px;background:${m.color};color:#fff;border:none;border-radius:var(--r);
               font-size:13.5px;font-weight:600;cursor:pointer;font-family:var(--font-body);
               display:inline-flex;align-items:center;gap:7px">
        <i class="ti ti-check"></i> Marcar como realizada
      </button>` :
      `<div class="activity-done-badge"><i class="ti ti-circle-check-filled"></i> Realizada</div>`}
    </div>
  </div>`;
}

function attachActivityHandlers() { /* handlers via onclick */ }

window.handleActivityAnswer = function(ai, opcionIdx, correcta) {
  const d   = getActData();
  const att = parseInt(d[`act_${curModIdx}_${curSesIdx}_${ai}_att`]||'0') + 1;
  d[`act_${curModIdx}_${curSesIdx}_${ai}_att`] = att;

  const m    = MODULOS[curModIdx];
  const s    = m.sesiones[curSesIdx];
  const a    = s.actividades[ai];
  const isOk = opcionIdx === correcta;

  if (isOk) {
    d[`act_${curModIdx}_${curSesIdx}_${ai}_done`] = true;
  }
  saveActData(d);

  /* Re-render only this card */
  const card = document.getElementById('act-card-' + ai);
  if (card) {
    const isDone    = !!d[`act_${curModIdx}_${curSesIdx}_${ai}_done`];
    const attempts  = att;
    const exhausted = attempts >= 2;
    card.outerHTML  = renderActivityCard(m, a, ai, isDone, attempts, 2, exhausted);
  }

  /* Check if all done */
  const acts    = s.actividades||[];
  const allDone = acts.every((_, i) => !!d[`act_${curModIdx}_${curSesIdx}_${i}_done`] || parseInt(d[`act_${curModIdx}_${curSesIdx}_${i}_att`]||'0') >= 2);
  if (allDone) {
    unlockEvaluacion();
    renderTabActividades(m, s);
  }
};

window.markActivityDone = function(ai) {
  const d = getActData();
  d[`act_${curModIdx}_${curSesIdx}_${ai}_done`] = true;
  saveActData(d);
  const m = MODULOS[curModIdx];
  const s = m.sesiones[curSesIdx];
  renderTabActividades(m, s);
};

function getActData()     { try { return JSON.parse(localStorage.getItem(ACT_KEY)||'{}'); } catch(e){ return {}; } }
function saveActData(d)   { try { localStorage.setItem(ACT_KEY, JSON.stringify(d)); } catch(e){} }

/* ══════════════════════════
   TAB: RECURSOS
══════════════════════════ */
function renderTabRecursos(m, s) {
  const res = s.recursos||[];
  const iconMap  = { doc:'ti-file-text', pdf:'ti-file-type-pdf', web:'ti-world', video:'ti-brand-youtube', libro:'ti-book', herramienta:'ti-tool', investigacion:'ti-flask', podcast:'ti-microphone' };
  const colorMap = { doc:'#1A4FA0', pdf:'#DC2626', web:'#0C7A4A', video:'#DC2626', libro:'#5A2E8A', herramienta:'#B35900', investigacion:'#2E6B22', podcast:'#9B2750' };

  let html = `<div class="section-label">Recursos y referencias</div>`;
  if (!res.length) {
    html += `<div style="color:var(--muted);font-size:13.5px;padding:1rem 0">Sin recursos registrados.</div>`;
  } else {
    html += `<div class="res-list">` + res.map(r => {
      if (typeof r === 'string') return `<div class="res-item"><i class="ti ti-link" style="color:${m.color};font-size:16px;flex-shrink:0"></i><span>${r}</span></div>`;
      const ico    = iconMap[r.tipo]||'ti-link';
      const col    = colorMap[r.tipo]||m.color;
      const hasUrl = r.url && r.url !== '#';
      const inner  = `<i class="ti ${ico}" style="color:${col};font-size:18px;flex-shrink:0"></i>
        <div style="flex:1;min-width:0">
          <div style="font-size:13.5px;font-weight:600;color:var(--text)">${r.titulo||''}</div>
          ${r.meta?`<div style="font-size:11.5px;color:var(--muted)">${r.meta}</div>`:''}
        </div>
        ${hasUrl?'<i class="ti ti-external-link" style="color:var(--muted);font-size:14px;flex-shrink:0"></i>':''}`;
      return hasUrl
        ? `<a class="res-item" href="${r.url}" target="_blank" rel="noopener" style="text-decoration:none">${inner}</a>`
        : `<div class="res-item">${inner}</div>`;
    }).join('') + `</div>`;
  }
  document.getElementById('tab-recursos').innerHTML = html;
}

/* ══════════════════════════
   TAB: EVALUACIÓN (10+ preguntas, 2 intentos)
══════════════════════════ */
function renderTabEvaluacion(m, s) {
  const pane = document.getElementById('tab-evaluacion');
  if (!pane || !s.evaluacion) return;
  const ev    = s.evaluacion;
  const pregs = ev.preguntas||[];

  if (!pregs.length) {
    pane.innerHTML = `<div class="quiz-locked-msg"><i class="ti ti-checklist"></i>Sin preguntas de evaluación.</div>`;
    return;
  }

  pane.innerHTML = `
    <div class="section-label">${ev.titulo||'Evaluación de comprensión'}</div>
    <div class="quiz-wrap" id="quiz-wrap-main"></div>`;

  initQuiz(m, pregs);
}

/* ── Quiz engine: 2 intentos totales ── */
let _qState = {};

function initQuiz(m, pregs) {
  const wrap      = document.getElementById('quiz-wrap-main');
  if (!wrap) return;

  const key       = QUIZ_KEY + '_' + curModIdx + '_' + curSesIdx;
  const saved     = JSON.parse(localStorage.getItem(key)||'null');
  const attempts  = saved ? (saved.attempts||0) : 0;

  if (attempts >= 2) {
    renderQuizFinalResult(m, pregs, saved);
    return;
  }

  _qState = { m, pregs, idx: 0, answers: {}, attempts };
  renderQuizQuestion(0);
}

function renderQuizQuestion(idx) {
  const wrap = document.getElementById('quiz-wrap-main');
  if (!wrap) return;
  const { m, pregs, attempts } = _qState;
  const p       = pregs[idx];
  const letters = ['A','B','C','D','E'];
  const pct     = Math.round(idx / pregs.length * 100);

  wrap.innerHTML = `
    <div class="quiz-header">
      <div class="quiz-progress-row">
        <span>${idx+1} / ${pregs.length}</span>
        <div class="quiz-track"><div class="quiz-fill" style="width:${pct}%;background:${m.color}"></div></div>
      </div>
      <div class="quiz-attempts">
        <i class="ti ti-refresh"></i> Intento ${attempts+1} de 2
      </div>
    </div>
    <div class="quiz-body">
      <div class="quiz-q">${p.pregunta}</div>
      <div class="quiz-options">
        ${p.opciones.map((op, oi) => `<button class="quiz-opt" data-oi="${oi}"
          onclick="handleQuizAnswer(${idx}, ${oi})">
          <span class="opt-letter">${letters[oi]||oi}.</span>
          <span>${op}</span>
        </button>`).join('')}
      </div>
      <div class="quiz-feedback" id="qfb-${idx}"></div>
      <button class="quiz-next-btn" id="qnext-${idx}"
        style="background:${m.color}"
        onclick="goNextQuestion(${idx})">
        ${idx < pregs.length-1 ? 'Siguiente pregunta <i class="ti ti-arrow-right"></i>' : 'Ver resultados <i class="ti ti-award"></i>'}
      </button>
    </div>`;
}

window.handleQuizAnswer = function(idx, opcionIdx) {
  const { m, pregs } = _qState;
  const p       = pregs[idx];
  const isOk    = opcionIdx === p.correcta;
  _qState.answers[idx] = opcionIdx;

  /* Disable all options */
  document.querySelectorAll(`.quiz-opt`).forEach(b => {
    const oi = parseInt(b.dataset.oi);
    b.disabled = true;
    b.style.pointerEvents = 'none';
    if (oi === p.correcta) b.classList.add('correct');
    else if (oi === opcionIdx && !isOk) b.classList.add('wrong');
    else b.classList.add('neutral-disabled');
  });

  const fb = document.getElementById('qfb-' + idx);
  if (fb) {
    fb.classList.add('show');
    fb.classList.add(isOk ? 'ok' : 'hint');
    fb.innerHTML = `<strong>${isOk ? '✓ ¡Correcto!' : '⚑ No exactamente.'}</strong> ${p.explicacion||''}`;
  }
  const nb = document.getElementById('qnext-' + idx);
  if (nb) nb.classList.add('show');
};

window.goNextQuestion = function(idx) {
  const { pregs } = _qState;
  if (idx < pregs.length - 1) {
    _qState.idx = idx + 1;
    renderQuizQuestion(idx + 1);
  } else {
    finishQuiz();
  }
};

function finishQuiz() {
  const { m, pregs, answers, attempts } = _qState;
  const correct = pregs.filter((p, i) => answers[i] === p.correcta).length;
  const pct     = Math.round(correct / pregs.length * 100);
  const newAtt  = attempts + 1;

  const key     = QUIZ_KEY + '_' + curModIdx + '_' + curSesIdx;
  const prev    = JSON.parse(localStorage.getItem(key)||'{}');
  const record  = { attempts: newAtt, scores: [...(prev.scores||[]), pct], answers, correct, total: pregs.length };
  localStorage.setItem(key, JSON.stringify(record));

  renderQuizFinalResult(m, pregs, record);

  /* Mark session done if passed */
  if (pct >= 70) {
    const p   = getProgress();
    p[sesKey(curModIdx, curSesIdx)] = true;
    saveProgress(p);
    updateProgressUI();
    renderModulos();
  }
}

function renderQuizFinalResult(m, pregs, record) {
  const wrap    = document.getElementById('quiz-wrap-main');
  if (!wrap) return;
  const attempts = record ? record.attempts : 0;
  const scores   = record ? (record.scores||[]) : [];
  const bestScore = scores.length ? Math.max(...scores) : 0;
  const lastScore = scores.length ? scores[scores.length-1] : 0;
  const passed    = bestScore >= 70;

  const nivel    = bestScore >= 90 ? 'Liderando' : bestScore >= 75 ? 'Aplicando' : bestScore >= 60 ? 'Comprendiendo' : 'Explorando';
  const nColor   = { Liderando:'#5A2E8A', Aplicando:'#0C7A4A', Comprendiendo:'#1A4FA0', Explorando:'#B35900' }[nivel];
  const ringCol  = passed ? nColor : '#DC2626';

  wrap.innerHTML = `
    <div class="quiz-result">
      <div class="quiz-result-ring" style="border-color:${ringCol};color:${ringCol}">${bestScore}%</div>
      <div style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:.3rem;letter-spacing:-.02em">
        ${record.correct||0}/${record.total||pregs.length} respuestas correctas
      </div>
      <span class="quiz-result-label" style="background:${nColor}18;color:${nColor}">${nivel}</span>
      ${scores.length > 1 ? `<div style="font-size:12.5px;color:var(--muted);margin-bottom:1.25rem">
        Intentos: ${scores.map((s,i)=>`<b>#${i+1}: ${s}%</b>`).join(' · ')}
      </div>` : ''}
      ${attempts < 2 && !passed ? `
        <button class="quiz-retry-btn" onclick="retryQuiz()">
          <i class="ti ti-refresh"></i> Intentar de nuevo (${2-attempts} restante${2-attempts>1?'s':''})
        </button>` : ''}
      ${attempts >= 2 ? `<div style="margin-top:1rem;font-size:13px;color:var(--muted);max-width:400px;margin-inline:auto;line-height:1.6">
        Has utilizado tus 2 intentos. Revisa los contenidos del módulo y los recursos para reforzar tu aprendizaje.
      </div>` : ''}
      ${passed ? `<div style="margin-top:1rem;padding:1rem 1.25rem;background:#D1FAE5;border-radius:var(--r-lg);max-width:400px;margin-inline:auto">
        <i class="ti ti-award" style="color:#059669;font-size:22px;display:block;margin-bottom:.4rem"></i>
        <div style="font-size:14px;font-weight:600;color:#065F46">¡Sesión completada exitosamente!</div>
        <div style="font-size:13px;color:#059669;margin-top:3px">Tu progreso ha sido registrado.</div>
      </div>` : ''}
    </div>`;
}

window.retryQuiz = function() {
  const key  = QUIZ_KEY + '_' + curModIdx + '_' + curSesIdx;
  const prev = JSON.parse(localStorage.getItem(key)||'{}');
  _qState.attempts = prev.attempts||0;
  _qState.answers  = {};
  _qState.idx      = 0;
  renderQuizQuestion(0);
};

/* ══════════════════════════
   CSE PROFUNDIZACIÓN
══════════════════════════ */
function renderCSE() {
  const listContainer = document.getElementById('cse-list');
  if (!listContainer) return;
  if (!CSE || !CSE.length) {
    listContainer.innerHTML = '<div style="color:var(--muted);font-size:13px;padding:1rem">Cargando competencias CSE...</div>';
    return;
  }
  listContainer.innerHTML = CSE.map((c, i) => `
    <button class="mod-card" onclick="openCSE(${i})">
      <div class="mod-icon" style="background:${c.bg}">
        <i class="ti ${c.icon||'ti-heart'}" style="font-size:22px;color:${c.color}"></i>
      </div>
      <div style="flex:1;min-width:0">
        <div style="display:flex;gap:8px;align-items:center;margin-bottom:4px">
          <span class="ses-badge" style="background:${c.bg};color:${c.tc||c.color}">${c.num}</span>
          ${c.eje?`<span style="font-size:11.5px;color:var(--muted)">Eje: ${c.eje}</span>`:''}
        </div>
        <div class="mod-title">${c.title||c.titulo}</div>
        <div class="mod-sub" style="margin-top:2px">${(c.def||'').substring(0,90)}…</div>
      </div>
      <i class="ti ti-chevron-right chevron"></i>
    </button>`).join('');
}

function openCSE(idx) {
  curCSEIdx = idx;
  const c   = CSE[idx];
  document.getElementById('cse-list').parentElement.style.display = 'none';
  show('view-cse-detail', true);
  document.getElementById('cse-header').innerHTML = `
    <div style="display:flex;align-items:flex-start;gap:14px;margin-bottom:.85rem">
      <div class="mod-icon" style="background:${c.bg}">
        <i class="ti ${c.icon||'ti-heart'}" style="font-size:24px;color:${c.color}"></i>
      </div>
      <div>
        <div style="display:flex;gap:8px;align-items:center;margin-bottom:4px">
          <span class="ses-badge" style="background:${c.bg};color:${c.tc||c.color}">${c.num}</span>
          ${c.eje?`<span style="font-size:11.5px;color:var(--muted)">Eje: ${c.eje}</span>`:''}
        </div>
        <div style="font-size:20px;font-weight:700;color:var(--text);letter-spacing:-.02em">${c.title||c.titulo}</div>
      </div>
    </div>
    <p style="font-size:13.5px;color:var(--text2);line-height:1.7;padding:.85rem 1.1rem;
              background:var(--bg);border-radius:var(--r);border-left:3px solid ${c.color};margin-bottom:1.5rem">${c.def||''}</p>`;
  renderCSETab('secuencia');
  document.querySelectorAll('#cse-tabs .tab-btn').forEach((b,i) => { b.classList.remove('active'); if(i===0) b.classList.add('active'); });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToCSE() {
  document.getElementById('cse-list').parentElement.style.display = 'block';
  show('view-cse-detail', false);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchCSETab(tab, btn) {
  ['secuencia','actividades','rubrica','guia'].forEach(t => show('cse-'+t, t===tab));
  document.querySelectorAll('#cse-tabs .tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCSETab(tab);
}

function renderCSETab(tab) {
  const c = CSE[curCSEIdx];
  if (!c) return;
  if (tab === 'secuencia') {
    document.getElementById('cse-secuencia').innerHTML = (c.secuencia||[]).map((f, i) => `
      <div class="seq-phase">
        <div class="seq-head" style="background:${c.bg}">
          <div style="display:flex;align-items:center;gap:10px">
            <div style="width:26px;height:26px;border-radius:50%;background:${c.color};color:#fff;
                        display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">${i+1}</div>
            <span style="font-size:13.5px;font-weight:600;color:${c.tc||c.color}">${f.fase}</span>
          </div>
          <span style="font-size:12px;color:${c.tc||c.color};font-weight:500"><i class="ti ti-clock"></i> ${f.tiempo}</span>
        </div>
        <div class="seq-body">
          <div class="seq-desc">${f.desc}</div>
          ${f.rol?`<div class="seq-rol"><i class="ti ti-user-circle"></i> Rol del facilitador: ${f.rol}</div>`:''}
        </div>
      </div>`).join('');
  }
  if (tab === 'actividades') {
    document.getElementById('cse-actividades').innerHTML = (c.actividades||[]).map(n => `
      <div class="nivel-card">
        <div class="nivel-head" style="background:${n.bg};color:${n.tc}">${n.nivel}</div>
        <ul class="nivel-body">
          ${(n.items||[]).map(it=>`<li>${it}</li>`).join('')}
        </ul>
      </div>`).join('');
  }
  if (tab === 'rubrica') {
    document.getElementById('cse-rubrica').innerHTML = `
      <div class="rubrica-wrap">
        <table>
          <thead><tr style="background:${c.bg}">
            <th style="color:${c.tc||c.color}">Criterio</th>
            <th style="color:${c.tc||c.color}">1. Explorando</th>
            <th style="color:${c.tc||c.color}">2. Comprendiendo</th>
            <th style="color:${c.tc||c.color}">3. Aplicando</th>
            <th style="color:${c.tc||c.color}">4. Liderando</th>
          </tr></thead>
          <tbody>${(c.rubrica||[]).map(r=>`<tr>
            <td style="font-weight:600;font-size:13px">${r.criterio}</td>
            ${(r.d||[]).map(d=>`<td style="font-size:12.5px;color:var(--text2)">${d}</td>`).join('')}
          </tr>`).join('')}</tbody>
        </table>
      </div>`;
  }
  if (tab === 'guia' && c.guia) {
    document.getElementById('cse-guia').innerHTML = `
      <div class="guia-box" style="background:var(--bg);border-color:${c.color}">
        <div class="guia-title" style="color:${c.color}"><i class="ti ti-target"></i> Propósito formativo</div>
        <div class="guia-text">${c.guia.prop||''}</div>
      </div>
      <div style="border:1px solid var(--border);border-radius:var(--r);overflow:hidden;margin-bottom:1rem">
        <div style="padding:.65rem 1rem;background:#FEF2F2;border-bottom:1px solid var(--border)">
          <span style="font-size:13px;font-weight:600;color:#991B1B"><i class="ti ti-alert-triangle-filled"></i> Alertas pedagógicas</span>
        </div>
        <div style="padding:.75rem 1rem">
          ${(c.guia.adv||[]).map(a=>`<div class="warn-item"><i class="ti ti-alert-circle" style="color:#D97706"></i> ${a}</div>`).join('')}
        </div>
      </div>
      ${c.guia.mat&&c.guia.mat.length?`<div class="guia-box" style="background:${c.bg};border-color:${c.color};color:${c.tc||c.color}">
        <div class="guia-title"><i class="ti ti-package"></i> Materiales</div>
        <ul style="padding-left:1.25rem;margin-top:.35rem">${c.guia.mat.map(x=>`<li style="font-size:13.5px;margin-bottom:.3rem">${x}</li>`).join('')}</ul>
      </div>`:''}
      <div class="guia-box" style="background:${c.bg};border-color:${c.color};color:${c.tc||c.color}">
        <div class="guia-title"><i class="ti ti-flag-filled"></i> Cierre</div>
        <div class="guia-text">${c.guia.cierre||''}</div>
      </div>`;
  }
}

/* ══════════════════════════
   PROGRESO & LOCALSTORAGE
══════════════════════════ */
function getProgress()    { try { return JSON.parse(localStorage.getItem(PROG_KEY)||'{}'); } catch(e){ return {}; } }
function saveProgress(p)  { try { localStorage.setItem(PROG_KEY, JSON.stringify(p)); } catch(e){} }
function saveLastPos(mi,si){ try { localStorage.setItem(LAST_KEY, JSON.stringify({modIdx:mi,sesIdx:si})); } catch(e){} }
function sesKey(mi, si)   { return mi+'_'+si; }
function isDone(mi, si)   { return !!getProgress()[sesKey(mi,si)]; }
function countDone()      { return Object.values(getProgress()).filter(Boolean).length; }
function countModDone(mi) { return (MODULOS[mi].sesiones||[]).filter((_,i)=>isDone(mi,i)).length; }

function updateProgressUI() {
  const done  = countDone();
  const total = totalSessions();
  const pct   = total ? Math.round(done/total*100) : 0;

  const heroEl = document.getElementById('progress-hero');
  if (heroEl) {
    heroEl.style.display = done > 0 ? 'block' : 'none';
    const ep = document.getElementById('hero-pct');
    const eb = document.getElementById('hero-bar');
    const es = document.getElementById('hero-sub-txt');
    if (ep) ep.textContent = pct+'%';
    if (eb) eb.style.width = pct+'%';
    if (es) es.textContent = done+' de '+total+' sesiones completadas';
    const rb = document.getElementById('resume-btn');
    if (rb) rb.style.display = done < total ? 'flex' : 'none';
  }
  const tp = document.getElementById('topbar-prog');
  if (tp) {
    tp.style.display = done > 0 ? 'flex' : 'none';
    const t1 = document.getElementById('topbar-prog-txt');
    const t2 = document.getElementById('topbar-prog-fill');
    if (t1) t1.textContent = pct+'%';
    if (t2) t2.style.width = pct+'%';
  }
}

function resumeCourse() {
  try {
    const last = JSON.parse(localStorage.getItem(LAST_KEY));
    if (!last) return;
    showPage('curso');
    curModIdx = last.modIdx;
    openModulo(last.modIdx);
    setTimeout(() => openSesion(last.sesIdx), 150);
  } catch(e){}
}

/* ══════════════════════════
   DIARIO
══════════════════════════ */
function saveDiarioEntry(data) {
  try {
    const key  = DIARIO_KEY;
    const all  = JSON.parse(localStorage.getItem(key)||'[]');
    const entry = {
      modIdx : curModIdx, sesIdx: curSesIdx,
      modTitle: data.modTitle, sesTitle: data.sesTitle,
      modColor: data.modColor, date: data.date,
      likert  : { ...data },
      type    : 'likert'
    };
    /* Remove old entry for same session */
    const filtered = all.filter(e => !(e.modIdx===curModIdx && e.sesIdx===curSesIdx && e.type==='likert'));
    filtered.push(entry);
    localStorage.setItem(key, JSON.stringify(filtered));
  } catch(e){}
}

function renderDiario() {
  const container = document.getElementById('diario-entries');
  const emptyEl   = document.getElementById('diario-empty');
  const clearBtn  = document.getElementById('diario-clear-btn');
  if (!container) return;

  const entries = JSON.parse(localStorage.getItem(DIARIO_KEY)||'[]');

  if (!entries.length) {
    container.innerHTML = '';
    if (emptyEl)  emptyEl.style.display  = 'block';
    if (clearBtn) clearBtn.style.display = 'none';
    return;
  }
  if (emptyEl)  emptyEl.style.display  = 'none';
  if (clearBtn) clearBtn.style.display = 'inline-flex';

  const scale = ['Iniciando','Avanzando','Aplicando','Liderando'];

  container.innerHTML = entries.slice().reverse().map(e => {
    const likert = e.likert||{};
    const vals   = Object.entries(likert)
      .filter(([k]) => !isNaN(parseInt(k)))
      .map(([k,v]) => parseInt(v));
    const avg    = vals.length ? (vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(1) : null;

    return `<div class="diario-entry" style="border-left-color:${e.modColor||'var(--verde)'}">
      <div class="diario-entry-date"><i class="ti ti-calendar"></i> ${e.date||'—'}</div>
      <div class="diario-entry-mod" style="color:${e.modColor||'var(--verde)'}">${e.modTitle||''} › ${e.sesTitle||''}</div>
      ${avg ? `<div style="margin-top:.5rem;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <span style="font-size:12px;font-weight:700;padding:3px 10px;background:${e.modColor||'var(--verde)'}20;color:${e.modColor||'var(--verde)'};border-radius:99px">
          Promedio: ${avg}/4 — ${scale[Math.round(parseFloat(avg))-1]||''}
        </span>
        ${vals.map((v,i)=>`<span style="font-size:11px;padding:2px 7px;background:var(--bg2);border-radius:99px;color:var(--text2)">${i+1}: ${v}/4</span>`).join('')}
      </div>` : ''}
    </div>`;
  }).join('');
}

function clearDiario() {
  if (!confirm('¿Borrar todo el diario? Esta acción no se puede deshacer.')) return;
  localStorage.removeItem(DIARIO_KEY);
  renderDiario();
}

/* ══════════════════════════
   DASHBOARD
══════════════════════════ */
function renderDashboard() {
  const el = document.getElementById('dashboard-content');
  if (!el) return;

  const done    = countDone();
  const total   = totalSessions();
  const pct     = total ? Math.round(done/total*100) : 0;

  /* Quiz scores */
  let quizTotal = 0, quizCount = 0;
  MODULOS.forEach((m, mi) => {
    (m.sesiones||[]).forEach((s, si) => {
      const key  = QUIZ_KEY + '_' + mi + '_' + si;
      const data = JSON.parse(localStorage.getItem(key)||'null');
      if (data && data.scores && data.scores.length) {
        quizTotal += Math.max(...data.scores);
        quizCount++;
      }
    });
  });
  const avgQuiz = quizCount ? Math.round(quizTotal/quizCount) : 0;

  /* Likert averages per module */
  const modScores = MODULOS.map((m, mi) => {
    let sum = 0, cnt = 0;
    (m.sesiones||[]).forEach((s, si) => {
      const key  = LIKERT_KEY + '_' + mi + '_' + si;
      const data = JSON.parse(localStorage.getItem(key)||'null');
      if (!data) return;
      Object.entries(data).filter(([k])=>!isNaN(parseInt(k))).forEach(([,v])=>{ sum+=parseInt(v); cnt++; });
    });
    return { label: m.num, color: m.color, avg: cnt ? (sum/cnt).toFixed(1) : null };
  });

  el.innerHTML = `
    <div class="dash-grid">
      <div class="dash-card">
        <div class="dash-card-title">Progreso del curso</div>
        <div class="dash-big-num" style="color:var(--verde)">${pct}%</div>
        <div class="dash-sub">${done} de ${total} sesiones completadas</div>
      </div>
      <div class="dash-card">
        <div class="dash-card-title">Nota promedio evaluaciones</div>
        <div class="dash-big-num" style="color:${avgQuiz>=70?'var(--verde)':'var(--amber)'}">${quizCount?avgQuiz+'%':'—'}</div>
        <div class="dash-sub">${quizCount} evaluación${quizCount!==1?'es':''} completada${quizCount!==1?'s':''}</div>
      </div>
    </div>
    <div class="section-title">Metacognición por módulo</div>
    ${modScores.filter(m=>m.avg!==null).length ? `
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);padding:1.25rem;box-shadow:var(--shadow-sm)">
        ${modScores.map(ms => ms.avg ? `
          <div class="dash-bar-row">
            <div class="dash-bar-label" style="font-size:11.5px;min-width:80px">${ms.label}</div>
            <div class="dash-bar-track">
              <div class="dash-bar-fill" style="width:${Math.round(parseFloat(ms.avg)/4*100)}%;background:${ms.color}"></div>
            </div>
            <div class="dash-bar-val" style="color:${ms.color}">${ms.avg}/4</div>
          </div>` : '').join('')}
      </div>` : `<div style="color:var(--muted);font-size:13.5px;padding:1.5rem 0">
        Completa las reflexiones de metacognición para ver tus datos aquí.
      </div>`}`;
}
