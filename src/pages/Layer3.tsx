import AmaList from 'containers/AmaList/components/AmaList'
import { SecondaryLayout } from 'layouts/SecondaryLayout'
import React from 'react'
import { Helmet } from 'react-helmet'
import { H3, Heading, Li, Paragraph } from 'ui'

export const Layer3 = () => {
  return (
    <>
      <Helmet>
        <title>Layer3</title>
        <meta name="description" content="Eco" />
        <meta name="keywords" content="eco, crypto" />
      </Helmet>
      <SecondaryLayout>
        <section className="block-primary">

          <Heading title='Layer 3'>
            Основные цели и задачи
          </Heading>

          <Paragraph>
            Роль Layer 3 была присвоена активным членам Ecommunity, которые на протяжении длительного периода времени вносили свой вклад в развитие сообщества.
            Целью введения роли Layer 3 было сохранение, поощрение и создание механизмов поддержки развития общей культуры Ecommunity.
            Благодаря предоставлению участникам Layer 3 возможности разрабатывать и администрировать свои собственные структуры стимулирования и системы вознаграждений, путем достижения консенсуса, группа Layer 3 является первым шагом в создании децентрализованной системы управления Eco protocol.
          </Paragraph>

          <Paragraph>
            Основные задачи Layer 3:
          </Paragraph>

          <ul className='block-primary__list'>
            <Li>
              поддержание высокого уровня культуры Eco discord;
            </Li>

            <Li>
              организация структуры распределения points среди участников сообщества;
            </Li>


            <Li>
              организация активностей;
            </Li>

            <Li>
              участие в голосованиях;
            </Li>

            <Li>
              привлечение новых пользователей;
            </Li>

            <Li>
              ознакомление новых пользователей с Eco;
            </Li>

            <Li>
              вовлечение новых пользователей в инициативы сообщества;
            </Li>

            <Li>
              помощь в модерации сообщества;
            </Li>

            <Li>
              распространение информации о Eco в социальных сетях;
            </Li>

            <Li>
              создание игр и развлечений, поддерживающих дружескую атмосферу между участниками комьюнити;
            </Li>

            <Li>
              поощрение инициатив активных участников.
            </Li>

            <Li>
              Распределение points.
            </Li>
          </ul>

          <Paragraph>
            Layer 3 имеют возможность распределять бюджет, выделенный Eco Association для каждого нового сезона. Используя points (баллы, поступающие в качестве вознаграждения на индивидуальный баланс участников) для поощрения активности и укрепления социальных связей между членами сообщества.
          </Paragraph>
          <H3>Принятие решений</H3>
          <Paragraph>
            Все решения, касающиеся распределения бюджета в, а также структуры организации мероприятий в сообществе принимаются путем голосования.
            Перед запускам голосования о выделении бюджета для активности, участник Layer 3 подает предложение с полным описанием идеи, целей, сроков проведения и необходимого бюджета для реализации своего предложения.
            Также любой участник сообщества может предложить свою идею для проведения активности, воспользовавшись помощью участника Layer3.
            Важной частью является взаимодействие между участниками Layer1, Layer2 и Layer3.
            С помощью Consensus bot участники Layer 3 публикуют открытое голосование, которое проходит в течении 48 часов с момента публикации, указывая ссылку на описание своего предложения.  С принципом работы Consensus bot вы можете ознакомиться здесь.
          </Paragraph>
          <Paragraph>
            У каждого члена сообщества есть возможность получить роль Layer 3, будучи активным и участвуя в разработке проекта.
            Решение о присвоении участнику Ecommunity роли Layer 3 принимается на общем голосовании членов группы Layer 3.
            Кроме того, эта роль не является постоянной и может быть отозвана решением большинства
          </Paragraph>

        </section>
      </SecondaryLayout>
    </>

  )
}