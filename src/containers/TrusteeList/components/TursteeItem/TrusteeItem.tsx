import { useState } from 'react'

import { Li, Modal } from 'ui'

import noAvatar from 'assets/img/noAvatar.png'

import './TrusteeItem.scss'
import { Trustee } from 'containers/TrusteeList/store/TrusteeSlice'


export const TrusteeItem = ({name, discord, info, linkedin, twitter, avatar}: Trustee) => {
  const [modalOpen, setModalOpen] = useState(false)

  const modalSwitcher = () => {
    setModalOpen(state => !state)
  }


  return (
    <Li>
      <div onClick={modalSwitcher} className="trustee__item">
        <div className="trustee__avatar">
          <img src={avatar ? avatar : noAvatar} alt="trustee photo" className="trustee__photo" />
        </div>
        <p className="trustee__name">{name}</p>
      </div>
      <Modal isOpen={modalOpen} modalSwitcher={modalSwitcher}>
        <p className="trustee__name">{name} <span className="trustee__discord">(discord {discord})</span></p>
        
        {linkedin && <a href={linkedin} target='_blank' className="trustee__link">{linkedin}</a>}
        {twitter && <a href={twitter} target='_blank' className="trustee__link">{twitter}</a>}
        <p className="block-primary__text">
          {info}
        </p>
      </Modal>
    </Li>
  )
}
