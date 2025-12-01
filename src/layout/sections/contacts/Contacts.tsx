import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import React from "react";
import { S } from "./Contscts_Styles";

export const Contacts: React.FC = () => {
  return (
    <S.Contacts>
      <Container>
        <SectionTitle>Contacts</SectionTitle>
        <S.Form>
          <S.Label>
            Name
            <S.Field type="text" placeholder="Name" />
          </S.Label>
          <S.Label>
            Email
            <S.Field type="email" placeholder="Email" />
          </S.Label>
          <S.Label>
            Mensaje
            <S.Field as={"textarea"} placeholder="Hi, i will ..." />
          </S.Label>
          <S.FormButton type="submit">Submit</S.FormButton>
        </S.Form>
      </Container>
    </S.Contacts>
  );
};

