import './meeting.css'
import meetingStore from '../../data/meetingStore';
import serviceStore from "../../data/serviceStore "
import Select from '@mui/material/Select';
import { saveMeeting, getMeeting, getServices } from "../../data/serviceServer"
import { Button, Dialog, DialogContent, TextField } from "@mui/material";
import { observer } from "mobx-react"
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Box, DialogTitle, FormControl, InputLabel, MenuItem } from "@material-ui/core";
import Swal from "sweetalert2";
import BusinesDataStore from "../../data/BusinesDataStore"


const AddMeeting = observer(({ service }) => {
    useEffect(() => {
        getMeeting();
        getServices();
    }, []);

    const [open, setOpen] = useState(false);
    const [formDataMeeting, setFormDataMeeting] = useState({
        serviceName: service ? service.name : '', 
        dateTime: '', 
        NameUser: '', 
        Phone: '', 
        Email: '',
    });

    const handleKeyPress = (event) => {
        const { value } = event.target;
        if (value.length >= 10) {
            event.preventDefault();
        }
    };

    const handleChange = (e) => {
        setFormDataMeeting({ ...formDataMeeting, [e.target.name]: e.target.value });
    };

    const handleFieldCheck = (e) => {
        e.preventDefault();
        const isDatePassed = meetingStore.checkIfDateHasPassed(formDataMeeting.dateTime);
        if (!isDatePassed) {
            Swal.fire({
                title: "הופס....התאריך עבר",
                text: "תבחר לך משהו אחר?",
                icon: "error"
            })
            .then(() => {
                setFormDataMeeting(prevState => ({
                  ...prevState,
                  dateTime: '' // לרוקן את התא
                }));
            });
        }
    };

    const handleForm = async (e) => {
        e.preventDefault();
        const newMeeting = { ...formDataMeeting };
        let t = await saveMeeting(newMeeting);
        setFormDataMeeting({
            serviceName: service ? service.name : '', 
            dateTime: '',
            NameUser: '',
            Phone: '',
            Email: '',
        });
        setOpen(false);
    };

    return (
        <>
            <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
                +
            </Button>
            <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
                <DialogTitle>רוצה לשכור אותי?</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleForm}>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <TextField
                                    disabled
                                    label="שירות שנבחר"
                                    value={formDataMeeting.serviceName}
                                />
                            </FormControl>
                        </Box>
                        <TextField
                            fullWidth
                            sx={{ mt: 1 }}
                            type='datetime-local'
                            name="dateTime"
                            variant="outlined"
                            value={formDataMeeting.dateTime}
                            onBlur={handleFieldCheck}
                            onChange={handleChange}
                            margin="dense"
                        />
                        <br />
                        <TextField
                            name="NameUser"
                            label="שם לקוח"
                            variant="outlined"
                            value={formDataMeeting.NameUser}
                            onChange={handleChange}
                            margin="dense"
                        />
                        <br />
                        <TextField
                            required
                            name="Phone"
                            type="number"
                            label="טלפון זמין"
                            variant="outlined"
                            value={formDataMeeting.Phone}
                            onChange={handleChange}
                            onKeyPress={handleKeyPress}
                            margin="dense"
                        />
                        <br />
                        <TextField
                            required
                            type='email'
                            name="Email"
                            label="אימייל"
                            variant="outlined"
                            value={formDataMeeting.Email}
                            onChange={handleChange}
                            margin="dense"
                        />
                        <br />
                        <Button variant="outlined" type="submit" color="primary">
                            הוסף
                        </Button>
                        <Button variant="outlined" color="secondary" onClick={() => setOpen(false)} style={{ marginLeft: '10px' }}>
                            סגור
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
});

export default AddMeeting;
