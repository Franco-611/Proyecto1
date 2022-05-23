import './servicios.css'

const Cuadro = () => (
  <div className="style">
    <div className="stule">
      <div className="adentro">
        <text className="tit">Cita para concluir la Solicitud de NIT</text>
        <div className="tet">
          <text className="tett">
            Si ya tienes NIT o deseas solicitar otra gestión, debes realizar
            la cita previa por medio de tu Agencia Virtual
          </text>
        </div>
      </div>
    </div>
  </div>
)

const Cuadro1 = () => (
  <div className="style1">
    <div className="stule">
      <div className="adentro">
        <text className="tit">CUI/NIT Agencia Virtual</text>
        <div className="tet">
          <text className="tett">
            Si no recuerdas tu NIT o si tienes Agencia Virtual,
            puedes consultar aquí utilizando tu CUI (DPI)
          </text>
        </div>
      </div>
    </div>
  </div>
)

const Cuadro2 = () => (
  <div className="style2">
    <div className="stule">
      <div className="adentro">
        <text className="tit">Impresión de Calcomanía</text>
        <div className="tet">
          <text className="tett">
            Ingresa aquí para imprimir la Calcomanía de Impuesto Sobre Circulación de Vehículos.
          </text>
        </div>
      </div>
    </div>
  </div>

)

const Cuadro3 = () => (
  <div className="style3">
    <div className="stule">
      <div className="adentro">
        <text className="tit">Impresión de RTU</text>
        <div className="tet">
          <text className="tett">
            Imprime aquí tu constancia de inscripción y/o actualización de datos al RTU
          </text>
        </div>
      </div>
    </div>
  </div>
)

const Cuadro4 = () => (
  <div className="style4">
    <div className="stule">
      <div className="adentro">
        <text className="tit1">Impuesto de Circulación / Garantía Mobiliaria</text>
        <div className="tet1">
          <text className="tett">
            Consulta el monto del Impuesto sobre Circulación de Vehículos
          </text>
        </div>
      </div>
    </div>
  </div>
)

const Cuadro5 = () => (
  <div className="style5">
    <div className="stule">
      <div className="adentro">
        <text className="tit">Multas de Tránsito</text>
        <div className="tet">
          <text className="tett">
            Consulta si tienes alguna multa por parte de la Policía de tránsito que corresponda.
          </text>
        </div>
      </div>
    </div>
  </div>
)

const Cuadro6 = () => (
  <div className="style6">
    <div className="stule">
      <div className="adentro">
        <text className="tit">Solicitud Usuario Agencia Virtual</text>
        <div className="tet">
          <text className="tett">
            Solicita tu usuario de Agencia Virtual en línea haciendo click aquí
          </text>
        </div>
      </div>
    </div>
  </div>
)

const Cuadro7 = () => (
  <div className="style7">
    <div className="stule">
      <div className="adentro">
        <text className="tit">Verificador Integrado</text>
        <div className="tet">
          <text className="tett">
            Consulta Omisos y la situación de un emisor de factura ante la SAT
          </text>
        </div>
      </div>
    </div>
  </div>
)

const Servicios = () => (

  <div className="cont2">
    <h1>SERVICIOS TRIBUTARIOS</h1>
    <div className="del2"> .</div>
    <div className="listado">
      <text>Consultas Frecuentes</text>
      <text>Contribuyentes</text>
      <text>Cumplimiento Tributario</text>
      <text>Mis Documentos</text>
      <text>Requisitos</text>
      <text>Solicitudes</text>
      <text>Vehículos</text>
    </div>
    <div className="del3"> .</div>
    <div className="contst">
      <Cuadro />
      <Cuadro1 />
      <Cuadro2 />
      <Cuadro3 />
      <Cuadro4 />
      <Cuadro5 />
      <Cuadro6 />
      <Cuadro7 />
    </div>
  </div>
)

export default Servicios
