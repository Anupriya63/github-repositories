import React, { useEffect } from 'react';
import {
    Grid,
    Box,
    Typography
} from '@material-ui/core';
import { useStyles } from './header.style';
import { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { getRepolist } from '../../services/getRepos';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';



const Header = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [sortby, setSortOption] = React.useState('star');
    const searchText = useSelector((state: RootState) => state.searchReducer.searchText);

    const handleSortBy = (event: any) => {
        setSortOption(event.target.value);
    };

    useEffect(() => {
        const getRepo = async() => {
            const res = await getRepolist(searchText, sortby);
            dispatch({type: 'SET_REPOS', payload: res});
        };

        getRepo();
    }, [sortby]);

    return (
        <Box
            mr={20}
            ml={20}
        >
            <Grid
                className={classes.root}
                container
                justify="space-between"
                spacing={3}
            >
                <Grid item
                    lg={12}
                    sm={12}
                >
                    <Typography 
                        variant="h4">
                    Listing repositories for the user &quot;{searchText} &quot;:
                    </Typography>
                </Grid>
                <Grid item
                    lg={12}
                    sm={12}
                >
                    <div className={classes.toggle}>
                        <span>
                          Sort By &ensp;
                        </span>
                        <RadioGroup aria-label="sortBy" name="sortby" value={sortby} onChange={handleSortBy}>
                            <FormControlLabel value="full_name" control={<Radio />} label="Alphabetical" />
                            <FormControlLabel value="star" control={<Radio />} label="Stars" />
                        </RadioGroup>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Header;