import './noticias.css'

const TarjetaN = () => (
  <div>
    <div className="Noticia1" />
    <div className="contieneTexto">
      <text className="tituloTexto">Convocatoria Externa, Auditor de Sistemas de Información</text>
      <text className="tiene1"> 27/05/2022</text>
      <text className="tiene2"> Te estamos buscando</text>
      <div className="BOTON">
        Leer Más
        <div className="Flechita" />
      </div>
    </div>
  </div>

)
const TarjetaN1 = () => (
  <div>
    <div className="Noticia2" />
    <div className="contieneTexto">
      <text className="tituloTexto">Administraciones Aduaneras de Guatemala y Corea firman Memorando de Entendimiento</text>
      <text className="tiene1"> 30/03/2022</text>
      <text className="tiene2"> La SAT firmó un Memorando de Entendimiento con la Aduana de Corea (Korea Customs Service), con el objetivo de promover...</text>
      <div className="BOTON">
        Leer Más
        <div className="Flechita" />
      </div>
    </div>
  </div>

)
const TarjetaN2 = () => (
  <div>
    <div className="Noticia3" />
    <div className="contieneTexto">
      <text className="tituloTexto">Guatemala fortalece el Comercio Internacional con la Firma del Arreglo de Roconocimiento Mutuo Regional</text>
      <text className="tiene1"> 19/05/2022</text>
      <text className="tiene2"> La SAT firmó el Arreglo de Reconocimiento Mutuo (ARM) sobre la figura del Operador Económico Autorizado de Guatemala (OEA-GT) con...</text>
      <div className="BOTON">
        Leer Más
        <div className="Flechita" />
      </div>
    </div>
  </div>

)
const TarjetaN3 = () => (
  <div>
    <div className="Noticia4" />
    <div className="contieneTexto">
      <text className="tituloTexto">Modernización Interinstitucional de la Infraestructura del Puerto Fronterizo Ingeniero Juan Luis Lizarralde Arrillaga, Aduana Tecún Umán II</text>
      <text className="tiene1"> 13/05/2022</text>
      <text className="tiene2">La SAT firmó el Arreglo de Reconocimiento Mutuo (ARM) sobre la figura del Operador Económico Autorizado de Guatemala (OEA-GT) con...</text>
      <div className="BOTON">
        Leer Más
        <div className="Flechita" />
      </div>
    </div>
  </div>

)

const Noticias = () => (
  <div className="NOT">
    <h1 className="f1">NOTICIAS</h1>
    <div className="del29"> .</div>
    <div className="conNot">
      <TarjetaN1 />
      <TarjetaN2 />
      <TarjetaN />
      <TarjetaN3 />
    </div>

  </div>

)

export default Noticias
