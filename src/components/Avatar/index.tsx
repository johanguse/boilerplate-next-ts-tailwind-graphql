import { Character } from 'graphql/generated/graphql'
import Image from 'next/image'

export type AvatarProps = Pick<Character, 'name' | 'image'>

const placeholderImage =
  'https://rickandmortyapi.com/api/character/avatar/19.jpeg'

const placeholderName = 'Rick and Morty Character'

const Avatar = ({ name, image }: AvatarProps) => (
  <div>
    <Image
      src={image || placeholderImage}
      width={300}
      height={300}
      alt={name || placeholderName}
    />
    <div>{name || placeholderName}</div>
  </div>
)

export default Avatar
