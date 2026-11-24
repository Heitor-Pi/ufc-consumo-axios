import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FighterCard } from "./components/FighterCard";
import { useFighters } from "./hooks/useFighters";
import * as S from "./AppStyles";

export function App() {
  const { fighters, loading, error } = useFighters();
  const [busca, setBusca] = useState("");

  const lutadoresFiltrados = fighters.filter((fighter) =>
    fighter.name.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <S.PageWrapper>
      <Header />

      <S.MainContent>
        {loading && (
          <S.StatusMessage>Carregando lutadores! Aguarde...</S.StatusMessage>
        )}

        {error && <S.StatusMessage>{error}</S.StatusMessage>}

        {!loading && !error && (
          <>
            <S.SearchInput
              type="text"
              placeholder="Buscar lutador pelo nome..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />

            {lutadoresFiltrados.length === 0 ? (
              <S.StatusMessage>Nenhum lutador encontrado.</S.StatusMessage>
            ) : (
              <S.FightersGrid>
                {lutadoresFiltrados.map((fighter) => (
                  <FighterCard key={fighter.id} fighter={fighter} />
                ))}
              </S.FightersGrid>
            )}
          </>
        )}
      </S.MainContent>

      <Footer />
    </S.PageWrapper>
  );
}
