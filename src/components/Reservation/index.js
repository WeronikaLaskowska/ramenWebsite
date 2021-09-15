import React from 'react'
import { ReservationContainer, ReservationForm, ReservationHeader, ReservationInput, ReservationLabel, ReservationLowerHeader, ReservationPicture, SubmitButton } from './ReservationElements'
import reservation from '../../images/reservation.png'

const Reservation = () => {
    return (
        <>
        <ReservationHeader>make a Reservation.</ReservationHeader>
        <ReservationLowerHeader>please fill the form below, and our team will contact you as soon as possible to arrange a reservation.</ReservationLowerHeader>
        <ReservationContainer>
        <ReservationPicture src={reservation}></ReservationPicture>
        <ReservationForm>
            
                <ReservationLabel type="text" >fist name.</ReservationLabel>
                <ReservationInput required></ReservationInput>
           
            
                <ReservationLabel type="text">last name.</ReservationLabel>
                <ReservationInput required></ReservationInput>
           
            
                <ReservationLabel type="email">e-mail.</ReservationLabel>
                <ReservationInput required></ReservationInput>
           
            
                <ReservationLabel type="number">phone number.</ReservationLabel>
                <ReservationInput required></ReservationInput>
                 
                 <SubmitButton type="submit">Submit</SubmitButton>

        </ReservationForm>
        

        </ReservationContainer>
        </>
    )
}

export default Reservation
