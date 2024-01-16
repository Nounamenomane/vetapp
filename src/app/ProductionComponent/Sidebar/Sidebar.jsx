import React from 'react'
import styles from './Sidebar.module.scss'
import Link from 'next/link'

function Sidebar({ onSidebarItemClick }) {
    return (
        <div className={styles.sidebar}>
            <div className={styles.item1}>
                <Link onClick={() => onSidebarItemClick('Ветеренарные препараты')} href='/Production'>
                    Ветеринарные препараты
                </Link>
                <div className={styles.menu}>
                    <Link onClick={() => onSidebarItemClick('Акушерско-гинекологические препараты')} href='/Production'>Акушерско-гинекологические препараты</Link>
                    <Link onClick={() => onSidebarItemClick('Антибактериальные препараты')} href='/Production'>Антибактериальные препараты</Link>
                    <Link onClick={() => onSidebarItemClick('Нестероидные противовоспалительные средства')} href='/Production'>Нестероидные противовоспалительные средства</Link>
                    <Link onClick={() => onSidebarItemClick('Препараты для профилактики и лечения заболеваний вымени')} href='/Production'>Препараты для профилактики и лечения заболеваний вымени</Link>
                    <Link onClick={() => onSidebarItemClick('Препараты для профилактики и лечения нарушений обмена веществ')} href='/Production'>Препараты для профилактики и лечения нарушений обмена веществ</Link>
                    <Link onClick={() => onSidebarItemClick('Противопаразитарные противопротозойные препараты')} href='/Production'>Противопаразитарные противопротозойные препараты</Link>
                    <Link onClick={() => onSidebarItemClick('Прочие препараты')} href='/Production'>Прочие препараты</Link>
                    <Link onClick={() => onSidebarItemClick('Средства для наружного применения')} href='/Production'>Средства для наружного применения</Link>
                </div>
            </div>   <div className={styles.item1}>
                <Link onClick={() => onSidebarItemClick('Кормовые добавки и комбикорма')} href='/Production'>
                    Кормовые добавки и
                    комбикорма
                </Link>
                <div className={styles.menu}>
                    <Link onClick={() => onSidebarItemClick('Белково-витаминно-минеральные добавки')} href='/Production'>Белково-витаминно-минеральные добавки</Link>
                    <Link onClick={() => onSidebarItemClick('Брикет-лизунец')} href='/Production'>Брикет-лизунец</Link>
                    <Link onClick={() => onSidebarItemClick('Витаминно-минеральные добавки')} href='/Production'>Витаминно-минеральные добавки</Link>
                    <Link onClick={() => onSidebarItemClick('Гепатопротектор')} href='/Production'>Гепатопротектор</Link>
                    <Link onClick={() => onSidebarItemClick('Заменители цельного молока')} href='/Production'>Заменители цельного молока</Link>
                    <Link onClick={() => onSidebarItemClick('Комбикорма')} href='/Production'>Комбикорма</Link>
                    <Link onClick={() => onSidebarItemClick('Лизунцы мелассированные')} href='/Production'>Лизунцы мелассированные</Link>
                    <Link onClick={() => onSidebarItemClick('Подкислитель/дезинфектант')} href='/Production'>Подкислитель/дезинфектант</Link>
                    <Link onClick={() => onSidebarItemClick('Премиксы')} href='/Production'>Премиксы</Link>
                    <Link onClick={() => onSidebarItemClick('Прикормки рыболовные')} href='/Production'>Прикормки рыболовные</Link>
                    <Link onClick={() => onSidebarItemClick('Раскислитель кормов (буфер)')} href='/Production'>Раскислитель кормов (буфер)</Link>
                    <Link onClick={() => onSidebarItemClick('Энергетические добавки')} href='/Production'>Энергетические добавки</Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar