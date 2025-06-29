//Create the Home UI for the BlogAPP(Cards are preferrred; You may choose your UI preference )
import { useEffect, useState } from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  CircularProgress,
} from '@mui/material';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const ViewProduct = () => {
  const [blogs, setBlog] = useState([]);
  var navigate = useNavigate();
  var location = useLocation();
  useEffect(() => {
      axios.get('http://localhost:3001/')
      .then((res) => {
        console.log(res.data)
        setBlog(res.data);
      })
      .catch((err) => console.log(err))
    },[])
    const delStu = (id) => {
      console.log(id);
      axios
      .delete(`http://localhost:3001/${id}`)
      .then((res) => {
        console.log(res);
        alert(res.data)
        window.location.reload()
      })
      .catch((err) => {
        console.log(err);
      });
    }
    const updStu = (val) => {
              console.log(val);
              navigate('/add',{state:{val}});
    }

  return (
    <Grid container spacing={3}>
      <br /><br /><br />
      {blogs.map(prod => (
        <Grid item key={prod._id || prod.id} xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              image={prod.img_url}
              sx={{ height: 200 }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" color='black'>
                {prod.title}
              </Typography><br />
              <Typography
                variant="body2"
                color='black'
              >
                {prod.content}
              </Typography><br />
            </CardContent>
            <CardActions>
              <Button
                      variant="contained"
                      color="error"
                      onClick = {() => {
                        delStu(prod._id);
                      }}
                    >
                      Delete
                    </Button>&nbsp;&nbsp;
                    <Button variant='contained' color='success' onClick={() =>{
                                updStu(prod);
                    }}>UPDATE</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ViewProduct;
