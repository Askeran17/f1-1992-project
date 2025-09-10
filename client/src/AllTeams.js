import React from 'react';
import ChromaGrid from './components/ChromaGrid';
import './components/ChromaGrid.css';

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
  // Преобразуем данные для ChromaGrid
  const items = teams.map(team => ({
    image: team.car,
    title: team.name,
    subtitle: 'Drivers: ' + team.drivers.join(', '),
    handle: team.description,
    borderColor: '#e10600',
    gradient: 'linear-gradient(145deg, #e10600, #000)',
    url: undefined
  }));

  return (
    <div style={{ minHeight: '100vh', background: '#181818', padding: '2rem 0' }}>
      <h2 style={{ textAlign: 'center', color: '#e10600', marginBottom: 32, fontSize: 36, letterSpacing: 1, fontFamily: 'Raleway, Arial, sans-serif', fontWeight: 700 }}>
        All Teams — 1992 Season
      </h2>
      <ChromaGrid items={items} columns={3} rows={Math.ceil(items.length / 3)} />
    </div>
  );
}
