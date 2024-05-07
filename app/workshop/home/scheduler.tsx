import { Scheduler } from "@aldabil/react-scheduler"

const SchedulerRender = ( ) => {
    return <div>
        <Scheduler
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
           step: 30
         }}
         day={
            {
                startHour: 0, 
                endHour: 24, 
                step: 30,
                navigation: true
                }
         }
        />
    </div>
}
export default SchedulerRender;