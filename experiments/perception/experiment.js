const jsPsych = initJsPsych({
    show_progress_bar: true,
    auto_update_progress_bar: false,
    on_finish: function(data) {
        proliferate.submit({"trials": data.trials});
    }
});

let timeline = []; //Empty timeline to which we will add trials

//IRB - SKIP FOR PILOT// 
//const irb = {
//    type: jsPsychHtmlButtonResponse,
//    stimulus: "ADD IRB TEXT", 
//    choices: ['Avanti']
//};

//timeline.push(irb);

//INSTRUCTIONS// 
const instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "INSTRUCTIONS HERE", 
    choices: ['Avanti']
};

timeline.push(instructions);

//TRIALS//
let trial_array = create_tv_array(trial_objects);
const trials = {
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
            },
            on_finish: function(data) {
                jsPsych.setProgressBar((data.trial_index - 1) / (timeline.length + trial_array.length));
            }
        }
    ],
    timeline_variables: trial_objects,
    randomize_order: true
};

timeline.push(trials);

//SURVEY// 
const transition = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "Hai completato le prove sperimentali. Ora ti verrà presentato un breve questionario. La compilazione del questionario è facoltativa. Se ti senti a tuo agio nel farlo, ti preghiamo di rispondere alla seguenti domande.",
    choices: ["Avanti"]
};

timeline.push(transition);

const questionnaire = {
    type: jsPsychSurvey,
    pages: [
        [
            {
                type: 'html', 
                prompt: "Rispondi alle seguenti domande:"
            },
            {
                type: 'multi-choice',
                prompt: 'Hai letto e capito le istruzioni?',
                name: 'correct',
                options: ['Sì', 'No']
            },
            {
                type: 'multi-choice', 
                prompt: 'Genere:',
                
            }
        ]
    ]
}

