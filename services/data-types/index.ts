export interface CategoryTypes {
  _id: string;
  name: string;
  __v: number;
}

export interface FavoriteGame {
  _id: string;
  name: string;
}

export interface GameItemTypes {
  _id: string;
  name: string;
  category: CategoryTypes;
  status: string;
  thumbnail: string;
}

export interface BankTypes {
  _id: string;
  name: string;
  noRekening: string;
  bankName: string;
}

export interface PaymentTypes {
  _id: string;
  type: string;
  status: string;
  banks: BankTypes[];
}

export interface NominalsTypes {
  _id: string;
  coinQuantity: number;
  coinName: string;
  price: number;
}

export interface CheckoutTypes {
  voucher: string;
  nominal: string;
  payment: string;
  bank: string;
  name: string;
  accountUser: string;
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

export interface HistoryVoucherTopupTypes {
  gameName: string;
  category: string;
  thumbnail: string;
  coinName: string;
  coinQuantity: string;
  price: string;
}

export interface HistoryPaymentTypes {
  type: string;
  bankName: string;
  name: string;
  noRekening: string;
}

export interface HistoryTransactionTypes {
  _id: string;
  category: {
    name: string;
  };
  historyVoucherTopup: HistoryVoucherTopupTypes;
  historyPayment: HistoryPaymentTypes;
  value: number;
  tax: number;
  status: string;
  name: string;
  accountUser: string;
}

export interface TopUpCategoryTypes {
  _id: string;
  value: number;
  name: string;
}
