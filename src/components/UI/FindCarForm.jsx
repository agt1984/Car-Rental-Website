import React, { useState } from "react";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {

  const [selectedFilters, setSelectedFilters] = useState({});
  const [generatedUrl, setGeneratedUrl] = useState(""); // Declaramos generatedUrl aquí


  const toggleFilter = (filter) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [filter]: !prevState[filter],
    }));
  };


  const generateUrl = () => {
    // Construye la URL basada en los filtros seleccionados
    const filters = Object.keys(selectedFilters)
      .filter((filter) => selectedFilters[filter])
      .join("&");

    const url = `https://efast.com/search?brand=${filters}`;
    setGeneratedUrl(url); // Almacena la URL generada en el estado
    return url;
  };

  const buttonStyle = {
    padding: "10px",
    border: "none",
    cursor: "pointer",
    margin: "1px",
    borderRadius: "5px",
    fontSize: "smaller",
    
  };

  // datos para los filtros de búsqueda
  const filterButtonsData = [
    { id: "coche", text: "Coche" },
    { id: "moto", text: "Moto" },
    { id: "elefante", text: "Híbrido Puro" }
  ];

  const filterButtonsData2 = [
    { id: "electric", text: "100% Electrico" },
    { id: "hybridPluggable", text: "Híbrido Enchufable" },
    { id: "hybridPure", text: "Híbrido Puro" },
    { id: "hybridnoEnchufable", text: "Híbrido no Enchufable" },
    { id: "ligthHibrid", text: "Híbrido Ligero" }
  ];

  const filterButtonsData3 = [
    { id: "bmw", text: "BMW" },
    { id: "tesla", text: "Tesla" },
    { id: "toyota", text: "Toyota" },
    { id: "mazda", text: "Mazda" },
    { id: "nissan", text: "Nissan" },
  ];

  return (
    <Form className="form">
      {/* genera dinámicamente los botones de filtro1 */}
      <div className="mb-2 d-flex justify-content-start flex-wrap">
        {filterButtonsData.map((button) => (
          <button
            key={button.id}
            onClick={(event) => {
              event.preventDefault();
              toggleFilter(button.id);
            }}
            style={{
              ...buttonStyle,
              backgroundColor: selectedFilters[button.id]
                ? "#4CAF50"
                : "#216AD9",
            }}
          >
            {button.text}
          </button>
        ))}
      </div>

      {/* genera dinámicamente los botones del 3 filtro */}
      <div className="mb-2 d-flex justify-content-start flex-wrap">
        {filterButtonsData3.map((button) => (
          <button
            key={button.id}
            onClick={(event) => {
              event.preventDefault();
              toggleFilter(button.id);
            }}
            style={{
              ...buttonStyle,
              backgroundColor: selectedFilters[button.id]
                ? "#4CAF50"
                : "#216AD9",
            }}
          >
            {button.text}
          </button>
        ))}
      </div>

      {/* genera dinámicamente los botones del 2 filtro */}
      <div className="mb-2 d-flex align-items-center justify-content-start flex-wrap">
        {filterButtonsData2.map((button) => (
          <button
            key={button.id}
            onClick={(event) => {
              event.preventDefault();
              toggleFilter(button.id);
            }}
            style={{
              ...buttonStyle,
              backgroundColor: selectedFilters[button.id]
                ? "#4CAF50"
                : "#216AD9",
            }}
          >
            {button.text}
          </button>
        ))}

        {/* botón para generar la URL */}
        <div className="mb-2">
          <button type="button" onClick={() => generateUrl()}>
            Generar URL
          </button>
        </div>
      </div>

      {/* muestra la URL generada */}
      {generatedUrl && (
        <div>
          <p>URL generada: {generatedUrl}</p>
        </div>
      )}

      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Salida" />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Llegada" />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Journey date" />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Journey time"
          />
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn" onClick={() => generateUrl()}>
            Encontrar Vehiculo
          </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
