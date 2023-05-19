import * as React from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

export default function HoverRating({rating, setRating}) {
    const [hover, setHover] = React.useState(-1);

    return (
            <Rating
                name="hover-feedback"
                value={rating}
                precision={0.5}
                onChange={(event, newValue) => {
                    setRating(newValue);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
        
    );
}
