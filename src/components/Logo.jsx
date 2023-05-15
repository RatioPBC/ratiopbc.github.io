import Image from 'next/image'
import ratioIcon from '@/images/logos/ratioIcon.svg'


export function Logo(props) {
  return (
    <Image src={ratioIcon} alt="Ratio PBC logo" {...props}/>
  )
}
