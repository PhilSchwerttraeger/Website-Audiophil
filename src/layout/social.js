import React from 'react'

import socialStyles from './social.module.scss'

import fb from "../images/fb.png"
import tw from "../images/tw.png"
import ig from "../images/ig.png"
import yt from "../images/yt.png"

const socialmedia = [
  {
    name: "facebook",
    url: "https://www.facebook.com/pg/audiophil.musicproduction",
    icon: fb,
  },
  {
    name: "twitter",
    url: "https://twitter.com/audiophil_",
    icon: tw,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/flippazoid/",
    icon: ig,
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/channel/UCFXHUOqNlbU1AccXNPWju6A",
    icon: yt,
  },
]

export default function social() {
  return (
    <div className={socialStyles.container}>
      {socialmedia.map(social => {
        return (
          <a
            href={social.url}
            key={social.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={socialStyles.icon}
              src={social.icon}
              alt={social.name}
            ></img>
          </a>
        )
      })}
    </div>
  )
}
