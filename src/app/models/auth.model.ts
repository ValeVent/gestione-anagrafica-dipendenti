export interface IUser {
  address: Address
  id: number
  email: string
  username: string
  password: string
  name: Name
  phone: string
  __v: number
}

export interface Address {
  geolocation: Geolocation
  city: string
  street: string
  number: number
  zipcode: string
}

export interface Geolocation {
  lat: string
  long: string
}

export interface Name {
  firstname: string
  lastname: string
}


export interface ILoginResponse {
    "token": "string"
}