
import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function RaceResults() {
  const [races, setRaces] = useState([]);
  const [results, setResults] = useState({}); // { [raceId]: [results] }
  const [loading, setLoading] = useState(true);
  const [loadingResults, setLoadingResults] = useState({});

  useEffect(() => {
    fetch('/api/races')
      .then(res => res.json())
      .then(data => {
        setRaces(data);
        setLoading(false);
      });
  }, []);

  const fetchResults = (raceId) => {
    if (results[raceId] || loadingResults[raceId]) return;
    setLoadingResults(prev => ({ ...prev, [raceId]: true }));
    fetch(`/api/races/${raceId}/results`)
      .then(res => res.json())
      .then(data => {
        setResults(prev => ({ ...prev, [raceId]: data }));
        setLoadingResults(prev => ({ ...prev, [raceId]: false }));
      });
  };

  if (loading) return <Box textAlign="center" mt={4}><CircularProgress /></Box>;
  if (!races.length) return <div>No races found.</div>;

  return (
    <Box maxWidth="md" mx="auto" mt={4} mb={6}>
      <Typography variant="h4" align="center" gutterBottom color="primary">
        1992 F1 Season — All Race Results
      </Typography>
      {races.map((race) => (
        <Accordion key={race.id} onChange={(_, expanded) => expanded && fetchResults(race.id)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box width="100%" display="flex" flexDirection={{xs:'column',sm:'row'}} justifyContent="space-between" alignItems={{xs:'flex-start',sm:'center'}}>
              <Typography variant="h6">{race.name}</Typography>
              <Typography variant="body2" color="text.secondary">{race.date}</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            {loadingResults[race.id] ? (
              <Box textAlign="center" my={2}><CircularProgress size={28} /></Box>
            ) : results[race.id] && results[race.id].length ? (
              <TableContainer component={Paper} sx={{ mb: 2 }}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Pos</TableCell>
                      <TableCell>Driver</TableCell>
                      <TableCell>Team</TableCell>
                      <TableCell>Points</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {results[race.id].map((res, idx) => (
                      <TableRow key={idx}>
                        <TableCell>{res.position}</TableCell>
                        <TableCell>{res.driver_name}</TableCell>
                        <TableCell>{res.team_name}</TableCell>
                        <TableCell>{res.points}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <Typography color="text.secondary">No results found.</Typography>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default RaceResults;
