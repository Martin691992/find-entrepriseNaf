import fs from 'fs'

for (let index = 0; index < 15; index++) {
    const response = await fetch(`https://recherche-entreprises.api.gouv.fr/search?section_activite_principale=H&departement=69&categorie_entreprise=PME&activite_principale=52.10A,52.10B,52.21Z,52.22Z,52.23Z,52.29A,52.29B&tranche_effectif_salarie=NN,00,01,02,03,11,12,21,22,31,32,41&per_page=25&page=${index+1}`, {
        method: 'GET',
    })
    const data = await response.json()
    data.results.forEach(element => {
        if(element.etat_administratif == 'A'){
            fs.writeFileSync('./data2.txt',`${element.nom_raison_sociale},${element.siege.adresse},${element.nombre_etablissements_ouverts}\n`,{flag:"a"})
        }
    });
    
}
