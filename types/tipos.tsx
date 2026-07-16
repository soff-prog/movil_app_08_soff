export type Hechicero={
    id: string,
    nombre: string,
    nivel: number,
    manaMaximo: number,
    manaActual: number
}

export type Hechizo={
    id: string,
    nombre: string,
    costoMana: number,
    danioBase: number,
    idHechicero: string
}