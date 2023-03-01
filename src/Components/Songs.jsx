import React from 'react'
import { Title } from './Styled'

function Songs() {
  return (
    <div className="container">
      <Title padding='10px 0'>Trending Right Now:</Title>
      <div className="songs">
        <tbody>
          <tr>
            <th>#</th>
            <th>Name Song</th>
            <th>Artist</th>
            <th>Time</th>
          </tr>
          <tr>
            <td>01</td>
            <td>LWYMMD</td>
            <td>Taylor</td>
            <td>4:00</td>
          </tr>
          <tr>
            <td>02</td>
            <td>CIWYW</td>
            <td>Taylor</td>
            <td>4:00</td>
          </tr>
          <tr>
            <td>03</td>
            <td>IFTYE</td>
            <td>Taylor</td>
            <td>4:00</td>
          </tr>
          <tr>
            <td>04</td>
            <td>IFTYE</td>
            <td>Taylor</td>
            <td>4:00</td>
          </tr>
          <tr>
            <td>05</td>
            <td>IFTYE</td>
            <td>Taylor</td>
            <td>4:00</td>
          </tr>
          <tr>
            <td>06</td>
            <td>IFTYE</td>
            <td>Taylor</td>
            <td>4:00</td>
          </tr>
          <tr>
            <td>07</td>
            <td>IFTYE</td>
            <td>Taylor</td>
            <td>4:00</td>
          </tr>
        </tbody>
      </div>
    </div>
  );
}

export default Songs