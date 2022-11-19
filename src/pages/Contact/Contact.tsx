import React from 'react';

export const Contact = () => {
  return (
    <div className='container-fluid py-4'>
      <div className='container py-4'>
        <div className='text-center mb-3 pb-3'>
          <h6
            className='text-primary text-uppercase'
            style={{ letterSpacing: 5 }}
          >
            Контакты
          </h6>
          <h1>Ответим на ваши вопросы</h1>
        </div>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='contact-form bg-white' style={{ padding: 30 }}>
              <div id='success'></div>
              <form name='sentMessage' id='contactForm' noValidate>
                <div className='form-row'>
                  <div className='control-group col-sm-6'>
                    <input
                      type='text'
                      className='form-control p-4'
                      id='name'
                      placeholder='Имя'
                      required
                      data-validation-required-message='Please enter your name'
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                  <div className='control-group col-sm-6'>
                    <input
                      type='email'
                      className='form-control p-4'
                      id='email'
                      placeholder='Email'
                      required
                      data-validation-required-message='Please enter your email'
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                </div>
                <div className='control-group'>
                  <input
                    type='text'
                    className='form-control p-4'
                    id='subject'
                    placeholder='Описание'
                    required
                    data-validation-required-message='Please enter a subject'
                  />
                  <p className='help-block text-danger'></p>
                </div>
                <div className='control-group'>
                  <textarea
                    className='form-control py-3 px-4'
                    rows={5}
                    id='message'
                    placeholder='Сообщение'
                    required
                    data-validation-required-message='Please enter your message'
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div className='text-center'>
                  <button
                    className='btn btn-primary py-3 px-4'
                    type='submit'
                    id='sendMessageButton'
                  >
                    Отправить
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
