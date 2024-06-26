import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Column from './components/Column';
import './App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [technicianName, setTechnicianName] = useState('');

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await axios.get('http://localhost:5000/tickets');
      setTickets(response.data);
    };

    fetchTickets();
  }, []);

  const addTicket = async (ticket) => {
    const response = await axios.post('http://localhost:5000/tickets', { ...ticket, status: 'unassigned' });
    setTickets([...tickets, response.data]);
  };

  const updateTicketStatus = async (id, status) => {
    const ticketToUpdate = tickets.find(ticket => ticket.id === id);
    const response = await axios.put(`http://localhost:5000/tickets/${id}`, {
      ...ticketToUpdate,
      status,
      technician: technicianName,
      updatedAt: new Date(),
    });
    setTickets(tickets.map(ticket => (ticket.id === id ? response.data : ticket)));
  };

  return (
    <div>
      <div className="header">
        <input
          type="text"
          placeholder="Nome do Técnico"
          value={technicianName}
          onChange={(e) => setTechnicianName(e.target.value)}
        />
      </div>
      <div className="board">
        <Column
          title="Não Atribuídos"
          tickets={tickets.filter(ticket => ticket.status === 'unassigned')}
          addTicket={addTicket}
          updateTicketStatus={updateTicketStatus}
        />
        <Column
          title="Em Atendimento"
          tickets={tickets.filter(ticket => ticket.status === 'inProgress')}
          updateTicketStatus={updateTicketStatus}
        />
        <Column
          title="Finalizados"
          tickets={tickets.filter(ticket => ticket.status === 'finished')}
        />
      </div>
    </div>
  );
};

export default App;