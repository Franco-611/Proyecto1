import './aduanas.css'

const Cuadr = () => (
  <div className="tyle">
    <div className="stule">
      <div className="adentro1">
        <text className="tit12">Autorización de Lista de Embarque</text>
        <div className="tet123">
          <text className="tett1">
            Pasos y requisitos para obtener la lista de embarque firmada y sellada por un
            funcionario de SAT
          </text>
        </div>
      </div>
    </div>
  </div>
)
const Cuadr1 = () => (
  <div className="tyle1">
    <div className="stule">
      <div className="adentro1">
        <text className="tit1">Consulta de Declaraciones Complementarias</text>
        <div className="tet1">
          <text className="tett1">
            Realiza aquí tus consultas y descargas sobre declaraciones complementarias
          </text>
        </div>
      </div>
    </div>
  </div>
)
const Cuadr2 = () => (
  <div className="tyle2">
    <div className="stule">
      <div className="adentro1">
        <text className="tit">Presentación y Análisis de Declaraciones Complementarias de Exportación</text>
        <div className="tet1">
          <text className="tett1">
            Realiza aquí tus consultas sobre declaraciones de exportaciones.
          </text>
        </div>
      </div>
    </div>
  </div>
)
const Cuadr3 = () => (
  <div className="tyle3">
    <div className="stule">
      <div className="adentro1">
        <text className="tit1">Selectivo de Declaraciones de Exportación</text>
        <div className="tet12">
          <text className="tett1">
            Ingresa aquí para consultar el selectivo asignado a su declaración
          </text>
        </div>
      </div>
    </div>
  </div>
)

const Aduanas = () => (
  <div className="con">
    <h1>ADUANAS</h1>
    <div className="del2"> .</div>
    <div className="listado2">
      <text>Exportación</text>
      <text>Facilitación de Comercio</text>
      <text>Gestiones Aduaneras</text>
      <text>Gestiones de Mercancías</text>
      <text>Importación</text>
      <text>Lucha contra la Defraudación y Contrabando Aduaneros</text>
      <text>Marco Legal</text>
    </div>
    <div className="del4"> .</div>
    <div className="contada">
      <Cuadr />
      <Cuadr1 />
      <Cuadr2 />
      <Cuadr3 />
    </div>
  </div>

)

export default Aduanas
