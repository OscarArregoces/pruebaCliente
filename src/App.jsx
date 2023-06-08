import './App.css'

import { useState } from 'react';

//STYLED COMPONENTS
import { styled } from 'styled-components';

//GRID
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

//CARD

import { Card, CardHeader, CardActions, Typography } from '@mui/material';
//FORM
import { TextField, IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';


//ICONS
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

//AVATAR
import Avatar from '@mui/material/Avatar';

//DIALOGS
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function App() {

  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleClickOpenCreate = () => {
    setOpenCreate(true);
  };
  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleClose = () => {
    setOpenCreate(false);
    setOpenEdit(false);
  };

  const name = 'Oscar Ivan Arregoces Riveira'
  const email = 'Oscar2366@gmail.com'
  const dateOfBirth = '28-08-1999'
  const avatarUrl = 'Oscar'

  return (
    <div className="body">
      <Content>
        <Box sx={{ flexGrow: 1, padding: '2rem' }}>
          <Grid container spacing={2}>
            {/* HEADER */}
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', padding: '2rem 2rem 0 0' }}>
              <h1>Listado de clientes</h1>
              <Button variant="contained" onClick={handleClickOpenCreate}>
                <AddIcon />
                Nuevo cliente</Button>
            </Grid>
            {/* SEARCH */}

            <Box sx={{ flexGrow: 1, padding: '2rem' }}>
              <Grid container spacing={2} sx={{ background: 'white' }}>
                <Grid item xs={12}>
                  <TextField
                    sx={{ width: '100%', padding: '2rem' }}
                    variant="outlined"
                    placeholder="Buscar..."
                    InputProps={{
                      endAdornment: (
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      ),
                    }}
                  />
                </Grid>
                {/* LIST */}
                <Grid item xs={12} sx={{ padding: '20px' }} >
                  <Card sx={{ width: '100%' }}>
                    <CardHeader
                      avatar={<Avatar alt={name} src={avatarUrl} />}
                      action={
                        <CardActions disableSpacing>
                          <IconButton aria-label="Editar" style={{ background: '#1976d3', color: 'white', margin: '5px' }}  onClick={handleClickOpenEdit}>
                            <ModeEditIcon />
                          </IconButton>
                          <IconButton aria-label="Eliminar" style={{ background: '#f33f37', color: 'white', margin: '5px' }}>
                            <DeleteForeverIcon />
                          </IconButton>
                        </CardActions>
                      }
                      title={name}
                      subheader={`Email: ${email}`}
                    />
                  </Card>
                </Grid>
              </Grid>
            </Box>

            {/* LIST  */}


          </Grid>
        </Box>
      </Content>


      <Dialog open={openCreate} onClose={handleClose}>
        <ContentDialog>
          <div className="header-contentDialog">
            <DialogTitle sx={{ color: 'white' }}>Nuevo cliente</DialogTitle>
          </div>
          <div className="body-contentDialog">
            <DialogContent>
              <Grid item xs={12} sx={{ padding: '20px' }} >

                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField sx={{ width: '100%' }} id="outlined-basic" label="Nombre completo" variant="outlined" />

                  </Grid>
                  <Grid item xs={6}>
                    <TextField sx={{ width: '100%' }} id="outlined-basic" label="No. Documento" variant="outlined" />

                  </Grid>
                  <Grid item xs={6}>
                    <TextField sx={{ width: '100%' }} id="outlined-basic" label="Fecha de nacimiento" variant="outlined" type='date' InputLabelProps={{
                      shrink: true,
                    }} />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField sx={{ width: '100%' }} id="outlined-basic" label="Email" variant="outlined" />
                  </Grid>
                </Grid>


              </Grid>
            </DialogContent>
            <DialogActions>
              <Button variant="contained"  color="error" onClick={handleClose}>Cancelar</Button>
              <Button variant="contained" onClick={handleClose}>Guardar</Button>
            </DialogActions>
          </div>
        </ContentDialog>

      </Dialog>

      <Dialog open={openEdit} onClose={handleClose} >
        <ContentDialog>
          <div className="header-contentDialog">
            <DialogTitle sx={{ color: 'white' }}>Editar cliente</DialogTitle>
          </div>
          <div className="body-contentDialog">
            <DialogContent>
              <Grid item xs={12} sx={{ padding: '20px' }} >

                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <TextField sx={{ width: '100%' }} id="outlined-basic" label="Nombre completo" variant="outlined" />

                  </Grid>
                  <Grid item xs={4}>
                    <TextField sx={{ width: '100%' }} id="outlined-basic" label="No. Documento" variant="outlined" />

                  </Grid>
                  <Grid item xs={4}>
                    <TextField sx={{ width: '100%' }} id="outlined-basic" label="Fecha de nacimiento" variant="outlined" type='date' InputLabelProps={{
                      shrink: true,
                    }} />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField sx={{ width: '100%' }} id="outlined-basic" label="Email" variant="outlined" />
                  </Grid>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>

              <Button variant="contained"  color="error" onClick={handleClose}>Cancelar</Button>
              <Button variant="contained" onClick={handleClose}>Guardar</Button>
            </DialogActions>
          </div>
        </ContentDialog>
      </Dialog>
    </div>
  )
}

const Content = styled.div`
width: 70%;
`
const ContentDialog = styled.div`
  width: 100%;
  height: 100%;

  .header-contentDialog{
      width: 100%;
      background-color: #23272f;
  }
  .body-contentDialog{
      background-color: #F6F1F1;
  }
`

export default App
