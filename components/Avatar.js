import Image from 'next/image'

export default function Avatar({ image }) {
  return (
    <div class="relative h-80 w-80">
      <Image
        className="rounded-full m-auto"
        src={image}
        alt="Image of Sean OReilly"
        priority={true}
        objectFit="cover"
        layout="fill"
      />
    </div>
  )
}
