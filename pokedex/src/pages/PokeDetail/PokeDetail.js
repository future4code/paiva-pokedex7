import GlobalStateContext from '../../global/GlobalStateContext'
import { useContext } from 'react'
import { useParams } from 'react-router';
import useRequestData from "../../hooks/useRequestData";
import BASE_URL from '../../parameters';

const PokeDetail = () => {
    const { states } = useContext(GlobalStateContext)

    const params = useParams();

    const getDetails = useRequestData(`${BASE_URL}/${params.name}`, undefined);

    if (getDetails !== 0 && states.loading === false) {
        return (
            <div>
                {getDetails && (
                    <div>
                        <img src={getDetails.sprites.front_default} alt='front' />
                        <img src={getDetails.sprites.back_default} alt='back' />
                    </div>
                )}

                <div>
                    <h2>Atributos</h2>
                    {getDetails &&
                        getDetails.stats.map((status) => {
                            return (
                                <tr key={status.stat.name}>
                                    <td>{status.stat.name}</td>
                                    <td>{status.base_stat}</td>
                                    <td>
                                        <meter 
                                        min="0" 
                                        max="160" 
                                        low="60" 
                                        high="100" 
                                        optimum="120" 
                                        value={status.base_stat}>
                                        </meter>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </div>
                <div>
                {getDetails && getDetails.types.map((type) => {
                  return (
                    <p key={type.type.name} type={type.type.name}>{type.type.name}</p>
                  )
                })
                }
                </div>
                <div>
                <table>
                <thead>
                  <tr>
                    <th>Level</th>
                    <th>Move</th>
                  </tr>
                </thead>
                <tbody>
                  {getDetails &&
                    getDetails.moves.sort((a, b) => {
                      return a.version_group_details[0].level_learned_at - b.version_group_details[0].level_learned_at;
                    })
                      .filter((move) => {
                        return move.version_group_details[0].move_learn_method.name === "level-up"
                      })
                      .map((move, num) => {
                        return num < 40 && <tr key={move.move.name}>
                          <td>{move.version_group_details[0].level_learned_at}</td>
                          <td>{move.move.name} </td>
                        </tr>;
                      })}
                </tbody>
              </table>
                </div>
            </div>

        );
    }
    else {
        return <div>Carregando...</div>
    }

};

export default PokeDetail;

