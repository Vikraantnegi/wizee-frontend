import {React, useState} from 'react';
import '../../components/CardsContainer/CardsContainer.css';
import { CardMedia, CardActionArea, CardActions, CardContent, Card} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {BsHeart, BsHeartFill} from 'react-icons/bs';

const useStyles = makeStyles({
    root: {
      maxWidth: 250,
    },
    media: {
      height: 150,
    },
});

const BlogCard = ({key, src, title, text, date, author}) =>{
    const [toggle, settoggle] = useState(false);
    const handleClick = () => {
        settoggle(!toggle);
    }
    const classes = useStyles();
    return(
        <Card key={key} className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media} image={src} title={title} />
                <CardContent>
                    <p className="card-date">{date}, By {author}</p>
                    <h4 className="h4 card-head">[B]{title}</h4>
                    <h6 className="h6 card-desc">{text}</h6>
                </CardContent>
            </CardActionArea>
            <CardActions style={{marginLeft: 10}}>
            <a className="card-button" href="/" >Visit!</a>
            <a className="card-button heart" onClick = {handleClick}>
                {toggle ? <BsHeartFill /> : <BsHeart />}
            </a>
            </CardActions>
        </Card>
    )
}

export default BlogCard;
