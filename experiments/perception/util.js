function create_tv_array(json_object) {
    let tv_array = [];
    for (let i = 0; i < json_object.length; i++) {
        obj = {};
        obj.text = json_object[i].text;
        obj.id = json_object[i].id;
        obj.subj = json_object[i].subj;
        obj.data = {};
        tv_array.push(obj)
    }
    return tv_array;
}

function makeLikertRow(name, label) {
  return `
    <tr>
      <td>${label}</td>
      ${likertOptions.map((_, i) =>
        `<td><input type="radio" name="${name}" value="${i+1}" required></td>`
      ).join("")}
    </tr>
  `;
}

function shuffleArray(array) {
  const arr = array.slice(); // copy so we don’t mutate original
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function createLikertTrial(tv) {
  return {
    type: jsPsychSurveyHtmlForm,
    preamble: tv.text, // resolved timeline variable
    html: `
      <table class="likert-grid">
        <tr>
          <th></th>
          ${likertOptions.map(opt => `<th>${opt}</th>`).join('')}
        </tr>
        ${makeLikertRow("natural", "Questa frase \u00e8 naturale.")}
        ${makeLikertRow("mobile", tv.mobile)}
        ${makeLikertRow("manipulability", tv.manipulability)}
        ${makeLikertRow("volition", tv.volition)}
        ${makeLikertRow("sentient", tv.sentient)}
        ${makeLikertRow("potent", tv.potent)}
        ${makeLikertRow("instigation", tv.instigation)}
      </table>
    `,
    button_label: "Continua",
    data: {
      id: tv.id,
      subj: tv.subj
    }
  };
}