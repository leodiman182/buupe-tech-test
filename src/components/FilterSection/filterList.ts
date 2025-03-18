type TFilterList = { description: string, keyword: string }[];

export const filterList: TFilterList = [
  {
    description: 'Abaixo de R$ 50,00',
    keyword: 'below',
  },
  {
    description: 'Entre R$ 50,00 e R$ 100,00',
    keyword: 'between',
  },
  {
    description: 'Acima de R$ 100,00',
    keyword: 'above',
  },
];