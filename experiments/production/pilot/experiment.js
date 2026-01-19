const jsPsych = initJsPsych({
    show_progress_bar: false,
    on_finish: function(data) {
        proliferate.submit({"trials": data.trials});
    }
});

let timeline = []; //Empty timeline to which we will add trials

const irb = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
        <div style="font-size: 16px; text-align: center; margin-top: 25px; margin-right: 50px; margin-left: 50px; margin-bottom: 25px;">
            <img src="./image/SUSig_2color_Stree_Left.png" alt="Stanford Logo" style="max-width: 500px; margin-bottom: 20px;">
            <h3>DESCRIZIONE</h3>
            <p>Ti invitiamo a partecipare a uno studio di ricerca sulla produzione linguistica. Lo scopo \u00e8 quello di aiutarci a comprendere quali fattori influenzano la costruzione delle frasi. Nello studio dovrai completare una serie di frasi. Successivamente, avrai la possibilit\u00e0 di compilare un sondaggio demografico facoltativo. La partecipazione a questa recerca \u00e8 volontaria e sei libero di revocare il tuo consenso in qualsiasi momento.</p>
            <h3>TEMPO RICHIESTO</h3> 
            <p>La tua partecipazione richieder\u00e0 circa 10 minuti.</p>
            <h3>PAGAMENTI</h3> 
            <p>Riceverai un pagamento di 15 dollari (USD) per ogni ora di partecipazione.</p>
            <h3>PRIVACY E RISERVATEZZA</h3> 
            <p>I rischi associati a questo studio sono minimi. Tale valutazione si basa su un'ampia esperienza con procedure identiche o simili condotte su persone di et\u00e0, sesso, origini, ecc. simili. I dati dello studio saranno conservati in modo sicuro, in conformit\u00e0 con gli standard della Stanford University, riducendo al minimo il rischio di violazione della riservatezza. La privacy individuale sar\u00e0 garantita durante la ricerca e in tutti i dati pubblicati e scritti risultanti dallo studio.</p>
            <h3>INFORMAZIONI DI CONTATTO</h3>
            <p>Per qualsiasi domanda, dubbio o reclamo riguardante questa ricerca, le sue procedure, i rischi e i benefici, contattare la direttrice del protocollo, Grace Brown, all'indirizzo grcbrown@stanford.edu o al numero (+1) 616-498-8188. Se non sei soddisfatto di come viene condotto questo studio, o se hai dubbi, reclami o domande generali sulla ricerca o sui tuoi diritti in qualit\u00e0 di partecipanti, contatta il Comitato di revisione istituzionale (IRB) di Stanford per parlare con qualcuno indipendente dal team di ricercare al numero (+1) 650-723-2480 o al numero verde 1-866-680-2906, oppure invia un'e-mail all'indirizzo irbnonmed@stanford.edu.</p> 
            <h3>REGOLAMENTO GENERALE SULLA PROTEZIONE DEI DATI (GDPR)</h3>
            <p>Raccoglieremo i tuoi dati personali per questo studio, inclusi dati relativi alla tua salute e/o altri dati personali sensibili come descritto in questo modulo di consenso. Faremo riferimento a questi dati come “i tuoi Dati dello Studio”. Qualsiasi Dato dello Studio raccolto nell'ambito di questa ricerca condotta nell'Unione Europea/Spazio Economico Europeo (UE/SEE) sar\u00e0 raccolto, conservato, utilizzato e condivisio (trattato) secondo quanto richiesto dalla legge UE/SEE nota come Regolamento Generale sulla Protezione dei Dati (GDPR).</p>
            <p>I tuoi Dati dello Studio potranno essere trattati per i seguenti motivi (finalit\u00e0): per condurre lo studio e verificarne l'accuratezza; per aiutarci a monitorare e garantire che lo studio segua le migliori pratiche di ricerca; per redigere le relazioni richieste da enti regolatori nazionali e stranieri e da autorit\u00e0 governative che hanno il compito di supervisionare studi di questo tipo; e per rispettare le leggi e i regolamenti applicabili, inclusi i requisiti che impongono di rendere disponibili ad altri ricercatori, non affiliati con il promotore o il team dello studio, i dati dello studio privi di informazioni che possano identificarti direttamente.</p>
            <p>Ad esempio, le autorit\u00e0 regolatorie di alcuni paesi potrebbero richiedere che i tuoi Dati dello Studio, senza informazioni che ti identifichino direttamente, siano resi pubblicamente disponibili su internet o in altri modi, al fine di rendere i dati di ricerca pi\u00f9 accessibili ad altri ricercatori.</p>
            <p>Le seguenti persone e organizzazioni possono trattare i tuoi Dati dello Studio per le finalit\u00e0 sopra elencate: il team di ricerca, comprese altre persone e organizzazioni che collaborano con il team di ricerca (Grace Brown, Beth Levin); il comitato etico o Institutional Review Board che ha approvato questo studio; e le autorit\u00e0 regolatorie nazionali e straniere e i funzionari governativi responsabili della supervisione di studi come questo.</p>
            <p>Potremmo condurre lo studio negli Stati Uniti e in altri paesi in cui le leggi non proteggono la tua privacy nella stessa misura delle leggi del paese in cui risiedi. I tuoi Dati dello Studio potranno essere trasferiti in questi paesi per le finalit\u00e0 descritte sopra. Adotteremo misure ragionevoli per proteggere la tua privacy, in conformit\u00e0 con le leggi applicabili. Ad esempio, ove appropriato, stipuliamo accordi di trasferimento dati con clausole contrattuali standard approvate dalle autorit\u00e0 europee, che stabiliscono termini e condizioni su come i tuoi Dati possono essere utilizzati e condivisi. Questi accordi di trasferimento dati contribuiscono a garantire un'adeguata protezione dei tuoi Dati dello Studio.</p>
            <p>Il GDPR ti riconosce determinati diritti in relazione ai tuoi Dati dello Studio, tra cui il diritto di: (1) richiedere l'accesso, la rettifica o la cancellazione dei tuoi Dati dello Studio; (2) opporti o limitare il trattamento dei tuoi Dati dello Studio; e (3) richiedere che i tuoi Dati dello Studio vengano spostati, copiati o trasferiti a un'altra organizzazione. Per effettuare una di queste richieste, contatta la Ricercatrice Principale al numero (+1) 616-498-8188 o all'indirizzo grcbrown@stanford.edu. </p> 
            <p>Puoi anche revocare il tuo consenso in qualsiasi momento. Se revochi il tuo consenso o richiedi la cancellazione dei tuoi Dati dello Studio, potremo comunque raccogliere, utilizzare e condividere legalmente i tuoi Dati dello Studio fino al momento della revoca o della richiesta di cancellazione. Anche se revochi il tuo consenso, potremo continuare a utilizzare i tuoi Dati dello Studio anonimizzati, cio\u00e8 privi di qualsiasi informazione che ti identifichi. Potremo anche utilizzare e condividere i tuoi Dati dello Studio pseudonimizzati, cio\u00e8 privati del tuo nome e di altri identificatori diretti, nei limiti consentiti dalla legge. I tuoi dati anonimizzati o pseudonimizzati potranno essere utilizzati per: (a) motivi di salute pubblica (ad esempio per garantire la qualit\u00e0 e la sicurezza dell'assistenza sanitaria e/o dei farmaci o dispositivi medici), (b) ricerca scientifica o storica o analisi statistiche consentite dalle leggi dell'UE o degli Stati membri, e (c) conservazione per importanti motivi di interesse pubblico. Conserveremo i tuoi Dati dello Studio in forma identificabile solo se richiesto dalla legge.</p>
            <p>Non esiste un limite di tempo per la conservazione dei tuoi Dati dello Studio per questa ricerca, poich\u0020 potrebbero essere analizzati per molti anni. Conserveremo inoltre i tuoi Dati dello Studio per rispettare i requisiti legali e normativi. Li manterremo finch\u0020 saranno utili, a meno che tu decida di non voler pi\u00f9 partecipare. Autorizzi l'accesso a queste informazioni a tempo indeterminato, finch\u0020 non ritirerai il tuo consenso.</p>
            <br>
            <p><strong>Se accetta di partecipare a questa ricerca, clicchi sul pulsante 'Continua' per iniziare l'esperimento.</strong.</p>
        </div>
    `,
    choices: ['Continua'],
    response_ends_trial: true,
    margin_vertical: '10px'
};

//INSTRUCTIONS// 
const instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <div class="gen_ins"; style="font-size: 16px; text-align: center; margin-top: 25px; margin-right: 100px; margin-left: 100px; margin-bottom: 25px;">
        <p>Durante questo esperimento, dovrai completare alcune frasi. In ogni prova ti verr\u00e0 mostrata una frase incommpleta e ti verr\u00e0 chiesto di digitare una parola per completarla. Ci saranno 34 prove. Questa parte dell'esperimento dovrebbe durare 10 minuti.</p>
        <p>Dopo aver finito questo compito, potrai partecipare a un sondaggio facoltativo.</p>
        <p>Se hai capito queste istruzioni e accetti di partecipare, clicca sul pulsante 'Avanti'.</p>
    </div>
    `, 
    choices: ['Avanti'],
    response_ends_trial: true
};

const buffer = {
  type: jsPsychHtmlKeyboardResponse,
  choices: [""],
  stimulus: `
  <div class=\"header_container\"><div class=\"header\">Digita una parola per completare ogni frase</div></div>
  `,
  response_ends_trial: false, 
  trial_duration: 3000
};

//TRIALS//
let trial_array_1 = create_tv_array(trial_objects_list_1);
const trial_1 = {
    timeline: [
        {
            type: jsPsychCloze,
            text: jsPsych.timelineVariable('text'),
            allow_blanks: false,
            button_text: 'Avanti',
            data: {
                text: jsPsych.timelineVariable('text'),
                id: jsPsych.timelineVariable('id'),
                subj: jsPsych.timelineVariable('subj')
            }
        }
    ],
    timeline_variables: trial_objects_list_1,
    randomize_order: true
};

let trial_array_2 = create_tv_array(trial_objects_list_2);
const trial_2 = {
    timeline: [
        {
            type: jsPsychCloze,
            text: jsPsych.timelineVariable('text'),
            allow_blanks: false,
            button_text: 'Avanti',
            data: {
                text: jsPsych.timelineVariable('text'),
                id: jsPsych.timelineVariable('id'),
                subj: jsPsych.timelineVariable('subj')
            }
        }
    ],
    timeline_variables: trial_objects_list_2,
    randomize_order: true
};

//SURVEY// 
const transition = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <div class="gen_ins"; style="font-size: 16px; text-align: center; margin-top: 25px; margin-right: 100px; margin-left: 100px; margin-bottom: 25px;">
        <p>Rispondi alle domande nella pagina successiva a cui desideri rispondere. Dopo aver visualizzato il sondaggio, puoi terminare l'esperimento.</p>
        <p>Clicca su 'Continua' per continuare il sondaggio.</p>
    </div>
    `,
    choices: ["Continua"]
};

const questionnaire = {
  type: jsPsychSurvey,
  theme: "modern",
  survey_json: {
    showQuestionNumbers: "off",
    widthMode: "responsive",
    completeText: "Finire",
    elements: [
      {
        type: "html",
        html: "<p>Rispondi alle seguenti domande. Dopo aver completato il sondaggio, clicca su 'Finire' per terminare l'esperimento.</p>"
      },
      {
        type: "boolean",
        name: "understood",
        title: "Hai letto e capito le istruzioni?",
        labelTrue: "S\u00ec",
        labelFalse: "No",
        renderAs: "radio"
      },
      {
        type: "text",
        name: "age",
        title: "Et\u00e0:",
        inputType: "number"
      },
      {
        type: "radiogroup",
        name: "gender",
        title: "Genere:",
        choices: ["Maschile", "Femminile", "Non binario", "Preferisco non specificare"],
        showOtherItem: true,
        otherText: "Altro (specificare)",
        showSelectAllItem: false,
        shwNoneItem: false
      },
      {
        type: "comment",
        name: "ethnicity",
        title: "Come descriverebbe la tua razza e/o etnia?"
      },
      {
        type: "comment",
        name: "languages",
        title: "Quali lingue parli?"
      },
      {
        type: "comment",
        name: "topic",
        title: "Di cosa pensi che tratti questo studio?"
      },
      {
        type: "radiogroup",
        name: "enjoy",
        title: 'Ti \u00e8 piaciuto lo studio?',
        choices: [
          "Uno studio peggiore della media",
          "Uno studio medio",
          "Uno studio migliore della media"
        ]
      },
      {
        type: "radiogroup",
        name: "payment",
        title: "Pensi che il pagamento sia equo?",
        choices: [
          "Il pagamento \u00e8 equo",
          "Il pagamento \u00e8 troppo basso"
        ]
      },
      {
        type: "comment",
        name: "comments",
        title: "Hai ulteriori commenti su questo studio?"
      }
    ]
  }
};

//DATA COLLECTION
// capture info from Prolific
var subject_id = jsPsych.data.getURLVariable('PROLIFIC_PID');
var study_id = jsPsych.data.getURLVariable('STUDY_ID');
var session_id = jsPsych.data.getURLVariable('SESSION_ID');

jsPsych.data.addProperties({
  subject_id: subject_id,
  study_id: study_id,
  session_id: session_id
});

const p_id = jsPsych.randomization.randomID(10);
const filename = `${p_id}.csv`;

const save_data = {
  type: jsPsychPipe,
  action: "save",
  experiment_id: "7nShUjtYjNRM", 
  filename: filename,
  data_string: ()=>jsPsych.data.get().csv()
};

//THANKS//
var thanks = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `<p>Hai completato l'esperimento. Grazie per il tempo che ci hai dedicato!</p>
    <br><br>
    <p> <a href="https://app.prolific.com/submissions/complete?cc=C1AIAUN3"> Clicca su questo link per tornare su Prolific e completare lo studio.</a>.</p>`,
  choices: "NO_KEYS"
};

//RUN
// --- Define 8 condition timelines (identical structure) ---
let condition_1_timeline = [irb, instructions, buffer, trial_1, transition, questionnaire, save_data, thanks];
let condition_2_timeline = [irb, instructions, buffer, trial_2, transition, questionnaire, save_data, thanks];

// --- Use DataPipe to assign participant condition ---
async function createExperiment() {
  const condition = await jsPsychPipe.getCondition("7nShUjtYjNRM");
  console.log("Assigned condition:", condition);

  if (condition == 0) { timeline = condition_1_timeline; }
  if (condition == 1) { timeline = condition_2_timeline; }

  jsPsych.run(timeline);
}

createExperiment();