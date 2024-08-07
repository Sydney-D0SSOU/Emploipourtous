import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import { Grid } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Sidebar from "../components/Admin/sidebar";
import { Box } from "@mui/material";
import Navbar from "../components/Admin/Navbar";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import user from './valide.jpg';

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name) {
  const initials = name.split(' ').map((part) => part[0]).join('');

  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: initials,
  };
}

function getRandUserImage() {
  const gojo = './gojo.jpg';
const goku = './goku.jpg'
const naruto ='./naruto.jpg' ;
const toka = './toka.jpg';

	
	const userImage = [gojo, goku, naruto, toka];
	const randomIdenx= Math.floor(Math.random() * userImage.length);
	return userImage[randomIdenx];
}

function Media(props) {
  const { loading = false, user } = props;
  const {entreprise, sujet, validation_message, detail_requete  } = user;
  const name = `${entreprise} `;
  const randomUserIamge = getRandUserImage();
 
  return (
   <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton animation="wave" variant="circular" width={40} height={40} />
          ) : (
           <Avatar {...stringAvatar(name)} />
          )
        }
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            `${entreprise}`
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            validation_message
          )
        }
      />
      {loading ? (
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      ) : (
        <CardMedia
          component="img"
          height="140"
          image= {randomUserIamge}
          alt="User"
        />
      )}

      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <Typography variant="body2" color="text.secondary" component="p">
            {detail_requete }
          </Typography>
        )}
      </CardContent>
    </Card>
    </Grid>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object, 
};

export default function SubValidation() {
  const [userData, setUserData] = React.useState([]);
  const [loadingUsers, setLoadingUsers] = React.useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  
  React.useEffect(() => {
	  
	   /*if (!token) {
      navigate('/Login');
      return;
    }*/ 
    
    axios.get('http://localhost:5000/api/validatedusers2') 
      .then((response) => {
        setUserData(response.data);
        setLoadingUsers(false);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [navigate, token]);

  return (
    <>
          <div>
          {loadingUsers ? (
            <Grid container spacing={2} className="row">
              {[1, 2, 3].map((index) => (
                <Media key={index} loading={true} user={{}} />
              ))}
            </Grid>
          ) : (
            userData.reduce((rows, user, index) => {
              if (index % 3 === 0) {
                rows.push([]);
              }
              rows[rows.length - 1].push(user);
              return rows;
            }, []).map((row, rowIndex) => (
              <Grid container spacing={2} className="row" key={rowIndex}>
                {row.map((user, userIndex) => (
                  <Media key={userIndex} loading={false} user={user} />
                ))}
              </Grid>
            ))
          )}
        </div>
    </>
  );
}
