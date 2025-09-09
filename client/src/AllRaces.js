import React from 'react';
import ChromaGrid from './components/ChromaGrid';
import './components/ChromaGrid.css';

const races = [
  { round: 1, name: 'South African Grand Prix', winner: 'Nigel Mansell', photo: '/images/africa92.jpg', youtube: 'https://www.youtube.com/watch?v=1RYx4-kJMmo' },
  { round: 2, name: 'Mexican Grand Prix', winner: 'Nigel Mansell', photo: '/images/mexico92.jpg', youtube: 'https://www.youtube.com/watch?v=fto6AyEnWZY' },
  { round: 3, name: 'Brazilian Grand Prix', winner: 'Nigel Mansell', photo: '/images/brazil92.webp', youtube: 'https://www.youtube.com/watch?v=zLLxCMgo3PI' },
  { round: 4, name: 'Spanish Grand Prix', winner: 'Nigel Mansell', photo: '/images/spain92.jpg', youtube: 'https://www.youtube.com/watch?v=S8T65-dY-ik' },
  { round: 5, name: 'San Marino Grand Prix', winner: 'Nigel Mansell', photo: '/images/sanmarino92.webp', youtube: 'https://www.youtube.com/watch?v=ClUJtICNLZI' },
  { round: 6, name: 'Monaco Grand Prix', winner: 'Ayrton Senna', photo: '/images/monaco92.jpg', youtube: 'https://www.youtube.com/watch?v=YsqipJ2lSZs' },
  { round: 7, name: 'Canadian Grand Prix', winner: 'Gerhard Berger', photo: '/images/canada92.jpg', youtube: 'https://www.youtube.com/watch?v=IJ422Rc26Zw' },
  { round: 8, name: 'French Grand Prix', winner: 'Nigel Mansell', photo: '/images/france92.jpg', youtube: 'https://www.youtube.com/watch?v=0wVsBr3FYFE' },
  { round: 9, name: 'British Grand Prix', winner: 'Nigel Mansell', photo: '/images/uk92.jpg', youtube: 'https://www.youtube.com/watch?v=LPZaLTdZCTU' },
  { round: 10, name: 'German Grand Prix', winner: 'Nigel Mansell', photo: '/images/germany92.jpg', youtube: 'https://www.youtube.com/watch?v=uvsLA3MaLj0' },
  { round: 11, name: 'Hungarian Grand Prix', winner: 'Ayrton Senna', photo: '/images/hungary92.jpg', youtube: 'https://www.youtube.com/watch?v=EbNQRyf7xO0' },
  { round: 12, name: 'Belgian Grand Prix', winner: 'Michael Schumacher', photo: '/images/belgium92.jpg', youtube: 'https://www.youtube.com/watch?v=oBuX-0T0T_c' },
  { round: 13, name: 'Italian Grand Prix', winner: 'Ayrton Senna', photo: '/images/italy92.webp', youtube: 'https://www.youtube.com/watch?v=WMqRYj9j-Hw' },
  { round: 14, name: 'Portuguese Grand Prix', winner: 'Nigel Mansell', photo: '/images/portugal92.jpg', youtube: 'https://www.youtube.com/watch?v=rwRnIjT01ZQ' },
  { round: 15, name: 'Japanese Grand Prix', winner: 'Riccardo Patrese', photo: '/images/japan92.jpg', youtube: 'https://www.youtube.com/watch?v=IuuP9gh0pBM' },
  { round: 16, name: 'Australian Grand Prix', winner: 'Gerhard Berger', photo: '/images/australia92.jpg', youtube: 'https://www.youtube.com/watch?v=mAJIO-0p0iM' },
];

export default function AllRaces() {
  // Преобразуем данные для ChromaGrid
  const items = races.map(race => ({
    image: race.photo,
    title: race.name,
    subtitle: 'Winner: ' + race.winner,
    handle: 'Round ' + race.round,
    borderColor: '#e10600',
    gradient: 'linear-gradient(145deg, #e10600, #000)',
    url: race.youtube
  }));

  return (
    <div style={{ minHeight: '100vh', background: '#181818', padding: '2rem 0' }}>
      <h2 style={{ textAlign: 'center', color: '#e10600', marginBottom: 32, fontSize: 36, letterSpacing: 1 }}>
        All Races — 1992 Season
      </h2>
      <ChromaGrid items={items} columns={3} rows={Math.ceil(items.length / 3)} />
    </div>
  );
}
