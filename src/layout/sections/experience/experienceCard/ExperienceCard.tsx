import { FlexWrapper } from "../../../../components/FlexWrapper";
import { S } from "../Expirience_Styles";

type ExperienceCardPropsType = {
  institution: string;
  position: string;
  period: string;
  certificateTitle: string;
  details: string;
};
export const ExperienceCard = ({
  institution,
  position,
  period,
  certificateTitle,
  details,
}: ExperienceCardPropsType) => {
  return (
    <S.ExperienceCard>
      <FlexWrapper justify="space-between">
        <S.Header>
          <S.Institution>{institution}</S.Institution>
          <FlexWrapper gap="20px">
            <S.Position>{position}</S.Position>
            <S.Period>{period}</S.Period>
          </FlexWrapper>
        </S.Header>
        <div>
          <S.CertificateTitle>{certificateTitle}</S.CertificateTitle>
          <S.Details>{details}</S.Details>
        </div>
      </FlexWrapper>
    </S.ExperienceCard>
  );
};
