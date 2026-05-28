/*
 * Oggetto con i colori e le etichette di ogni categoria.
 * Lo uso ovunque nel codice invece di ripetere i colori a mano.
 */
const CATEGORIE = {
    tech:   { label: 'Informatica / Tecnica', colore: '#534AB7', sfondo: '#EEEDFE', testo: '#3C3489' },
    orient: { label: 'Orientamento',         colore: '#0F6E56', sfondo: '#E1F5EE', testo: '#085041' },
    soft:   { label: 'Soft Skills / Business', colore: '#993C1D', sfondo: '#FAECE7', testo: '#712B13' },
    safety: { label: 'Sicurezza / Normativa',  colore: '#185FA5', sfondo: '#E6F1FB', testo: '#0C447C' },
    media:  { label: 'Media / Comunicazione',  colore: '#3B6D11', sfondo: '#EAF3DE', testo: '#27500A' },
  };
  
  /*
   * Tutti i dati delle attività FSL, divisi per anno.
   */
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
          desc: 'Percorso e-learning con test finale e attestato di frequenza. Contenuti normativi con riferimento al D.Lgs 81/08.'
        },
        {
          org: 'IBM SkillBuild',
          titolo: 'Corsi online IBM',
          tipo: 'tech',
          modalita: 'Online',
          ore: 'Var.',
          desc: 'Webinar e utilizzo della piattaforma IBM per la formazione. Certificazione finale in ambito informatico.'
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
        },
      ]
    },
    {
      anno: '2024/25',
      classe: 'Classe IV',
      attivita: [
        {
          org: 'LV8 / Fondazione Vodafone',
          titolo: 'Next Level – Competenze digitali',
          tipo: 'tech',
          modalita: 'Misto',
          ore: 8,
          desc: 'Learning app per competenze digitali. Rilascio di 3 OpenBadge in linea con il quadro europeo DigComp 2.2.'
        },
        {
          org: 'Mermec / AngelStar',
          titolo: 'Orientamento post-scolastico',
          tipo: 'orient',
          modalita: 'Presenza',
          ore: 2,
          desc: 'Presentazione della joint venture internazionale specializzata in segnalamento ferroviario ERTMS in oltre 50 paesi.'
        },
        {
          org: 'Apulia Digital',
          titolo: 'AI nella comunicazione',
          tipo: 'media',
          modalita: 'Presenza',
          ore: 16,
          desc: "Lezioni frontali e applicazioni pratiche dell'Intelligenza Artificiale per gestire piattaforme che utilizzano l'IA."
        },
        {
          org: 'Accenture JobLab',
          titolo: 'JobLab – Edizione II',
          tipo: 'tech',
          modalita: 'Misto',
          ore: 18,
          desc: 'Approfondimento JavaScript e sviluppo web. 2h online + 16h in presenza con metodologia learning by doing.'
        },
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
          desc: 'Webinar sulle professioni e posizioni lavorative in Open Fiber, analisi CV efficace e simulazione colloquio selettivo.'
        },
        {
          org: 'Mermec / AngelStar',
          titolo: 'Orientamento post-scolastico',
          tipo: 'orient',
          modalita: 'Presenza',
          ore: 2,
          desc: 'Seconda presentazione del gruppo multinazionale con focus sulle posizioni lavorative disponibili per profili tecnici.'
        },
        {
          org: 'Mind the Web (TIM / IDMO)',
          titolo: 'Educazione ai media e IA',
          tipo: 'media',
          modalita: 'Online',
          ore: 8,
          desc: "Ciclo di 4 webinar su bias cognitivi, disinformazione digitale, dieta mediatica e metodo scientifico nell'era digitale."
        },
        {
          org: 'AsterPuglia',
          titolo: 'OrientaPuglia – X Edizione',
          tipo: 'orient',
          modalita: 'Presenza',
          ore: 5,
          desc: 'Fiera orientamento universitario e professionale con i principali atenei italiani ed esteri e scuole di specializzazione.'
        },
        {
          org: 'Fondazione Megamark',
          titolo: 'Il Futuro ti assomiglia',
          tipo: 'soft',
          modalita: 'Presenza',
          ore: 5,
          desc: 'Seminario su autostima, gestione dello stress e orientamento. Relatori: Bocconi, Geopop, divulgatrici scientifiche.'
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
          desc: 'Presentazione dei dipartimenti, corsi di laurea, servizi e attività extracurricolari del Politecnico di Bari.'
        },
        {
          org: 'Auriga SpA',
          titolo: 'Visita aziendale Auriga',
          tipo: 'orient',
          modalita: 'Presenza',
          ore: 5,
          desc: 'Visita alla sede barese del leader italiano nel software bancario omnicanale, presente in 60+ paesi con partnership globali.'
        },
        {
          org: 'CivicaMente / Oracle',
          titolo: 'Oracle Web App Academy',
          tipo: 'tech',
          modalita: 'Online',
          ore: 16,
          desc: 'Formazione su Database Oracle e Oracle APEX: SQL, query delle tabelle, sviluppo di applicazioni web. 16h certificate.'
        },
        {
          org: 'CivicaMente / Leonardo',
          titolo: 'In volo con Leonardo',
          tipo: 'tech',
          modalita: 'Online',
          ore: 25,
          desc: 'E-learning + Project Work sul settore aerospaziale. 6 unità + quiz + project work finale con certificazione inclusa.'
        },
        {
          org: 'Accenture JobLab',
          titolo: 'JobLab – Edizione III',
          tipo: 'tech',
          modalita: 'Misto',
          ore: 18,
          desc: 'Terza edizione del percorso con focus JavaScript. Selezionati 10 studenti meritevoli su tutta la classe.'
        },
        {
          org: 'Sprint School',
          titolo: 'Autoimprenditorialità soft skills',
          tipo: 'soft',
          modalita: 'Misto',
          ore: 6,
          desc: 'Startup, pitch, MVP, analisi di mercato, hackathon finale. Sviluppo soft skills: team working, problem solving, prioritizzazione.'
        },
        {
          org: 'Forze Armate (GPOI)',
          titolo: 'Fidelis – Carriere militari',
          tipo: 'orient',
          modalita: 'Presenza',
          ore: 1,
          desc: 'Presentazione delle possibili carriere nelle Forze armate italiane per orientamento post-scolastico.'
        },
        {
          org: 'Università eCampus',
          titolo: 'Orientamento eCampus',
          tipo: 'orient',
          modalita: 'Presenza',
          ore: 1,
          desc: "Presentazione dei corsi di laurea dell'università telematica eCampus."
        },
        {
          org: 'Università Bona Sforza',
          titolo: 'Orientamento Bona Sforza',
          tipo: 'orient',
          modalita: 'Presenza',
          ore: 1,
          desc: "Presentazione dei corsi di laurea dell'Università Bona Sforza di Bari."
        },
      ]
    }
  ];
  
  // ── STATISTICHE ──────────────────────────────────────────────────
  
  let tutteLeAttivita = DATI.flatMap(anno => anno.attivita);
  
  let totaleOre = tutteLeAttivita.reduce(function(somma, att) {
    if (typeof att.ore === 'number') {
      return somma + att.ore;
    }
    return somma;
  }, 0);
  
  let totaleAttivita = tutteLeAttivita.length;
  
  document.getElementById('stats').innerHTML = `
    <div class="stat-box">
    <div class="stat-numero">3</div>
    <div class="stat-label">anni del triennio</div>
    </div>
    <div class="stat-box">
      <div class="stat-numero">${totaleAttivita}</div>
      <div class="stat-label">attività svolte</div>
    </div>
    <div class="stat-box">
      <div class="stat-numero">${totaleOre}+</div>
      <div class="stat-label">ore certificate</div>
    </div>
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
  
    filtri.forEach(function(f) {
      let classeAttiva = filtroAttivo === f.chiave ? 'attivo' : '';
      let stileExtra = '';
      
      if (filtroAttivo === f.chiave && f.chiave !== 'all') {
        let cat = CATEGORIE[f.chiave];
        stileExtra = `background:${cat.sfondo}; border-color:${cat.colore};`;
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
  
  renderFiltri();
  
  // ── TIMELINE ─────────────────────────────────────────────────────
  
  function renderTimeline() {
    let contenitore = document.getElementById('timeline');
    contenitore.innerHTML = '';
  
    DATI.forEach(function(annoObj) {
      let attivitaFiltrate;
      if (filtroAttivo === 'all') {
        attivitaFiltrate = annoObj.attivita;
      } else {
        attivitaFiltrate = annoObj.attivita.filter(att => att.tipo === filtroAttivo);
      }
  
      if (attivitaFiltrate.length === 0) return;
  
      let conteggio = {};
      attivitaFiltrate.forEach(function(att) {
        if (conteggio[att.tipo] === undefined) {
          conteggio[att.tipo] = 0;
        }
        conteggio[att.tipo]++;
      });
  
      let tipoDominante = Object.entries(conteggio).sort((a, b) => b[1] - a[1])[0][0];
      let catDominante = CATEGORIE[tipoDominante];
  
      let oreTotaliAnno = annoObj.attivita.reduce(function(somma, att) {
        return somma + (typeof att.ore === 'number' ? att.ore : 0);
      }, 0);
  
      let blocco = document.createElement('div');
      blocco.className = 'anno-block';
      blocco.innerHTML = `
        <div class="anno-riga">
          <div class="anno-pill" style="background:${catDominante.sfondo}; color:${catDominante.testo};">
            ${annoObj.classe} &nbsp;·&nbsp; ${annoObj.anno}
          </div>
          <div class="anno-linea"></div>
          <span class="anno-ore">${oreTotaliAnno}h totali · ${annoObj.attivita.length} attività</span>
        </div>
        <div class="cards-grid" id="grid-${annoObj.anno.replace('/', '_')}"></div>
      `;
      contenitore.appendChild(blocco);
  
      let grid = blocco.querySelector('.cards-grid');
  
      attivitaFiltrate.forEach(function(att) {
        let cat = CATEGORIE[att.tipo];
        let card = document.createElement('button');
        card.className = 'card';
        card.innerHTML = `
          <div class="card-barra" style="background:${cat.colore};"></div>
          <div class="card-modalita" style="color:${cat.colore};">${att.modalita}</div>
          <div class="card-titolo">${att.titolo}</div>
          <div class="card-org">${att.org}</div>
          <div class="card-footer">
            <span class="badge-ore" style="background:${cat.sfondo}; color:${cat.testo};">${att.ore}h</span>
            <span class="card-freccia">›</span>
          </div>
        `;
  
        card.addEventListener('click', function() {
          apriModal(att, annoObj);
        });
  
        grid.appendChild(card);
      });
    });
  }
  
  renderTimeline();
  
  // ── MODAL ────────────────────────────────────────────────────────
  
  function apriModal(att, annoObj) {
    let cat = CATEGORIE[att.tipo];
  
    document.getElementById('modal-contenuto').innerHTML = `
      <div class="modal-striscia" style="background:${cat.colore};"></div>
      <div class="modal-org">${att.org}</div>
      <div class="modal-titolo">${att.titolo}</div>
      <div class="modal-info">
        <div class="modal-riga">
          <span class="etichetta">Anno scolastico</span>
          <span class="valore">${annoObj.anno} · ${annoObj.classe}</span>
        </div>
        <div class="modal-riga">
          <span class="etichetta">Modalità</span>
          <span class="valore">${att.modalita}</span>
        </div>
        <div class="modal-riga">
          <span class="etichetta">Ore FSL</span>
          <span class="valore" style="color:${cat.colore};">${att.ore}h</span>
        </div>
        <div class="modal-riga">
          <span class="etichetta">Categoria</span>
          <span class="valore">${cat.label}</span>
        </div>
      </div>
      <div class="modal-desc">${att.desc}</div>
    `;
  
    document.getElementById('modal-sfondo').classList.add('aperto');
  }
  
  function chiudiModal() {
    document.getElementById('modal-sfondo').classList.remove('aperto');
  }
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      chiudiModal();
    }
  });