export enum EMonthValues {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

export enum EMonthKeys {
  January = 'January',
  February = 'February',
  March = 'March',
  April = 'April',
  May = 'May',
  June = 'June',
  July = 'July',
  August = 'August',
  September = 'September',
  October = 'October',
  November = 'November',
  December = 'December',
}

export type IMonths = {
  monthNumber: number;
  info: IMonth;
}[];

export type IMonth = {
  [key: number]: IMonthItem[];
};

export type IMonthItem = {
  firstName: string;
  lastName?: string;
  email?: string;
  gender?: EGender;
  age?: number;
  date: string;
  time?: string;
};

export type IMonthItemForm = {
  firstName: string;
  lastName: string;
  email: string;
  gender: EGender;
  age: number;
  date: Date;
  time: Date;
};

export enum EGender {
  male = 'male',
  female = 'female',
}

[
  {
    '1': {
      '8': [{ firtName: 'string' }],
    },
  },
];
