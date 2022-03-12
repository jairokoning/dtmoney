import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>13/03/2020</td>
          </tr>
          <tr>
            <td>Hospedagem</td>
            <td className="withdraw">-R$90,00</td>
            <td>Infra</td>
            <td>05/03/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}