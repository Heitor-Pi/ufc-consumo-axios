import { useState, useEffect } from "react";
import { api } from "../services/api";

export function useFighters() {
  const [fighters, setFighters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFighters() {
      try {
        setLoading(true);
        const response = await api.get("/rankings");

        const lista = [];
        const grupos = response.data.rankings.filter(
          (grupo) => !grupo.name.includes("Pound for Pound")
        );

        grupos.forEach((grupo) => {
          const categoria = grupo.name.split(" Division")[0];

          grupo.ranks.forEach((item) => {
            const atleta = item.athlete;
            const jaExiste = lista.some((lutador) => lutador.id === atleta.id);

            if (!jaExiste) {
              lista.push({
                id: atleta.id,
                name: atleta.displayName,
                division: categoria,
                record: item.recordSummary,
                photo: atleta.headshot,
                country: atleta.citizenshipCountry,
              });
            }
          });
        });

        setFighters(lista);
      } catch {
        setError("Erro ao carregar os dados dos lutadores do UFC.");
      } finally {
        setLoading(false);
      }
    }

    fetchFighters();
  }, []);

  return { fighters, loading, error };
}
