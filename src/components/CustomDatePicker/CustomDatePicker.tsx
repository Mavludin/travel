import { DatePicker, Form } from 'antd';

export const CustomDatePicker = () => {
  return (
    <Form.Item
      name='datePicker'
      rules={[{ required: true, message: 'Выберите дату' }]}
    >
      <DatePicker placeholder='Выберите дату' />
    </Form.Item>
  );
};
