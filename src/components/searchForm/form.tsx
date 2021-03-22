import React, { useState } from 'react';
import {
    Grid,
    TextField,
    Button,
    AppBar,
    Toolbar,
    InputAdornment,
    SvgIcon,
    Box
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { getRepolist } from '../../services/getRepos';
import { useStyles } from './form.style';
import { useDispatch } from 'react-redux';


const SearchForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');

    const handleSearch = async (e: any) => {
        e.preventDefault();
        dispatch({type: 'RESET', payload: ''});
        dispatch({type: 'SET_SEARCH_TEXT', payload: searchText});

        const res = await getRepolist(searchText, 'stars');
        if(res) {
            dispatch({type: 'SET_REPOS', payload: res});
        }
    };

    return (
        <div className={classes.root}>
            <AppBar
                className={classes.appbar}
                position="sticky"
            >
                <Toolbar className={classes.toolbar}>
                    <form
                        className={classes.form}
                    >
                        <Grid
                            container
                            spacing={2}
                        >
                            <Grid
                                item
                                lg={4}
                                md={4}
                                sm={12}
                            >
                                <Box
                                    className={classes.title}
                                >
                                  Github Repo Lister
                                </Box>
               
                            </Grid>
                            <Grid
                                item
                                lg={6}
                                sm={12}
                            >
                                <TextField
                                    className={classes.queryField}
                                    InputProps={{
                                        classes: { input: classes.input},
                                        startAdornment: (
                                            <InputAdornment position='start'>
                                                <SvgIcon
                                                    color='action'
                                                >
                                                    <SearchIcon />
                                                </SvgIcon>
                                            </InputAdornment>
                                        )
                                    }}
                                    onChange={(e) => setSearchText(e.target.value)}
                                    placeholder='Search Users/Orgs'
                                    value={searchText}
                                    variant='outlined'
                                />
                                <Button
                                    color='default'
                                    className={classes.searchButton}
                                    onClick={handleSearch}
                                    type='submit'
                                    variant='contained'
                                >
                                    Search
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default SearchForm;