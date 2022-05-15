export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  addr: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface IUsertemp {
  id: string;
  pwd: string;
  name: string;
  addr: string;
}
