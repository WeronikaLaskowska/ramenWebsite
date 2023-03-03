import React from "react";
import {
  ReservationContainer,
  ReservationForm,
  ReservationHeader,
  ReservationInput,
  ReservationLabel,
  ReservationLowerHeader,
  ReservationPicture,
  SubmitButton,
} from "./ReservationElements";
import reservation from "../../images/reservation.png";
import { object, string, number, date, InferType } from "yup";
import {useForm} from 'react-hook-form'

const Reservation = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const { handleSubmit, errors, handleReset } = useForm({
    name: string().required(),
    lastName: string().required(),
    email: string().email(),
    phone: string().matches(phoneRegExp, "Phone number is not valid"),
  });

  const trySubmit = () => {
    console.log("nkjdasf");
  };

  return (
    <>
      <ReservationHeader id="reservations">
        make a Reservation.
      </ReservationHeader>
      <ReservationLowerHeader>
        please fill the form below, and our team will contact you as soon as
        possible to arrange a reservation.
      </ReservationLowerHeader>
      <ReservationContainer>
        <ReservationPicture
          data-aos="fade-up"
          src={reservation}
        ></ReservationPicture>
        <ReservationForm data-aos="fade-up">
          <ReservationLabel type="text">fist name.</ReservationLabel>
          <ReservationInput required></ReservationInput>

          <ReservationLabel type="text">last name.</ReservationLabel>
          <ReservationInput required></ReservationInput>

          <ReservationLabel type="email">e-mail.</ReservationLabel>
          <ReservationInput required></ReservationInput>

          <ReservationLabel type="number">phone number.</ReservationLabel>
          <ReservationInput required></ReservationInput>

          <SubmitButton onClick={trySubmit}>Submit</SubmitButton>
        </ReservationForm>
      </ReservationContainer>
    </>
  );
};

export default Reservation;
