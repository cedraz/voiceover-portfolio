import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  Container,
  Box,
  Typography,
  Slider,
  IconButton,
  Stack,
} from '@mui/material';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export default function MusicPlayerSlider({ audioSrc }: { audioSrc: string }) {
  const theme = useTheme();

  const audioPlayer = React.useRef<HTMLAudioElement | null>(null);
  const progressBar = React.useRef<HTMLDivElement | null>(null);

  const [duration, setDuration] = React.useState(200);
  const [metadataLoaded, setMetadataLoaded] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [paused, setPaused] = React.useState(true);
  const [currentVolume, setCurrentVolume] = React.useState(0.3);

  React.useEffect(() => {
    const seconds = Math.floor(audioPlayer?.current?.duration ?? 0);
    setDuration(seconds);

    if (audioPlayer.current) {
      audioPlayer.current.onloadedmetadata = () => {
        setMetadataLoaded(true);
      };
    }

    audioPlayer.current?.addEventListener('timeupdate', () => {
      const seconds = Math.floor(audioPlayer?.current?.currentTime || 0);
      setCurrentTime(seconds);
    });
  }, [metadataLoaded, audioPlayer?.current?.readyState]);

  const togglePlayPause = () => {
    setPaused(!paused);
    if (audioPlayer.current) {
      if (audioPlayer.current.paused) {
        audioPlayer.current.play();
      } else {
        audioPlayer.current.pause();
      }
    }
  };

  const changeRange = (value: number) => {
    if (audioPlayer.current) {
      audioPlayer.current.currentTime = value;
      setCurrentTime(audioPlayer.current.currentTime);
    }
  };

  const changeVolume = (value: number) => {
    if (audioPlayer.current) {
      audioPlayer.current.volume = value / 100;
      setCurrentVolume(audioPlayer.current.volume);
    }
  };

  function formatDuration(value: number) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const lightIconColor =
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ ml: '8px', minWidth: 0 }}>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            fontWeight={500}
            sx={{ pb: '10px' }}
          >
            VSL B-TRADER
          </Typography>
        </Box>
      </Box>

      <Container sx={{ display: 'flex', padding: '0 !important' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: -1,
            mr: '10px',
          }}
        >
          <IconButton
            aria-label={paused ? 'play' : 'pause'}
            onClick={togglePlayPause}
            sx={{ padding: '0 !important', color: theme.palette.primary.main }}
          >
            {paused ? (
              <PlayArrowRounded sx={{ fontSize: '2rem' }} />
            ) : (
              <PauseRounded sx={{ fontSize: '2rem' }} />
            )}
          </IconButton>
        </Box>
        <Box sx={{ width: '100%' }}>
          <audio ref={audioPlayer}>
            <source src={audioSrc} type="audio/mp3" />
          </audio>
          <Slider
            aria-label="time-indicator"
            size="small"
            value={currentTime}
            min={0}
            step={1}
            max={duration}
            ref={progressBar}
            onChange={(_, value) => changeRange(value as number)}
            sx={{
              color: theme.palette.primary.main,
              height: 4,
              '& .MuiSlider-thumb': {
                width: 12,
                height: 12,
                transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                '&:before': {
                  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible': {
                  boxShadow: `0px 0px 0px 8px ${
                    theme.palette.mode === 'dark'
                      ? 'rgb(255 255 255 / 16%)'
                      : 'rgb(0 0 0 / 16%)'
                  }`,
                },
                '&.Mui-active': {
                  width: 20,
                  height: 20,
                },
              },
              '& .MuiSlider-rail': {
                opacity: 0.28,
              },
            }}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: -2,
            }}
          >
            <TinyText>{formatDuration(currentTime)}</TinyText>
            <TinyText>-{formatDuration(duration - currentTime)}</TinyText>
          </Box>
        </Box>
      </Container>

      <Stack
        spacing={2}
        direction="row"
        sx={{ mb: 1, px: 1 }}
        alignItems="center"
      >
        <VolumeDownRounded
          sx={{ fontSize: '1.5rem', cursor: 'pointer' }}
          htmlColor={lightIconColor}
          onClick={() => changeVolume(0)}
        />
        <Slider
          aria-label="Volume"
          onChange={(_, value) => changeVolume(value as number)}
          value={currentVolume * 100}
          sx={{
            color: theme.palette.primary.main,
            '& .MuiSlider-track': {
              border: 'none',
            },
            '& .MuiSlider-thumb': {
              width: 12,
              height: 12,
              backgroundColor: '#fff',
              '&:before': {
                boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
              },
              '&:hover, &.Mui-focusVisible, &.Mui-active': {
                boxShadow: 'none',
              },
            },
          }}
        />
        <VolumeUpRounded
          sx={{ fontSize: '1.5rem', cursor: 'pointer' }}
          htmlColor={lightIconColor}
          onClick={() => changeVolume(100)}
        />
      </Stack>
    </Box>
  );
}
