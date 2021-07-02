import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios'
import { useRouter } from 'next/router'

interface IaModal{
  url_push?: string;
  route_delete?: string;
  _id?: string
}

const AlertDialog: React.FC<IaModal> = ({ 
  url_push, 
  route_delete, 
  _id 
}) => {

    const router = useRouter()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const deleteId = async () => {
        
        try {

            await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URI}/${route_delete}/${_id}`)
        } catch (error) {
            console.log(error);

        }
        setOpen(false);
        router.push(`/admin/${url_push}`)
    }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Supprimer
      </Button>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirmation de suppression"}</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                La suppression de ce contenu entrainera sa destrcution sans possibilté de le recuperer un jour. Cliquez sur "accepter" pour confirmer.      
            </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Refuser
          </Button>
          <Button onClick={deleteId} color="primary" autoFocus>
            Accepter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialog
