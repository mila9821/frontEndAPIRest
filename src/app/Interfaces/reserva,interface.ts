export interface Reserva {
    id:              number;
    ingreso:         Date;
    salida:          Date;
    precio:          number;
    adelanto:        number;
    dias:            number;
    restaurantes:    any[];
    detalleReservas: any[];
}