'use client';
import { createCalendar } from "@/app/api/workshop/calendars/call";
import clientsModel, { ClientsModel } from "@/models/workshops/clients.model";
import { InspectionsModel } from "@/models/workshops/inspections.model";
import { OrderWorkshopModel } from "@/models/workshops/orders.model";
import { VehiclesModel } from "@/models/workshops/vehicles.model";
import { Scheduler } from "@aldabil/react-scheduler"
import { EventActions, ProcessedEvent } from "@aldabil/react-scheduler/types";
import { FunctionComponent, useState } from "react";
import { toast } from "react-toastify";
type SchedulerProps = {
    userid: string;
    orders: OrderWorkshopModel[],
    clients: ClientsModel[],
    vehicles: VehiclesModel[],
    inspections: InspectionsModel[]
}
const SchedulerRender: FunctionComponent<SchedulerProps> = ({userid, orders, clients, vehicles, inspections}) => {

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
    const handleConfirm = async (
        event: ProcessedEvent,
        action: EventActions
      ): Promise<ProcessedEvent> => {
        console.log("handleConfirm =", action, event.clients);
    
        /**
         * Make sure to return 4 mandatory fields:
         * event_id: string|number
         * title: string
         * start: Date|string
         * end: Date|string
         * ....extra other fields depend on your custom fields/editor properties
         */
        // Simulate http request: return added/edited event
        return new Promise(async (res, rej) => {
          if (action === "edit") {
            /** PUT event to remote DB */
          } else if (action === "create") {
            /**POST event to remote DB */
            const body = {
                client: event?.clients ?? '',
                vehicle: event?.vehicles ?? '',
                inspection: event?.inspections ?? '',
                owner: userid,
                title: event.title,
                dateStart: event.start,
                dateEnd: event.end,
                checked: 'off'
            }
            const response = await createCalendar(body);
            if(response) {
                toast.success('Añadiste un nuevo recordatorio.');
            } else toast.error('Ocurrio un problema añadiendo tu recordatorio.');
          }
    
          
        });
    };
    return <div>
        <Scheduler
        
        onConfirm={handleConfirm}
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
                name: "vehicles",
                type: "select",
                // Should provide options with type:"select"
                options: [
                    ...vehicles?.map((e, index: number) => {
                        return {
                            id: index,
                            text: e?.brand + ' ' + e?.model,
                            value: e?._id
                        }
                    })
                ],
                config: { label: "Vehículos", required: false, errMsg: "Selecciona un vehículo" }
            },
            {
                name: "clients",
                type: "select",
                // Should provide options with type:"select"
                options: [
                    ...clients?.map((e, index: number) => {
                        return {
                            id: index,
                            text: e?.name + ' ' + e?.lastname,
                            value: e?._id
                        }
                    })
                ],
                config: { label: "Clientes", required: false, errMsg: "Selecciona un cliente" }
            },
            {
                name: "inspections",
                type: "select",
                // Should provide options with type:"select"
                options: [
                    ...inspections?.map((e, index: number) => {
                        return {
                            id: index,
                            text: 'Inspección #' + (index +1),
                            value: e?._id
                        }
                    })
                ],
                config: { label: "Inspección", required: false, errMsg: "Selecciona un cliente" }
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