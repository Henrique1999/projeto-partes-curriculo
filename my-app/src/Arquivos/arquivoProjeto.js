import React from 'react';
import '../App.css';
import linkCorrente from '../media/Icons/Link-corrente.png';
import miniimg from '../media/LayoutTestes/mini-imagem1.png';
import miniimg2 from '../media/LayoutTestes/mini-imagem2.png';
import miniimg3 from '../media/LayoutTestes/mini-imagem3.png';
import miniimg10 from '../media/LayoutTestes/mini-imagem10.png';
import miniimg20 from '../media/LayoutTestes/mini-imagem20.png';

/* Esse arquivo está sendo levado ao arquivo App.js com o objetivo de ser a parte de "Projetos" do 
Layout do site. */

// Essa função é responsavel por decidir criar uma divisoria ou não. entenderá ela mais a frente.
function divisoria(open, close) {
if (open - 1 < close && open !== 1) {
    return (
    <>
      <center>
        <div className='divisoria'></div>
      </center>
    </>
    )
  }
}



/* Variavel responsavel por armazenar os dados dos projetos, caso você crie mais uma id com novos dados 
aparecerá  mais uma "container" com os novos dados */
const dados = [
  {
    id: 1,
    titulo: 'Projeto: site onde as pessoas criam seu portfolio',
    descricao: 'Definidor do projeto, dos conceito das funcionalidades do site, desenhar a interface e protótipar com o ' +
    'Figma, desenvolver o front-end do site com a biblioteca React. Hic textus non habet proposita interpretativa, solum ' +
    'visualia proposita, solum usus est ad spatia communium textuum occupanda et secundum magnitudinem quae ' +
    'opus est me temere scribere, caelum nimis pulchrum est ut aquam bibere et in sella staturam figere. , vide ' +
    'modo aliquem textum legentem invenisse eo usque',
    imagemsR: [{imageDado: miniimg},{imageDado:  miniimg2},{imageDado:  miniimg3}],
  },
  {
    id: 2,
    titulo: 'Consultoria: Serviço de pesquisa de psicologia das cores',
    descricao: 'Hic textus non habet proposita interpretativa, solum visualia proposita, solum usus est ad ' + 
    'spatia communium textuum occupanda et secundum magnitudinem quae opus est me temere scribere, caelum ' +
    'nimis pulchrum est ut aquam bibere et in sella staturam figere. , vide modo aliquem textum legentem ' +
    'invenisse eo usque ut gratam coniugem habeo dicere, capto cathedra tibi sedere, dabo tibi inepta actione, ' +
    'accipe libellum et scribe omnia positiva quae acciderunt. tu hodie, vel etiam esse "Salve ab extraneo ' +
    'accepi".',
    imagemsR: [{imageDado: miniimg10}, {imageDado:  miniimg20}, {imageDado: miniimg3}],
  }
];



/* imagemsPrin.map((imagee) => (
  console.log(imagee)
)) */

/* A partir daqui que começa o codigo que gera a parte de "projetos" do site. */
export default function arquivoProjeto() {
return (
<>
 {/* Aqui é o titulo de toda a parte do Projeto */}
<p className="tituloGeralProjeto">
  Meus projetos e parcipações detalhadas:
</p>
{dados.map((dado) =>
<>

{divisoria(dado.id, dado.length)}
<div className="projeto" key={dado.id.toString}>
<div className="projetoContainer">
  <div className="divFlex"        style={{ margin: '0px 0px 10px 0px' }}>  
    <p className="tituloProjeto" >
      {dado.titulo}
    </p>
    <img className="linkCorrente" src={linkCorrente} alt="Click e acesse" />
  </div>
  <p className="descricaoProjeto">
 {dado.descricao}
  </p>
  <p className="medLink">
    Media e links:
  </p>
  <div className="divFlex2" style={{ margin: '0px 0px 0px 90px' }}>
    {dado.imagemsR.map((image) =>
      <>
      {console.log(image.imageDado.length)}
      <div className='medLinkCont'>
        <img className='miniimg' src={image.imageDado} alt='imagem'/>
      </div>
      </>
    )}
  </div>

  </div>
</div>
</>
)}


</>
);
}