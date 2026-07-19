import { validarCampos } from "../../src/services/validation.js";

const dados = {
  nome: "Missao Apolo 11",
  crew: "4",
  spacecraft: "nave astro",
  destinations: "Marte, Saturno e Venus",
  status: "Em Preparo",
  durations: "2 anos",
};

describe("validarCampos", () => {
  test("não deve lançar erro quando os dados são válidos", async () => {
    // caso: dados válidos
    await expect(validarCampos(dados)).resolves.toBeUndefined();
  });

  test("deve lançar erro quando à um campo obrigatorio ausente", async () => {
    // caso: campo obrigatório ausente
    const {crew, ...dadosSemCrew} = dados;//remove o campo crew da copia do objeto de dados

    await expect(validarCampos(dadosSemCrew)).rejects.toThrow();
  });

  test("deve lançar erro quando crew não é um numero válido", async () => {
    // caso: crew não é um número válido
    const dadosInvalidos = { ...dados, crew: 0};

    await expect(validarCampos(dadosInvalidos)).rejects.toThrow();
  });

  test("deve lançar erro quando crew é um número negativo", async () => {
    // caso: crew é número, mas <= 0
    const dadosInvalidos = { ...dados, crew: "-5"};

    await expect(validarCampos(dadosInvalidos)).rejects.toThrow();
  });
});
