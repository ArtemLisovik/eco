import schedule from 'assets/img/schedule.png'

import './CallSchedule.scss'
import { motion } from 'framer-motion'
import { textAnimation } from 'config/animation'

export const CallSchedule = () => {
  return (
    <motion.div
      className="call-schedule"
      initial='hidden'
      whileInView='visible'
      variants={textAnimation}
      custom={0.3}
      viewport={{ amount: 0.2, once: true }}>
      <div className="block-primary__mixed">
        <img src={schedule} alt="schedule" className="block-primary__icon" />
        <p className="block-primary__bold">Open Office Hours - каждый вторник в 18:00 МСК/3 pm UTC
        </p>
      </div>

      <p className="block-primary__text">
        в голосовом канале Office Hours Voice с участием Dave | Eco#2900, на созвоне можно обсудить все что касается коммьюнити: любые идеи, предложения, ивенты, онбординг, роли и т.п. Все вопросы и обсуждения в канале 🤝community-office-hours
      </p>
    </motion.div>
  )
}
