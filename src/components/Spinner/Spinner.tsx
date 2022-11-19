import { Spin } from 'antd';

export const Spinner = () => {
  return (
    <div className='container-fluid booking mt-5 pb-5'>
      <div className='container pb-5 spinnerWrapper'>
        <Spin size='large' tip='Загружаем данные о поездке' />
      </div>
    </div>
  );
};
