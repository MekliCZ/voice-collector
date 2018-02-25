import React, {Component} from 'react';

export default class Home extends Component {
    render() {
        return (
            <div className="pageContent">
                <h2>Co je Common Voice?</h2>
                <p>Hlas je přirozený a lidský. Je to nejjednoduší a nejpřirozenější způsob komunikace. Chceme umožnit
                    vývojářům, aby mohli vytvářet úžasné věci od překladačů v reálném čase po hlasové asistenty. V
                    současné chvíli není dostatek veřejných dat k tomu, aby mohli takové aplikace vytvářet. Doufáme, že
                    Common Voice dá vývojářům to, co potřebují k inovacím.</p>
                <h2>K čemu je tato stránka?</h2>
                <p>Common Voice je v současné době dostupný pouze v angličtině. Mozilla se sice chystá ještě v horizontu
                    několika měsíců přidat podporu pro další jazyky, je ale nutné mít pro ně dostatek vět. Proto jsme se
                    v české komunitě rozhodli, že začneme tyto věty sbírat. Pokud nasbíráme dostatek vět (pro začátek je
                    nutných alespoň 2000 vět) a Mozilla v tu chvíli nebude mít spuštěný Common Voice pro další jazyky,
                    spustíme vlastní klon, na kterém budeme sbírat nahrávky. Ty při spuštění vícejazyčného Common Voice
                    předáme Mozille a ona je zahrne do publikovaného datasetu.</p>
                <h2>Jaká data můžu poskytnout?</h2>
                <p>Vzhledem k tomu, že je dataset publikován pod licencí CC-0, je nutné vytvářet ho z vět dostupných
                    jako volné dílo nebo pod licencí, která je s CC-0 kompatibilní. To můžou být například knihy
                    autorů, kteří zemřeli před více než 70 lety a autorská práva vypršela. Dobrým výchozím bodem můžou
                    být například knihy publikované Městskou knihovnou v Praze a dostupné volně ke stažení.</p>
                <p>Pokud však narazíte i na další zdroje textů (třeba váš firemní/komunitní Slack), jejichž autoři
                    souhlasí s jejich použitím a zveřejněním pod CC-0 licencí, směle do toho.</p>
            </div>
        );
    }
}