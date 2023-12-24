import React, { useState } from 'react';
import axios from 'axios';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // Другие поля формы
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://example.com/api/endpoint', formData);
      console.log('Ответ сервера:', response.data);
      // Здесь можно добавить логику для обработки успешной отправки данных
    } catch (error) {
      console.error('Ошибка:', error);
      // Здесь можно добавить логику для обработки ошибок при отправке данных
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Имя"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      {/* Другие поля формы */}
      <button type="submit">Отправить</button>
    </form>
  );
};

export default FormComponent;
