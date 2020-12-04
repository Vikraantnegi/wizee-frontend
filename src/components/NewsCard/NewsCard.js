import {React} from 'react';
import '../../components/CardsContainer/CardsContainer.css';
import { CardMedia, CardActionArea, CardActions, CardContent, Card} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 300,
    },
    media: {
      height: 150,
    },
});

const NewsCard = ({key, src, title, text, date}) =>{
    const classes = useStyles();
    return(
        <Card key={key} className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media} image={src} title={title} />
                <CardContent>
                    <p className="card-date">{date}</p>
                    <h4 className="h4 card-head">[N]{title}</h4>
                    <h6 className="h6 card-desc">{text}</h6>
                </CardContent>
            </CardActionArea>
            <CardActions style={{marginLeft: 10}}>
                <a className="card-button" href="/" >Share!</a>
                <a className="card-button" href="/" >Learn More!</a>
            </CardActions>
        </Card>
    )
}

export default NewsCard;
