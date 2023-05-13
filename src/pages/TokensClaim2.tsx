import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"

import { SecondaryLayout } from "layouts/SecondaryLayout"
import { A, H3, Heading, Li, Paragraph } from "ui"
import { useEffect } from "react"


export const TokensClaim2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <>
      <Helmet>
        <title>Клеймение токенов второй фазы</title>
        <meta name="description" content="Eco" />
        <meta name="keywords" content="eco, crypto" />
      </Helmet>
      <SecondaryLayout>
        <section className="block-primary">

          <Heading title='Клеймение токенов'>
            Клеймение токенов второй фазы
          </Heading>

          <Paragraph>
            В данном разделе описано как вы сможете забрать свои токены заработанные в первом сезоне. Обратите внимание, процесс клеймение токенов до лаунча ЕСО описан <Link to='/tokens-claim'>ТУТ</Link>
          </Paragraph>

          <Paragraph>
            Для клейма токенов обязательно необходимо наличие <Link to='/eco-id'>ECO ID</Link>
          </Paragraph>

          <H3>Официальный механизм получения вознаграждения $ECO для 1 сезона</H3>

          <Paragraph>

            dApp для подачи заявок.
          </Paragraph>

          <Paragraph>
            Пожалуйста, помните, что торопиться с заявлением не стоит. Вы сможете конвертировать вознаграждения одного или нескольких сезонов в любое время через dApp (так что если у вас сейчас небольшой баланс points и вы хотите накопить, вы можете это сделать!)
          </Paragraph>

          <Paragraph>
            Если вам нужна помощь, как всегда, обращайтесь к нам в канал 🆘support.
          </Paragraph>

          <H3>Решение для сообщества</H3>

          <Paragraph>
            Если кто-то хочет получить свои $ECO без газа и без транзакционных издержек через TenderWallet, существует процесс, позволяющий сделать это:
          </Paragraph>

          <ul className="block-primary__list">
            <Li>
              Зайдите на новый, созданный сообществом Marketplace Discord: <A link='https://discord.gg/N4wbxkfc'>https://discord.gg/N4wbxkfc</A>.
            </Li>
            <Li>
              Создайте новый TenderWallet, привязанный к вашему Discord ID. (Следуйте предоставленным инструкциям)
            </Li>
            <Li>
              Укажите на этом сервере, что вы хотите получать вознаграждения $ECO через TenderWallet.
            </Li>
          </ul>

          <Paragraph>
            Те, кто хочет получить свои $ECO награды таким образом, не смогут подать заявку через официальный dAPP.
          </Paragraph>

          <Paragraph>
            Крайний срок для участия в этом процессе - 15 апреля в 18:00 UTC.
            15 апреля @MikeWeb затребует все $ECO от имени участников, принявших участие в процессе.
            16 апреля он распределит заявленные вознаграждения.
          </Paragraph>

          <Paragraph>
            Это предложенное сообществом решение проблемы высоких транзакционных комиссий, связанных с требованиями, которые EСО не одобряет. Мы представляем этот вариант от имени членов сообщества, которые создали инструменты и платформы для стимулирования внедрения EСО в Web3.
          </Paragraph>

          <Paragraph>
            Как всегда, учитывайте риски, проводите собственные исследования и задавайте вопросы, если есть какие-либо сомнения.
          </Paragraph>
        </section>
      </SecondaryLayout>
    </>
  )
}
