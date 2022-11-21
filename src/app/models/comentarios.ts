import { Usuarios } from './usuarios';
import { Publicaciones } from './publicaciones';
export class Comentarios{
    idComentario: number | undefined;
    contenido: string | undefined;
    usuario: Usuarios | undefined;
    publicacion: Publicaciones | undefined;
}