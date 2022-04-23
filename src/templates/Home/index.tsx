import Avatar from 'components/Avatar'
import { Character } from 'graphql/generated/graphql'

export type HomeProps = {
  characters?: Pick<Character, 'name' | 'image'>[]
}

const Home = ({ characters }: HomeProps) => (
  <div>
    <div>Rick and Morty Characters</div>

    <div>
      {characters?.map(({ name, image }) => (
        <Avatar key={name} name={name} image={image} />
      ))}
    </div>
  </div>
)

export default Home
