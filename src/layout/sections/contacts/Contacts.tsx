import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";

export const Contacts = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contacts</SectionTitle>
      <StyledForm>
        <Field type="text" placeholder="Name"/>
        <Field type="email" placeholder="Email"/>
        <Field as={"textarea"} placeholder="Message" />
        <FormButton type="submit">Submit</FormButton>
      </StyledForm>
    </StyledContacts>
  );
};

const StyledContacts = styled.section``;

const StyledForm = styled.form`
  max-width: 532px;
  width: 100%;
  display: flex;  
  flex-direction: column;
`;

const Field = styled.input``;

const FormButton = styled.button``;
