import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AllDrivers from './AllDrivers';
import AllTeams from './AllTeams';
import AllRaces from './AllRaces';
import RaceResults from './RaceResults';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function App() {
  return (
    <Router>
      <NavBar />
  <Box sx={{ minHeight: '80vh', mt: 0, pt: 0 }}>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/drivers" element={<AllDrivers />} />
            <Route path="/teams" element={<AllTeams />} />
            <Route path="/races" element={<AllRaces />} />
            <Route path="/results" element={<RaceResults />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  );
}

function Home() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 2, sm: 4 } }}>
      <Box textAlign="center" mb={{ xs: 2, sm: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom color="primary" sx={{ fontSize: { xs: '2rem', sm: '3rem' } }}>
          Formula 1 — 1992 Season
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph sx={{ fontSize: { xs: '1.1rem', sm: '1.5rem' } }}>
          The 1992 Formula One World Championship was a landmark season, dominated by Nigel Mansell and the Williams-Renault team. With advanced technology and fierce competition, the season featured legendary drivers like Ayrton Senna, Michael Schumacher, and Riccardo Patrese. Mansell clinched the title with a record number of wins, making 1992 one of the most memorable years in F1 history.
        </Typography>
        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} justifyContent="center" alignItems="center" gap={{ xs: 1, sm: 2 }} mb={{ xs: 1, sm: 2 }} width="100%">
          <Button component={Link} to="/drivers" variant="contained" color="error" size="large" fullWidth sx={{ maxWidth: { xs: '100%', sm: 220 }, minWidth: 0 }}>
            See All Drivers
          </Button>
          <Button component={Link} to="/teams" variant="contained" color="success" size="large" fullWidth sx={{ maxWidth: { xs: '100%', sm: 220 }, minWidth: 0 }}>
            See All Teams
          </Button>
          <Button component={Link} to="/races" variant="contained" color="info" size="large" fullWidth sx={{ maxWidth: { xs: '100%', sm: 220 }, minWidth: 0 }}>
            See All Races
          </Button>
          <Button component={Link} to="/results" variant="contained" color="primary" size="large" fullWidth sx={{ maxWidth: { xs: '100%', sm: 220 }, minWidth: 0 }}>
            All Race Results
          </Button>
        </Box>
        <Box mt={4}>
          <img src="/images/f1drivers92.jpg" alt="F1 Drivers 1992" style={{ width: '100%', maxWidth: 950, height: 'auto', maxHeight: 478, objectFit: 'cover', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.15)' }} />
        </Box>
      </Box>
    </Container>
  );
}


function NavBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar position="static" color="default" sx={{ mb: 0 }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
          <img src="/images/f1logo.png" alt="F1 Logo" style={{ height: 40, marginRight: 16 }} />
        </Box>
        {isMobile ? (
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose} keepMounted>
              <MenuItem onClick={handleMenuClose} component={Link} to="/">
                Home
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/drivers">
                All Drivers
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/teams">
                All Teams
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/races">
                All Races
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/results">
                All Results
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Button component={Link} to="/" color="primary" sx={{ mx: 1 }}>
              Home
            </Button>
            <Button component={Link} to="/drivers" color="primary" sx={{ mx: 1 }}>
              All Drivers
            </Button>
            <Button component={Link} to="/teams" color="primary" sx={{ mx: 1 }}>
              All Teams
            </Button>
            <Button component={Link} to="/races" color="primary" sx={{ mx: 1 }}>
              All Races
            </Button>
            <Button component={Link} to="/results" color="primary" sx={{ mx: 1 }}>
              All Results
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

function Footer() {
  return (
    <Box component="footer" sx={{
      mt: 0,
      py: 3,
      px: 2,
      background: 'linear-gradient(90deg, #e10600 0%, #fff 100%)',
      color: '#222',
      textAlign: 'center',
      fontSize: { xs: '0.95rem', sm: '1.1rem' },
      boxShadow: '0 -2px 12px rgba(0,0,0,0.04)'
    }}>
      <Box mb={1}>
        <img src="/images/f1logo.png" alt="F1 Logo" style={{ height: 28, verticalAlign: 'middle', marginRight: 8 }} />
        <b>Formula 1 — 1992 Season</b>
      </Box>
      <Box mb={1}>
        <a href="https://github.com/Askeran17/f1-1992-project" target="_blank" rel="noopener noreferrer" style={{ color: '#e10600', textDecoration: 'none', fontWeight: 500 }}>
          View on GitHub
        </a>
      </Box>
      <Box sx={{ fontSize: '0.9em', color: '#555' }}>
        © {new Date().getFullYear()} F1 1992 Project. All rights reserved.
      </Box>
    </Box>
  );
}

export default App;
