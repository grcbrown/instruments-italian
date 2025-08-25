const jsPsych = initJsPsych({
    show_progress_bar: true,
    override_safe_mode: true,
    auto_update_progress_bar: false,
    max_load_time: 120000, //120 seconds
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