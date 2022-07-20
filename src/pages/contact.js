import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import styled from "styled-components"

const Container = styled.div`
  display: flex;
  max-width: 1080px;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2em 0;
  @media screen and (max-width: 576px) {
    padding: 0 1em;
  }
`

const ContentContainer = styled.div``

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`

const Form = styled.form`
  display: grid;
  column-gap: 1em;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
    width: inherit;
  }
`

const Heading = styled.h1`
  font-size: 2em;
  line-height: 1.2em;
  color: var(--text-dark);
`

const Paragraph = styled.p`
  line-height: 1.8em;
  padding: 2em 0;
  color: var(--text-gray);
`

const Email = styled.p`
  color: var(--text-dark);
  font-weight: bold;
`
const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const FieldProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column-start: 1;
  grid-column-end: 3;
  @media screen and (max-width: 576px) {
    grid-column-start: 1;
    grid-column-end: 1;
  }
`

const Label = styled.span`
  padding: 1em 0;
  font-weight: bold;
  font-size: 1;
  color: var(--text-dark);
`

const FormLeft = styled.div``

const FormRight = styled.div``

const InputField = styled.input`
  height: 3em;
  width: 100%;
  border-radius: 5px;
  outline: none;
  padding-left: 1em;
  border-bottom-width: 2px;
  font-size: 1em;
  border: 1px solid var(--text-gray);
  transition: all 0.3s ease;

  :focus {
    border-color: #9b59b6;
  }
`

const InputProjectField = styled.textarea`
  grid-column-start: 1;
  grid-column-end: 3;
  width: 100%;
  resize: none;
  height: 6em;

  border-radius: 5px;
  outline: none;
  padding-top: 1em;
  padding-left: 1em;
  border-bottom-width: 2px;
  font-size: 1em;
  border: 1px solid var(--text-gray);
  transition: all 0.3s ease;

  :focus {
    border-color: #9b59b6;
  }

  @media screen and (max-width: 576px) {
    grid-column-start: 1;
    grid-column-end: 1;
  }
`

const Button = styled.button`
  margin: 1em 0;
  outline: none;
  width: 100%;
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 3;
  border: none;
  background: var(--bg-gradient-indigo);
  cursor: pointer;
  border-radius: 50px;
  font-family: var(--font-poppins);
  font-weight: bold;
  box-shadow: var(--box-shadow);
  color: white;
  transition: 0.4s linear;

  :hover {
    transform: translateY(-5px);
  }
  @media screen and (max-width: 576px) {
    grid-column-start: 1;
    grid-column-end: 1;
  }
`

const Dropdown = styled.select`
  height: 3em;
  width: 100%;
  border-radius: 5px;
  outline: none;
  padding-left: 1em;
  border-bottom-width: 2px;
  font-size: 1em;
  border: 1px solid var(--text-gray);
  transition: all 0.3s ease;

  :focus {
    border-color: #9b59b6;
  }
`
const DropdownItem = styled.option``

const ContactPage = () => (
  <Layout>
    <Seo title="Contact Us" />
    <Container>
      <ContentContainer>
        <Heading>Contact Us</Heading>
        <Paragraph>
          We would be happy to hear from you, <br /> please fill in the form or
          mail us your requirements on
        </Paragraph>
        <Email>info@apmsoftware.co.in</Email>
      </ContentContainer>
      <FormContainer>
        <Form
          action="https://getform.io/f/5554d5e4-b178-4538-901a-00c45a852dc8"
          method="POST"
        >
          <FormLeft>
            <FieldContainer>
              <Label>Your Name*</Label>
              <InputField type="text" name="name" required />
            </FieldContainer>
            <FieldContainer>
              <Label>Your Email Address*</Label>
              <InputField type="email" name="email" required />
            </FieldContainer>
            <FieldContainer>
              <Label>Contact Number</Label>
              <InputField type="text" max="10" name="contact" />
            </FieldContainer>
            <FieldContainer>
              <Label>Location</Label>
              <InputField type="text" name="location" />
            </FieldContainer>
          </FormLeft>
          <FormRight>
            <FieldContainer>
              <Label>Name of Your Organization</Label>
              <InputField type="text" name="company" />
            </FieldContainer>
            <FieldContainer>
              <Label>Website</Label>
              <InputField type="url" name="website" />
            </FieldContainer>
            <FieldContainer>
              <Label>Approximate budget</Label>
              <Dropdown name="budget">
                <DropdownItem value="25K to 50K">$25K to $50K</DropdownItem>
                <DropdownItem value="50K to 200K">$50K to 200K</DropdownItem>
                <DropdownItem value="200K to 500K">$200K to 500K</DropdownItem>
                <DropdownItem value="500K +">$500K +</DropdownItem>
                <DropdownItem value="Not Sure">Not Sure</DropdownItem>
              </Dropdown>
            </FieldContainer>
            <FieldContainer>
              <Label>Services Options</Label>
              <Dropdown name="service">
                <DropdownItem value="Custom AR">Custom AR</DropdownItem>
                <DropdownItem value="Custom VR">Custom VR</DropdownItem>
                <DropdownItem value="3D Modeling">3D Modeling</DropdownItem>
                <DropdownItem value="AR Showroom">AR Showroom</DropdownItem>
                <DropdownItem value="AR Marketing Campaigns">
                  AR Marketing Campaigns
                </DropdownItem>
                <DropdownItem value="Other">Other</DropdownItem>
              </Dropdown>
            </FieldContainer>
          </FormRight>
          <FieldProjectContainer>
            <Label>Project Synopsis*</Label>
            <InputProjectField name="project description" required />
          </FieldProjectContainer>
          <Button type="submit">Submit</Button>
          <Label>Please fill all the required fields</Label>
        </Form>
      </FormContainer>
    </Container>
  </Layout>
)

export default ContactPage
