import { Usuarios } from './usuarios';
export class Perfiles{
    idPerfil?: number | undefined;
    nombreFoto?: string | undefined;
    rutaFoto?: string | undefined;
    nombre: string | undefined;
    apellido: string | undefined;
    estado?: string | undefined;
    usuario: Usuarios | undefined;
}