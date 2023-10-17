import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css"
import {Form,Checkbox, Container,Button,Segment,Grid,Header,Image,Input, GridColumn, GridRow} from "semantic-ui-react"

class App extends Component{
  render(){
    return (
    <div style={{height:"100vh",width:"100vw"}}>
      <div style={{position:"relative",left:"15%",top:"20%"}}>
      <Container textAlign="center">
      <Grid >
      <Grid.Column width={8}>
      <Header as='h2' color="teal" textAlign="center">
    <Image src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' /> Member Login
  </Header>
      <Segment>
     
        <Form>
        <Form.Field>
        <Input icon='user' iconPosition='left' placeholder='Email Address' />
   </Form.Field>
   <Form.Field>
   <Input icon='lock' iconPosition='left' placeholder='Password' />
   </Form.Field>
   <Form.Field>
     <Checkbox label='I agree to the Terms and Conditions' />
   </Form.Field>
   <Button type='submit' fluid color="teal">Login</Button>
        </Form>
   
      </Segment>
   
      </Grid.Column>
      </Grid>
      <Grid>
        <GridRow>
        <GridColumn width={8}>
          <Segment>
        <p>Tidak Punya Akun ? Silahkan <a href="/">Register</a></p>
          </Segment>
         
        </GridColumn>
        </GridRow>
      </Grid>
      </Container>
      </div>

      
      </div>
  );
}
}

export default App;
