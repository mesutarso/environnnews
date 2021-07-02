import React, { Component } from 'react';
import {
  FacebookShareCount,
  FacebookShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

import css from './buton_share.styled.scss'

interface IButton{
    shareUrl?: string,
    title?: string,
    id_share?: string
}

const Share: React.FC<IButton> = ({ shareUrl, title, id_share }) => {
    return (
      <div className={css.Demo_container} id={id_share}>
        <div className={css.Demo__some_network}>
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className={css.Demo__some_network__share_button}
          >
            <FacebookIcon size={42} />
          </FacebookShareButton>

          <div>
            <FacebookShareCount url={shareUrl} className="Demo__some-network__share-count">
              {count => count}
            </FacebookShareCount>
          </div>
        </div>

        <div className={css.Demo__some_network}>
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button"
          >
            <TwitterIcon size={42} />
          </TwitterShareButton>

          {/* <div className="Demo__some-network__share-count"></div> */}
        </div>

        <div className={css.Demo__some_network}>
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            separator=":: "
            className="Demo__some-network__share-button"
          >
            <WhatsappIcon size={42} />
          </WhatsappShareButton>
        </div>
        <div className={css.Demo__some_network}>
          <LinkedinShareButton url={shareUrl} className="Demo__some-network__share-button">
            <LinkedinIcon size={42}/>
          </LinkedinShareButton>
        </div>

      </div>
    );

}

export default Share;