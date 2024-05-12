import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";

import { Form, FormGroup } from "reactstrap";

//Atento con esto, lo mas probable es que haya que reformular este formulario
const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
      
        <FormGroup className="form__group">
          <input type="date" placeholder="Journey date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Journey time"
            required
          />
        </FormGroup>

        <FormGroup className="select__group">
          <select>
            <option value="">Escoje un Vehículo</option>
            <option value="Coche">Coche</option>
            <option value="Moto">Moto</option>
            <option value="Elefante">Elefante</option>
          </select>
        </FormGroup>

        <FormGroup className="select__group">
          <select>
            <option value="">Tipo de Combustión</option>
            <option value="Electrico">100% Electrico</option>
            <option value="HíbridoEnchufable">Híbrido Enchufable</option>
            <option value="HíbridoPuro">Híbrido Puro</option>
            <option value="HíbridoNoEnchufable">Híbrido no Enchufable</option>
            <option value="HíbridoNoEnchufable">Híbrido Ligero</option>
          </select>
        </FormGroup>

        <FormGroup className="select__group">
          <select>
            <option value="">Escoje tu Marca</option>
            <option value="BMW">BMW</option>
            <option value="Tesla">Tesla</option>
            <option value="HíbridoPuro">Toyota</option>
            <option value="HíbridoNoEnchufable">Mazda</option>
            <option value="HíbridoNoEnchufable">Nissan</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Encontrar Vehiculo</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
