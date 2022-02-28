import { IconAnchor } from './anchor';
import { BsInstagram, BsFacebook } from "react-icons/bs";

export const Instagram = () => {
  return (
    <IconAnchor href="https://www.instagram.com/baked_goodes/">
      <BsInstagram/>
    </IconAnchor>
  )
}

export const Facebook = () => {
  return (
    <IconAnchor href="https://www.facebook.com/claire.goode.3">
      <BsFacebook/>
    </IconAnchor>
  )
}
