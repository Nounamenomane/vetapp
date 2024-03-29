import React from 'react'
import styles from './InfoProduction.module.scss'

function InfoProduction({ category }) {

    const content = {
        'Продукция': (
            <>
                <div>
                    <p>

                        Домашние животные подвержены риску заболеть не меньше, чем люди. И поэтому тоже нуждаются в лечении. Также они
                        нуждаются в улучшении здоровья и предупреждении различных заболеваний. Для этого существует множество препаратов
                        на рынке: <a href="/">витаминно-минеральные добавки</a>, кормовые комплексы и антибиотики для домашних животных.
                    </p>
                </div>
                <div>
                    <p>
                        Сейчас производство медицинских препаратов для животных активно развивается. Время, забота и инвестиции, вложенные
                        в исследования и разработку лекарств, обеспечивают постоянный поток инновационных продуктов, которые улучшают
                        здоровье и благополучие КРС.
                    </p>
                </div>
                <h2>О важности здоровья домашних животных</h2>
                <div>
                    <p>Исследования показывают, что здоровые животные являются важным фактором обеспечения качественной фермерской
                        продукции. Подобно препаратам для людей, лекарства для животных проходят лабораторные испытания и экспертизы и
                        должны быть одобрены госконтролем, прежде чем они поступят на рынок.</p>
                </div>
                <div>
                    <p><a href="/">Антибиотики</a> назначаются сельскохозяйственным животным, чтобы облегчить боли, помочь ему почувствовать себя лучше и
                        выздороветь. Антибиотики также можно давать животным для профилактики, чтобы предотвратить возникновение болезни
                        или инфекции.</p>
                </div>
                <div>
                    <p>Витаминные комплексы помогают скоту быстрее расти и развиваться. Эти лекарства используются в более низких
                        концентрациях, чем те, что предназначены для лечения болезней, и, как правило, включены в пищу коров, свиней и т.д.</p>
                </div>
                <div>
                    <p>
                        В Беларуси продажа ветеринарных препаратов для крупного рогатого скота также активно развивается, как и во всем мире.
                        Компания &laquo;Белека&raquo; занимается производством и распространением товаров для фермеров, в том числе они продают
                        витаминные комплексы и ветеринарные препараты оптом.
                    </p>
                </div>
                <h3>Где приобрести качественные лекарства?</h3>
                <div>
                    <p>
                        Завод &laquo;Белека&raquo; предлагает полный спектр ветеринарных препаратов по рецепту и без по конкурентоспособным ценам.
                        Также из преимуществ можно выделить:
                    </p>
                </div>
                <div className={styles.text}>
                    <b>-</b>
                    <p>Завод &laquo;Белека&raquo; предлагает полный спектр ветеринарных препаратов по рецепту и без по конкурентоспособным ценам.
                        Также из преимуществ можно выделить:</p>
                </div>
                <div className={styles.text}>
                    <b>-</b>
                    <p>Качественное и профессиональное обслуживание</p>
                </div>
                <div className={styles.text}>
                    <b>-</b>
                    <p>Иновационные ветеринарные препараты в Беларуси.</p>
                </div>
            </>
        ),
        'Ветеренарные препараты': (
            <>
                <div>
                    <p>
                        Как и люди, животные нуждаются в лечении. Ветеринарные препараты в основном используются для лечения или профилактики заболеваний или инфекций.
                    </p>
                </div>
                <div>
                    <p>
                        Исследования показывают, что здоровье сельскохозяйственных животных является важным фактором в качестве производимой ими продукции. Ветпрепараты, <a href="/">витаминные премиксы</a> и <a href="/">кормовые добавки</a> являются важнейшим звеном в цепи обеспечения безопасности пищевых продуктов для фермеров, поскольку они представляют
                        собой вспомогательные вещества для выращивания здорового КРС. Как и человеческие лекарства, препараты для животных проходят различные экспертизы и испытания и должны быть одобрены правительством РБ, прежде чем они выйдут на рынок.
                    </p>
                </div>
                <h2>Белорусские ветеринарные препараты</h2>
                <div>
                    <p>
                        Предприятие «Белэкотехника» производит ветеринарные препараты в РБ уже более 15 лет и сумело завоевать лидирующие позиции на рынке. В ассортимент продукции компании входят препараты:
                    </p>
                </div>
                <div className={styles.text}>
                    <b>-</b>
                    <p>Антибиотики</p>
                </div>
                <div className={styles.text}>
                    <b>-</b>
                    <p>Витаминные комплексы и минералы</p>
                </div>
                <div className={styles.text}>
                    <b>-</b>
                    <p>Гормональные</p>
                </div>
                <div className={styles.text}>
                    <b>-</b>
                    <p>Пищевые добавки</p>
                </div>
                <h3>Почему стоит покупать ветеринарные препараты компании &laquo;Белэкотехника&raquo;</h3>
                <div>
                    <p>Компания «Белека» нацелена на удовлетворение потребностей клиентов и стремится завоевать их доверие каждый день. Обратившись к ним, вы получите высочайшие стандарты качества, профессионализма и добросовестности. Вы можете быть уверены, что продукты и услуги компании помогут вашим коровам и другим домашним животным быть счастливыми, активными и сохранить здоровье, чтобы обеспечить безопасное, полезное и доступное питание.</p>
                </div>
                <div>
                    <p>У вас есть возможность купить ветеринарные препараты в Минске и во всей РБ по доступным ценам. На сайте компании beleka.by можно ознакомиться с каталогом всей продукции, а так же прочитать инструкции и описания к препаратам.</p>
                </div>
            </>
        ),
        'Кормовые добавки и комбикорма': (
            <>
                <div>
                    <p>Активные корма и кормовые добавки - ключевое решение для повседневного питания животных. Из-за роста потребности в высококачественной еде для КРС и высокой стоимости продукции возникли новые проблемы в скотоводстве.
                        Фермеры беспокоятся о том, чтобы животные хорошо росли и питались, при этом не используя в их рационе лекарства или антибиотики.
                        Благодаря комплексу витаминов и полезных веществ, <a href="/">активные минеральные добавки</a> попали в центр внимания ученых, диетологов и фермеров.</p>
                </div>
                <h2>Как работают активные ветеринарные добавки?</h2>
                <div>
                    <p>Вредные бактерии образуют пленку на слизистой оболочке кишечника животного, которая предотвращает всасывание белков, жиров, углеводов и минералов.
                        Из-за этого сухие кормовые смеси и <a href="/">ветеринарные препараты для сельскохозяйственных животных</a> теряют свою питательность.
                        Однако благодаря высокой концентрации питательных минералов активные добавки адсорбируют вредные микроорганизмы и удалять их из организма, не всасываясь в желудок и пищевод.</p>
                </div>
                <h3>Преимущества</h3>
                <div>
                    <p>В основе плюсов пищевых препаратов для КРС:</p>
                </div>
                <div className={styles.text}>
                    <b>-</b>
                    <p>Экономичность. За счет национального производства купить кормовые добавки в Минске можно легко и недорого.</p>
                </div> <div className={styles.text}>
                    <b>-</b>
                    <p>Широкий ассортимент. Благодаря разнообразию активных кормовых веществ можно подобрать рацион для свиней, коров, птицы и других сельскохозяйственных животных и даже для декоративных домашних животных.</p>
                </div> <div className={styles.text}>
                    <b>-</b>
                    <p>Эффективное воздействие. Благодаря применению ветеринарных активных веществ можно ускорить рост КРС, поддерживать их здоровье, а также увеличить производительность скота.</p>
                </div>
                <h2>Производство ветеринарных пищевых добавок в Беларуси</h2>
                <div>
                    <p>Компания Белека представляет продажу и производство ветеринарных кормов и кормовых добавок в Беларуси.
                        Сырьем для изготовления смесей обычно являются побочные продукты производства, которые содержат большое количество белка. За качеством сырья следит ветеринарный контроль и ученые. Производитель уже много лет сотрудничает с крупными иностранными поставщиками, что позволяет ему составлять высокую конкуренцию на рынке.
                        Благодаря налаженной дистрибьюторской сети, товары компании можно купить в любой точке РБ и за её пределами.</p>
                </div>
            </>
        )
    }

    return (
        <div className={styles.infoProduction}>
            {content[category]}
        </div>
    )
}

export default InfoProduction