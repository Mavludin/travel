import { DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

export const CustomDatePicker = () => {
  return (
    <DatePicker onChange={onChange} placeholder="Выберите дату" />
  );
};
