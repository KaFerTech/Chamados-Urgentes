const express = require('express');
const cors = require('cors');
const { Ticket } = require('./models');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/tickets', async (req, res) => {
  const tickets = await Ticket.findAll();
  res.json(tickets);
});

app.post('/tickets', async (req, res) => {
  const { ticketId, anyDesk, status } = req.body;
  const ticket = await Ticket.create({ ticketId, anyDesk, status, createdAt: new Date() });
  res.json(ticket);
});

app.put('/tickets/:id', async (req, res) => {
  const { id } = req.params;
  const { status, technician } = req.body;
  const ticket = await Ticket.findByPk(id);
  ticket.status = status;
  ticket.technician = technician;
  ticket.updatedAt = new Date();
  await ticket.save();
  res.json(ticket);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});