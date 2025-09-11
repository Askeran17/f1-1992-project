
import React from 'react';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
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
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const columns = isXs ? 1 : isSm ? 2 : 3;

  // Map races to ChromaGrid card format
  const chromaItems = races.map((race) => ({
    image: race.photo,
    title: race.name,
    handle: `Round ${race.round}`,
    url: race.youtube,
    borderColor: '#e10600',
    gradient: 'linear-gradient(135deg, #23242a 60%, #e10600 100%)',
    // For Portuguese GP, adjust objectPosition via extra prop
    objectPosition: race.name === 'Portuguese Grand Prix' ? 'center 35%' : 'center',
    race,
  }));

  // Custom card renderer for ChromaGrid
  function renderRaceCard(card) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', width: '100%', height: '100%' }}>
        <div className="chroma-img-wrapper" style={{ width: '100%', padding: 0, marginBottom: 12 }}>
          <img
            src={card.image}
            alt={card.title}
            style={{
              width: '100%',
              borderRadius: 12,
              objectFit: 'cover',
              objectPosition: card.objectPosition,
              maxHeight: isXs ? 120 : 160,
              minHeight: isXs ? 80 : 120,
              display: 'block',
            }}
          />
        </div>
        <h3
          style={{
            fontFamily: 'Raleway, Arial, sans-serif',
            fontWeight: 700,
            fontSize: isXs ? 16 : 22,
            color: '#fff',
            margin: '0 0 8px 0',
            textAlign: 'center',
          }}
        >
          {card.title}
        </h3>
        <Button
          variant="contained"
          color="error"
          href={card.url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontFamily: 'Raleway, Arial, sans-serif',
            fontWeight: 600,
            letterSpacing: 0.5,
            fontSize: isXs ? 14 : 16,
            py: isXs ? 0.8 : 1.2,
            px: isXs ? 2 : 3,
            minWidth: 0,
            whiteSpace: 'nowrap',
            background: '#e10600',
            '&:hover': { background: '#b30000' },
            alignSelf: 'center',
            mb: 1.5,
          }}
        >
          Watch review
        </Button>
  <div style={{ color: '#aaa', fontSize: isXs ? 12 : 14, marginBottom: 16, marginTop: isXs ? 10 : 16, textAlign: 'center' }}>{card.handle}</div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#181818', padding: isXs ? '1rem 0.2rem' : '2rem 0' }}>
      <h2
        style={{
          textAlign: 'center',
          color: '#e10600',
          marginBottom: isXs ? 18 : 32,
          fontSize: isXs ? 24 : 36,
          letterSpacing: 1,
          fontFamily: 'Raleway, Arial, sans-serif',
          fontWeight: 700,
        }}
      >
        All Races — 1992 Season
      </h2>
      <ChromaGrid
        items={chromaItems}
        columns={columns}
        rows={Math.ceil(chromaItems.length / columns)}
        className="allraces-chroma"
        radius={isXs ? 180 : 300}
        fadeOut={0.7}
        damping={0.45}
        ease="power3.out"
        renderCard={renderRaceCard}
      />
    </div>
  );
}
