import React, { useState } from 'react';
import Card from './Card';
import AddCardForm from './AddCardForm';

const Column = ({ title, tickets, addTicket, updateTicketStatus }) => {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="column">
      <h2>{title}</h2>
      {title === 'Não Atribuídos' && (
        <button onClick={() => setShowAddForm(!showAddForm)}>
          {showAddForm ? 'Cancelar' : 'Adicionar Chamado'}
        </button>
      )}
      {showAddForm && <AddCardForm addTicket={addTicket} />}
      {tickets.map(ticket => (
        <Card key={ticket.id} ticket={ticket} updateTicketStatus={updateTicketStatus} />
      ))}
    </div>
  );
};

export default Column;