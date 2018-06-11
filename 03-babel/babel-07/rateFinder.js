let file = "rates.json";

//Please complete this file in order to read rates.json and build a html response
....(file)
    .then(rates => {
      let html = '';
      rates.forEach(rate => html += `<tr><td>${rate.name}</td><td>${rate.years}</td><td>${rate.rate}%</td></tr>`);
      console.log(html);
    })
    .catch(e => console.log(e));