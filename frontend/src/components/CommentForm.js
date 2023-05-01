import { useState } from 'react';
import TextField from '@mui/material/TextField';
import HoverRating from './Rating';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';

function CommentForm() {
    const [text, setText] = useState("");
    const [rating, setRating] = useState(0);

    const handleComment = () => {
        console.log(text);
        console.log(rating);
    }

    return (
        <>
            <TextField
                id="outlined-multiline-static"
                label="Comment"
                multiline
                fullWidth
                rows={4}
                defaultValue={text}
                onChange={(e) => { setText(e.target.value) }}
            />
            <Box sx={{ bgcolor: '#f5f5f5', padding: '16px' }}>
                <Grid container alignItems="center">
                    <Grid item xs={6}>
                        <HoverRating rating={rating} setRating={setRating} />
                    </Grid>
                    <Grid item xs={6} textAlign="right">
                        <Button variant="contained"
                            endIcon={<SendIcon />}
                            onClick={handleComment}>
                            Comment
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default CommentForm;