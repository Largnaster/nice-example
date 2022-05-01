import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'

const CardItem = ({cardItem, ...props}) => {
  return (
    <Card
      sx={{
        height: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          pt: "5%",
        }}
        image={`/static/${cardItem.name}_image.png`}
        alt={cardItem.name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {cardItem.name.toUpperCase()}
        </Typography>
        <Typography>
          {cardItem.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={cardItem.link} target="_blank" rel="noopener">
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;
