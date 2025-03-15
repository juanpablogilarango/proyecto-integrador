import React from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import Button from "./Button";
import "./styles.css";

const ReservaForm = () => {
  return (
    <div className="container">
      <h2>Reserva tu estadía</h2>

      <h3>Detalles de tu viaje</h3>
      <SelectField
        label="Plan vacacional *"
        id="plan"
        options={[
          { value: "", text: "Selecciona un plan", disabled: true },
          { value: "familiar", text: "Familiar" },
          { value: "pareja", text: "Pareja" },
          { value: "aventura", text: "Aventura" },
        ]}
      />

      <InputField label="Regreso *" type="date" id="regreso" />
      <InputField label="Fecha de salida *" type="date" id="salida" />
      <InputField label="Número de huéspedes *" type="number" id="huespedes" placeholder="Cantidad de huéspedes" />

      <h3>Información personal</h3>
      <div className="form-group">
        <InputField label="Nombre" type="text" id="nombre" placeholder="Tu nombre" />
        <InputField label="Apellido" type="text" id="apellido" placeholder="Tu apellido" />
      </div>

      <div className="form-group">
        <InputField label="Teléfono" type="tel" id="telefono" placeholder="Tu teléfono" />
        <InputField label="Correo electrónico *" type="email" id="email" placeholder="Tu correo" />
      </div>

      <div className="button-container">
        <Button text="Enviar" />
      </div>
    </div>
  );
};

export default ReservaForm;
