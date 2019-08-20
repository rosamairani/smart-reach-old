import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Icon, Typography, Button, ButtonBase } from '@material-ui/core';
import { PersonAdd, List, Assignment } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      overflow: 'hidden',
    },
    icons: {
            width: '60%!important',
            height: '90%!important',
            color: 'rgba(0, 0, 0, 0.54)'
    },
    format: {
      width: '100%',
      align: 'center'
    },
    // gridList: { 
    //   width: '100%',
    //   display: 'flex',
    //   flexWrap: 'wrap',
    //   justifyContent: 'space-evenly',
    //   overflow: 'hidden',
    //   // flexWrap: 'nowrap',
    //   // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    //   transform: 'translateZ(0)',
    // },
    gridList: { 
      width: '100%',
      display: 'flex',
      // flexWrap: 'wrap',
      // justifyContent: 'space-evenly',
      // overflow: 'hidden',
      // // flexWrap: 'nowrap',
      // // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      // transform: 'translateZ(0)',
    },
    gridListTile: {
        width: '20%!important'
    },
    title: {
      color: '#EC1E79',
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    image: {
      position: 'relative',
      height: 200,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }),
);

const tileData = [
    {
      img: 'person_add',
      title: 'Breakfast',
      author: 'jill111',
      cols: 2,
      featured: true,
    },
    {
      img: 'list',
      title: 'Tasty burger',
      author: 'director90',
    },
    {
      img: 'bullhorn',
      title: 'Camera',
      author: 'Danson67',
    },
  ];

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function Shortcuts() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.format} variant="h3" gutterBottom>Shortcuts</Typography>
      {/* <GridList className={classes.gridList} cols={3}>
        <GridListTile className={classes.gridListTile} >
          <Assignment  fontSize="inherit" className={classes.icons}></Assignment>
          <GridListTileBar
            title='Manage Campaigns'
            classes={{
              root: classes.titleBar,
              title: classes.title,
            }}
          />
        </GridListTile>
        <Button variant="contained" href="javascript(0)" className={classes.button}>
        Link

        <GridListTile className={classes.gridListTile} >
          <List className={classes.icons}></List>
          <GridListTileBar
            title='Create Lists'
            classes={{
              root: classes.titleBar,
              title: classes.title,
            }}
          />
        </GridListTile>
        </Button>
        <GridListTile className={classes.gridListTile}>
          <PersonAdd className={classes.icons}></PersonAdd>
          <GridListTileBar
            title='Add Users'
            classes={{
              root: classes.titleBar,
              title: classes.title,
            }}
          />
        </GridListTile>
    </GridList> */}
    <div className={classes.gridList}>
      
    <ButtonBase
          focusRipple
          key="Campaigns"
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          // style={{
          //   width: image.width,
          // }}
        >
          {/* <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          /> */}
          <Assignment  fontSize="inherit" className={classes.icons}></Assignment>
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              Manage Campaigns
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
        <ButtonBase
          focusRipple
          key="Lists"
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          // style={{
          //   width: image.width,
          // }}
        >
          {/* <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          /> */}
          <List className={classes.icons}></List>
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              Create Lists
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
        <ButtonBase
          focusRipple
          key="Users"
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          // style={{
          //   width: image.width,
          // }}
        >
          {/* <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          /> */}
          <PersonAdd className={classes.icons}></PersonAdd>
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              Add Users
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
    </div>
    </div>
  );
}