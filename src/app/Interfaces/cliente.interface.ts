export interface Cliente {
    id:              number;
    nombre:          string;
    modo:            string;
    telefono:        string;
    email:           string;
    pais:            string;
    dni:             string;
    foto:            string;
    testimonios:     any[];
    detalleReservas: any[];
}