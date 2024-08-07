/*import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Sidebar from "../components/Admin/sidebar";
import Navbar from "../components/Admin/Navbar";
import {Button} from '@mui/material';

export default function InputAdornments() {
 
  const [formData, setFormData] = useState({
    title: '',
    begin: '',
    money: '',
    title_sub: '',
    status: '',
    zone: '',
    email:'',
    src:'',
    des_service_sub: '',
    seance_sub: '',
    coordonnées: '',
  });

 
const [nearestField, setNearestField] = React.useState('');

const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'title') {
setFormData({ ...formData, [name]: value, type:value });
} else {
    setFormData({ ...formData, [name]: value });
    }
  };
 
const handleSubmit = () => {
    if (isFormValid()) {
      axios.post('http://localhost:5000/api/formdata', formData)
        .then((response) => {
          console.log('Request successful:', response.data);
        })
        .catch((error) => {
          console.error('Request failed:', error);
        });
    } else {
      alert(`Please fill in the fields.`);
    }
  };

  const isFormValid = () => {
    const requiredFields = ['title', 'begin', 'money', 'title_sub', 'status', 'zone', 'email', 'src', 'des_service_sub', 'seance_sub', 'coordonnées'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        return false;
      }
    }
    return true;
  };
 
  return (
   <>
			<Navbar />
			<Box height={70} />
			<Box sx={{ display: 'flex' }}>
			<Sidebar />
			<Box component="" sx={{ flexGrow: 1, p: 3 }}>
			<div>
			<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
			 <div>
			 <TextField
			 name="title"
			 label="Title"
			 fullWidth
			 value={formData.title}
			 onChange={handleChange}
			 required
			 sx={{ m: 1, width: '25ch' }}
			/>
			<TextField
			 name="begin"
			 label="Begin"
			 fullWidth
			 value={formData.begin}
			 onChange={handleChange}
			 required
			 sx={{ m: 1, width: '25ch' }}
			/>
			<TextField
			 name="title_sub"
			 label="title_sub"
			 fullWidth
			 value={formData.title_sub}
			 onChange={handleChange}
			 required
			 sx={{ m: 1, width: '25ch' }}
			/>

			<FormControl  sx={{ m: 1 }}>
			 <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
			 <OutlinedInput
			id="outlined-adornment-amount"
			startAdornment={<InputAdornment position="start">fcfa</InputAdornment>}
			name="money"
			 label="money"
			 fullWidth
			 value={formData.money}
			 onChange={handleChange}
			 required
			 />
			  <FormHelperText id="filled-weight-helper-text">Sum to be paid</FormHelperText>
			</FormControl>
			 </div>
			 <div>
			<TextField
			 id="filled-start-adornment"
			 sx={{ m: 1, width: '25ch' }}
				 name="status"
			 label="status"
			 value={formData.status}
			 onChange={handleChange}
			 required
			 placeholder="status"
			 variant="filled"
			/>
			<FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
			 <FilledInput
			id="filled-adornment-weight"
			name="zone"
			 label="zone"
			 value={formData.zone}
			 onChange={handleChange}
			 required
			 placeholder="Zone"
			aria-describedby="filled-weight-helper-text"

			 />
			 <FormHelperText id="filled-weight-helper-text">location of activity</FormHelperText>
			</FormControl>
			<FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
			 <FilledInput
			id="filled-adornment-weight"
			name="email"
			 label="Set in email"
			 value={formData.email}
			 onChange={handleChange}
			 required
			 placeholder="email"
			aria-describedby="filled-weight-helper-text"

			 />
			</FormControl>

			<FormControl fullWidth sx={{ m: 1 }} variant="filled">
			 <InputLabel htmlFor="filled-adornment-amount">Description text</InputLabel>
			 <FilledInput
				name="des_service_sub"
			 label="Set in description text"
			 value={formData.des_service_sub}
			 onChange={handleChange}
			 required
			id="filled-adornment-amount"
			startAdornment={<InputAdornment position="start">-></InputAdornment>}
			 />
			</FormControl>
			 </div>
			 <div>

			<FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
			 <Input
			id="standard-adornment-weight"
			aria-describedby="standard-weight-helper-text"
			name="coordonnées"
			placeholder="set in contact to be reached"
			label="Set in coordinates"
			value={formData.coordonnées}
			onChange={handleChange}
			required

			 />
			 <FormHelperText id="standard-weight-helper-text">contact to be reached</FormHelperText>
			</FormControl>
			
			<FormControl fullWidth sx={{ m: 1 }} variant="standard">
			 <Input
			name="seance_sub"
			 label="Seance text"
			 value={formData.seance_sub}
			 onChange={handleChange}
			 required
			 placeholder="set in seance descriptions"
			 />
			</FormControl>
			<Button variant="contained" color="primary" onClick={handleSubmit}>
			 Submit
			</Button>
			 </div>
			</Box>
			</div>
			</Box>
			</Box>
      </>
  );
}
*/

import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Sidebar from "../components/Admin/sidebar";
import Navbar from "../components/Admin/Navbar";
import { Button } from '@mui/material';

export default function InputAdornments() {
  const [formData, setFormData] = useState({
    title: '',
    begin: '',
    money: '',
    title_sub: '',
    status: '',
    zone: '',
    email: '',
    src: '', // Store the selected image
    des_service_sub: '',
    seance_sub: '',
    coordonnées: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle the selection of an image file
   const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, src: file });
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      const formDataToSend = new FormData();

      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      axios
        .post('http://localhost:5000/api/formdata', formData)
        .then((response) => {
          console.log('Request successful:', response.data);
          console.log(formData);
        })
        .catch((error) => {
          console.error('Request failed:', error);
        });
    } else {
      alert(`Please fill in the fields.`);
    }
  };

  const isFormValid = () => {
    const requiredFields = [
      'title',
      'begin',
      'money',
      'title_sub',
      'status',
      'zone',
      'email',
      'src',
      'des_service_sub',
      'seance_sub',
      'coordonnées',
    ];
    for (const field of requiredFields) {
      if (!formData[field]) {
        return false;
      }
    }
    return true;
  };

  return (
    <>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="" sx={{ flexGrow: 1, p: 3 }}>
          <div>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              <div>
                <TextField
                  name="title"
                  label="Title"
                  fullWidth
                  value={formData.title}
                  onChange={handleChange}
                  required
                  sx={{ m: 1, width: '25ch' }}
                />
                <TextField
                  name="begin"
                  label="Begin"
                  fullWidth
                  value={formData.begin}
                  onChange={handleChange}
                  required
                  sx={{ m: 1, width: '25ch' }}
                />
                <TextField
                  name="title_sub"
                  label="title_sub"
                  fullWidth
                  value={formData.title_sub}
                  onChange={handleChange}
                  required
                  sx={{ m: 1, width: '25ch' }}
                />
                <FormControl sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">fcfa</InputAdornment>}
                    name="money"
                    label="money"
                    fullWidth
                    value={formData.money}
                    onChange={handleChange}
                    required
                  />
                  <FormHelperText id="filled-weight-helper-text">Sum to be paid</FormHelperText>
                </FormControl>
              </div>
              <div>
                <TextField
                  id="filled-start-adornment"
                  sx={{ m: 1, width: '25ch' }}
                  name="status"
                  label="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                  placeholder="status"
                  variant="filled"
                />
                <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                  <FilledInput
                    id="filled-adornment-weight"
                    name="zone"
                    label="zone"
                    value={formData.zone}
                    onChange={handleChange}
                    required
                    placeholder="Zone"
                    aria-describedby="filled-weight-helper-text"
                  />
                  <FormHelperText id="filled-weight-helper-text">location of activity</FormHelperText>
                </FormControl>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                  <FilledInput
                    id="filled-adornment-weight"
                    name="email"
                    label="Set in email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="email"
                    aria-describedby="filled-weight-helper-text"
                  />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                  <InputLabel htmlFor="filled-adornment-amount">Description text</InputLabel>
                  <FilledInput
                    name="des_service_sub"
                    label="Set in description text"
                    value={formData.des_service_sub}
                    onChange={handleChange}
                    required
                    id="filled-adornment-amount"
                    startAdornment={<InputAdornment position="start"></InputAdornment>}
                  />
                </FormControl>
              </div>
              <div>
                <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
                  <Input
                    id="standard-adornment-weight"
                    aria-describedby="standard-weight-helper-text"
                    name="coordonnées"
                    placeholder="set in contact to be reached"
                    label="Set in coordinates"
                    value={formData.coordonnées}
                    onChange={handleChange}
                    required
                  />
                  <FormHelperText id="standard-weight-helper-text">contact to be reached</FormHelperText>
                </FormControl>
                 <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  id="image-input"
                />
                <label htmlFor="image-input">
                  <Button variant="contained" color="primary" component="span">
                    Select Image
                  </Button>
                </label>
                {formData.src && (
                  <img src={URL.createObjectURL(formData.src)} alt="Selected Image" />
                )}
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
			 <Input
			name="seance_sub"
			 label="Seance text"
			 value={formData.seance_sub}
			 onChange={handleChange}
			 required
			 placeholder="set in seance descriptions"
			 />
			</FormControl>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
            </Box>
          </div>
        </Box>
      </Box>
    </>
  );
}

