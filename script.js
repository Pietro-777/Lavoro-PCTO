/* ═══════════════════════════════════════════════════════════════
   FSL — V ITIA C · Panetti-Pitagora — LOGICA DEL SITO
   ═══════════════════════════════════════════════════════════════ */

const CATEGORIE = {
  tech:   { label: 'Informatica / Tecnica',  colore: '#6C63FF', sfondo: 'rgba(108,99,255,0.12)',  testo: '#b0abff' },
  orient: { label: 'Orientamento',           colore: '#00C896', sfondo: 'rgba(0,200,150,0.12)',   testo: '#5eebc8' },
  soft:   { label: 'Soft Skills / Business', colore: '#FF6B4A', sfondo: 'rgba(255,107,74,0.12)',  testo: '#ffb09e' },
  safety: { label: 'Sicurezza / Normativa',  colore: '#3B9EFF', sfondo: 'rgba(59,158,255,0.12)',  testo: '#90c8ff' },
  media:  { label: 'Media / Comunicazione',  colore: '#A8E063', sfondo: 'rgba(168,224,99,0.12)',  testo: '#c6ef87' },
};

const DATI = [
  {
    anno: '2023/24',
    classe: 'Classe III',
    attivita: [
      {
        org: 'A.N.FO.S.',
        titolo: 'Sicurezza sui luoghi di lavoro',
        tipo: 'safety',
        modalita: 'Online',
        ore: 4,
        logo: '⚠️',
        logoColore: '#1c2030',
        sito: 'https://www.anfos.it',
        attestato: null,
        desc: 'Formazione generale in materia di Salute e Sicurezza sul Lavoro (PCTO). Completato il 06-11-2023.',
        utilita: 'Ho acquisito le basi della normativa D.Lgs. 81/2008 sulla sicurezza nei luoghi di lavoro: valutazione dei rischi, dispositivi di protezione individuelle, procedure di emergenza. Conoscenze fondamentali per qualsiasi futuro contesto lavorativo.'
      },
      {
        org: 'IBM SkillsBuild',
        titolo: 'Web Development Fundamentals',
        tipo: 'tech',
        modalita: 'Online',
        ore: null,
        logo: 'IBM',
        logoColore: '#1a1a2e',
        sito: 'https://skillsbuild.org',
        attestato: null,
        desc: 'Badge ufficiale IBM sulle fondamenta dello sviluppo web. Rilasciato il 31 Gennaio 2024.',
        utilita: 'Il corso ha consolidato la mia comprensione dell\'architettura web: HTTP, client-server, HTML semantico, e i fondamenti di CSS e JavaScript. Il badge IBM è una certificazione riconosciuta a livello internazionale.'
      },
      {
        org: 'IBM SkillsBuild',
        titolo: 'Learn JavaScript Tutorial',
        tipo: 'tech',
        modalita: 'Online',
        ore: 12,
        logo: 'IBM',
        logoColore: '#1a1a2e',
        sito: 'https://skillsbuild.org',
        attestato: null,
        desc: 'Corso in collaborazione con w3schools. Completato il 27 Maggio 2024.',
        utilita: 'Approfondimento di JavaScript: variabili, funzioni, DOM manipulation, eventi e async/await. Fondamentale per tutti i progetti web successivi, incluso il progetto "Agora" in Laravel.'
      },
      {
        org: 'IBM SkillsBuild',
        titolo: 'Build Your First Web Pages (HTML/CSS)',
        tipo: 'tech',
        modalita: 'Online',
        ore: 14,
        logo: 'IBM',
        logoColore: '#1a1a2e',
        sito: 'https://skillsbuild.org',
        attestato: null,
        desc: 'Corso in collaborazione con openclassrooms. Completato il 30 Maggio 2024.',
        utilita: 'Ho imparato a strutturare pagine web accessibili e semantiche con HTML5, a stilizzarle con CSS3 (flexbox, grid, variabili CSS). Il corso ha posto le basi per tutto il mio lavoro frontend successivo.'
      },
      {
        org: 'Sprint School',
        titolo: 'Autoimprenditorialità',
        tipo: 'soft',
        modalita: 'Misto',
        ore: 15,
        logo: '🚀',
        logoColore: '#1f1218',
        attestato: null,
        desc: 'Sviluppo di idee imprenditoriali, creazione di startup e competizione finale. Focus su comunicazione, diritto e soft skills.',
        utilita: 'Ho sviluppato capacità di pensiero imprenditoriale, business model canvas, presentazione in pubblico e lavoro in team. Esperienza preziosa per capire come transformar un\'idea tecnica in un prodotto vendibile.'
      }
    ]
  },
  {
    anno: '2024/25',
    classe: 'Classe IV',
    attivita: [
      {
        org: 'LV8 / Vodafone',
        titolo: 'Traveler, Newbie & Gamer Badges',
        tipo: 'tech',
        modalita: 'Online',
        ore: 8,
        logo: 'LV8',
        logoColore: '#1a0a1f',
        sito: null,
        attestato: null,
        desc: 'Badge ottenuti: Traveler (11 dic 2024), Newbie (8 gen 2025) e Gamer (13 gen 2025).',
        utilita: 'Piattaforma gamificata per lo sviluppo di competenze digitali trasversali. Ho completato percorsi su cybersecurity, digital mindset e competenze future del mercato del lavoro tecnologico.'
      },
      {
        org: 'Accenture JobLab',
        titolo: 'Digital – Sviluppo WEB',
        tipo: 'tech',
        modalita: 'Misto',
        ore: 20,
        logo: 'ACC',
        logoColore: '#0a0f1e',
        sito: 'https://www.accenture.com/it-it',
        attestato: null,
        desc: 'Percorso Job Lab Smart Education 2024/2025 completato con successo il 24 Febbraio 2025.',
        utilita: 'Formazione professionale su sviluppo web moderno con mentorship di professionisti Accenture. Ho lavorato su progetti pratici, imparando a lavorare con metodologie agile e a presentare risultati a un pubblico aziendale.'
      },
      {
        org: 'Mermec / AngelStar',
        titolo: 'Orientamento post-scolastico',
        tipo: 'orient',
        modalita: 'Presenza',
        ore: 2,
        logo: 'MRM',
        logoColore: '#0f1a10',
        sito: 'https://www.mermec.com',
        attestato: null,
        desc: 'Presentazione joint venture internazionale specializzata in segnalamento ferroviario ERTMS.',
        utilita: 'Scoperta di come l\'informatica si applica in settori industriali critici come quello ferroviario. Ho visto concretamente come sistemi embedded e software di controllo vengono impiegati in infrastrutture reali.'
      },
      {
        org: 'Apulia Digital',
        titolo: 'AI nella comunicazione',
        tipo: 'media',
        modalita: 'Presenza',
        ore: 16,
        logo: 'APD',
        logoColore: '#0f1a0a',
        sito: null,
        attestato: null,
        desc: 'Lezioni frontali e applicazioni pratiche dell\'Intelligenza Artificiale.',
        utilita: 'Introduzione pratica all\'IA generativa, AI per la produzione di contenuti digitali, etica dell\'IA e impatto sulla comunicazione professionale e giornalistica. Competenza sempre più richiesta nel settore tech.'
      }
    ]
  },
  {
    anno: '2025/26',
    classe: 'Classe V',
    attivita: [
      {
        org: 'Accenture JobLab',
        titolo: 'Digital – Sviluppo Web',
        tipo: 'tech',
        modalita: 'Misto',
        ore: 20,
        logo: 'ACC',
        logoColore: '#0a0f1e',
        sito: 'https://www.accenture.com/it-it',
        attestato: null,
        desc: 'Percorso Job Lab Smart Education 2025/2026 completato con successo il 18 Marzo 2026.',
        utilita: 'Secondo anno del percorso Accenture. Approfondimento su architetture frontend moderne, accessibilità web, performance e collaborazione in team di sviluppo con metodologie professionali.'
      },
      {
        org: 'Cisco Networking Academy',
        titolo: 'IT Essentials 7',
        tipo: 'tech',
        modalita: 'Presenza',
        ore: null,
        logo: 'CSCO',
        logoColore: '#0a0f1e',
        sito: 'https://www.netacad.com',
        attestato: null,
        desc: 'Certificazione Cisco IT Essentials completata presso l\'I.T.T. Panetti Pitagora il 14 Maggio 2026.',
        utilita: 'Certificazione internazionale sull\'hardware PC, sistemi operativi, reti locali, troubleshooting e sicurezza informatica. Riconosciuta globalmente come base per qualsiasi carriera IT.'
      },
      {
        org: 'Open Fiber / ELIS',
        titolo: 'Open Day Open Fiber',
        tipo: 'orient',
        modalita: 'Online',
        ore: 2,
        logo: 'OF',
        logoColore: '#0a1a0f',
        sito: 'https://openfiber.it',
        attestato: null,
        desc: 'Webinar sulle professioni, analisi CV e simulazione colloquio selettivo.',
        utilita: 'Ho imparato come costruire un CV efficace per il settore tech, come affrontare un colloquio selettivo aziendale e quali profili professionali cerca oggi un\'azienda come Open Fiber nel mercato delle telecomunicazioni.'
      },
      {
        org: 'AsterPuglia',
        titolo: 'OrientaPuglia – X Edizione',
        tipo: 'orient',
        modalita: 'Presenza',
        ore: 5,
        logo: 'AST',
        logoColore: '#101010',
        sito: 'https://www.asterpuglia.it',
        attestato: null,
        desc: 'Fiera orientamento universitario e professionale con i principali atenei italiani ed esteri.',
        utilita: 'Ho esplorato le offerte formative di oltre 20 atenei italiani e stranieri. Ho raccolto informazioni su corsi di laurea in Informatica, Ingegneria del Software e Cybersecurity, confrontando sbocchi lavorativi e requisiti di ammissione.'
      },
      {
        org: 'Fondazione Megamark',
        titolo: 'Il Futuro ti assomiglia',
        tipo: 'soft',
        modalita: 'Presenza',
        ore: 5,
        logo: 'MK',
        logoColore: '#1a0a08',
        sito: null,
        attestato: null,
        desc: 'Seminario su autostima, gestione dello stress e orientamento.',
        utilita: 'Laboratori pratici sulla gestione dello stress durante esami e colloqui, tecniche di comunicazione assertiva e costruzione dell\'autostima professionale. Competenze trasversali essenziali per il mondo del lavoro.'
      },
      {
        org: 'Campus Bari',
        titolo: 'Salone dello Studente',
        tipo: 'orient',
        modalita: 'Presenza',
        ore: 4,
        logo: 'CB',
        logoColore: '#0a0a1a',
        sito: 'https://www.salonedellostudente.it',
        attestato: null,
        desc: 'Visita guidata, workshop e colloqui aziendali presso la Fiera del Levante di Bari.',
        utilita: 'Partecipazione a workshop aziendali e colloqui informativi con recruiter di aziende tech. Ho potuto testare le mie capacità di presentazione e confrontarmi con professionisti del settore digitale.'
      },
      {
        org: 'Politecnico di Bari',
        titolo: 'Orientamento PoliBa',
        tipo: 'orient',
        modalita: 'Presenza',
        ore: 2,
        logo: 'PB',
        logoColore: '#0a0f1a',
        sito: 'https://www.poliba.it',
        attestato: null,
        desc: 'Presentazione dipartimenti, corsi di laurea e servizi del Politecnico di Bari.',
        utilita: 'Tour guidato del campus, incontro con docenti e studenti dei corsi di Ingegneria Informatica. Ho confrontato il piano di studi con le mie aspettative e interesse verso specializzazioni in AI e sistemi distribuiti.'
      },
      {
        org: 'Auriga SpA',
        titolo: 'Visita aziendale Auriga',
        tipo: 'orient',
        modalita: 'Presenza',
        ore: 5,
        logo: 'AUR',
        logoColore: '#0a0a10',
        sito: 'https://www.aurigaspa.com',
        attestato: null,
        desc: 'Visita alla sede barese del leader italiano nel software bancario omnicanale.',
        utilita: 'Ho scoperto come funziona una software house italiana di eccellenza: dal ciclo di sviluppo agile agli stack tecnologici usati (.NET, Angular, Oracle), fino ai ruoli aziendali — dev, QA, DevOps, product owner. Visita molto ispiratrice per capire il lavoro reale di uno sviluppatore.'
      },
      {
        org: 'CivicaMente / Oracle',
        titolo: 'Oracle Web App Academy',
        tipo: 'tech',
        modalita: 'Online',
        ore: 16,
        logo: 'ORC',
        logoColore: '#1a0808',
        sito: 'https://www.oracle.com/it/education/',
        attestato: null,
        desc: 'Formazione su Database Oracle e Oracle APEX: SQL, query e sviluppo di applicativi web.',
        utilita: 'Ho imparato SQL avanzato su Oracle Database (join, subquery, procedure, trigger), e ho sviluppato applicazioni web con Oracle APEX senza quasi scrivere codice. Certificazione Oracle è tra le più riconosciute nel settore enterprise.'
      },
      {
        org: 'CivicaMente / Leonardo',
        titolo: 'In volo con Leonardo',
        tipo: 'tech',
        modalita: 'Online',
        ore: 25,
        logo: 'LEO',
        logoColore: '#0a0a1a',
        sito: 'https://www.leonardocompany.com',
        attestato: null,
        desc: 'E-learning + Project Work focalizzato sul settore aerospaziale e l\'innovazione tecnologica.',
        utilita: 'Il corso più lungo del triennio: e-learning su sistemi aerospaziali, IoT industriale, cybersecurity embedded e project work finale presentato ai referenti Leonardo. Ho acquisito visione sistemica su come l\'informatica si integra in sistemi complessi mission-critical.'
      },
      {
        org: 'Forze Armate (GPOI)',
        titolo: 'Fidelis – Carriere militari',
        tipo: 'orient',
        modalita: 'Presenza',
        ore: 1,
        logo: '🎖️',
        logoColore: '#10100a',
        sito: null,
        attestato: null,
        desc: 'Presentazione delle prospettive e delle modalità di carriera nelle Forze Armate italiane.',
        utilita: 'Presentazione delle carriere nelle Forze Armate con focus sui ruoli tecnico-informatici (cyber defence, telecomunicazioni, sistemi di comando). Utile per valutare percorsi alternativi all\'università tradizionale.'
      }
    ]
  }
];

/* ── ICONE SVG ───────────────────────────────────────────────── */
const iconCalendario = `<svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`;
const iconTask       = `<svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
const iconOrologio  = `<svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
const iconBack      = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>`;
const iconLink      = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
const iconDownload  = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;

/* ── STATISTICHE ─────────────────────────────────────────────── */
const tutteLeAttivita = DATI.flatMap(a => a.attivita);
const totaleOre       = tutteLeAttivita.reduce((s, a) => s + (typeof a.ore === 'number' ? a.ore : 0), 0);
const totaleAttivita  = tutteLeAttivita.length;

document.getElementById('stats').innerHTML = `
  <div class="stat-box reveal">${iconCalendario}<div class="stat-numero">3</div><div class="stat-label">anni del triennio</div></div>
  <div class="stat-box reveal">${iconTask}<div class="stat-numero">${totaleAttivita}</div><div class="stat-label">attività svolte</div></div>
  <div class="stat-box reveal">${iconOrologio}<div class="stat-numero">${totaleOre}+</div><div class="stat-label">ore certificate</div></div>
`;

/* ── LEGENDA ─────────────────────────────────────────────────── */
const legendaEl = document.getElementById('legenda');
Object.entries(CATEGORIE).forEach(([, cat]) => {
  const item = document.createElement('div');
  item.className = 'leg-item';
  item.innerHTML = `<div class="leg-dot" style="background:${cat.colore}; box-shadow:0 0 6px ${cat.colore}"></div>${cat.label}`;
  legendaEl.appendChild(item);
});

/* ── FILTRI ──────────────────────────────────────────────────── */
let filtroAttivo = 'all';
const elenciFiltri = [
  { chiave: 'all',    etichetta: 'Tutte le attività' },
  { chiave: 'tech',   etichetta: 'Informatica' },
  { chiave: 'orient', etichetta: 'Orientamento' },
  { chiave: 'soft',   etichetta: 'Soft Skills' },
  { chiave: 'safety', etichetta: 'Sicurezza' },
  { chiave: 'media',  etichetta: 'Media / IA' },
];

function renderFiltri() {
  let html = '';
  elenciFiltri.forEach(f => {
    const attivo = filtroAttivo === f.chiave;
    let stileExtra = '';
    if (attivo && f.chiave !== 'all') {
      stileExtra = `border-color:${CATEGORIE[f.chiave].colore}40; box-shadow:0 0 12px ${CATEGORIE[f.chiave].colore}20;`;
    }
    html += `<button class="btn-filtro ${attivo ? 'attivo' : ''}" style="${stileExtra}" onclick="impostaFiltro('${f.chiave}')">${f.etichetta}</button>`;
  });
  document.getElementById('filtri').innerHTML = html;
}

function impostaFiltro(chiave) {
  filtroAttivo = chiave;
  renderFiltri();
  renderTimeline();
}

/* ── OSSERVATORE PER ANIMAZIONI A SCORRIMENTO ────────────────── */
const osservatore = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visibile');
      osservatore.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

function osservaElementi(selettore, contesto = document) {
  contesto.querySelectorAll(selettore).forEach(el => osservatore.observe(el));
}

/* ── TIMELINE ────────────────────────────────────────────────── */
function renderTimeline() {
  const contenitore = document.getElementById('timeline');
  contenitore.innerHTML = '';

  DATI.forEach(annoObj => {
    const attivitaFiltrate = filtroAttivo === 'all'
      ? annoObj.attivita
      : annoObj.attivita.filter(a => a.tipo === filtroAttivo);
    if (attivitaFiltrate.length === 0) return;

    const conteggio = {};
    attivitaFiltrate.forEach(a => conteggio[a.tipo] = (conteggio[a.tipo] || 0) + 1);
    const tipoDom  = Object.entries(conteggio).sort((a, b) => b[1] - a[1])[0][0];
    const catDom   = CATEGORIE[tipoDom];
    const oreTotAnno = annoObj.attivita.reduce((s, a) => s + (typeof a.ore === 'number' ? a.ore : 0), 0);

    const blocco = document.createElement('div');
    blocco.className = 'anno-block reveal';
    blocco.innerHTML = `
      <div class="anno-header">
        <div class="anno-pill" style="background:${catDom.sfondo}; color:${catDom.testo}; border-color:${catDom.colore}30;">
          ${annoObj.classe} &nbsp;·&nbsp; ${annoObj.anno}
        </div>
        <div class="anno-linea"></div>
        <span class="anno-meta">${oreTotAnno}h &nbsp;·&nbsp; ${annoObj.attivita.length} attività</span>
      </div>
      <div class="cards-grid"></div>
    `;
    contenitore.appendChild(blocco);
    const grid = blocco.querySelector('.cards-grid');

    attivitaFiltrate.forEach((att, idx) => {
      const cat  = CATEGORIE[att.tipo];
      const card = document.createElement('button');
      card.className   = 'card reveal';
      card.style.transitionDelay = `${Math.min(idx * 60, 360)}ms`;
      card.dataset.tipo = att.tipo;
      card.innerHTML = `
        <div class="card-barra" style="background:${cat.colore};"></div>
        <div class="card-tag" style="color:${cat.colore};">
          <div class="tag-dot" style="background:${cat.colore}; box-shadow:0 0 6px ${cat.colore};"></div>
          ${att.modalita}
        </div>
        <div class="card-titolo">${att.titolo}</div>
        <div class="card-org">${att.org}</div>
        <div class="card-footer">
          <span class="badge-ore" style="background:${cat.sfondo}; color:${cat.testo};">
            ${att.ore !== null ? att.ore + (typeof att.ore === 'number' ? 'h' : '') : 'Var.'}
          </span>
          <span class="card-arrow">›</span>
        </div>
      `;
      card.addEventListener('click', () => apriDettaglio(att, annoObj));
      grid.appendChild(card);
    });
  });

  osservaElementi('.reveal', contenitore);
}

/* ── DETTAGLIO FULLSCREEN ────────────────────────────────────── */
function apriDettaglio(att, annoObj) {
  const cat     = CATEGORIE[att.tipo];
  const overlay = document.getElementById('dettaglio-overlay');
  const inner   = document.getElementById('dettaglio-inner');

  const logoHTML = att.logo
    ? `<div class="det-logo" style="background:${att.logoColore || '#16161f'}; color:${cat.colore}; border-color:${cat.colore}30; font-size:${att.logo.length <= 2 ? '26px' : '14px'};">${att.logo}</div>`
    : `<div class="det-logo" style="background:${cat.sfondo}; color:${cat.testo};">${att.org.substring(0,3).toUpperCase()}</div>`;

  const btnSito = att.sito
    ? `<a href="${att.sito}" target="_blank" rel="noopener" class="det-btn det-btn-primario">${iconLink} Visita il sito</a>`
    : '';

  const btnAttestato = att.attestato
    ? `<a href="${att.attestato}" download class="det-btn det-btn-secondario">${iconDownload} Scarica attestato</a>`
    : '';

  inner.innerHTML = `
    <button class="det-back" onclick="chiudiDettaglio()">${iconBack} Torna alla timeline</button>
    <div class="det-header">
      <div class="det-logo-row">
        ${logoHTML}
        <div>
          <div class="det-kicker">Organizzazione</div>
          <div class="det-org">${att.org}</div>
        </div>
      </div>
      <h1 class="det-titolo">${att.titolo}</h1>
      <div class="det-categoria-badge" style="background:${cat.sfondo}; color:${cat.testo}; border:1px solid ${cat.colore}30;">
        <div style="width:8px;height:8px;border-radius:50%;background:${cat.colore};box-shadow:0 0 6px ${cat.colore};"></div>
        ${cat.label}
      </div>
    </div>
    <div class="det-info-grid">
      <div class="det-info-box">
        <div class="etichetta">Anno / Classe</div>
        <div class="valore" style="font-size:14px; font-weight:600;">${annoObj.anno} · ${annoObj.classe}</div>
      </div>
      <div class="det-info-box">
        <div class="etichetta">Modalità</div>
        <div class="valore" style="font-size:14px; font-weight:600;">${att.modalita}</div>
      </div>
      <div class="det-info-box">
        <div class="etichetta">Ore FSL</div>
        <div class="valore" style="color:${cat.colore};">
          ${att.ore !== null ? att.ore + (typeof att.ore === 'number' ? 'h' : '') : 'Var.'}
        </div>
      </div>
    </div>
    <p class="det-desc-titolo">Descrizione</p>
    <div class="det-desc" style="--accent-colore:${cat.colore};">${att.desc}</div>
    <div class="det-utilita">
      <h4>A cosa è servito / Cosa ho imparato</h4>
      <p>${att.utilita || 'Nessuna nota aggiuntiva.'}</p>
    </div>
    <div class="det-azioni">
      ${btnSito}
      ${btnAttestato}
    </div>
  `;

  overlay.classList.add('aperto');
  document.body.style.overflow = 'hidden';
  inner.scrollTop = 0;
}

function chiudiDettaglio() {
  document.getElementById('dettaglio-overlay').classList.remove('aperto');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') chiudiDettaglio(); });

/* ── PANNELLO PROFILO ────────────────────────────────────────── */
function toggleProfilo() {
  const pannello = document.getElementById('pannello-profilo');
  const overlay  = document.getElementById('overlay-profilo');
  const aperto   = pannello.classList.contains('aperto');
  pannello.classList.toggle('aperto', !aperto);
  overlay.classList.toggle('aperto', !aperto);
  document.body.style.overflow = aperto ? '' : 'hidden';
}

/* ── INIT ────────────────────────────────────────────────────── */
renderFiltri();
renderTimeline();
osservaElementi('#stats .reveal');