import { Usuarios } from './usuarios';
export class Perfiles{
    idPerfil?: number | undefined;
    imgPerfil?: string | undefined;
    urlPerfil?: string | undefined;
    nombre: string | undefined;
    apellido: string | undefined;
    estado?: string | undefined;
    usuario: Usuarios | undefined;
}