import React from 'react';
import {
    Grid,
    Box,
    Typography,
    Link
} from '@material-ui/core';
import { useStyles } from './list.style';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { RepoResponse } from '../../models/reposResponse';

const RepoList = () => {
    const classes = useStyles();
    const repositories = useSelector((state: RootState) => state.repoReducer.repos);

    return (
        <Box
            mr={20}
            ml={20}
            mt={5}
        >
            <Grid
                className={classes.root}
                container
                justify="space-between"
                spacing={4}
            > 
                { repositories && repositories.map((repo: RepoResponse, i: number) => (
                    <Grid item
                        lg={4}
                        md={6}
                        sm={12}
                        key={i}
                    >
                        <Link
                            href={repo.repoLink}
                            className={classes.link}
                        >
                            <Box
                                className={classes.repoCard}
                            >
                            
                                <Typography
                                    variant="h5"
                                >
                                    {repo.repoName}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className={classes.subtitle}
                                >
                                    {repo.totalStargazers} Stargazers &ensp; {repo.totalWatchers} People Watching
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className={classes.body}
                                >
                                    {repo.description}
                                </Typography>
           
                            </Box>
                        </Link>
                    </Grid>
                ))
                }
            </Grid>
        </Box>
    );
};

export default RepoList;