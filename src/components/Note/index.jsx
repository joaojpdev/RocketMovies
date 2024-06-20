import { FiStar } from 'react-icons/fi';
import { FaStar } from "react-icons/fa"

import { Container } from './styles';

import {Tag} from '../Tag';

export function Note({ data, ...rest }) {
  return(
    <Container {...rest} >
      <h1> {data.title} </h1>
      
      <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FiStar />
      </div>

      <p> {data.text} </p>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  )
}