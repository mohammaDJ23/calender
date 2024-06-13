import { useState } from 'react';
import { Box, styled, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Content = styled(Box)(({ theme }) => ({
  borderRadius: '10px',
  padding: '20px',
  width: '100%',
  overflow: 'hidden',
  backgroundColor: '#ededed',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  [theme.breakpoints.down('lg')]: {
    maxWidth: '500px',
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '800px',
  },
}));

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function Calender() {
  const [date, setDate] = useState(new Date());
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());

  const onChangeDate = (month: number) => {
    const date = new Date(year, month, new Date().getDate());
    setDate(date);
    setYear(date.getFullYear());
    setMonth(date.getMonth());
  };

  const startDay = new Date(year, month, 1).getDay();

  const endDate = new Date(year, month + 1, 0).getDate();

  const endDay = new Date(year, month, endDate).getDay();

  const startDate = new Date(year, month, 0).getDate();

  const getPreviousDates = () => {
    const els: any[] = [];

    for (let i = startDay; i > 0; i--)
      els.push(
        <Typography key={Math.random()} sx={{ width: 'calc(100% / 7)', textAlign: 'center', color: '#aaa' }}>
          {startDate - i + 1}
        </Typography>
      );

    return els.map(el => el);
  };

  const getCurrentDates = () => {
    const els: any[] = [];

    for (let i = 1; i <= endDate; i++) {
      const isToday = i === date.getDate() && month === new Date().getMonth() && year === new Date().getFullYear();

      els.push(
        <Typography
          key={Math.random()}
          sx={{
            width: 'calc(100% / 7)',
            textAlign: 'center',
            color: isToday ? 'white' : '',
            backgroundColor: isToday ? 'green' : '',
          }}
        >
          {i}
        </Typography>
      );
    }

    return els.map(el => el);
  };

  const getFutureDates = () => {
    const els: any[] = [];

    for (let i = endDay; i < 6; i++)
      els.push(
        <Typography key={Math.random()} sx={{ width: 'calc(100% / 7)', textAlign: 'center', color: '#aaa' }}>
          {i - endDay + 1}
        </Typography>
      );

    return els.map(el => el);
  };

  return (
    <Box sx={{ width: '100%', height: '100%', backgroundColor: 'white', overflow: 'hidden' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '30px' }}>
        <Content>
          <Box
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', width: '100%' }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '30px',
                width: '100%',
              }}
            >
              <Typography variant="h5">{`${months[month]} ${year}`}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                <IconButton sx={{ cursor: 'hover' }} onClick={() => onChangeDate(month - 1)}>
                  <ArrowBackIcon />
                </IconButton>
                <IconButton sx={{ cursor: 'hover' }} onClick={() => onChangeDate(month + 1)}>
                  <ArrowForwardIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap', width: '100%' }}>
              <Typography sx={{ width: 'calc(100% / 7)', textAlign: 'center' }}>Sun</Typography>
              <Typography sx={{ width: 'calc(100% / 7)', textAlign: 'center' }}>Mon</Typography>
              <Typography sx={{ width: 'calc(100% / 7)', textAlign: 'center' }}>Tue</Typography>
              <Typography sx={{ width: 'calc(100% / 7)', textAlign: 'center' }}>Wed</Typography>
              <Typography sx={{ width: 'calc(100% / 7)', textAlign: 'center' }}>Thu</Typography>
              <Typography sx={{ width: 'calc(100% / 7)', textAlign: 'center' }}>Fri</Typography>
              <Typography sx={{ width: 'calc(100% / 7)', textAlign: 'center' }}>Sat</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', width: '100%' }}>
              {getPreviousDates()}

              {getCurrentDates()}

              {getFutureDates()}
            </Box>
          </Box>
        </Content>
      </Box>
    </Box>
  );
}

export default Calender;
