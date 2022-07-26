import React from 'react'
import { AppBar , Container, Grid, Grow, Typography } from '@mui/material';

import memories from './assets/memories.png';
import Posts from './components/Posts/posts.component';
import Form from './components/Form/form.component';
import './styles.css';

const App = () => {


  return (
    <Container maxWidth="lg">
        <AppBar className='app-bar' position='static' color='inherit'>
            <Typography className='app-bar__heading' variant='h2' align='center'>
                Memories
            </Typography>
            <img src={memories} alt="memories" height="60"/>
        </AppBar>
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form />
                    </Grid>
                </Grid>
            </Container>
        </Grow>

    </Container>
  )
}


export default App;