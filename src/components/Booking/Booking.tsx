import { CustomSelect } from '../CustomSelect/CustomSelect';
import { CustomDatePicker } from '../CustomDatePicker/CustomDatePicker';
import { InputNumber } from 'antd';

export const Booking = () => {
  return (
    <div className='container-fluid booking mt-5 pb-5'>
      <div className='container pb-5'>
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
                    <InputNumber
                      min={1}
                      max={10}
                      placeholder='Сколько человек?'
                      size='large'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-2'>
              <button
                className='btn btn-primary btn-block searchSubmit'
                type='submit'
                style={{ height: 47, marginTop: -2 }}
              >
                Поехали
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
