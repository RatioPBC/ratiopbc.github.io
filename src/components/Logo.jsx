import Image from 'next/image'
import ratioIcon from '@/images/logos/ratio.svg'


export function Logo(props) {
  return (
    <Image src={ratioIcon} alt="Ratio PBC logo" {...props}/>
  )
}
