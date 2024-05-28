'use client';
import { createCalendar, deleteCalendar, getAllCalendars, updateCalendar } from "@/app/api/workshop/calendars/call";
import { CalendarsModel } from "@/models/workshops/calendars.model";
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
    inspections: InspectionsModel[],
    calendars: CalendarsModel[],
    setCalendars: any,
}
const SchedulerRender: FunctionComponent<SchedulerProps> = ({userid, setCalendars, calendars, clients, vehicles, inspections}) => {

    const date = new Date();
    var date15m = date;
    date15m.setHours(date.getHours() + 1);
    const randomColors = ['#D0DCFF !important', '#f1ffd0 !important', '#ffd9d0 !important', '#dfffd0 !important'];
    const events: ProcessedEvent[] = [...calendars?.map((e, index: number) => {
        return {
            event_id: index,
            title: e?.title,
            start: new Date(e?.dateStart),
            end: new Date(e?.dateEnd),
            disabled: false,
            color: randomColors[(Math.floor(Math.random() * 3) + 0)],
            textColor: '#1E367D',
            deletable: true,
            draggable: false
        }
    })
        
    ]
    const [finalEvents, setFinalEvents] = useState<ProcessedEvent[]>(events);
    const handleDelete = async (deleteId: number): Promise<string> => {
        return new Promise(async (res, rej) => {
            const calendarCast = calendars?.find((e, index: number) => index === deleteId);
            if(calendarCast?._id !== null){
                const response = await deleteCalendar(String(calendarCast?._id));
                if(response){
                    const calendarsGet = await getAllCalendars(String(userid))
                    setCalendars(calendarsGet ?? []);
                    res(String(deleteId));
                    toast.success('Eliminaste un recordatorio');
                }
            }
          });
      }
    const handleConfirm = async (
        event: ProcessedEvent,
        action: EventActions
      ): Promise<ProcessedEvent> => {
        return new Promise(async (res, rej) => {
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
          if (action === "edit") {
            const response = await updateCalendar(String(calendars?.find((e, index: number) => index === Number(event?.event_id))?._id), body);
            if(response) {
                toast.success('Editaste un recordatorio.');
                const calendarsCast = await getAllCalendars(userid);
                setCalendars(calendarsCast ?? []);
                setTimeout(() => {
                    res({
                        ...event,
                        event_id: event.event_id
                    });
                }, 1000);
                
            } else toast.error('Ocurrio un problema añadiendo tu recordatorio.');
          } else if (action === "create") {            
            const response = await createCalendar(body);
            if(response) {
                toast.success('Añadiste un nuevo recordatorio.');
                const calendarsCast = await getAllCalendars(userid);
                setCalendars(calendarsCast ?? []);
                setTimeout(() => {
                    res({
                        ...event,
                        event_id: event.event_id
                    });
                }, 1000);
            } else toast.error('Ocurrio un problema añadiendo tu recordatorio.');
          }
    
          
        });
    };
    return <div>
        <Scheduler
        onDelete={handleDelete}
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