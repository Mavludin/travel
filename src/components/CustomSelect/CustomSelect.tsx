import { Select } from 'antd';
import type { SelectProps } from 'antd';

const options: SelectProps['options'] = [
  {
    label: "Хунзах",
    value: "Хунзах"
  },
  {
    label: "Гуниб",
    value: "Гуниб"
  },
  {
    label: "Бархан",
    value: "Бархан",
  },
  {
    label: "Куруш",
    value: "Куруш",
  },
];

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

export const CustomSelect = () => (
  <Select
    mode='multiple'
    allowClear
    style={{ width: '100%', marginBottom: 15 }}
    placeholder='Куда едем?'
    onChange={handleChange}
    options={options}
    
  />
);
