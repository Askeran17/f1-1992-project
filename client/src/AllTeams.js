import Container from '@mui/material/Container';
import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const teams = [
  { name: 'Williams-Renault', drivers: ['Nigel Mansell', 'Riccardo Patrese'], car: '/images/wf92.jpg', description: 'Williams dominated the 1992 season with the FW14B and advanced technology.' },
  { name: 'Benetton-Ford', drivers: ['Michael Schumacher', 'Martin Brundle'], car: '/images/benetton92.jpg', description: 'Benetton was a strong contender with young Michael Schumacher.' },
  { name: 'McLaren-Honda', drivers: ['Ayrton Senna', 'Gerhard Berger'], car: '/images/mclaren92.jpg', description: 'McLaren, led by Senna, remained competitive despite Honda’s withdrawal.' },
  { name: 'Ferrari', drivers: ['Jean Alesi', 'Ivan Capelli'], car: '/images/ferrari92.jpg', description: 'Ferrari struggled for pace but remained a fan favorite.' },
  { name: 'Lotus-Ford', drivers: ['Mika Häkkinen', 'Johnny Herbert'], car: '/images/lotus92.jpg', description: 'Lotus showed flashes of speed with young talents.' },
  { name: 'Tyrrell-Ilmor', drivers: ['Andrea de Cesaris', 'Olivier Grouillard'], car: '/images/tyrrell92.jpg', description: 'Tyrrell fielded experienced drivers but lacked consistency.' },
  { name: 'Dallara-Ferrari', drivers: ['Pierluigi Martini', 'JJ Lehto'], car: '/images/dallara92.jpg', description: 'Dallara struggled to score points in a competitive field.' },
  { name: 'Minardi-Lamborghini', drivers: ['Gianni Morbidelli', 'Christian Fittipaldi'], car: '/images/minardi92.jpg', description: 'Minardi continued to fight as an underdog.' },
  { name: 'March-Ilmor', drivers: ['Karl Wendlinger', 'Paul Belmondo'], car: '/images/march92.jpg', description: 'March had a challenging season with limited resources.' },
  { name: 'Ligier-Renault', drivers: ['Erik Comas', 'Thierry Boutsen'], car: '/images/ligier92.jpg', description: 'Ligier returned to Renault power but struggled for results.' },
  { name: 'Venturi-Larrousse-Lamborghini', drivers: ['Ukyo Katayama', 'Bertrand Gachot'], car: '/images/venturi92.jpg', description: 'Larrousse fielded a new lineup and Lamborghini engines.' },
  { name: 'Fondmetal-Ford', drivers: ['Gabriele Tarquini', 'Andrea Chiesa'], car: '/images/ford92.jpg', description: 'Fondmetal faced reliability issues throughout the year.' },
  { name: 'Andrea Moda S921', drivers: ['Roberto Moreno', 'Perry McCarthy'], car: '/images/moda92.webp', description: 'Andrea Moda became infamous for failing to qualify.' },
  { name: 'Jordan-Yamaha', drivers: ['Stefano Modena', 'Maurício Gugelmin'], car: '/images/jordan92.jpg', description: 'Jordan switched to Yamaha engines for 1992.' },
  { name: 'Brabham-Judd', drivers: ['Eric van de Poele', 'Damon Hill'], car: '/images/brabham92.jpg', description: 'Brabham, a historic team, struggled to survive.' },
];

export default function AllTeams() {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 2, sm: 4 }, px: { xs: 1, sm: 2 } }}>
      <Typography variant="h3" align="center" gutterBottom>All Teams</Typography>
      <Grid container spacing={3} justifyContent="center">
        {teams.map((team) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={team.name}>
            <Card sx={{ minHeight: 250, display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
                <img src={team.car} alt={team.name + ' car'} style={{ width: '100%', maxHeight: 140, objectFit: 'cover', borderRadius: 8, marginBottom: 8 }} />
                <Typography variant="h6" noWrap align="center">{team.name}</Typography>
                <Typography color="text.secondary" noWrap align="center">Drivers: {team.drivers.join(', ')}</Typography>
                <Typography color="text.secondary" paragraph align="center" sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>{team.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
