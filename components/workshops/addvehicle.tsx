'use client';
import { FunctionComponent, useState } from "react";
import Select from "react-dropdown-select";
import { Popover } from "react-tiny-popover";
import { toast } from "react-toastify";
import axios from "axios";
import { VehiclesBrandModel } from "@/models/workshops/vehicles/brands.model";
import { createVehicleBrand, getVehicleBrands, updateVehicleBrands } from "@/app/api/workshop/vehicles/call";
type AddVehicleType = {
    brands: VehiclesBrandModel[],
    setVehicleBrands: any
}
const AddVehicle: FunctionComponent<AddVehicleType> = ({brands, setVehicleBrands}) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
    const [typeSelected, setSelectedType] = useState<number>(-1);
    const [vehicleBrand, setVehicleBrand] = useState<string>('')
    const [newValue, setNewValue] = useState<string>('')
    const buildForm = async () => {
        if(typeSelected !== -1){
            if(newValue !== ''){
                if(typeSelected === 1 && vehicleBrand === '') return toast.error('Selecciona una marca');
                if(typeSelected === 0){
                    const object = {
                        brand: newValue,
                        models: []
                    };
                    const response = await createVehicleBrand(object);
                    if(response){
                        setVehicleBrands([...brands, object]);
                        setIsPopoverOpen(false);
                        toast.success('Creaste una nueva marca');
                    } else toast.error('Ocurrio un problema');
                } else {
                    var object = brands?.find((e) => e?.brand === vehicleBrand);
                    object.models = [...brands?.find((e) => e.brand === vehicleBrand)?.models, {title: newValue}];
                    const response = await updateVehicleBrands({
                        _id: brands?.find((e) => e.brand === vehicleBrand)?._id,
                        object
                    });
                    if(response){
                        brands[brands?.findIndex((e) => e?.brand === vehicleBrand)] = object;
                        setVehicleBrands(brands);
                        setIsPopoverOpen(false);
                        toast.success('Creaste un nuevo modelo');
                    } else toast.error('Ocurrio un problema');
                }
            } else return toast.error('Completa el formulario');
        } else return toast.error('Selecciona un tipo');
    }
    return <Popover
        
        containerStyle={{
            backgroundColor: 'white',
            padding: '1rem',
            border: '1px solid rgba(0, 0, 0, 0.2)',
            borderRadius: '.5rem'
        }}
        isOpen={isPopoverOpen}
        positions={['top', 'bottom', 'left', 'right']} // preferred positions by priority
        content={
        <div className="p1">
            <select value={typeSelected} onChange={(e) => setSelectedType(Number(e.target.value))} className="inputForm w100">
                <option value={-1}>Tipo</option>
                <option value={0}>Nueva marca</option>
                <option value={1}>Nuevo modelo</option>
            </select>
            {typeSelected === 1 ? <Select
                style={{color: '#8C95A3', backgroundColor: '#F2F3F5', minWidth: '150px'}}
                options={

                    [...brands?.map((e) => {
                        return {
                                label: e?.brand,
                                value: e?.brand
                            }
                    })]}
                separator
                placeholder="Marca"
                className="inputForm w100 mt1 br05"
                onChange={(values) => {
                        if(values[0]?.value !== 'other') {
                            setVehicleBrand(values[0]?.value);
                        return;
                    }
                } } values={[{value: vehicleBrand, label: vehicleBrand === '' ? 'Marca' : vehicleBrand }]}
                                        /> : <div></div>}
            <input onChange={(e) => setNewValue(e?.target?.value)} value={newValue} className="inputForm w100 mt1" placeholder=""/>
            <button className="btn mt1 btn-gradient-primary" onClick={buildForm}>Agregar</button>
        </div>
    }
        >
        <button className="color-link" onClick={() => {
            setIsPopoverOpen(!isPopoverOpen);
            setVehicleBrand('');
            setSelectedType(-1);
            setNewValue('');
            }}>
            Agregar
        </button>
    </Popover>
}
export default AddVehicle;