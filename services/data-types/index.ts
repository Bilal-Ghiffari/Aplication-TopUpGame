export interface CategoryTypes {
  _id: string;
  name: string;
  __v: number;
}

export interface GameItemTypes {
  _id: string;
  name: string;
  category: CategoryTypes;
  status: string;
  thumbnail: string;
}

export interface LoginTypes {
  email: string;
  password: string;
}

export interface UserTypes {
  id: string;
  email: string;
  nama: string;
  phoneNumber: string;
  avatar: string;
}

export interface JwtPayloadTypes {
  player: UserTypes;
  // kadaluarsa token = iat
  iat: number;
}
