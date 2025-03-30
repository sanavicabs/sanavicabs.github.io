import React, { useState } from 'react';
import { TextField, Button, Grid, Container, Paper, Box, Typography } from '@mui/material';
import { LocationOn, Phone, Email } from '@mui/icons-material';
import '../styles/Contact.css';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <Box className="contact-section" sx={{ py: 6, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mb: 6, fontWeight: 'bold', color: '#1a237e' }}>
          Get In Touch
        </Typography>
        
        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" sx={{ mb: 3, color: '#1a237e' }}>
                Contact Information
              </Typography>
              
              <Box sx={{ display: 'flex', mb: 2, alignItems: 'center' }}>
                <LocationOn sx={{ mr: 2, color: '#1a237e' }} />
                <Typography>
                sanavi cabs 862, 31st B Cross Rd, 4th T Block East, Tilak Nagar, Jayanagar,Bengaluru, Karnataka 560041
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', mb: 2, alignItems: 'center' }}>
                <Phone sx={{ mr: 2, color: '#1a237e' }} />
                <Typography>
                +91-9620482855
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', mb: 2, alignItems: 'center' }}>
                <Email sx={{ mr: 2, color: '#1a237e' }} />
                <Typography>
                sanavicabska1346@gmail.com
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Name"
                      variant="outlined"
                      fullWidth
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      size="large"
                      type="submit"
                      sx={{
                        mt: 2,
                        backgroundColor: '#1a237e',
                        '&:hover': {
                          backgroundColor: '#000051',
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>

          {/* Google Maps */}
          <Grid item xs={12}>
            <Paper elevation={3}>
              <Box sx={{ height: '400px', width: '100%' }}>            
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.693402033475!2d77.59359177489216!3d12.927416687383968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150042598fcb%3A0x9263f08a3be149a1!2ssanavi%20cabs!5e0!3m2!1sen!2sin!4v1736185299710!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
