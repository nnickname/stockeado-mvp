'use client';
import { Scheduler } from "@aldabil/react-scheduler"
import { ProcessedEvent } from "@aldabil/react-scheduler/types";
import { useState } from "react";

const SchedulerRender = ( ) => {

    const date = new Date();
    var date15m = date;
    date15m.setHours(date.getHours() + 1);
    const events: ProcessedEvent[] = [
        {
            event_id: 1,
            title: '100.000km revision',
            start: new Date(),
            end: date15m,
            disabled: false,
            color: '#D0DCFF !important',
            textColor: '#1E367D',
            editable: true,
            deletable: false,
            draggable: false,
        }
    ]
    const [finalEvents, setFinalEvents] = useState<ProcessedEvent[]>(events);
    return <div>
        <Scheduler
        events={events}
        translations={
            {
                navigation: {
                    month: "Mes",
                    week: "Semana",
                    day: "Día",
                    today: "Hoy",
                    agenda: "Agenda"
                },
                form: {
                    addTitle: "Añadir Recordatorio",
                    editTitle: "Editar Recordatorio",
                    confirm: "Confirmar",
                    delete: "Eliminar",
                    cancel: "Cancelar"
                    },
                    event: {
                    title: "Título",
                    start: "Desde",
                    end: "Hasta",
                    allDay: "Todo el día"
                   },
                    validation: {
                    required: "Requerido",
                    invalidEmail: "Mail invalido",
                    onlyNumbers: "Solo numeros",
                    min: "Minimum {{min}} letters",
                    max: "Maximum {{max}} letters"
                    },
                    moreEvents: "Mas eventos",
                    noDataToDisplay: "No hay recordatorios",
                    loading: "Cargando..."
            }
        }
        agenda={false}
        deletable={false}
        fields={[
            {
            name: "Vehículos",
            type: "select",
            // Should provide options with type:"select"
            options: [
                { id: 1, text: "John", value: 1 },
                { id: 2, text: "Mark", value: 2 }
            ],
            config: { label: "Vehículos", required: true, errMsg: "Selecciona un vehículo" }
            },
            
            
        ]}
         week={{
           weekDays: [0, 1, 2, 3, 4, 5, 6],
           weekStartOn: 6,
           startHour: 0,
           endHour: 24,
           step: 60
         }}
         day={
            {
                startHour: 0, 
                endHour: 24, 
                step: 60,
                navigation: true
                }
         }
        />
    </div>
}
export default SchedulerRender;