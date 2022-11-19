import { Button, Form } from 'antd';

import { CustomSelect } from '../CustomSelect/CustomSelect';
import { CustomDatePicker } from '../CustomDatePicker/CustomDatePicker';
import { InputNumber } from 'antd';
import { forwardRef } from 'react';
import { SelectedData } from '../../pages/Home/Home';

type Props = {
  setSelectedData: (value: SelectedData) => void;
};

type FormData = {
  destinations: string[];
  amount: number;
  datePicker: any;
}

const getDate = (day: number, month: number, year: number) => {

  const addZero = (number: number) => {
    return number < 10 ? `0${number}` : ''+ number
  }

  return `${addZero(day)}/${addZero(month)}/${addZero(year)}`
}

export const Booking = forwardRef(({ setSelectedData }: Props, ref: any) => {
  const onFinish = (values: FormData) => {
    setSelectedData({
      destinations: values.destinations,
      amount: values.amount,
      date: getDate(values.datePicker.$D, values.datePicker.$M, values.datePicker.$y),
    })
  };

  return (
    <div ref={ref} className='container-fluid booking mt-5 pb-5'>
      <div className='container pb-5'>
        <Form
          name='normal_login'
          className='login-form'
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <div className='bg-light shadow mainSearch' style={{ padding: 30 }}>
            <div className='row align-items-center' style={{ minHeight: 60 }}>
              <div className='col-md-10'>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='mb-3 mb-md-0'>
                      <div
                        className='date'
                        id='date1'
                        data-target-input='nearest'
                      >
                        <CustomSelect />
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='mb-3 mb-md-0'>
                      <div
                        className='date'
                        id='date1'
                        data-target-input='nearest'
                      >
                        <CustomDatePicker />
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='mb-3 mb-md-0'>
                      <Form.Item
                        name='amount'
                        rules={[
                          { required: true, message: 'Укажите количество!' },
                        ]}
                      >
                        <InputNumber
                          min={1}
                          max={10}
                          placeholder='Сколько человек?'
                          size='large'
                        />
                      </Form.Item>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-2'>
                <Form.Item>
                  <Button
                    type='primary'
                    htmlType='submit'
                    className='btn btn-primary btn-block searchSubmit'
                    style={{ height: 47, marginTop: -2 }}
                  >
                    Поиск
                  </Button>
                </Form.Item>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
});
