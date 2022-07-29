export interface  PokemonResponse {
    nombre: "",
    experiencia:0,
    img: "",
    hp: 0,
    ataque: 0,
    defensa:0,
    especial_ataque:0,
    especial_defensa:0,
    velocidad: 0,
  }


export interface PokemonRequest {
    nombre: string
}

export interface MessageApi {
    MessageData:string
    SignalEvent:boolean
}