import {
    makeStyles,
} from '@material-ui/core';

export const useStyles = makeStyles(() => ({
    root: {
        color: '#ffffff'
    },
    appbar: {
        backgroundColor: '#000000',
        display: 'flex',
        color: '#ffffff'
    },
    toolbar: {
        minHeight: 50,
        padding: 10
    },
    queryField: {
        borderRadius: 5,
        backgroundColor: '#585858',
    },
    input: {
        '&::placeholder': {
            color: '#ffffff',
            fontSize:20,
            fontWeigh: 'bold'
        },
        color: '#ffffff',
        fontSize:20,
        fontWeigh: 'bold'
    },
    searchButton: {
        marginLeft: 10,
        height: 55
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginLeft: 50,
        marginTop: 10
    },
    form: {
        width: '100%'
    }
}));