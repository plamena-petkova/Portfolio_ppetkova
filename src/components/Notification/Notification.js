import { useNotificationContext } from "../../context/notificationContext";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1.6rem",
        },
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          fontSize: "1.6rem",
          backgroundColor: "white",
          color: "#00b300",
        },
      },
    },
  },
});

const Notification = () => {
  const { notification } = useNotificationContext();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!notification.show) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [notification]);

  const handleClose = (e) => {
    if (e?.reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <IconButton size="large" aria-label="close" onClick={handleClose}>
        <CloseIcon fontSize="large" />
      </IconButton>
    </>
  );

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          message={notification.message}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          action={action}
          
        />
      </ThemeProvider>
    </div>
  );
};

export default Notification;
