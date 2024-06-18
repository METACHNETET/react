
import { observer } from 'mobx-react';
import React from 'react'
import { useEffect } from 'react'
import dataStore from '../../data/dataStore'
import { getAppointment } from '../../data/server';
import { addAppointment } from '../../data/server';
import Appointment from './Appointment'
import { useState } from 'react'
import './Appointment.css'

const AppointmentList = (observer(() => {

    const [selectedDate, setSelectedDate] = useState('MM/DD/YYYY');
    useEffect(() => {

        if (!dataStore.appointments.length > 0) {
            getAppointment()
        }

    }, [])
    return (
        <>

            <div className='appointmentList'>{dataStore.appointments.map((appointment, indexA) => {
                return <Appointment key={indexA} appointment={appointment}></Appointment>
            })}
            </div>
           

        </>
    )
}))
export default AppointmentList;
