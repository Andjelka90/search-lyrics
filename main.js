//public apis, biramo git hub: za povlacenje podataka/ na rimer: Music, Lyrics.ovh, Lyrics of the song, search, dobijemo link
const tekst = document.getElementById('tekst');
const naslov = document.getElementById('naslov');
const forma = document.getElementById('forma');
const trazeniIzvodjac = document.getElementById('trazeni-izvodjac');
const trazenaPesma = document.getElementById('trazena-pesma');



function ucitajPodatke() {
    var izvodjac = trazeniIzvodjac.value; //sa value izvlacimo vrednost iz input polja
    var pesma = trazenaPesma.value;

    // *UCITAVANJE PODATAKA SA NETA*

    // const url = "https://api.lyrics.ovh/v1/" + izvodjac +"/"+ pesma;
    const url = `https://api.lyrics.ovh/v1/${izvodjac}/${pesma}`; //drugi nacin 
    console.log(url);

    // *FETCH METODA*
    fetch(url)
        .then(response => response.json()) //umesto function pisemo =>, nema ; posle 
        .then(objekat => {
            console.log(objekat.lyrics) //kad ima vise stvari stavljamo viticaste zagrade
            tekst.innerText = objekat.lyrics ? /*da lima ovog prvog*/ objekat.lyrics : "Nema pesme" //ako nema prvog izazi string koji smo napisali
            naslov.innerText = izvodjac + '-' + pesma
        });
}


// *DOGADJAJI*
forma.addEventListener('submit', function (event) {  //pozivamo je sa submit
    event.preventDefault();  //spreci podrazumevano ponaasanje; forma se ne refresuje svaki put na dugme
    console.log(1386181616); //proveravamo da li radi cl, posle event.preventDefault

    ucitajPodatke();

    

});










