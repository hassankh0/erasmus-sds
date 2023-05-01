import * as React from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels= {
    0: 0,
    0.5: 10,
    1: 20,
    1.5: 30,
    2: 40,
    2.5: 50,
    3: 60,
    3.5: 70,
    4: 80,
    4.5: 90,
    5: 100,
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function HoverRating({rating, setRating}) {
    const [hover, setHover] = React.useState(-1);

    return (
            <Rating
                name="hover-feedback"
                value={rating}
                precision={0.5}
                getLabelText={getLabelText}
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
