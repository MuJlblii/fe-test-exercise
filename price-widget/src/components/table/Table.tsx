import { PriceData } from '../../App';

type Props = { data: PriceData[][] };

function Table({ data }: Props) {
  const randomNumber = (function (min = 1, max = 50) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  })();
  return (
    <>
      <table>
        <tbody>
          {data.length > 0 && (
            <tr>
              <td>{data[randomNumber][0].asset}</td>
              <td>{data[randomNumber][0].price}</td>
            </tr>
          )}
          {data.length > 0 && (
            <tr>
              <td>{data[randomNumber][1].asset}</td>
              <td>{data[randomNumber][1].price}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default Table;
