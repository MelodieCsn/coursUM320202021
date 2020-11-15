let postCode1  = window.prompt("Entrez un premier code postal : ");
let postCode2  = window.prompt("Entrez un second code postal pour comparaison : ");

let inseeCode1;
let inseeCode2;

let numberOfCovidCenter1;
let numberOfCovidCenter2;


let covidPostCode;
let regex = /\d+/g;

let url1 = 'https://api-adresse.data.gouv.fr/search/?q=a&postcode='.concat(postCode1);
let url2 = 'https://api-adresse.data.gouv.fr/search/?q=a&postcode='.concat(postCode2);
let inseeCode;

fetch(url1, {method: 'GET',
  headers: {},
  cache: 'default'})
  .then(function(response){
          response.json()
              .then(function(data){
                  inseeCode1 = data["features"][0]["properties"]["citycode"];
              })
      }
  )
  fetch(url2, {method: 'GET',
    headers: {},
    cache: 'default'})
    .then(function(response){
            response.json()
                .then(function(data){
                    inseeCode2 = data["features"][0]["properties"]["citycode"];
                })
        }
    )

    fetch("https://www.data.gouv.fr/fr/datasets/r/7c0f7980-1804-4382-a2a8-1b4af2e10d32", {method: 'GET',
        headers: {},
        cache: 'default'})
        .then(function(response){
                response.text()
                    .then(function(data){
                        sitesCovid = CSVToArray(data, ",");


                        for (let i = 0; i < sitesCovid.length; i++) {
                            if (!sitesCovid[i][4]) continue;
                            stringAdressNumbers = sitesCovid[i][4].match(regex)
                            if (!stringAdressNumbers || stringAdressNumbers.length < 2) continue;
                            covidPostCode = stringAdressNumbers[stringAdressNumbers.length-1];

                            if (covidPostCode == postCode1) {
                                numberOfCovidCenter1++
                            }
                            if (covidPostCode == postCode2) {
                              numberOfCovidCenter++
                            }
                        }
                    })
            }
        )
