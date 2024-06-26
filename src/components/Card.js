import React from 'react';

const Card = ({ ticket, updateTicketStatus }) => {
  const { id, ticketId, anyDesk, createdAt, status, technician } = ticket;

  const handleAssign = () => {
    updateTicketStatus(id, 'inProgress');
  };

  const handleFinish = () => {
    updateTicketStatus(id, 'finished');
  };

  const ticketUrl = `https://glpi-clientes.escriba.com.br/front/ticket.form.php?id=${ticketId}`;

  return (
    <div className="card">
      <p>Número do Chamado: <a href={ticketUrl} target="_blank" rel="noopener noreferrer">{ticketId}</a></p>
      <p>Data e Hora: {new Date(createdAt).toLocaleString()}</p>
      {anyDesk && <p>AnyDesk: {anyDesk}</p>}
      {status === 'unassigned' && <button onClick={handleAssign}>Atribuir</button>}
      {status === 'inProgress' && (
        <>
          <p>Técnico: {technician}</p>
          <button onClick={handleFinish}>Finalizar</button>
        </>
      )}
      {status === 'finished' && (
        <>
          <p>Técnico: {technician}</p>
          <p>Data e Hora de Encerramento: {new Date(ticket.updatedAt).toLocaleString()}</p>
        </>
      )}
    </div>
  );
};

export default Card;