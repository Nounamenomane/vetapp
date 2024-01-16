import React from 'react';
import styles from './Sidebar.module.scss';

function Sidebar({ onSidebarItemClick }) {
    const sidebarItems = [
        {
            label: 'Ветеренарные препараты',
            subItems: [
                'Акушерско-гинекологические препараты',
                'Антибактериальные препараты',
                'Нестероидные противовоспалительные средства',
                'Препараты для профилактики и лечения заболеваний вымени',
                'Препараты для профилактики и лечения нарушений обмена веществ',
                'Противопаразитарные противопротозойные препараты',
                'Прочие препараты',
                'Средства для наружного применения'
            ]
        },
        {
            label: 'Кормовые добавки и комбикорма',
            subItems: [
                'Белково-витаминно-минеральные добавки',
                'Брикет-лизунец',
                'Витаминно-минеральные добавки',
                'Гепатопротектор',
                'Заменители цельного молока',
                'Комбикорма',
                'Лизунцы мелассированные',
                'Подкислитель/дезинфектант',
                'Премиксы',
                'Прикормки рыболовные',
                'Раскислитель кормов (буфер)',
                'Энергетические добавки'
            ]
        }
    ];

    return (
        <div className={styles.sidebar}>
            {sidebarItems.map((item, index) => (
                <div key={index} className={styles.item1}>
                    <div
                        role="button"
                        tabIndex="0"
                        onClick={() => onSidebarItemClick(item.label)}
                    >
                        {item.label}
                    </div>
                    <div className={styles.menu}>
                        {item.subItems.map((subItem, subIndex) => (
                            <a key={subIndex} href='/Production' onClick={() => onSidebarItemClick(subItem)}>
                                {subItem}
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Sidebar;
