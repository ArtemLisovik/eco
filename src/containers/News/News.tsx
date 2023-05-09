import coins from 'assets/img/coins.png'
import { motion } from 'framer-motion'

import { imageReveal } from 'config/animation'
import { Paragraph, Heading, Li } from 'ui'

import './News.scss'

import image from 'assets/img/mob.png'
import { H3 } from 'ui/H3/H3'
import { Link } from 'react-router-dom'

export const News = () => {
    
    return (
        <section
            className="news">
            <div className="news__container">
                <div className="news__block">
                    <div className="news__image">
                        <motion.div className="news__image-wrapper"
                            viewport={{ amount: 0.2, once: true }}
                            initial='hidden'
                            whileInView='visible'
                            variants={imageReveal}
                        >
                            <img
                                src={coins}
                                alt="news image" />
                        </motion.div>
                    </div>
                    <motion.div
                        className="news__info">
                        <Heading title='Welcome to Eco'>
                           Что такое Eco?
                        </Heading>
                    
                        <Paragraph>Eco - это децентрализованная валюта, позволяющая создать экономику нового типа, которая работает более прозрачно и в наших коллективных интересах.
                            Это сочетание чего-то старого - стремления создать лучшую валюту - и чего-то нового - технологии, позволяющей валютам самостоятельно управляться своими сообществами.
                        </Paragraph>
                        <Paragraph>Идея Eco основана на следующих предположениях:
                            При наличии более качественных экономических данных и более прозрачной структуры стимулов для управления, можно управлять и развивать резервную валюту, которая является цифровой и более четко соответствует коллективным интересам ее пользователей (нас).
                        </Paragraph>
                        <Paragraph>Проще говоря: <strong>ЕСО - это денежная игра, в которой мы действительно можем выиграть - вместе.</strong></Paragraph>
                    </motion.div>
                </div>
                <H3>В чем преимущество Eco?</H3>
                <Paragraph>
                ЕСО призвана отойти от двух преобладающих на сегодняшний день моделей цифровых валют Фиксированной (например, дефляционная модель эмиссии предложения Биткойна) или Гибкой, основанной на алгоритмах монетарной политики (как многие модели долларовых стейблкоинов). ЕСО идет по другому пути, используя программируемые денежные инструменты для создания криптовалют - прозрачной и ориентированной на стимулы системы для безграничной по своей сути цифровой валюты. 
                </Paragraph>
                <Paragraph>

ECO - это свободно плавающая цифровая валюта, предназначенная для использования в качестве средства обмена в первую очередь - а со временем и при достаточном распространении - в качестве все более подходящего хранилища стоимости. 
                </Paragraph>
                <Paragraph>
                ЕСО использует независимую денежную политику, основанную на управлении, чтобы реагировать на многие потенциальные состояния будущего. В то время как стратегии автоматизации (например, алгоритмическая политика) предопределяют, как валюта может реагировать на внешние силы, дискреционная стратегия ЕСО намеренно менее предсказуема, она стремится по-новому описать экономические реалии, используя другую систему. 
                </Paragraph>

                <Paragraph>ЕСО стремится использовать три преимущества, присущие криптовалютам по сравнению с фиатными валютами сегодня: </Paragraph>

                <motion.ul
                    className="news__list">
                    <Li>более качественные экономические данные в реальном времени о потоках и скорости платежей</Li>
                    <Li>более прозрачная и согласованная структура стимулов среди участников системы</Li>
                    <Li>более прямая связь между денежной политикой и конечными потребителями. (contd...)</Li>
                </motion.ul>
                <Paragraph>
                Сообщество, создающее и поддерживающее EСО, не похоже ни на какое другое. Это очень активная, вдохновляющая и целеустремленная группа, объединенная одной целью: способствовать внедрению ЕСО. От глубоких экономических дискуссий до творческого контента - вы найдете свое место в сообществе Eco.
                </Paragraph>

                <Paragraph>
                Валюта Eco, $ECO, управляется собственной денежной политикой, подобно фиатным валютам, которые мы используем каждый день. Но вместо далекого центрального банка, определяющего политику, это делает избранная группа пользователей EСО (называемая "попечителями/<Link to='/discord-roles'>trusty</Link>"), используя лучшие данные и лучшие инструменты, с более четкими стимулами.
                </Paragraph>


                <H3>EСО = DAO ?</H3>
                <Paragraph>
                Протокол Eco управляется и поддерживается сообществом людей, которые используют и держат $ECO и $ECOx. Он разработан как набор функций управления и валютной политики, которые, по нашему мнению, являются идеальным набором "инструментов", которые позволят сообществу вырастить $ECO в децентрализованную, не требующую разрешений, соответствующую стимулам валюту для Web3. В связи с этим мы предполагаем, что со временем в рамках протокола Eco может появиться множество различных DAO, организаций и структур.
                </Paragraph>




                
            </div>
        </section>
    )
}