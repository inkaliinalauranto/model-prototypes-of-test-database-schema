import physicalPg from './assets/physical-erd-pgadmin4.png'
import physicalVP from './assets/physical_erd_visual_paradigm.png'
import logical from './assets/logical-erd-visual-paradigm.png'
import conceptual from './assets/conceptual-erd-visual-paradigm.png'
import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>Testitietokannan skeema Visual Paradigmilla reverse engineerattuna</h1>
        <p className='read-the-docs'>(Testitietokantaskeema perustuu Juhani Kurun vuonna 2024 pitämän Web-ohjelmointi ja sovelluskehykset -opintojakson tehtävän alustusmateriaaleihin)</p>
        <h2>Fyysinen malli</h2>
        <p>Skeeman reverse engineeraus onnistuu automatisoidusti esimerkiksi SQL-dumpista. Tietokannan reverse engineeraaminen fyysiseksi malliksi on opinnäytetyön aiheeseen peilaten vain välivaihe.</p>
        <img src={physicalVP} alt="Fyysinen malli" />
        <h2>Looginen malli</h2>
        <p>Fyysisen mallin abstraktoiminen loogiseksi on tähän mennessä selvitetyn perusteella melko manuaalinen operaatio. Tämä looginen malli ei välttämättä noudata vielä kaikkia taiteen sääntöjä.</p>
        <img src={logical} alt="Looginen malli" />
        <h2>Käsitemalli</h2>
        <p>Loogisen mallin abstraktoiminen Chenin notaatiota mukailevaksi käsitemalliksi on tähän asti hankitun tiedon valossa täysin manuaalinen toimenpide. Toistaiseksi ei ole löytynyt työkalua, jolla abstraktoiminen onnistuisi automatisoidusti. (Malli ei mukaile vielä Chenin notaatiota välttämättä oikeaoppisesti puutteellisen teoriatiedon vuoksi.)</p>
        <img src={conceptual} alt="Käsitteellinen malli" />
        <h1>Ekstra</h1>
        <h2>Testitietokantaskeeman reverse engineeraus fyysiseksi malliksi pgAdmin4:llä</h2>
        <p>Kun tietokanta saadaan pgAdmin4:ään esimerkiksi SQL-dumpin kautta, saadaan rakenne visualisoitua fyysiseksi malliksi yhdellä napin painalluksella. Työkalu ei tämän hetkisen selvityksen perusteella tarjoa kuitenkaan abstraktointityökaluja.</p>
        <img src={physicalPg} alt="Fyysinen malli pgAdmin4:n avulla reverse engineerattuna" />
      </div>
    </>
  )
}

export default App
