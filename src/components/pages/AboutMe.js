const AboutMe = () => {

function getAge(oDate) {
  let diff_ms = Date.now() - oDate.getTime();
  let age_ms = new Date(diff_ms);
  let age_years = age_ms.getUTCFullYear() - 1970;
  return age_years < 0 ? NaN : age_years;
}

let oBirthDay = new Date(1996, 11, 1);
console.log(getAge(oBirthDay));

  return (
    <div className="text aboutme-text">
      <div className="header-aboutme">
        <div className="title-aboutme">
          <h1>Anyamani Scherer</h1>
          <h3>Frontend Entwicklerin</h3>
        </div>
        <div className="img-aboutme-container">
          <div className="img-aboutme"></div>
        </div>
      </div>
      <p>
        Hi, ich bin Anyamani Scherer ({getAge(oBirthDay)}), eine angehende Web
        Entwicklerin. Ich wurde am 01.11.1996 in Thailand, Bangkok geboren und
        lebe seit meinem 4. Lebensjahr in Deutschland. Schon in meiner frühen
        Kindheit entdeckte ich meine Vorliebe fürs Gestalten und Erschaffen von
        Dingen. Die digitale Welt bietet mir unbegrenzte Möglichkeiten meiner
        Leidenschaft nachgehen zu können. <br />
        <br />
        Ich bin aufgeschlossen, zuverlässig und detailverliebt. Das Elernen von
        Arbeitsaufträgen liegt mir besonders, die ich stets genau und gewissenhaft
        bearbeite. Durch meine offene Art fällt es mir leicht in großen,
        als auch kleinen Gruppen zu arbeiten.
        <br />
        <br />
        Habe ich Ihr Interesse geweckt?
        <br />
        Dann kontaktieren Sie mich doch gerne über{" "}
        <a href="mailto:anyamani.scherer@gmx.de">Email</a> oder über meine{" "}
        <a href="tel:+4915737733670">Handynummer</a> :)
      </p>
    </div>
  );
};

export default AboutMe;
