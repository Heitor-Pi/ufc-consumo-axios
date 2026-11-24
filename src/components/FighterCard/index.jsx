import * as S from "./styles";

export function FighterCard({ fighter }) {
  const { name, division, record, photo, country } = fighter;

  return (
    <S.CardArticle>
      <h3>{name}</h3>

      <S.PhotoWrapper>
        <S.FighterPhoto src={photo} alt={`Foto de ${name}`} />
      </S.PhotoWrapper>

      <S.Record>{record}</S.Record>

      <S.Division>{division}</S.Division>
      <S.Country>{country}</S.Country>
    </S.CardArticle>
  );
}
