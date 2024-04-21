import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import Typewriter from 'typewriter-effect/dist/core';

export default function HomePage() {
    React.useEffect(() => {
        const typewriter = new Typewriter('#typewriter', {
            strings: [
                'Welcome to Cardify.',
                'Create your own virtual business card.'
            ],
            autoStart: true,
            loop: true,
        });

        typewriter
            .pauseFor(2500)
            .changeDeleteSpeed(200)
            .changeDelay(50)
            .start()

        return () => {
            typewriter.stop();
        };
    }, []);

    return (
        <Grid container 
            spacing={3} 
            direction="column"
            alignItems="center" 
            style={{ justifyContent: 'center', minHeight: '80vh' }}>
            <Grid item xs={12}>
                <Typography variant="h3">
                    <span id="typewriter"></span>
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <ButtonGroup disableElevation variant="outlined">
                    <Button 
                    variant="outlined" 
                    style={{borderColor : 'black', color: 'black'}}
                    component={Link} 
                    to="/cards/new"
                    className="navbar-link"
                    >
                    Create a Business Card
                    </Button>
                </ButtonGroup>
            </Grid>
        </Grid>
    );
  }