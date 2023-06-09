import { SecondaryLayout } from "layouts/SecondaryLayout"
import { useEffect } from "react"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import { A, H3, Heading, Li, Paragraph } from "ui"

export const MonetaryPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <>
     <Helmet>
        <title>Монетарная политика</title>
        <meta name="description" content="Eco" />
        <meta name="keywords" content="eco, crypto" />
      </Helmet>
    <SecondaryLayout>
      <section className="block-primary">

        <Heading title='Монетарная политика'>
          Актуальная информация по монетарной политике
        </Heading>

        <H3>С действующей монетарной политикой вы можете ознакомится <A link='https://discord.com/channels/768556386404794448/1064489555459317791'>ТУТ</A></H3>

        <Paragraph>
          Монетарная политика это процесс управления денежной массой и процентными ставками членами Попечительского совета с помощью поэтапного процесса голосования.
        </Paragraph>

        {/* <H3>
          Отчет о денежно-кредитной политике для ЕСО сообщества
        </H3> */}
        <Paragraph>
          Попечители ECO (<Link to='/discord-roles'>trusty</Link>) голосуют по вопросам монетарной политики один раз в эпоху. В течение первых 10 дней эпохи, члены Попечительского совета представляют и обсуждают предложения для следующего цикла монетарной политики. Предложение подаются только по одному от каждого члена Попечительского совета, и могут быть изменены или отозваны до конца 10-дневного периода подачи предложений. Каждое предложение должно быть оформлено в стандартном формате. В течение следующих 3 дней эпохи, после закрытия окна подачи предложений, Попечители независимо друг от друга голосуют по предложениям из списка. Члены Попечительского совета голосуют, используя систему ранжированного выбора, где предложениям присваиваются баллы на основании того, как они оцениваются в каждом рейтинге каждого кандидата. Баллы определяются количеством предложений и рейтингом, который каждый кандидат предоставляет; предложение набравшее наибольшее количество баллов побеждает. На следующий день - 14 день, последний день эпохи - новая денежная политика раскрывается и вступает в силу для следующего поколения, и время начинается заново с нового предложения и периодом мониторинга.
        </Paragraph>
        <Paragraph>
          В версии 1.0 у Попечителей есть три функции монетарной политики, по которым они могут голосовать:
        </Paragraph>
        <ul className="block-primary__list">
          <Li>
            Первая - это линейное изменение предложения, при котором все балансы ECO увеличиваются или уменьшаются при сохранении одинакового относительного количество ECO в каждом кошельке. Этот механизм позволяет регулировать количество циркулирующих токенов на пропорциональной основе, что сохраняет относительное богатство для всех держателей. Это функция пересчета с коэффициентом умножения, который может быть либо больше, либо меньше единицы, что позволяет Попечителям принимать как инфляционную, так и дефляционную политику. Когда проводится линейная политика предложения, новый масштабный коэффициент применяется к балансам индивидуальных кошельков по всей сети, эффективно "чеканя" или "сжигая" новые ECO на каждом кошельке.
          </Li>
          <Li>
            Вторая - случайная инфляция,  когда новое предложение ECO распределяется среди случайно выбранных ECO-адресов. Механизм случайной инфляции позволяет Попечителям распределять токены ECO по адресам на основе случайного выбора, чтобы создать нелинейный эффект богатства в экономике. Адресам выдаются криптографические "билеты" на основе алгоритма, который учитывает последний снимок баланса ECO и подтверждается на цепочке. Каждый выбранный адрес дает владельцу право на долю новых токенов.
          </Li>
          <Li>
            Третья - это процентные ставки, выплачиваемые через депозитные хранилища с определенным сроком действия. Любой держатель ECO может сделать перевод средств в хранилище для получения процентов. Однако, если пользователь решит снять средства до истечения указанного срока блокировки, налагается штраф, равный общей сумме процентов, которая в конечном итоге должна была бы быть выплачена пользователю в конце срока действия хранилища. Проценты выплачиваются за счет эмиссии новых поставок, а также из резервов системы.
          </Li>
        </ul>
        <Paragraph>
          Попечители могут выполнять любую из этих функций монетарной политики в сочетании друг с другом, по своему усмотрению, чтобы откалибровать систему в соответствии с их мандатом. Попечители получают компенсацию в виде токенов ECOx для каждого цикла политики в том случае, если они зарегистрируют голосование в этом цикле.
        </Paragraph>
      </section>
    </SecondaryLayout>
    </>
   
  )
}

