/* ══════════════════════════════════════════════════════════
   MOTOR INTERACTIVO — Formación Ciudadana & DSE
   MEN Colombia 2026
   ══════════════════════════════════════════════════════════ */

let curModIdx = null;
let curSesIdx = null;
let curCSEIdx = null;
let curSesTab = 'contenido';

/* ── TOTAL DE SESIONES ── */
function totalSessions() {
  return MODULOS.reduce((sum, m) => sum + (m.sesiones || []).length, 0);
}

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
   STATS DINÁMICAS DEL HERO
══════════════════════════ */
function updateHeroStats() {
  const totalMods = MODULOS.length;
  const totalSes  = totalSessions();
  /* Calcular horas aproximadas: promedio ~1.5h por sesión */
  const totalHoras = Math.round(totalSes * 1.5);
  const statsData = [
    { num: totalMods,             lbl: 'Módulos' },
    { num: totalSes,              lbl: 'Sesiones' },
    { num: totalHoras + 'h+',    lbl: 'Formación' },
    { num: 4,                     lbl: 'Niveles Educ.' }
  ];
  const container = document.querySelector('.hero-stats');
  if (!container) return;
  container.innerHTML = statsData.map(s =>
    `<div class="hero-stat"><div class="num">${s.num}</div><div class="lbl">${s.lbl}</div></div>`
  ).join('');
}

/* ══════════════════════════
   NAVEGACIÓN PÁGINAS
══════════════════════════ */
function showPage(id, evt) {
  if (evt) evt.preventDefault();
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.npill').forEach(b => b.classList.remove('on', 'active'));
  const page = document.getElementById('page-' + id);
  if (page) page.classList.add('active');
  const btn = document.getElementById('nav-' + id);
  if (btn) btn.classList.add('on', 'active');
  if (id === 'diario') renderDiario();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ══════════════════════════
   HELPERS DOM
══════════════════════════ */
function show(id, visible) {
  const el = document.getElementById(id);
  if (el) el.style.display = visible ? 'block' : 'none';
}

/* ══════════════════════════
   RENDER LISTA DE MÓDULOS
══════════════════════════ */
function renderModulos() {
  const el = document.getElementById('modulos-list');
  if (!el) return;
  el.innerHTML = MODULOS.map((m, i) => {
    const done  = countModDone(i);
    const total = (m.sesiones || []).length;
    const pct   = total ? Math.round(done / total * 100) : 0;
    const allDone = done === total && total > 0;
    return `<button class="mod-card" onclick="openModulo(${i})">
      <div class="mod-icon" style="background:${m.bg}">
        <span style="font-size:22px">${m.icon || '📚'}</span>
      </div>
      <div style="flex:1;min-width:0">
        <div class="mod-meta" style="color:${m.color}">${m.num} · ${m.duracion || ''}</div>
        <div class="mod-title">${m.titulo || m.title}</div>
        <div class="mod-sub">${m.subtitulo || m.sub || ''}</div>
        ${done > 0 ? `<div class="mod-progress">
          <div class="mod-progress-bar"><div class="mod-progress-fill" style="width:${pct}%;background:${m.color}"></div></div>
          <span class="mod-progress-txt">${done}/${total}</span>
          ${allDone ? '<span class="mod-badge-done">✓ Completo</span>' : ''}
        </div>` : ''}
      </div>
      <i class="ti ti-chevron-right chevron"></i>
    </button>`;
  }).join('');
}

/* ══════════════════════════
   ABRIR MÓDULO
══════════════════════════ */
function openModulo(idx) {
  curModIdx = idx;
  const m = MODULOS[idx];
  show('view-modulos', false);
  show('view-sesiones', true);
  show('view-sesion', false);

  document.getElementById('mod-header').innerHTML = `
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:.75rem;padding:1rem;background:${m.bg};border-radius:12px">
      <span style="font-size:32px">${m.icon || '📚'}</span>
      <div>
        <div class="mod-meta" style="color:${m.color}">${m.num}</div>
        <div style="font-size:18px;font-weight:700;color:var(--text)">${m.titulo || m.title}</div>
        <div style="font-size:12.5px;color:var(--muted);margin-top:2px">${m.duracion || ''}</div>
      </div>
    </div>
    ${m.descripcion ? `<p style="font-size:13.5px;color:var(--text2);line-height:1.65;margin-bottom:1rem;padding:.85rem 1rem;background:#fff;border-radius:10px;border-left:4px solid ${m.color}">${m.descripcion}</p>` : ''}
  `;

  document.getElementById('ses-count-label').textContent =
    (m.sesiones || []).length + ' sesión(es) en este módulo';

  document.getElementById('sesiones-list').innerHTML = (m.sesiones || []).map((s, i) => {
    const done = isDone(idx, i);
    const pri  = s.obj ? s.obj[0] : (s.objetivo || '');
    return `<button class="ses-card" onclick="openSesion(${i})" style="${done ? 'border-color:#6EE7B7;background:#F0FDF4' : ''}">
      <div style="display:flex;align-items:center;justify-content:space-between;width:100%">
        <div>
          <span class="ses-badge" style="background:${m.bg};color:${m.color}">${s.tipo || s.num}</span>
          <span class="ses-dur"><i class="ti ti-clock"></i> ${s.duracion || s.dur || ''}</span>
        </div>
        ${done ? '<span style="font-size:12px;color:#059669;font-weight:600"><i class="ti ti-circle-check-filled"></i> Completada</span>' : ''}
      </div>
      <div class="ses-title" style="margin-top:5px">${s.titulo || s.title}</div>
      ${pri ? `<div class="ses-obj" style="margin-top:3px">${pri}</div>` : ''}
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
   ABRIR SESIÓN
══════════════════════════ */
function openSesion(idx) {
  curSesIdx = idx;
  const m = MODULOS[curModIdx];
  const s = m.sesiones[idx];
  show('view-sesiones', false);
  show('view-sesion', true);

  document.getElementById('ses-badge-row').innerHTML =
    `<span class="ses-badge" style="background:${m.bg};color:${m.color}">${s.tipo || s.num || ''}</span>`;
  document.getElementById('ses-title').textContent = s.titulo || s.title;
  document.getElementById('ses-meta').innerHTML =
    `<i class="ti ti-clock"></i> ${s.duracion || s.dur || ''}`;

  /* -- TABS -- */
  const hasEval = s.evaluacion && s.evaluacion.preguntas && s.evaluacion.preguntas.length;
  const tabsEl  = document.getElementById('ses-tabs');
  tabsEl.innerHTML = `
    <button class="tab-btn active" onclick="switchTab('contenido', this)" style="color:${m.color}">📖 Contenidos</button>
    <button class="tab-btn" onclick="switchTab('actividades', this)">🎯 Actividades</button>
    <button class="tab-btn" onclick="switchTab('recursos', this)">🔗 Recursos</button>
    ${hasEval ? `<button class="tab-btn" onclick="switchTab('evaluacion', this)">✅ Evaluación</button>` : ''}
  `;

  /* Añadir pane de evaluación si no existe */
  if (hasEval && !document.getElementById('tab-evaluacion')) {
    const pane = document.createElement('div');
    pane.id = 'tab-evaluacion';
    pane.style.display = 'none';
    document.getElementById('tab-recursos').parentNode
      .insertBefore(pane, document.getElementById('tab-recursos').nextSibling);
  }

  renderTabContenido(m, s);
  renderTabActividades(m, s);
  renderTabRecursos(m, s);
  if (hasEval) renderTabEvaluacion(m, s);

  show('tab-contenido', true);
  show('tab-actividades', false);
  show('tab-recursos', false);
  if (document.getElementById('tab-evaluacion'))
    document.getElementById('tab-evaluacion').style.display = 'none';

  document.getElementById('btn-prev').disabled = idx === 0;
  const btnNext = document.getElementById('btn-next');
  btnNext.style.background = m.color;
  btnNext.innerHTML = idx < m.sesiones.length - 1
    ? 'Siguiente <i class="ti ti-arrow-right"></i>'
    : '✓ Finalizar módulo';

  saveLastPos(curModIdx, idx);
  updateDoneBtn();
  window.scrollTo({ top: 0, behavior: 'smooth' });
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

function switchTab(tab, btn) {
  ['contenido','actividades','recursos','evaluacion'].forEach(t => {
    const el = document.getElementById('tab-' + t);
    if (el) el.style.display = t === tab ? 'block' : 'none';
  });
  document.querySelectorAll('#ses-tabs .tab-btn').forEach(b => {
    b.classList.remove('active');
    b.style.color = '';
  });
  btn.classList.add('active');
  const m = MODULOS[curModIdx];
  btn.style.color = m.color;
}

/* ══════════════════════════
   RENDER CONTENIDO (rich)
══════════════════════════ */
function renderTabContenido(m, s) {
  const savedRef = localStorage.getItem('ref_' + curModIdx + '_' + curSesIdx) || '';
  const savedAe  = JSON.parse(localStorage.getItem('ae_' + curModIdx + '_' + curSesIdx) || '{}');

  let html = '';

  /* Objetivo */
  const objetivo = s.objetivo || (s.obj ? s.obj[0] : '');
  if (objetivo) {
    html += `<div class="section-label">Objetivo de la sesión</div>
    <div style="padding:.85rem 1rem;background:${m.bg};border-radius:10px;border-left:4px solid ${m.color};font-size:13.5px;color:var(--text);margin-bottom:1.25rem;line-height:1.65">${objetivo}</div>`;
  }

  /* Contenidos ricos */
  const contenidos = s.contenido || s.contenidos;
  if (contenidos && contenidos.length) {
    html += `<div class="section-label">Contenidos</div>`;
    contenidos.forEach(c => {
      if (typeof c === 'string') {
        html += `<div class="content-block" style="border-color:${m.color}">${c}</div>`;
      } else {
        html += renderContenidoBloque(m, c);
      }
    });
  }

  /* Reflexión + Metacognición */
  const rq = s.rq || (s.metacognicion && s.metacognicion.preguntas ? s.metacognicion.preguntas[0] : '');
  const aq = s.aq || '';
  if (rq || aq) {
    html += renderReflexionCard(m, s, savedRef, savedAe);
  }
  if (s.metacognicion && s.metacognicion.preguntas && s.metacognicion.preguntas.length > 1) {
    html += `<div class="section-label" style="margin-top:1.5rem">Preguntas metacognitivas</div>`;
    html += `<div style="display:flex;flex-direction:column;gap:.5rem">`;
    s.metacognicion.preguntas.slice(1).forEach((p, i) => {
      html += `<div style="padding:.75rem 1rem;background:#fff;border:1.5px solid var(--border);border-radius:10px;font-size:13px;color:var(--text2);line-height:1.6">
        <span style="font-weight:700;color:${m.color}">🤔 ${i+2}.</span> ${p}
      </div>`;
    });
    html += `</div>`;
  }

  document.getElementById('tab-contenido').innerHTML = html;

  if (savedRef) {
    const ind = document.getElementById('reflexion-saved');
    if (ind) ind.style.display = 'flex';
  }
}

function renderContenidoBloque(m, c) {
  let html = '';

  if (c.tipo === 'lectura') {
    html += `<div style="margin-bottom:1.25rem">
      <div style="font-size:13px;font-weight:700;color:${m.color};margin-bottom:.5rem;text-transform:uppercase;letter-spacing:.04em">${c.titulo || ''}</div>
      <div style="font-size:13.5px;color:var(--text2);line-height:1.75;padding:.85rem 1rem;background:#fff;border-radius:10px;border:1px solid var(--border)">${c.texto || ''}</div>
    </div>`;

  } else if (c.tipo === 'tabla') {
    const t = c.tabla;
    html += `<div style="margin-bottom:1.25rem">
      <div style="font-size:13px;font-weight:700;color:${m.color};margin-bottom:.5rem;text-transform:uppercase;letter-spacing:.04em">${c.titulo || ''}</div>`;
    if (c.subtitulo) html += `<div style="font-size:12px;color:var(--muted);margin-bottom:.5rem">${c.subtitulo}</div>`;
    html += `<div style="overflow-x:auto;border-radius:10px;border:1px solid var(--border);box-shadow:var(--shadow-sm)">
      <table style="width:100%;border-collapse:collapse;background:#fff;font-size:12.5px">
        <thead>
          <tr style="background:${m.bg}">
            ${(t.cabeceras||[]).map(h => `<th style="padding:.65rem .85rem;text-align:left;color:${m.color};font-weight:700;white-space:nowrap">${h}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${(t.filas||[]).map((row, ri) => `<tr style="border-top:1px solid var(--border);background:${ri%2===0?'#fff':'var(--bg)'}">
            ${row.map((cell, ci) => `<td style="padding:.6rem .85rem;vertical-align:top;${ci===0?'font-weight:600;color:var(--text)':'color:var(--text2)'};white-space:pre-line">${cell}</td>`).join('')}
          </tr>`).join('')}
        </tbody>
      </table>
    </div></div>`;

  } else if (c.tipo === 'grafico') {
    html += `<div style="margin-bottom:1.25rem">
      <div style="font-size:13px;font-weight:700;color:${m.color};margin-bottom:.35rem;text-transform:uppercase;letter-spacing:.04em">${c.titulo || ''}</div>
      ${c.subtitulo ? `<div style="font-size:12px;color:var(--muted);margin-bottom:.65rem">${c.subtitulo}</div>` : ''}
      ${renderGrafico(m, c)}
    </div>`;

  } else if (c.tipo === 'tres_niveles') {
    html += renderTresNiveles(m, c);
  } else if (c.tipo === 'estructura_curricular') {
    html += renderEstructuraCurricular(m, c);
  } else if (c.tipo === 'portafolio') {
    html += renderPortafolio(m, c);
  } else {
    /* fallback */
    if (c.titulo) html += `<div style="font-size:13px;font-weight:700;color:${m.color};margin-bottom:.4rem;text-transform:uppercase;letter-spacing:.04em">${c.titulo}</div>`;
    if (c.texto) html += `<div style="font-size:13.5px;color:var(--text2);line-height:1.75;padding:.85rem 1rem;background:#fff;border-radius:10px;border:1px solid var(--border);margin-bottom:1.25rem">${c.texto}</div>`;
  }
  return html;
}

/* ── Gráficos según tipo ── */
function renderGrafico(m, c) {
  const datos = c.datos || [];
  const tipo  = c.tipo_grafico || 'barras';

  let html = `<div style="background:#fff;border:1px solid var(--border);border-radius:12px;padding:1rem;box-shadow:var(--shadow-sm)">`;

  if (tipo === 'escala' || tipo === 'comparacion') {
    datos.forEach((d, i) => {
      const w = Math.round((i + 1) / datos.length * 100);
      html += `<div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:.75rem">
        <div style="width:10px;height:10px;border-radius:50%;background:${d.color || m.color};margin-top:4px;flex-shrink:0"></div>
        <div style="flex:1">
          <div style="font-size:13px;font-weight:700;color:${d.color || m.color}">${d.label}</div>
          <div style="font-size:12px;color:var(--text2);line-height:1.55">${d.desc || d.valor || ''}</div>
          <div style="height:4px;background:var(--bg2);border-radius:99px;margin-top:.35rem">
            <div style="width:${w}%;height:100%;border-radius:99px;background:${d.color || m.color};transition:width .5s"></div>
          </div>
        </div>
      </div>`;
    });

  } else if (tipo === 'hexagono' || tipo === 'triangulo' || tipo === 'tres_circulos') {
    datos.forEach(d => {
      html += `<div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:.75rem;padding:.65rem;background:${d.color}18;border-radius:9px;border-left:3px solid ${d.color}">
        <div style="font-size:14px;font-weight:800;color:${d.color};min-width:28px">${d.label.substring(0,2)}</div>
        <div>
          <div style="font-size:13px;font-weight:700;color:${d.color}">${d.label}</div>
          <div style="font-size:12px;color:var(--text2);line-height:1.55">${d.desc || ''}</div>
        </div>
      </div>`;
    });

  } else if (tipo === 'concentrico_svg') {
    /* SVG visual del modelo concéntrico — Figura 2, MEN 2026 */
    const colores = datos.map(d => d.color);
    const labels  = datos.map(d => d.label);
    const ejes    = datos.map(d => d.eje);
    html = `<div style="background:#fff;border:1px solid var(--border);border-radius:12px;padding:1rem;box-shadow:var(--shadow-sm)">
      <svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:320px;display:block;margin:0 auto">
        <!-- Círculos concéntricos -->
        <circle cx="160" cy="160" r="148" fill="${colores[3]}18" stroke="${colores[3]}" stroke-width="1.5"/>
        <circle cx="160" cy="160" r="110" fill="${colores[2]}20" stroke="${colores[2]}" stroke-width="1.5"/>
        <circle cx="160" cy="160" r="74"  fill="${colores[1]}25" stroke="${colores[1]}" stroke-width="1.5"/>
        <circle cx="160" cy="160" r="40"  fill="${colores[0]}" stroke="${colores[0]}" stroke-width="2"/>
        <!-- Eje A — centro -->
        <text x="160" y="155" text-anchor="middle" font-size="9" font-weight="700" fill="#fff" font-family="DM Sans,sans-serif">${ejes[0]}</text>
        <text x="160" y="167" text-anchor="middle" font-size="7" fill="rgba(255,255,255,.85)" font-family="DM Sans,sans-serif">Yo conmigo</text>
        <!-- Labels externos -->
        <text x="160" y="94"  text-anchor="middle" font-size="8.5" font-weight="700" fill="${colores[1]}" font-family="DM Sans,sans-serif">${ejes[1]}</text>
        <text x="160" y="104" text-anchor="middle" font-size="7.5" fill="${colores[1]}" font-family="DM Sans,sans-serif">Yo con los otros</text>
        <text x="160" y="57"  text-anchor="middle" font-size="8.5" font-weight="700" fill="${colores[2]}" font-family="DM Sans,sans-serif">${ejes[2]}</text>
        <text x="160" y="67"  text-anchor="middle" font-size="7.5" fill="${colores[2]}" font-family="DM Sans,sans-serif">Yo con la sociedad</text>
        <text x="160" y="20"  text-anchor="middle" font-size="8.5" font-weight="700" fill="${colores[3]}" font-family="DM Sans,sans-serif">${ejes[3]}</text>
        <text x="160" y="30"  text-anchor="middle" font-size="7.5" fill="${colores[3]}" font-family="DM Sans,sans-serif">Yo con el mundo</text>
        <!-- Flechas bidireccionales sutiles -->
        <line x1="160" y1="42" x2="160" y2="118" stroke="#00000015" stroke-width="1" stroke-dasharray="3,3"/>
        <line x1="42"  y1="160" x2="118" y2="160" stroke="#00000015" stroke-width="1" stroke-dasharray="3,3"/>
        <line x1="278" y1="160" x2="202" y2="160" stroke="#00000015" stroke-width="1" stroke-dasharray="3,3"/>
        <line x1="160" y1="278" x2="160" y2="202" stroke="#00000015" stroke-width="1" stroke-dasharray="3,3"/>
      </svg>
      <!-- Leyenda -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:.85rem">
        ${datos.map(d => `<div style="display:flex;align-items:flex-start;gap:7px;padding:.5rem .65rem;background:${d.color}12;border-radius:8px;border-left:3px solid ${d.color}">
          <div style="width:18px;height:18px;border-radius:50%;background:${d.color};color:#fff;font-size:9px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px">${d.eje}</div>
          <div>
            <div style="font-size:11.5px;font-weight:700;color:${d.color}">${d.label}</div>
            <div style="font-size:10.5px;color:var(--text2);line-height:1.5;margin-top:1px">${(d.desc||'').substring(0,80)}${d.desc && d.desc.length > 80 ? '…' : ''}</div>
          </div>
        </div>`).join('')}
      </div>
    </div>`;
    if (c.nota) html += `<div style="margin-top:.65rem;font-size:12px;color:var(--muted);padding:.5rem .75rem;background:var(--bg2);border-radius:8px;border-left:3px solid ${m.color}"><i class="ti ti-info-circle"></i> ${c.nota}</div>`;
    return html;

  } else if (tipo === 'figura_cse') {
    /* Figura 4 del MEN 2026: Las 7 CSE organizadas visualmente */
    html = `<div style="background:#fff;border:1px solid var(--border);border-radius:12px;padding:1rem;box-shadow:var(--shadow-sm)">
      <svg viewBox="0 0 340 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
        <!-- Eje A: Yo conmigo mismo — columna izquierda -->
        <rect x="4" y="4" width="100" height="212" rx="10" fill="#534AB710" stroke="#534AB7" stroke-width="1.5"/>
        <text x="54" y="22" text-anchor="middle" font-size="7.5" font-weight="700" fill="#534AB7" font-family="DM Sans,sans-serif">Yo conmigo mismo</text>
        <rect x="12" y="30" width="84" height="36" rx="7" fill="#534AB7"/>
        <text x="54" y="51" text-anchor="middle" font-size="7" font-weight="700" fill="#fff" font-family="DM Sans,sans-serif">CSE-1</text>
        <text x="54" y="60" text-anchor="middle" font-size="6.5" fill="#ffffffcc" font-family="DM Sans,sans-serif">Conciencia emocional</text>
        <rect x="12" y="72" width="84" height="36" rx="7" fill="#534AB7cc"/>
        <text x="54" y="93" text-anchor="middle" font-size="7" font-weight="700" fill="#fff" font-family="DM Sans,sans-serif">CSE-2</text>
        <text x="54" y="102" text-anchor="middle" font-size="6.5" fill="#ffffffcc" font-family="DM Sans,sans-serif">Regulación emocional</text>
        <rect x="12" y="114" width="84" height="36" rx="7" fill="#534AB799"/>
        <text x="54" y="135" text-anchor="middle" font-size="7" font-weight="700" fill="#fff" font-family="DM Sans,sans-serif">CSE-3</text>
        <text x="54" y="144" text-anchor="middle" font-size="6" fill="#ffffffcc" font-family="DM Sans,sans-serif">Toma de decisiones éticas</text>
        <!-- Eje B: Yo con los otros — columna central -->
        <rect x="120" y="4" width="100" height="212" rx="10" fill="#0C7A4A10" stroke="#0C7A4A" stroke-width="1.5"/>
        <text x="170" y="22" text-anchor="middle" font-size="7.5" font-weight="700" fill="#0C7A4A" font-family="DM Sans,sans-serif">Yo con los otros</text>
        <rect x="128" y="30" width="84" height="36" rx="7" fill="#0C7A4A"/>
        <text x="170" y="51" text-anchor="middle" font-size="7" font-weight="700" fill="#fff" font-family="DM Sans,sans-serif">CSE-4</text>
        <text x="170" y="60" text-anchor="middle" font-size="6.5" fill="#ffffffcc" font-family="DM Sans,sans-serif">Empatía y reconocimiento</text>
        <rect x="128" y="72" width="84" height="36" rx="7" fill="#0C7A4Acc"/>
        <text x="170" y="93" text-anchor="middle" font-size="7" font-weight="700" fill="#fff" font-family="DM Sans,sans-serif">CSE-5</text>
        <text x="170" y="102" text-anchor="middle" font-size="6" fill="#ffffffcc" font-family="DM Sans,sans-serif">Habilidades de relación</text>
        <!-- Eje C: Yo con la sociedad — columna derecha -->
        <rect x="236" y="4" width="100" height="212" rx="10" fill="#B3590010" stroke="#B35900" stroke-width="1.5"/>
        <text x="286" y="22" text-anchor="middle" font-size="7.5" font-weight="700" fill="#B35900" font-family="DM Sans,sans-serif">Yo con la sociedad</text>
        <rect x="244" y="30" width="84" height="36" rx="7" fill="#B35900"/>
        <text x="286" y="51" text-anchor="middle" font-size="7" font-weight="700" fill="#fff" font-family="DM Sans,sans-serif">CSE-6</text>
        <text x="286" y="60" text-anchor="middle" font-size="6.5" fill="#ffffffcc" font-family="DM Sans,sans-serif">Emociones políticas</text>
        <rect x="244" y="72" width="84" height="36" rx="7" fill="#B35900cc"/>
        <text x="286" y="93" text-anchor="middle" font-size="7" font-weight="700" fill="#fff" font-family="DM Sans,sans-serif">CSE-7</text>
        <text x="286" y="102" text-anchor="middle" font-size="6.5" fill="#ffffffcc" font-family="DM Sans,sans-serif">Resiliencia comunitaria</text>
        <!-- Flecha de interdependencia -->
        <path d="M104 110 Q170 155 236 110" stroke="#00000025" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
        <text x="170" y="175" text-anchor="middle" font-size="8" fill="var(--muted,#888)" font-family="DM Sans,sans-serif" font-style="italic">Las 7 CSE son interdependientes</text>
        <text x="170" y="187" text-anchor="middle" font-size="7.5" fill="var(--muted,#888)" font-family="DM Sans,sans-serif">y se construyen simultáneamente</text>
        <text x="170" y="200" text-anchor="middle" font-size="7" fill="var(--muted,#888)" font-family="DM Sans,sans-serif">MEN 2026 · Figura 4</text>
      </svg>
    </div>`;
    if (c.nota) html += `<div style="margin-top:.65rem;font-size:12px;color:var(--muted);padding:.5rem .75rem;background:var(--bg2);border-radius:8px;border-left:3px solid ${m.color}"><i class="ti ti-info-circle"></i> ${c.nota}</div>`;
    return html;

  } else if (tipo === 'linea_tiempo') {
    html = `<div style="background:#fff;border:1px solid var(--border);border-radius:12px;padding:1rem;box-shadow:var(--shadow-sm)">`;
    datos.forEach((d, i) => {
      const isNew = d.label && d.label.startsWith('🆕');
      html += `<div style="display:flex;gap:14px;margin-bottom:${i < datos.length - 1 ? '0' : '0'}">
        <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
          <div style="width:44px;height:44px;border-radius:50%;background:${d.color};display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:10px;text-align:center;line-height:1.2;flex-shrink:0">${d.anio}</div>
          ${i < datos.length - 1 ? `<div style="width:2px;flex:1;min-height:16px;background:${d.color}40;margin:3px 0"></div>` : ''}
        </div>
        <div style="padding:.6rem 0 ${i < datos.length - 1 ? '1rem' : '0'}">
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
            <span style="font-size:13px;font-weight:700;color:${d.color}">${d.label}</span>
            ${isNew ? `<span style="font-size:10px;padding:1px 7px;background:${d.color};color:#fff;border-radius:99px;font-weight:700">NUEVO</span>` : ''}
          </div>
          <div style="font-size:12.5px;color:var(--text2);line-height:1.6">${d.desc}</div>
        </div>
      </div>`;
    });
    html += `</div>`;
    if (c.nota) {
      html += `<div style="margin-top:.85rem;padding:.65rem .85rem;background:var(--bg2);border-radius:8px;font-size:12px;color:var(--muted);border-left:3px solid ${m.color}"><i class="ti ti-info-circle"></i> ${c.nota}</div>`;
    }
    return html;

  } else if (tipo === 'brecha') {
    html = `<div style="background:#fff;border:1px solid var(--border);border-radius:12px;padding:1rem;box-shadow:var(--shadow-sm)">`;
    datos.forEach(d => {
      html += `<div style="margin-bottom:1rem;border-radius:10px;overflow:hidden;border:1px solid var(--border)">
        <div style="padding:.5rem .85rem;background:#1A1917;color:#fff;font-size:12.5px;font-weight:700">${d.label}</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0">
          <div style="padding:.65rem .85rem;background:#E1F5EE;border-right:1px solid var(--border)">
            <div style="font-size:10px;font-weight:700;color:#085041;text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px">✓ Lo que dice la ley</div>
            <div style="font-size:12px;color:#085041;line-height:1.55">${d.ley}</div>
          </div>
          <div style="padding:.65rem .85rem;background:#FEF3C7">
            <div style="font-size:10px;font-weight:700;color:#92400E;text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px">⚠ Lo que ocurre habitualmente</div>
            <div style="font-size:12px;color:#92400E;line-height:1.55">${d.realidad}</div>
          </div>
        </div>
      </div>`;
    });
    html += `</div>`;
    if (c.nota) {
      html += `<div style="margin-top:.85rem;padding:.65rem .85rem;background:var(--bg2);border-radius:8px;font-size:12px;color:var(--muted);border-left:3px solid ${m.color}"><i class="ti ti-info-circle"></i> ${c.nota}</div>`;
    }
    return html;

  } else if (tipo === 'ciclo') {
    datos.forEach((d, i) => {
      html += `<div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:.65rem">
        <div style="width:24px;height:24px;border-radius:50%;background:${d.color};color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">${i+1}</div>
        <div>
          <div style="font-size:13px;font-weight:700;color:${d.color}">${d.label}</div>
          <div style="font-size:12px;color:var(--text2);line-height:1.55">${d.desc || ''}</div>
        </div>
      </div>`;
    });

  } else if (tipo === 'mapa_transversal') {
    datos.forEach(d => {
      html += `<div style="margin-bottom:.75rem;padding:.75rem;background:${d.color}12;border-radius:10px;border-left:3px solid ${d.color}">
        <div style="font-size:13px;font-weight:700;color:${d.color};margin-bottom:.35rem">${d.area}</div>
        <div style="display:flex;flex-wrap:wrap;gap:5px">
          ${(d.cc_cse||[]).map(tag => `<span style="font-size:11px;padding:2px 9px;background:#fff;border:1px solid ${d.color}40;border-radius:99px;color:var(--text2)">${tag}</span>`).join('')}
        </div>
      </div>`;
    });

  } else if (tipo === 'progresion') {
    datos.forEach((d, i) => {
      html += `<div style="display:flex;gap:12px;margin-bottom:.75rem">
        <div style="display:flex;flex-direction:column;align-items:center">
          <div style="width:28px;height:28px;border-radius:50%;background:${d.color};color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex-shrink:0">${i+1}</div>
          ${i < datos.length-1 ? `<div style="width:2px;flex:1;background:var(--border);margin:3px 0"></div>` : ''}
        </div>
        <div style="padding:.65rem .85rem;background:#fff;border:1px solid var(--border);border-radius:10px;flex:1">
          <div style="font-size:12px;font-weight:700;color:${d.color}">${d.nivel}</div>
          <div style="font-size:13px;font-weight:600;color:var(--text);margin:.2rem 0">${d.competencia || ''}</div>
          <div style="font-size:12px;color:var(--text2);line-height:1.55">${d.aprendizaje || ''}</div>
        </div>
      </div>`;
    });

  } else {
    /* fallback: lista simple */
    datos.forEach(d => {
      html += `<div style="margin-bottom:.5rem;font-size:13px;color:var(--text2)">• ${d.label || d.instrumento || ''}: ${d.desc || ''}</div>`;
    });
  }

  if (c.nota) {
    html += `<div style="margin-top:.85rem;padding:.65rem .85rem;background:var(--bg2);border-radius:8px;font-size:12px;color:var(--muted);border-left:3px solid ${m.color}">
      <i class="ti ti-info-circle"></i> ${c.nota}
    </div>`;
  }
  html += `</div>`;
  return html;
}

function renderTresNiveles(m, c) {
  const datos = c.datos || [];
  let html = `<div style="margin-bottom:1.25rem">
    <div style="font-size:13px;font-weight:700;color:${m.color};margin-bottom:.5rem;text-transform:uppercase;letter-spacing:.04em">${c.titulo || ''}</div>
    <div style="display:flex;flex-direction:column;gap:.5rem">`;
  datos.forEach((d, i) => {
    const opacity = 0.6 + i * 0.2;
    html += `<div style="display:flex;align-items:flex-start;gap:12px;padding:.85rem 1rem;background:${d.color}15;border-radius:10px;border-left:4px solid ${d.color}">
      <div style="width:30px;height:30px;border-radius:50%;background:${d.color};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;flex-shrink:0">${i+1}</div>
      <div>
        <div style="font-size:14px;font-weight:700;color:${d.color}">${d.nivel}</div>
        <div style="font-size:13px;color:var(--text2);line-height:1.6;margin-top:2px">${d.desc}</div>
      </div>
    </div>`;
  });
  html += `</div></div>`;
  return html;
}

function renderEstructuraCurricular(m, c) {
  const datos = c.datos || [];
  let html = `<div style="margin-bottom:1.25rem">
    <div style="font-size:13px;font-weight:700;color:${m.color};margin-bottom:.65rem;text-transform:uppercase;letter-spacing:.04em">${c.titulo || ''}</div>
    <div style="display:flex;flex-direction:column;gap:.5rem">`;
  datos.forEach(d => {
    html += `<div style="display:flex;align-items:flex-start;gap:10px;padding:.7rem .95rem;background:${d.color}14;border-radius:10px;border-left:3px solid ${d.color}">
      <div style="font-size:11px;font-weight:700;color:${d.color};min-width:110px;padding-top:2px">${d.componente}</div>
      <div style="font-size:13px;color:var(--text2);line-height:1.6">${d.desc}</div>
    </div>`;
  });
  html += `</div></div>`;
  return html;
}

function renderPortafolio(m, c) {
  const datos = c.datos || [];
  let html = `<div style="margin-bottom:1.25rem">
    <div style="font-size:13px;font-weight:700;color:${m.color};margin-bottom:.65rem;text-transform:uppercase;letter-spacing:.04em">${c.titulo || ''}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:.65rem">`;
  datos.forEach(d => {
    html += `<div style="padding:.85rem;background:${d.color}15;border-radius:10px;border:1px solid ${d.color}30">
      <div style="font-size:12.5px;font-weight:700;color:${d.color};margin-bottom:.3rem">${d.instrumento}</div>
      <div style="font-size:12px;color:var(--text2);line-height:1.55;margin-bottom:.35rem">${d.desc}</div>
      <div style="font-size:10.5px;color:var(--muted)">${d.uso}</div>
    </div>`;
  });
  html += `</div></div>`;
  return html;
}

/* ── Reflexión + Autoevaluación ── */
function renderReflexionCard(m, s, savedRef, savedAe) {
  const rq = s.rq || (s.metacognicion && s.metacognicion.preguntas ? s.metacognicion.preguntas[0] : '');
  const aq = s.aq || '';
  return `<div class="reflexion-card" style="border-color:${m.color}30;margin-top:2rem">
    <div class="reflexion-header">
      <div class="reflexion-icon" style="background:${m.bg};color:${m.color}"><i class="ti ti-pencil"></i></div>
      <div>
        <div class="reflexion-title">Mi Diario Pedagógico</div>
        <div class="reflexion-sub">Tu reflexión se guarda localmente en este navegador</div>
      </div>
    </div>
    ${rq ? `<div class="reflexion-question" style="font-weight:600;color:var(--text)">Pregunta reflexiva: ${rq}</div>` : ''}
    <textarea class="reflexion-textarea" id="reflexion-input"
      placeholder="Escribe tu reflexión pedagógica aquí..." rows="4">${savedRef}</textarea>
    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:.65rem">
      <button class="reflexion-save-btn" style="background:${m.color}" onclick="saveReflexion()">
        <i class="ti ti-device-floppy"></i> Guardar en Diario
      </button>
      <div class="reflexion-saved" id="reflexion-saved" style="display:none">
        <i class="ti ti-circle-check"></i> ¡Reflexión guardada!
      </div>
    </div>
  </div>
  ${aq ? `<div class="autoeval-card" style="margin-top:1.25rem">
    <div class="autoeval-title" style="color:${m.color};font-weight:700">
      <i class="ti ti-star-filled"></i> Autoevaluación
    </div>
    <div class="reflexion-question" style="margin-bottom:.5rem;font-size:13px;font-style:italic">${aq}</div>
    <div class="scale-wrap" id="ae-comprension">
      ${[1,2,3,4].map(n => `<button class="scale-btn ${savedAe.comprension==n?'selected':''}"
        onclick="setAE('comprension',${n},this)"
        style="${savedAe.comprension==n?'background:'+m.color+';border-color:'+m.color+';color:#fff':''}">
        ${n}</button>`).join('')}
    </div>
    <div class="scale-label"><span>1. Explorando</span><span>4. Liderando</span></div>
  </div>` : ''}`;
}

/* ══════════════════════════
   RENDER ACTIVIDADES
══════════════════════════ */
function renderTabActividades(m, s) {
  const acts = s.actividades || [];
  let html = `<div class="section-label">Secuencia de actividades</div>`;

  if (!acts.length) {
    html += `<div style="color:var(--muted);font-size:13px;padding:1rem">No hay actividades registradas.</div>`;
  } else if (typeof acts[0] === 'string') {
    html += `<div class="act-list">${acts.map((a, i) => `
      <div class="act-item">
        <div class="act-num" style="background:${m.bg};color:${m.color}">${i+1}</div>
        <div class="act-text">${a}</div>
      </div>`).join('')}</div>`;
  } else {
    const tipoIcono = { individual:'👤', grupal:'👥', reflexion:'🪞', diseno:'✏️', grupal:'👥' };
    html += `<div class="act-list">${acts.map((a, i) => `
      <div class="act-item" style="border:1.5px solid ${m.color}20;background:#fff;margin-bottom:.65rem">
        <div class="act-num" style="background:${m.bg};color:${m.color}">${i+1}</div>
        <div class="act-text" style="flex:1">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:.3rem">
            <span style="font-size:17px">${a.icono || tipoIcono[a.tipo] || '🎯'}</span>
            <span style="font-size:13px;font-weight:700;color:${m.color}">${a.titulo || ''}</span>
            ${a.tiempo ? `<span style="margin-left:auto;font-size:11px;color:var(--muted);white-space:nowrap"><i class="ti ti-clock"></i> ${a.tiempo}</span>` : ''}
          </div>
          <div style="font-size:13px;color:var(--text2);line-height:1.65">${a.instruccion || ''}</div>
          ${a.tipo ? `<span style="display:inline-block;margin-top:.4rem;font-size:10.5px;padding:2px 9px;background:${m.bg};color:${m.color};border-radius:99px;font-weight:600">${a.tipo}</span>` : ''}
        </div>
      </div>`).join('')}</div>`;
  }

  document.getElementById('tab-actividades').innerHTML = html;
}

/* ══════════════════════════
   RENDER RECURSOS
══════════════════════════ */
function renderTabRecursos(m, s) {
  const res = s.recursos || [];
  const iconMap = {
    doc:'ti-file-text', pdf:'ti-file-type-pdf', web:'ti-world',
    video:'ti-brand-youtube', libro:'ti-book', lectura:'ti-book-2',
    herramienta:'ti-tool', investigacion:'ti-flask', podcast:'ti-microphone'
  };
  const colorMap = {
    doc:'#1A4FA0', pdf:'#DC2626', web:'#0C7A4A', video:'#DC2626',
    libro:'#5A2E8A', lectura:'#5A2E8A', herramienta:'#B35900',
    investigacion:'#2E6B22', podcast:'#9B2750'
  };

  let html = `<div class="section-label">Recursos y referencias</div>`;
  if (!res.length) {
    html += `<div style="color:var(--muted);font-size:13px;padding:1rem">Sin recursos registrados.</div>`;
  } else if (typeof res[0] === 'string') {
    html += `<div class="res-list">${res.map(r => `
      <div class="res-item">
        <i class="ti ti-link" style="color:${m.color};font-size:16px;flex-shrink:0"></i>
        <span style="font-size:13px;color:var(--text2)">${r}</span>
      </div>`).join('')}</div>`;
  } else {
    html += `<div class="res-list">${res.map(r => {
      const ico   = iconMap[r.tipo] || 'ti-link';
      const col   = colorMap[r.tipo] || m.color;
      const hasUrl = r.url && r.url !== '#';
      const inner = `<i class="ti ${ico}" style="color:${col};font-size:17px;flex-shrink:0"></i>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:600;color:var(--text)">${r.titulo || ''}</div>
          ${r.meta ? `<div style="font-size:11.5px;color:var(--muted)">${r.meta}</div>` : ''}
        </div>
        ${hasUrl ? '<i class="ti ti-external-link" style="color:var(--muted);font-size:14px;flex-shrink:0"></i>' : ''}`;
      return hasUrl
        ? `<a class="res-item" href="${r.url}" target="_blank" rel="noopener" style="text-decoration:none">${inner}</a>`
        : `<div class="res-item">${inner}</div>`;
    }).join('')}</div>`;
  }

  document.getElementById('tab-recursos').innerHTML = html;
}

/* ══════════════════════════
   RENDER EVALUACIÓN
══════════════════════════ */
function renderTabEvaluacion(m, s) {
  const pane = document.getElementById('tab-evaluacion');
  if (!pane || !s.evaluacion) return;

  const ev = s.evaluacion;
  let html = `<div class="section-label">${ev.titulo || 'Evaluación de comprensión'}</div>
    <div id="quiz-container"></div>`;
  pane.innerHTML = html;

  renderQuiz(m, s.evaluacion.preguntas, 0);
}

let quizAnswers = {};
function renderQuiz(m, preguntas, idx) {
  const container = document.getElementById('quiz-container');
  if (!container || idx >= preguntas.length) {
    renderQuizResult(m, preguntas);
    return;
  }
  const p = preguntas[idx];
  const letras = ['A','B','C','D'];
  container.innerHTML = `
    <div style="margin-bottom:.65rem;font-size:12px;color:var(--muted);font-weight:600">
      Pregunta ${idx+1} de ${preguntas.length}
    </div>
    <div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:1rem;line-height:1.55">${p.pregunta}</div>
    <div style="display:flex;flex-direction:column;gap:.5rem">
      ${p.opciones.map((op, oi) => `
        <button onclick="responderQuiz(${idx},${oi},'${m.color}')"
          id="qopt-${idx}-${oi}"
          style="text-align:left;padding:.85rem 1rem;border:1.5px solid var(--border);border-radius:10px;background:#fff;font-size:13px;cursor:pointer;color:var(--text2);display:flex;align-items:flex-start;gap:10px;transition:all .15s">
          <span style="font-weight:800;color:${m.color};flex-shrink:0">${letras[oi]}.</span>
          <span>${op}</span>
        </button>`).join('')}
    </div>
    <div id="quiz-feedback" style="display:none;margin-top:.85rem;padding:.85rem 1rem;border-radius:10px;font-size:13px;line-height:1.6"></div>
    <div style="display:flex;justify-content:flex-end;margin-top:.85rem">
      <button id="quiz-next-btn" onclick="renderQuiz(arguments[0],arguments[1],${idx+1})" data-pregs='${JSON.stringify(preguntas).replace(/'/g,"\'")}' style="display:none;padding:.65rem 1.35rem;background:${m.color};color:#fff;border:none;border-radius:9px;font-size:13px;font-weight:700;cursor:pointer">
        ${idx < preguntas.length-1 ? 'Siguiente pregunta →' : 'Ver resultados'}
      </button>
    </div>`;

  /* Inyectar la función responder en window para onclick */
  window._quizPregs = preguntas;
  window._quizM    = m;
}

window.responderQuiz = function(idx, opcionIdx, color) {
  const pregs   = window._quizPregs;
  const m       = window._quizM;
  const p       = pregs[idx];
  const correcta = p.correcta;
  quizAnswers[idx] = opcionIdx;

  /* Estilos de respuesta */
  p.opciones.forEach((_, oi) => {
    const btn = document.getElementById('qopt-' + idx + '-' + oi);
    if (!btn) return;
    btn.disabled = true;
    btn.style.cursor = 'default';
    if (oi === correcta) {
      btn.style.background = '#D1FAE5';
      btn.style.borderColor = '#059669';
      btn.style.color = '#065F46';
    } else if (oi === opcionIdx && oi !== correcta) {
      btn.style.background = '#FEE2E2';
      btn.style.borderColor = '#DC2626';
      btn.style.color = '#991B1B';
    }
  });

  const fb = document.getElementById('quiz-feedback');
  if (fb) {
    fb.style.display = 'block';
    const ok = opcionIdx === correcta;
    fb.style.background = ok ? '#D1FAE5' : '#FEF3C7';
    fb.style.borderLeft = '4px solid ' + (ok ? '#059669' : '#D97706');
    fb.style.color = ok ? '#065F46' : '#92400E';
    fb.innerHTML = `<strong>${ok ? '✓ ¡Correcto!' : '→ No exactamente.'}</strong> ${p.explicacion || ''}`;
  }

  const nextBtn = document.getElementById('quiz-next-btn');
  if (nextBtn) {
    nextBtn.style.display = 'inline-flex';
    nextBtn.onclick = () => renderQuiz(m, pregs, idx + 1);
  }
};

function renderQuizResult(m, pregs) {
  const container = document.getElementById('quiz-container');
  if (!container) return;
  const correct = pregs.filter((p, i) => quizAnswers[i] === p.correcta).length;
  const pct = Math.round(correct / pregs.length * 100);
  const nivel = pct >= 90 ? 'Liderando' : pct >= 75 ? 'Aplicando' : pct >= 60 ? 'Comprendiendo' : 'Explorando';
  const colores = { Liderando:'#5A2E8A', Aplicando:'#0C7A4A', Comprendiendo:'#1A4FA0', Explorando:'#B35900' };
  container.innerHTML = `
    <div style="text-align:center;padding:2rem 1rem">
      <div style="width:80px;height:80px;border-radius:50%;border:6px solid ${colores[nivel]};display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;font-family:'Fraunces',serif;font-size:22px;font-weight:800;color:${colores[nivel]}">${pct}%</div>
      <div style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:.3rem">${correct}/${pregs.length} respuestas correctas</div>
      <div style="display:inline-block;padding:4px 14px;border-radius:99px;background:${colores[nivel]}20;color:${colores[nivel]};font-weight:700;font-size:13px;margin-bottom:1rem">${nivel}</div>
      <button onclick="quizAnswers={};renderTabEvaluacion(MODULOS[curModIdx],MODULOS[curModIdx].sesiones[curSesIdx])"
        style="padding:.65rem 1.5rem;background:${m.color};color:#fff;border:none;border-radius:9px;font-size:13px;font-weight:700;cursor:pointer">
        <i class="ti ti-refresh"></i> Intentar de nuevo
      </button>
    </div>`;
  quizAnswers = {};
}

/* ══════════════════════════
   CSE (profundización)
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
        <span style="font-size:22px">${c.icon || '💚'}</span>
      </div>
      <div style="flex:1;min-width:0">
        <div style="display:flex;gap:8px;align-items:center;margin-bottom:3px">
          <span class="ses-badge" style="background:${c.bg};color:${c.tc || c.color}">${c.num}</span>
          ${c.eje ? `<span style="font-size:11px;color:var(--muted)">Eje: ${c.eje}</span>` : ''}
        </div>
        <div class="mod-title">${c.title || c.titulo}</div>
      </div>
      <i class="ti ti-chevron-right chevron"></i>
    </button>`).join('');
}

function openCSE(idx) {
  curCSEIdx = idx;
  const c = CSE[idx];
  document.getElementById('cse-list').parentElement.style.display = 'none';
  show('view-cse-detail', true);
  document.getElementById('cse-header').innerHTML = `
    <div style="display:flex;align-items:flex-start;gap:14px;margin-bottom:.75rem">
      <div class="mod-icon" style="background:${c.bg}">
        <span style="font-size:24px">${c.icon || '💚'}</span>
      </div>
      <div>
        <div style="display:flex;gap:8px;align-items:center;margin-bottom:3px">
          <span class="ses-badge" style="background:${c.bg};color:${c.tc||c.color}">${c.num}</span>
          ${c.eje ? `<span style="font-size:11px;color:var(--muted)">Eje: ${c.eje}</span>` : ''}
        </div>
        <div style="font-size:19px;font-weight:600;color:var(--text)">${c.title || c.titulo}</div>
      </div>
    </div>
    <p style="font-size:13.5px;color:var(--text2);line-height:1.65;padding:.75rem 1rem;background:var(--bg2);border-radius:8px;border-left:3px solid ${c.color};margin-bottom:1.5rem">${c.def || ''}</p>`;
  renderCSETab('secuencia');
  document.querySelectorAll('#cse-tabs .tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('#cse-tabs .tab-btn')[0].classList.add('active');
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
            <div style="width:24px;height:24px;border-radius:50%;background:${c.color};color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;flex-shrink:0">${i+1}</div>
            <span style="font-size:13.5px;font-weight:600;color:${c.tc||c.color}">${f.fase}</span>
          </div>
          <span style="font-size:12px;color:${c.tc||c.color};font-weight:500"><i class="ti ti-clock"></i> ${f.tiempo}</span>
        </div>
        <div class="seq-body" style="background:#fff">
          <div class="seq-desc" style="font-size:13.5px;color:var(--text2)">${f.desc}</div>
          ${f.rol ? `<div class="seq-rol" style="color:var(--muted);font-size:12px;margin-top:4px"><i class="ti ti-user"></i> Rol: ${f.rol}</div>` : ''}
        </div>
      </div>`).join('');
  }
  if (tab === 'actividades') {
    document.getElementById('cse-actividades').innerHTML = (c.actividades||[]).map(n => `
      <div class="nivel-card" style="box-shadow:var(--shadow-sm);border-radius:12px">
        <div class="nivel-head" style="background:${n.bg};color:${n.tc};font-weight:600">${n.nivel}</div>
        <ul class="nivel-body" style="background:#fff">
          ${(n.items||[]).map(it => `<li style="font-size:13px;color:var(--text2);margin-bottom:.5rem">${it}</li>`).join('')}
        </ul>
      </div>`).join('');
  }
  if (tab === 'rubrica') {
    document.getElementById('cse-rubrica').innerHTML = `
      <div class="rubrica-wrap">
        <table style="background:#fff">
          <thead><tr style="background:${c.bg}">
            <th style="color:${c.tc||c.color};font-size:12px">Criterio</th>
            <th style="color:${c.tc||c.color};font-size:12px">1. Explorando</th>
            <th style="color:${c.tc||c.color};font-size:12px">2. Comprendiendo</th>
            <th style="color:${c.tc||c.color};font-size:12px">3. Aplicando</th>
            <th style="color:${c.tc||c.color};font-size:12px">4. Liderando</th>
          </tr></thead>
          <tbody>${(c.rubrica||[]).map(r => `<tr>
            <td style="font-weight:600;font-size:12.5px">${r.criterio}</td>
            ${(r.d||[]).map(desc => `<td style="font-size:12px;color:var(--text2)">${desc}</td>`).join('')}
          </tr>`).join('')}</tbody>
        </table>
      </div>`;
  }
  if (tab === 'guia' && c.guia) {
    document.getElementById('cse-guia').innerHTML = `
      <div class="guia-box" style="background:var(--bg2);border-color:${c.color};color:${c.color}">
        <div class="guia-title" style="font-weight:700">Propósito Formativo</div>
        <div class="guia-text" style="color:var(--text);font-size:13.5px">${c.guia.prop||''}</div>
      </div>
      <div style="border:1px solid var(--border);border-radius:10px;overflow:hidden;margin-bottom:1rem;box-shadow:var(--shadow-sm)">
        <div style="padding:.65rem 1rem;background:#FEF2F2;border-bottom:1px solid var(--border)">
          <span style="font-size:13px;font-weight:600;color:#991B1B"><i class="ti ti-alert-triangle-filled"></i> Alertas Pedagógicas</span>
        </div>
        <div style="padding:.75rem 1rem;background:#fff">
          ${(c.guia.adv||[]).map(a => `<div class="warn-item" style="font-size:13px;color:var(--text2)">⚠ ${a}</div>`).join('')}
        </div>
      </div>
      <div class="guia-box" style="background:${c.bg};border-color:${c.color};color:${c.tc||c.color}">
        <div class="guia-title" style="font-weight:700"><i class="ti ti-flag-filled"></i> Cierre</div>
        <div class="guia-text" style="font-size:13.5px">${c.guia.cierre||''}</div>
      </div>`;
  }
}

/* ══════════════════════════
   PROGRESO Y LOCALSTORAGE
══════════════════════════ */
const PROG_KEY = 'cfe_dse_progress_v3_2026';
const LAST_KEY = 'cfe_dse_last_v3_2026';
const REF_PREFIX = 'ref_';
const AE_PREFIX  = 'ae_';

function getProgress() {
  try { return JSON.parse(localStorage.getItem(PROG_KEY)) || {}; } catch(e) { return {}; }
}
function saveProgress(p) {
  try { localStorage.setItem(PROG_KEY, JSON.stringify(p)); } catch(e){}
}
function saveLastPos(mi, si) {
  try { localStorage.setItem(LAST_KEY, JSON.stringify({ modIdx:mi, sesIdx:si })); } catch(e){}
}
function sesKey(mi, si)  { return mi + '_' + si; }
function isDone(mi, si)  { return !!getProgress()[sesKey(mi,si)]; }
function countDone() {
  const p = getProgress();
  return Object.keys(p).filter(k => p[k]).length;
}
function countModDone(mi) {
  const m = MODULOS[mi];
  return (m.sesiones||[]).filter((_,i) => isDone(mi,i)).length;
}

function toggleDone() {
  const p   = getProgress();
  const key = sesKey(curModIdx, curSesIdx);
  p[key]    = !p[key];
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
  if (txt) txt.textContent = done ? 'Sesión completada ✓ — Clic para revertir' : 'Marcar sesión como completada';
}

function updateProgressUI() {
  const done  = countDone();
  const total = totalSessions();
  const pct   = total ? Math.round(done / total * 100) : 0;

  const heroEl = document.getElementById('progress-hero');
  if (heroEl) {
    heroEl.style.display = done > 0 ? 'block' : 'none';
    const pctEl = document.getElementById('hero-pct');
    const barEl = document.getElementById('hero-bar');
    const subEl = document.getElementById('hero-sub-txt');
    if (pctEl) pctEl.textContent = pct + '%';
    if (barEl) barEl.style.width = pct + '%';
    if (subEl) subEl.textContent = done + ' de ' + total + ' sesiones completadas';
    const rb = document.getElementById('resume-btn');
    if (rb) rb.style.display = done < total ? 'flex' : 'none';
  }
  const topProg = document.getElementById('topbar-prog');
  if (topProg) {
    topProg.style.display = done > 0 ? 'flex' : 'none';
    const tpt = document.getElementById('topbar-prog-txt');
    const tpf = document.getElementById('topbar-prog-fill');
    if (tpt) tpt.textContent = pct + '%';
    if (tpf) tpf.style.width = pct + '%';
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

/* ══════════════════════════
   DIARIO PEDAGÓGICO
══════════════════════════ */
function saveReflexion() {
  const el = document.getElementById('reflexion-input');
  if (!el || !el.value.trim()) return;
  const key  = REF_PREFIX + curModIdx + '_' + curSesIdx;
  const mKey = 'diario_meta_' + curModIdx + '_' + curSesIdx;
  const m    = MODULOS[curModIdx];
  const s    = m.sesiones[curSesIdx];
  localStorage.setItem(key, el.value.trim());
  localStorage.setItem(mKey, JSON.stringify({
    modTitle : m.num + ' — ' + (m.titulo || m.title),
    modColor : m.color,
    sesTitle : s.titulo || s.title,
    date     : new Date().toLocaleDateString('es-CO', { day:'numeric', month:'long', year:'numeric' })
  }));
  const ind = document.getElementById('reflexion-saved');
  if (ind) {
    ind.style.display = 'flex';
    setTimeout(() => { ind.style.display = 'none'; }, 3000);
  }
}

function setAE(field, val, btn) {
  const key = AE_PREFIX + curModIdx + '_' + curSesIdx;
  localStorage.setItem(key, JSON.stringify({ [field]: val }));
  const m    = MODULOS[curModIdx];
  const wrap = document.getElementById('ae-' + field);
  if (!wrap) return;
  wrap.querySelectorAll('.scale-btn').forEach(b => {
    b.classList.remove('selected');
    b.style.background = b.style.borderColor = b.style.color = '';
  });
  btn.classList.add('selected');
  btn.style.background  = m.color;
  btn.style.borderColor = m.color;
  btn.style.color       = '#fff';
}

function renderDiario() {
  const container = document.getElementById('diario-entries');
  const emptyEl   = document.getElementById('diario-empty');
  const clearBtn  = document.getElementById('diario-clear-btn');
  if (!container) return;

  const entries = [];
  MODULOS.forEach((m, mi) => {
    (m.sesiones||[]).forEach((s, si) => {
      const ref = localStorage.getItem(REF_PREFIX + mi + '_' + si);
      if (!ref) return;
      const meta = JSON.parse(localStorage.getItem('diario_meta_' + mi + '_' + si) || '{}');
      const ae   = JSON.parse(localStorage.getItem(AE_PREFIX + mi + '_' + si) || '{}');
      entries.push({ ref, meta, ae });
    });
  });

  if (!entries.length) {
    container.innerHTML = '';
    if (emptyEl) emptyEl.style.display = 'block';
    if (clearBtn) clearBtn.style.display = 'none';
    return;
  }
  if (emptyEl) emptyEl.style.display = 'none';
  if (clearBtn) clearBtn.style.display = 'inline-flex';

  container.innerHTML = entries.map(e => `
    <div class="diario-entry" style="border-left:4px solid ${e.meta.modColor||'var(--verde)'};background:#fff;margin-bottom:1rem;border-radius:8px;box-shadow:var(--shadow-sm);padding:1.25rem">
      <div class="diario-entry-date"><i class="ti ti-calendar"></i> ${e.meta.date || '—'}</div>
      <div class="diario-entry-mod" style="color:${e.meta.modColor||'var(--verde)'};font-weight:600;font-size:13px;margin:4px 0">${e.meta.modTitle} › ${e.meta.sesTitle}</div>
      <div class="diario-entry-txt">"${e.ref}"</div>
      ${e.ae.comprension ? `<div style="margin-top:.5rem"><span style="font-size:11px;background:var(--bg2);padding:3px 9px;border-radius:99px;color:var(--text);font-weight:600">Nivel ${e.ae.comprension}/4</span></div>` : ''}
    </div>`).join('');
}

function clearDiario() {
  if (!confirm('¿Borrar todas tus reflexiones del diario? Esta acción no se puede deshacer.')) return;
  MODULOS.forEach((m, mi) => {
    (m.sesiones||[]).forEach((_, si) => {
      localStorage.removeItem(REF_PREFIX + mi + '_' + si);
      localStorage.removeItem(AE_PREFIX + mi + '_' + si);
      localStorage.removeItem('diario_meta_' + mi + '_' + si);
    });
  });
  renderDiario();
  updateProgressUI();
}
