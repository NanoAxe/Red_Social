import { Usuarios } from './usuarios';
export class Publicaciones{
    idPublicacion?: number | undefined;
    urlImg?: string | undefined;
    img?: string | undefined;
    descripcion?: string | undefined;
    likes!: number;
    usuario: Usuarios | undefined;
}