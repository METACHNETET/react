import { observer } from "mobx-react"
import { Typography, Grid } from '@material-ui/core';
import { useEffect } from "react";
import loginStore from "../../data/loginStore";
import businessStore from "../../data/businessStore";
import { getBusinessData, editBusinessData } from "../../data/businessServer";
import EditBusinessData from './EditBusinessData'; // נניח שיש לך קומפוננטה זו

const BusinessData = observer(() => {

    useEffect(() => {
        getBusinessData();
    }, [])

    return (
        <>
            {businessStore.BD ? 
            <Grid container spacing={2} id='business'>
                <Grid item xs={4}>
                    <Typography> <strong id='strong'></strong> {businessStore.BD.adress}</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography>{businessStore.BD.email} <strong id='strong'></strong></Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography>{businessStore.BD.phone} <strong id='strong'></strong></Typography>
                </Grid>
                {loginStore.isLogin && 
                    <Grid item xs={12}>
                        <EditBusinessData></EditBusinessData>
                    </Grid>
                }
            </Grid> 
            : null}
        </>
    )
})

export default BusinessData;
