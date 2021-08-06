import Image from 'next/image'

export default function Avatar({ image }) {
  return (
    <Image
      className="rounded-full m-auto"
      src={image}
      alt="Image of Sean OReilly"
      height={150}
      width={150}
      priority={true}
      objectFit="cover"
    />
  )
}
