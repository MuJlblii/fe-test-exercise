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
          {data[randomNumber].map((el, index) => {
            return (
              <tr key={index}>
                <td>{el.asset}</td>
                <td>{el.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
