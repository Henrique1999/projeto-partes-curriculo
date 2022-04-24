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



/* Variavel responsavel por armazenar os dados dos projetos, caso você crie mais uma id com novos dados 
aparecerá  mais uma "container" com os novos dados */
const dadosPrimario = [
  {
    id: 1,
    titulo: 'Projeto: site onde as pessoas criam seu portfolio',
    descricao: 'Definidor do projeto, dos conceito das funcionalidades do site, desenhar a interface e protótipar com o ' +
    'Figma, desenvolver o front-end do site com a biblioteca React. Hic textus non habet proposita interpretativa, solum ' +
    'visualia proposita, solum usus est ad spatia communium textuum occupanda et secundum magnitudinem quae ' +
    'opus est me temere scribere, caelum nimis pulchrum est ut aquam bibere et in sella staturam figere. , vide ' +
    'modo aliquem textum legentem invenisse eo usque',
<<<<<<< Updated upstream:my-app/src/Components/arquivoProjeto.js
    imagemsR: [miniimg, miniimg2, miniimg3],
=======
    imagemsR: [miniimg, miniimg2,miniimg3],
>>>>>>> Stashed changes:my-app/src/Arquivos/arquivoProjeto.js
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
<<<<<<< Updated upstream:my-app/src/Components/arquivoProjeto.js
    imagemsR: [miniimg10,  miniimg20, miniimg3, miniimg3],
=======
    imagemsR: [miniimg10, miniimg20, miniimg3],
>>>>>>> Stashed changes:my-app/src/Arquivos/arquivoProjeto.js
  }
];

// Essa função é responsavel por decidir criar uma divisoria ou não. entenderá ela mais a frente.
function divisoria(open) {
  open = open - 1;
if (open + 1 < 3 && open !== 0) {
    return (
    <>
      <center>
        <div className='divisoria'></div>
      </center>
    </>
    )
  }
}

function divisoriaImagemsDados(open) {
  console.log(open);
if (open < 2) {
    return (
    <>
        <div className='divisoriaImagemsDados'></div>
    </>
    )
  }
}
/* a */
let a = 0;
let b = 0;

/* A partir daqui que começa o codigo que gera a parte de "projetos" do site. */
export default function arquivoProjeto() {
return (
  <>
 {/* Aqui é o titulo de toda a parte do Projeto */}
    <p className="tituloGeralProjeto">
      Meus projetos e parcipações detalhadas:
    </p>
<<<<<<< Updated upstream:my-app/src/Components/arquivoProjeto.js
    {dadosPrimario.map((dadoApelido, idex) =>
    <>
      {/* {console.log(b += 100)} */}
      {divisoria(dadoApelido.id)}
      <div className="projeto" key={dadoApelido.id.toString}>
      <div className="projetoContainer">
        <div className="divFlex"        style={{ margin: '0px 0px 10px 0px' }}>  
          <p className="tituloProjeto" >
            {dadoApelido.titulo}
          </p>
          <img className="linkCorrente" src={linkCorrente} alt="Click e acesse" />
        </div>
        <p className="descricaoProjeto">
          {dadoApelido.descricao}
        </p>
        <p className="medLink">
          Media e links:
        </p>
        <div className="divFlex2" style={{ margin: '0px 0px 0px 90px' }}>
          {console.log(dadoApelido.imagemsR.length)}
          {dadoApelido.imagemsR.map((imagemApelido) =>
            <>
            <div className='medLinkCont'>
              <img className='miniimg' src={imagemApelido} alt='imagem'/>
              {/* {divisoriaImagemsDados(imagemApelido.id)} */}
            </div>
            </>
          )}
        </div>
=======
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
      <div className='medLinkCont'>
        <img className='miniimg' src={image} alt='imagem'/>
      </div>
      </>
    )}
  </div>
>>>>>>> Stashed changes:my-app/src/Arquivos/arquivoProjeto.js

        </div>
      </div>
  </>
)}


</>
);
}