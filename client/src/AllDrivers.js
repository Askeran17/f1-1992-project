import React from 'react';
import ChromaGrid from './components/ChromaGrid';
import './components/ChromaGrid.css';

const drivers = [
  { name: 'Nigel Mansell', team: 'Williams-Renault', country: 'UK', points: 108, photo: '/images/nigel.jpg' },
  { name: 'Riccardo Patrese', team: 'Williams-Renault', country: 'Italy', points: 56, photo: '/images/patrese.jpg' },
  { name: 'Michael Schumacher', team: 'Benetton-Ford', country: 'Germany', points: 53, photo: '/images/schum922.jpg' },
  { name: 'Martin Brundle', team: 'Benetton-Ford', country: 'UK', points: 38, photo: '/images/brundle92.webp' },
  { name: 'Ayrton Senna', team: 'McLaren-Honda', country: 'Brazil', points: 50, photo: '/images/senna.webp' },
  { name: 'Gerhard Berger', team: 'McLaren-Honda', country: 'Austria', points: 49, photo: '/images/berger92.jpg' },
  { name: 'Mika Häkkinen', team: 'Lotus-Ford', country: 'Finland', points: 11, photo: '/images/hakkinen92.jpg' },
  { name: 'Johnny Herbert', team: 'Lotus-Ford', country: 'UK', points: 2, photo: '/images/herbert92.jpg' },
  { name: 'Jean Alesi', team: 'Ferrari', country: 'France', points: 18, photo: '/images/alesi92.jpg' },
  { name: 'Ivan Capelli', team: 'Ferrari', country: 'Italy', points: 3, photo: '/images/capelli92.jpg' },
  { name: 'Andrea de Cesaris', team: 'Tyrrell-Ilmor', country: 'Italy', points: 8, photo: '/images/decesaris92.jpg' },
  { name: 'Olivier Grouillard', team: 'Tyrrell-Ilmor', country: 'France', points: 0, photo: '/images/grouillard92.webp' },
  { name: 'Pierluigi Martini', team: 'Dallara-Ferrari', country: 'Italy', points: 0, photo: '/images/martini92.jpg' },
  { name: 'JJ Lehto', team: 'Dallara-Ferrari', country: 'Finland', points: 1, photo: '/images/lehto92.webp' },
  { name: 'Gianni Morbidelli', team: 'Minardi-Lamborghini', country: 'Italy', points: 0, photo: '/images/morbidelli92.jpg' },
  { name: 'Christian Fittipaldi', team: 'Minardi-Lamborghini', country: 'Brazil', points: 0, photo: '/images/fittipaldi92.jpg' },
  { name: 'Karl Wendlinger', team: 'March-Ilmor', country: 'Austria', points: 3, photo: '/images/wendlinger92.jpg' },
  { name: 'Paul Belmondo', team: 'March-Ilmor', country: 'France', points: 0, photo: '/images/belmondo92.jpg' },
  { name: 'Erik Comas', team: 'Ligier-Renault', country: 'France', points: 0, photo: '/images/comas92.jpg' },
  { name: 'Thierry Boutsen', team: 'Ligier-Renault', country: 'Belgium', points: 0, photo: '/images/boutsen92.jpg' },
  { name: 'Ukyo Katayama', team: 'Venturi-Larrousse-Lamborghini', country: 'Japan', points: 0, photo: '/images/katayama92.jpg' },
  { name: 'Bertrand Gachot', team: 'Venturi-Larrousse-Lamborghini', country: 'France', points: 0, photo: '/images/gachot92.jpg' },
  { name: 'Gabriele Tarquini', team: 'Fondmetal-Ford', country: 'Italy', points: 0, photo: '/images/tarquini92.jpg' },
  { name: 'Andrea Chiesa', team: 'Fondmetal-Ford', country: 'Switzerland', points: 0, photo: '/images/chiesa92.jpg' },
  { name: 'Roberto Moreno', team: 'Andrea Moda S921', country: 'Brazil', points: 0, photo: '/images/moreno92.jpg' },
  { name: 'Perry McCarthy', team: 'Andrea Moda S921', country: 'UK', points: 0, photo: '/images/mccarthy92.jpg' },
  { name: 'Stefano Modena', team: 'Jordan-Yamaha', country: 'Italy', points: 0, photo: '/images/modena92.jpg' },
  { name: 'Maurício Gugelmin', team: 'Jordan-Yamaha', country: 'Brazil', points: 0, photo: '/images/gugelmin92.jpg' },
  { name: 'Eric van de Poele', team: 'Brabham-Judd', country: 'Belgium', points: 0, photo: '/images/poele92.webp' },
  { name: 'Damon Hill', team: 'Brabham-Judd', country: 'UK', points: 0, photo: '/images/hill92.jpg' },
];

function AllDrivers() {
  // Преобразуем данные для ChromaGrid
  const items = drivers.map(driver => ({
    image: driver.photo,
    title: driver.name,
    subtitle: driver.team,
    handle: driver.country + ' — ' + driver.points + ' pts',
    borderColor: '#e10600',
    gradient: 'linear-gradient(145deg, #e10600, #000)',
    url: undefined
  }));

  return (
    <div style={{ minHeight: '100vh', background: '#181818', padding: '2rem 0' }}>
        <h2 style={{ textAlign: 'center', color: '#e10600', marginBottom: 32, fontSize: 36, letterSpacing: 1, fontFamily: 'Raleway, Arial, sans-serif', fontWeight: 700 }}>
          All Drivers — 1992 Season
      </h2>
      <ChromaGrid items={items} columns={3} rows={Math.ceil(items.length / 3)} />
    </div>
  );
}

export default AllDrivers;
