import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    paper: {
        padding: '5px',
        margin: '5px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100px',
        minHeight:"130px",
        textAlign: 'center'
    },
    mapContainer: {
        height: '85vh',
        width: '100%',
    },
    markerContainer: {
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
        '&:hover': { zIndex: 2 },
    },
    pointer: {
        cursor: 'pointer',
    },
}));
