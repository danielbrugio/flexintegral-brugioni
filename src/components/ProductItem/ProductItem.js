import * as React from 'react';
//import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
//import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import MoreVertIcon from '@mui/icons-material/MoreVert';
import galaxy from '../assets/galaxy.png';

/* const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
})); */

export default function ProductItem() {
  /* const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }; */

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Galaxy A72"
        subheader="SM-A725MZKAARO"
      />
      <CardMedia
        component="img"
        height="220"
        image={galaxy}
        alt="Samsung Galaxy"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <ul>
              <li>Cámara 64MP HR con estabilizador de imagen</li>
              <li>Resistencia a agua y polvo IP67</li>
              <li>Batería de 2 días</li>
              <li>Infinity-O Display</li>
          </ul>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
        </CardContent>
      </Collapse> */}
    </Card>
  );
}

