import { SecondaryLayout } from "layouts/SecondaryLayout"

import community from 'assets/img/community.png'
import { A, H3, Heading, Li, Paragraph } from "ui"
import { ImgBig } from "ui/ImgBig/ImgBig"
import { Helmet } from "react-helmet"
import { useEffect } from "react"

export const CommunityManagment = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Helmet>
                <title>Community governance</title>
                <meta name="description" content="Eco" />
                <meta name="keywords" content="eco, crypto" />
            </Helmet>
            <SecondaryLayout>
                <section className="block-primary">
                    <Heading title='Community governance'>
                        Краткое изложение управления ЕСО-сообществом
                    </Heading>
                    <Paragraph>
                        Eco v1.0 реализована на Ethereum mainnet. Вся система работает по стандартному временному циклу продолжительностью примерно 14 дней (или эквивалентному блокчейну). Каждый из этих циклов представляет собой "поколение" системы, где снимки баланса позволяют использовать определенные механизмы голосования с взвешиванием долей. .
                    </Paragraph>
                    <Paragraph>
                        Пользователи EСО - как ECO, так и держатели ECOx - могут предлагать обновление или изменение практически каждой функции в базовых контрактах системы. Общим термином для этого является управление сообществом.
                    </Paragraph>
                    <Paragraph>
                        Управление сообществом происходит в соответствии со сроками генерации системы и разбито на три фазы:
                    </Paragraph>

                    <ul className="block-primary__list">
                        <Li>
                            фаза подачи предложения на <A link="https://forums.eco.org/">Форуме</A>;
                        </Li>
                        <Li>
                            фаза предложения/поддержки;
                        </Li>
                        <Li>
                            фаза голосование.
                        </Li>
                    </ul>

                    <ImgBig src={community} />


                    <H3>Фаза подачи предложений на Форуме </H3>
                    <Paragraph>Фаза подачи предложения на <A link='https://forums.eco.org/'>Форуме</A> - первоначально участник, размещают свое предложение на форуме. Форум используется для мягкого консенсуса и обратной связи по предложению перед вступлением в фазу поддержки.</Paragraph>
                    <Paragraph>
                        Процесс подачи предложения должен проходить следующим образом:
                    </Paragraph>
                    <ul className="block-primary__list">
                        <Li>
                            Разместите предложение на <A link='https://forums.eco.org/'>Форуме</A> в категории "Protocol Discussion & Ideas" с заголовком, начинающимся с [PROPOSAL].
                        </Li>
                        <Li>
                            Примите участие в созвоне сообщества для обсуждения предложения - согласуйте это заранее с #Dave | Eco#2900.
                        </Li>
                        <Li>
                            Отвечайте на вопросы/комментарии и собирайте положительный консенсус сообщества.
                        </Li>
                        <Li>
                            Опубликуйте предложение в сети минимум за 24 часа до окончания цикла предложений, чтобы дать Ассоциации достаточно времени для организации голосования. (Обязательно удалите тег [PROPOSAL] из сообщения на цепочке. Модератор Эко Ассоциации переместит предложение в категорию "Предложения текущего цикла управления".
                        </Li>
                    </ul>
                    <Paragraph>
                        После этапа голосования успешные предложения будут помечены [EGP #X] и перемещены в окончательную категорию "Предложения по экоуправлению" [EGP's]. Неудачные предложения будут возвращены в категорию "Обсуждение протокола и идеи".
                    </Paragraph>


                    <H3>
                        Фаза предложения/поддержки
                    </H3>
                    <Paragraph>

                        В течение первых 10 дней генерации любой держатель ECO может подать предложение разместив его на <A link='https://governance.eco.org/'>https://governance.eco.org/</A>;
                        подача требует уплаты пошлины в размере 10 000 ЕСО. (В случае если предложение вынесено на голосование и не наберет поддержку - вы сможете забрать только половину токенов). После подачи предложения остаются открытыми для рассмотрения всеми держателями токенов, которые могут поддержать предложения. Поскольку право голоса основано на хранении баланса, поддержка предложения не требует блокировки средств в контракте на голосование. Поддержка может быть отозвана пользователем в любое время или перемещена в другое предложение. Чтобы инициировать активное голосование, предложение должно получить значительный уровень поддержки, при этом начальный порог, предлагаемый в размере 15% от общего числа голосов в текущем поколении моментальных снимков. Если ни одно предложение не получит достаточной поддержки до окончания генерации, открытые предложения могут быть поданы повторно или иным образом помещены в архив.
                    </Paragraph>

                    <H3>Фаза голосования.</H3>
                    <Paragraph>Голосование начинается сразу после того, как предложение удовлетворяет порог поддержки, и остается открытым до 72 часов (или до конца генерации, в зависимости от того, что наступит раньше). Для участия в голосовании нужно застейкать токены ECOx на сайте <A link='https://governance.eco.org/'>https://governance.eco.org/</A>, вкладка "My Account". Обратите внимание: после размещения своих ECOx, вам нужно будет подождать до следующего цикла, чтобы проголосовать им.
                        Держатели ECO и держатели ECOx, могут открыто голосовать за или против предложения, пока период голосования остается открытым. Если предложение одобрено большинством всех потенциальных голосов (в текущем поколении), предложение вступает в силу немедленно; если предложение по обновлению одобрено большинством участвующих голосов, но менее чем большинством всех потенциальных голосов, оно вступает в силу после 24-часовой задержки. </Paragraph>
                    <H3>Как рассчитать силу голоса</H3>
                    <Paragraph>Каждая единица ECOx имеет один голос, а общее количество голосов ECO равно общему количеству голосов ECOx при запуске сети, умноженному на cоотношение предложения ECO на самом последнем моментальном снимке баланса к предложению ECO при запуске сети. Если ECO является инфляционным по предложению (как из-за политики, так и из-за преобразования ECOx), со временем кумулятивная сила голоса ECO увеличивается по сравнению с ECOx</Paragraph>
                    <H3>Делегирование</H3>

                    <Paragraph>
                        Если нет возможности/желания участвовать в голосованиях - можно делегировать Voting Power ваших токенов (вы делегируете только право голоса, ваши токены остаются на кошельке).
                        Для этого на <A link='https://forums.eco.org/c/a-place-to-to-talk-about-becoming-a-delegate-in-eco/16'>форуме</A> нужно выбрать делегата, скопировать его ETH Address, затем на сайте <A link='https://governance.eco.org/'>https://governance.eco.org/</A> нужно подключить кошелек, во вкладке My Account нажать Manage delegation, вставить скопированный адрес, нажать Confirm.
                    </Paragraph>
                    <Paragraph>
                        Если хотите делегировать только Voting Power токенов ECOx или только Voting Power токенов ECO - в Manage Delegation нажмите advanced mode и веберите токены, силу голоса которых хотите делегировать. На данный момент можно делегировать только 100% Voting Power ECOx или ECO, частичной делегации нет.
                    </Paragraph>
                </section>
            </SecondaryLayout>
        </>
    )
}

