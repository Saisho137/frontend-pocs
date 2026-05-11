import { useForm } from "react-hook-form";
import { edadValidator } from "./validators";

const Formulario = () => {

    const { register, formState: { errors }, watch, handleSubmit } = useForm({
        defaultValues: {
            nombre: 'Santiago Betancur Duque',
            direccion: 'Calle 25 sur A #99 - 27'
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    const incluirTelefono = watch('incluirTelefono');

    return (
        <div>
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nombre: </label>
                    <input type="text"
                        {...register('nombre', { required: true, maxLength: 20 })} /
                    >
                    {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                    {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener menos de 20 caracteres</p>}
                </div>
                <div>
                    <label>Dirección: </label>
                    <input type="text" {...register('direccion', {
                        required: true
                    })} />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" {...register('email', {
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                    })} />
                    {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
                </div>
                <div>
                    <label>Edad: </label>
                    <input type="text" {...register('edad', {
                        validate: edadValidator
                    })} />
                    {errors.edad && <p>La edad debe estar entre 18 y 65</p>}
                </div>
                <div>
                    <label>País: </label>
                    <select {...register('pais')}>
                        <option value="co">Colombia</option>
                        <option value="us">USA</option>
                        <option value="pe">Perú</option>
                    </select>
                </div>
                <div>
                    <label>Desea incluir telefono? </label>
                    <input type="checkbox" {...register('incluirTelefono')} />
                </div>
                {incluirTelefono && (
                    <div>
                        <label>Teléfono</label>
                        <input type="text" {...register('telefono')} />
                    </div>
                )}
                <input type="submit" value="Enviar" />
            </form>
            <p><b>Contenido de 'Nombre': </b>{watch('nombre')}</p>
        </div>
    )
}

export default Formulario;