let postCode1  = window.prompt("Entrez un premier code postal : ");
let postCode2  = window.prompt("Entrez un second code postal pour comparaison : ");

//On récupère les code INSEE grâce aux codes postaux
let inseeCode1 = getInsee(postCode1);
let inseeCode2 = getInsee(postCode2);

let numberOfCovidCenter1 = getNumberOfCovidCenter(postCode1);
let numberOfCovidCenter2 = getNumberOfCovidCenter(postCode2);

console.log(postCode1, postCode2);
console.log(inseeCode1, inseeCode2);
console.log(numberOfCovidCenter1, numberOfCovidCenter2);

function getInsee(postCode) {
    let url = 'https://api-adresse.data.gouv.fr/search/?q=a&postcode='.concat(postCode);
    let inseeCode;

    fetch(url, {method: 'GET',
        headers: {},
        cache: 'default'})
        .then(function(response){
                response.json()
                    .then(function(data){
                        console.log(data["features"][0]["properties"]["citycode"]);
                        inseeCode = data["features"][0]["properties"]["citycode"];

                    })
            }
        )
     inseeCode;
}

function getNumberOfCovidCenter(postCode) {
    let covidPostCode;
    let regex = /\d+/g;
    let j = 0

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

                            if (covidPostCode == postCode) {
                                j++
                            }
                        }
                    })
            }
        )
    return j;
}
