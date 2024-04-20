import * as React from 'react';
import { Link } from 'react-router-dom';
// import { Grid, Button, ButtonGroup, Typography } from "@mui/material/core";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ButtonGroup from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function NewOrderPage() {
    return (
        <div>
            <Link to="/cards/new" className="navbar-link">BizCard</Link>
            
            <Grid container spacing={3}>
            <Grid item xs={12} align="center">
            <Typography variant="h3" compact="h3">
                Welcome to Cardify.
            </Typography>
            </Grid>
            <Grid item xs={12} align="center">
            <ButtonGroup disableElevation variant="outlined" style={{ color : 'white'}}>
                <Button variant="outlined">Create a Business Card</Button>
            </ButtonGroup>
            </Grid>
            </Grid>
        </div>
    );
  }