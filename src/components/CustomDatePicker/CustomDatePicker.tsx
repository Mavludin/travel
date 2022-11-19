import { DatePicker, Form } from 'antd';
import type { DatePickerProps } from 'antd';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

export const CustomDatePicker = () => {
  return (
    <Form.Item
      name='datePicker'
      rules={[{ required: true, message: 'Выберите дату' }]}
    >
      <DatePicker onChange={onChange} placeholder='Выберите дату' />
    </Form.Item>
  );
};
