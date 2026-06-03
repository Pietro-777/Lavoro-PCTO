/*
 * DATI E CATEGORIE
 */
const CATEGORIE = {
  tech:   { label: 'Informatica / Tecnica', colore: '#534AB7', sfondo: '#EEEDFE', testo: '#3C3489' },
  orient: { label: 'Orientamento',          colore: '#0F6E56', sfondo: '#E1F5EE', testo: '#085041' },
  soft:   { label: 'Soft Skills / Business', colore: '#993C1D', sfondo: '#FAECE7', testo: '#712B13' },
  safety: { label: 'Sicurezza / Normativa',  colore: '#185FA5', sfondo: '#E6F1FB', testo: '#0C447C' },
  media:  { label: 'Media / Comunicazione',  colore: '#3B6D11', sfondo: '#EAF3DE', testo: '#27500A' },
};

const DATI = [
  {
    anno: '2023/24',
    classe: 'Classe III',
    attivita: [
      { 
        org: 'ANFOS', 
        titolo: 'Sicurezza sui luoghi di lavoro', 
        tipo: 'safety', 
        modalita: 'Online', 
        ore: 4, 
        desc: 'Percorso e-learning con test finale e attestato di frequenza. Contenuti normativi con riferimento al D.Lgs 81/08.',
        pdf: 'attestato_2.pdf' //
      },
      { 
        org: 'IBM SkillsBuild', 
        titolo: 'Web Development Fundamentals', 
        tipo: 'tech', 
        modalita: 'Online', 
        ore: 'Var.', 
        desc: 'Badge ufficiale IBM sulle fondamenta dello sviluppo web. Rilasciato il 31 Gennaio 2024.',
        pdf: 'WebDevelopmentFundamentals_Badge20240201-29-fdqs14_2.pdf' //
      },
      { 
        org: 'IBM SkillsBuild', 
        titolo: 'Learn JavaScript Tutorial', 
        tipo: 'tech', 
        modalita: 'Online', 
        ore: 12, 
        desc: 'Corso completato in collaborazione con w3schools. Certificato rilasciato il 27 Maggio 2024.',
        pdf: 'SkillsBuild.pdf' // Puoi rinominare il pdf w3schools così[cite: 21]
      },
      { 
        org: 'IBM SkillsBuild', 
        titolo: 'Build Your First Web Pages (HTML/CSS)', 
        tipo: 'tech', 
        modalita: 'Online', 
        ore: 14, 
        desc: 'Corso in collaborazione con openclassrooms sulle basi di HTML5 e CSS3. Completato il 30 Maggio 2024.',
        pdf: 'SkillsBuild2_2.pdf' //[cite: 17]
      },
      { 
        org: 'IBM Italia (Open P-TECH)', 
        titolo: 'Attestato P.C.T.O. IBM Cloud', 
        tipo: 'tech', 
        modalita: 'Online', 
        ore: 13, 
        desc: 'Certificazione totale delle ore di formazione svolte sui moduli tecnologici IBM durante l\'anno scolastico.',
        pdf: 'SkillsBuild2_2.pdf' //[cite: 14]
      },
      { 
        org: 'Sprint School', 
        titolo: 'Autoimprenditorialità', 
        tipo: 'soft', 
        modalita: 'Misto', 
        ore: 15, 
        desc: 'Sviluppo di idee imprenditoriali, creazione di startup e competizione finale. Focus su comunicazione, diritto e soft skills.' 
      },
      { 
        org: 'Accenture JobLab', 
        titolo: 'JobLab – Edizione I', 
        tipo: 'tech', 
        modalita: 'Misto', 
        ore: 18, 
        desc: 'Nozioni di linguaggi web con focus su JavaScript. 2h di formazione online + 16h in presenza con tutor aziendali esperti.' 
      }
    ]
  },
  {
    anno: '2024/25',
    classe: 'Classe IV',
    attivita: [
      { 
        org: 'LV8 / Vodafone', 
        titolo: 'Next Level – Competenze digitali', 
        tipo: 'tech', 
        modalita: 'Misto', 
        ore: 8, 
        desc: 'Learning app per competenze digitali. Ottenuti i badge: Newbie (8 gen), Traveler (11 dic), Player (9 gen) e Gamer (13 gen) in linea con il DigComp 2.2.',
        pdf: 'LV8(1)_2.pdf' // Collega a uno dei tuoi PDF di LV8 (es. Traveler o Player)[cite: 11, 15, 19, 20]
      },
      { 
        org: 'Mermec / AngelStar', 
        titolo: 'Orientamento post-scolastico', 
        tipo: 'orient', 
        modalita: 'Presenza', 
        ore: 2, 
        desc: 'Presentazione joint venture internazionale specializzata in segnalamento ferroviario ERTMS.' 
      },
      { 
        org: 'Apulia Digital', 
        titolo: 'AI nella comunicazione', 
        tipo: 'media', 
        modalita: 'Presenza', 
        ore: 16, 
        desc: 'Lezioni frontali e applicazioni pratiche dell\'Intelligenza Artificiale.' 
      },
      { 
        org: 'Accenture JobLab', 
        titolo: 'JobLab – Edizione II (Smart Education)', 
        tipo: 'tech', 
        modalita: 'Misto', 
        ore: 20, 
        desc: 'Approfondimento JavaScript e sviluppo web con metodologia learning by doing. Progetto PCTO da 20 ore completato il 24 Febbraio 2025.',
        pdf: 'certificato_studente_pietrochiricallo2000@gmail.com.pdf' //
      }
    ]
  },
  {
    anno: '2025/26',
    classe: 'Classe V',
    attivita: [
      { 
        org: 'Open Fiber / ELIS', 
        titolo: 'Open Day Open Fiber', 
        tipo: 'orient', 
        modalita: 'Online', 
        ore: 2, 
        desc: 'Webinar sulle professioni, analisi CV e simulazione colloquio selettivo.' 
      },
      { 
        org: 'Mermec / AngelStar', 
        titolo: 'Orientamento post-scolastico', 
        tipo: 'orient', 
        modalita: 'Presenza', 
        ore: 2, 
        desc: 'Focus sulle posizioni lavorative disponibili per profili tecnici.' 
      },
      { 
        org: 'Mind the Web (TIM)', 
        titolo: 'Educazione ai media e IA', 
        tipo: 'media', 
        modalita: 'Online', 
        ore: 8, 
        desc: 'Bias cognitivi, disinformazione digitale, dieta mediatica nell\'era digitale.' 
      },
      { 
        org: 'AsterPuglia', 
        titolo: 'OrientaPuglia – X Edizione', 
        tipo: 'orient', 
        modalita: 'Presenza', 
        ore: 5, 
        desc: 'Fiera orientamento universitario e professionale con i principali atenei italiani ed esteri.' 
      },
      { 
        org: 'Fondazione Megamark', 
        titolo: 'Il Futuro ti assomiglia', 
        tipo: 'soft', 
        modalita: 'Presenza', 
        ore: 5, 
        desc: 'Seminario su autostima, gestione dello stress e orientamento. Relatori d\'eccezione tra cui Geopop.' 
      },
      { 
        org: 'Campus Bari', 
        titolo: 'Salone dello Studente', 
        tipo: 'orient', 
        modalita: 'Presenza', 
        ore: 4, 
        desc: 'Visita guidata, workshop e colloqui aziendali presso la Fiera del Levante di Bari.' 
      },
      { 
        org: 'Politecnico di Bari', 
        titolo: 'Orientamento PoliBa', 
        tipo: 'orient', 
        modalita: 'Presenza', 
        ore: 2, 
        desc: 'Presentazione dipartimenti, corsi di laurea e servizi del Politecnico di Bari.' 
      },
      { 
        org: 'Auriga SpA', 
        titolo: 'Visita aziendale Auriga', 
        tipo: 'orient', 
        modalita: 'Presenza', 
        ore: 5, 
        desc: 'Visita alla sede barese del leader italiano nel software bancario omnicanale, presente in oltre 60 paesi.' 
      },
      { 
        org: 'CivicaMente / Oracle', 
        titolo: 'Oracle Web App Academy', 
        tipo: 'tech', 
        modalita: 'Online', 
        ore: 16, 
        desc: 'Formazione su Database Oracle e Oracle APEX: SQL, query e sviluppo di applicativi web.' 
      },
      { 
        org: 'CivicaMente / Leonardo', 
        titolo: 'In volo con Leonardo', 
        tipo: 'tech', 
        modalita: 'Online', 
        ore: 25, 
        desc: 'E-learning + Project Work focalizzato sul settore aerospaziale e l\'innovazione tecnologica.' 
      },
      { 
        org: 'Accenture JobLab', 
        titolo: 'JobLab – Edizione III', 
        tipo: 'tech', 
        modalita: 'Misto', 
        ore: 20, 
        desc: 'Terza edizione del percorso Smart Education con focus avanzato su JavaScript, completato con successo il 18 Marzo 2026.',
        pdf: 'certificate_2.pdf' //
      },
      { 
        org: 'Cisco Networking Academy', 
        titolo: 'IT Essentials 7', 
        tipo: 'tech', 
        modalita: 'Presenza', 
        ore: 'Var.', 
        desc: 'Corso ufficiale IT Essentials completato con successo presso l\'I.T.T. Panetti Pitagora il 14 Maggio 2026.',
        pdf: 'IT_Essentials_certificate_chiricallo-pietro-panettipitagora-edu-it_3c0239a6-0fa6-4aa7-9b0a-ddcdfd79c1d8_2.pdf' //
      },
      { 
        org: 'Sprint School', 
        titolo: 'Autoimprenditorialità soft skills', 
        tipo: 'soft', 
        modalita: 'Misto', 
        ore: 6, 
        desc: 'Startup, pitch, analisi di mercato e hackathon finale. Sviluppo di team working e problem solving.' 
      },
      { 
        org: 'Forze Armate (GPOI)', 
        titolo: 'Fidelis – Carriere militari', 
        tipo: 'orient', 
        modalita: 'Presenza', 
        ore: 1, 
        desc: 'Presentazione delle prospettive e delle modalità di carriera nelle Forze Armate italiane.' 
      },
      { 
        org: 'Università eCampus', 
        titolo: 'Orientamento eCampus', 
        tipo: 'orient', 
        modalita: 'Presenza', 
        ore: 1, 
        desc: 'Presentazione dell\'offerta formativa e dei corsi di laurea dell\'università telematica eCampus.' 
      },
      { 
        org: 'Università Bona Sforza', 
        titolo: 'Orientamento Bona Sforza', 
        tipo: 'orient', 
        modalita: 'Presenza', 
        ore: 1, 
        desc: 'Presentazione dei corsi di laurea e delle opportunità dell\'Università Bona Sforza di Bari.' 
      }
    ]
  }
];

// Icone SVG per le stat-box
const iconCalendario = `<svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`;
const iconTask = `<svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
const iconOrologio = `<svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;

// ── STATISTICHE ──────────────────────────────────────────────────
let tutteLeAttivita = DATI.flatMap(anno => anno.attivita);
let totaleOre = tutteLeAttivita.reduce((somma, att) => somma + (typeof att.ore === 'number' ? att.ore : 0), 0);
let totaleAttivita = tutteLeAttivita.length;

document.getElementById('stats').innerHTML = `
  <div class="stat-box">${iconCalendario}<div class="stat-numero">3</div><div class="stat-label">anni del triennio</div></div>
  <div class="stat-box">${iconTask}<div class="stat-numero">${totaleAttivita}</div><div class="stat-label">attività svolte</div></div>
  <div class="stat-box">${iconOrologio}<div class="stat-numero">${totaleOre}+</div><div class="stat-label">ore certificate</div></div>
`;

// ── FILTRI ───────────────────────────────────────────────────────
let filtroAttivo = 'all';
const filtri = [
  { chiave: 'all',    etichetta: 'Tutte' },
  { chiave: 'tech',   etichetta: 'Informatica' },
  { chiave: 'orient', etichetta: 'Orientamento' },
  { chiave: 'soft',   etichetta: 'Soft Skills' },
  { chiave: 'safety', etichetta: 'Sicurezza' },
  { chiave: 'media',  etichetta: 'Media / IA' },
];

function renderFiltri() {
  let html = '';
  filtri.forEach(f => {
    let classeAttiva = filtroAttivo === f.chiave ? 'attivo' : '';
    let stileExtra = '';
    if (filtroAttivo === f.chiave && f.chiave !== 'all') {
       stileExtra = `color:${CATEGORIE[f.chiave].colore};`;
    }
    html += `<button class="btn-filtro ${classeAttiva}" style="${stileExtra}" onclick="impostaFiltro('${f.chiave}')">${f.etichetta}</button>`;
  });
  document.getElementById('filtri').innerHTML = html;
}

function impostaFiltro(chiave) {
  filtroAttivo = chiave;
  renderFiltri();
  renderTimeline();
}

// ── TIMELINE ─────────────────────────────────────────────────────
function renderTimeline() {
  let contenitore = document.getElementById('timeline');
  contenitore.innerHTML = '';

  DATI.forEach(annoObj => {
    let attivitaFiltrate = filtroAttivo === 'all' ? annoObj.attivita : annoObj.attivita.filter(att => att.tipo === filtroAttivo);
    if (attivitaFiltrate.length === 0) return;

    let conteggio = {};
    attivitaFiltrate.forEach(att => conteggio[att.tipo] = (conteggio[att.tipo] || 0) + 1);
    let tipoDominante = Object.entries(conteggio).sort((a, b) => b[1] - a[1])[0][0];
    let catDominante = CATEGORIE[tipoDominante];
    let oreTotaliAnno = annoObj.attivita.reduce((somma, att) => somma + (typeof att.ore === 'number' ? att.ore : 0), 0);

    let blocco = document.createElement('div');
    blocco.className = 'anno-block';
    blocco.innerHTML = `
      <div class="anno-riga">
        <div class="anno-pill" style="background:${catDominante.sfondo}; color:${catDominante.testo};">${annoObj.classe} &nbsp;·&nbsp; ${annoObj.anno}</div>
        <div class="anno-linea"></div>
        <span class="anno-ore">${oreTotaliAnno}h totali · ${annoObj.attivita.length} attività</span>
      </div>
      <div class="cards-grid"></div>
    `;
    contenitore.appendChild(blocco);
    let grid = blocco.querySelector('.cards-grid');

    attivitaFiltrate.forEach(att => {
      let cat = CATEGORIE[att.tipo];
      let card = document.createElement('button');
      card.className = 'card';
      card.innerHTML = `
        <div class="card-barra" style="background:${cat.colore};"></div>
        <div class="card-modalita" style="color:${cat.colore};">${att.modalita}</div>
        <div class="card-titolo">${att.titolo}</div>
        <div class="card-org">${att.org}</div>
        <div class="card-footer">
          <span class="badge-ore" style="background:${cat.sfondo}; color:${cat.testo};">${att.ore}${typeof att.ore === 'number' ? 'h' : ''}</span>
          <span class="card-freccia">›</span>
        </div>
      `;
      card.addEventListener('click', () => apriModal(att, annoObj));
      grid.appendChild(card);
    });
  });
}

// ── MODAL ────────────────────────────────────────────────────────
function apriModal(att, annoObj) {
  let cat = CATEGORIE[att.tipo];
  
  // Genera il markup del bottone PDF solo se il file è specificato
  let bottonePdf = '';
  if (att.pdf) {
    // Supponendo che i tuoi PDF siano dentro una cartella chiamata "pdf"
    bottonePdf = `
      <a href="pdf/${att.pdf}" target="_blank" class="modal-btn-pdf">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:8px; vertical-align:middle;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        Visualizza Attestato PDF
      </a>
    `;
  }

  document.getElementById('modal-contenuto').innerHTML = `
    <div class="modal-striscia" style="background:${cat.colore};"></div>
    <div class="modal-org">${att.org}</div>
    <div class="modal-titolo">${att.titolo}</div>
    <div class="modal-info">
      <div class="modal-riga"><span class="etichetta">Anno / Classe</span><span class="valore">${annoObj.anno} · ${annoObj.classe}</span></div>
      <div class="modal-riga"><span class="etichetta">Modalità</span><span class="valore">${att.modalita}</span></div>
      <div class="modal-riga"><span class="etichetta">Ore FSL</span><span class="valore" style="color:${cat.colore};">${att.ore}${typeof att.ore === 'number' ? 'h' : ''}</span></div>
      <div class="modal-riga"><span class="etichetta">Categoria</span><span class="valore">${cat.label}</span></div>
    </div>
    <div class="modal-desc">${att.desc}</div>
    ${bottonePdf}
  `;
  document.getElementById('modal-sfondo').classList.add('aperto');
}

function chiudiModal() { document.getElementById('modal-sfondo').classList.remove('aperto'); }
document.addEventListener('keydown', e => { if (e.key === 'Escape') chiudiModal(); });

// Inizializzazione
renderFiltri();
renderTimeline();