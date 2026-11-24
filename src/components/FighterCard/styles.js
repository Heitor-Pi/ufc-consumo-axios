import styled from "styled-components";

export const CardArticle = styled.article`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.card};
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  box-shadow: ${({ theme }) => theme.boxShadow.card};
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const PhotoWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.photoBackground};
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  width: 100px;
  height: 100px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing.sm} 0;
`;

export const FighterPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

export const Record = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin: ${({ theme }) => theme.spacing.xs} 0;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Division = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

export const Country = styled.span`
  margin-top: 0.25rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
`;
