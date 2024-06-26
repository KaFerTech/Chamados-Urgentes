import React, { useState } from 'react';

const AddCardForm = ({ addTicket }) => {
  const [ticketUrl, setTicketUrl] = useState('');
  const [anyDesk, setAnyDesk] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ticketUrl) {
      const ticketId = new URL(ticketUrl).searchParams.get('id');
      if (ticketId) {
        addTicket({ ticketId, anyDesk });
        setTicketUrl('');
        setAnyDesk('');
      } else {
        alert('URL inválida. Certifique-se de que contém um parâmetro "id".');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="URL do Chamado"
        value={ticketUrl}
        onChange={(e) => setTicketUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="AnyDesk (opcional)"
        value={anyDesk}
        onChange={(e) => setAnyDesk(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AddCardForm;