import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button  variant="outlined" color="primary" onClick={handleClickOpen}>
        Test your prodect now
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" size="large">
        <DialogTitle id="form-dialog-title" >Send request to test your prodect</DialogTitle>
        <DialogContent >
          <DialogContentText>
          
            </DialogContentText>
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
            size="medium"
          /> 
          <TextField
          
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
        /> 
        
        <TextField
        
        margin="dense"
        id="name"
        label="Phone"
        type="Phone"
        fullWidth
      /> 
      
      <TextField
      margin="dense"
      id="name"
      label="Company "
      type="name "
      fullWidth
    />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
