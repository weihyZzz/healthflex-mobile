export interface IStudent {
  id: string;
  tel: string;
  name: string;
  avatar: string;
}

export interface IPropChild {
  children: React.ReactNode;
}
export interface IProductType {
  key: string;
  title: string;
}

export type TProductTypeQuery = { [key: string]: { __typename?: 'Query', data: IProductType[] } };
