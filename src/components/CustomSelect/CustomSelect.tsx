import { Form, Select } from 'antd';
import type { SelectProps } from 'antd';
import { useRef } from 'react';

const options: SelectProps['options'] = [
  {
    label: 'Хунзах',
    value: 'Хунзах',
  },
  {
    label: 'Гуниб',
    value: 'Гуниб',
  },
  {
    label: 'Бархан',
    value: 'Бархан Сарыкум',
  },
  {
    label: 'Куруш',
    value: 'Куруш',
  },
];

export const CustomSelect = () => {

  const ref = useRef(null);
  return (
    <Form.Item
      name='destinations'
      rules={[{ required: true, message: 'Выберите куда поехать!' }]}
      style={{ marginBottom: 30 }}
    >
      <Select
        mode='multiple'
        allowClear
        style={{ width: '100%' }}
        placeholder='Куда едем?'
        options={options}
        ref={ref}
      />
    </Form.Item>
  );
};
