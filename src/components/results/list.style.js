import {
    makeStyles,
} from '@material-ui/core';

export const useStyles = makeStyles(() => ({
    root: {
        color: '#000000',
        position: 'relative',
        top: 100,
        wordBreak: 'break-all',
    },
    toggle: {
        padding: 10,
    },
    repoCard: {
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        padding: 20,
        height: 200,
        minwidth: 400,
        borderRadius: 5,
    },
    subtitle: {
        color: '#B0B0B0',
        paddingBottom: 10
    },
    body: {
        color: '#808080',
        boxOrient: 'vertical',
        display: '-webkit-box',
        wordBreak: 'break-all',
        overflow: 'hidden',
        lineClamp: 5,
        
    },
    link: {
        color: '#000000',
        textDecoration: 'none',
        underline: 'none',
        '&:hover': {
            underline: 'none',
            textDecoration: 'none',
        }
    }, 
    error: {
        color: 'red'
    }
}));